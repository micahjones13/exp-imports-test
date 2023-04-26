import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hasSlot, r as renderHiddenInput } from './utils.js';
import { d as defineCustomElement$1 } from './rux-icon2.js';

const ruxInputCss = ".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{display:block;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base)}:host .rux-form-field{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;color:var(--color-text-primary)}:host rux-icon{cursor:pointer}:host input[type=date i]::-webkit-calendar-picker-indicator{cursor:pointer;--webkit-appearance:none;background:var(--color-background-base-default) url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V9H19V19ZM9 13V11H7V13H9ZM11 11H13V13H11V11ZM17 13V11H15V13H17Z' fill='%234dacff'/%3E%3C/svg%3E%0A\");background-position:center}:host input[type=datetime-local i]::-webkit-calendar-picker-indicator{cursor:pointer;--webkit-appearance:none;background:var(--color-background-base-default) url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V9H19V19ZM9 13V11H7V13H9ZM11 11H13V13H11V11ZM17 13V11H15V13H17Z' fill='%234dacff'/%3E%3C/svg%3E%0A\");background-position:center}:host input[type=time i]::-webkit-calendar-picker-indicator{background:var(--color-background-base-default) url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11.72 7H11.78C12.18 7 12.5 7.32 12.5 7.72V12.26L16.37 14.56C16.72 14.76 16.83 15.21 16.62 15.55C16.42 15.89 15.98 15.99 15.64 15.79L11.49 13.3C11.18 13.12 11 12.79 11 12.44V7.72C11 7.32 11.32 7 11.72 7Z' fill='%234dacff'/%3E%3C/svg%3E\");cursor:pointer;background-position:center}:host input::placeholder{color:var(--color-text-placeholder)}:host .rux-input{width:100%;overflow:hidden;flex:1 1 auto;display:inline-flex;align-items:center;justify-content:start;position:relative;box-sizing:border-box;order:2;box-shadow:var(--color-border-interactive-muted) 0 0 0 1px inset;border-radius:var(--radius-base);font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);letter-spacing:var(--font-control-body-1-letter-spacing);color:var(--color-text-primary);background-color:var(--color-background-base-default)}:host .rux-input input{border:none;background:none;box-shadow:none;padding:var(--spacing-0);margin:var(--spacing-0);color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;-webkit-appearance:none;height:var(--line-height-sm);appearance:none;outline:none;width:100%}:host .rux-input input:disabled{cursor:not-allowed}:host .rux-input--invalid{box-shadow:var(--color-border-error) 0 0 0 1px inset}:host .rux-input--disabled{opacity:var(--opacity-disabled);cursor:not-allowed}:host .rux-input--small{padding:var(--spacing-1) var(--spacing-2)}:host .rux-input--medium{padding:var(--spacing-2)}:host .rux-input--large{padding:var(--spacing-3) var(--spacing-2)}:host .rux-input--search{-webkit-appearance:none;-moz-appearance:none;padding-left:var(--spacing-8);background-color:var(--color-background-base-default);background-image:url(\"data:image/svg+xml,%3Csvg width='20' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.71 14H15.5L19.74 18.26C20.15 18.67 20.15 19.34 19.74 19.75C19.33 20.16 18.66 20.16 18.25 19.75L14 15.5V14.71L13.73 14.43C12.33 15.63 10.42 16.25 8.39002 15.91C5.61002 15.44 3.39002 13.12 3.05002 10.32C2.53002 6.09 6.09002 2.53 10.32 3.05C13.12 3.39 15.44 5.61 15.91 8.39C16.25 10.42 15.63 12.33 14.43 13.73L14.71 14ZM5.00002 9.5C5.00002 11.99 7.01002 14 9.50002 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.50002 5C7.01002 5 5.00002 7.01 5.00002 9.5Z' fill='%234dacff' fill-rule='evenodd'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:8px center;background-size:1.05rem}:host .rux-input--focused{outline:var(--focus-outline);outline-offset:var(--focus-offset)}:host .rux-input:hover{box-shadow:var(--color-background-interactive-hover) 0 0 0 1px inset;outline:2px solid transparent}:host .rux-input--disabled:hover{box-shadow:var(--color-border-interactive-muted) 0 0 0 1px inset;color:var(--color-text-primary)}:host .rux-input--invalid:hover{box-shadow:var(--color-border-error) 0 0 0 1px inset}:host .rux-input .rux-input-prefix,:host .rux-input .rux-input-suffix{display:inline-flex;flex:0 0 auto;align-items:center;cursor:default}:host .rux-input .rux-input-prefix ::slotted(*){padding-right:var(--spacing-1)}:host .rux-input .rux-input-suffix ::slotted(*){padding-left:var(--spacing-1)}:host .rux-input-label{font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);letter-spacing:var(--font-control-body-1-letter-spacing);margin-bottom:var(--spacing-2)}:host .rux-input-label__asterisk{margin-left:var(--spacing-1)}:host ::selection{background-color:var(--color-palette-brightblue-400)}.pw-button::part(container){display:flex;flex-direction:column;align-items:flex-end;justify-content:center}.pw-button{border:none;background:transparent;height:calc(var(--spacing-6) - var(--spacing-1));width:var(--spacing-4);padding:var(--spacing-0);line-height:var(--line-height-sm);width:calc(var(--spacing-6) - var(--spacing-1))}.pw-button:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset)}.hidden,:host([hidden]){display:none}";

let id = 0;
const RuxInput = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.ruxInput = createEvent(this, "ruxinput", 7);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.ruxFocus = createEvent(this, "ruxfocus", 7);
    this.inputId = `rux-input-${++id}`;
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    this.togglePassword = false;
    this.isPasswordVisible = false;
    this.hasFocus = false;
    /**
     * Presentational only. Renders the Input Field as invalid.
     */
    this.invalid = false;
    /**
     * The input value
     */
    this.value = '';
    /**
     * The input name
     */
    this.name = '';
    /**
     * The input type
     */
    this.type = 'text';
    /**
     * Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    /**
     * Sets the input as required
     */
    this.required = false;
    /**
     * Control the padding around the input field
     */
    this.size = 'medium';
    /**
     * The input's spellcheck attribute
     */
    this.spellcheck = false;
    /**
     * The inputs readonly attribute
     */
    this.readonly = false;
    this._onBlur = () => {
      this.ruxBlur.emit();
      this.hasFocus = false;
    };
    this._onFocus = () => {
      this.ruxFocus.emit();
      this.hasFocus = true;
    };
  }
  /**
   * Sets element as focused
   */
  async setFocus(options) {
    this.inputEl.focus(options);
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  handleTypeChange() {
    this._setTogglePassword();
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleTogglePassword = this._handleTogglePassword.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this._handleSlotChange);
  }
  componentWillLoad() {
    this._handleSlotChange();
    this._setTogglePassword();
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _onChange(e) {
    const target = e.target;
    this.value = target.value;
    this.ruxChange.emit();
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.ruxInput.emit();
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, 'label');
    this.hasErrorSlot = hasSlot(this.el, 'error-text');
    this.hasHelpSlot = hasSlot(this.el, 'help-text');
  }
  _setTogglePassword() {
    this.type === 'password' ? (this.togglePassword = true) : false;
  }
  _handleTogglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  render() {
    const { disabled, el, errorText, helpText, hasHelpSlot, hasErrorSlot, inputId, invalid, label, max, min, name, _onChange, _onInput, _onBlur, _onFocus, _handleSlotChange, _handleTogglePassword, placeholder, required, step, type, value, hasLabel, size, spellcheck, readonly, togglePassword, isPasswordVisible, } = this;
    renderHiddenInput(true, el, name, value, disabled);
    return (h(Host, null, h("div", { class: "rux-form-field", part: "form-field" }, hasLabel ? (h("label", { class: {
        'rux-input-label': true,
      }, part: "label", "aria-hidden": hasLabel ? 'false' : 'true', htmlFor: inputId }, h("span", { class: {
        hidden: !hasLabel,
      } }, h("slot", { name: "label", onSlotchange: _handleSlotChange }, label, required && (h("span", { part: "required", class: "rux-input-label__asterisk" }, "*")))))) : null, h("div", { part: "input-field", class: {
        'rux-input': true,
        'rux-input--focused': this.hasFocus,
        'rux-input--disabled': disabled,
        'rux-input--invalid': invalid,
        'rux-input--search': type === 'search',
        'rux-input--small': size === 'small',
        'rux-input--medium': size === 'medium',
        'rux-input--large': size === 'large',
      } }, h("span", { part: "prefix", class: "rux-input-prefix" }, h("slot", { name: "prefix" })), h("input", { name: name, disabled: disabled, ref: (el) => (this.inputEl = el), type: type === 'password' && this.isPasswordVisible
        ? 'text'
        : type, "aria-invalid": invalid ? 'true' : 'false', placeholder: placeholder, required: required, step: step, min: min, max: max, value: value, class: "native-input", id: inputId, spellcheck: spellcheck, readonly: readonly, onChange: _onChange, onInput: _onInput, onBlur: _onBlur, onFocus: _onFocus, part: "input" }), togglePassword ? (h("button", { onClick: _handleTogglePassword, class: "pw-button" }, h("rux-icon", { exportparts: "icon", icon: isPasswordVisible
        ? 'visibility-off'
        : 'visibility', size: "22px" }))) : null, h("span", { part: "suffix", class: "rux-input-suffix" }, h("slot", { name: "suffix" })))), h("div", { class: {
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
  get el() { return this; }
  static get watchers() { return {
    "label": ["handleLabelChange"],
    "type": ["handleTypeChange"]
  }; }
  static get style() { return ruxInputCss; }
}, [1, "rux-input", {
    "label": [1],
    "placeholder": [1],
    "helpText": [1, "help-text"],
    "errorText": [1, "error-text"],
    "invalid": [4],
    "value": [1537],
    "name": [1],
    "type": [1],
    "min": [1],
    "max": [1],
    "disabled": [516],
    "required": [4],
    "size": [1],
    "step": [1],
    "spellcheck": [4],
    "readonly": [4],
    "hasLabelSlot": [32],
    "hasHelpSlot": [32],
    "hasErrorSlot": [32],
    "togglePassword": [32],
    "isPasswordVisible": [32],
    "hasFocus": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-input", "rux-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxInput);
      }
      break;
    case "rux-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { RuxInput as R, defineCustomElement as d };
