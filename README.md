paper-bottom-sheet [![Bower version](https://badge.fury.io/bo/paper-bottom-sheet.svg)](http://badge.fury.io/bo/paper-bottom-sheet)
=========

`paper-bottom-sheet` providing a material design modal [bottom sheet](https://www.google.com/design/spec/components/bottom-sheets.html). The web component is built with [Polymer 1.x](https://www.polymer-project.org).

Items can be added with the element `paper-bottom-sheet`. The last item in the sheet is a cancel item.

## Usage

`bower install paper-bottom-sheet`

```html
<paper-bottom-sheet id="sheet">
  <paper-bottom-sheet-item text="Star" icon="icons:star-border" on-tap="star"></paper-bottom-sheet-item>
  <paper-bottom-sheet-item text="Delete" icon="icons:delete" warning on-tap="delete"></paper-bottom-sheet-item>
</paper-bottom-sheet>
```


## Properties

These properties are available for `paper-bottom-sheet`:

Property        | Description                                                 | Default value
--------------- | ----------------------------------------------------------- | -------------
**cancel-text** | Text of cancel item. This can be used to localize the item. | Cancel

These properties are available for `paper-bottom-sheet-item`:

Property     | Description                   | Default value       
------------ | ----------------------------- | -------------
**text**     | Text of item                  |
**icon**     | Icon ID of the item. The icon will be passed to [`iron-icon`](https://elements.polymer-project.org/elements/iron-icon). See for [options](https://elements.polymer-project.org/elements/iron-icons?view=demo:demo/index.html&active=iron-icons). | icons:check
**warning**  | Flag if the item is a warning | false


## Continuous integration

[Travis-CI](https://travis-ci.org/Collaborne/paper-bottom-sheet) [![Travis state](https://travis-ci.org/Collaborne/paper-bottom-sheet.svg?branch=master)](https://travis-ci.org/Collaborne/paper-bottom-sheet)


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
    