import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H5V5H3V3ZM7 3H9V5H7V3ZM9 11H7V13H9V11ZM13 15H11V17H13V15ZM13 11H11V13H13V11ZM13 7H11V9H13V7ZM15 11H17V13H15V11ZM13 3H11V5H13V3ZM15 3H17V5H15V3ZM19 13H21V11H19V13ZM21 17H19V15H21V17ZM5 7H3V9H5V7ZM19 5V3H21V5H19ZM19 9H21V7H19V9ZM3 11H5V13H3V11ZM4 21H20C20.55 21 21 20.55 21 20C21 19.45 20.55 19 20 19H4C3.45 19 3 19.45 3 20C3 20.55 3.45 21 4 21ZM3 15H5V17H3V15Z" fill="currentColor"/></svg>';

const RuxIconBorderBottom = class {
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

export { RuxIconBorderBottom as rux_icon_border_bottom };
