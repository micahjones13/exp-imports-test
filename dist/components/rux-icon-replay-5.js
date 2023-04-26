import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.21003V5.00003C16.94 5.00003 20.84 9.48003 19.84 14.61C19.24 17.72 16.94 20.11 13.85 20.8C9.02003 21.88 4.71003 18.6 4.08003 14.13C4.00003 13.53 4.48003 13 5.08003 13C5.57003 13 5.99003 13.37 6.05003 13.86C6.54003 17.22 9.83003 19.7 13.47 18.82C15.72 18.28 17.39 16.55 17.86 14.29C18.68 10.42 15.73 7.00003 12 7.00003V9.79003C12 10.24 11.46 10.46 11.14 10.15L7.35003 6.36003C7.15003 6.16003 7.15003 5.85003 7.35003 5.65003L11.15 1.86003C11.46 1.54003 12 1.76003 12 2.21003ZM10.94 11.73L10.69 13.9L11.36 14.06C11.3674 14.0527 11.3747 14.0447 11.3822 14.0366C11.4053 14.0116 11.4298 13.9851 11.46 13.97C11.48 13.96 11.5 13.9475 11.52 13.935C11.54 13.9225 11.56 13.91 11.58 13.9C11.62 13.88 11.68 13.86 11.73 13.85C11.78 13.84 11.85 13.83 11.93 13.83C12.04 13.83 12.15 13.85 12.23 13.88C12.31 13.91 12.38 13.96 12.44 14.03C12.5 14.1 12.54 14.17 12.57 14.27C12.6 14.37 12.61 14.47 12.61 14.58V14.58C12.61 14.69 12.61 14.79 12.58 14.89C12.55 14.99 12.51 15.07 12.47 15.14C12.43 15.21 12.36 15.27 12.29 15.31C12.22 15.35 12.13 15.37 12.02 15.37C11.85 15.37 11.71 15.31 11.6 15.22C11.49 15.13 11.43 14.99 11.41 14.81H10.57C10.57 15.01 10.62 15.19 10.7 15.34C10.78 15.49 10.88 15.63 11.02 15.73C11.16 15.83 11.31 15.92 11.48 15.97C11.65 16.02 11.83 16.05 12.01 16.05C12.26 16.05 12.47 16 12.65 15.93C12.83 15.86 12.98 15.75 13.1 15.62C13.22 15.49 13.31 15.34 13.37 15.17C13.43 15 13.46 14.82 13.46 14.63C13.46 14.41 13.42 14.21 13.37 14.03C13.32 13.85 13.23 13.7 13.12 13.58C13.01 13.46 12.87 13.37 12.71 13.3C12.55 13.23 12.37 13.2 12.16 13.2C12.09 13.2 12.02 13.21 11.96 13.22C11.93 13.225 11.9 13.2325 11.87 13.24C11.84 13.2475 11.81 13.255 11.78 13.26C11.72 13.27 11.67 13.29 11.63 13.31C11.6133 13.3184 11.5966 13.325 11.5807 13.3313C11.5584 13.3401 11.5375 13.3484 11.52 13.36L11.63 12.44H13.33V11.73H10.94Z" fill="currentColor"/></svg>';

const RuxIconReplay5$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-replay-5", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-replay-5"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-replay-5":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconReplay5$1);
      }
      break;
  } });
}

const RuxIconReplay5 = RuxIconReplay5$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconReplay5, defineCustomElement };
