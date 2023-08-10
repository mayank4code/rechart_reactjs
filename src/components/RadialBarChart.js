import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import UserData from '../UserData';

// const data = [
//   { name:'Max',uv:100, pv: 2400, fill:'#ffffff' }, // Maximum Possible  value
//   { name: 'A', uv: 8 , pv: 9800, fill: '#213766' },
//   { name: 'B', uv: 18, pv: 3908, fill: '#ff5286' },
//   { name: 'C', uv: 30, pv: 4800, fill: '#753ba4' },
//   { name: 'D', uv: 45, pv: 4800, fill: '#547835' },
//   { name: 'E', uv: 62, pv: 4800, fill: '#d78c00' },
//   { name: 'F', uv: 74, pv: 4800, fill: '#df6000' },
// ];

function RadialBarChartComponent({ userId }) {

  const user = UserData.find((student) => student.id === userId);
  // console.log(user);
  if (!user) {
    return <div><h5>User not found.  {userId} </h5></div>;
  }

  const rawData = [
    {
      name: 'Affected by group size or unanimity?',
      score: ((8 - (user.option[1-1]-1)*2) + (8 - (user.option[2-1]-1)*2)) , fill: '#ffffff'
    },
    {
      name: 'Affected by cohesion or status of others?',
      score: ((8 - (user.option[3-1]-1)*2) + (8 - (user.option[4-1]-1)*2)), fill: '#ffffff'
    },
    {
      name: 'Affected by Reciprocity?',
      score: ((8 - (user.option[15-1-1])*2) + (8 - (user.option[16-1]-1)*2)), fill: '#ffffff'
    },
    {
      name: 'Affected by Commitment and Consistency?',
      score: ((8 - (user.option[17-1]-1)*2) + (8 - (user.option[18-1]-1)*2)), fill: '#ffffff'
    },
    {
      name: 'Affected by Commitment and Consistency?',
      score: ((8 - (user.option[21-1]-1)*2) + (8 - (user.option[22-1]-1)*2)), fill: '#ffffff'
    },
    { name: 'Affected by Authority/ commands ?', 
      score: ((8 - (user.option[25-1]-1)*2) + (8 - (user.option[26-1]-1)*2)), fill: '#ffffff' },

    { name: 'Max', score: 20, fill: '#ffffff' }, // Maximum Possible  value
  ];


  const sortedData = rawData.sort((a, b) => a.score - b.score);

  const colorArray = [
    { fill: '#213766' },
    { fill: '#ff5286' },
    { fill: '#753ba4' },
    { fill: '#547835' },
    { fill: '#d78c00' },
    { fill: '#df6000' },
    { fill: '#ffffff' },
  ];

  sortedData.forEach((data, index) => {
    sortedData[index].fill = colorArray[index].fill;
  });

// console.log(sortedData);


  return (
    <RadialBarChart
      width={655} height={500} //size of div
      cx={158} cy={230} // coordinates of origin or centre
      innerRadius={30} outerRadius={195}
      startAngle={90} endAngle={-270} data={sortedData} barSize={50}

    >
      <RadialBar
        background
        dataKey="score"
      />
      <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
    </RadialBarChart>
  );
};

export default RadialBarChartComponent;
