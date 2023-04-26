import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.29 6.70978C8.9 7.09978 8.9 7.72978 9.29 8.11978L13.17 11.9998L9.29 15.8798C8.9 16.2698 8.9 16.8998 9.29 17.2898C9.68 17.6798 10.31 17.6798 10.7 17.2898L15.29 12.6998C15.68 12.3098 15.68 11.6798 15.29 11.2898L10.7 6.69978C10.32 6.31978 9.68 6.31978 9.29 6.70978Z" fill="currentColor"/></svg>';

const RuxIconChevronRight = class {
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

export { RuxIconChevronRight as rux_icon_chevron_right };
