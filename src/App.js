
import { useState } from "react";
import Graph from "./components/Graph";
import PieChart from "./components/PieChart";
import RadialBarChartComponent from './components/RadialBarChart';
import './App.css';

// import { UserData } from "./Data";

function App() {
  return (
    <div className='App row p-5'>
      <div className="col" /*style={{ width: 700 }}*/>
        <h1>Graph Chart Example</h1>
        <h4 style={{ color: 'grey'}}>Compilance vs. Social Pressure</h4>
        <Graph  />
      </div>
      <div className="col" >
        <h1>PieChart Example</h1>
        <h4 style={{ color: 'grey'}}>Social Influence Breakdown</h4>
        <PieChart />
      </div>
      <div className="col">
        <h1>RadialBarChart Example</h1>
        <RadialBarChartComponent />
      </div>
    </div>
  );
}

export default App;



/*

            <div className='row'>
                <div className="col form-outline mb-3 formInput ">
                    
                </div>
                <div className="col form-outline mb-3 formInput ">

                </div>
            </div>


*/