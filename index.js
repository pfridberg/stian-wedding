import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";
import 'fullpage.js/vendors/easings';
import 'fullpage.js/vendors/scrolloverflow';
import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma/css/bulma.css'
import 'bulma-timeline/dist/css/bulma-timeline.min.css';
import './style.css'

const autumnMist = ["bda89f","c29b94","d19288","e7d7b8","d9a376"]

new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    sectionsColor: autumnMist
});

console.log("hello world");