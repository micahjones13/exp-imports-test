import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.11998 1.56008L21.44 18.8801C21.83 19.2701 21.83 19.9001 21.42 20.2901C21.03 20.6801 20.4 20.6801 20.01 20.2901L16.94 17.2201L13.22 20.1101C12.49 20.6701 11.48 20.6701 10.76 20.1101L3.99998 14.8501C3.48998 14.4501 3.48998 13.6801 3.99998 13.2801C4.35998 13.0001 4.85998 13.0001 5.21998 13.2801L11.37 18.0601C11.73 18.3401 12.24 18.3401 12.6 18.0601L15.52 15.7901L14.1 14.3701L13.23 15.0501C12.5 15.6101 11.49 15.6101 10.77 15.0501L4.00998 9.79008C3.49998 9.39008 3.49998 8.61008 4.00998 8.21008L6.22998 6.49008L2.70998 2.97008C2.31998 2.58008 2.31998 1.95008 2.70998 1.56008C3.09998 1.17008 3.72998 1.17008 4.11998 1.56008ZM19.99 9.79008C20.5 9.39008 20.5 8.61008 19.99 8.21008L13.23 2.95008C12.51 2.39008 11.5 2.39008 10.77 2.95008L9.40998 4.02008L17.29 11.9001L19.99 9.79008ZM19.99 13.2801L19.98 13.2701C19.62 12.9901 19.12 12.9901 18.76 13.2701L18.71 13.3101L20.11 14.7101C20.48 14.3001 20.45 13.6401 19.99 13.2801Z" fill="currentColor"/></svg>';

const RuxIconLayersClear = class {
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

export { RuxIconLayersClear as rux_icon_layers_clear };
