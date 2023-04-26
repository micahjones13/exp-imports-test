import { Host, h } from '@stencil/core';
import { getDayOfYear } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';
import { militaryTimezones } from './military-timezones';
/**
 * @part container - the container for the clock
 * @part date - the container for the date section of clock
 * @part date-label - the container for the date label
 * @part time - the container for the time section of clock
 * @part time-label - the container for the time label
 * @part aos - the container for the aos section of clock
 * @part aos-label - the container for the aos label
 * @part los - the container for the los section of clock
 * @part los-label - the container for the los label
 */
export class RuxClock {
  constructor() {
    this._timezone = 'UTC';
    this.tzFormat = 'z';
    this.hasRun = false;
    this.static = false;
    /**
     * Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
     */
    this.timezone = 'UTC';
    /**
     * Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS.
     */
    this.hideTimezone = false;
    /**
     * Hides the day of the year.
     */
    this.hideDate = false;
    /**
     * Hides all of the labels.
     */
    this.hideLabels = false;
    /**
     * Applies a smaller clock style.
     */
    this.small = false;
  }
  updateAos(newValue) {
    this.convertedAos = this._formatLosAosDateIn(newValue);
  }
  updateLos(newValue) {
    this.convertedLos = this._formatLosAosDateIn(newValue);
  }
  handleDateInChange() {
    clearTimeout(this._timer);
    this._rawTime = new Date(this.dateIn);
    this._handleDateIn();
    this._updateTime();
  }
  timezoneChanged() {
    this._convertTimezone(this.timezone);
    if (this.aos)
      this.convertedAos = this._formatLosAosDateIn(this.aos);
    if (this.los)
      this.convertedLos = this._formatLosAosDateIn(this.los);
    this._updateTime();
  }
  get time() {
    return this._time;
  }
  connectedCallback() {
    this._convertTimezone(this.timezone);
    if (this.dateIn) {
      this._handleDateIn();
    }
    else {
      if (!this.static) {
        this._timer = window.setInterval(() => {
          this._updateTime();
        }, 1000);
      }
    }
    if (this.aos)
      this.convertedAos = this._formatLosAosDateIn(this.aos);
    if (this.los)
      this.convertedLos = this._formatLosAosDateIn(this.los);
  }
  disconnectedCallback() {
    clearTimeout(this._timer);
  }
  componentWillLoad() {
    this._timezone = this.timezone;
    this._convertTimezone(this.timezone);
    this._updateTime();
  }
  _formatTime(time, timezone) {
    return format(utcToZonedTime(time, timezone), `HH:mm:ss ${this.hideTimezone ? '' : this.tzFormat}`, { timeZone: timezone });
  }
  _handleDateIn() {
    this._formatLosAosDateIn(this.dateIn);
    this._time = this.dateIn;
    if (!this._rawTime)
      this._rawTime = new Date(this.dateIn);
    if (this._validateDateIn(this._rawTime)) {
      if (!this.static) {
        this._timer = window.setInterval(() => {
          this._updateTime();
        }, 1000);
      }
    }
    else {
      console.warn(`The date-in value of ${this.dateIn} is not a valid date.`);
    }
  }
  /**
   * @param date a Date type to be validated
   * @returns A boolean representative of if the date provided is valid
   */
  _validateDateIn(date) {
    //If it's not valid then date.getTime() will be NaN, which isn't equal to itself
    return date.getTime() === date.getTime();
  }
  _updateTime() {
    if (this.dateIn) {
      if (!this.hasRun) {
        this._time = this._formatTime(this._rawTime, this._timezone);
        const clockDate = utcToZonedTime(this._rawTime, this._timezone);
        this.dayOfYear = getDayOfYear(clockDate);
        this.hasRun = true;
      }
      else {
        let seconds = this._rawTime.getSeconds() + 1;
        this._rawTime.setSeconds(seconds);
        this._time = this._formatTime(this._rawTime, this._timezone);
        const clockDate = utcToZonedTime(this._rawTime, this._timezone);
        this.dayOfYear = getDayOfYear(clockDate);
      }
    }
    else {
      this._time = this._formatTime(new Date(Date.now()), this._timezone);
      /**
       * Date.now() is a unix timestamp of the current time in UTC
       * We need to convert that to the Clock's defined timezone
       * before we get the day of the year.
       */
      const localDate = new Date(Date.now());
      const clockDate = utcToZonedTime(localDate, this._timezone);
      this.dayOfYear = getDayOfYear(clockDate);
    }
  }
  /**
   * @param dateTime A date string in unix or ISO formats
   * @returns A timezone local ISO formatted 24h time string
   */
  _formatLosAosDateIn(dateTime) {
    // Check for unix timestamp
    if (new Date(Number(dateTime)).getTime() > 0) {
      dateTime = Number(dateTime);
      // If date-in is provided and matches the conversion made if it's a unix stamp, then
      // we need to handle it as a unix stamp.
      if (this.dateIn && parseInt(this.dateIn) === dateTime) {
        let d = new Date(dateTime);
        this._rawTime = d;
      }
    }
    return format(utcToZonedTime(dateTime, this._timezone), 'HH:mm:ss');
  }
  _convertTimezone(timezone) {
    const _militaryTimezones = militaryTimezones;
    this._timezone = _militaryTimezones[timezone.toUpperCase()];
    this.tzFormat = 'O';
    if (!this._timezone) {
      this._timezone = timezone;
      this.tzFormat = 'zzz';
    }
    else if (timezone.toUpperCase() == 'Z') {
      this.tzFormat = 'X';
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-clock", part: "container" }, !this.hideDate && (h("div", { class: "rux-clock__segment" }, h("div", { class: "rux-clock__segment__value", "aria-labelledby": "rux-clock__day-of-year-label", part: "date" }, this.dayOfYear.toString().padStart(3, '0')), !this.hideLabels && (h("div", { class: "rux-clock__segment__label", id: "rux-clock__day-of-year-label", part: "date-label" }, "Date")))), h("div", { class: "rux-clock__segment" }, h("div", { class: "rux-clock__segment__value", "aria-labelledby": "rux-clock__time-label", part: "time" }, this.time), !this.hideLabels && (h("div", { class: "rux-clock__segment__label", id: "rux-clock__time-label", part: "time-label" }, "Time"))), this.aos && (h("div", { class: "rux-clock__segment rux-clock__aos" }, h("div", { class: "rux-clock__segment__value", "aria-labelledby": "rux-clock__time-label--aos", id: "rux-clock__time--aos", part: "aos" }, this.convertedAos), !this.hideLabels && (h("div", { class: "rux-clock__segment__label", id: "rux-clock__time-label--aos", part: "aos-label" }, "AOS")))), this.los && (h("div", { class: "rux-clock__segment rux-clock__los" }, h("div", { class: "rux-clock__segment__value", "aria-labelledby": "rux-clock__time-label--los", id: "rux-clock__time--los", part: "los" }, this.convertedLos), !this.hideLabels && (h("div", { class: "rux-clock__segment__label", id: "rux-clock__time-label--los", part: "los-label" }, "LOS")))))));
  }
  static get is() { return "rux-clock"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-clock.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-clock.css"]
    };
  }
  static get properties() {
    return {
      "aos": {
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
          "text": "When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled \"AOS\" next to the standard clock."
        },
        "attribute": "aos",
        "reflect": false
      },
      "static": {
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
          "text": ""
        },
        "attribute": "static",
        "reflect": false,
        "defaultValue": "false"
      },
      "los": {
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
          "text": "When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), displays a timestamp labeled \"LOS\" next to the standard clock."
        },
        "attribute": "los",
        "reflect": false
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
          "text": "Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details."
        },
        "attribute": "timezone",
        "reflect": false,
        "defaultValue": "'UTC'"
      },
      "hideTimezone": {
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
          "text": "Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS."
        },
        "attribute": "hide-timezone",
        "reflect": false,
        "defaultValue": "false"
      },
      "hideDate": {
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
          "text": "Hides the day of the year."
        },
        "attribute": "hide-date",
        "reflect": false,
        "defaultValue": "false"
      },
      "hideLabels": {
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
          "text": "Hides all of the labels."
        },
        "attribute": "hide-labels",
        "reflect": false,
        "defaultValue": "false"
      },
      "dateIn": {
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
          "text": "When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), sets the time and date of the clock."
        },
        "attribute": "date-in",
        "reflect": false
      },
      "small": {
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
          "text": "Applies a smaller clock style."
        },
        "attribute": "small",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "_time": {},
      "_rawTime": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "aos",
        "methodName": "updateAos"
      }, {
        "propName": "los",
        "methodName": "updateLos"
      }, {
        "propName": "dateIn",
        "methodName": "handleDateInChange"
      }, {
        "propName": "timezone",
        "methodName": "timezoneChanged"
      }];
  }
}
