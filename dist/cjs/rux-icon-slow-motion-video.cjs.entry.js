'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.78998 2.23998C10.41 2.09998 11 2.58998 11 3.22998C11 3.68998 10.7 4.09998 10.26 4.19998C9.33998 4.39998 8.48998 4.75998 7.71998 5.24998C7.33998 5.48998 6.82998 5.40998 6.50998 5.08998C6.05998 4.63998 6.13998 3.87998 6.66998 3.53998C7.60998 2.93998 8.66998 2.49998 9.78998 2.23998ZM9.99998 15.5V8.49998C9.99998 8.08998 10.47 7.84998 10.8 8.09998L15.47 11.6C15.74 11.8 15.74 12.2 15.47 12.4L10.8 15.9C10.47 16.15 9.99998 15.91 9.99998 15.5ZM5.09998 6.50998C4.63998 6.05998 3.88998 6.12998 3.54998 6.66998C2.94998 7.60998 2.50998 8.66998 2.24998 9.78998C2.10998 10.41 2.58998 11 3.22998 11C3.67998 11 4.09998 10.7 4.18998 10.26C4.38998 9.34998 4.75998 8.48998 5.23998 7.72998C5.49998 7.33998 5.41998 6.82998 5.09998 6.50998ZM2.23998 14.21C2.09998 13.59 2.58998 13 3.22998 13C3.68998 13 4.09998 13.3 4.18998 13.75C4.38998 14.67 4.74998 15.52 5.23998 16.28C5.48998 16.66 5.40998 17.17 5.08998 17.49C4.63998 17.94 3.87998 17.87 3.53998 17.33C2.93998 16.38 2.49998 15.33 2.23998 14.21ZM6.66998 20.45C7.61998 21.05 8.66998 21.49 9.78998 21.75C10.41 21.89 11 21.4 11 20.77C11 20.32 10.7 19.9 10.26 19.81C9.34998 19.61 8.48998 19.24 7.72998 18.76C7.33998 18.52 6.83998 18.59 6.51998 18.92C6.05998 19.36 6.12998 20.11 6.66998 20.45ZM14.27 21.74C18.7 20.71 22 16.73 22 12C22 7.26998 18.7 3.28998 14.27 2.25998C13.65 2.10998 13.05 2.59998 13.05 3.23998C13.05 3.69998 13.36 4.10998 13.8 4.20998C17.35 5.02998 20 8.20998 20 12C20 15.79 17.35 18.97 13.8 19.79C13.36 19.9 13.05 20.3 13.05 20.76C13.05 21.4 13.65 21.89 14.27 21.74Z" fill="currentColor"/></svg>';

const RuxIconSlowMotionVideo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'auto';
  }
  get iconSize() {
    const sizes = {
      'extra-small': '1rem',
      small: '2rem',
      normal: '3rem',
      large: '4rem',
    };
    if (sizes[this.size]) {
      return sizes[this.size];
    }
    else {
      return this.size;
    }
  }
  render() {
    const style = {
      height: this.iconSize,
      width: this.iconSize,
    };
    return index.h("div", { style: style, innerHTML: svgIcon });
  }
};

exports.rux_icon_slow_motion_video = RuxIconSlowMotionVideo;
