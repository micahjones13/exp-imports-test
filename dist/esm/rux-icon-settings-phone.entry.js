import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.69 14.97L19.23 15.26C20.24 15.38 21 16.23 20.99 17.24V18.97C20.99 20.1 20.05 21.04 18.92 20.97C10.39 20.44 3.55998 13.62 3.02998 5.07999C2.95998 3.94999 3.89998 3.00999 5.02998 3.00999H6.75998C7.77998 3.00999 8.62998 3.76999 8.74998 4.77999L9.03998 7.29999C9.10998 7.90999 8.89998 8.50999 8.46998 8.93999L6.61998 10.79C8.05998 13.63 10.38 15.94 13.21 17.38L15.05 15.54C15.48 15.11 16.08 14.9 16.69 14.97ZM13 8.99999H11V11H13V8.99999ZM17 8.99999H15V11H17V8.99999ZM19 8.99999H21V11H19V8.99999Z" fill="currentColor"/></svg>';

const RuxIconSettingsPhone = class {
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

export { RuxIconSettingsPhone as rux_icon_settings_phone };
