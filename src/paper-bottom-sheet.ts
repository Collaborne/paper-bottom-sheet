import { css, customElement, html, LitElement, property } from 'lit-element';

import * as Flexbox from '@collaborne/lit-flexbox-literals';
import '@polymer/iron-icons/iron-icons';
import '@polymer/neon-animation/animations/slide-down-animation';
import '@polymer/neon-animation/animations/slide-from-bottom-animation';
import '@polymer/paper-dialog/paper-dialog';
import { PaperDialogElement } from '@polymer/paper-dialog/paper-dialog';
import './paper-bottom-sheet-item';

/**
 * A material design modal [bottom sheet](https://www.google.com/design/spec/components/bottom-sheets.html)
 */
@customElement('paper-bottom-sheet')
export class PaperBottomSheet extends LitElement {
	/**
	 * True if the item is a warning
	 */
	@property({type: Boolean})
	public warning: boolean = false;

	/**
	 * Text for the cancel item. This can be used to localize the item
	 */
	@property({type: String})
	public cancelText: string = 'Cancel';

	/**
	 * CSS value for margin of the sheet. Leave this empty to use full-width
	 */
	@property({type: String})
	public margin?: string;

	/**
	 * CSS value for max-width of the sheet. Leave this empty to use full-width
	 */
	@property({type: String})
	public maxWidth?: string;

	/**
	 * True if the bottom sheet acts like a modal dialog (e.g. can't be closed by clicking outside).
	 * Note that the "cancel" option will disappear if the dialog is not modal, as the "cancel" option
	 * will be the user's only method of exit when the bottom sheet is modal.
	 */
	@property({type: Boolean})
	public modal: boolean = false;

	/**
	 * Set to true to disable canceling the overlay with the ESC key.
	 */
	@property({type: Boolean})
	public noCancelOnEscKey: boolean = false;

	/**
	 * Set to true to disable canceling the overlay by clicking outside it.
	 */
	@property({type: Boolean})
	public noCancelOnOutsideClick: boolean = false;

	/**
	 * True if the bottom sheet should slide in from the bottom on entry
	 */
	@property({type: Boolean})
	public slide: boolean = false;

	/**
	 * True if the bottom sheet is opened with backdrop
	 */
	@property({type: Boolean})
	public withBackdrop: boolean = true;

	private placeHolder?: HTMLDivElement;

	static get styles() {
		return css`
			#dialog {
				background-color: rgba(0,0,0,0.6)!important;
				margin: 0!important;
				${Flexbox.fixed}
				${Flexbox.fixedBottom}
			}

			.content {
				width: 100%;
				background-color: white;
				bottom: 0;
				margin: 0 !important;
				padding: 0 !important;
				padding-bottom: constant(safe-area-inset-bottom)!important; /* iOS 11.0 */
				padding-bottom: env(safe-area-inset-bottom)!important; /* iOS 11.2 */
			}

			[hidden] {
				display: none;
			}
		`;
	}

	/**
	 * Open the bottom sheet and append it to the DOM.
	 */
	public open() {
		if (!this.placeHolder) {
			this.placeHolder = document.createElement('div');
			this.parentNode!.insertBefore(this.placeHolder, this);
		}

		document.body.appendChild(this);

		// Wait until dialog is added to the DOM (required for Safari)
		setTimeout(() => this.dialogEl.open(), 1);
	}

	/**
	 * Close the bottom sheet and remove it from the DOM.
	 */
	public close() {
		if (this.placeHolder) {
			this.placeHolder.style.display = 'none';
		}

		this.dialogEl.close();

		// Remove the dialog from the DOM if there is no animation
		if (!this.slide) {
			this.attemptRemoval();
		}
	}

	protected render() {
		const entryAnimation = this.slide ? 'slide-from-bottom-animation' : undefined;
		const exitAnimation = this.slide ? 'slide-down-animation' : undefined;

		return html`
			<paper-dialog
				id="dialog"
				auto-fit-on-attach
				entry-animation="${entryAnimation}"
				exit-animation="${exitAnimation}"
				?modal="${this.modal}"
				?no-cancel-on-esc-key="${this.noCancelOnEscKey}"
				?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
				?with-backdrop="${this.withBackdrop}"
				@iron-overlay-closed="${this.attemptRemoval}"
			>
				<div class="content">
					<slot id="items"></slot>
					<paper-bottom-sheet-item
						?hidden="${!this.modal}"
						id="cancel"
						.text="${this.cancelText}"
						.icon="icons:close"
						@click="${this.close}"
					></paper-bottom-sheet-item>
				</div>
			</paper-dialog>`;
	}

	protected updated(changedProperties: Map<string, any>) {
		if (changedProperties.has('margin')) {
			this.onMarginChanged(changedProperties.get('margin'));
		}
		if (changedProperties.has('maxWidth')) {
			this.onMaxWidthChanged(changedProperties.get('maxWidth'));
		}
	}

	/**
	 * Runs when the dialog is closed. Will remove this from the DOM
	 * @returns {void}
	 */
	private attemptRemoval() {
		// Remove this element from DOM if there is an animation and the dialog just closed
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	}

	private onMaxWidthChanged(newValue: string) {
		this.dialogEl.style.maxWidth = newValue;
	}

	private onMarginChanged(newValue: string) {
		if (newValue && newValue.length) {
			this.dialogEl.style.setProperty('margin', newValue, 'important');
		} else {
			this.dialogEl.style.margin = '';
		}
	}

	private get dialogEl(): PaperDialogElement {
		return this.shadowRoot!.getElementById('dialog')! as PaperDialogElement;
	}
}
