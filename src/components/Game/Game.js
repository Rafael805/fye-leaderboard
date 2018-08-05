import React, { Component } from 'react'

function GridCell(props) {
   var style = {
      width: 20,
      height: 20,
      border: '.5px solid black',
      backgroundColor: props.cell
   }

   return (
      <div style= {style}>

      </div>
   )
}

function GridRow(props) {
   var style = {
      display: 'flex',
   }

   return (
      <div style= {style}>
         {
            props.row.map((cell) => {
               return <GridCell cell={cell} />
            })
         }
      </div>
   )
}

function Grid(props) {
   return (
      <div>
         {
            props.grid.map((row) => {
               return <GridRow row={row} />
            })
         }
      </div>
   )
}

class Game extends Component {
   constructor(props) {
      super(props);

      var grid = [];

      for (let i = 0; i < 20; i++) {
         grid.push(new Array(30).fill('#8FC1CB'))
      }

      var bird = {
         height: 10,
         position: 2
      }

      var towers = [
         {position: 3, height: 5, upright: false},
         {position: 5, height: 8, upright: true},
         {position: 5, height: 6, upright: false}
      ]

      grid[bird.height][bird.position] = 'yellow'

      this.state = { grid: grid, bird: bird, towers: towers }

      this.timerID = setInterval(() => {
         var gridCopy = [];
         var towersCopy = this.state.towers.slice();

         for (let i = 0; i < 20; i++) {
            gridCopy.push(new Array(30).fill('#8FC1CB'))
         }

         for (let i = 0; i < towersCopy.lenght; i++) {
            for (let j = 0; j < towersCopy[i].height; j++) {
               console.log("lol");
               if(towersCopy[i].upright)
                  gridCopy[19-j][towersCopy[i].position] = 'blue';
               else
                  gridCopy[j][towersCopy[i].position] = 'blue';
            }
         }

         var birdCopy = this.state.bird;
         birdCopy.height++;
         if (birdCopy.height > 19 || birdCopy.height < 10) {
            birdCopy.height = 10;
         }
         gridCopy[birdCopy.height][birdCopy.position] = 'yellow';

         this.setState({grid: gridCopy, bird: birdCopy, towers: towersCopy});
      }, 200)

   }
   render() {
      return <Grid grid={this.state.grid} />;
   }
}

export default Game;
