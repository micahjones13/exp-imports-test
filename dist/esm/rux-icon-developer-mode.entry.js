import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 5H6.99997V6C6.99997 6.55 6.54997 7 5.99997 7C5.44997 7 4.99997 6.55 4.99997 6V3C4.99997 1.9 5.89997 1 6.99997 1L17 1.01C18.1 1.01 19 1.9 19 3V6C19 6.55 18.55 7 18 7C17.45 7 17 6.55 17 6V5ZM19.29 12.71L16.12 15.88C15.73 16.27 15.09 16.27 14.7 15.88C14.31 15.49 14.31 14.86 14.7 14.47L17.17 12L14.7 9.54C14.31 9.15 14.31 8.52 14.7 8.13C15.09 7.74 15.73 7.74 16.12 8.13L19.29 11.3C19.68 11.69 19.68 12.32 19.29 12.71ZM9.28997 14.46L6.82997 12L9.28997 9.54C9.67997 9.15 9.67997 8.52 9.28997 8.13C8.89997 7.74 8.25997 7.74 7.86997 8.13L4.69997 11.3C4.30997 11.69 4.30997 12.32 4.69997 12.71L7.86997 15.88C8.25997 16.27 8.89997 16.27 9.28997 15.88C9.68997 15.49 9.67997 14.85 9.28997 14.46ZM6.99997 19H17V18C17 17.45 17.45 17 18 17C18.55 17 19 17.45 19 18V21C19 22.1 18.1 23 17 23H6.99997C5.89997 23 4.99997 22.1 4.99997 21V18C4.99997 17.45 5.44997 17 5.99997 17C6.54997 17 6.99997 17.45 6.99997 18V19Z" fill="currentColor"/></svg>';

const RuxIconDeveloperMode = class {
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

export { RuxIconDeveloperMode as rux_icon_developer_mode };
