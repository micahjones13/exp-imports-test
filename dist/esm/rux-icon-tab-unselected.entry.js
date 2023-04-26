import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H1C1 3.9 1.9 3 3 3V5ZM1 9H3V7H1V9ZM1 13H3V11H1V13ZM9 21H11V19H9V21ZM3 17H1V15H3V17ZM3 21V19H1C1 20.1 1.9 21 3 21ZM13 3H21C22.1 3 23 3.9 23 5V9H14C13.45 9 13 8.55 13 8V3ZM21 17H23V15H21V17ZM11 5H9V3H11V5ZM5 21H7V19H5V21ZM7 5H5V3H7V5ZM21 21C22.1 21 23 20.1 23 19H21V21ZM23 13H21V11H23V13ZM15 21V19H13V21H15ZM19 21H17V19H19V21Z" fill="currentColor"/></svg>';

const RuxIconTabUnselected = class {
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

export { RuxIconTabUnselected as rux_icon_tab_unselected };
