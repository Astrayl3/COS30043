new Vue({
    el: '#app',
    data: {
        units: [],
        text: ""
        },
    created() {
        fetch('units.jsggon')
            .then(response => response.json())
            .then(data => {
                this.units = data;
            })
            .catch(error => {
                this.text = error
            });
    }
});
