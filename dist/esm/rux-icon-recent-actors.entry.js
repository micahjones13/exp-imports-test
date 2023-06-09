import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5H14C14.55 5 15 5.45 15 6V18C15 18.55 14.55 19 14 19H2C1.45 19 1 18.55 1 18V6C1 5.45 1.45 5 2 5ZM18 19C18.55 19 19 18.55 19 18V6C19 5.45 18.55 5 18 5C17.45 5 17 5.45 17 6V18C17 18.55 17.45 19 18 19ZM21 6V18C21 18.55 21.45 19 22 19C22.55 19 23 18.55 23 18V6C23 5.45 22.55 5 22 5C21.45 5 21 5.45 21 6ZM8 7.75C9.24 7.75 10.25 8.76 10.25 10C10.25 11.24 9.24 12.25 8 12.25C6.76 12.25 5.75 11.24 5.75 10C5.75 8.76 6.76 7.75 8 7.75ZM3.5 16.25V17H12.5V16.25C12.5 14.75 9.5 14 8 14C6.5 14 3.5 14.75 3.5 16.25Z" fill="currentColor"/></svg>';

const RuxIconRecentActors = class {
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

export { RuxIconRecentActors as rux_icon_recent_actors };
