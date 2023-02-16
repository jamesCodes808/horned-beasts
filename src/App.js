import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Data from './data.json';
import SelectedBeast from './SelectedBeast';
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

  chooseBeast = (beastObj) => {
    this.setState({
      selectedBeast: beastObj
    })
  }

  handleShowModalClick = () => {
    this.setState({
      setModalShow: true,
      modalShow: true
    });
  }

  handleCloseModalClick = () => {
    this.setState({
      setModalShow: false,
      modalShow: false
    })
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
          <SelectedBeast
            beast={this.state.selectedBeast}
            show={this.state.modalShow}
            onHide={this.handleCloseModalClick}
          />
          <Footer />
        </div>
      </ThemeProvider>

    );
  }
}


export default App;
