import './App.css';

import { Chart } from 'chart.js/auto';
import { onMount } from 'solid-js';

export function Canvas(props) {
  return <canvas ref={props.ref} width="256" height="256" />;
}

function App() {
  let lineChartRef;
  onMount(() => {
    console.log('canvas ', lineChartRef);
    const ctx = lineChartRef.getContext('2d');

    new Chart(ctx as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });

  return (
    <>
      <div class="App">EBPT</div>
      <Canvas ref={lineChartRef} />
    </>
  );
}

export default App;
