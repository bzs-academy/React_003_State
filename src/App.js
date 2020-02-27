import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Child from './components/Child';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      baslik: 'React ogreniyorum',
      ders: 'React JS',
      sehir: 'Istanbul',
      isDisplayed: true,
      color: 'lightblue',
      isim: 'Jale'
    }
    this.stateDegistir = this.stateDegistir.bind(this)
  }

  stateDegistir () {
    this.setState({
      baslik: 'HTML ogrendim',
      ders: 'Bootstrap',
    })
  }

  stateDegistir2 = () => {
    this.setState({
      baslik: 'CSS ogreniyorum',
      ders: 'CSS'
    })
  }

  sehirGosterme = () => {
    this.setState({
      //isDisplayed: false
      isDisplayed: !this.state.isDisplayed
    })
  }

  changeBG = () => {
    const newColor = this.state.color === 'lightblue' ? 'lightgreen' : 'lightblue';
    this.setState({
      color: newColor
    })
  }

  changeIsim = e => this.setState({isim :  e.target.value })


  render () {
    return (
      <div>
        <div className="App" style={{backgroundColor: this.state.color}}>
          <h2>{this.state.baslik}</h2>
          <p>{this.state.ders}</p>
          <button onClick={this.stateDegistir} >Change State</button>
          <button onClick={this.stateDegistir2} >Change State - 2</button>
    
          { this.state.isDisplayed ? <p>{this.state.sehir}</p> : null }
          <button onClick={this.sehirGosterme}>not show sehir</button>
          <hr/>
          <button onClick={this.changeBG}>Change BG { this.state.color === 'lightblue' ? 'lightgreen' : 'lightblue' } </button>

        </div>
        <Counter />

        <div className="App" style={{backgroundColor: 'lightgreen'}}>

          <input type="text" value={this.state.isim} onChange={this.changeIsim}/>
          <Child isim={this.state.isim}/>
        </div>

      </div>

    );
  }

}

export default App;







// function App() {
//   return (
//     <div>
//       Hello World
//     </div>
//   );
// }

// export default App;
