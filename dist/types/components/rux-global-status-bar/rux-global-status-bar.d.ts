/**
 * @slot (default) - Used for any additional center content (RuxClock, RuxTabs, etc.)
 * @slot left-side - Used to prepend a RuxIcon or similar element
 * @slot app-meta - Used to display the Application's metadata (Domain, Name, State, Version, etc.)
 * @slot right-side - Used to append optional content
 *
 * @part app-state - The container for the applications state
 * @part container - The container for global-status-bar
 * @part username - The container for the username
 * @part app-meta - The container for the Application's metadata
 * @part center - The container for the default slot content
 */
export declare class RuxGlobalStatusBar {
  /**
   * Declares whether the menu-icon will be shown in the left-side slot
   */
  includeIcon: boolean;
  /**
   * Declares what text will render and whether the app-state component will be shown in the app-meta slot
   */
  appState?: string;
  /**
   * Declares the color of the the app-state component background
   */
  appStateColor?: 'tag1' | 'tag2' | 'tag3' | 'tag4';
  /**
   * Declares what text will render and whether the username component will be shown in the app-meta slot
   */
  username?: string;
  /**
   * Sets the domain of the application to be displayed in the app-meta element
   */
  appDomain?: string;
  /**
   * Sets the name of the application to be displayed in the app-meta element
   */
  appName?: string;
  /**
   * Sets the version of the application to be displayed in the app-meta element
   */
  appVersion?: string;
  /**
   * Sets the icon to be displayed in the default rux-icon component
   */
  menuIcon: string;
  render(): any;
}
