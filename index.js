/* Copyright 2020 Patrik Fridberg Bakken
  
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.

  Source code can be found at https://github.com/neqel/stian-wedding
*/

import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.extensions.min.js'
import 'fullpage.js/dist/fullpage.css'
import 'fullpage.js/vendors/easings'
import 'fullpage.js/vendors/scrolloverflow'
import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma/css/bulma.css'
import 'bulma-timeline/dist/css/bulma-timeline.min.css'
import './style.css'

const autumnMist = ["bda89f","c29b94","d19288","e7d7b8","d9a376"]

new fullpage('#fullpage', {
    //options here
    licenseKey: "l0aCu8N?h4",
    autoScrolling: true,
    sectionsColor: autumnMist,
    slidesNavigation: true,
    navigation: true,
    controlArrows: false,
    normalScrollElements: "#map-hotell, #map-kirke"
});
