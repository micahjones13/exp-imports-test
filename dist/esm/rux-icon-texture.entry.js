import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.95 3L3.07001 11.88V14.71L14.78 3H11.95ZM19.58 3.08L3.15001 19.51C3.24001 19.85 3.42001 20.16 3.66001 20.41C3.91001 20.65 4.22001 20.83 4.56001 20.92L21 4.49C20.81 3.8 20.27 3.26 19.58 3.08ZM3.07001 5C3.07001 3.9 3.97001 3 5.07001 3H7.07001L3.07001 7V5ZM19.07 21C19.62 21 20.12 20.78 20.48 20.41C20.85 20.05 21.07 19.55 21.07 19V17L17.07 21H19.07ZM12.19 21H9.36001L21.07 9.29V12.12L12.19 21Z" fill="currentColor"/></svg>';

const RuxIconTexture = class {
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

export { RuxIconTexture as rux_icon_texture };
