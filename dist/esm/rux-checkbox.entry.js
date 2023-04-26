import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a1205123.js';
import { h as hasSlot, r as renderHiddenInput } from './utils-73490106.js';

const ruxCheckboxCss = ".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{display:inline-block;--_checkbox-checkmark-color-fill:var(--color-border-interactive-default);--_checkbox-color-border:var(--color-border-interactive-muted);--_checkbox-color-background:var(--color-background-base-default)}.hidden,:host([hidden]){display:none}.rux-form-field{display:flex;font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);letter-spacing:var(--font-control-body-1-letter-spacing);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);color:var(--color-text-primary);position:relative}label{display:flex;align-items:center}.rux-checkbox{display:flex;cursor:pointer}.rux-checkbox--disabled{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-checkbox__input{position:absolute;pointer-events:none;width:var(--spacing-6);height:var(--spacing-6);margin:var(--spacing-0);opacity:0}.rux-checkbox__input--no-label{margin-right:var(--spacing-0)}.rux-checkbox--focused{border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-checkbox__control{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));padding:var(--spacing-050)}.rux-checkbox__control svg{width:100%;height:100%}.rux-checkbox:not(.rux-checkbox--disabled) .rux-checkbox__control:hover{--_checkbox-color-border:var(--color-border-interactive-hover)}.rux-checkbox__label{margin-left:var(--spacing-2)}";

let id = 0;
const RuxCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.ruxInput = createEvent(this, "ruxinput", 7);
    this.ruxFocus = createEvent(this, "ruxfocus", 7);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.checkboxId = `rux-checkbox-${++id}`;
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.isFocused = false;
    /**
     * The checkbox name
     */
    this.name = '';
    /**
     * The checkbox value
     */
    this.value = '';
    /**
     * Toggles checked state of a checkbox
     */
    this.checked = false;
    /**
     * Toggles indeterminate state of a checkbox. The indeterminate property does not exist in HTML, but can be set in JS. [HTML Checkbox & Indeterminate State](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate)
     */
    this.indeterminate = false;
    /**
     * Disables the checkbox via HTML disabled attribute. Checkbox takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    this._onBlur = () => {
      this.isFocused = false;
      this.ruxBlur.emit();
    };
    this._onFocus = () => {
      var _a;
      this.isFocused = ((_a = this._inputEl) === null || _a === void 0 ? void 0 : _a.matches(':focus-visible')) ? true : false;
      this.ruxFocus.emit();
    };
  }
  updateChecked() {
    if (this._inputEl) {
      this._inputEl.checked = this.checked;
    }
  }
  updateIndeterminate() {
    if (this._inputEl) {
      this._inputEl.indeterminate = this.indeterminate;
    }
  }
  connectedCallback() {
    this._onClick = this._onClick.bind(this);
    this._onInput = this._onInput.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  componentDidLoad() {
    if (this._inputEl && this.indeterminate) {
      // indeterminate property does not exist in HTML but is accessible via js
      this._inputEl.indeterminate = true;
    }
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el);
    this.hasHelpSlot = hasSlot(this.el, 'help-text');
  }
  _onClick(e) {
    const target = e.target;
    if (this.indeterminate) {
      this.indeterminate = false;
    }
    this.checked = target.checked;
    this.ruxChange.emit();
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.ruxInput.emit();
  }
  render() {
    const { _handleSlotChange, _onBlur, _onFocus, _onClick, _onInput, checkboxId, checked, disabled, el, helpText, hasHelpSlot, name, value, indeterminate, label, isFocused, hasLabel, hasLabelSlot, } = this;
    if (!indeterminate) {
      renderHiddenInput(true, el, name, value || 'on', disabled, checked);
    }
    return (h(Host, null, h("div", { class: "rux-form-field", part: "form-field" }, h("label", { class: {
        'rux-checkbox': true,
        'rux-checkbox--disabled': disabled,
        'rux-checkbox--focused': isFocused,
      }, htmlFor: checkboxId }, h("input", { type: "checkbox", class: {
        'rux-checkbox__input': true,
        'rux-checkbox__input--no-label': !hasLabel,
      }, name: name, id: checkboxId, disabled: disabled, checked: checked,
      //Allows storybook's indetermiante control to take effect.
      indeterminate: indeterminate, value: value, onChange: _onClick, onInput: _onInput, onBlur: _onBlur, onFocus: _onFocus, ref: (el) => (this._inputEl = el) }), h("div", { class: "rux-checkbox__control" }, indeterminate ? (h("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", fill: "var(--_checkbox-color-background)" }), h("path", { fill: "var(--_checkbox-checkmark-color-fill)", d: "M4 8h10v2H4z" }), h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", stroke: "var(--_checkbox-color-border)" }))) : checked ? (h("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", fill: "var(--_checkbox-color-background)" }), h("path", { fill: "var(--_checkbox-checkmark-color-fill)", d: "m14.899 4.806-6.883 9.83-1.639-1.147 6.883-9.83z" }), h("path", { fill: "var(--_checkbox-checkmark-color-fill)", d: "m9.163 12.997-1.147 1.638L3.1 11.194l1.147-1.638z" }), h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", stroke: "var(--_checkbox-color-border)" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 18 18" }, h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", fill: "var(--_checkbox-color-background)" }), h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", stroke: "var(--_checkbox-color-border)" })))), h("div", { part: "label", class: {
        'rux-checkbox__label': true,
        hidden: !hasLabel,
      } }, hasLabelSlot ? null : label, h("slot", { onSlotchange: _handleSlotChange })))), h("div", { class: {
        'rux-help-text': !!helpText || hasHelpSlot,
        hidden: !helpText && !hasHelpSlot,
      }, part: "help-text" }, h("slot", { name: "help-text", onSlotchange: _handleSlotChange }, helpText))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "checked": ["updateChecked"],
    "indeterminate": ["updateIndeterminate"]
  }; }
};
RuxCheckbox.style = ruxCheckboxCss;

export { RuxCheckbox as rux_checkbox };
