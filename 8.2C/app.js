new Vue({
    el: '#app',
    data: {
      units: [],
      currentPage: 1,
      perPage: 5
    },
    computed: {
      totalPages() {
        return Math.ceil(this.units.length / this.perPage);
      },
      paginatedData() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.units.slice(start, end);
      }
    },
    methods: {
      fetchData() {
        fetch('units.json')
          .then(response => response.json())
          .then(data => {
            this.units = data;
          })
          .catch(error => console.error('Error fetching data:', error));
      },
      changePage(page) {
        if (page > 0 && page <= this.totalPages) {
          this.currentPage = page;
        }
      }
    },
    mounted() {
      this.fetchData();
    }
  });
  