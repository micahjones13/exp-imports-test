import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM8 14H6V12H8V14ZM6 11H8V9H6V11ZM8 8H6V6H8V8ZM11 14H14C14.55 14 15 13.55 15 13C15 12.45 14.55 12 14 12H11C10.45 12 10 12.45 10 13C10 13.55 10.45 14 11 14ZM17 11H11C10.45 11 10 10.55 10 10C10 9.45 10.45 9 11 9H17C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11ZM11 8H17C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6H11C10.45 6 10 6.45 10 7C10 7.55 10.45 8 11 8Z" fill="currentColor"/></svg>';

const RuxIconSpeakerNotes = class {
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

export { RuxIconSpeakerNotes as rux_icon_speaker_notes };
