import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import {GameType} from '../../const.js';
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player.jsx';

const WrappedGenreQuestionScreen = withAudioPlayer(GenreQuestionScreen);
const WrappedArtistQuestionScreen = withAudioPlayer(ArtistQuestionScreen);

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {step: -1};

    this._updatesState = this._updatesState.bind(this);
    this._handleWelcomeButtonClick = this._handleWelcomeButtonClick.bind(this);
  }

  _updatesState() {
    this.setState((prevState) => ({step: prevState.step + 1}));
  }

  _handleWelcomeButtonClick() {
    this.setState({
      step: 0,
    });
  }

  _renderGameScreen() {
    const {errorsCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={this._handleWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen type={question.type}>
              <WrappedArtistQuestionScreen question={question} onAnswer={this._updatesState} />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <WrappedGenreQuestionScreen question={question} onAnswer={this._updatesState} />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderGameScreen()}
          </Route>
          <Route exact path='/artist'>
            <WrappedArtistQuestionScreen question={questions[1]} onAnswer={() => {}} />
          </Route>
          <Route exact path='/genre'>
            <WrappedGenreQuestionScreen question={questions[0]} onAnswer={() => {}} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};
