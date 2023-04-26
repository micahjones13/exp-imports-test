import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 6.12C6.56999 5.77 5.93999 5.82 5.58999 6.25L1.34999 11.36C1.03999 11.73 1.03999 12.27 1.34999 12.64L5.58999 17.75C5.93999 18.18 6.56999 18.23 6.99999 17.88C7.42999 17.53 7.47999 16.9 7.12999 16.47L3.41999 12L7.12999 7.53C7.47999 7.1 7.42999 6.47 6.99999 6.12ZM6.99999 13H8.99999V11H6.99999V13ZM15 11H17V13H15V11ZM11 13H13V11H11V13ZM16.87 7.53C16.52 7.1 16.57 6.47 17 6.12C17.42 5.77 18.06 5.83 18.41 6.25L22.65 11.36C22.96 11.73 22.96 12.27 22.65 12.64L18.41 17.75C18.06 18.18 17.43 18.23 17 17.88C16.58 17.53 16.52 16.9 16.87 16.47L20.58 12L16.87 7.53Z" fill="currentColor"/></svg>';

const RuxIconSettingsEthernet = class {
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

export { RuxIconSettingsEthernet as rux_icon_settings_ethernet };
