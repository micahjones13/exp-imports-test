import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.73004 21H21.26C22.03 21 22.51 20.17 22.13 19.5L12.86 3.5C12.47 2.83 11.51 2.83 11.13 3.5L1.86004 19.5C1.48004 20.17 1.96004 21 2.73004 21ZM13 18H11V16H13V18ZM11 13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13V11C13 10.45 12.55 10 12 10C11.45 10 11 10.45 11 11V13Z" fill="currentColor"/></svg>';

const RuxIconReportProblem$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-report-problem", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-report-problem"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-report-problem":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconReportProblem$1);
      }
      break;
  } });
}

const RuxIconReportProblem = RuxIconReportProblem$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconReportProblem, defineCustomElement };
