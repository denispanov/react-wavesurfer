import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WaveSurfer from 'wavesurfer.js';
import PropTypes from 'prop-types';
import optionProperties from './WavesurferOptions';

/**
 * Waveform
 * @augments {Component<Props, State>}
 */
class Waveform extends Component {
  constructor(props) {
    super(props);
    this.id = uuidv4();
  }

  state = {
    duration: 0,
  };

  componentDidMount() {
    this.loadAudio();
  }

  componentWillUnmount() {
    this.waveSurfer.destroy();
  }

  componentDidUpdate = (prevProps) => {
    const { isPlaying, progress } = this.props;
    if (isPlaying !== prevProps.isPlaying) {
      if (isPlaying) {
        this.waveSurfer.play();
      } else {
        this.waveSurfer.pause();
      }
    }

    if (progress !== prevProps.progress) {
      const { duration } = this.state;
      this.waveSurfer.setCurrentTime(progress * duration);
    }
  };

  loadAudio = () => {
    const { url } = this.props;
    const options = this.generateOptionsObject();
    this.waveSurfer = WaveSurfer.create(options);

    if (url) {
      this.waveSurfer.load(url);
    }

    this.initializeEventHandlers();
  };

  initializeEventHandlers = () => {
    const {
      onReady,
      onPlay,
      onPause,
      onError,
      onFinished,
      onLoading,
    } = this.props;

    this.waveSurfer.on('ready', () => {
      const duration = this.waveSurfer.getDuration();
      this.setState({ duration });
      if (onReady) {
        onReady();
      }
    });

    if (onPlay) {
      this.waveSurfer.on('play', onPlay);
    }
    if (onPause) {
      this.waveSurfer.on('pause', onPause);
    }
    if (onLoading) {
      this.waveSurfer.on('loading', onLoading);
    }
    if (onError) {
      this.waveSurfer.on('error', onError);
    }
    if (onFinished) {
      this.waveSurfer.on('finished', onFinished);
    }
    this.waveSurfer.on('audioprocess', () => setTimeout(this.setProgress, 0));
    this.waveSurfer.on('interaction', () => setTimeout(this.setProgress, 0));
  };

  setProgress = () => {
    if ('progress' in this.props) {
      const { duration } = this.state;
      const currentTime = this.waveSurfer.getCurrentTime();
      const progress = currentTime / duration;

      const { onProgressChanged } = this.props;
      onProgressChanged(progress);
    }
  };

  generateOptionsObject = () => {
    const options = {
      container: `#waveform-${this.id}`,
    };
    Object.keys(optionProperties).forEach((property) => {
      if (property in this.props) {
        options[property] = this.props[property];
      }
    });
    return options;
  };

  render() {
    return <div id={`waveform-${this.id}`} className='waveform' />;
  }
}

Waveform.propTypes = {
  ...optionProperties,

  /** URL of the audio file you want to load. */
  url: PropTypes.string,

  /** Indicates if the audio file is currently being played. */
  isPlaying: PropTypes.bool,

  /** Current progress in % [0..100] . */
  progress: PropTypes.bool,

  /** Fires when progress has changed. */
  onProgressChanged: PropTypes.func,

  /** Fires when audio file is finished loading. */
  onReady: PropTypes.func,

  /** Occurs on error. Callback will receive (string) error message. */
  onError: PropTypes.func,

  /** Fires when audio starts playing. */
  onPlay: PropTypes.func,

  /** Fires when audio gets paused. */
  onPause: PropTypes.func,

  /** Fires when audio is finished playing. */
  onFinished: PropTypes.func,

  /** Fires continuously when loading using fetch or drag'n'drop. Callback will receive (integer) loading progress in % [0..100].
   * @param value {number} Number between 0 and 100
   */
  onLoading: PropTypes.func,
};

export default Waveform;
