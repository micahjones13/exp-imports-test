import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.9 7.89 3 9 3V5H7ZM9 7H7V9H9V7ZM9 11H7V13H9V11ZM13 15H11V17H13V15ZM19 5V3C20.1 3 21 3.9 21 5H19ZM13 3H11V5H13V3ZM9 15V17C7.89 17 7 16.1 7 15H9ZM19 13H21V11H19V13ZM21 9H19V7H21V9ZM19 17C20.1 17 21 16.1 21 15H19V17ZM3 8C3 7.45 3.45 7 4 7C4.55 7 5 7.45 5 8V18C5 18.55 5.45 19 6 19H16C16.55 19 17 19.45 17 20C17 20.55 16.55 21 16 21H5C3.9 21 3 20.1 3 19V8ZM15 5H17V3H15V5ZM17 17H15V15H17V17Z" fill="currentColor"/></svg>';

const RuxIconFlipToBack = class {
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

export { RuxIconFlipToBack as rux_icon_flip_to_back };