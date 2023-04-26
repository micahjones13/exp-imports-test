import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 19H20C20.55 19 21 19.45 21 20C21 20.55 20.55 21 20 21H18C17.45 21 17 20.55 17 20V6H14V20C14 20.55 13.55 21 13 21H4C3.45 21 3 20.55 3 20C3 19.45 3.45 19 4 19H5V4C5 3.45 5.45 3 6 3H13C13.55 3 14 3.45 14 4H18C18.55 4 19 4.45 19 5V19ZM10 13H12V11H10V13Z" fill="currentColor"/></svg>';

const RuxIconMeetingRoom = class {
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

export { RuxIconMeetingRoom as rux_icon_meeting_room };
