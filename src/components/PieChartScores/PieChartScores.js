import React, { Component } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import firebase from '../../firebase/firebase'
import { team } from '../../constants/emoji'
import './PieChartScoresStyles.css'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#d368e6', '#e8262f'];
const RADIAN = Math.PI / 180;

export default class PieChartScores extends Component {
   constructor() {
      super();
      this.state ={
         scores: [],
      }
   }
   componentDidMount() {
      console.log("In Team Scores Page!")
      const itemsRef = firebase.database().ref('teamScores');
      itemsRef.on('value', (snapshot) => {
         let items = snapshot.val();
         this.setState({
            scores: items,
         });
         console.log(`item[0][2] ${items[0][2]}`);
      })
   }

   render () {
      let score = this.state.scores.map(item => item[2]);
      //console.log('score => ' + score);
      const data = [{name: team.fireball, points: score[1]},
                     {name: team.green_legacy, points: score[2]},
                     {name: team.jose, points: score[3]},
                     {name: team.lion, points: score[4]},
                     {name: team.baby, points: score[5]},
                     {name: team.pink, points: score[6]}
                  ];
      console.log(`scores ${this.state.scores}`)

      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius,
                                       outerRadius, percent, index }) => {

         const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
         const x  = cx + radius * Math.cos(-midAngle * RADIAN);
         const y = cy  + radius * Math.sin(-midAngle * RADIAN);

         const item = data[index];
         // console.log("item ----> " + item.name);
         return (
           <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central" key={`label-${data.Id}-${item.Id}`}>
            {item.name} ({item.points})
           </text>
         );
      };
     	return (
         <div className="container">
            <PieChart width={620} height={520}>
              <Pie
                data={data}
                cx={300}
                cy={200}
                dataKey="points"
                labelLine={true}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
              >
              	{
                	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
              </Pie>
            </PieChart>
         <hr/>
            <BarChart width={945} height={480} data={data}>
               <XAxis dataKey="name"/>
               <YAxis />
               <Tooltip/>
               <Bar type="monotone" dataKey="points" barSize={45} fill="#16b286"/>
            </BarChart>
         </div>
      );
   }
}
