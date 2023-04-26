/**
 * @slot (default) - The card's content
 * @slot header - The card's header
 * @part header - The card's outside header element
 * @part body - The card's outside body element
 * @part footer - The card's outside footer element
 *
 */
export declare class RuxCard {
  el: HTMLRuxCardElement;
  activeSlots: {
    header: boolean;
    footer: boolean;
  };
  connectedCallback(): void;
  private _handleSlotChange;
  render(): any;
}
