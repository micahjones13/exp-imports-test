import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H9C7.89 3 7 3.9 7 5V15C7 16.1 7.89 17 9 17H19C20.1 17 21 16.1 21 15V5C21 3.9 20.1 3 19 3ZM3 9H5V7H3V9ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM5 19V21C3.89 21 3 20.1 3 19H5ZM17 21H15V19H17V21ZM10 15H18C18.55 15 19 14.55 19 14V6C19 5.45 18.55 5 18 5H10C9.45 5 9 5.45 9 6V14C9 14.55 9.45 15 10 15ZM11 21H13V19H11V21ZM9 21H7V19H9V21Z" fill="currentColor"/></svg>';

const RuxIconFlipToFront = class {
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

export { RuxIconFlipToFront as rux_icon_flip_to_front };
