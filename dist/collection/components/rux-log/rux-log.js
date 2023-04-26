/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Host, h } from '@stencil/core';
/**
 * A Log is a tabular representation of application events and may include username, priority, equipment type, signal type, etc. As part of the [Notification System](https://www.astrouxds.com/design-guidelines/notifications), Logs provide sorting and filtering function for examining events.
 * @slot table - for advanced control, you may pass in your own table
 * @slot table-header - the log's table header
 * @slot table-header-row - the log's table header row
 * @slot table-body - the log's table body
 * @part log-notification - the filter notification
 *
 */
export class RuxLog {
  constructor() {
    /**
     * An array of objects to display as log
     */
    this.data = [];
    /**
     * Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as `America/Los_Angeles`. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
     */
    this.timezone = 'UTC';
  }
  _setFilter(e) {
    this.filter = e.target.value;
  }
  get filteredData() {
    if (this.filter) {
      const filter = this.filter;
      return this.data.filter((row) => row.message.includes(filter));
    }
    else {
      return this.data;
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-log" }, h("slot", { name: "table" }, h("rux-table", null, h("slot", { name: "table-header" }, h("rux-table-header", { class: "relative" }, h("slot", { name: "table-header-row" }, h("rux-table-header-row", null, h("rux-table-header-cell", null, "Time"), h("rux-table-header-cell", null), h("rux-table-header-cell", { class: "rux-log__header-event-cell" }, h("div", { class: "header-event-container" }, "Event", h("rux-input", { size: "small", class: "rux-log__filter", type: "search", placeholder: "Search...", onRuxinput: (event) => this._setFilter(event) }))))))), this.filter && (h("div", { class: "rux-log__notification", part: "log-notification" }, "A filter with ", h("b", null, this.filter), " is enabled.", ' ', this.data.length -
      this.filteredData.length, ' ', "of ", this.data.length, " records are currently hidden.")), h("slot", { name: "table-body" }, h("rux-table-body", null, this.filteredData.map((row) => (h("rux-table-row", null, h("rux-table-cell", null, h("rux-datetime", { hour: "2-digit", "time-zone": this.timezone, minute: "2-digit", second: "2-digit", date: row.timestamp })), h("rux-table-cell", null, h("rux-status", { status: row.status })), h("rux-table-cell", null, row.message)))))))))));
  }
  static get is() { return "rux-log"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-log.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-log.css"]
    };
  }
  static get properties() {
    return {
      "data": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "LogRow[]",
          "resolved": "LogRow[]",
          "references": {
            "LogRow": {
              "location": "import",
              "path": "./rux-log.model"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "An array of objects to display as log"
        },
        "defaultValue": "[]"
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
          "tags": [],
          "text": "Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as `America/Los_Angeles`. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details."
        },
        "attribute": "timezone",
        "reflect": false,
        "defaultValue": "'UTC'"
      },
      "filter": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A string to filter the array to return only the children whose `message` property contains a case-insensitive substring match."
        },
        "attribute": "filter",
        "reflect": true
      }
    };
  }
}
