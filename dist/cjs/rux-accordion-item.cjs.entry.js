'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const utils = require('./utils-b3539f54.js');

const ruxAccordionItemCss = ":host{position:relative;box-sizing:border-box;width:100%}summary{list-style:none}details>summary::-webkit-details-marker{display:none;width:0;height:0;position:absolute;visibility:hidden}summary{box-sizing:border-box;display:flex;flex-direction:row;text-align:left;align-items:center;border-radius:var(--radius-base);background-color:var(--color-background-surface-header);color:var(--color-text-interactive-default);padding:var(--spacing-1) var(--spacing-2);box-shadow:0 -1px 0 0 var(--color-background-base-default) inset;cursor:pointer}summary:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset)}summary:hover slot[name=prefix]::slotted(*),summary:hover .indicator--icon,summary:hover .rux-accordion-item--title{color:var(--color-text-interactive-hover)}.rux-accordion-item{display:flex;font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);letter-spacing:var(--font-control-body-1-letter-spacing);text-align:left;color:var(--color-text-primary);padding:var(--spacing-050) var(--spacing-1);}.rux-accordion-item--title{padding:var(--spacing-1) var(--spacing-2);box-sizing:border-box;width:100%;overflow-x:hidden}.rux-accordion-item--content{padding:var(--spacing-4);margin:var(--spacing-0);font-size:var(--font-body-2-font-size);line-height:var(--font-body-2-line-height)}.rux-accordion-item--disabled{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-accordion-item--disabled>summary{cursor:not-allowed;pointer-events:none}.rux-accordion-item--disabled .rux-accordion-item--content{pointer-events:none}:host::part(indicator){display:flex;width:20px;height:20px;padding:var(--spacing-1)}.prefix{display:flex;align-items:center;justify-content:center;padding:var(--spacing-0) var(--spacing-1)}.prefix.prefix--hidden{display:none}.indicator--icon.open{-ms-transform:rotate(-180deg);transform:rotate(-180deg)}slot[name=prefix]::slotted(*){display:flex}slot[name=prefix]::slotted(rux-icon){width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1))}slot[name=label]::slotted(*){width:100%;display:block}";

const RuxAccordionItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxExpanded = index.createEvent(this, "ruxexpanded", 7);
    this.ruxCollapsed = index.createEvent(this, "ruxcollapsed", 7);
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
    this.hasPrefix = utils.hasSlot(this.el, 'prefix');
  }
  connectedCallback() {
    this._clickHandler = this._clickHandler.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  render() {
    const { _handleSlotChange, _clickHandler, hasPrefix, expanded, disabled, } = this;
    return (index.h(index.Host, null, index.h("details", { part: "container", open: expanded, class: {
        'rux-accordion-item': true,
        'rux-accordion-item--disabled': disabled,
      } }, index.h("summary", { part: "label-wrapper", tabindex: disabled ? '-1' : undefined, onClick: _clickHandler }, index.h("span", { part: "prefix", class: hasPrefix ? 'prefix' : 'prefix--hidden' }, index.h("slot", { name: "prefix", onSlotchange: _handleSlotChange })), index.h("div", { part: "label", class: "rux-accordion-item--title" }, index.h("slot", { name: "label" })), index.h("span", { class: "indicator", part: "indicator" }, index.h("svg", { class: {
        'indicator--icon': true,
        open: expanded,
      }, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z", fill: "currentColor" })))), index.h("span", { class: "rux-accordion-item--content" }, index.h("slot", null)))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "expanded": ["updateExpanded"]
  }; }
};
RuxAccordionItem.style = ruxAccordionItemCss;

exports.rux_accordion_item = RuxAccordionItem;
