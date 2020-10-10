/* eslint-disable no-irregular-whitespace */
import PropTypes from 'prop-types';

const options = {
  /** Speed at which to play audio. Lower number is slower. */
  audioRate: PropTypes.number,

  /** Use your own previously initialized AudioContext or leave blank. */
  audioContext: PropTypes.any,

  /** Use your own previously initialized ScriptProcessorNode or leave blank. */
  audioScriptProcessor: PropTypes.any,

  /** If a scrollbar is present, center the waveform around the progress. */
  autoCenter: PropTypes.bool,

  /** WebAudio, MediaElement or MediaElementWebAudio. MediaElement is a fallback for unsupported browsers. */
  backend: PropTypes.string,

  /** Change background color of the waveform container. */
  backgroundColor: PropTypes.string,

  /** The optional spacing between bars of the wave, if not provided will be calculated in legacy format. */
  barGap: PropTypes.number,

  /** Height of the waveform bars. Higher number than 1 will increase the waveform bar heights. */
  barHeight: PropTypes.number,

  /** Minimum height to draw a waveform bar. Default behavior is to not draw a bar during silence. */
  barMinHeight: PropTypes.number,

  /** The radius that makes bars rounded. */
  barRadius: PropTypes.number,

  /** If specified, the waveform will be drawn like this: ▁ ▂ ▇ ▃ ▅ ▂ */
  barWidth: PropTypes.number,

  /** Close and nullify all audio contexts when the destroy method is called. */
  closeAudioContext: PropTypes.bool,

  /** The fill color of the cursor indicating the playhead position. */
  cursorColor: PropTypes.string,

  /** Measured in pixels. */
  cursorWidth: PropTypes.number,

  /** Specify canvas 2d drawing context attributes. */
  drawingContextAttributes: PropTypes.object,

  /** Whether to fill the entire container or draw only according to minPxPerSec. */
  fillParent: PropTypes.bool,

  /** Force decoding of audio using web audio when zooming to get a more detailed waveform. */
  forceDecode: PropTypes.bool,

  /** The height of the waveform. Measured in pixels. */
  height: PropTypes.number,

  /** Whether to hide the horizontal scrollbar when one would normally be shown. */
  hideScrollbar: PropTypes.bool,

  /** Whether the mouse interaction will be enabled at initialization. You can switch this parameter at any time later on. */
  interact: PropTypes.bool,

  /** (Use with regions plugin) Enable looping of selected regions. */
  loopSelection: PropTypes.bool,

  /** Maximum width of a single canvas in pixels, excluding a small overlap (2 * pixelRatio, rounded up to the next even integer).
   *  If the waveform is longer than this value, additional canvases will be used to render the waveform,
   *  which is useful for very large waveforms that may be too wide for browsers to draw on a single canvas.
   *  This parameter is only applicable to the MultiCanvas renderer. */
  maxCanvasWidth: PropTypes.number,

  /** (Use with backend MediaElement) this enables the native controls for the media element. */
  mediaControls: PropTypes.bool,

  /** 'audio' or 'video'. Only used with backend MediaElement. */
  mediaType: PropTypes.string,

  /** Minimum number of pixels per second of audio. */
  minPxPerSec: PropTypes.number,

  /** If true, normalize by the maximum peak instead of 1.0. */
  normalize: PropTypes.bool,

  /** Use the PeakCache to improve rendering speed of large waveforms. */
  partialRender: PropTypes.bool,

  /** Can be set to 1 for faster rendering. */
  pixelRatio: PropTypes.number,

  /** An array of plugin definitions to register during instantiation.
   *  They will be directly initialised unless they are added with the deferInit property set to true. */
  plugins: PropTypes.array,

  /** The fill color of the part of the waveform behind the cursor. When progressColor and waveColor are the same the progress wave is not rendered at all. */
  progressColor: PropTypes.string,

  /** Default minLength for regions, in seconds. When creating a region, specifying the minLength parameter for that region will override this. */
  regionsMinLength: PropTypes.number,

  /** Set to false to keep the media element in the DOM when the player is destroyed. This is useful when reusing an existing media element via the loadMediaElement method. */
  removeMediaElementOnDestroy: PropTypes.bool,

  /** Can be used to inject a custom renderer. */
  renderer: PropTypes.object,

  /** If set to true resize the waveform, when the window is resized. This is debounced with a 100ms timeout by default. If this parameter is a number it represents that timeout. */
  responsive: PropTypes.bool,

  /** Whether to scroll the container with a lengthy waveform. Otherwise the waveform is shrunk to the container width (see fillParent). */
  scrollParent: PropTypes.bool,

  /** Number of seconds to skip with the skipForward() and skipBackward() methods. */
  skipLength: PropTypes.number,

  /** Render with seperate waveforms for the channels of the audio. */
  splitChannels: PropTypes.bool,

  /** The fill color of the waveform after the cursor. */
  waveColor: PropTypes.string,

  /** XHR options. For example: let xhr = { cache: 'default', mode: 'cors', method: 'GET', credentials: 'same-origin', redirect: 'follow', referrer: 'client', headers: [ { key: 'Authorization', value: 'my-token' } ]}; */
  xhr: PropTypes.object,
};

export default options;
