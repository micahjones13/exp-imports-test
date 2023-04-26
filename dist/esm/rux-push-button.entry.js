import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a1205123.js';
import { r as renderHiddenInput } from './utils-73490106.js';

const ruxPushButtonCss = ":host{display:block;margin:--spacing-0 --spacing-050;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base);text-align:left}:host[disabled]{opacity:var(--opacity-disabled);cursor:not-allowed}:host input{appearance:none;-webkit-appearance:none;position:absolute}:host input:focus-visible+.rux-push-button__button{outline:var(--focus-outline);outline-offset:var(--focus-offset)}:host .rux-push-button__button{cursor:pointer;font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);letter-spacing:var(--font-control-body-1-letter-spacing);display:inline-flex;justify-content:center;align-items:center;color:var(--color-text-interactive-default);border-radius:var(--radius-base);box-shadow:var(--color-border-interactive-default) 0 0 0 1px inset;padding:var(--spacing-2) var(--spacing-4)}:host .rux-push-button__button:hover{cursor:pointer;color:var(--color-background-interactive-hover);box-shadow:var(--color-background-interactive-hover) 0 0 0 1px inset}:host .rux-push-button__button:hover rux-icon{color:var(--color-background-interactive-hover)}:host .rux-push-button__button--small{padding:var(--spacing-1) var(--spacing-4)}:host .rux-push-button__button--small.rux-push-button__button--icon-only{padding:var(--spacing-1)}:host .rux-push-button__button--large{padding:var(--spacing-3) var(--spacing-4)}:host .rux-push-button__button--large.rux-push-button__button--icon-only{padding:var(--spacing-3)}:host .rux-push-button__button rux-icon{height:calc(var(--spacing-4) + var(--spacing-1));width:calc(var(--spacing-4) + var(--spacing-1));margin-right:var(--spacing-1)}:host .rux-push-button__button--icon-only{font-size:0 !important;padding:var(--spacing-2)}:host .rux-push-button__button--icon-only rux-icon{margin-right:var(--spacing-0)}:host .rux-push-button__input:checked+.rux-push-button__button{display:inline-flex;color:var(--color-text-black);background-color:var(--color-palette-green-500);box-shadow:var(--color-palette-green-500) 0 0 0 1px inset}:host .rux-push-button__input:checked+.rux-push-button__button rux-icon{color:var(--color-text-black)}:host .rux-push-button__input:checked+.rux-push-button__button:hover{background-color:var(--color-palette-green-400)}:host .rux-push-button__input:checked:disabled+.rux-push-button__button:hover{color:var(--color-text-black);background-color:var(--color-palette-green-500);box-shadow:var(--color-palette-green-500) 0 0 0 1px inset}:host .rux-push-button__input:checked:disabled+.rux-push-button__button:hover rux-icon{color:var(--color-text-black)}:host .rux-push-button__input:disabled+.rux-push-button__button{opacity:var(--opacity-disabled);cursor:not-allowed}:host .rux-push-button__input:disabled+.rux-push-button__button:hover{box-shadow:var(--color-border-interactive-default) 0 0 0 1px inset;color:var(--color-text-interactive-default)}:host .rux-push-button__input:disabled+.rux-push-button__button:hover rux-icon{color:var(--color-text-interactive-default)}:host([hidden]){display:none}";

const RuxPushButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.pushButtonId = `rux-push-button-${id++}`;
    /**
     * Hides slotted text from the button by setting rux-button--icon-only class
     */
    this.iconOnly = false;
    /**
     * Disables the push button via HTML `disabled` attribute.
     * Button takes on a distinct disabled visual state.
     * Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    /**
     * Checks the push button via HTML `checked` attribute.
     * Push button takes on a distinct "enabled" or "selected" visual state.
     */
    this.checked = false;
    /**
     * The label of the push button.
     */
    this.label = 'Push Button';
    /**
     * The name of the push button.
     */
    this.name = '';
    /**
     * The value of the push button.
     */
    this.value = '';
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
  }
  componentWillLoad() {
    this._onChange = this._onChange.bind(this);
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
    this.ruxChange.emit(this.checked);
  }
  render() {
    const { disabled, checked, label, size, _onChange, value, _onBlur, icon, iconOnly, } = this;
    renderHiddenInput(true, this.el, this.name, this.value ? this.value : 'on', this.disabled, this.checked);
    return (h(Host, { "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, role: "switch" }, h("input", { class: "rux-push-button__input", id: this.pushButtonId, type: "checkbox", disabled: disabled, checked: checked, onChange: _onChange, onBlur: _onBlur, value: value }), h("label", { part: "container", class: {
        'rux-push-button__button': true,
        'rux-push-button__button--small': size === 'small',
        'rux-push-button__button--large': size === 'large',
        'rux-push-button__button--icon-only': iconOnly,
      }, htmlFor: this.pushButtonId }, icon ? (h("rux-icon", { size: "auto", exportparts: "icon", icon: icon })) : null, label), h("slot", null)));
  }
  get el() { return getElement(this); }
};
let id = 0;
RuxPushButton.style = ruxPushButtonCss;

export { RuxPushButton as rux_push_button };
