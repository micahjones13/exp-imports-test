import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.94002 18.99H15C15.65 18.99 16.26 18.68 16.63 18.15L20.58 12.58C20.83 12.23 20.83 11.77 20.58 11.42L16.62 5.84C16.26 5.31 15.65 5 15 5H5.94002C5.13002 5 4.66002 5.93 5.13002 6.59L9.00002 12L5.13002 17.41C4.66002 18.07 5.13002 18.99 5.94002 18.99Z" fill="currentColor"/></svg>';

const RuxIconLabelImportant = class {
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

export { RuxIconLabelImportant as rux_icon_label_important };
