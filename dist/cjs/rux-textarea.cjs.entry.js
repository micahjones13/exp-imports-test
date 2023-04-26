'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const utils = require('./utils-b3539f54.js');

const ruxTextareaCss = ".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{display:block}.hidden,:host([hidden]){display:none}textarea{scrollbar-color:var(--color-border-interactive-muted) var(--color-background-surface-default);}textarea::-webkit-scrollbar{width:var(--spacing-4);height:var(--spacing-4);background-color:transparent}textarea::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:var(--spacing-2);border:3px solid transparent;background-clip:padding-box}textarea::-webkit-scrollbar-thumb:vertical{border-left-width:var(--border-width-lg)}textarea::-webkit-scrollbar-thumb:horizontal{border-top-width:var(--border-width-lg)}textarea::-webkit-scrollbar-thumb:active,textarea::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}textarea::-webkit-scrollbar-track{background-color:var(--color-background-surface-default, #1b2d3e);box-shadow:var(--scrollbar-shadow-inner-vertical)}textarea::-webkit-scrollbar-corner{background-color:var(--color-background-surface-default, #1b2d3e)}textarea::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical)}textarea::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-horizontal)}.rux-textarea{box-sizing:border-box;font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);letter-spacing:var(--font-control-body-1-letter-spacing);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);color:var(--color-text-primary);background-color:var(--color-background-base-default);height:var(--spacing-16);width:100%;padding:var(--spacing-2);margin:var(--spacing-0);border:1px solid var(--color-border-interactive-muted);border-radius:var(--radius-base)}.rux-textarea--invalid{border:1px solid var(--color-text-error)}.rux-textarea--disabled{opacity:0.4;opacity:var(--opacity-disabled);cursor:not-allowed}.rux-textarea--small{padding:var(--spacing-1) var(--spacing-2);height:var(--spacing-14)}.rux-textarea--large{height:calc(var(--spacing-16) + var(--spacing-2));padding:var(--spacing-3) var(--spacing-2)}.rux-textarea:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-textarea:hover{border-color:var(--color-background-interactive-hover);outline:none}.rux-textarea--disabled:hover{border:1px solid var(--color-border-interactive-muted);color:var(--color-text-primary)}.rux-textarea--invalid:hover{border:1px solid var(--color-text-error)}.rux-textarea::placeholder{color:var(--color-text-placeholder)}.rux-textarea-field{display:flex;flex-direction:column;color:var(--color-text-primary)}.rux-textarea-label{font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);letter-spacing:var(--font-control-body-1-letter-spacing);margin-bottom:var(--spacing-2);text-align:left}.rux-textarea-label__asterisk{margin-left:var(--spacing-1)}::selection{background-color:var(--color-palette-brightblue-400)}";

let id = 0;
const RuxTextarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxChange = index.createEvent(this, "ruxchange", 7);
    this.ruxInput = index.createEvent(this, "ruxinput", 7);
    this.ruxBlur = index.createEvent(this, "ruxblur", 7);
    this.inputId = `rux-textarea-${++id}`;
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    /**
     * Presentational only. Renders the Textarea as invalid.
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
     * Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    /**
     * Sets the input as disabled
     */
    this.required = false;
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
  }
  /**
   * Sets element as focused
   */
  async setFocus(options) {
    this.textareaEl.focus(options);
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);
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
    this.hasLabelSlot = utils.hasSlot(this.el, 'label');
    this.hasErrorSlot = utils.hasSlot(this.el, 'error-text');
    this.hasHelpSlot = utils.hasSlot(this.el, 'help-text');
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
  render() {
    utils.renderHiddenInput(true, this.el, this.name, this.value, this.disabled);
    return (index.h(index.Host, null, index.h("div", { class: "rux-textarea-field", part: "form-field" }, this.hasLabel ? (index.h("label", { class: {
        'rux-textarea-label': true,
      }, "aria-hidden": this.hasLabel ? 'false' : 'true', htmlFor: this.inputId, part: "label" }, index.h("span", { class: { hidden: !this.hasLabel } }, index.h("slot", { onSlotchange: this._handleSlotChange, name: "label" }, this.label, this.required && (index.h("span", { part: "required", class: "rux-textarea-label__asterisk" }, "*")))))) : null, index.h("textarea", { ref: (el) => (this.textareaEl = el), name: this.name, disabled: this.disabled, "aria-invalid": this.invalid ? 'true' : 'false', placeholder: this.placeholder, required: this.required, minlength: this.minLength, maxlength: this.maxLength, value: this.value, class: {
        'rux-textarea': true,
        'rux-textarea--disabled': this.disabled,
        'rux-textarea--invalid': this.invalid,
        'rux-textarea--small': this.size === 'small',
        'rux-textarea--large': this.size === 'large',
      }, id: this.inputId, rows: this.rows, onChange: this._onChange, onInput: this._onInput, onBlur: this._onBlur, part: "textarea" })), index.h("div", { class: {
        'rux-error-text': !!this.errorText || this.hasErrorSlot,
        hidden: !this.errorText && !this.hasErrorSlot,
      }, part: "error-text" }, index.h("svg", { fill: "none", width: "14", height: "14", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 14 14" }, index.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z", fill: "currentColor" })), index.h("slot", { name: "error-text", onSlotchange: this._handleSlotChange }, this.errorText)), index.h("div", { class: {
        'rux-help-text': (!!this.helpText || this.hasHelpSlot) &&
          (!this.errorText || !this.hasErrorSlot),
        hidden: (!this.helpText && !this.hasHelpSlot) ||
          !!this.errorText ||
          this.hasErrorSlot,
      }, part: "help-text" }, index.h("slot", { name: "help-text", onSlotchange: this._handleSlotChange }, this.helpText))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "label": ["handleLabelChange"]
  }; }
};
RuxTextarea.style = ruxTextareaCss;

exports.rux_textarea = RuxTextarea;
