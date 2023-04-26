import { h, Host, } from '@stencil/core';
import { hasSlot, renderHiddenInput } from '../../utils/utils';
let id = 0;
/**
 * @slot label - The textarea label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part textarea - The textarea element
 * @part required - The asterisk when required is true
 */
export class RuxTextarea {
  constructor() {
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
    this.hasLabelSlot = hasSlot(this.el, 'label');
    this.hasErrorSlot = hasSlot(this.el, 'error-text');
    this.hasHelpSlot = hasSlot(this.el, 'help-text');
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
    renderHiddenInput(true, this.el, this.name, this.value, this.disabled);
    return (h(Host, null, h("div", { class: "rux-textarea-field", part: "form-field" }, this.hasLabel ? (h("label", { class: {
        'rux-textarea-label': true,
      }, "aria-hidden": this.hasLabel ? 'false' : 'true', htmlFor: this.inputId, part: "label" }, h("span", { class: { hidden: !this.hasLabel } }, h("slot", { onSlotchange: this._handleSlotChange, name: "label" }, this.label, this.required && (h("span", { part: "required", class: "rux-textarea-label__asterisk" }, "*")))))) : null, h("textarea", { ref: (el) => (this.textareaEl = el), name: this.name, disabled: this.disabled, "aria-invalid": this.invalid ? 'true' : 'false', placeholder: this.placeholder, required: this.required, minlength: this.minLength, maxlength: this.maxLength, value: this.value, class: {
        'rux-textarea': true,
        'rux-textarea--disabled': this.disabled,
        'rux-textarea--invalid': this.invalid,
        'rux-textarea--small': this.size === 'small',
        'rux-textarea--large': this.size === 'large',
      }, id: this.inputId, rows: this.rows, onChange: this._onChange, onInput: this._onInput, onBlur: this._onBlur, part: "textarea" })), h("div", { class: {
        'rux-error-text': !!this.errorText || this.hasErrorSlot,
        hidden: !this.errorText && !this.hasErrorSlot,
      }, part: "error-text" }, h("svg", { fill: "none", width: "14", height: "14", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 14 14" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z", fill: "currentColor" })), h("slot", { name: "error-text", onSlotchange: this._handleSlotChange }, this.errorText)), h("div", { class: {
        'rux-help-text': (!!this.helpText || this.hasHelpSlot) &&
          (!this.errorText || !this.hasErrorSlot),
        hidden: (!this.helpText && !this.hasHelpSlot) ||
          !!this.errorText ||
          this.hasErrorSlot,
      }, part: "help-text" }, h("slot", { name: "help-text", onSlotchange: this._handleSlotChange }, this.helpText))));
  }
  static get is() { return "rux-textarea"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-textarea.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-textarea.css"]
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
          "text": "The textarea label text. For HTML content, use the `label` slot instead."
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
          "text": "The textarea placeholder text"
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
          "text": "The  or explanation text"
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
          "text": "Presentational only. Renders the Textarea as invalid."
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
      "minLength": {
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
          "text": "The input minLength attribute"
        },
        "attribute": "min-length",
        "reflect": false
      },
      "maxLength": {
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
          "text": "The input maxLength attribute"
        },
        "attribute": "max-length",
        "reflect": false
      },
      "rows": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The input rows attribute"
        },
        "attribute": "rows",
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
          "text": "Sets the input as disabled"
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
          "resolved": "\"large\" | \"medium\" | \"small\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Styles the input element size between small, medium and large. The default styling is medium."
        },
        "attribute": "size",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "hasLabelSlot": {},
      "hasHelpSlot": {},
      "hasErrorSlot": {}
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
      }];
  }
}
