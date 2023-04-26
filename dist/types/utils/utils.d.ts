export declare const hasShadowDom: (el: HTMLElement) => boolean;
export declare function hasSlot(el: HTMLElement, name?: string | undefined): boolean;
/**
* This method is used to add a hidden input to a host element that contains
* a Shadow DOM. It does not add the input inside of the Shadow root which
* allows it to be picked up inside of forms. It should contain the same
* values as the host element.
* https://github.com/ionic-team/ionic-framework/blob/ae96563fb3c4612cb8585292b389ee746f5759f7/core/src/utils/helpers.ts#L198

*
* @param always Add a hidden input even if the container does not use Shadow
* @param container The element where the input will be added
* @param name The name of the input
* @param value The value of the input
* @param disabled If true, the input is disabled
* @param checked Optional. If true, the input is checked
*/
export declare const renderHiddenInput: (always: boolean, container: HTMLElement, name: string, value: string | undefined | null, disabled: boolean, checked?: boolean) => void;
/**
 * Renders multiple hidden inputs from an array of values
 * Used in multiselect
 * @param always
 * @param container
 * @param name
 * @param value
 * @param disabled
 */
export declare const renderHiddenSelect: (always: boolean, container: HTMLElement, name: string, value: string | undefined | null | string[], disabled: boolean) => void;
