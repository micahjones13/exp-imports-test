import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.99997 12C2.99997 6.95001 7.16997 2.86001 12.26 3.00001C16.95 3.13001 20.87 7.05001 21 11.74C21.14 16.83 17.05 21 12 21C10.39 21 8.88997 20.57 7.57997 19.84C7.00997 19.52 6.91997 18.73 7.37997 18.27C7.68997 17.95 8.16997 17.87 8.55997 18.09C9.57997 18.66 10.75 19 12 19C15.9 19 19.05 15.81 19 11.9C18.95 8.18001 15.82 5.05001 12.1 5.00001C8.17997 4.95001 4.99997 8.10001 4.99997 12H6.78997C7.23997 12 7.45997 12.54 7.14997 12.85L4.35997 15.64C4.15997 15.84 3.84997 15.84 3.64997 15.64L0.859969 12.85C0.539969 12.54 0.759969 12 1.20997 12H2.99997ZM12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 9.99997 13.1 9.99997 12C9.99997 10.9 10.9 10 12 10Z" fill="currentColor"/></svg>';

const RuxIconSettingsBackupRestore = class {
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

export { RuxIconSettingsBackupRestore as rux_icon_settings_backup_restore };
