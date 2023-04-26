import { Host, h } from '@stencil/core';
import { dateRange as getRange } from '../helpers';
export class RuxRuler {
  constructor() {
    /**
     * @internal The Timeline's interval. Set automatically from the parent Timeline component
     */
    this.interval = '';
    /**
     * @internal The Timeline's start date. Set automatically from the parent Timeline component
     */
    this.start = '';
    /**
     * @internal The Timeline's end date. Set automatically from the parent Timeline component
     */
    this.end = '';
    /**
     * @internal - The Ruler's time zone. Set automatically from the parent Timeline component.
     */
    this.timezone = 'UTC';
  }
  get dateRange() {
    return getRange(new Date(this.start), new Date(this.end), this.interval, 1, this.timezone);
  }
  getColumn(index) {
    let unitOfTime = 60;
    if (this.interval === 'day') {
      unitOfTime = 24;
    }
    const start = unitOfTime * index + 2;
    const end = start + unitOfTime;
    return `${unitOfTime * index + 2} / ${end}`;
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-ruler rux-track" }, this.dateRange.map((time, index) => (h("span", { class: {
        'ruler-time': true,
      }, style: {
        gridRow: '1',
        gridColumn: this.getColumn(index),
      } }, time))))));
  }
  static get is() { return "rux-ruler"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-ruler.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-ruler.css"]
    };
  }
  static get properties() {
    return {
      "interval": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "The Timeline's interval. Set automatically from the parent Timeline component"
            }],
          "text": ""
        },
        "attribute": "interval",
        "reflect": false,
        "defaultValue": "''"
      },
      "start": {
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
          "tags": [{
              "name": "internal",
              "text": "The Timeline's start date. Set automatically from the parent Timeline component"
            }],
          "text": ""
        },
        "attribute": "start",
        "reflect": false,
        "defaultValue": "''"
      },
      "end": {
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
          "tags": [{
              "name": "internal",
              "text": "The Timeline's end date. Set automatically from the parent Timeline component"
            }],
          "text": ""
        },
        "attribute": "end",
        "reflect": false,
        "defaultValue": "''"
      },
      "timezone": {
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
          "tags": [{
              "name": "internal",
              "text": "- The Ruler's time zone. Set automatically from the parent Timeline component."
            }],
          "text": ""
        },
        "attribute": "timezone",
        "reflect": true,
        "defaultValue": "'UTC'"
      }
    };
  }
  static get elementRef() { return "el"; }
}
