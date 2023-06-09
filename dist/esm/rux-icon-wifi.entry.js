import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06002 10.06C2.57002 10.57 3.38002 10.62 3.93002 10.16C8.60002 6.32002 15.38 6.32002 20.06 10.15C20.62 10.61 21.44 10.57 21.95 10.06C22.54 9.47002 22.5 8.49002 21.85 7.96002C16.14 3.29002 7.88002 3.29002 2.16002 7.96002C1.51002 8.48002 1.46002 9.46002 2.06002 10.06ZM9.82002 17.82L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L14.17 17.82C14.64 17.35 14.54 16.54 13.94 16.23C12.72 15.6 11.26 15.6 10.03 16.23C9.46002 16.54 9.35002 17.35 9.82002 17.82ZM7.92002 14.22C7.35002 14.63 6.58002 14.58 6.09002 14.09C5.48002 13.48 5.52002 12.47 6.21002 11.97C9.66002 9.48002 14.35 9.48002 17.79 11.97C18.48 12.46 18.52 13.48 17.92 14.08L17.91 14.09C17.42 14.58 16.65 14.62 16.08 14.22C13.64 12.49 10.36 12.49 7.92002 14.22Z" fill="currentColor"/></svg>';

const RuxIconWifi = class {
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

export { RuxIconWifi as rux_icon_wifi };
