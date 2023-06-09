import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6 3.37009C16.26 3.33009 16 3.05009 16 2.71009C16 2.32009 16.34 2.00009 16.73 2.05009C19.45 2.38009 21.62 4.55009 21.95 7.27009C22 7.66009 21.68 8.00009 21.29 8.00009C20.95 8.00009 20.67 7.74009 20.63 7.40009C20.37 5.30009 18.7 3.64009 16.6 3.37009ZM12 17.0001C10.3431 17.0001 9 15.6569 9 14.0001C9 12.3432 10.3431 11.0001 12 11.0001C13.6569 11.0001 15 12.3432 15 14.0001C15 15.6569 13.6569 17.0001 12 17.0001ZM18.58 8.00009C19.01 8.00009 19.33 7.60009 19.23 7.19009C18.93 6.00009 18 5.07009 16.81 4.77009C16.4 4.67009 16 4.99009 16 5.42009C16 5.71009 16.19 5.99009 16.48 6.06009C17.2 6.24009 17.77 6.80009 17.94 7.52009C18.01 7.81009 18.28 8.00009 18.58 8.00009ZM17 9.00009H20C21.1 9.00009 22 9.90009 22 11.0001V20.0001C22 21.1001 21.1 22.0001 20 22.0001H4C2.9 22.0001 2 21.1001 2 20.0001V8.00009C2 6.90009 2.9 6.00009 4 6.00009H7.17L8.4 4.65009C8.78 4.24009 9.32 4.00009 9.88 4.00009H14C14.55 4.00009 15 4.45009 15 5.00009V7.00009C16.1 7.00009 17 7.90009 17 9.00009ZM17 14.0001C17 16.7601 14.76 19.0001 12 19.0001C9.24 19.0001 7 16.7601 7 14.0001C7 11.2401 9.24 9.00009 12 9.00009C14.76 9.00009 17 11.2401 17 14.0001Z" fill="currentColor"/></svg>';

const RuxIconLinkedCamera = class {
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

export { RuxIconLinkedCamera as rux_icon_linked_camera };
