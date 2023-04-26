import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.01 7H11.98C11.44 7 11 6.56 11 6.01V2.98C11 2.44 11.44 2 11.99 2H12.02C12.56 2 13 2.44 13 2.98V6.02C13 6.56 12.56 7 12.01 7ZM18.3 9.11C17.91 9.5 17.29 9.5 16.9 9.11L16.89 9.09C16.5 8.71 16.5 8.08 16.89 7.7L19.06 5.55C19.44 5.17 20.07 5.17 20.45 5.55C20.84 5.93 20.84 6.56 20.45 6.94C19.82 7.57 18.92 8.48 18.3 9.11ZM5.71003 9.1C6.09003 9.49 6.72003 9.49 7.11003 9.1C7.49003 8.72 7.49003 8.09 7.11003 7.71L4.96003 5.54C4.58003 5.15 3.95003 5.15 3.57003 5.54L3.55003 5.55C3.16003 5.94 3.16003 6.56 3.55003 6.94C4.18003 7.56 5.09003 8.47 5.71003 9.1ZM0.81003 16.23C7.22003 10.57 16.88 10.57 23.29 16.23C24.14 16.98 24.14 18.31 23.35 19.11L22.13 20.33C21.41 21.05 20.27 21.11 19.47 20.48L17.48 18.9C17 18.52 16.72 17.94 16.72 17.33V14.72C13.69 13.73 10.42 13.74 7.40003 14.72V17.32C7.40003 17.93 7.12003 18.51 6.64003 18.89L4.64003 20.48C3.84003 21.11 2.70003 21.05 1.98003 20.33L0.76003 19.11C-0.0399702 18.31 -0.0399703 16.98 0.81003 16.23Z" fill="currentColor"/></svg>';

const RuxIconRingVolume$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-ring-volume", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-ring-volume"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-ring-volume":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRingVolume$1);
      }
      break;
  } });
}

const RuxIconRingVolume = RuxIconRingVolume$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRingVolume, defineCustomElement };
