import { LogRow } from './rux-log.model';
/**
 * A Log is a tabular representation of application events and may include username, priority, equipment type, signal type, etc. As part of the [Notification System](https://www.astrouxds.com/design-guidelines/notifications), Logs provide sorting and filtering function for examining events.
 * @slot table - for advanced control, you may pass in your own table
 * @slot table-header - the log's table header
 * @slot table-header-row - the log's table header row
 * @slot table-body - the log's table body
 * @part log-notification - the filter notification
 *
 */
export declare class RuxLog {
  /**
   * An array of objects to display as log
   */
  data: LogRow[];
  /**
   * Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as `America/Los_Angeles`. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
   */
  timezone: string;
  /**
   * A string to filter the array to return only the children whose `message` property contains a case-insensitive substring match.
   */
  filter?: string;
  private _setFilter;
  get filteredData(): LogRow[];
  render(): any;
}
