import { Host, h } from '@stencil/core';
import { hasSlot } from '../../utils/utils';
const statusMap = {
  unknown: 'UNK',
  pass: 'PASS',
  fail: 'FAIL',
};
/**
 * @slot (default) - The text for the rux-tag
 * @part container - The container of the rux-tag's text
 */
export class RuxTag {
  constructor() {
    /**
     *  Used to display a status of pass, fail, or unknown. If no status is provided or the provided status is not an accepted status type, the default is unknown.
     */
    this.status = 'unknown';
    this.hasSlot = false;
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this.hasSlot = hasSlot(this.el);
  }
  _handleSlotChange() {
    this.hasSlot = hasSlot(this.el);
  }
  _getValidStatus() {
    if (this.status) {
      //if it is a valid status, return it
      if (statusMap[this.status]) {
        return statusMap[this.status];
      }
      //if it's not, return the default status
      else {
        return statusMap['unknown'];
      }
    }
  }
  render() {
    return (h(Host, { class: {
        'is-undefined': statusMap[this.status] === undefined,
      } }, h("div", { part: "container" }, h("slot", { onSlotchange: this._handleSlotChange }), !this.hasSlot ? this._getValidStatus() : null)));
  }
  static get is() { return "rux-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-tag.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-tag.css"]
    };
  }
  static get properties() {
    return {
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "StatusTags",
          "resolved": "\"fail\" | \"pass\" | \"unknown\" | undefined",
          "references": {
            "StatusTags": {
              "location": "import",
              "path": "../../common/commonTypes.module"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Used to display a status of pass, fail, or unknown. If no status is provided or the provided status is not an accepted status type, the default is unknown."
        },
        "attribute": "status",
        "reflect": true,
        "defaultValue": "'unknown'"
      }
    };
  }
  static get states() {
    return {
      "hasSlot": {}
    };
  }
  static get elementRef() { return "el"; }
}
