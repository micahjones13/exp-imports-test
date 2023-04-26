import { Host, h, } from '@stencil/core';
import { formatInTimeZone } from 'date-fns-tz';
/**
 * @slot (default) - The content of the Time Region
 * @part container - The component's container
 * @part time-region-container - The container for time regions. Use this part to set a maximum height and enable vertical scrolling.
 * @part timestamp - The time region's timestamp
 */
export class RuxTimeRegion {
  constructor() {
    /**
     * The start date. Must be an ISO string "2021-02-02T05:00:00Z".
     */
    this.start = '';
    /**
     * The end date. Must be an ISO string "2021-02-02T05:00:00Z"
     */
    this.end = '';
    /**
     * Optionally hide the bottom right timestamp.
     */
    this.hideTimestamp = false;
    /**
     * Visually indicates a partial time regions. Partial time regions are time regions that start or end outside of the current range of the timeline.
     */
    this.partial = 'none';
    /**
     * Visually displays the selected state
     */
    this.selected = false;
    /**
     * @internal - The Time Regions's time zone. Set automatically from the parent Track component.
     */
    this.timezone = 'UTC';
  }
  handleTimeUpdate() {
    this.ruxTimeRegionChange.emit({
      start: this.start,
      end: this.end,
    });
  }
  get formattedTime() {
    if (!this.start || !this.end) {
      return false;
    }
    try {
      return (formatInTimeZone(new Date(this.start), this.timezone, 'HH:mm') +
        ' - ' +
        formatInTimeZone(new Date(this.end), this.timezone, 'HH:mm'));
    }
    catch (e) {
      return false;
    }
  }
  render() {
    return (h(Host, null, h("div", { part: "container", class: {
        'rux-time-region': true,
        'rux-time-region--normal': this.status === 'normal',
        'rux-time-region--critical': this.status === 'critical',
        'rux-time-region--serious': this.status === 'serious',
        'rux-time-region--caution': this.status === 'caution',
        'rux-time-region--standby': this.status === 'standby',
        'rux-time-region--off': this.status === 'off',
        'rux-time-region--selected': this.selected,
        'rux-time-region--partial-start': this.partial === 'start' ||
          this.partial === 'ongoing',
        'rux-time-region--partial-end': this.partial === 'end' ||
          this.partial === 'ongoing',
      } }, h("div", { class: "rux-time-region__content" }, this.status ? (h("rux-status", { class: {
        'light-theme': this.selected,
      }, status: this.status })) : null, h("slot", null)), !this.hideTimestamp ? (h("div", { class: "rux-time-region__datetime", part: "timestamp" }, this.formattedTime)) : null)));
  }
  static get is() { return "rux-time-region"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-time-region.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-time-region.css"]
    };
  }
  static get properties() {
    return {
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
          "tags": [],
          "text": "The start date. Must be an ISO string \"2021-02-02T05:00:00Z\"."
        },
        "attribute": "start",
        "reflect": true,
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
          "tags": [],
          "text": "The end date. Must be an ISO string \"2021-02-02T05:00:00Z\""
        },
        "attribute": "end",
        "reflect": true,
        "defaultValue": "''"
      },
      "hideTimestamp": {
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
          "text": "Optionally hide the bottom right timestamp."
        },
        "attribute": "hide-timestamp",
        "reflect": false,
        "defaultValue": "false"
      },
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Status",
          "resolved": "\"caution\" | \"critical\" | \"normal\" | \"off\" | \"serious\" | \"standby\" | undefined",
          "references": {
            "Status": {
              "location": "import",
              "path": "../../../common/commonTypes.module"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Short hand attribute for displaying a Status icon and appropriate border color."
        },
        "attribute": "status",
        "reflect": false
      },
      "partial": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'none' | 'start' | 'end' | 'ongoing'",
          "resolved": "\"end\" | \"none\" | \"ongoing\" | \"start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Visually indicates a partial time regions. Partial time regions are time regions that start or end outside of the current range of the timeline."
        },
        "attribute": "partial",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "selected": {
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
          "text": "Visually displays the selected state"
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
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
              "text": "- The Time Regions's time zone. Set automatically from the parent Track component."
            }],
          "text": ""
        },
        "attribute": "timezone",
        "reflect": false,
        "defaultValue": "'UTC'"
      }
    };
  }
  static get events() {
    return [{
        "method": "ruxTimeRegionChange",
        "name": "ruxtimeregionchange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "- Emitted on the event.detail when the start or end date changes so that it's parent Track can update the Time Region's position."
            }],
          "text": ""
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
        "propName": "start",
        "methodName": "handleTimeUpdate"
      }, {
        "propName": "end",
        "methodName": "handleTimeUpdate"
      }];
  }
}
