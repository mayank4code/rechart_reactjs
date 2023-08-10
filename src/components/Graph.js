import React from 'react';

import {
  XAxis,
  YAxis,
  CartesianGrid,
  // Line,
  Label,LabelList,
  Scatter,
  ScatterChart,
  ReferenceLine,
  ReferenceArea,
  // Rectangle
} from 'recharts';
import UserData from "../UserData";

const data = [
  { x: 3, y: 7 , name:'Q1: Information Driven' ,fill: '#be8440'},
  { x: 7.75, y: 9 , name:'Q2: Ideal Normative',fill: '#96b159'},
  { x: 7, y: 3 , name:'Q3: Friendly Follower',fill: '#2369b1'},
  { x: 1, y: 1,name:'Q4: Individualist Rebellion',fill: '#e52409'},
];

const Graph = ({ userId }) => {
  const user = UserData.find((student) => student.id === userId);

  if (!user) {
    return <div><h5>User not found.  {userId} </h5></div>;
  }

  const optionCount = [0, 0, 0, 0]; // Array to store the count of each option

  // Count the number of each option selected
  user.option.forEach((option) => {
      optionCount[option - 1]++;
    });

  // Find the option selected the maximum number of times
  const maxOptionIndex = optionCount.indexOf(Math.max(...optionCount));
  const maxOption = maxOptionIndex + 1;
  // const maxOption = 2;

  return (
    <ScatterChart width={400} height={500} margin={{ top: 25, right: 10, bottom: 25, left: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke ="#ffffff"/>
      <XAxis type="number" dataKey="x" domain={[0, 10]} tickCount={6}>
        <Label value="Confirmity to Scale of Social Pressure" position="bottom" offset={-7} />
      </XAxis>
      <YAxis type="number" dataKey="y" domain={[0, 10]} tickCount={11}>
        <Label value="Confirmity to Scale of Compilance" angle={-90} position="insideLeft bottom" offset={25} />
      </YAxis>
      <Scatter data={data} fill={data.fill}>
        {data.map((point, index) => (
            <ReferenceLine key={index} x={point.x} y={point.y} stroke="#ccc" strokeDasharray="3 3" />
            
          ))}
        <LabelList dataKey="name" position="right" />
      </Scatter>
      <ReferenceLine y={5} stroke="#f8bb1e" strokeWidth={4} />
      <ReferenceLine x={5} stroke="#6b7dab" strokeWidth={4} />

//! for Single Quadrant 
      {/* Creating the rectangles with dotted border */}

      {maxOption===1 ?
      <ReferenceArea
        x1={0+0.09} y1={5+0.09}
        x2={5-0.09} y2={10-0.09}
        stroke="dotted"
        strokeOpacity={0.7}
        fill= "#6b7dab"
        fillOpacity={0.3}
      /> : <></>}

      {maxOption===2 ?
      <ReferenceArea
        x1={5+0.09} y1={5+0.09}
        x2={10-0.09} y2={10-0.09}
        stroke="dotted"
        strokeOpacity={0.7}
        fill= "#6b7dab"
        fillOpacity={0.3}
      /> : <></>}

      {maxOption===3 ?
      <ReferenceArea
        x1={5+0.09} y1={0+0.09}
        x2={10-0.09} y2={5-0.09}
        stroke="dotted"
        strokeOpacity={0.7}
        fill= "#6b7dab"
        fillOpacity={0.3}
      /> : <></>}

      {maxOption===4 ? 
      <ReferenceArea
        x1={0+0.09} y1={0+0.09}
        x2={5-0.09} y2={5-0.09}
        stroke="dotted"
        strokeOpacity={0.7}
        fill= "#6b7dab"
        fillOpacity={0.3}
      /> : <></>}







              
        //! for all the quadrant

        {/* Creating the rectangles with dotted border */}
        

        {/* <ReferenceArea
        x1={0+0.09} y1={5+0.09}
        x2={5-0.09} y2={10-0.09}
        stroke="dotted"
        strokeOpacity={0.7}
        fill={maxOption === 1 ? "#800080" : "#6b7dab"}
        fillOpacity={0.3}
        />
        
        <ReferenceArea
        x1={5+0.09} y1={5+0.09}
        x2={10-0.09} y2={10-0.09}
        stroke="dotted"
        strokeOpacity={0.7}
        fill={maxOption === 2 ? "#800080" : "#6b7dab"}
        fillOpacity={0.3}
        />

        <ReferenceArea
        x1={5+0.09} y1={0+0.09}
        x2={10-0.09} y2={5-0.09}
        stroke="dotted"
        strokeOpacity={0.7}
        fill={maxOption === 3 ? "#800080" : "#6b7dab"}
        fillOpacity={0.3}
        />

        <ReferenceArea
        x1={0+0.09} y1={0+0.09}
        x2={5-0.09} y2={5-0.09}
        stroke="dotted"
        strokeOpacity={0.7}
        fill={maxOption === 4 ? "#800080" : "#6b7dab"}
        fillOpacity={0.3}
        /> */}


    </ScatterChart>
  );
};

export default Graph;



// ! for all the quadrant

// {/* Creating the rectangles with dotted border */}
// <ReferenceArea
// x1={0+0.09} y1={0+0.09}
// x2={5-0.09} y2={5-0.09}
// stroke="dotted"
// strokeOpacity={0.7}
// fill={maxOption === 1 ? "#800080" : "#6b7dab"}
// fillOpacity={0.3}
// />

// <ReferenceArea
// x1={0+0.09} y1={5+0.09}
// x2={5-0.09} y2={10-0.09}
// stroke="dotted"
// strokeOpacity={0.7}
// fill={maxOption === 2 ? "#800080" : "#6b7dab"}
// fillOpacity={0.3}
// />

// <ReferenceArea
// x1={5+0.09} y1={0+0.09}
// x2={10-0.09} y2={5-0.09}
// stroke="dotted"
// strokeOpacity={0.7}
// fill={maxOption === 3 ? "#800080" : "#6b7dab"}
// fillOpacity={0.3}
// />

// <ReferenceArea
// x1={5+0.09} y1={5+0.09}
// x2={10-0.09} y2={10-0.09}
// stroke="dotted"
// strokeOpacity={0.7}
// fill={maxOption === 4 ? "#800080" : "#6b7dab"}
// fillOpacity={0.3}
// />