import { h, Host, } from '@stencil/core';
import { hasSlot, renderHiddenInput } from '../../utils/utils';
let id = 0;
/**
 * @slot label - The switch label
 * @part switch - the track (::before) and the button (::after) on rux-switch
 * @part label - the label of switch
 */
export class RuxSwitch {
  constructor() {
    this.switchId = `rux-switch-${++id}`;
    this.hasLabelSlot = false;
    /**
     * The switch name
     */
    this.name = '';
    /**
     * The switch value
     */
    this.value = '';
    /**
     * Toggles checked state of a switch
     */
    this.checked = false;
    /**
     * Disables the switch via HTML disabled attribute. Switch takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  componentWillLoad() {
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
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, 'label');
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
    this.ruxChange.emit(this.checked);
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.ruxInput.emit();
  }
  render() {
    const { switchId, checked, disabled, name, value } = this;
    renderHiddenInput(true, this.el, this.name, this.value ? this.value : 'on', this.disabled, this.checked);
    return (h(Host, { class: "rux-form-field", "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, role: "switch" }, h("div", { class: {
        'rux-switch': true,
      } }, h("input", { role: "switch", type: "checkbox", class: "rux-switch__input", name: name, id: switchId, disabled: disabled, checked: checked, value: value, "aria-checked": `${checked}`, onChange: this._onChange, onInput: this._onInput, onBlur: this._onBlur }), h("label", { class: "rux-switch__button", htmlFor: switchId, part: "switch" }, h("span", { class: {
        'rux-switch__label': true,
        hidden: !this.hasLabel,
      }, part: "label" }, h("slot", { onSlotchange: this._handleSlotChange, name: "label" }, this.label))))));
  }
  static get is() { return "rux-switch"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-switch.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-switch.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The switch name"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "The switch value"
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Toggles checked state of a switch"
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "Disables the switch via HTML disabled attribute. Switch takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
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
          "text": "The switch label. For HTML content, use the `label` slot instead."
        },
        "attribute": "label",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "hasLabelSlot": {}
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
          "text": "Fired when the value of the input changes and emits that value on the event.detail. - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)"
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
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "label",
        "methodName": "handleLabelChange"
      }];
  }
}
