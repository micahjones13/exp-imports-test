import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.55 9.61L23.64 7C23.6233 6.98743 23.6012 6.97032 23.5736 6.94902C22.8556 6.39434 18.4619 3 12 3C5.53324 3 1.1501 6.38933 0.427896 6.94779L0.427873 6.94781C0.399601 6.96967 0.37694 6.98719 0.359985 7L10.44 19.56C11.24 20.56 12.76 20.56 13.56 19.56L15.5 17.14V14.5C15.5 11.7 17.7 9.5 20.5 9.5C20.86 9.5 21.21 9.54 21.55 9.61ZM23 16V14.5C23 13.1 21.9 12 20.5 12C19.1 12 18 13.1 18 14.5V16C17.5 16 17 16.5 17 17V21C17 21.5 17.5 22 18 22H23C23.5 22 24 21.5 24 21V17C24 16.5 23.5 16 23 16ZM19 16H22V14.5C22 13.7 21.3 13 20.5 13C19.7 13 19 13.7 19 14.5V16Z" fill="currentColor"/></svg>';

const RuxIconSignalWifi4BarLock$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-signal-wifi-4-bar-lock", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-signal-wifi-4-bar-lock"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-signal-wifi-4-bar-lock":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSignalWifi4BarLock$1);
      }
      break;
  } });
}

const RuxIconSignalWifi4BarLock = RuxIconSignalWifi4BarLock$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSignalWifi4BarLock, defineCustomElement };
