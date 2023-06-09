import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.81 2.28005C2.2 1.89005 2.84 1.89005 3.23 2.28005L21.54 20.59C21.93 20.98 21.93 21.6101 21.54 22C21.15 22.39 20.52 22.39 20.13 22L18.13 20H1C0.45 20 0 19.55 0 19C0 18.4501 0.45 18 1 18H3.98C2.89 17.99 2.01 17.1 2.01 16.01L2 16C2 16 2 6.92005 1.99 6.02005C1.99 5.12005 2.65 4.55005 2.65 4.55005L1.81 3.69005C1.42 3.30005 1.42 2.67005 1.81 2.28005ZM21.8 18H23C23.55 18 24 18.4501 24 19C24 19.33 23.83 19.6101 23.59 19.7901L21.8 18ZM7 15C7.31 13.52 7.94 12.07 9.08 10.95L10.67 12.54C9.13 12.92 7.96 13.71 7 15ZM13 8.15005V9.13005C12.98 9.13005 12.96 9.14005 12.94 9.15005L7.8 4.02005H20.02C21.11 4.02005 22 4.91005 22 6.00005V16C22 16.61 21.73 17.14 21.3 17.51L15.72 11.93L16.61 11.1C16.82 10.9 16.82 10.57 16.61 10.37L15 8.87005L13.84 7.78005C13.52 7.49005 13 7.71005 13 8.15005Z" fill="currentColor"/></svg>';

const RuxIconStopScreenShare$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-stop-screen-share", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-stop-screen-share"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-stop-screen-share":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconStopScreenShare$1);
      }
      break;
  } });
}

const RuxIconStopScreenShare = RuxIconStopScreenShare$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconStopScreenShare, defineCustomElement };
