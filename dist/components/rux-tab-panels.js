import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const ruxTabPanelCss = ":host{display:block;position:relative;visibility:visible;z-index:1;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base);text-align:left}:host([hidden]){display:none}:host(.hidden){display:none;position:absolute;visibility:hidden;z-index:-1}";

const RuxTabPanels$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ruxRegisterPanels = createEvent(this, "ruxregisterpanels", 7);
  }
  connectedCallback() {
    this.el.setAttribute('style', 'position: relative; width: 100%;');
    this._getSlottedChildren = this._getSlottedChildren.bind(this);
  }
  _getSlottedChildren() {
    var _a, _b;
    const slot = (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('slot');
    if (slot) {
      const childNodes = slot.assignedNodes({ flatten: true });
      const children = Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);
      this._registerTabPanels(children);
      return children;
    }
    else {
      return [];
    }
  }
  _registerTabPanels(children) {
    this.ruxRegisterPanels.emit(children);
  }
  render() {
    return (h(Host, null, h("slot", { onSlotchange: this._getSlottedChildren })));
  }
  get el() { return this; }
  static get style() { return ruxTabPanelCss; }
}, [1, "rux-tab-panels"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-tab-panels"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-tab-panels":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTabPanels$1);
      }
      break;
  } });
}

const RuxTabPanels = RuxTabPanels$1;
const defineCustomElement = defineCustomElement$1;

export { RuxTabPanels, defineCustomElement };
