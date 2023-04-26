import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @slot (default) - The expanded content
 * @slot label - Summary title
 * @slot prefix - Area to the left of label
 * @part container - The accordion item
 * @part label-wrapper - The element wrapping prefix, indicator and the label
 * @part label - The label
 * @part prefix - The wrapper for the prefix slot
 * @part indicator - The opened/closed indicator
 */
export declare class RuxAccordionItem {
  el: HTMLRuxAccordionItemElement;
  hasPrefix: boolean;
  /**
   * If present, sets the initial state on this accordion item to open, displaying the accordion content.
   */
  expanded: boolean;
  updateExpanded(): void;
  /**
   * If present, sets a disabled state on this accordion item, indicating it cannot be selected by user action.
   */
  disabled: boolean;
  /**
   * Fired when an accordion-item has expanded
   */
  ruxExpanded: EventEmitter;
  /**
   * Fired when an accordion-item has collapsed
   */
  ruxCollapsed: EventEmitter;
  private _clickHandler;
  private _handleSlotChange;
  connectedCallback(): void;
  render(): any;
}
