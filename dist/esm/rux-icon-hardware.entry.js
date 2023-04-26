import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 17.8247V10.4692H20V17.8247H4ZM2 9.77297C2 9.05293 2.58371 8.46922 3.30375 8.46922H20.6962C21.4163 8.46922 22 9.05293 22 9.77298V18.5209C22 19.241 21.4163 19.8247 20.6962 19.8247H3.30375C2.58371 19.8247 2 19.241 2 18.5209V9.77297ZM8.99573 13.637H4.99573V11.637H8.99573V13.637ZM8.99573 16.642H4.99573V14.642H8.99573V16.642ZM10 13.637H14V11.637H10V13.637ZM14 16.642H10V14.642H14V16.642ZM14.9987 13.637H18.9987V11.637H14.9987V13.637ZM18.9987 16.6424H14.9987V14.6424H18.9987V16.6424Z" fill="currentColor"/></svg>';

const RuxIconHardware = class {
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

export { RuxIconHardware as rux_icon_hardware };
