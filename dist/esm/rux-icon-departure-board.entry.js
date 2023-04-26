import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2291 4.03672C11.721 1.87468 14.406 0.581087 17.34 1.12997C20.22 1.65997 22.5 4.04997 22.92 6.94997C23.5 10.94 20.72 14.38 17 14.92V18C17 18.88 16.61 19.67 16 20.22V21.5C16 22.33 15.32 23 14.5 23C13.67 23 13 22.32 13 21.5V21H5V21.5C5 22.33 4.33 23 3.5 23C2.67 23 2 22.33 2 21.5V20.22C1.39 19.67 1 18.88 1 18V7.99997C1 4.49997 4.58 3.99997 9 3.99997C9.42 3.99997 9.84 3.99997 10.24 4.01997C10.235 4.02497 10.2325 4.02997 10.23 4.03497L10.2291 4.03672ZM3 17.5C3 18.33 3.67 19 4.5 19C5.33 19 6 18.33 6 17.5C6 16.67 5.33 16 4.5 16C3.67 16 3 16.67 3 17.5ZM3 13V7.99997H9C9 9.95997 9.81 11.73 11.11 13H3ZM12 17.5C12 18.33 12.67 19 13.5 19C14.33 19 15 18.33 15 17.5C15 16.67 14.33 16 13.5 16C12.67 16 12 16.67 12 17.5ZM16 13C13.24 13 11 10.76 11 7.99997C11 5.23997 13.24 2.99997 16 2.99997C18.76 2.99997 21 5.23997 21 7.99997C21 10.76 18.76 13 16 13ZM15 4.74997C15 4.33997 15.34 3.99997 15.75 3.99997C16.16 3.99997 16.5 4.33997 16.5 4.74997V8.24997L18.74 9.56997C19.09 9.76997 19.2 10.22 18.99 10.56C18.79 10.89 18.35 11 18.01 10.8L15.49 9.28997C15.19 9.10997 15 8.77997 15 8.42997V4.74997Z" fill="currentColor"/></svg>';

const RuxIconDepartureBoard = class {
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

export { RuxIconDepartureBoard as rux_icon_departure_board };
