import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.01 2C6.49002 2 2.02002 6.48 2.02002 12C2.02002 17.52 6.49002 22 12.01 22C17.54 22 22.02 17.52 22.02 12C22.02 6.48 17.54 2 12.01 2ZM12.02 20C7.60002 20 4.02002 16.42 4.02002 12C4.02002 7.58 7.60002 4 12.02 4C16.44 4 20.02 7.58 20.02 12C20.02 16.42 16.44 20 12.02 20ZM17.02 9.5C17.02 10.33 16.35 11 15.52 11C14.69 11 14.02 10.33 14.02 9.5C14.02 8.67 14.69 8 15.52 8C16.35 8 17.02 8.67 17.02 9.5ZM8.52002 11C9.35002 11 10.02 10.33 10.02 9.5C10.02 8.67 9.35002 8 8.52002 8C7.69002 8 7.02002 8.67 7.02002 9.5C7.02002 10.33 7.69002 11 8.52002 11ZM16.77 14.75C15.82 16.39 14.05 17.5 12.02 17.5C9.99002 17.5 8.22002 16.39 7.27002 14.75C7.08002 14.42 7.33002 14 7.71002 14H16.33C16.72 14 16.96 14.42 16.77 14.75Z" fill="currentColor"/></svg>';

const RuxIconTagFaces = class {
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

export { RuxIconTagFaces as rux_icon_tag_faces };
