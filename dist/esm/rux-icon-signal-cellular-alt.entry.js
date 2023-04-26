import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 4C19.33 4 20 4.67 20 5.5V18.5C20 19.33 19.33 20 18.5 20C17.67 20 17 19.33 17 18.5V5.5C17 4.67 17.67 4 18.5 4ZM6.5 14C7.33 14 8 14.67 8 15.5V18.5C8 19.33 7.33 20 6.5 20C5.67 20 5 19.33 5 18.5V15.5C5 14.67 5.67 14 6.5 14ZM14 10.5C14 9.67 13.33 9 12.5 9C11.67 9 11 9.67 11 10.5V18.5C11 19.33 11.67 20 12.5 20C13.33 20 14 19.33 14 18.5V10.5Z" fill="currentColor"/></svg>';

const RuxIconSignalCellularAlt = class {
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

export { RuxIconSignalCellularAlt as rux_icon_signal_cellular_alt };
