import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.19 3.47L11.19 0.36C11.7 0.13 12.3 0.13 12.81 0.36L19.81 3.47C20.53 3.79 21 4.51 21 5.3V10C21 15.55 17.16 20.74 12 22C6.84 20.74 3 15.55 3 10V5.3C3 4.51 3.47 3.79 4.19 3.47ZM19 10.99H12V2.19L5 5.3V11H12V19.93C15.72 18.78 18.47 15.11 19 10.99Z" fill="currentColor"/></svg>';

const RuxIconSecurity = class {
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

export { RuxIconSecurity as rux_icon_security };
