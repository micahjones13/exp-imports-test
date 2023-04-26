import { r as registerInstance, h, H as Host, g as getElement } from './index-a1205123.js';
import { h as hasSlot } from './utils-73490106.js';

const ruxCheckboxGroupCss = ".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{display:block}.hidden,:host([hidden]){display:none}::slotted(rux-checkbox){display:block;margin-bottom:var(--spacing-2)}::slotted(rux-checkbox:last-of-type){margin-bottom:0}.rux-label{color:var(--color-text-primary);font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--font-body-1-line-height);margin-bottom:var(--spacing-2);text-align:left}.rux-label__asterisk{margin-left:4px}.rux-checkbox-group{display:flex;flex-direction:column;padding:1rem;width:fit-content;box-shadow:var(--color-border-interactive-muted) 0 0 0 1px inset;border-radius:var(--radius-base)}.rux-checkbox-group--invalid{box-shadow:var(--color-text-error) 0 0 0 1px inset}";

const RuxCheckboxGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    /**
     * Presentational only. Renders the Checkbox Group as invalid.
     */
    this.invalid = false;
    /**
     * Marks that a selection from the checkbox group is requried.
     */
    this.required = false;
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this._handleSlotChange);
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, 'label');
    this.hasErrorSlot = hasSlot(this.el, 'error-text');
    this.hasHelpSlot = hasSlot(this.el, 'help-text');
  }
  render() {
    const { errorText, helpText, hasHelpSlot, hasErrorSlot, _handleSlotChange, } = this;
    return (h(Host, null, h("div", { class: "rux-form-field", part: "form-field" }, h("div", { class: {
        'rux-label': true,
        hidden: !this.hasLabel,
      }, part: "label" }, h("slot", { onSlotchange: this._handleSlotChange, name: "label" }, this.label, this.required && (h("span", { part: "required", class: "rux-label__asterisk" }, "*")))), h("div", { class: {
        'rux-checkbox-group': true,
        'rux-checkbox-group--invalid': this.invalid,
      }, part: "container" }, h("slot", null))), h("div", { class: {
        'rux-error-text': !!errorText || hasErrorSlot,
        hidden: !errorText && !hasErrorSlot,
      }, part: "error-text" }, h("svg", { fill: "none", width: "14", height: "14", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 14 14" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z", fill: "currentColor" })), h("slot", { name: "error-text", onSlotchange: _handleSlotChange }, errorText)), h("div", { class: {
        'rux-help-text': (!!helpText || hasHelpSlot) &&
          (!errorText || !hasErrorSlot),
        hidden: (!helpText && !hasHelpSlot) ||
          !!errorText ||
          hasErrorSlot,
      }, part: "help-text" }, h("slot", { name: "help-text", onSlotchange: _handleSlotChange }, helpText))));
  }
  get el() { return getElement(this); }
};
RuxCheckboxGroup.style = ruxCheckboxGroupCss;

export { RuxCheckboxGroup as rux_checkbox_group };
