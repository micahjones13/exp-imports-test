import { Host, h } from '@stencil/core';
import { hasSlot } from '../../utils/utils';
/**
 * @part footer - the footer banner
 * @part tag - the container for the tag
 * @part header - the container for the header banner
 *
 */
export class RuxClassificationMarking {
  constructor() {
    /**
     * Defines which classification marking will be displayed.
     */
    this.classification = 'unclassified';
    /**
     * Declares the marking as a `tag` rather than the default banner style
     */
    this.tag = false;
    this.isWrapper = hasSlot(this.el);
  }
  _handleSlotChange() {
    this.isWrapper = hasSlot(this.el);
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this._handleSlotChange);
  }
  get type() {
    return this.tag ? 'tag' : 'banner';
  }
  _getDisplayData() {
    const markings = {
      banner: {
        cui: 'cui',
        controlled: 'controlled',
        confidential: 'confidential',
        secret: 'secret',
        'top-secret': 'top secret',
        'top-secret-sci': 'top secret//sci',
        unclassified: 'unclassified',
      },
      tag: {
        cui: 'cui',
        controlled: 'cui',
        confidential: 'c',
        secret: 's',
        'top-secret': 'ts',
        'top-secret-sci': 'TS//SCI',
        unclassified: 'u',
      },
    };
    let text;
    this.type === 'tag'
      ? (text = markings[this.type][this.classification]
        ? markings[this.type][this.classification]
        : 'u')
      : (text = markings[this.type][this.classification]
        ? markings[this.type][this.classification]
        : 'unclassified');
    return text;
  }
  render() {
    const { isWrapper, label, tag, type } = this;
    return (h(Host, null, h("div", { class: {
        'rux-classification': true,
        'rux-classification--tag': type === 'tag',
        'rux-classification--banner': type === 'banner',
      }, part: "tag header" }, this._getDisplayData(), label), h("slot", null), isWrapper && !tag && (h("div", { class: {
        'rux-classification': true,
        'rux-classification--banner': type === 'banner',
        'rux-classification--banner__footer': isWrapper === true,
      }, part: "footer" }, this._getDisplayData(), label))));
  }
  static get is() { return "rux-classification-marking"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-classification-marking.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-classification-marking.css"]
    };
  }
  static get properties() {
    return {
      "classification": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Classification",
          "resolved": "\"confidential\" | \"controlled\" | \"cui\" | \"secret\" | \"top-secret\" | \"top-secret-sci\" | \"unclassified\"",
          "references": {
            "Classification": {
              "location": "import",
              "path": "../../common/commonTypes.module"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines which classification marking will be displayed."
        },
        "attribute": "classification",
        "reflect": true,
        "defaultValue": "'unclassified'"
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
          "text": "Allows additional text labels to be added to the marking"
        },
        "attribute": "label",
        "reflect": false
      },
      "tag": {
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
          "text": "Declares the marking as a `tag` rather than the default banner style"
        },
        "attribute": "tag",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isWrapper": {}
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "slotchange",
        "method": "_handleSlotChange",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
