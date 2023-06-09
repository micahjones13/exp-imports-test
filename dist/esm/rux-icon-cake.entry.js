import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.68 5.87994C13.38 5.63994 13.9 4.97994 13.98 4.23994C14.03 3.76994 13.93 3.32994 13.7 2.96994L12.42 0.749941C12.23 0.419941 11.75 0.419941 11.55 0.749941L10.27 2.96994C10.1 3.26994 10 3.61994 10 3.99994C10 5.31994 11.3 6.34994 12.68 5.87994ZM16.53 15.9199L15.53 14.9199L14.45 15.9899C13.15 17.2899 10.87 17.2999 9.56 15.9899L8.49 14.9199L7.4 15.9899C6.75 16.6399 5.88 16.9999 4.96 16.9999C4.23 16.9999 3.56 16.7699 3 16.3899V19.9999C3 21.0999 3.9 21.9999 5 21.9999H19C20.1 21.9999 21 21.0999 21 19.9999V16.3899C20.25 16.8999 19.29 17.1399 18.26 16.9099C17.6 16.7699 17.01 16.3999 16.53 15.9199ZM13 8.99994H18C19.66 8.99994 21 10.3399 20.99 12.0099V13.4299C20.99 14.4299 20.29 15.3599 19.3 15.4899C18.68 15.5699 18.08 15.3699 17.65 14.9399L15.52 12.8099L13.38 14.9399C12.62 15.6999 11.37 15.6999 10.61 14.9399L8.48 12.8099L6.34 14.9399C5.83 15.4599 5.04 15.6399 4.31 15.3999C3.5 15.1299 3 14.3099 3 13.4599V11.9999C3 10.3399 4.34 8.99994 6 8.99994H11V7.99994C11 7.44994 11.45 6.99994 12 6.99994C12.55 6.99994 13 7.44994 13 7.99994V8.99994Z" fill="currentColor"/></svg>';

const RuxIconCake = class {
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

export { RuxIconCake as rux_icon_cake };
