import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a1205123.js';
import { h as hasSlot, r as renderHiddenInput } from './utils-73490106.js';

const ruxRadioGroupCss = ".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{display:block}.hidden,:host([hidden]){display:none}::slotted(rux-radio){display:block;margin-bottom:var(--spacing-2)}::slotted(rux-radio:last-of-type){margin-bottom:var(--spacing-0)}.rux-radio-group{padding:var(--spacing-4);box-shadow:var(--color-border-interactive-muted) 0 0 0 1px inset;border-radius:var(--radius-base)}.rux-radio-group--invalid{box-shadow:var(--color-border-error) 0 0 0 1px inset}.rux-label{color:var(--color-text-primary);font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);letter-spacing:var(--font-control-body-1-letter-spacing);line-height:var(--font-control-body-1-line-height);margin-bottom:var(--spacing-2);text-align:left}.rux-label__asterisk{margin-left:var(--spacing-1)}";

const RuxRadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    /**
     * Presentational only. Renders the Radio Group as invalid.
     */
    this.invalid = false;
    /**
     * Marks that a selection from the radio-group is requried.
     */
    this.required = false;
    /**
     * The name of the radio group - submitted with form data. Must match the name of the radios in the group.
     */
    this.name = '';
    this._setRadioTabindex = (value) => {
      const radios = this._getRadios();
      // Get the first radio that is not disabled and the checked one
      const first = radios.find((radio) => !radio.disabled);
      const checked = radios.find((radio) => radio.value === value && !radio.disabled);
      if (!first && !checked) {
        return;
      }
      // If an enabled checked radio exists, set it to be the focusable radio
      // otherwise we default to focus the first radio
      const focusable = checked || first;
      for (const radio of radios) {
        const tabindex = radio === focusable ? 0 : -1;
        radio.setButtonTabindex(tabindex);
      }
    };
  }
  emitChange(value) {
    this._setRadioTabindex(value);
    this.ruxChange.emit(this.value);
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  connectedCallback() {
    this._handleClick = this._handleClick.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  componentDidLoad() {
    this._setRadioTabindex(this.value);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this._handleSlotChange);
  }
  componentWillLoad() {
    const radios = Array.from(this.el.querySelectorAll('rux-radio'));
    if (radios.length > 1 && !this.value) {
      this.value = radios[0].getAttribute('value');
    }
    this._setRadioValueIfNone();
    this._handleSlotChange();
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleClick(e) {
    const selectedRadio = e.target && e.target.closest('rux-radio');
    if (selectedRadio && !selectedRadio.disabled) {
      const oldValue = this.value;
      const newValue = selectedRadio.value;
      if (newValue !== oldValue) {
        this.value = newValue;
      }
    }
  }
  _selectedRadioIsDisabled() {
    const radio = this.el.querySelector(`rux-radio[value="${this.value}"]`);
    return radio && radio.disabled;
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, 'label');
    this.hasErrorSlot = hasSlot(this.el, 'error-text');
    this.hasHelpSlot = hasSlot(this.el, 'help-text');
  }
  _getRadios() {
    return Array.from(this.el.querySelectorAll('rux-radio'));
  }
  _setRadioValueIfNone() {
    const radios = this._getRadios();
    radios.forEach((radio, index) => {
      if (!radio.value)
        radio.value = (index + 1).toString();
    });
  }
  onKeydown(ev) {
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }
    // Get all radios inside of the radio group and then
    // filter out disabled radios since we need to skip those
    const radios = this._getRadios().filter((radio) => !radio.disabled);
    // Only move the radio if the current focus is in the radio group
    if (ev.target && radios.includes(ev.target)) {
      const index = radios.findIndex((radio) => radio === ev.target);
      let next;
      // If hitting arrow down or arrow right, move to the next radio
      // If we're on the last radio, move to the first radio
      if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
        next =
          index === radios.length - 1 ? radios[0] : radios[index + 1];
      }
      // If hitting arrow up or arrow left, move to the previous radio
      // If we're on the first radio, move to the last radio
      if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
        next =
          index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }
      if (next && radios.includes(next)) {
        // set all radio checked states to false to accept new checked state.
        radios.forEach((radio) => {
          radio.checked = false;
        });
        next.setFocus(ev);
        this.value = next.value;
        next.checked = true;
      }
    }
  }
  render() {
    const { errorText, helpText, hasHelpSlot, hasErrorSlot, _handleSlotChange, } = this;
    if (this.value) {
      renderHiddenInput(true, this.el, this.name, this.value, this._selectedRadioIsDisabled());
    }
    return (h(Host, { onClick: this._handleClick }, h("div", { class: "rux-form-field", part: "form-field" }, h("div", { class: {
        'rux-label': true,
        hidden: !this.hasLabel,
      }, part: "label" }, h("slot", { onSlotchange: this._handleSlotChange, name: "label" }, this.label, this.required && (h("span", { part: "required", class: "rux-label__asterisk" }, "*")))), h("div", { class: {
        'rux-radio-group': true,
        'rux-radio-group--invalid': this.invalid,
      }, role: "radiogroup", part: "radiogroup" }, h("slot", null))), h("div", { class: {
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
  static get watchers() { return {
    "value": ["emitChange"],
    "label": ["handleLabelChange"]
  }; }
};
RuxRadioGroup.style = ruxRadioGroupCss;

export { RuxRadioGroup as rux_radio_group };
