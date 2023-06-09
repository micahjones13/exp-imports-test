import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.0667L15.28 17.4533C15.8 17.84 16.5067 17.32 16.3067 16.7067L15.0534 12.8533L18.2934 10.5467C18.8267 10.1733 18.56 9.33335 17.9067 9.33335H13.9334L12.64 5.30668C12.44 4.69335 11.5734 4.69335 11.3734 5.30668L10.0667 9.33335H6.09335C5.44002 9.33335 5.17335 10.1733 5.70668 10.5467L8.94668 12.8533L7.69335 16.7067C7.49335 17.32 8.20002 17.8267 8.72002 17.4533L12 15.0667Z" fill="currentColor"/></svg>';

const RuxIconStarRate = class {
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

export { RuxIconStarRate as rux_icon_star_rate };
