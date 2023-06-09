import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.18 5.01002L18.1 2.45002C17.68 2.10002 17.05 2.15002 16.69 2.58002C16.34 3.00002 16.4 3.63002 16.82 3.99002L19.89 6.55002C20.31 6.90002 20.94 6.85002 21.3 6.42002C21.66 6.00002 21.6 5.37002 21.18 5.01002ZM4.10001 6.55002L7.17001 3.99002C7.60001 3.63002 7.66001 3.00002 7.30001 2.58002C6.95001 2.15002 6.32001 2.10002 5.90001 2.45002L2.82001 5.01002C2.40001 5.37002 2.34001 6.00002 2.70001 6.42002C3.05001 6.85002 3.68001 6.90002 4.10001 6.55002ZM3.00001 13C3.00001 8.03002 7.03001 4.00002 12 4.00002C16.97 4.00002 21 8.03002 21 13C21 17.97 16.97 22 12 22C7.03001 22 3.00001 17.97 3.00001 13ZM12 20C8.14001 20 5.00001 16.86 5.00001 13C5.00001 9.14002 8.14001 6.00002 12 6.00002C15.86 6.00002 19 9.14002 19 13C19 16.86 15.86 20 12 20ZM13 12H15C15.55 12 16 12.45 16 13C16 13.55 15.55 14 15 14H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V14H9.00001C8.45001 14 8.00001 13.55 8.00001 13C8.00001 12.45 8.45001 12 9.00001 12H11V10C11 9.45002 11.45 9.00002 12 9.00002C12.55 9.00002 13 9.45002 13 10V12Z" fill="currentColor"/></svg>';

const RuxIconAlarmAdd = class {
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

export { RuxIconAlarmAdd as rux_icon_alarm_add };
