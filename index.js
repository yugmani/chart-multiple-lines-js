// Import stylesheets
import './style.css';

const ctx = document.getElementById('multipleLineChart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      moment(new Date(2020, 2, 1).format(YYYY - MM - DD)),
      moment(new Date(2020, 2, 2).format(YYYY - MM - DD)),
      moment(new Date(2020, 2, 3).format(YYYY - MM - DD)),
    ],
    datasets: [
      {
        label: '#of Red Votes',
        data: [12, 18, 22],
        borderWidth: 1,
        fill: false,
        borderColr: 'red',
      },
      {
        label: '# of Green Votes',
        data: [12, 2, 13],
        borderWidth: 1,
        fill: false,
        borderColor: 'green',
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
