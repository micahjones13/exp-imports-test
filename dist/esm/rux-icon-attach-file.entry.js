import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6.7499V17.3299C16.5 19.4199 14.97 21.2799 12.89 21.4799C10.5 21.7099 8.5 19.8399 8.5 17.4999V5.1399C8.5 3.8299 9.44 2.6399 10.74 2.5099C12.24 2.3599 13.5 3.5299 13.5 4.9999V15.4999C13.5 16.0499 13.05 16.4999 12.5 16.4999C11.95 16.4999 11.5 16.0499 11.5 15.4999V6.7499C11.5 6.3399 11.16 5.9999 10.75 5.9999C10.34 5.9999 10 6.3399 10 6.7499V15.3599C10 16.6699 10.94 17.8599 12.24 17.9899C13.74 18.1399 15 16.9699 15 15.4999V5.1699C15 3.0799 13.47 1.2199 11.39 1.0199C9.01 0.789902 7 2.6599 7 4.9999V17.2699C7 20.1399 9.1 22.7099 11.96 22.9799C15.25 23.2799 18 20.7199 18 17.4999V6.7499C18 6.3399 17.66 5.9999 17.25 5.9999C16.84 5.9999 16.5 6.3399 16.5 6.7499Z" fill="currentColor"/></svg>';

const RuxIconAttachFile = class {
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

export { RuxIconAttachFile as rux_icon_attach_file };
