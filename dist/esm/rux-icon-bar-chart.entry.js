import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.77 5 13.4 5.63 13.4 6.4V17.6C13.4 18.37 12.77 19 12 19C11.23 19 10.6 18.37 10.6 17.6V6.4C10.6 5.63 11.23 5 12 5ZM6.4 9.2H6.6C7.37 9.2 8 9.83 8 10.6V17.6C8 18.37 7.37 19 6.6 19H6.4C5.63 19 5 18.37 5 17.6V10.6C5 9.83 5.63 9.2 6.4 9.2ZM19 14.4C19 13.63 18.37 13 17.6 13C16.83 13 16.2 13.63 16.2 14.4V17.6C16.2 18.37 16.83 19 17.6 19C18.37 19 19 18.37 19 17.6V14.4Z" fill="currentColor"/></svg>';

const RuxIconBarChart = class {
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

export { RuxIconBarChart as rux_icon_bar_chart };
