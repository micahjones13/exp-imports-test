import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.42 11.3399L20.56 9.21994L20.82 6.40994C20.87 5.90994 20.53 5.44994 20.05 5.33994L17.29 4.70994L15.85 2.27994C15.59 1.84994 15.06 1.66994 14.6 1.86994L12 2.99994L9.41002 1.88994C8.95002 1.68994 8.41002 1.86994 8.16002 2.29994L6.71002 4.71994L3.96002 5.33994C3.47002 5.44994 3.13002 5.89994 3.18002 6.40994L3.44002 9.20994L1.58002 11.3399C1.25002 11.7199 1.25002 12.2799 1.58002 12.6599L3.44002 14.7799L3.18002 17.5999C3.13002 18.0999 3.47002 18.5599 3.95002 18.6699L6.71002 19.2999L8.15002 21.7199C8.41002 22.1499 8.94002 22.3299 9.41002 22.1299L12 20.9999L14.59 22.1099C15.05 22.3099 15.59 22.1299 15.84 21.6999L17.28 19.2699L20.04 18.6399C20.53 18.5299 20.86 18.0699 20.81 17.5699L20.55 14.7599L22.41 12.6399C22.75 12.2799 22.75 11.7199 22.42 11.3399ZM11 16.9999V14.9999H13V16.9999H11ZM11 11.9999C11 12.5499 11.45 12.9999 12 12.9999C12.55 12.9999 13 12.5499 13 11.9999V7.99994C13 7.44994 12.55 6.99994 12 6.99994C11.45 6.99994 11 7.44994 11 7.99994V11.9999Z" fill="currentColor"/></svg>';

const RuxIconNewReleases = class {
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

export { RuxIconNewReleases as rux_icon_new_releases };
