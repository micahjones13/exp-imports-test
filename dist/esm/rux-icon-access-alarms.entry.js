import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.17001 3.9899L4.10001 6.5499C3.68001 6.8999 3.05001 6.8499 2.70001 6.4199C2.34001 5.9999 2.40001 5.3699 2.82001 5.0099L5.90001 2.4499C6.32001 2.0999 6.95001 2.1499 7.30001 2.5799C7.66001 2.9999 7.60001 3.6299 7.17001 3.9899ZM21.18 5.0099L18.1 2.4499C17.68 2.0999 17.05 2.1499 16.69 2.5799C16.34 2.9999 16.4 3.6299 16.82 3.9899L19.89 6.5499C20.31 6.8999 20.94 6.8499 21.3 6.4199C21.66 5.9999 21.6 5.3699 21.18 5.0099ZM15.87 15.2499L12.5 13.2499V8.7199C12.5 8.3199 12.18 7.9999 11.78 7.9999H11.72C11.32 7.9999 11 8.3199 11 8.7199V13.4399C11 13.7899 11.18 14.1199 11.49 14.2999L15.14 16.4899C15.48 16.6899 15.92 16.5899 16.12 16.2499C16.33 15.8999 16.22 15.4499 15.87 15.2499ZM12 3.9999C7.03001 3.9999 3.00001 8.0299 3.00001 12.9999C3.00001 17.9699 7.03001 21.9999 12 21.9999C16.97 21.9999 21 17.9699 21 12.9999C21 8.0299 16.97 3.9999 12 3.9999ZM5.00001 12.9999C5.00001 16.8599 8.14001 19.9999 12 19.9999C15.86 19.9999 19 16.8599 19 12.9999C19 9.1399 15.86 5.9999 12 5.9999C8.14001 5.9999 5.00001 9.1399 5.00001 12.9999Z" fill="currentColor"/></svg>';

const RuxIconAccessAlarms = class {
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

export { RuxIconAccessAlarms as rux_icon_access_alarms };
