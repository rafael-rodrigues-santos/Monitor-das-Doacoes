import React from 'react';

import './App.css';

import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import GraficosIndicadores from './components/graficos-indicadores/Graficos-indicadores';
import Blocoinfo from './components/blocoinfo/Blocoinfo';
import Blocoinfodois from './components/blocoinfodois/Blocoinfodois';
import Blocoinfotres from './components/blocoinfotres/Blocoinfotres';





export default class App extends Component {

  state= {
    totaldoado: [],
  }

  async componentDidMount(){
    const response = await api.get('');
    console.log(response.data);

    this.setState ({ totaldoado: response.data })

  }


  render(){

    const { totaldoado } = this.state; 

    return (
      <div>
        <Menu />
        <GraficosIndicadores />
        <Blocoinfo />
        <Blocoinfodois />
        <Blocoinfotres />
        <Footer />
      </div>
    );
  }
}
