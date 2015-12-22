paper-bottom-sheet [![Bower version](https://badge.fury.io/bo/paper-bottom-sheet.svg)](http://badge.fury.io/bo/paper-bottom-sheet) [![Travis state](https://travis-ci.org/Collaborne/paper-bottom-sheet.svg?branch=master)](https://travis-ci.org/Collaborne/paper-bottom-sheet)
=========

`paper-bottom-sheet` provides a material design modal [bottom sheet](https://www.google.com/design/spec/components/bottom-sheets.html). The web component is built with [Polymer 1.x](https://www.polymer-project.org).

Items can be added with the element `paper-bottom-sheet`. The last item in the sheet is a cancel item.

![Screenshot](/doc/screenshot.png "Screenshot")


## Usage

`bower install paper-bottom-sheet`

```html
<paper-bottom-sheet>
  <paper-bottom-sheet-item text="Star" icon="icons:star-border" on-tap="star"></paper-bottom-sheet-item>
  <paper-bottom-sheet-item text="Delete" icon="icons:delete" warning on-tap="delete"></paper-bottom-sheet-item>
</paper-bottom-sheet>
```


## Properties

These properties are available for `paper-bottom-sheet`:

Property        | Type    | Description                                                                                  | Default value
--------------- | ------- | -------------------------------------------------------------------------------------------- | -------------
**cancel-text** | String  | Text for the cancel item. This can be used to localize the item.                             | Cancel
**modal**       | Boolean | True if the bottom sheet acts like a modal dialog (e.g. can't be closed by clicking outside) | false

These properties are available for `paper-bottom-sheet-item`:

Property     | Type    | Description                   | Default value       
------------ | ------- | ----------------------------- | -------------
**text**     | String  | Text for the item             |
**icon**     | String  | Icon ID for the item. The icon will be passed to [`iron-icon`](https://elements.polymer-project.org/elements/iron-icon). See for [options](https://elements.polymer-project.org/elements/iron-icons?view=demo:demo/index.html&active=iron-icons). | icons:check
**warning**  | Boolean | Flag if the item is a warning | false


## License

    This software is licensed under the Apache 2 license, quoted below.

    Copyright 2011-2015 Collaborne B.V. <http://github.com/Collaborne/>

    Licensed under the Apache License, Version 2.0 (the "License"); you may not
    use this file except in compliance with the License. You may obtain a copy of
    the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
    License for the specific language governing permissions and limitations under
    the License.
    