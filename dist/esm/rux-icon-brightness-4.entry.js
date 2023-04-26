import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 8.68992L22.6 11.2899C22.99 11.6799 22.99 12.3199 22.6 12.7099L20 15.3099V18.9999C20 19.5499 19.55 19.9999 19 19.9999H15.3L12.7 22.5999C12.31 22.9899 11.68 22.9899 11.29 22.5999L8.68998 19.9999H4.99998C4.44998 19.9999 3.99998 19.5499 3.99998 18.9999V15.2999L1.39998 12.6999C1.00998 12.3099 1.00998 11.6799 1.39998 11.2899L3.99998 8.68992V4.99992C3.99998 4.44992 4.44998 3.99992 4.99998 3.99992H8.68998L11.3 1.39992C11.69 1.00992 12.32 1.00992 12.71 1.39992L15.31 3.99992H19C19.55 3.99992 20 4.44992 20 4.99992V8.68992ZM14.04 17.6399C16.07 16.9199 17.58 15.0999 17.92 12.9799C17.97 12.6499 17.99 12.3199 18 11.9999C18 11.6799 17.98 11.3499 17.93 11.0199C17.59 8.89992 16.07 7.07992 14.05 6.35992C12.84 5.92992 11.64 5.90992 10.55 6.17992C10.13 6.28992 10.07 6.83992 10.42 7.07992C11.98 8.15992 13 9.95992 13 11.9999C13 14.0399 11.98 15.8399 10.41 16.9199C10.06 17.1699 10.13 17.7199 10.54 17.8199C11.63 18.0899 12.83 18.0699 14.04 17.6399Z" fill="currentColor"/></svg>';

const RuxIconBrightness4 = class {
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

export { RuxIconBrightness4 as rux_icon_brightness_4 };
