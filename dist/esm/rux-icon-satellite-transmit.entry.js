import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.87871 8.87868C9.65976 8.09763 10.9261 8.09763 11.7071 8.87868L13.1213 10.2929C13.9024 11.0739 13.9024 12.3403 13.1213 13.1213C12.3403 13.9024 11.074 13.9024 10.2929 13.1213L8.87871 11.7071C8.09766 10.9261 8.09766 9.65973 8.87871 8.87868ZM4.05657 15.3702C4.09551 15.3313 4.13761 15.2956 4.18243 15.2636L8.1716 12.4142L9.58581 13.8284L6.73641 17.8176C6.4154 18.267 5.79085 18.3711 5.34144 18.0501C5.29662 18.0181 5.25452 17.9824 5.21557 17.9435L4.05657 16.7845C3.66604 16.3939 3.66604 15.7608 4.05657 15.3702ZM20.9898 11C21.5828 11 22.0551 11.5125 21.9948 12.1055C21.4823 17.3315 17.3416 21.4721 12.1156 21.9947C11.5226 22.055 11 21.5927 11 20.9998C11 20.4973 11.3719 20.0551 11.8744 20.0048C16.1658 19.5928 19.5828 16.1757 19.9949 11.8844C20.0451 11.3819 20.4773 11 20.9898 11ZM16.9776 11C17.5946 11 18.08 11.546 17.989 12.1527C17.5035 15.1355 15.1469 17.5015 12.1531 17.9868C11.5462 18.088 11 17.5925 11 16.9757C11 16.4803 11.3641 16.0657 11.8597 15.9848C13.8884 15.6338 15.5032 14.0794 15.9425 12.083L15.9864 11.8595C16.0673 11.364 16.482 11 16.9776 11ZM16.6903 3.97335L16.7845 4.05653L17.9435 5.21554C17.9824 5.25449 18.0181 5.29659 18.0501 5.34141C18.3464 5.75625 18.2805 6.32032 17.9152 6.65713L17.8176 6.73638L13.8285 9.58578L12.4142 8.17157L15.2636 4.1824C15.2957 4.13758 15.3313 4.09548 15.3703 4.05653C15.7308 3.69605 16.298 3.66832 16.6903 3.97335Z" fill="currentColor"/></svg>';

const RuxIconSatelliteTransmit = class {
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

export { RuxIconSatelliteTransmit as rux_icon_satellite_transmit };
