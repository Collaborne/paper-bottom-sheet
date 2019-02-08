import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/paper-ripple/paper-ripple.js';
import '@polymer/paper-styles/paper-styles.js';

/**
An item in a material design modal [bottom sheet](https://www.google.com/design/spec/components/bottom-sheets.html)

### Example

```html
<paper-bottom-sheet-item text="Star" icon="icons:star-border" on-tap="star"></paper-bottom-sheet-item>
<paper-bottom-sheet-item text="Delete" icon="icons:delete" warning on-tap="delete"></paper-bottom-sheet-item>
<paper-bottom-sheet-item text="Fullscreen" icon="icons:fullscreen" disabled"></paper-bottom-sheet-item>
```

@demo demo/index.html
*/
class PaperBottomSheetItem extends PolymerElement {
	static get template() {
		return html `
			<style>
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
			</style>

			<paper-icon-item class="item" disabled\$="[[disabled]]">
				<paper-ripple></paper-ripple>
				<iron-icon icon="[[icon]]" slot="item-icon"></iron-icon>
				<span>[[text]]</span>
			</paper-icon-item>`;
	}

	static get properties() {
		return {
			/**
			 * Text for the item
			 */
			text: String,

			/**
			 * Icon ID for the item. The icon will be passed to [`iron-icon`](https://elements.polymer-project.org/elements/iron-icon).
			 * See for [options](https://elements.polymer-project.org/elements/iron-icons?view=demo:demo/index.html&active=iron-icons).
			 */
			icon: {
				type: String,
				value: 'icons:check'
			},

			/**
			 * True if the item is a warning
			 */
			warning: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},

			/**
			 * True if the item is disabled
			 */
			disabled: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},

			/**
			 * True if the item isn't visible
			 */
			hidden: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
		};
	}
}
window.customElements.define('paper-bottom-sheet-item', PaperBottomSheetItem);
