import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.04999 10.9C1.60999 5.34 6.29999 1 12 1C17.7 1 22.39 5.34 22.95 10.9C23.01 11.49 22.54 12 21.95 12C21.44 12 21.01 11.62 20.96 11.12C20.52 6.56 16.67 3 12 3C7.32999 3 3.47999 6.56 3.03999 11.12C2.98999 11.62 2.55999 12 2.04999 12C1.45999 12 0.999987 11.49 1.04999 10.9ZM12 5C8.51999 5 5.62999 7.54 5.08999 10.87C4.98999 11.46 5.47999 12 6.08999 12C6.57999 12 6.98999 11.64 7.06999 11.15C7.47999 8.79 9.52999 7 12 7C14.47 7 16.52 8.79 16.93 11.15C17.01 11.64 17.42 12 17.91 12C18.52 12 19 11.46 18.9 10.87C18.37 7.54 15.48 5 12 5ZM13 14.29C14.07 13.81 14.76 12.63 14.41 11.3C14.19 10.49 13.54 9.83 12.73 9.6C11.04 9.12 9.49999 10.38 9.49999 12C9.49999 13.02 10.12 13.9 11 14.29V17.59L8.28999 20.29C7.89999 20.68 7.89999 21.31 8.28999 21.7C8.67999 22.09 9.30999 22.09 9.69999 21.7L12 19.4L14.3 21.7C14.69 22.09 15.32 22.09 15.71 21.7C16.1 21.31 16.1 20.68 15.71 20.29L13 17.59V14.29Z" fill="currentColor"/></svg>';

const RuxIconSettingsInputAntenna = class {
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

export { RuxIconSettingsInputAntenna as rux_icon_settings_input_antenna };
