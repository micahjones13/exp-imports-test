import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM8 18C7.45 18 7 17.55 7 17C7 16.45 7.45 16 8 16H16C16.55 16 17 16.45 17 17C17 17.55 16.55 18 16 18H8ZM7.7 11.4L9.59 13.29C9.98 13.68 10.62 13.68 11.01 13.29L16.3 8C16.69 7.61 16.69 6.99 16.3 6.6C15.91 6.21 15.29 6.21 14.9 6.6L10.3 11.2L9.1 10C8.71 9.61 8.09 9.61 7.7 10C7.31 10.39 7.31 11.01 7.7 11.4Z" fill="currentColor"/></svg>';

const RuxIconOfflinePin = class {
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

export { RuxIconOfflinePin as rux_icon_offline_pin };
