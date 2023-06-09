import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.07999 3.47C6.96999 1.93 9.37999 1 12 1C14.62 1 17.03 1.93 18.93 3.47C19.39 3.85 19.43 4.54 19.01 4.96C18.65 5.32 18.08 5.35 17.69 5.03C16.14 3.76 14.15 3 12 3C9.84999 3 7.85999 3.76 6.31999 5.03C5.92999 5.35 5.35999 5.32 4.99999 4.96C4.56999 4.53 4.61999 3.84 5.07999 3.47ZM7.77999 7.85L7.75999 7.83C7.33999 7.41 7.36999 6.69 7.85999 6.34C9.01999 5.5 10.45 5 12 5C13.55 5 14.98 5.5 16.15 6.35C16.63 6.7 16.66 7.42 16.24 7.84L16.22 7.86C15.87 8.21 15.32 8.24 14.92 7.95C14.09 7.37 13.08 7.02 12 7.02C10.92 7.02 9.90999 7.37 9.07999 7.94C8.66999 8.23 8.12999 8.2 7.77999 7.85ZM9.13999 10C8.50999 10 7.99999 10.51 7.99999 11.14V20.85C7.99999 21.48 8.50999 21.99 9.13999 21.99H14.85C15.48 21.99 15.99 21.48 15.99 20.85V11.14C16 10.51 15.49 10.01 14.86 10.01L9.13999 10ZM8.99999 12V20H15V12H8.99999Z" fill="currentColor"/></svg>';

const RuxIconSpeakerPhone = class {
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

export { RuxIconSpeakerPhone as rux_icon_speaker_phone };
