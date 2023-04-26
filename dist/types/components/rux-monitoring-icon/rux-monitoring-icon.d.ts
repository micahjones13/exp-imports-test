import { Status } from '../../common/commonTypes.module';
/**
 * @part container - the components container
 * @part monitoring-badge - The component's notification badge
 * @part monitoring-label - The component's label
 * @part monitoring-sublabel - The component's sublabel
 * @part status-icon - the components status symbol
 */
export declare class RuxMonitoringIcon {
  el: HTMLRuxMonitoringIconElement;
  /**
   * Styles the icon according to the Astro Status colors.
   * Valid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby`, and `off`.
   */
  status: Status;
  /**
   * Displays a label below the icon
   */
  label: string;
  /**
   * Displays a smaller label underneath the icon label
   */
  sublabel?: string;
  /**
   * Displays an Astro icon matching this string. For a [full list of available icons,
   * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
   */
  icon: string;
  /**
   * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
   * Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands,
   * `'1.5M'` for millions, `'1.5B'` for billions, and uses `'∞'` for one trillion or higher.
   */
  notifications: number;
  componentDidRender(): void;
  validateStatus(newValue: string): void;
  handleNotificatonWidth(): void;
  render(): any;
}
