import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.71 2.71005L17 7.00005C17.39 7.39005 17.39 8.03005 17 8.42005L13.41 12.0001L17 15.5801C17.39 15.9801 17.39 16.6101 17 17.0001L12.71 21.3001C12.08 21.93 11 21.4801 11 20.5901V14.4101L7.11002 18.3001C6.72002 18.6901 6.09002 18.6901 5.70002 18.3001C5.31002 17.9101 5.31002 17.2801 5.70002 16.8901L10.59 12.0001L5.70002 7.11005C5.31002 6.72005 5.31002 6.09005 5.70002 5.70005C6.09002 5.31005 6.72002 5.31005 7.11002 5.70005L11 9.59005V3.41005C11 2.52005 12.08 2.08005 12.71 2.71005ZM20 11.0001C19.44 10.4401 18.55 10.4401 18 10.9901V11.0001C17.45 11.5501 17.45 12.4401 18 12.9901V13.0001C18.55 13.5501 19.44 13.5501 19.99 13.0001H20C20.55 12.4501 20.55 11.5501 20 11.0001ZM6.00002 13.0001C6.55002 12.4501 6.55002 11.5601 6.00002 11.0101V11.0001C5.45002 10.4501 4.55002 10.4501 4.00002 11.0001C3.45002 11.5501 3.45002 12.4501 4.00002 13.0001C4.55002 13.5501 5.45002 13.5501 6.00002 13.0001ZM14.88 16.2901L13 18.1701V14.4101L14.88 16.2901ZM13 5.83005V9.59005L14.88 7.71005L13 5.83005Z" fill="currentColor"/></svg>';

const RuxIconBluetoothConnected = class {
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

export { RuxIconBluetoothConnected as rux_icon_bluetooth_connected };
