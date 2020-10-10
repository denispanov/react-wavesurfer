import React from 'react';
import Waveform from 'react-wavesurfer';

class App extends React.Component {
  state = {
    isPlaying: false,
    progress: 0,
    volume: 100,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ progress: 0.25 }), 5000);
  }

  render() {
    const { isPlaying, showWave, progress } = this.state;
    const url = 'https://loopplug-samples.s3.eu-central-1.amazonaws.com/sick+pop+smoke+type+beat.mp3';
    return (
      <div>
        <button onClick={this.onButtonClick}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={this.toggleShowWaveform}>{showWave ? 'Hide waveform' : 'Show waveform'}</button>
        <Waveform
          height={64}
          url={url}
          isPlaying={isPlaying}
          onReady={() => console.log('Is ready')}
          onPlay={() => console.log('Plays')}
          progress={progress}
          onProgressChanged={(newProgress) => this.setState({ progress: newProgress })}
        />
      </div>
    );
  }

  onButtonClick = () => {
    const { isPlaying } = this.state;
    this.setState({ isPlaying: !isPlaying });
  }
}

export default App;
