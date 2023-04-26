export class RuxDatetime {
  constructor() {
    /**
     * The date time to be formatted
     */
    this.date = new Date();
    /**
     * The locale
     */
    this.locale = 'default';
    /**
     * Display date in 12 hour time.
     */
    this.hour12 = false;
  }
  render() {
    const date = new Date(this.date);
    const { day, era, hour, hour12, locale, minute, month, second, timeZone, timeZoneName, weekday, year, } = this;
    // try catch here and throw a console error for now
    return new Intl.DateTimeFormat(locale, {
      day,
      era,
      hour,
      hour12,
      minute,
      month,
      second,
      timeZone,
      timeZoneName,
      weekday,
      year,
    }).format(date);
  }
  static get is() { return "rux-datetime"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
      "date": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Date | string",
          "resolved": "Date | string",
          "references": {
            "Date": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The date time to be formatted"
        },
        "attribute": "date",
        "reflect": false,
        "defaultValue": "new Date()"
      },
      "locale": {
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
          "text": "The locale"
        },
        "attribute": "locale",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "weekday": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'narrow' | 'short' | 'long'",
          "resolved": "\"long\" | \"narrow\" | \"short\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Format options for weekday"
        },
        "attribute": "weekday",
        "reflect": false
      },
      "era": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'narrow' | 'short' | 'long'",
          "resolved": "\"long\" | \"narrow\" | \"short\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Format options for era"
        },
        "attribute": "era",
        "reflect": false
      },
      "year": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'numeric' | '2-digit'",
          "resolved": "\"2-digit\" | \"numeric\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Format options for year"
        },
        "attribute": "year",
        "reflect": false
      },
      "month": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'numeric' | '2-digit' | 'narrow' | 'short' | 'long'",
          "resolved": "\"2-digit\" | \"long\" | \"narrow\" | \"numeric\" | \"short\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Format options for month"
        },
        "attribute": "month",
        "reflect": false
      },
      "day": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'numeric' | '2-digit'",
          "resolved": "\"2-digit\" | \"numeric\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Format options for day"
        },
        "attribute": "day",
        "reflect": false
      },
      "hour": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'numeric' | '2-digit'",
          "resolved": "\"2-digit\" | \"numeric\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Format options for hour"
        },
        "attribute": "hour",
        "reflect": false
      },
      "minute": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'numeric' | '2-digit'",
          "resolved": "\"2-digit\" | \"numeric\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Format options for minute"
        },
        "attribute": "minute",
        "reflect": false
      },
      "second": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'numeric' | '2-digit'",
          "resolved": "\"2-digit\" | \"numeric\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Format options for second"
        },
        "attribute": "second",
        "reflect": false
      },
      "timeZoneName": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'short' | 'long'",
          "resolved": "\"long\" | \"short\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Format options for Timezone name"
        },
        "attribute": "time-zone-name",
        "reflect": false
      },
      "timeZone": {
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
          "text": "Format options for Timezone"
        },
        "attribute": "time-zone",
        "reflect": false
      },
      "hour12": {
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
          "text": "Display date in 12 hour time."
        },
        "attribute": "hour-12",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
