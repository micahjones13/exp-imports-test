import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 7C12.22 7 12 7.22 12 7.5C12 7.78 12.22 8 12.5 8H14.45C14.75 8 15 7.75 15 7.45V5.55C15 5.25 14.75 5 14.45 5H13V4H14.5C14.78 4 15 3.78 15 3.5C15 3.22 14.78 3 14.5 3H12.55C12.25 3 12 3.25 12 3.55V5.44C12 5.75 12.25 6 12.55 6H14V7H12.5ZM16.5 8C16.78 8 17 7.78 17 7.5V3.5C17 3.22 16.78 3 16.5 3C16.22 3 16 3.22 16 3.5V7.5C16 7.78 16.22 8 16.5 8ZM18.56 3H20.45C20.75 3 21 3.25 21 3.55V5.45C21 5.75 20.75 6 20.45 6H19V7.5C19 7.78 18.78 8 18.5 8C18.22 8 18 7.78 18 7.5V3.55C18 3.25 18.25 3 18.56 3ZM20 5H19V4H20V5ZM16.67 14.98L19.21 15.27C20.22 15.38 20.99 16.24 20.98 17.24V18.97C20.98 20.1 20.04 21.04 18.91 20.97C10.38 20.44 3.54997 13.62 3.01997 5.08C2.94997 3.95 3.88997 3.01 5.01997 3.01H6.74997C7.75997 3.01 8.61997 3.78 8.72997 4.79L9.01997 7.31C9.08997 7.91 8.87997 8.52 8.44997 8.95L6.59997 10.8C8.03997 13.64 10.36 15.95 13.19 17.39L15.03 15.55C15.46 15.12 16.06 14.91 16.67 14.98Z" fill="currentColor"/></svg>';

const RuxIconDialerSip = class {
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

export { RuxIconDialerSip as rux_icon_dialer_sip };
