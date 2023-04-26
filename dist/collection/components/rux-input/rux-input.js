import { Host, h, } from '@stencil/core';
import { hasSlot, renderHiddenInput } from '../../utils/utils';
let id = 0;
/**
 * @slot label - The input label
 * @slot prefix - Left side input icon
 * @slot suffix - Right side input icon
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part icon - The icon displayed when toggle-password prop is set
 * @part input-field - the styled wrapper around the input element
 * @part input - The input element
 * @part label - The input label when `label` prop is set
 * @part required - The asterisk when required is true
 * @part prefix - The container of the prefix slot
 * @part suffix - The container of the suffix slot
 *
 */
export class RuxInput {
  constructor() {
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
  static get is() { return "rux-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-input.css"]
    };
  }
  static get properties() {
    return {
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The input label text. For HTML content, use the `label` slot instead."
        },
        "attribute": "label",
        "reflect": false
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The input placeholder text"
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "helpText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The help or explanation text"
        },
        "attribute": "help-text",
        "reflect": false
      },
      "errorText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The validation error text"
        },
        "attribute": "error-text",
        "reflect": false
      },
      "invalid": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Presentational only. Renders the Input Field as invalid."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input value"
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input name"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'text'\n        | 'number'\n        | 'email'\n        | 'url'\n        | 'search'\n        | 'password'\n        | 'date'\n        | 'datetime-local'\n        | 'time'\n        | 'tel'",
          "resolved": "\"date\" | \"datetime-local\" | \"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input type"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'text'"
      },
      "min": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The input min attribute"
        },
        "attribute": "min",
        "reflect": false
      },
      "max": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The input max attribute"
        },
        "attribute": "max",
        "reflect": false
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the input as required"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'medium' | 'large'",
          "resolved": "\"large\" | \"medium\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Control the padding around the input field"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'medium'"
      },
      "step": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The input step attribute"
        },
        "attribute": "step",
        "reflect": false
      },
      "spellcheck": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's spellcheck attribute"
        },
        "attribute": "spellcheck",
        "reflect": false,
        "defaultValue": "false"
      },
      "readonly": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The inputs readonly attribute"
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasLabelSlot": {},
      "hasHelpSlot": {},
      "hasErrorSlot": {},
      "togglePassword": {},
      "isPasswordVisible": {},
      "hasFocus": {}
    };
  }
  static get events() {
    return [{
        "method": "ruxChange",
        "name": "ruxchange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxInput",
        "name": "ruxinput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxBlur",
        "name": "ruxblur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxFocus",
        "name": "ruxfocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an element has gained focus - [HTMLElement/focus_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "setFocus": {
        "complexType": {
          "signature": "(options?: FocusOptions) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "FocusOptions": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets element as focused",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "label",
        "methodName": "handleLabelChange"
      }, {
        "propName": "type",
        "methodName": "handleTypeChange"
      }];
  }
}
