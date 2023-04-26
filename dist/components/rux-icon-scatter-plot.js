import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 9C9.34315 9 8 7.65685 8 6C8 4.34315 9.34315 3 11 3C12.6569 3 14 4.34315 14 6C14 7.65685 12.6569 9 11 9ZM7 17C5.34315 17 4 15.6569 4 14C4 12.3431 5.34315 11 7 11C8.65685 11 10 12.3431 10 14C10 15.6569 8.65685 17 7 17ZM13.6 17.6C13.6 19.2569 14.9431 20.6 16.6 20.6C18.2569 20.6 19.6 19.2569 19.6 17.6C19.6 15.9431 18.2569 14.6 16.6 14.6C14.9431 14.6 13.6 15.9431 13.6 17.6Z" fill="currentColor"/></svg>';

const RuxIconScatterPlot$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-scatter-plot", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-scatter-plot"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-scatter-plot":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconScatterPlot$1);
      }
      break;
  } });
}

const RuxIconScatterPlot = RuxIconScatterPlot$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconScatterPlot, defineCustomElement };
