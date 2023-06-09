import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 15C24 12.36 21.95 10.22 19.35 10.04C18.67 6.59 15.64 4 12 4C10.67 4 9.42998 4.36 8.34998 4.97L9.83998 6.46C10.51 6.17 11.23 6 12 6C15.04 6 17.5 8.46 17.5 11.5V12H19C20.66 12 22 13.34 22 15C22 15.99 21.52 16.85 20.79 17.4L22.2 18.81C23.29 17.89 24 16.54 24 15ZM3.70998 4.56C3.31998 4.95 3.31998 5.58 3.70998 5.97L5.76998 8.03H5.34998C2.06998 8.38 -0.410016 11.37 0.0599837 14.82C0.459984 17.84 3.18998 20 6.21998 20H17.73L19.02 21.29C19.41 21.68 20.04 21.68 20.43 21.29C20.82 20.9 20.82 20.27 20.43 19.88L5.11998 4.56C4.72998 4.17 4.09998 4.17 3.70998 4.56ZM1.99998 14C1.99998 16.21 3.78998 18 5.99998 18H15.73L7.72998 10H5.99998C3.78998 10 1.99998 11.79 1.99998 14Z" fill="currentColor"/></svg>';

const RuxIconCloudOff = class {
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

export { RuxIconCloudOff as rux_icon_cloud_off };
