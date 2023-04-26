import { EventEmitter } from '../../stencil-public-runtime';
import { SegmentedButton } from './rux-segmented-button.model';
/**
 * @part label - the label of rux-segmented-button
 */
export declare class RuxSegmentedButton {
  el: HTMLRuxSegmentedButtonElement;
  /**
   * Items in this Array are the individual button segments.
   */
  data: SegmentedButton[];
  /**
   * When passed in on load, this selects the first button segment with a matching label. When the selected segment changes, this property updates with the currently selected value, which reflects back to the component attribute. If no button segment label matches this string, then no segment is selected. This value takes priority over setting selected boolean property on the items in the data array.
   */
  selected: string;
  /**
   * Changes size of segmented button from small to medium or large.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Sets the disabled attribute.
   */
  disabled: boolean;
  /**
   * Fires when the value property has changed and emits that value on the event.detail.
   */
  ruxChange: EventEmitter;
  onDataChange(newValue: string): void;
  connectedCallback(): void;
  private _handleChange;
  private _setSelected;
  private _slugify;
  private _isSelected;
  private _handleFocus;
  private _handleBlur;
  render(): any;
}
