/**
 *
 * @part container - individual tabs
 *
 */
export declare class RuxTab {
  /**
   *  If present, overrides which tab is selected on load / mount. By default, the first <rux-tab> item is selected.
   */
  selected: boolean;
  /**
   * If present, sets a disabled state on this tab item, indicating it cannot be selected by user action.
   */
  disabled: boolean;
  /**
   * If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses.
   */
  small: boolean;
  el: HTMLRuxTabElement;
  connectedCallback(): void;
  private _clickHandler;
  render(): any;
}
