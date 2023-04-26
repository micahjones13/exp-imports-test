import { r as registerInstance, h, H as Host } from './index-a1205123.js';
import { f as format, u as utcToZonedTime } from './index-bf9fd6cc.js';
import { r as requiredArgs, t as toDate } from './index-33004084.js';
import { d as differenceInCalendarDays } from './index-8434b33d.js';

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var cleanDate = toDate(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */

function getDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = differenceInCalendarDays(date, startOfYear(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}

const militaryTimezones = {
  A: '+01:00',
  B: '+02:00',
  C: '+03:00',
  D: '+04:00',
  E: '+05:00',
  F: '+06:00',
  G: '+07:00',
  H: '+08:00',
  I: '+09:00',
  K: '+10:00',
  L: '+11:00',
  M: '+12:00',
  N: '-01:00',
  O: '-02:00',
  P: '-03:00',
  Q: '-04:00',
  R: '-05:00',
  S: '-06:00',
  T: '-07:00',
  U: '-08:00',
  V: '-09:00',
  W: '-10:00',
  X: '-11:00',
  Y: '-12:00',
  Z: '+00:00',
};

const ruxClockCss = ":host{display:flex;margin:var(--spacing-0);color:var(--color-palette-neutral-000);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none}:host(:not([hide-labels])){height:calc(var(--spacing-8) * 2)}.rux-clock{display:flex;user-select:none;color:var(--clock-text-color)}.rux-clock__segment{display:flex;flex-direction:column;align-items:center}.rux-clock__segment__value{display:flex;align-items:center;color:var(--gsb-color-text);font-family:var(--font-monospace-1-font-family);font-weight:var(--font-monospace-1-font-weight);font-size:var(--font-monospace-1-font-size);letter-spacing:var(--font-monospace-1-letter-spacing);box-shadow:var(--gsb-color-background) 0 0 0 1px inset;background-color:var(--clock-datetime-color-background);white-space:nowrap;overflow-y:hidden;text-overflow:ellipsis;height:var(--spacing-10);padding:var(--spacing-0) var(--spacing-3)}:host([small]) .rux-clock__segment__value{height:var(--spacing-10);padding:var(--spacing-1) var(--spacing-3);font-size:1.15rem;font-weight:var(--font-weight-medium)}.rux-clock__segment__label{font-family:var(--font-body-2-font-family);font-size:var(--font-body-2-font-size);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);color:var(--color-palette-neutral-000);background:var(--gsb-color-background);padding:var(--spacing-0) var(--spacing-3) var(--spacing-0) var(--spacing-3);line-height:var(--font-body-3-line-height);width:-moz-available;width:-webkit-fill-available;width:fill-available;height:var(--spacing-6);display:flex;align-items:flex-end;justify-content:center;text-align:center}.rux-clock__aos{margin-left:var(--spacing-4)}";

const RuxClock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  static get watchers() { return {
    "aos": ["updateAos"],
    "los": ["updateLos"],
    "dateIn": ["handleDateInChange"],
    "timezone": ["timezoneChanged"]
  }; }
};
RuxClock.style = ruxClockCss;

export { RuxClock as rux_clock };
