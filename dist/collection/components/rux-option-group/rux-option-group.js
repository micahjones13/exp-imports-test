import { Host, h, } from '@stencil/core';
export class RuxOptionGroup {
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange() {
    this.groupChanged.emit();
  }
  render() {
    return (h(Host, null, h("slot", { onSlotchange: this._handleSlotChange })));
  }
  static get is() { return "rux-option-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-option-group.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-option-group.css"]
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
          "text": "The option group label"
        },
        "attribute": "label",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "groupChanged",
        "name": "rux-option-group-changed",
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
}
