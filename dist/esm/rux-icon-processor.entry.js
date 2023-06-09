import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 20V22H7V20H9ZM13 20V22H11V20H13ZM17 20V22H15V20H17ZM17 5C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H17ZM17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16ZM4 15V17H2V15H4ZM22 15V17H20V15H22ZM4 11V13H2V11H4ZM22 11V13H20V11H22ZM4 7V9H2V7H4ZM22 7V9H20V7H22ZM7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6ZM9 2V4H7V2H9ZM13 2V4H11V2H13ZM17 2V4H15V2H17Z" fill="currentColor"/></svg>';

const RuxIconProcessor = class {
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

export { RuxIconProcessor as rux_icon_processor };
