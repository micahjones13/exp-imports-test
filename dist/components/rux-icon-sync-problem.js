import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.79 4H15.5C15.22 4 15 4.22 15 4.5V8.79C15 9.24 15.54 9.46 15.85 9.14L17.24 7.75C18.32 8.85 19 10.34 19 12C19 14.39 17.6 16.46 15.57 17.42C15.23 17.58 15 17.89 15 18.26V18.44C15 19.12 15.71 19.55 16.32 19.26C19.08 18.01 21 15.23 21 12C21 9.79 20.09 7.8 18.64 6.36L20.15 4.85C20.46 4.54 20.24 4 19.79 4ZM5.36 17.64C3.91 16.2 3 14.21 3 12C3 8.77 4.92 5.99 7.68 4.73C8.29 4.44 9 4.87 9 5.55V5.74C9 6.11 8.77 6.42 8.43 6.58C6.4 7.54 5 9.61 5 12C5 13.66 5.68 15.15 6.76 16.25L8.15 14.86C8.46 14.54 9 14.76 9 15.21V19.5C9 19.78 8.78 20 8.5 20H4.21C3.76 20 3.54 19.46 3.85 19.15L5.36 17.64ZM13 15V17H11V15H13ZM13 12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V12Z" fill="currentColor"/></svg>';

const RuxIconSyncProblem$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-sync-problem", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-sync-problem"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-sync-problem":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSyncProblem$1);
      }
      break;
  } });
}

const RuxIconSyncProblem = RuxIconSyncProblem$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSyncProblem, defineCustomElement };
