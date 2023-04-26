import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.08 7.06 19.44 11 19.93V4.07C7.05 4.56 4 7.92 4 12ZM13 4.07C14.03 4.2 15 4.52 15.87 5H13V4.07ZM18.24 7H13V8H18.92C18.72 7.65 18.49 7.31 18.24 7ZM13 10H19.74C19.82 10.33 19.89 10.66 19.93 11H13V10ZM13 19V19.93C14.03 19.8 15 19.48 15.87 19H13ZM18.24 17H13V16H18.92C18.72 16.35 18.49 16.69 18.24 17ZM13 14H19.74C19.82 13.67 19.89 13.34 19.93 13H13V14Z" fill="currentColor"/></svg>';

const RuxIconTonality = class {
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

export { RuxIconTonality as rux_icon_tonality };
