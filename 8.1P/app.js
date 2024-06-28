new Vue({
    el: '#app',
    data: {
      studMarks: [
        { "name": "Amy", "mark": 90 },
        { "name": "Bill", "mark": 80 },
        { "name": "Casey", "mark": 78 },
        { "name": "David", "mark": 84 },
        { "name": "Eva", "mark": 91 },
        { "name": "Frank", "mark": 76 },
        { "name": "Grace", "mark": 85 },
        { "name": "Hank", "mark": 79 },
        { "name": "Ivy", "mark": 88 },
        { "name": "Jack", "mark": 82 },
        { "name": "Kate", "mark": 95 },
        { "name": "Leo", "mark": 73 },
        { "name": "Mia", "mark": 87 },
        { "name": "Nina", "mark": 77 },
        { "name": "Owen", "mark": 81 },
        { "name": "Paul", "mark": 80 },
        { "name": "Quinn", "mark": 83 },
        { "name": "Rose", "mark": 85 },
        { "name": "Sam", "mark": 89 },
        { "name": "Tina", "mark": 92 },
        { "name": "Uma", "mark": 78 },
        { "name": "Vera", "mark": 88 },
        { "name": "Will", "mark": 81 },
        { "name": "Xena", "mark": 86 },
        { "name": "Yuri", "mark": 90 },
        { "name": "Zack", "mark": 84 }
      ],
      currentPage: 1,
      perPage: 3
    },
    computed: {
      totalPages() {
        return Math.ceil(this.studMarks.length / this.perPage);
      },
      paginatedData() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.studMarks.slice(start, end);
      }
    },
    methods: {
      changePage(page) {
        if (page > 0 && page <= this.totalPages) {
          this.currentPage = page;
        }
      }
    }
  });
  