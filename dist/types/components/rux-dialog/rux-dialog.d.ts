import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @part container - the dialog container
 * @part dialog - the native dialog element
 * @part header - the header of the dialog
 * @part message - the message of the dialog
 * @part confirm-button - the dialog's confirm button
 * @part deny-button - the dialog's deny button
 * @part footer - the footer of the dialog
 *
 * @slot header - the header of the dialog
 * @slot (default) - the dialog's message or content
 * @slot footer - the footer of the dialog
 */
export declare class RuxDialog {
  /**
   * Shows and hides dialog
   */
  open: boolean;
  /**
   * Dialog body message
   */
  message?: string;
  /**
   * Dialog header title
   */
  header?: string;
  /**
   * Text for confirmation button
   */
  confirmText: string;
  /**
   * Text for close button
   */
  denyText: string;
  /**
   * Allows dialog to close when clicking off it
   */
  clickToClose: boolean;
  /**
   * Event that is fired when dialog opens
   */
  ruxDialogOpened: EventEmitter<void>;
  /**
   * Event that is fired when dialog closes. If dialog is closed by clicking on the default confirm or deny buttons (when no footer slot is provided), then true or false will be emitted respectively on the event.detail.
   */
  ruxDialogClosed: EventEmitter<boolean | null>;
  element: HTMLRuxDialogElement;
  hasFooter: boolean;
  hasHeader: boolean;
  hasMessage: boolean;
  private _userInput;
  handleKeyDown(ev: KeyboardEvent): void;
  handleClick(ev: MouseEvent): void;
  handleOpen(isOpen: boolean): void;
  private _handleDialogChoice;
  private _getDefaultButton;
  private _getWrapper;
  connectedCallback(): void;
  componentDidRender(): void;
  private _handleSlotChange;
  render(): any;
}
