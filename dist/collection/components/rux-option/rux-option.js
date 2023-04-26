import { Host, h, } from '@stencil/core';
/**
 * This component should be used exclusively with RuxSelect.
 * It's main function is to broadcast to RuxSelect when the value property changes.
 * RuxSelect can only listen for slot change, which won't fire in the scenario where there
 * might be 2 options and only their values change. Because the nodes themselves aren't added or removed,
 * onSlotchange doesn't fire.
 */
export class RuxOption {
  constructor() {
    /** Sets the option as disabled */
    this.disabled = false;
  }
  handleValueChange() {
    this.optionChanged.emit();
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange() {
    this.optionChanged.emit();
  }
  render() {
    return (h(Host, { class: "rux-option", disabled: this.disabled }, this.label ? this.label : ''));
  }
  static get is() { return "rux-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-option.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-option.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The option value"
        },
        "attribute": "value",
        "reflect": true
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The option label"
        },
        "attribute": "label",
        "reflect": true
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
          "text": "Sets the option as disabled"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "optionChanged",
        "name": "rux-option-changed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "*"
            }],
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "handleValueChange"
      }, {
        "propName": "label",
        "methodName": "handleValueChange"
      }, {
        "propName": "disabled",
        "methodName": "handleValueChange"
      }];
  }
}
