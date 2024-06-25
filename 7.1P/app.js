new Vue({
    el: '#app',
    data: {
      posts: []
    },
    created() {
      this.fetchPosts();
    },
    methods: {
      fetchPosts() {
        const vm = this;
        $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
          vm.posts = data;
        });
      }
    }
  });
  