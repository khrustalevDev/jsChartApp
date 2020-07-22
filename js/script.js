let cfg = {
    type: 'pie',
    data: {
        labels: ['YNDX', 'VTBR', 'TATN', 'FXGD', 'VTBA'],
        datasets: [{
            data: [
                5000, 3400, 2192, 345, 600
            ],
            backgroundColor: [
                'red', 'blue', 'green', 'yellow', '#e3e3e3'
            ],
            borderColor: '#000',
            borderWidth: 1
        }],
        options: {
            // responsive: true
        }
    }
};

let diag = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(diag, cfg);