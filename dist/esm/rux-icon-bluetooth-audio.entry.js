import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.98 8.42003L11.39 12L14.99 15.58C15.38 15.98 15.38 16.61 14.99 17L10.69 21.3C10.06 21.93 8.98001 21.48 8.98001 20.59V14.41L5.09001 18.3C4.70001 18.69 4.07001 18.69 3.68001 18.3C3.29001 17.91 3.29001 17.28 3.68001 16.89L8.57001 12L3.68001 7.11003C3.29001 6.72003 3.29001 6.09003 3.68001 5.70003C4.07001 5.31003 4.70001 5.31003 5.09001 5.70003L8.98001 9.60003V3.42003C8.98001 2.53003 10.06 2.08003 10.69 2.71003L14.98 7.00003C15.37 7.40003 15.37 8.03003 14.98 8.42003ZM20.1 7.78003C19.85 7.23003 19.12 7.11003 18.7 7.54003C18.44 7.80003 18.39 8.18003 18.53 8.52003C18.99 9.59003 19.25 10.76 19.25 11.99C19.25 13.23 18.99 14.41 18.52 15.48C18.38 15.8 18.43 16.17 18.68 16.42C19.09 16.83 19.78 16.71 20.03 16.19C20.66 14.89 21.01 13.43 21.01 11.89C21 10.44 20.68 9.04003 20.1 7.78003ZM15.98 10.28L14.6 11.66C14.4 11.86 14.4 12.17 14.6 12.37L15.98 13.75C16.26 14.03 16.73 13.9 16.83 13.52C16.94 13.02 17 12.52 17 12C17 11.49 16.94 10.99 16.82 10.52C16.73 10.14 16.26 10 15.98 10.28ZM10.98 5.83003L12.86 7.71003L10.98 9.59003V5.83003ZM12.86 16.29L10.98 14.41V18.17L12.86 16.29Z" fill="currentColor"/></svg>';

const RuxIconBluetoothAudio = class {
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

export { RuxIconBluetoothAudio as rux_icon_bluetooth_audio };
