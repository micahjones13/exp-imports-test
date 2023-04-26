import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H5V3H3V5ZM3 9H5V7H3V9ZM9 21H7V19H9V21ZM7 13H9V11H7V13ZM5 13H3V11H5V13ZM3 21H5V19H3V21ZM5 17H3V15H5V17ZM7 5H9V3H7V5ZM21 17H19V15H21V17ZM12 21C12.55 21 13 20.55 13 20V4C13 3.45 12.55 3 12 3C11.45 3 11 3.45 11 4V20C11 20.55 11.45 21 12 21ZM21 21H19V19H21V21ZM19 13H21V11H19V13ZM19 5V3H21V5H19ZM19 9H21V7H19V9ZM17 5H15V3H17V5ZM15 21H17V19H15V21ZM17 13H15V11H17V13Z" fill="currentColor"/></svg>';

const RuxIconBorderVertical = class {
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

export { RuxIconBorderVertical as rux_icon_border_vertical };
