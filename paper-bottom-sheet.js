import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-icons/iron-icons.js';
import {IronSelectableBehavior} from '@polymer/iron-selector/iron-selectable.js';
import '@polymer/neon-animation/animations/slide-from-bottom-animation.js';
import '@polymer/neon-animation/animations/slide-down-animation.js';

/**
A material design modal [bottom sheet](https://www.google.com/design/spec/components/bottom-sheets.html)

### Example

```html
<paper-bottom-sheet>
	<paper-bottom-sheet-item text="Star" icon="icons:star-border" on-tap="star"></paper-bottom-sheet-item>
	<paper-bottom-sheet-item text="Delete" icon="icons:delete" warning on-tap="delete"></paper-bottom-sheet-item>
</paper-bottom-sheet>
```

@demo demo/index.html
*/
class PaperBottomSheet extends mixinBehaviors([IronSelectableBehavior], PolymerElement) {
	static get template() {
		return html`
			<style>
				.dialog {
					background-color: rgba(0,0,0,0.6)!important;
					margin: 0!important;
					@apply --layout-fixed-bottom;
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
			</style>

			<paper-dialog
				id="dialog"
				class="dialog"
				animation-config="{{_dialogAnimationConfig}}"
				no-cancel-on-esc-key="[[noCancelOnEscKey]]"
				no-cancel-on-outside-click="[[noCancelOnOutsideClick]]"
				modal="[[modal]]"
				with-backdrop="[[withBackdrop]]"
				on-iron-overlay-closed="_attemptRemoval"
				auto-fit-on-attach>
				<div class="content">
					<slot id="items"></slot>
					<paper-bottom-sheet-item
						hidden\$="[[!modal]]"
						id="cancel"
						text="[[cancelText]]"
						icon="icons:close"
						on-tap="close"
					></paper-bottom-sheet-item>
				</div>
			</paper-dialog>`;
	}

	static get properties() {
		return {

			/**
			 * The animation config supplied to the included paper-dialog. Will be empty unless "slide"
			 * is set.
			 */
			_dialogAnimationConfig: {
				computed: '_animationConfig(slide)',
				type: Object,
			},

			/**
			 * Text for the cancel item. This can be used to localize the item
			 */
			cancelText: {
				type: String,
				value: 'Cancel',
			},

			/**
			 * True if the bottom sheet acts like a modal dialog (e.g. can't be closed by clicking outside).
			 * Note that the "cancel" option will disappear if the dialog is not modal, as the "cancel" option
			 * will be the user's only method of exit when the bottom sheet is modal.
			 */
			modal: {
				type: Boolean,
				value: false,
			},

			/**
			* Set to true to disable canceling the overlay with the ESC key.
			*/
			noCancelOnEscKey: {
				type: Boolean,
				value: false,
			},

			/**
			* Set to true to disable canceling the overlay by clicking outside it.
			*/
			noCancelOnOutsideClick: {
				type: Boolean,
				value: false,
			},

			/**
			 * True if the bottom sheet should slide in from the bottom on entry
			 */
			slide: {
				type: Boolean,
				value: false,
			},

			/**
			 * True if the bottom sheet is opened with backdrop
			 * @default true
			 */
			withBackdrop: {
				type: Boolean,
				value: true,
			},
		};
	}

	static get listeners() {
		return {
			// This event is fired when the animation finishes
			'neon-animation-finish': '_onNeonAnimationFinish'
		};
	}

	/**
	 * Open the bottom sheet and append it to the DOM.
	 * @returns {void}
	 */
	open() {
		if (!this._placeHolder) {
			this._placeHolder = document.createElement('div');
			this.parentNode.insertBefore(this._placeHolder, this);
		}

		document.body.appendChild(this);

		// Wait until dialog is added to the DOM (required for Safari)
		setTimeout(() => this.$.dialog.open(), 1);
	}

	/**
	 * Close the bottom sheet and remove it from the DOM.
	 * @returns {void}
	 */
	close() {
		if (this._placeHolder) {
			this._placeHolder.style.display = 'none';
		}

		this.$.dialog.close();

		// Remove the dialog from the DOM if there is no animation
		if (!this.slide) {
			this._attemptRemoval();
		}
	}

	/**
	 * Computed property function- changes the animation config of the dialog based on presence of "slide" attr
	 * @param	{Boolean} slide True if the bottom sheet should slide in
	 * @returns {Object} Animation config
	 */
	_animationConfig(slide) {
		if (!slide) {
			return {};
		}

		return {
			entry: {
				name: 'slide-from-bottom-animation',
				node: this.$.dialog
			},
			exit: {
				name: 'slide-down-animation',
				node: this.$.dialog
			}
		};
	}

	/**
	 * Runs when the dialog is closed. Will remove this from the DOM
	 * @returns {void}
	 */
	_attemptRemoval() {
		// Remove this element from DOM if there is an animation and the dialog just closed
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	}

	_onNeonAnimationFinish() {
		if (this._placeHolder) {
			const height = Array.from(this.$.dialog.children).reduce((total, x) => total + x.offsetHeight, 0);
			this._placeHolder.style.height = `${height}px`;
			this._placeHolder.style.width = '100%';
			this._placeHolder.style.display = 'block';
			window.scrollBy(0, height);
		}
	}
}
window.customElements.define('paper-bottom-sheet', PaperBottomSheet);
