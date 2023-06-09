import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.66 13 14.99 11.66 14.99 10L15 4C15 2.34 13.66 1 12 1C10.34 1 8.99998 2.34 8.99998 4V10C8.99998 11.66 10.34 13 12 13ZM6.99998 24H8.99998V22H6.99998V24ZM13 22V24H11V22H13ZM15 24H17V22H15V24ZM17.25 10.71C17.31 10.3 17.66 10 18.08 10C18.6 10 19 10.46 18.93 10.97C18.47 13.93 15.96 16.28 13 16.72V19C13 19.55 12.55 20 12 20C11.45 20 11 19.55 11 19V16.72C8.02998 16.27 5.52998 13.93 5.06998 10.97C4.99998 10.46 5.39998 10 5.91998 10C6.32998 10 6.68998 10.3 6.74998 10.71C7.11998 13.33 9.46998 15.1 12 15.1C14.53 15.1 16.88 13.32 17.25 10.71Z" fill="currentColor"/></svg>';

const RuxIconSettingsVoice = class {
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

export { RuxIconSettingsVoice as rux_icon_settings_voice };
