const app = Vue.createApp({});

app.component('mymenu', {
    props: ['menu'], // defining the props
    template: `
        <ul>
            <li v-for="item in menu" :key="item">{{ item }}</li>
        </ul>
    ` // defining template for the menu list
});

app.mount('#app');
