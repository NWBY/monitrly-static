window.Vue = require('vue');

// Text components
import textH1 from './components/text/h1.vue';
import textH3 from './components/text/h3.vue';

const app = new Vue({
    el: '#app',
    components: {
        // Text components
        textH1,
        textH3
    }
});
