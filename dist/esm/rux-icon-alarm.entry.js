import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.17001 3.99002L4.10001 6.55002C3.68001 6.90002 3.05001 6.85002 2.70001 6.42002C2.34001 6.00002 2.40001 5.37002 2.82001 5.01002L5.90001 2.45002C6.32001 2.10002 6.95001 2.15002 7.30001 2.58002C7.66001 3.00002 7.60001 3.63002 7.17001 3.99002ZM21.18 5.01002L18.1 2.45002C17.68 2.10002 17.05 2.15002 16.69 2.58002C16.34 3.00002 16.4 3.63002 16.82 3.99002L19.89 6.55002C20.31 6.90002 20.94 6.85002 21.3 6.42002C21.66 6.00002 21.6 5.37002 21.18 5.01002ZM15.87 15.25L12.5 13.25V8.72002C12.5 8.32002 12.18 8.00002 11.78 8.00002H11.72C11.32 8.00002 11 8.32002 11 8.72002V13.44C11 13.79 11.18 14.12 11.49 14.3L15.14 16.49C15.48 16.69 15.92 16.59 16.12 16.25C16.33 15.9 16.22 15.45 15.87 15.25ZM12 4.00002C7.03001 4.00002 3.00001 8.03002 3.00001 13C3.00001 17.97 7.03001 22 12 22C16.97 22 21 17.97 21 13C21 8.03002 16.97 4.00002 12 4.00002ZM5.00001 13C5.00001 16.86 8.14001 20 12 20C15.86 20 19 16.86 19 13C19 9.14002 15.86 6.00002 12 6.00002C8.14001 6.00002 5.00001 9.14002 5.00001 13Z" fill="currentColor"/></svg>';

const RuxIconAlarm = class {
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

export { RuxIconAlarm as rux_icon_alarm };
