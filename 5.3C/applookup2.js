// Defining the list of units in an array
var units = [
    { code: 'ICT10001', name: 'Problem Solving with ICT', creditPoints: 12.5, type: 'Core' },
    { code: 'COS10005', name: 'Web Development', creditPoints: 12.5, type: 'Core' },
    { code: 'INF10003', name: 'Introduction to Business Information Systems', creditPoints: 12.5, type: 'Core' },
    { code: 'INF10002', name: 'Database Analysis and Design', creditPoints: 12.5, type: 'Core' },
    { code: 'COS10009', name: 'Introduction to Programming', creditPoints: 12.5, type: 'Core' },
    { code: 'INF30029', name: 'Information Technology Project Management', creditPoints: 12.5, type: 'Core' },
    { code: 'ICT30005', name: 'Professional Issues in Information Technology', creditPoints: 12.5, type: 'Core' },
    { code: 'ICT30001', name: 'Information Technology Project', creditPoints: 12.5, type: 'Core' }
];

// Creating a component for the units to pass in the router
const Unit = {
    data() {
        return {
            units
        }
    },
    template: `
        <div>
            <h2>Unit Information</h2>
            <table border="1">
                <tr>
                    <th>Unit Code</th>
                    <th>Unit Name</th>
                    <th>Credit Points</th>
                    <th>Type</th>
                </tr>
                <tr v-for="unit in units" :key="unit.code">
                    <td><router-link :to="'/unit/' + unit.code">{{ unit.code }}</router-link></td>
                    <td>{{ unit.name }}</td>
                    <td>{{ unit.creditPoints }}</td>
                    <td>{{ unit.type }}</td>
                </tr>
            </table>
        </div>
    `,
    computed: {
        filteredUnits() {
            let id = this.$route.params.id;
            return this.units.find(unit => unit.code === id);
        }
    }
}

// Creating a detailed view component
const UnitDetail = {
    data() {
        return {
            unit: null
        };
    },
    created() {
        let id = this.$route.params.id;
        this.unit = units.find(unit => unit.code === id);
    },
    template: `
        <div v-if="unit">
            <h2>Unit Detail for {{ unit.code }}</h2>
            <p><strong>Unit Name:</strong> {{ unit.name }}</p>
            <p><strong>Credit Points:</strong> {{ unit.creditPoints }}</p>
            <p><strong>Type:</strong> {{ unit.type }}</p>
            <router-link to="/">Back to list</router-link>
        </div>
        <div v-else>
            <p>Unit not found!</p>
            <router-link to="/">Back to list</router-link>
        </div>
    `
}

// Creating the VueRouter
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: Unit },
        { path: '/unit/:id', component: UnitDetail }
    ]
})

// Create new app instance
const app = Vue.createApp({})

// Use router, mount to app
app.use(router)
app.mount('#app')
