import React from 'react';
//import logo from './logo.svg';
import './App.css';
import RadioButton from './RadioButton';
import PointList from './PointList';



const angleToRadian = function(angle) {
  return Math.PI/180 * angle;
}

const canvas = {width: 500, height: 500}; 
const rad = 5;

function Point(props) {
  const {ctx, x, y} = props;

  ctx.beginPath();
  //ctx.moveTo(x+rad, y+rad);
  //ctx.arc(x, canvas.height-y, rad, 0, angleToRadian(360));
  ctx.arc(x+canvas.width/2, canvas.height/2-y, rad, 0, angleToRadian(360));

  

  ctx.fill();
  ctx.stroke();
}
    
    class App extends React.Component  {
      
      state = {
        punktyTab: [
          [1 , 4], [3, 5.1], [5, 2]
        ],
        punktyOb: [
          {id:1, x: 20, y: 40},
          {id:2, x: 40, y: 50},
          {id:3, x: 60, y: 80},
        ],
        szukanyPunkt: 2,
        odpowiedz: 0,
      }
      
      rodzajWykresu = [
        {id:1, name: "Liniowy"},
        {id:2, name: "Inny"},
        {id:3, name: "Przerywany"},
      ];
      
      addPoint = () => {
        console.log("Dodany punkt")
      }
      
      deletePoint = (id) => {
        // const punktyOb = [...this.state.punktyOb];
        // const index = punktyOb.findIndex(el => el.id === id)
        // punktyOb.splice(index, 1)
        // this.setState({
          //   punktyOb
          // })
          
          //to samo II metoda
          let punktyOb = [...this.state.punktyOb];
          punktyOb = punktyOb.filter( el => el.id !== id)
          this.setState({
            punktyOb
          })
          
          
        }
        
        
        componentDidMount() {
          const canvas = this.refs.canvas;
          const ctx = canvas.getContext('2d');
          
          
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          //ctx.fillStyle = "red";
          
          //ctx.fillRect(0,0, 100, 100);
          ctx.strokeStyle = "black"


          ctx.beginPath();
          ctx.moveTo(canvas.width/2-10, 10+20);
          ctx.lineTo(canvas.width/2, 10);
          ctx.lineTo(canvas.width/2+10, 10+20);
          ctx.lineTo(canvas.width/2, 10);
          ctx.lineTo(canvas.width/2, canvas.height-10);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(10,    canvas.height/2);
          ctx.lineTo(canvas.width-10,    canvas.height/2);
          ctx.lineTo(canvas.width-10-20, canvas.height/2-10);
          ctx.lineTo(canvas.width-10,    canvas.height/2);
          ctx.lineTo(canvas.width-10-20, canvas.height/2+10);
          ctx.stroke();



    // ctx.beginPath();
    // ctx.moveTo(canvas.width/2, canvas.height/2);
    // ctx.arc(canvas.width/2, canvas.height/2, 5, 0, angleToRadian(360));
    // ctx.fill();
    // ctx.stroke();



  }
  
  rysujPunkty = () => {
    //const canvas = parentCnt.querySelector('canvas');
    //const ctx = this.refs.canvas.getContext('2d');
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "red";

    this.state.punktyOb.map( el => {
      Point({ctx, x:el.x, y:el.y});  
    })
    
    Point({ctx, x:35, y:50});


  }

  render() {

    
    return (
      <div className="App">

      <header className="App-header">
        Header
      </header>

      <hgroup className="App-wykres">
        Hgroup - wykres
        <canvas ref="canvas" width={canvas.width} height={canvas.height} />

      </hgroup>

      <section className="App-section">
        <div className="wprowadz-rodzaj">
          <RadioButton title="Rodzaj wykresu" buttons={this.rodzajWykresu} />
        </div>
        <div className="wprowadz-oblicz">
          <label > Label </label>
          
          Oblicz
          <button type="submit" onClick={this.rysujPunkty}>Oblicz</button>
        </div>
        <div className="wprowadz-puntky">
          <div className="pole-wprowadzenia">
            x:<input type="number" />
            y:<input type="number" />
          </div>
          <div className="lista-punktow">
            <br/>
            <button onClick={this.addPoint}>Dodaj punkt</button>
            <br/>
            <PointList points={this.state.punktyOb} delete={this.deletePoint} />
          </div>
        </div>
        
      </section>

    </div>
    );
  }
}

export default App;
