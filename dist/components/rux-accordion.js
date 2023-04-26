import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxAccordionCss = ":host{display:block}:host([disabled]){cursor:not-allowed;opacity:var(--opacity-disabled)}:host([disabled]) ::slotted(*){pointer-events:none}";

const RuxAccordion$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * If present, sets a disabled state on the accordion, indicating that no part of it can be manipulated by user action.
     */
    this.disabled = false;
    /*******
     * toggles disallow muiltiple - default false
     * *********/
    this.disallowMultiple = false;
  }
  updatedExpanded(event) {
    //if rux-accordion has the attribute to disallow-multiple then make sure only one rux-accordion-item is open at a time
    if (this.disallowMultiple === true) {
      event.preventDefault();
      const items = this.el.querySelectorAll('rux-accordion-item'); //get all rux-accordion-items
      const isExpanded = this.el.hasAttribute('expanded'); // state of the item when accessed
      items.forEach((item) => {
        item.removeAttribute('expanded');
      });
      //only add the expanded attribute if it was not there when clicked. Else, close the item.
      !isExpanded && this.el.setAttribute('expanded', '');
    }
  }
  render() {
    return (h(Host, { tabindex: this.disabled ? '-1' : null }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return ruxAccordionCss; }
}, [1, "rux-accordion", {
    "disabled": [516],
    "disallowMultiple": [516, "disallow-multiple"]
  }, [[0, "ruxexpanded", "updatedExpanded"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-accordion"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-accordion":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxAccordion$1);
      }
      break;
  } });
}

const RuxAccordion = RuxAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { RuxAccordion, defineCustomElement };
