import { EventEmitter } from '../../stencil-public-runtime';
import { FormFieldInterface } from '../../common/interfaces.module';
/**
 * @slot (default) - The select options
 * @slot label - The select label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The select label
 * @part select - The select element
 * @part required - The asterisk when required is true
 */
export declare class RuxSelect implements FormFieldInterface {
  private slotContainer?;
  private selectEl;
  el: HTMLRuxSelectElement;
  hasLabelSlot: boolean;
  hasHelpSlot: boolean;
  hasErrorSlot: boolean;
  /**
   * Disables the select menu via HTML disabled attribute. Select menu takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
   */
  disabled: boolean;
  /**
   * Sets the field as required
   */
  required: boolean;
  /**
   * The select label text. For HTML content, use the `label` slot instead.
   */
  label?: string;
  /**
   * Id for the Select Input
   */
  inputId?: string;
  /**
   * Id for the Label
   */
  labelId?: string;
  /**
   * Presentational only. Renders the Select Menu as invalid.
   */
  invalid: boolean;
  /**
   * Enables multiselect
   */
  multiple: boolean;
  /**
   * Sets the Name of the Input Element
   */
  name: string;
  /**
   * The value of the selected option. If multiple is true, this is an array.
   */
  value?: string | string[];
  /**
   * The help or explanation text
   */
  helpText?: string;
  /**
   * The validation error text
   */
  errorText?: string;
  /**
   * The size of rux-select
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Event Emitted when the Value of the Select is Changed
   */
  ruxSelectChanged: EventEmitter<void>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxBlur: EventEmitter;
  onValueChange(): void;
  handleLabelChange(): void;
  handleGroupChange(): void;
  handleOptionChange(): void;
  /**
   * Sets element as focused
   */
  setFocus(options?: FocusOptions): Promise<void>;
  connectedCallback(): void;
  componentWillLoad(): void;
  get hasLabel(): boolean;
  private _onBlur;
  private _handleLabelSlotChange;
  private _handleSlotChange;
  /**
   * The native select element doesn't play nicely with slots. If an <option> isn't a direct child element, it won't render properly.
   * As a solution, we expose a slot outside the shadow-DOMed <select> and then manually copy the contents inside the shadow DOM.
   *
   * A RuxOptionGroup component is required because onSlotchange won't fire if we use the native <optgroup> and we change just its options.
   * RuxOptionGroup exists only to fire a change event that we can listen to.
   */
  private _syncOptionsToNativeSelect;
  private _appendOptGroupToNativeSelect;
  private _appendOptionToNativeSelect;
  private _syncOptionsFromValue;
  private _onChange;
  render(): any;
}
