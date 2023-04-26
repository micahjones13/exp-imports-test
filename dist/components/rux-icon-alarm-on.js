import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.17001 3.99L4.10001 6.55C3.68001 6.9 3.05001 6.85 2.70001 6.42C2.34001 6 2.40001 5.37 2.82001 5.01L5.90001 2.45C6.32001 2.1 6.95001 2.15 7.30001 2.58C7.66001 3 7.60001 3.63 7.17001 3.99ZM21.18 5.01L18.1 2.45C17.68 2.1 17.05 2.15 16.69 2.58C16.34 3 16.4 3.63 16.82 3.99L19.89 6.55C20.31 6.9 20.94 6.85 21.3 6.42C21.66 6 21.6 5.37 21.18 5.01ZM14.94 10.11L10.54 14.53L8.94001 12.93C8.65001 12.64 8.17001 12.64 7.88001 12.93C7.59001 13.22 7.59001 13.7 7.88001 13.99L10 16.11C10.29 16.4 10.77 16.4 11.06 16.11L16 11.17C16.29 10.88 16.29 10.4 16 10.11C15.71 9.82 15.23 9.82 14.94 10.11ZM12 4C7.03001 4 3.00001 8.03 3.00001 13C3.00001 17.97 7.03001 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4ZM5.00001 13C5.00001 16.86 8.14001 20 12 20C15.86 20 19 16.86 19 13C19 9.14 15.86 6 12 6C8.14001 6 5.00001 9.14 5.00001 13Z" fill="currentColor"/></svg>';

const RuxIconAlarmOn$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
}, [0, "rux-icon-alarm-on", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-alarm-on"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-alarm-on":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAlarmOn$1);
      }
      break;
  } });
}

const RuxIconAlarmOn = RuxIconAlarmOn$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAlarmOn, defineCustomElement };
