import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.70999 2.01003C3.09999 1.62003 3.72999 1.62003 4.11999 2.01003L19.93 17.83C20.32 18.22 20.32 18.85 19.93 19.24C19.54 19.63 18.91 19.63 18.52 19.24L15.91 16.63L13.56 19.56C12.76 20.56 11.24 20.56 10.44 19.56L0.359985 7.00003C0.367221 6.99437 0.375536 6.98783 0.384922 6.98046C0.673863 6.7534 1.97763 5.72888 4.05999 4.77003L2.70999 3.42003C2.31999 3.03003 2.31999 2.40003 2.70999 2.01003ZM23.5736 6.94905C23.6012 6.97035 23.6233 6.98746 23.64 7.00003L18.43 13.5L8.30999 3.38003C9.44999 3.14003 10.68 3.00003 12 3.00003C18.4619 3.00003 22.8556 6.39438 23.5736 6.94905Z" fill="currentColor"/></svg>';

const RuxIconSignalWifiOff = class {
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

export { RuxIconSignalWifiOff as rux_icon_signal_wifi_off };
