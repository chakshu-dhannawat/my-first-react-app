import logo from './logo.svg';
import './App.css';
import graph from './Actual_vs_prediction.png';
import graph2 from './Actual_vs_prediction_frequency.png';
function App() {
  let UK_wind = 'MAE =  0.11124845 MSE =  0.023405911 R2_Score = 98.9%';
  let US_wind = 'MAE =  0.09429027 MSE =  0.017192336 R2_Score = 98.04%';
  let US_solar= '';
  let UK_solar = '';
  return (
    <div className="App">
      <div class="header">
        <a href="#default" class="logo">DLS</a>
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <p>
        The graph of actual data vs prediction
      </p>
      <div class="row">
        <div class="column">
          <img src={graph} alt="Snow" />
          <p>
            Performance metrics:
          </p>
          <p>
            MAE =  0.07279362<br></br>
            MSE =  0.008260049<br></br>
            R2_Score = 83.21%
          </p>
        </div>
        <div class="column">
          <img src={graph2} alt="Forest" />
          <p>
            Performance metrics:
          </p>
          <p>
            MAE =  0.07279362<br></br>
            MSE =  0.008260049<br></br>
            R2_Score = 83.21%
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
