import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.0002H13.41L16.35 3.0602C16.55 2.8602 16.55 2.5502 16.35 2.3502C16.15 2.1502 15.84 2.1502 15.64 2.3502L12 5.9902L8.36 2.3502C8.16 2.1502 7.85 2.1502 7.65 2.3502C7.45 2.5502 7.45 2.8602 7.65 3.0602L10.59 6.0002H3C1.9 6.0002 1 6.8902 1 8.0002V20.0002C1 21.1002 1.9 22.0002 3 22.0002H21C22.1 22.0002 23 21.1002 23 20.0002V8.0002C23 6.8902 22.1 6.0002 21 6.0002ZM10.5 17.1502L14.48 14.8702C15.15 14.4902 15.15 13.5202 14.48 13.1302L10.5 10.8502C9.83 10.4702 9 10.9602 9 11.7202V16.2702C9 17.0402 9.83 17.5302 10.5 17.1502ZM4 20.0002H20C20.55 20.0002 21 19.5502 21 19.0002V9.0002C21 8.4502 20.55 8.0002 20 8.0002H4C3.45 8.0002 3 8.4502 3 9.0002V19.0002C3 19.5502 3.45 20.0002 4 20.0002Z" fill="currentColor"/></svg>';

const RuxIconLiveTv$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-live-tv", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-live-tv"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-live-tv":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLiveTv$1);
      }
      break;
  } });
}

const RuxIconLiveTv = RuxIconLiveTv$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLiveTv, defineCustomElement };
