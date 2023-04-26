import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hasSlot } from './utils.js';

const ruxAccordionItemCss = ":host{position:relative;box-sizing:border-box;width:100%}summary{list-style:none}details>summary::-webkit-details-marker{display:none;width:0;height:0;position:absolute;visibility:hidden}summary{box-sizing:border-box;display:flex;flex-direction:row;text-align:left;align-items:center;border-radius:var(--radius-base);background-color:var(--color-background-surface-header);color:var(--color-text-interactive-default);padding:var(--spacing-1) var(--spacing-2);box-shadow:0 -1px 0 0 var(--color-background-base-default) inset;cursor:pointer}summary:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset)}summary:hover slot[name=prefix]::slotted(*),summary:hover .indicator--icon,summary:hover .rux-accordion-item--title{color:var(--color-text-interactive-hover)}.rux-accordion-item{display:flex;font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);letter-spacing:var(--font-control-body-1-letter-spacing);text-align:left;color:var(--color-text-primary);padding:var(--spacing-050) var(--spacing-1);}.rux-accordion-item--title{padding:var(--spacing-1) var(--spacing-2);box-sizing:border-box;width:100%;overflow-x:hidden}.rux-accordion-item--content{padding:var(--spacing-4);margin:var(--spacing-0);font-size:var(--font-body-2-font-size);line-height:var(--font-body-2-line-height)}.rux-accordion-item--disabled{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-accordion-item--disabled>summary{cursor:not-allowed;pointer-events:none}.rux-accordion-item--disabled .rux-accordion-item--content{pointer-events:none}:host::part(indicator){display:flex;width:20px;height:20px;padding:var(--spacing-1)}.prefix{display:flex;align-items:center;justify-content:center;padding:var(--spacing-0) var(--spacing-1)}.prefix.prefix--hidden{display:none}.indicator--icon.open{-ms-transform:rotate(-180deg);transform:rotate(-180deg)}slot[name=prefix]::slotted(*){display:flex}slot[name=prefix]::slotted(rux-icon){width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1))}slot[name=label]::slotted(*){width:100%;display:block}";

const RuxAccordionItem$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ruxExpanded = createEvent(this, "ruxexpanded", 7);
    this.ruxCollapsed = createEvent(this, "ruxcollapsed", 7);
    this.hasPrefix = false;
    /**
     * If present, sets the initial state on this accordion item to open, displaying the accordion content.
     */
    this.expanded = false;
    /**
     * If present, sets a disabled state on this accordion item, indicating it cannot be selected by user action.
     */
    this.disabled = false;
  }
  updateExpanded() {
    this.expanded ? this.ruxExpanded.emit() : this.ruxCollapsed.emit();
  }
  _clickHandler(e) {
    //if the rux-accordion-item has the disabled attribute, it cannot be manipulated
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    this.expanded = !this.expanded;
  }
  _handleSlotChange() {
    this.hasPrefix = hasSlot(this.el, 'prefix');
  }
  connectedCallback() {
    this._clickHandler = this._clickHandler.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  render() {
    const { _handleSlotChange, _clickHandler, hasPrefix, expanded, disabled, } = this;
    return (h(Host, null, h("details", { part: "container", open: expanded, class: {
        'rux-accordion-item': true,
        'rux-accordion-item--disabled': disabled,
      } }, h("summary", { part: "label-wrapper", tabindex: disabled ? '-1' : undefined, onClick: _clickHandler }, h("span", { part: "prefix", class: hasPrefix ? 'prefix' : 'prefix--hidden' }, h("slot", { name: "prefix", onSlotchange: _handleSlotChange })), h("div", { part: "label", class: "rux-accordion-item--title" }, h("slot", { name: "label" })), h("span", { class: "indicator", part: "indicator" }, h("svg", { class: {
        'indicator--icon': true,
        open: expanded,
      }, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z", fill: "currentColor" })))), h("span", { class: "rux-accordion-item--content" }, h("slot", null)))));
  }
  get el() { return this; }
  static get watchers() { return {
    "expanded": ["updateExpanded"]
  }; }
  static get style() { return ruxAccordionItemCss; }
}, [1, "rux-accordion-item", {
    "expanded": [1540],
    "disabled": [516],
    "hasPrefix": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-accordion-item"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-accordion-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxAccordionItem$1);
      }
      break;
  } });
}

const RuxAccordionItem = RuxAccordionItem$1;
const defineCustomElement = defineCustomElement$1;

export { RuxAccordionItem, defineCustomElement };
