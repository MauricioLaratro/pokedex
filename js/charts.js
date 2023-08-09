const ctx = document.getElementById('stats').getContext('2d');

export function createChart(stats) {
  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'HP',
        'Attack',
        'Defense',
        ['Special', 'Attack'],
        ['Special', 'Defense'],
        'Speed',
      ],
      datasets: [{
        data: stats,
        backgroundColor: 'rgb(255, 255, 0, 0.5)'
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
            display: false,
        }
      },
      scales: {
        r: {
          grid :{
            color: 'white'
          },
          pointLabels: {
            color: 'rgb(255, 255, 0, 1)'
          },
          angleLines: {
            color: 'rgb(255, 255, 0, 1)'
          }
        }
      }
    }
  });
}