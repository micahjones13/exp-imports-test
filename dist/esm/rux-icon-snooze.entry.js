import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.10001 6.55002C3.68001 6.90002 3.05001 6.85002 2.70001 6.42002C2.34001 6.00002 2.40001 5.37002 2.82001 5.01002L5.90001 2.45002C6.32001 2.10002 6.95001 2.15002 7.30001 2.58002C7.66001 3.00002 7.60001 3.63002 7.17001 3.99002L4.10001 6.55002ZM21.3 6.42002C20.95 6.84002 20.32 6.90002 19.89 6.55002L16.82 3.99002C16.4 3.63002 16.34 3.00002 16.7 2.58002C17.05 2.16002 17.68 2.10002 18.11 2.45002L21.18 5.01002C21.6 5.37002 21.66 6.00002 21.3 6.42002ZM10 11H12.63L8.91001 15.35C8.36001 16 8.82001 17 9.67001 17H14C14.55 17 15 16.55 15 16C15 15.45 14.55 15 14 15H11.37L15.09 10.65C15.64 10 15.18 9.00002 14.33 9.00002H10C9.45001 9.00002 9.00001 9.45002 9.00001 10C9.00001 10.55 9.45001 11 10 11ZM12 6.00002C15.86 6.00002 19 9.14002 19 13C19 16.86 15.86 20 12 20C8.14001 20 5.00001 16.86 5.00001 13C5.00001 9.14002 8.14001 6.00002 12 6.00002ZM3.00001 13C3.00001 8.03002 7.03001 4.00002 12 4.00002C16.97 4.00002 21 8.03002 21 13C21 17.97 16.97 22 12 22C7.03001 22 3.00001 17.97 3.00001 13Z" fill="currentColor"/></svg>';

const RuxIconSnooze = class {
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

export { RuxIconSnooze as rux_icon_snooze };
