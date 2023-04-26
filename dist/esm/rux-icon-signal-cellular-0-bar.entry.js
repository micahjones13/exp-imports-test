import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9944 3.91464C21.9088 3.0801 20.8691 2.6835 20.252 3.30043L3.30307 20.2527L3.22822 20.3354C2.69734 20.9865 3.14675 22 4.01865 22H19.9555L20.1075 21.9944C21.1617 21.916 22 21.0293 22 19.9563V4.02593L21.9944 3.91464ZM4.01004 20.9599L20.9591 4.00747L20.9755 4.0021C20.9876 4.00317 21 4.01273 21 4.02593V19.9563L20.9938 20.0692C20.9366 20.5888 20.4896 21 19.9555 21H4.01865L4.006 20.9932C3.99982 20.985 3.99914 20.9708 4.01004 20.9599Z" fill="currentColor"/></svg>';

const RuxIconSignalCellular0Bar = class {
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

export { RuxIconSignalCellular0Bar as rux_icon_signal_cellular_0_bar };
