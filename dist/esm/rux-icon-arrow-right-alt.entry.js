import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.01 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H16.01V14.79C16.01 15.24 16.55 15.46 16.86 15.14L19.64 12.35C19.83 12.15 19.83 11.84 19.64 11.64L16.86 8.85002C16.55 8.53002 16.01 8.76002 16.01 9.20002V11Z" fill="currentColor"/></svg>';

const RuxIconArrowRightAlt = class {
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

export { RuxIconArrowRightAlt as rux_icon_arrow_right_alt };
