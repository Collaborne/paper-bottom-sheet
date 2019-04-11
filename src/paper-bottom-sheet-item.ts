import { css, customElement, html, LitElement, property } from 'lit-element';

import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-item/paper-icon-item';
import '@polymer/paper-item/paper-item-body';
import '@polymer/paper-ripple/paper-ripple';

/**
 * An item in a material design modal [bottom sheet](https://www.google.com/design/spec/components/bottom-sheets.html)
 */
@customElement('paper-bottom-sheet-item')
export class PaperBottomSheetItem extends LitElement {
	/**
	 * True if the item is disabled
	 */
	@property({type: Boolean})
	public disabled: boolean = false;

	/**
	 * True if the item isn't visible
	 */
	@property({type: Boolean, reflect: true})
	public hidden: boolean = false;

	/**
	 * Icon ID for the item. The icon will be passed to [`iron-icon`](https://elements.polymer-project.org/elements/iron-icon).
	 * See for [options](https://elements.polymer-project.org/elements/iron-icons?view=demo:demo/index.html&active=iron-icons).
	 */
	@property({type: String})
	public icon: string = 'icons:check';

	/**
	 * Text for the item
	 */
	@property({type: String})
	public text?: string;

	/**
	 * True if the item is a warning
	 */
	@property({type: Boolean, reflect: true})
	public warning: boolean = false;

	static get styles() {
		return css`
			:host {
				/** Vertically center content in IE 11 */
				@apply --layout-vertical;
				@apply --paper-bottom-sheet-item;
			}

			:host([hidden]) {
				display: none!important;
			}

			:host([warning]) {
				color: var(--paper-red-900);
			}

			.item {
				margin: 0;
				background: white;
				position: relative;
				cursor: pointer;
				@apply --paper-bottom-sheet-item-item;
			}
		`;
	}

	protected render() {
		return html `
			<paper-icon-item class="item" ?disabled="${this.disabled}">
				<paper-ripple></paper-ripple>
				<iron-icon .icon="${this.icon}" slot="item-icon"></iron-icon>
				<span>${this.text}</span>
			</paper-icon-item>`;
	}
}
