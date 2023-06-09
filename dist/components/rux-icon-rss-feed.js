import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.48 18.44C18.75 11.1 12.91 5.24996 5.56 4.51996C4.73 4.42996 4 5.09996 4 5.92996C4 6.65996 4.55 7.25996 5.27 7.32996C11.28 7.92996 16.06 12.71 16.66 18.72C16.73 19.45 17.33 20 18.06 20C18.9 20 19.56 19.27 19.48 18.44ZM5.59 10.23C9.79 10.9 13.1 14.21 13.78 18.41C13.91 19.25 13.22 20 12.37 20C11.66 20 11.09 19.47 10.97 18.77C10.45 15.85 8.15 13.54 5.23 13.03C4.53 12.91 4 12.34 4 11.63C4 10.78 4.75 10.09 5.59 10.23ZM6.18 20C4.97602 20 4 19.0239 4 17.82C4 16.616 4.97602 15.64 6.18 15.64C7.38398 15.64 8.36 16.616 8.36 17.82C8.36 19.0239 7.38398 20 6.18 20Z" fill="currentColor"/></svg>';

const RuxIconRssFeed$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-rss-feed", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-rss-feed"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-rss-feed":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRssFeed$1);
      }
      break;
  } });
}

const RuxIconRssFeed = RuxIconRssFeed$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRssFeed, defineCustomElement };
