import { EventEmitter } from '../../stencil-public-runtime';
import { FormFieldInterface } from '../../common/interfaces.module';
/**
 * @slot label - The input label
 * @slot prefix - Left side input icon
 * @slot suffix - Right side input icon
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part icon - The icon displayed when toggle-password prop is set
 * @part input-field - the styled wrapper around the input element
 * @part input - The input element
 * @part label - The input label when `label` prop is set
 * @part required - The asterisk when required is true
 * @part prefix - The container of the prefix slot
 * @part suffix - The container of the suffix slot
 *
 */
export declare class RuxInput implements FormFieldInterface {
  private inputId;
  private inputEl;
  el: HTMLRuxInputElement;
  hasLabelSlot: boolean;
  hasHelpSlot: boolean;
  hasErrorSlot: boolean;
  togglePassword: boolean;
  isPasswordVisible: boolean;
  hasFocus: boolean;
  /**
   * The input label text. For HTML content, use the `label` slot instead.
   */
  label?: string;
  /**
   * The input placeholder text
   */
  placeholder?: string;
  /**
   * The help or explanation text
   */
  helpText?: string;
  /**
   * The validation error text
   */
  errorText?: string;
  /**
   * Presentational only. Renders the Input Field as invalid.
   */
  invalid: boolean;
  /**
   * The input value
   */
  value: string;
  /**
   * The input name
   */
  name: string;
  /**
   * The input type
   */
  type: 'text' | 'number' | 'email' | 'url' | 'search' | 'password' | 'date' | 'datetime-local' | 'time' | 'tel';
  /**
   * The input min attribute
   */
  min?: string;
  /**
   * The input max attribute
   */
  max?: string;
  /**
   * Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
   */
  disabled: boolean;
  /**
   * Sets the input as required
   */
  required: boolean;
  /**
   * Control the padding around the input field
   */
  size: 'small' | 'medium' | 'large';
  /**
   * The input step attribute
   */
  step?: string;
  /**
   * The input's spellcheck attribute
   */
  spellcheck: boolean;
  /**
   * The inputs readonly attribute
   */
  readonly: boolean;
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxChange: EventEmitter;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxInput: EventEmitter;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxBlur: EventEmitter;
  /**
   * Fired when an element has gained focus - [HTMLElement/focus_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
   */
  ruxFocus: EventEmitter;
  /**
   * Sets element as focused
   */
  setFocus(options?: FocusOptions): Promise<void>;
  handleLabelChange(): void;
  handleTypeChange(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  get hasLabel(): boolean;
  private _onChange;
  private _onInput;
  private _onBlur;
  private _onFocus;
  private _handleSlotChange;
  private _setTogglePassword;
  private _handleTogglePassword;
  render(): any;
}
