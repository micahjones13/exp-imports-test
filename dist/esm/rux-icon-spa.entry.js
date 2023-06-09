import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8499 2.87012C14.4599 4.84012 15.3299 7.21012 15.4899 9.63012C14.2099 10.3201 13.0299 11.2001 11.9999 12.2601C10.9699 11.1901 9.78994 10.3101 8.50994 9.63012C8.70994 7.22012 9.62994 4.85012 11.2799 2.87012C11.6899 2.37012 12.4399 2.37012 12.8499 2.87012ZM8.90931 12.2248C8.93676 12.243 8.9637 12.2614 8.98994 12.2801C8.96758 12.2641 8.94471 12.2487 8.92145 12.2335C8.9174 12.2306 8.91336 12.2277 8.90931 12.2248ZM8.90931 12.2248C7.25662 11.0395 5.29629 10.2676 3.16994 10.0601C2.52994 10.0001 1.99994 10.5301 2.05994 11.1701C2.50994 15.9701 5.70994 19.9501 10.0399 21.5001C10.6699 21.7301 11.3299 21.9001 12.0099 22.0101C12.6899 21.8901 13.3399 21.7201 13.9799 21.5001C18.3099 19.9501 21.5099 15.9801 21.9599 11.1701C22.0199 10.5301 21.4799 10.0001 20.8499 10.0601C17.1399 10.4201 13.9499 12.4801 11.9999 15.4501C11.1764 14.1958 10.1316 13.1037 8.92145 12.2335C8.8761 12.204 8.82929 12.1756 8.78191 12.1469L8.78189 12.1469C8.7014 12.0981 8.61927 12.0483 8.53994 11.9901C8.60286 12.0321 8.66754 12.0723 8.73177 12.1122L8.73183 12.1122C8.792 12.1496 8.85177 12.1867 8.90931 12.2248Z" fill="currentColor"/></svg>';

const RuxIconSpa = class {
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

export { RuxIconSpa as rux_icon_spa };
