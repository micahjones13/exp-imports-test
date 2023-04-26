import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.37 3.29006L20.71 5.63006C21.1 6.02006 21.1 6.65006 20.69 7.05006L17.57 10.1701L18.79 11.3901C19.18 11.7801 19.18 12.4101 18.79 12.8001C18.4 13.1901 17.77 13.1901 17.38 12.8001L16.66 12.0801L7.89 20.8501C7.8 20.9501 7.67 21.0001 7.54 21.0001H3.5C3.22 21.0001 3 20.7801 3 20.5001V16.4601C3 16.3201 3.05 16.2001 3.15 16.1001L11.92 7.33006L11.2 6.61006C10.81 6.22006 10.81 5.59006 11.2 5.20006C11.59 4.82006 12.22 4.81006 12.61 5.20006L13.84 6.41006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006ZM5 17.0801L6.92 19.0001L14.98 10.9401L13.06 9.02006L5 17.0801Z" fill="currentColor"/></svg>';

const RuxIconColorize = class {
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

export { RuxIconColorize as rux_icon_colorize };
