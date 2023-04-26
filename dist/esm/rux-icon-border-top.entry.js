import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 4.55 3.45 5 4 5H20C20.55 5 21 4.55 21 4C21 3.45 20.55 3 20 3H4C3.45 3 3 3.45 3 4ZM5 9V7H3V9H5ZM7 13H9V11H7V13ZM7 21H9V19H7V21ZM13 13H11V11H13V13ZM11 21H13V19H11V21ZM3 17V15H5V17H3ZM5 21V19H3V21H5ZM3 13V11H5V13H3ZM13 17H11V15H13V17ZM21 9V7H19V9H21ZM19 13V11H21V13H19ZM21 15V17H19V15H21ZM15 21H17V19H15V21ZM13 9H11V7H13V9ZM21 21V19H19V21H21ZM17 13H15V11H17V13Z" fill="currentColor"/></svg>';

const RuxIconBorderTop = class {
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

export { RuxIconBorderTop as rux_icon_border_top };
