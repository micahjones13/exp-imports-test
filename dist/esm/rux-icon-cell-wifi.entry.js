import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.21 6.69004C16.55 6.97004 17.04 6.97004 17.35 6.66004L17.47 6.54004C17.82 6.19004 17.78 5.62004 17.39 5.30004C13.72 2.25004 8.37003 2.23004 4.69003 5.24004C4.26003 5.59004 4.22003 6.23004 4.61003 6.61004C4.93003 6.94004 5.45003 6.98004 5.80003 6.69004C8.81003 4.21004 13.2 4.21004 16.21 6.69004ZM13.64 9.30004C12.07 8.18004 9.94003 8.18004 8.37003 9.30004C8.01003 9.56004 7.52003 9.52004 7.20003 9.20004C6.80003 8.81004 6.85003 8.14004 7.30003 7.82004C9.51003 6.25004 12.5 6.25004 14.7 7.82004C15.15 8.14004 15.19 8.81004 14.8 9.20004C14.49 9.52004 14 9.56004 13.64 9.30004ZM8.26815 21.9906C8.31403 21.9968 8.36135 22 8.41003 22H18H20L20.1487 21.9945C21.18 21.9178 22 21.05 22 20V8.39004L21.994 8.2765C21.907 7.46295 20.8926 7.07743 20.29 7.68004L7.70003 20.29L7.62392 20.3746C7.13935 20.9755 7.51059 21.8883 8.26815 21.9906ZM18 20.9994L20 21C20.5086 21 20.9349 20.6101 20.9932 20.1158L21 20V8.39004L18 11.3934V20.9994ZM9.07003 11.07L11 13L12.93 11.07C11.86 10.01 10.14 10.01 9.07003 11.07Z" fill="currentColor"/></svg>';

const RuxIconCellWifi = class {
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

export { RuxIconCellWifi as rux_icon_cell_wifi };
