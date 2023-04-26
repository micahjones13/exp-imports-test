import { EventEmitter } from '../../stencil-public-runtime';
import { ExtendedPlacement } from '../../common/commonTypes.module';
/**
 * @slot (default) - The trigger for the rux-tooltip
 * @part container - The container of the rux-tooltip text
 * @part trigger-container - the container of the tooltip trigger
 */
export declare class RuxTooltip {
  private trigger;
  private content;
  private _positionerCleanup;
  el: HTMLRuxTooltipElement;
  currentSlotted: any;
  hasTriggerSlot: boolean;
  delegatedFocus: boolean;
  /**
   *  The tooltip's content.
   */
  message: string;
  /**
   *  Whether or not the tooltip is open
   */
  open: boolean;
  /**
   *  How long it takes the tooltip to appear in milliseconds, default = 800, Overrides the css custom property --delay.
   */
  delay: number;
  /**
   *  Pixel offset from trigger, default = 8
   */
  offset: number;
  /**
   * The placement of the tooltip relative to it's slotted trigger element. Defaults to auto.
   */
  placement: ExtendedPlacement;
  /**
   * Turns disableAutoUpdate on or off which makes the tooltip move to stay in view based on scroll. Defaults to false.
   */
  disableAutoUpdate: boolean;
  /**
   * The position strategy of the tooltip, either absolute or fixed.
   */
  strategy: 'absolute' | 'fixed';
  /**
   * Emits when the tooltip has opened
   */
  ruxTooltipOpened: EventEmitter;
  /**
   * Emits when the tooltip has closed.
   */
  ruxTooltipClosed: EventEmitter;
  handleDelay(): void;
  handleOpen(): void;
  /**
   * Opens the tooltip and returns true.
   */
  show(): Promise<true>;
  /**
   * Closes the tooltip and returns false.
   */
  hide(): Promise<boolean>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private _position;
  private _startPositioner;
  private _stopPositioner;
  get triggerSlot(): Element;
  get hasTrigger(): boolean;
  private _handleSlotChange;
  private _handleTooltipShow;
  private _handleTooltipHide;
  render(): any;
}
