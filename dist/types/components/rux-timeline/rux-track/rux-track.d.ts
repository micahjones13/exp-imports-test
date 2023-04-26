/**
 * @slot (default) - The Track's content
 * @part track-header - The Track's header
 * @part container - The Track's container
 */
export declare class RuxTrack {
  el: HTMLRuxTrackElement;
  /**
   * @internal - The grid's width. Set automatically from the parent Timeline component.
   */
  width: number;
  /**
   * @internal - The number of grid columns to display. Set automatically from the parent Timeline component.
   */
  columns: number;
  /**
   * @internal - The Track's interval. Set automatically from the parent Timeline component.
   */
  interval: any;
  /**
   * @internal - The Track's start date. Set automatically from the parent Timeline component.
   */
  start: string;
  /**
   * @internal - The Track's end date. Set automatically from the parent Timeline component.
   */
  end: string;
  /**
   * @internal - The Track's time zone. Set automatically from the parent Timeline component.
   */
  timezone: string;
  handleUpdate(_newValue: any, old: any): void;
  handleTimezoneUpdate(): void;
  handleTimeRegionChange(e: CustomEvent): void;
  connectedCallback(): void;
  /**
   * Tracks are displayed as a (CSS) grid of cells.
   * Each cell can represent a minute or hour depending on the interval.
   */
  private _calculateGridColumnFromTime;
  private _validateTimeRegion;
  /**
   * Time Regions are dumb and don't know anything about the grid.
   * The Track is responsible for lining up the Time Regions with the grid.
   */
  private initializeRows;
  private _handleSlotChange;
  render(): any;
}
