import { EventEmitter } from '../../stencil-public-runtime';
import { FormFieldInterface } from '../../common/interfaces.module';
/**
 * @slot label - The slider label
 * @slot help-text - the help text
 * @slot error-text - the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part input - The input element
 * @part label - The input label when `label` prop is set
 * @part tick-container - The container of the tick mark and axis-label
 * @part tick - the tick mark
 * @part axis-label - the axis label
 */
export declare class RuxSlider implements FormFieldInterface {
  private sliderId;
  el: HTMLRuxSliderElement;
  hasLabelSlot: boolean;
  hasHelpSlot: boolean;
  hasErrorSlot: boolean;
  /**
   * Min value of the slider.
   */
  min: number;
  /**
   * Max value of slider.
   */
  max: number;
  /**
   * Step amount of slider value.
   */
  step: number;
  /**
   * Current value of the slider. The default value is halfway between the specified minimum and maximum. - [HTMLElement/input_type_range>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
   */
  value: number;
  /**
   *  Shows tick marks and labels in the order provided and aligns evenly based on the length.
   */
  axisLabels: string[];
  /**
   * Hides labels and only shows tick marks if axis-labels is provided.
   */
  ticksOnly: boolean;
  /**
   * Determines if the slider is disabled.
   */
  disabled: boolean;
  /**
   * Name of the Input Field for Form Submission
   */
  name: string;
  /**
   * The slider label text. For HTML content, use the `label` slot instead.
   */
  label?: string;
  /**
   * The help or explanation text
   */
  helpText?: string;
  /**
   * The validation error text
   */
  errorText?: string;
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxInput: EventEmitter;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxBlur: EventEmitter;
  /**
   * Fired when the element's value is altered by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxChange: EventEmitter;
  componentWillLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  handleLabelChange(): void;
  handleChange(): void;
  handleStep(): void;
  get hasLabel(): boolean;
  private _closestMultiple;
  private _updateValue;
  private _setValuePercent;
  private _onInput;
  private _onChange;
  private _onBlur;
  private _getBrowser;
  private _handleSlotChange;
  private _getTickWidths;
  render(): any;
}
