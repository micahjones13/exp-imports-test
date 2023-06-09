import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.11998 1.83986L22.16 21.8799C22.55 22.2699 22.55 22.9099 22.16 23.2999C21.77 23.6899 21.14 23.6899 20.75 23.2999L19.45 21.9999H3.99998C2.89998 21.9999 1.99998 21.0999 1.99998 19.9999V4.54986L0.70998 3.24986C0.31998 2.85986 0.31998 2.22986 0.70998 1.83986C1.09998 1.44986 1.72998 1.44986 2.11998 1.83986ZM7.99998 3.99986V4.88986L9.99998 6.88986V3.99986H14V7.99986H11.11L13.11 9.99986H14V10.8899L16 12.8899V9.99986H20V13.9999H17.11L19.11 15.9999H20V16.8899L22 18.8899V3.99986C22 2.89986 21.1 1.99986 20 1.99986H5.10998L7.10998 3.99986H7.99998ZM16 3.99986H19C19.55 3.99986 20 4.44986 20 4.99986V7.99986H16V3.99986ZM9.99998 12.5499L11.45 13.9999H9.99998V12.5499ZM5.44998 7.99986L3.99998 6.54986V7.99986H5.44998ZM7.99998 19.9999H4.99998C4.44998 19.9999 3.99998 19.5499 3.99998 18.9999V15.9999H7.99998V19.9999ZM3.99998 13.9999H7.99998V10.5499L7.44998 9.99986H3.99998V13.9999ZM14 19.9999H9.99998V15.9999H13.45L14 16.5499V19.9999ZM16 18.5499V19.9999H17.45L16 18.5499Z" fill="currentColor"/></svg>';

const RuxIconGridOff = class {
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

export { RuxIconGridOff as rux_icon_grid_off };
