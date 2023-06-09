import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.70998 3.24001C0.31998 2.85001 0.31998 2.22001 0.70998 1.83001C1.09998 1.44001 1.72998 1.44001 2.11998 1.83001L22.16 21.88C22.55 22.27 22.55 22.9 22.16 23.29C21.77 23.68 21.14 23.68 20.75 23.29L18.62 21.16C18.26 21.67 17.67 22 17 22C15.9 22 15.01 21.1 15.01 20C15.01 19.33 15.34 18.74 15.84 18.38L14.46 17H7.12998C6.06998 17 5.10998 16.24 5.00998 15.18C4.96998 14.76 5.05998 14.36 5.24998 14.03L6.59998 11.58L4.38998 6.92001L0.70998 3.24001ZM8.09998 13L6.99998 15H12.46L10.46 13H8.09998ZM16.05 12.94C16.59 12.8 17.04 12.45 17.3 11.97L20.88 5.48001C21.25 4.82001 20.76 4.00001 20 4.00001H7.11998L16.05 12.94ZM5.00998 20C5.00998 18.9 5.89998 18 6.99998 18C8.09998 18 8.99998 18.9 8.99998 20C8.99998 21.1 8.09998 22 6.99998 22C5.89998 22 5.00998 21.1 5.00998 20Z" fill="currentColor"/></svg>';

const RuxIconRemoveShoppingCart = class {
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

export { RuxIconRemoveShoppingCart as rux_icon_remove_shopping_cart };
