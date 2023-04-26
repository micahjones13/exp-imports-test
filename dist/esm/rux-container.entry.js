import { r as registerInstance, h, H as Host, g as getElement } from './index-a1205123.js';
import { h as hasSlot } from './utils-73490106.js';

const ruxContainerCss = ":host{--container-header-padding:var(--spacing-4);--container-footer-padding:var(--spacing-4);--container-header-background-color:var(--color-background-surface-header);--body-padding:var(--spacing-4);display:block}*{scrollbar-color:var(--color-border-interactive-muted, #2b659b) var(--color-background-surface-default, #1b2d3e);}*::-webkit-scrollbar{width:var(--spacing-4);height:var(--spacing-4);background-color:transparent}*::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:8px;border:3px solid transparent;background-clip:padding-box}*::-webkit-scrollbar-thumb:vertical{border-left-width:var(--border-width-lg)}*::-webkit-scrollbar-thumb:horizontal{border-top-width:var(--border-width-lg)}*::-webkit-scrollbar-thumb:active,*::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}*::-webkit-scrollbar-track,*::-webkit-scrollbar-corner{background-color:var(--color-background-surface-default);box-shadow:var(--scrollbar-shadow-inner-vertical)}*::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical)}*::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-vertical)}.hidden,:host([hidden]){display:none}.rux-container{background:var(--color-background-surface-default);border:1px solid var(--container-color-border)}.rux-container__header{padding:var(--container-header-padding);background:var(--color-background-surface-header);font-family:var(--font-heading-2-font-family);font-size:var(--font-heading-2-font-size);font-weight:var(--font-heading-2-font-weight);letter-spacing:var(--font-heading-2-letter-spacing);line-height:var(--font-heading-2-line-height);text-align:left}.rux-container__tab-bar{background:var(--color-background-surface-header);padding:0 var(--spacing-4) calc(var(--spacing-1) + 2px) var(--spacing-4)}.rux-container__toolbar{background:var(--color-background-surface-header);padding:var(--container-header-padding)}.rux-container__body{padding:var(--body-padding);font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);line-height:var(--font-body-1-line-height);letter-spacing:var(--font-body-1-letter-spacing);text-align:left}.rux-container__footer{background:var(--color-background-surface-default);padding:var(--container-footer-padding);font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);line-height:var(--font-body-1-line-height);letter-spacing:var(--font-body-1-letter-spacing);text-align:left}";

const RuxContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.activeSlots = {
      header: false,
      'tab-bar': false,
      toolbar: false,
      footer: false,
    };
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange(slotName) {
    const show = hasSlot(this.el, slotName);
    this.activeSlots = Object.assign(Object.assign({}, this.activeSlots), { [slotName]: show });
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-container", part: "container" }, h("div", { class: {
        'rux-container__header': true,
        hidden: !this.activeSlots.header,
      }, part: "header" }, h("slot", { name: "header", onSlotchange: () => this._handleSlotChange('header') })), h("div", { class: {
        'rux-container__tab-bar': true,
        hidden: !this.activeSlots['tab-bar'],
      }, part: "tab-bar" }, h("slot", { name: "tab-bar", onSlotchange: () => this._handleSlotChange('tab-bar') })), h("div", { class: {
        'rux-container__toolbar': true,
        hidden: !this.activeSlots.toolbar,
      }, part: "toolbar" }, h("slot", { name: "toolbar", onSlotchange: () => this._handleSlotChange('toolbar') })), h("div", { class: "rux-container__body", part: "body" }, h("slot", null)), h("div", { class: {
        'rux-container__footer': true,
        hidden: !this.activeSlots.footer,
      }, part: "footer" }, h("slot", { name: "footer", onSlotchange: () => this._handleSlotChange('footer') })))));
  }
  get el() { return getElement(this); }
};
RuxContainer.style = ruxContainerCss;

export { RuxContainer as rux_container };
