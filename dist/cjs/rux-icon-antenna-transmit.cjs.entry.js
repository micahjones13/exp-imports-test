'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.53115 17.8387L6.58945 18.8268L8.92522 18.6021L9.83101 20.4262C9.89964 20.5644 9.93535 20.7167 9.93535 20.871C9.93535 21.3838 9.54931 21.8065 9.05197 21.8642L8.93535 21.871H4.20497C3.9626 21.871 3.72849 21.783 3.54616 21.6233C3.16263 21.2874 3.09746 20.7233 3.37588 20.3117L3.45266 20.2122L5.53115 17.8387ZM7.09757 10.0443C7.33377 10.0636 7.55543 10.1662 7.72301 10.3338L10.042 12.6529L12 12L11.347 13.9579L13.2146 15.8254C13.6051 16.2159 13.6051 16.8491 13.2146 17.2396C13.047 17.4072 12.8253 17.5098 12.5891 17.5291L7.30432 17.9622C7.01163 17.9862 6.7232 17.8803 6.51554 17.6726L5.87575 17.0328C5.66809 16.8252 5.56221 16.5368 5.58619 16.2441L6.01924 10.9593C6.06434 10.4088 6.54713 9.99916 7.09757 10.0443ZM12.0401 6.00108L12.153 6.01316C15.1469 6.4985 17.5035 8.86452 17.989 11.8473C18.08 12.454 17.5945 13 16.9776 13C16.5201 13 16.1315 12.6898 16.0108 12.2524L15.9864 12.1406C15.6222 10.0374 13.9635 8.37918 11.8597 8.01518C11.3641 7.93429 11 7.51973 11 7.02428C11 6.4846 11.4182 6.03781 11.9292 6.00228L12.0401 6.00108ZM11.998 2.00009L12.1156 2.0053C17.3416 2.5279 21.4822 6.6685 21.9948 11.8945C22.0551 12.4875 21.5827 13 20.9898 13C20.4772 13 20.0451 12.6181 19.9948 12.1156C19.5828 7.82425 16.1657 4.40725 11.8744 3.9952C11.3719 3.94495 11 3.50275 11 3.00025C11 2.48636 11.3925 2.0706 11.8832 2.00812L11.998 2.00009Z" fill="currentColor"/></svg>';

const RuxIconAntennaTransmit = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("div", { style: style, innerHTML: svgIcon });
  }
};

exports.rux_icon_antenna_transmit = RuxIconAntennaTransmit;
