const { createApp } = Vue;
const { createRouter, createWebHistory } = VueRouter;

// Component: NameTest
const NameTest = {
    template: `
        <div>
            <h1>String Test</h1>
            <label for="nameInput">Please enter your name:</label>
            <input id="nameInput" v-model="strName" type="text">
            <p v-if="strName.toLowerCase() === 'Duc Anh'.toLowerCase()">Awesome name!</p>
            <p v-else-if="strName !== ''">{{ strName }} is not my name</p>
        </div>
    `,
    data() {
        return {
            strName: ''
        };
    }
};

// Component: PostManagement
const PostManagement = {
    template: `
        <div>
            <h1>Status Post App</h1>
            <input v-model="strStatus" placeholder="Enter your status" />
            <button @click="add(strStatus)">Post</button>
            <ul>
                <li v-for="(post, index) in statPosts" :key="index">
                    {{ post }}
                    <button @click="remove(index)">Delete</button>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            statPosts: [],
            strStatus: ''
        };
    },
    methods: {
        add(status) {
            if (status.trim()) {
                this.statPosts.push(status);
                this.strStatus = '';
            }
        },
        remove(index) {
            this.statPosts.splice(index, 1);
        }
    }
};

// Component: StudentMarks
const StudentMarks = {
    template: `
        <div>
            <table class="table table-bordered">
                <caption>List of Student Marks</caption>
                <thead>
                    <tr>
                        <th id="name-header" scope="col">Name</th>
                        <th id="mark-header" scope="col">Mark</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in paginatedData" :key="student.name">
                        <td :headers="'name-header'">{{ student.name }}</td>
                        <td :headers="'mark-header'">{{ student.mark }}</td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <button class="page-link" @click="changePage(currentPage - 1)">Previous</button>
                    </li>
                    <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                        <button class="page-link" @click="changePage(page)">{{ page }}</button>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <button class="page-link" @click="changePage(currentPage + 1)">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    `,
    data() {
        return {
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
        };
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
};

// Create Router
const routes = [
    { path: '/', component: NameTest },
    { path: '/post-management', component: PostManagement },
    { path: '/student-marks', component: StudentMarks }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Create App
const app = createApp({});
app.use(router);
app.mount('#app');

console.log("App mounted successfully");
