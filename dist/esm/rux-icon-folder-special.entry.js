import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6H20C21.1 6 22 6.9 22 8V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H9.17C9.7 4 10.21 4.21 10.59 4.59L12 6ZM15 15.28L16.94 16.41C17.31 16.63 17.77 16.29 17.66 15.86L17.15 13.66L18.84 12.2C19.18 11.91 19 11.36 18.56 11.32L16.33 11.13L15.45 9.07C15.28 8.67 14.7 8.67 14.53 9.07L13.65 11.13L11.42 11.32C10.98 11.36 10.81 11.91 11.14 12.2L12.83 13.66L12.32 15.86C12.22 16.29 12.68 16.63 13.06 16.41L15 15.28Z" fill="currentColor"/></svg>';

const RuxIconFolderSpecial = class {
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

export { RuxIconFolderSpecial as rux_icon_folder_special };
