export declare class RuxRuler {
  el: HTMLRuxRulerElement;
  /**
   * @internal The Timeline's interval. Set automatically from the parent Timeline component
   */
  interval: any;
  /**
   * @internal The Timeline's start date. Set automatically from the parent Timeline component
   */
  start: string;
  /**
   * @internal The Timeline's end date. Set automatically from the parent Timeline component
   */
  end: string;
  /**
   * @internal - The Ruler's time zone. Set automatically from the parent Timeline component.
   */
  timezone: string;
  get dateRange(): string[];
  getColumn(index: number): string;
  render(): any;
}
