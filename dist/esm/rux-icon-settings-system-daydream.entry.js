import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM9 16H15.5C16.88 16 18 14.88 18 13.5C18 12.12 16.88 11 15.5 11H15.45C15.21 9.31 13.76 8 12 8C10.6 8 9.4 8.83 8.84 10.02H8.68C7.17 10.18 6 11.45 6 13C6 14.66 7.34 16 9 16ZM4 19.01H20C20.55 19.01 21 18.56 21 18.01V5.99C21 5.44 20.55 4.99 20 4.99H4C3.45 4.99 3 5.44 3 5.99V18.01C3 18.56 3.45 19.01 4 19.01Z" fill="currentColor"/></svg>';

const RuxIconSettingsSystemDaydream = class {
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

export { RuxIconSettingsSystemDaydream as rux_icon_settings_system_daydream };
