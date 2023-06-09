import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.46 10C19.77 10 20 10.28 19.96 10.59C19.72 12.18 18.54 13.46 17 13.86V15H19.46C19.77 15 20 15.28 19.96 15.59C19.72 17.18 18.54 18.46 17 18.86V20C17 20.55 16.55 21 16 21H7.99999C7.44999 21 6.99999 20.55 6.99999 20V18.86C5.45999 18.46 4.27999 17.18 4.03999 15.59C3.99999 15.28 4.22999 15 4.53999 15H6.99999V13.86C5.45999 13.46 4.27999 12.18 4.03999 10.59C3.99999 10.28 4.22999 10 4.53999 10H6.99999V8.86C5.45999 8.46 4.27999 7.18 4.03999 5.59C3.99999 5.28 4.22999 5 4.53999 5H6.99999V4C6.99999 3.45 7.44999 3 7.99999 3H16C16.55 3 17 3.45 17 4V5H19.46C19.77 5 20 5.28 19.96 5.59C19.72 7.18 18.54 8.46 17 8.86V10H19.46ZM9.99999 17C9.99999 18.1 10.89 19 12 19C13.11 19 14 18.1 14 17C14 15.9 13.1 15 12 15C10.89 15 9.99999 15.9 9.99999 17ZM12 14C10.89 14 9.99999 13.1 9.99999 12C9.99999 10.9 10.89 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.11 14 12 14ZM9.99999 7C9.99999 8.1 10.89 9 12 9C13.11 9 14 8.1 14 7C14 5.89 13.1 5 12 5C10.89 5 9.99999 5.89 9.99999 7Z" fill="currentColor"/></svg>';

const RuxIconTraffic = class {
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

export { RuxIconTraffic as rux_icon_traffic };
