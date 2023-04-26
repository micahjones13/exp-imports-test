import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.12 4.06C21.23 4.02 21.33 4 21.43 4C21.76 4 22 4.23 22 4.63V19.37C22 19.77 21.76 20 21.43 20C21.33 20 21.23 19.98 21.12 19.94C18.18 18.85 15.09 18.3 12 18.3C8.91 18.3 5.82 18.84 2.88 19.94C2.77 19.98 2.67 20 2.57 20C2.23 20 2 19.77 2 19.38V4.63C2 4.23 2.23 4 2.57 4C2.66 4 2.77 4.02 2.88 4.06C5.82 5.15 8.91 5.7 12 5.7C15.09 5.7 18.18 5.16 21.12 4.06ZM20 17.45V6.54C17.4 7.32 14.72 7.71 12 7.7C9.28 7.7 6.6 7.31 4 6.54V17.45C6.6 16.68 9.28 16.29 12 16.29C14.72 16.29 17.4 16.68 20 17.45Z" fill="currentColor"/></svg>';

const RuxIconPanoramaHorizontal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-panorama-horizontal", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-panorama-horizontal"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-panorama-horizontal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPanoramaHorizontal$1);
      }
      break;
  } });
}

const RuxIconPanoramaHorizontal = RuxIconPanoramaHorizontal$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPanoramaHorizontal, defineCustomElement };
