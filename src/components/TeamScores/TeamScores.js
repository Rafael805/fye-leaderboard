import React, { Component } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import firebase from '../../firebase/firebase'
import './TeamScoresStyles.css'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#d368e6', '#e8262f'];
const RADIAN = Math.PI / 180;

export default class TeamScores extends Component {
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
      console.log('score => ' + score);
      console.log('score[1] => ' + score[1]);
      console.log('score[2] => ' + score[2]);
      const data = [{name: 'Los Chiqui Babies', value: score[0]},
                     {name: 'Green Legacy', value: score[1]},
                     {name: 'Jose\'s Girls', value: score[2]},
                     {name: 'Fireball', value: score[3]},
                     {name: 'Pink Flying Ponies', value: score[4]},
                     {name: 'Lions', value: score[5]}
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
            {item.name} ({item.value})
           </text>
         );
      };
     	return (
         <div className="teamscores">
            <h1 style={{'textAlign': 'center'}}>Team Scores</h1>
            <PieChart width={620} height={580} >
              <Pie
                data={data}
                cx={300}
                cy={200}
                dataKey="value"
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
         </div>
      );
   }
}
