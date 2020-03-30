import * as React from 'react';
import {Subtract} from 'utility-types';
import Player from '../../components/audio-player/audio-player';
import withAudio from '../with-audio/with-audio';

type State = {
  activePlayerId: number;
}

type InjectingProps = {
  renderPlayer: (src: string, id: number) => React.ReactNode;
}

const AudioPlayer = withAudio(Player);

const withAudioPlayer = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>

  class WithAudioPlayer extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {activePlayerId: 0};
    }

    render() {
      const {activePlayerId} = this.state;

      return (
        <Component
          {...this.props}
          renderPlayer={(src: string, id: number): React.ReactNode => {
            return (
              <AudioPlayer
                src={src}
                isPlaying={id === activePlayerId}
                onPlayButtonClick={() => this.setState({activePlayerId: activePlayerId === id ? -1 : id})}
              />
            );
          }}
        />
      );
    }
  }

  return WithAudioPlayer;
};

export default withAudioPlayer;


