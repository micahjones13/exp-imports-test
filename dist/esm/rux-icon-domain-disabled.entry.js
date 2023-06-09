import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.70998 2.38991C0.31998 2.77991 0.31998 3.40991 0.70998 3.79991L1.99998 5.09991V18.9999C1.99998 20.0999 2.89998 20.9999 3.99998 20.9999H17.9L20.19 23.2899C20.58 23.6799 21.21 23.6799 21.6 23.2899C21.99 22.8999 21.99 22.2699 21.6 21.8799L2.11998 2.38991C1.72998 1.99991 1.09998 1.99991 0.70998 2.38991ZM5.99998 18.9999H3.99998V16.9999H5.99998V18.9999ZM3.99998 14.9999H5.99998V12.9999H3.99998V14.9999ZM3.99998 10.9999V8.99991H5.99998V10.9999H3.99998ZM7.99998 18.9999H9.99998V16.9999H7.99998V18.9999ZM7.99998 14.9999V12.9999H9.99998V14.9999H7.99998ZM12 16.9999V18.9999H15.9L13.9 16.9999H12ZM7.99998 4.99991H9.99998V6.99991H9.54998L12 9.44991V8.99991H19C19.55 8.99991 20 9.44991 20 9.99991V17.4499L22 19.4499V8.99991C22 7.89991 21.1 6.99991 20 6.99991H12V4.99991C12 3.89991 11.1 2.99991 9.99998 2.99991H5.54998L7.99998 5.44991V4.99991ZM18 10.9999H16V12.9999H18V10.9999Z" fill="currentColor"/></svg>';

const RuxIconDomainDisabled = class {
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

export { RuxIconDomainDisabled as rux_icon_domain_disabled };
