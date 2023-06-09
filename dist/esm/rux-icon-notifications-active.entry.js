import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11V16L19.28 17.29C19.91 17.92 19.46 19 18.57 19H5.39998C4.50998 19 4.06998 17.92 4.69998 17.29L5.99998 16V11C5.99998 7.92 7.62998 5.36 10.5 4.68V4C10.5 3.17 11.16 2.5 11.99 2.5C12.82 2.5 13.5 3.17 13.5 4V4.68C16.36 5.36 18 7.93 18 11ZM13.99 20C13.99 21.1 13.09 22 11.99 22C10.88 22 9.98998 21.1 9.98998 20H13.99ZM6.76998 4.73C7.18998 4.35 7.19998 3.7 6.79998 3.3C6.41998 2.92 5.79998 2.91 5.40998 3.28C3.69998 4.84 2.51998 6.96 2.13998 9.34C2.04998 9.95 2.51998 10.5 3.13998 10.5C3.61998 10.5 4.03998 10.15 4.11998 9.67C4.41998 7.73 5.37998 6 6.76998 4.73ZM17.2 3.3C17.58 2.92 18.2 2.91 18.6 3.28C20.3 4.85 21.47 6.96 21.85 9.33C21.95 9.94 21.47 10.49 20.86 10.49C20.37 10.49 19.95 10.14 19.88 9.66C19.58 7.72 18.61 5.99 17.23 4.72C16.82 4.34 16.8 3.7 17.2 3.3Z" fill="currentColor"/></svg>';

const RuxIconNotificationsActive = class {
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

export { RuxIconNotificationsActive as rux_icon_notifications_active };
