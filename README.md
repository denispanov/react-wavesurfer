# react-wavesurfer

> React wrapper for Wavesurfer.js

[![NPM](https://img.shields.io/npm/v/react-wavesurfer.svg)](https://www.npmjs.com/package/react-wavesurfer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-wavesurfer
```

## Usage

```jsx
import React, { Component } from 'react'
import Waveform from 'react-wavesurfer'

class Example extends Component {
   state = {
    isPlaying: false,
  }

  render() {
    const url = 'http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3';
    return (
      <Waveform
        height={64}
        url={url}
        isPlaying={isPlaying}
      />
    );
  }
}
```

## License

MIT © [denispanov](https://github.com/denispanov)
