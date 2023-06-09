import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.01 14H16.21L15.94 13.73C17.09 12.39 17.7 10.59 17.45 8.64C17.11 6 15.1 3.78 12.5 3.18C8.25997 2.2 4.50998 5.53 4.50998 9.5H2.40998C1.93998 9.5 1.72998 10.09 2.09998 10.39L5.49998 13.14C5.68998 13.34 6.00998 13.35 6.20998 13.15L9.10998 10.36C9.42998 10.05 9.20997 9.5 8.75997 9.5H6.50997C6.50997 7.01 8.50998 5.02 10.97 5C13.41 4.98 15.51 7.05 15.51 9.49C15.51 11.97 13.49 14 11.01 14C10.56 14 10.12 13.93 9.70998 13.81C9.36998 13.71 8.99998 13.81 8.74998 14.07C8.21997 14.6 8.42998 15.52 9.13998 15.73C9.72998 15.9 10.36 16 11.01 16C12.62 16 14.09 15.41 15.23 14.43L15.5 14.7V15.49L19.77 19.74C20.18 20.15 20.84 20.15 21.25 19.74C21.66 19.33 21.66 18.66 21.25 18.25L17.01 14Z" fill="currentColor"/></svg>';

const RuxIconYoutubeSearchedFor = class {
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

export { RuxIconYoutubeSearchedFor as rux_icon_youtube_searched_for };
