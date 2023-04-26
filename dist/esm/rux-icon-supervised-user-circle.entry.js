import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.61 8.34C16.68 8.34 17.54 9.2 17.54 10.27C17.54 11.34 16.68 12.2 15.61 12.2C14.54 12.2 13.68 11.34 13.68 10.27C13.67 9.2 14.54 8.34 15.61 8.34ZM11.97 9.12C11.97 7.82 10.91 6.76 9.61 6.76C8.3 6.76 7.25 7.81 7.25 9.12C7.25 10.42 8.31 11.48 9.61 11.48C10.91 11.48 11.97 10.42 11.97 9.12ZM9.61 15.89V19.64C7.21 18.89 5.31 17.04 4.47 14.68C5.52 13.56 8.14 12.99 9.61 12.99C10.14 12.99 10.81 13.07 11.51 13.21C9.87 14.08 9.61 15.23 9.61 15.89ZM11.21 19.96C11.47 19.99 11.73 20 12 20C15.39 20 18.28 17.88 19.45 14.91C18.53 14.15 16.68 13.76 15.61 13.76C14.15 13.76 11.21 14.47 11.21 15.89V19.96Z" fill="currentColor"/></svg>';

const RuxIconSupervisedUserCircle = class {
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

export { RuxIconSupervisedUserCircle as rux_icon_supervised_user_circle };
