import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.8662 11.0325C19.7442 11.0159 19.6248 10.9998 19.5 10.9998C17.29 10.9998 15.45 12.5998 15.07 14.6998C14.42 15.2598 14 16.0798 14 16.9998V19.9998H3.40999C2.51999 19.9998 2.07999 18.9198 2.70999 18.2898L18.29 2.69977C18.92 2.06977 20 2.51977 20 3.40977V11.0498C19.9548 11.0445 19.9103 11.0384 19.8662 11.0325ZM22 15.9998V15.4998C22 14.1198 20.88 12.9998 19.5 12.9998C18.12 12.9998 17 14.1198 17 15.4998V15.9998C16.45 15.9998 16 16.4498 16 16.9998V20.9998C16 21.5498 16.45 21.9998 17 21.9998H22C22.55 21.9998 23 21.5498 23 20.9998V16.9998C23 16.4498 22.55 15.9998 22 15.9998ZM21 15.9998H18V15.4998C18 14.6698 18.67 13.9998 19.5 13.9998C20.33 13.9998 21 14.6698 21 15.4998V15.9998Z" fill="currentColor"/></svg>';

const RuxIconNetworkLocked = class {
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

export { RuxIconNetworkLocked as rux_icon_network_locked };
