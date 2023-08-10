import i18n, { changeLanguage } from "i18next";
import { useTranslation } from 'react-i18next';

import React, { useEffect } from "react";


import { 
  PieChart, 
  Pie, 
  Cell,Label,
  Legend
  } from 'recharts';
import UserData from '../UserData';

// const data = [
//   { name: 'Confirimity',value: 34 , fill:'#FFBA00' },
//   { name: 'Compliance', value: 40 , fill:'#6CA044'},
//   { name: 'Obedience', value: 26 , fill:'#A24F10'}
// ];

function PieChartCom ({userId}) {
  const { t } = useTranslation();

  useEffect(()=>{
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);

  },[]);

  const user = UserData.find((student) => student.id === userId);
  // console.log(user);
  if (!user) {
    return <div><h5>User not found.  {userId} </h5></div>;
  }

  // Defining Type values 
  var confirimity = 0 ;
  var compilance  = 0 ;
  var obedience   = 0 ;

  //multiplying the Social Pressure in the option choosen
  const factor = 0.5 ;

  // Count the number of each option selected by the user with weight
  user.option.forEach((option,index)=>{
    if (index>=0 && index<=12) {
      confirimity+=  1 *(2- ((option-1)*factor))   ;
    }
    else if (index>=13 && index<=21){
      compilance+=  1.44 *(2- ((option-1)*factor))   ;
    }
    else if (index>=22 && index<=25){
      obedience+=  3.25 *(2- ((option-1)*factor))   ;
    }
  }); 

  // converting Type Values in " % "
  const total = confirimity + compilance + obedience ;
  confirimity = Math.round((confirimity/total)*100);
  compilance  = Math.round((compilance/total)*100);
  obedience   = Math.round((obedience/total)*100);

 

  const data = [
    { name: t('main_heading1') ,value: confirimity , fill:'#FFBA00' },
    { name: 'Compliance', value: compilance , fill:'#6CA044'},
    { name: 'Obedience', value: obedience , fill:'#A24F10'}
  ];
  // console.log(data);
  
  return (
    <div style={{ textAlign: 'center' }}>
      <PieChart width={300} height={500}>
        <Pie
          data={data}
          dataKey="value"
          isAnimationActive={true}
          cx={150} cy={180}
          startAngle={90} endAngle={-270}
          outerRadius={140} innerRadius={70}
          labelLine={false}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.15;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

            return (
              <text
                x={x} y={y} fill="#000000"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                style={{ fontWeight: 'bold', fontSize: 30  }}
              >
                {`${data[index].value}%`}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Pie>
        <Legend
          iconSize={25}
          layout="vertical"
          verticalAlign="bottom"
          // align=""
          wrapperStyle={{ fontSize: 25 , fontWeight: 'bold'  }}
        />
      </PieChart>
    </div>
  );
}

export default PieChartCom ;

