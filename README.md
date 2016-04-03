# canvas-video

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

draws video in canvas element using requestAnimationFrame

## Usage

[![NPM](https://nodei.co/npm/canvas-video.png)](https://www.npmjs.com/package/canvas-video)

`npm install canvas-video --save`

```javascript
import CanvasVideo from 'canvas-video'

const canvas = new CanvasVideo({
    video: document.querySelector('video'),
    canvas: document.querySelector('canvas')
})

canvas.resize()
canvas.play()
```

## methods

- `play`: start drawing video in canvas using requestAnimationFrame
- `pause`: cancelAnimationFrame
- `resize`: apply css styles (width, height) of `<video>` element to `<canvas>`

## License

MIT, see [LICENSE.md](http://github.com/BaptisteBriel/canvas-video/blob/master/LICENSE.md) for details.