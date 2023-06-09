import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.93 2.98998C20.51 2.43998 19.67 2.39998 19.18 2.88998C18.78 3.28998 18.72 3.90998 19.05 4.36998C21.02 7.10998 21.01 10.78 19.02 13.62C18.7 14.07 18.77 14.69 19.16 15.08L19.19 15.11C19.68 15.6 20.51 15.56 20.93 15.01C23.68 11.47 23.69 6.63998 20.93 2.98998ZM5 8.99998C5 11.2091 6.79086 13 9 13C11.2091 13 13 11.2091 13 8.99998C13 6.79084 11.2091 4.99998 9 4.99998C6.79086 4.99998 5 6.79084 5 8.99998ZM17 19C17 16.34 11.67 15 9 15C6.33 15 1 16.34 1 19V20C1 20.55 1.45 21 2 21H16C16.55 21 17 20.55 17 20V19ZM15.47 7.76998C15.28 7.29998 15.36 6.75998 15.7 6.40998L15.71 6.39998C16.3 5.80998 17.3 5.94998 17.68 6.68998C18.46 8.19998 18.46 9.89998 17.7 11.35C17.32 12.08 16.33 12.2 15.75 11.62L15.72 11.59C15.36 11.23 15.28 10.7 15.47 10.23C15.79 9.43998 15.79 8.55998 15.47 7.76998Z" fill="currentColor"/></svg>';

const RuxIconRecordVoiceOver = class {
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

export { RuxIconRecordVoiceOver as rux_icon_record_voice_over };
