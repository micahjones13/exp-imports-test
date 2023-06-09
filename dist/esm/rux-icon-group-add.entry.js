import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C19.66 11 20.99 9.66 20.99 8C20.99 6.34 19.66 5 18 5C17.68 5 17.37 5.05 17.09 5.14C17.66 5.95 17.99 6.93 17.99 8C17.99 9.07 17.65 10.04 17.09 10.86C17.37 10.95 17.68 11 18 11ZM7 10H5V8C5 7.45 4.55 7 4 7C3.45 7 3 7.45 3 8V10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12H3V14C3 14.55 3.45 15 4 15C4.55 15 5 14.55 5 14V12H7C7.55 12 8 11.55 8 11C8 10.45 7.55 10 7 10ZM15.99 8C15.99 9.66 14.66 11 13 11C11.34 11 10 9.66 10 8C10 6.34 11.34 5 13 5C14.66 5 15.99 6.34 15.99 8ZM13 13C11 13 7 14 7 16V17C7 17.55 7.45 18 8 18H18C18.55 18 19 17.55 19 17V16C19 14 15 13 13 13ZM21 16C21 14.82 20.45 13.89 19.62 13.16C21.63 13.51 24 14.46 24 16V17.5C24 17.78 23.78 18 23.5 18H20.95C20.98 17.84 21 17.67 21 17.5V16Z" fill="currentColor"/></svg>';

const RuxIconGroupAdd = class {
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

export { RuxIconGroupAdd as rux_icon_group_add };
