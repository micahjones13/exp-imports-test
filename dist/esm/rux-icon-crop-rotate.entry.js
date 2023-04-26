import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.66 1.34419C15.99 0.489795 13.83 -0.105405 11.39 0.0385948L15.2 3.69619L16.53 2.41939C19.62 3.82099 21.87 6.61459 22.42 9.96499C22.48 10.3586 22.86 10.6274 23.28 10.5602C23.69 10.5026 23.97 10.1282 23.9 9.7346C23.3 6.0866 20.94 3.0146 17.66 1.34419ZM8.99996 15.3602H19C19.55 15.3602 20 15.7922 20 16.3202C20 16.8482 19.55 17.2802 19 17.2802H18V18.2402C18 18.7682 17.55 19.2002 17 19.2002C16.45 19.2002 16 18.7682 16 18.2402V17.2802H7.99996C6.89996 17.2802 5.99996 16.4162 5.99996 15.3602V7.68019H4.99996C4.44996 7.68019 3.99996 7.2482 3.99996 6.72019C3.99996 6.19219 4.44996 5.76019 4.99996 5.76019H5.99996V4.80019C5.99996 4.27219 6.44996 3.84019 6.99996 3.84019C7.54996 3.84019 7.99996 4.27219 7.99996 4.80019V14.4002C7.99996 14.9282 8.44996 15.3602 8.99996 15.3602ZM16 13.4402V8.64019C16 8.1122 15.55 7.68019 15 7.68019H9.99996V5.76019H16C17.1 5.76019 18 6.62419 18 7.68019V13.4402H16ZM1.57996 13.085C2.12996 16.4354 4.37996 19.229 7.46996 20.6306L8.79996 19.3538L12.61 23.021C10.17 23.165 8.00996 22.5698 6.33996 21.7154C3.05996 20.045 0.699965 16.973 0.0999645 13.3154C0.0299645 12.9218 0.309965 12.5474 0.719965 12.4898C1.13996 12.4226 1.51996 12.6914 1.57996 13.085Z" fill="currentColor"/></svg>';

const RuxIconCropRotate = class {
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

export { RuxIconCropRotate as rux_icon_crop_rotate };
