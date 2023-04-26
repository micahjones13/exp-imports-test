import { r as registerInstance, h, H as Host, g as getElement } from './index-a1205123.js';

const ruxTabCss = ":host{display:contents}.rux-tab{box-sizing:border-box;display:flex;align-items:center;justify-content:center;margin:0;min-width:5rem;text-decoration:none;color:var(--color-background-interactive-default);border-bottom:var(--border-width-lg) solid transparent;cursor:pointer}.rux-tab:hover{color:var(--color-background-interactive-hover)}.rux-tab:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset);border-radius:var(--focus-radius)}:host([hidden]){display:none}:host span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.rux-tab--large{font-family:var(--font-heading-2-font-family);font-size:var(--font-heading-2-font-size);letter-spacing:var(--font-heading-2-letter-spacing);font-weight:var(--font-heading-2-font-weight);line-height:var(--font-heading-2-line-height);padding:var(--spacing-6) var(--spacing-3);height:var(--spacing-20)}.rux-tab--small{font-family:var(--font-heading-5-font-family);font-size:var(--font-heading-5-font-size);letter-spacing:var(--font-heading-5-letter-spacing);font-weight:var(--font-heading-5-font-weight);line-height:var(--font-heading-5-line-height);padding:var(--spacing-4) var(--spacing-3);height:calc(var(--spacing-16) - var(--spacing-1));min-width:5rem}.rux-tab--large.rux-tab--selected{border-color:var(--color-border-interactive-default)}.rux-tab--small.rux-tab--selected{border-bottom:var(--border-width-lg) solid var(--color-border-interactive-default)}.rux-tab--selected{color:var(--color-text-primary)}.rux-tab--disabled{color:var(--color-text-interactive-default);opacity:var(--opacity-disabled);cursor:not-allowed}.rux-tab--disabled:hover{color:var(--color-text-interactive-default);opacity:var(--opacity-disabled)}";

const RuxTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     *  If present, overrides which tab is selected on load / mount. By default, the first <rux-tab> item is selected.
     */
    this.selected = false;
    /**
     * If present, sets a disabled state on this tab item, indicating it cannot be selected by user action.
     */
    this.disabled = false;
    /**
     * If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses.
     */
    this.small = false;
  }
  connectedCallback() {
    var _a, _b;
    //handle small on init
    if ((_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.getAttributeNode('small')) {
      this.el.setAttribute('small', '');
    }
  }
  _clickHandler(e) {
    if (this.disabled) {
      e.stopImmediatePropagation();
    }
  }
  render() {
    return (h(Host, { onClick: this._clickHandler }, h("div", { part: "container", class: {
        'rux-tab': true,
        'rux-tab--selected': this.selected,
        'rux-tab--small': this.small,
        'rux-tab--large': !this.small,
        'rux-tab--disabled': this.disabled,
      }, role: "tab", tabindex: this.disabled || !this.selected ? '-1' : '0' }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
RuxTab.style = ruxTabCss;

export { RuxTab as rux_tab };
