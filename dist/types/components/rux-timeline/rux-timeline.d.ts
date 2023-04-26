/**
 * @part playhead - The timeline's playhead
 * @part time-region-container - The container for time regions. Use this part to set a maximum height and enable vertical scrolling.
 */
export declare class RuxTimeline {
  private slotContainer?;
  private timelineContainer?;
  private rulerContainer?;
  slots?: any;
  el: HTMLRuxTimelineElement;
  playheadPositionInPixels: number;
  columnWidth: number;
  playheadHeight: number;
  showPlayhead: boolean;
  /**
   * The timeline's start date. Must be an ISO string "2021-02-02T05:00:00Z"
   */
  start: string;
  /**
   * The timeline's end date. Must be an ISO string "2021-02-02T05:00:00Z"
   */
  end: string;
  /**
   * The timeline's zoom level.
   */
  zoom: number;
  /**
   * The timeline's playhead date time. Must be an ISO string "2021-02-02T05:00:00Z"
   */
  playhead?: string;
  /**
   * The timeline's date time interval
   */
  interval: 'hour' | 'day';
  /**
   * Controls the timezone that the timeline is localized to. Must be an IANA time zone name ("America/New_York") or an offset string.
   */
  timezone: string;
  syncPlayhead(): void;
  handleZoomChange(): void;
  handleChange(): void;
  connectedCallback(): void;
  componentWillLoad(): void;
  get width(): number;
  get columns(): number;
  get totalColumns(): number;
  /**
   * The relationship between 1px and the datetime it represents.
   * We need a way to map individual pixels to a particular time, so that
   * if the playhead or an event is positioned at 120px visually, we can determine
   * what exact time that represents.
   */
  get pxToTimeRatio(): number;
  get formattedCurrentTime(): string | null;
  initializeTracks(): void;
  /**
   * Give it a position (in pixels) and get the time that represents
   */
  /**
   * Give it a time, get where it should be positioned visually (in pixels)
   */
  private _calculatePlayheadFromTime;
  /**
   * For debugging
   */
  private _handleMouse;
  private _handleSlotChange;
  /**
   * Syncs the Timeline's current interval and pxToTimeRatio to it's children and grandchildren
   * We're taking a props down, events up approach to data flow here.
   */
  private _updateRegions;
  private _setZoom;
  _handleScroll(): void;
  render(): any;
}
