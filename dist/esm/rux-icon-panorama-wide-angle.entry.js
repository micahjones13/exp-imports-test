import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.05 4.72C6.78 4.24 9.27 4 12 4C14.73 4 17.22 4.24 19.95 4.73L20.88 4.89L21.13 5.78C21.71 7.85 22 9.93 22 12C22 14.07 21.71 16.15 21.13 18.23L20.88 19.12L19.95 19.28C17.22 19.76 14.73 20 12 20C9.27 20 6.78 19.76 4.05 19.27L3.12 19.11L2.87 18.22C2.29 16.15 2 14.07 2 12C2 9.93 2.29 7.85 2.87 5.78L3.12 4.88L4.05 4.72ZM19.29 6.64C16.71 6.2 14.45 6 12 6C9.55 6 7.29 6.2 4.71 6.64C4.24 8.42 4 10.22 4 12C4 13.78 4.24 15.58 4.71 17.36C7.29 17.8 9.55 18 12 18C14.45 18 16.71 17.8 19.29 17.36C19.76 15.58 20 13.78 20 12C20 10.22 19.76 8.42 19.29 6.64Z" fill="currentColor"/></svg>';

const RuxIconPanoramaWideAngle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return h("div", { style: style, innerHTML: svgIcon });
  }
};

export { RuxIconPanoramaWideAngle as rux_icon_panorama_wide_angle };
