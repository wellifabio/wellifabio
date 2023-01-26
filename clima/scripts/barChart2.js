/**
 * Este arquivo necessita que os arquivos a seguir sejam chamados no documento HTML
 * ./node_modules/chart.js/dist/chart.js
 * ./data.js
 * Ex:
 * <script src="./node_modules/chart.js/dist/chart.js"></script>
 * <script src="./scripts/data.js"></script>
 */

const ctx4 = document.getElementById('bar-chart-2');
const chart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: dados.dias,
        datasets: [{
            label: "Maximas Cº",
            data: dados.maximas,
            borderColor: 'rgba(250,50,0,100)',
            borderWidth: 2,
            backgroundColor: 'rgba(250,50,0,0.5)',
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: "Mínimas Cº",
            data: dados.minimas,
            borderColor: 'rgba(100,100,200,100)',
            borderWidth: 2,
            backgroundColor: 'rgba(100,100,200,0.5)',
            borderRadius: Number.MAX_VALUE,

        }],
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Jaguariúna médias diárias de temperatura'
            },
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                stacked: true
            }
        }
    }
});