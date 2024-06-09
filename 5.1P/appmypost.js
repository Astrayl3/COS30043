const app = Vue.createApp({});

app.component('app-mypost', {
    data: function() {
        return {
            statPosts: [],
            strStatus: ''
        };
    },
    template: `
        <div>
            <label for="statusInput">Status:</label>
            <input id="statusInput" v-model="strStatus" placeholder="Enter your status" aria-label="Status input" />
            <button @click="add(strStatus)">Post</button>
            <ul>
                <li v-for="(post, index) in statPosts" :key="index">
                    {{ post }}
                    <button @click="remove(index)">Del</button>
                </li>
            </ul>
        </div>
    `,
    methods: {
        add: function(status) {
            if (status.trim() !== '') {
                this.statPosts.unshift(status);
                this.strStatus = ''; // Clear the input field
            }
        },
        remove: function(index) {
            this.statPosts.splice(index, 1);
        }
    }
});

app.mount('#app');
