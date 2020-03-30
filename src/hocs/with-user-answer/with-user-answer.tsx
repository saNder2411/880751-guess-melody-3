import * as React from 'react';
import {Subtract} from 'utility-types';
import {QuestionGenre} from '../../types';

type Answer = Array<boolean>;

type Props = {
  onAnswer: (question: QuestionGenre, answers: Answer) => void;
  question: QuestionGenre;
}

type State = {
  answers: Answer;
}

type InjectingProps = {
  userAnswers: Answer;
  onAnswer: (answerIndex: number) => void;
  onChange: () => void;
}

const withUserAnswer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectingProps>;

  class WithUserAnswer extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false),
      };

      this.handleAnswer = this.handleAnswer.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleAnswer() {
      const {onAnswer, question} = this.props;
      const {answers} = this.state;

      onAnswer(question, answers);
    }

    handleChange(i, value) {
      const {answers} = this.state;

      const userAnswers = answers.slice(0);
      userAnswers[i] = value;

      this.setState({
        answers: userAnswers,
      });
    }

    render() {
      const {answers} = this.state;

      return (
        <Component
          {...this.props}
          userAnswers={answers}
          onAnswer={this.handleAnswer}
          onChange={this.handleChange}
        />
      );
    }
  }

  return WithUserAnswer;
};

export default withUserAnswer;
