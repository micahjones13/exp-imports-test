import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.63383 20.3746C3.1191 21.0119 3.55869 22 4.40999 22H20L20.1487 21.9945C21.1799 21.9178 22 21.05 22 20V4.41002L21.994 4.29648C21.9069 3.48293 20.8926 3.09741 20.29 3.70002L3.70999 20.29L3.63383 20.3746ZM16.9995 8.40501L20.9973 4.40691L21 4.41002V20L20.9932 20.1158C20.9349 20.61 20.5086 21 20 21L16.9995 21V8.40501Z" fill="currentColor"/></svg>';

const RuxIconSignalCellular3Bar = class {
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

export { RuxIconSignalCellular3Bar as rux_icon_signal_cellular_3_bar };
