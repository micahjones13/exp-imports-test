import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C4.55 1 5 1.45 5 2V6H6C6.55 6 7 6.45 7 7V12H1V7C1 6.45 1.45 6 2 6H3V2C3 1.45 3.45 1 4 1ZM11 18.82C9.84 18.4 9 17.3 9 16V14H15V16C15 17.31 14.16 18.41 13 18.82V22C13 22.55 12.55 23 12 23C11.45 23 11 22.55 11 22V18.82ZM1 16C1 17.3 1.84 18.4 3 18.82V22C3 22.55 3.45 23 4 23C4.55 23 5 22.55 5 22V18.82C6.16 18.4 7 17.3 7 16V14H1V16ZM21 2V6H22C22.55 6 23 6.45 23 7V12H17V7C17 6.45 17.45 6 18 6H19V2C19 1.45 19.45 1 20 1C20.55 1 21 1.45 21 2ZM13 2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V6H10C9.45 6 9 6.45 9 7V12H15V7C15 6.45 14.55 6 14 6H13V2ZM19 18.82C17.84 18.4 17 17.3 17 16V14H23V16C23 17.31 22.16 18.41 21 18.82V22C21 22.55 20.55 23 20 23C19.45 23 19 22.55 19 22V18.82Z" fill="currentColor"/></svg>';

const RuxIconSettingsInputComposite = class {
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

export { RuxIconSettingsInputComposite as rux_icon_settings_input_composite };
