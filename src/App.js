import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Data from './data.json';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {
        src: '',
        title: '',
        description: '',
      },
      modalShow: false,
      setModalShow: false
    }
  }






  render() {
    return (
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <div className="App">
          <Header />

          <Main
            beastList={Data}
            chooseBeast={this.chooseBeast}
            handleShowModalClick={this.handleShowModalClick}
          />
          <Footer />
        </div>
      </ThemeProvider>

    );
  }
}


export default App;
