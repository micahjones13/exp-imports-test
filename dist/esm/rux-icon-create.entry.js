import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 20.5001V17.4601C3 17.3201 3.05 17.2001 3.15 17.1001L14.06 6.19006L17.81 9.94006L6.89 20.8501C6.8 20.9501 6.67 21.0001 6.54 21.0001H3.5C3.22 21.0001 3 20.7801 3 20.5001Z" fill="currentColor"/></svg>';

const RuxIconCreate = class {
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

export { RuxIconCreate as rux_icon_create };
