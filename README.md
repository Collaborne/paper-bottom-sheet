paper-bottom-sheet [![Bower version](https://badge.fury.io/bo/paper-bottom-sheet.svg)](http://badge.fury.io/bo/paper-bottom-sheet) [![Travis state](https://travis-ci.org/Collaborne/paper-bottom-sheet.svg?branch=master)](https://travis-ci.org/Collaborne/paper-bottom-sheet) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Collaborne/paper-bottom-sheet)
=========

`paper-bottom-sheet` provides a material design modal [bottom sheet](https://www.google.com/design/spec/components/bottom-sheets.html). The web component is built with [Polymer](https://www.polymer-project.org).

Items can be added with the element `paper-bottom-sheet`. The last item in the sheet is a cancel item.

![Screenshot](/doc/screenshot.png "Screenshot")

To use this element:

`bower install paper-bottom-sheet`

```html
<paper-bottom-sheet slide with-backdrop>
    <paper-bottom-sheet-item text="Star" icon="icons:star-border" ></paper-bottom-sheet-item>
    <paper-bottom-sheet-item text="Delete" icon="icons:delete" warning></paper-bottom-sheet-item>
</paper-bottom-sheet>
```

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
