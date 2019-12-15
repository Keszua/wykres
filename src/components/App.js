import React from 'react';
//import logo from './logo.svg';
import './App.css';
import RadioButton from './RadioButton';
import PointList from './PointList';


class App extends React.Component  {
  
  state = {
    punktyTab: [
      [1 , 4], [3, 5.1], [5, 2]
    ],
    punktyOb: [
      {id:1, x: 2, y: 4},
      {id:2, x: 4, y: 5},
      {id:3, x: 6, y: 8},
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
  
  render() {

    
    return (
      <div className="App">

      <header className="App-header">
        Header
      </header>

      <hgroup className="App-wykres">
        Hgroup - wykres
      </hgroup>

      <section className="App-section">
        <div className="wprowadz-rodzaj">
          <RadioButton title="Rodzaj wykresu" buttons={this.rodzajWykresu} />
        </div>
        <div className="wprowadz-oblicz">
          <label > Label </label>

          Oblicz
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
