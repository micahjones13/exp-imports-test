'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.7101L21.17 20.8801C21.56 21.2701 21.56 21.9001 21.16 22.2901C20.77 22.6801 20.14 22.6801 19.75 22.2901L14 16.5401V20.0001C14 20.5501 13.55 21.0001 13 21.0001H3.99998C3.44998 21.0001 2.99998 20.5501 2.99998 20.0001C2.99998 19.4501 3.44998 19.0001 3.99998 19.0001H4.99998V7.5401L1.70998 4.2401C1.31998 3.8501 1.31998 3.2201 1.70998 2.8301C2.09998 2.4401 2.72998 2.4401 3.11998 2.8301L11.29 11.0001H9.99998V13.0001H12V11.7101ZM17 6.0001H14V10.8801L6.11998 3.0001H13C13.55 3.0001 14 3.4501 14 4.0001H18C18.55 4.0001 19 4.4501 19 5.0001V15.8801L17 13.8801V6.0001Z" fill="currentColor"/></svg>';

const RuxIconNoMeetingRoom = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("div", { style: style, innerHTML: svgIcon });
  }
};

exports.rux_icon_no_meeting_room = RuxIconNoMeetingRoom;
