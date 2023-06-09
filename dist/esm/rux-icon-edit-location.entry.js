import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.3999C8.14 2.3999 5 5.4143 5 9.1199C5 13.1231 9.42 18.6431 11.24 20.7455C11.64 21.2063 12.37 21.2063 12.77 20.7455C14.58 18.6431 19 13.1231 19 9.1199C19 5.4143 15.86 2.3999 12 2.3999ZM9.95 12.4703H8.51V11.0879L12.44 7.3247L13.87 8.6975L9.95 12.4703ZM14.59 8.0159L15.29 7.3439C15.44 7.1999 15.44 6.9695 15.29 6.8255L14.39 5.9615C14.24 5.8175 14 5.8175 13.85 5.9615L13.15 6.6335L14.59 8.0159Z" fill="currentColor"/></svg>';

const RuxIconEditLocation = class {
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

export { RuxIconEditLocation as rux_icon_edit_location };
