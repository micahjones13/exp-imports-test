import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.14 2 5 5.14 5 9C5 13.17 9.42 18.92 11.23 21.11C11.63 21.59 12.36 21.59 12.76 21.11C14.58 18.92 19 13.17 19 9C19 5.14 15.86 2 12 2ZM12.88 15.75H11.13V14H12.88V15.75ZM13.17 11.85C13.2 11.8 13.23 11.75 13.26 11.71C13.4973 11.3796 13.8158 11.1015 14.138 10.8202C14.8884 10.165 15.6589 9.49227 15.47 8.1C15.27 6.58 14.07 5.28 12.55 5.05C10.75 4.77 9.16 5.87 8.66 7.45C8.49 7.97 8.87 8.5 9.42 8.5H9.58C9.94 8.5 10.23 8.25 10.34 7.92C10.63 7.13 11.46 6.6 12.37 6.8C13.2 6.98 13.8 7.8 13.73 8.65C13.6709 9.32969 13.1921 9.69888 12.6605 10.1088C12.1127 10.5312 11.5088 10.9969 11.25 11.89V11.95H11.23C11.16 12.22 11.12 12.52 11.12 12.88H12.88C12.88 12.65 12.92 12.44 12.98 12.25C12.99 12.2 13.01 12.16 13.03 12.12L13.03 12.12L13.03 12.12C13.05 12.07 13.07 12.02 13.1 11.97C13.11 11.95 13.1225 11.93 13.135 11.91C13.1475 11.89 13.16 11.87 13.17 11.85Z" fill="currentColor"/></svg>';

const RuxIconNotListedLocation = class {
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

export { RuxIconNotListedLocation as rux_icon_not_listed_location };
