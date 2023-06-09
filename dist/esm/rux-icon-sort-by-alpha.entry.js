import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.93 2.65C12.73 2.45 12.42 2.45 12.22 2.65L10.21 4.66H14.93L12.93 2.65ZM12.23 21.35C12.43 21.55 12.74 21.55 12.94 21.35L14.92 19.37H10.26L12.23 21.35ZM11.77 16.57C11.99 17.13 11.58 17.73 10.98 17.73C10.63 17.73 10.31 17.51 10.18 17.17L9.47002 15.27H4.36002L3.65002 17.17C3.52002 17.5 3.20002 17.72 2.85002 17.72C2.25002 17.72 1.84002 17.12 2.06002 16.56L5.80002 7.03C5.98002 6.57 6.43002 6.27 6.92002 6.27C7.41002 6.27 7.86002 6.57 8.04002 7.03L11.77 16.57ZM4.97002 13.64L6.91002 8.46L8.85002 13.64H4.97002ZM15.72 16.14H21.05C21.49 16.14 21.85 16.5 21.83 16.95C21.83 17.38 21.48 17.74 21.04 17.74H14.32C13.52 17.74 13.04 16.83 13.5 16.17L19.23 7.89H14.14C13.71 7.89 13.35 7.53 13.35 7.09V7.08C13.35 6.64 13.7 6.28 14.14 6.28H20.62C21.42 6.28 21.9 7.19 21.44 7.85L15.72 16.14Z" fill="currentColor"/></svg>';

const RuxIconSortByAlpha = class {
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

export { RuxIconSortByAlpha as rux_icon_sort_by_alpha };
