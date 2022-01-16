import { Lightning, Utils } from '@lightningjs/sdk'

export default class Components extends Lightning.Component {
  static _template() {
    return {
      Text: {
        mount: 0.5,
        x: 960,
        y: 720,
        text: {
          text: 'hello every one',
          fontFace: 'Regular',
          fontSize: 64,
          // textColor: 0xbbffffff,
          textColor: 0xbb000000,
        },
      },
    }
  }
}
