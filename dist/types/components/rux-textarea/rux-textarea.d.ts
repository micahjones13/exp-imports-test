import { EventEmitter } from '../../stencil-public-runtime';
import { FormFieldInterface } from '../../common/interfaces.module';
/**
 * @slot label - The textarea label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part textarea - The textarea element
 * @part required - The asterisk when required is true
 */
export declare class RuxTextarea implements FormFieldInterface {
  private inputId;
  private textareaEl;
  hasLabelSlot: boolean;
  hasHelpSlot: boolean;
  hasErrorSlot: boolean;
  /**
   * The textarea label text. For HTML content, use the `label` slot instead.
   */
  label?: string;
  /**
   * The textarea placeholder text
   */
  placeholder?: string;
  /**
   * The  or explanation text
   */
  helpText?: string;
  /**
   * The validation error text
   */
  errorText?: string;
  /**
   * Presentational only. Renders the Textarea as invalid.
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
   * The input minLength attribute
   */
  minLength?: string;
  /**
   * The input maxLength attribute
   */
  maxLength?: string;
  /**
   * The input rows attribute
   */
  rows?: number;
  /**
   * Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
   */
  disabled: boolean;
  /**
   * Sets the input as disabled
   */
  required: boolean;
  /**
   * Styles the input element size between small, medium and large. The default styling is medium.
   */
  size?: 'small' | 'medium' | 'large';
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
  el: HTMLRuxTextareaElement;
  /**
   * Sets element as focused
   */
  setFocus(options?: FocusOptions): Promise<void>;
  handleLabelChange(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  get hasLabel(): boolean;
  private _handleSlotChange;
  private _onChange;
  private _onInput;
  private _onBlur;
  render(): any;
}
