
document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            units: [
                { code: 'ICT10001', description: 'Problem Solving with ICT', creditPoints: 12.5, type: 'Core' },
                { code: 'COS10005', description: 'Web Development', creditPoints: 12.5, type: 'Core' },
                { code: 'INF10003', description: 'Introduction to Business Information Systems', creditPoints: 12.5, type: 'Core' },
                { code: 'INF10002', description: 'Database Analysis and Design', creditPoints: 12.5, type: 'Core' },
                { code: 'COS10009', description: 'Introduction to Programming', creditPoints: 12.5, type: 'Core' },
                { code: 'INF30029', description: 'Information Technology Project Management', creditPoints: 12.5, type: 'Core' },
                { code: 'ICT30005', description: 'Professional Issues in Information Technology', creditPoints: 12.5, type: 'Core' },
                { code: 'ICT30001', description: 'Information Technology Project', creditPoints: 12.5, type: 'Core' }
            ],
            selectedUnit: null
        },
        methods: {
            showDetails(code) {
                this.selectedUnit = this.units.find(unit => unit.code === code);
            }
        }
    });
});
