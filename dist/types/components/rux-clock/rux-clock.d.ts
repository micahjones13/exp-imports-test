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
export declare class RuxClock {
  private _timer;
  private _timezone;
  private dayOfYear;
  private tzFormat;
  private convertedAos?;
  private convertedLos?;
  private hasRun;
  _time: string;
  _rawTime: Date;
  /**
   * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled "AOS" next to the standard clock.
   */
  aos?: string;
  updateAos(newValue: string): void;
  static: boolean;
  /**
   * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), displays a timestamp labeled "LOS" next to the standard clock.
   */
  los?: string;
  updateLos(newValue: string): void;
  /**
   * Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
   */
  timezone: string;
  /**
   * Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS.
   */
  hideTimezone: boolean;
  /**
   * Hides the day of the year.
   */
  hideDate: boolean;
  /**
   * Hides all of the labels.
   */
  hideLabels: boolean;
  /**
   * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), sets the time and date of the clock.
   */
  dateIn?: string;
  handleDateInChange(): void;
  /**
   * Applies a smaller clock style.
   */
  small: boolean;
  timezoneChanged(): void;
  get time(): string;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  private _formatTime;
  private _handleDateIn;
  /**
   * @param date a Date type to be validated
   * @returns A boolean representative of if the date provided is valid
   */
  private _validateDateIn;
  private _updateTime;
  /**
   * @param dateTime A date string in unix or ISO formats
   * @returns A timezone local ISO formatted 24h time string
   */
  private _formatLosAosDateIn;
  private _convertTimezone;
  render(): any;
}
