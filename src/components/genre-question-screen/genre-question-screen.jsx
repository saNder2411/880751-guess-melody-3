import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../const.js';

export default class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: [false, false, false, false],
    };

    this._handleCheckboxChange = this._handleCheckboxChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleCheckboxChange(evt, i) {
    const value = evt.target.checked;

    this.setState({
      answers: [...this.state.answers.slice(0, i), value, ...this.state.answers.slice(i + 1)],
    });
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();

    this.props.onAnswer(this.props.question, this.state.answers);
  }

  render() {
    const {renderPlayer} = this.props;
    const {answers, genre} = this.props.question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={this._handleFormSubmit}
        >
          {answers.map((answer, i) => (
            <div key={`${i}-${answer.src}`} className="track">

              {renderPlayer(answer.src, i)}

              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`}
                  id={`answer-${i}`}
                  checked={this.state.answers[i]}
                  onChange={(evt) => {
                    this._handleCheckboxChange(evt, i);
                  }}
                />
                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

