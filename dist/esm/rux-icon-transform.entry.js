import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.0002C8 15.5502 8.45 16.0002 9 16.0002H21C21.55 16.0002 22 16.4502 22 17.0002C22 17.5502 21.55 18.0002 21 18.0002H18V20.0002H18.8C19.24 20.0002 19.47 20.5402 19.15 20.8502L17.36 22.6402C17.16 22.8402 16.85 22.8402 16.65 22.6402L14.86 20.8502C14.54 20.5402 14.76 20.0002 15.21 20.0002H16V18.0002H8C6.9 18.0002 6 17.1002 6 16.0002V8.0002H3C2.45 8.0002 2 7.5502 2 7.0002C2 6.4502 2.45 6.0002 3 6.0002H6V4.0002H5.21C4.76 4.0002 4.54 3.4602 4.85 3.1502L6.64 1.3502C6.84 1.1502 7.15 1.1502 7.35 1.3502L9.14 3.1502C9.46 3.4602 9.24 4.0002 8.79 4.0002H8V15.0002ZM18 14.0002H16V9.0002C16 8.4502 15.55 8.0002 15 8.0002H10V6.0002H16C17.1 6.0002 18 6.9002 18 8.0002V14.0002Z" fill="currentColor"/></svg>';

const RuxIconTransform = class {
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

export { RuxIconTransform as rux_icon_transform };
