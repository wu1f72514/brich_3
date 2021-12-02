import store from './store';
import './style.css';
import './components/todoApp';
import './components/userInfo';

const App = new Vue({
  store: store,
  el: '#app',
  methods: {
    injectHeadStylesheet(href) {
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.append(link);
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      this.injectHeadStylesheet(
        'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css'
      );
    });
  },
});
