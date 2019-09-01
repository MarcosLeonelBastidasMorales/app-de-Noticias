import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import LNoticias from './components/LNoticias';
import Formulario from './components/Formulario';





class App extends Component {
  state={
    noticias:[]

  }


  componentDidMount(){
    this.consultarNoticias();
    
    
  }

  consultarNoticias = async (categoria= 'general') =>{
    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=694f11b642584bf28b134b5d34aca0b2
    `;
    const respuesta = await fetch(url);
    const noticias= await respuesta.json();
    this.setState({
      noticias: noticias.articles
    })

  }



  render() {
    return (
      <Fragment>

          <Header
            titulo='Noticas React API'
          />

          <div className="container white contenedor-noticias">
            <Formulario 
              consultarNoticias={this.consultarNoticias}
            />
            <LNoticias 
              noticias={this.state.noticias}
            />

          </div>

      </Fragment>
    );
  }
}

export default App;