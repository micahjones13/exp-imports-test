import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.36 5.00009H18.89C20.25 5.00009 21.21 6.34009 20.78 7.63009L19 13.0001L20.78 18.3701C21.21 19.6601 20.24 21.0001 18.88 21.0001H5.09998C3.73998 21.0001 2.76998 19.6601 3.20998 18.3701L4.99998 13.0001L3.19998 7.63009C2.76998 6.34009 3.72998 5.00009 5.09998 5.00009H15.69L16.71 2.18009C16.95 1.53009 17.67 1.19009 18.32 1.43009C18.97 1.66009 19.31 2.38009 19.07 3.03009L18.36 5.00009ZM13 14.0001H15C15.55 14.0001 16 13.5501 16 13.0001C16 12.4501 15.55 12.0001 15 12.0001H13V10.0001C13 9.45009 12.55 9.00009 12 9.00009C11.45 9.00009 11 9.45009 11 10.0001V12.0001H8.99998C8.44998 12.0001 7.99998 12.4501 7.99998 13.0001C7.99998 13.5501 8.44998 14.0001 8.99998 14.0001H11V16.0001C11 16.5501 11.45 17.0001 12 17.0001C12.55 17.0001 13 16.5501 13 16.0001V14.0001Z" fill="currentColor"/></svg>';

const RuxIconLocalPharmacy = class {
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

export { RuxIconLocalPharmacy as rux_icon_local_pharmacy };
