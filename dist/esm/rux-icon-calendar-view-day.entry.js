import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 6H4C3.45 6 3 6.45 3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6ZM4 10H20C20.55 10 21 10.45 21 11V14C21 14.55 20.55 15 20 15H4C3.45 15 3 14.55 3 14V11C3 10.45 3.45 10 4 10ZM4 17H20C20.55 17 21 17.45 21 18C21 18.55 20.55 19 20 19H4C3.45 19 3 18.55 3 18C3 17.45 3.45 17 4 17Z" fill="currentColor"/></svg>';

const RuxIconCalendarViewDay = class {
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

export { RuxIconCalendarViewDay as rux_icon_calendar_view_day };
