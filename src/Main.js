import React from 'react';
import HornedBeast from './HornedBeast';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectedBeast from './SelectedBeast';
import BeastSearchForm from './BeastSearchForm';
import SearchedBeasts from './SearchedBeasts'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedBeast: {},
            modalShow: false,
            setModalShow: false,
            searchQuery: '',
            searchCategory: '',
        }
    };

    setSelectedBeast = (beastObj) => {
        this.setState({
            selectedBeast: beastObj,
            setModalShow: true,
            modalShow: true,

        })
    }

    handleCloseModalClick = () => {
        this.setState({
            setModalShow: false,
            modalShow: false
        })
    }

    setSearchQuery = (e) => {
        this.setState({
            searchQuery: e.target.value,
        })
    }

    setSelectedCategory = (e) => {
        this.setState({
            searchCategory: e.target.value
        })
    }

    handleSubmit = (e) => {
        
    }

    fuzzySearch = (searchStatement, searchCat) => {
        let filteredBeasts = new Array();
        this.props.beastList.filter(beast => {


            if (beast[searchCat] == searchStatement) {
                filteredBeasts.push(beast)
            }
        })

        console.log(filteredBeasts)
        return filteredBeasts;
    }

    render() {
        console.log(this.state.searchCategory)
        console.log(this.state.searchQuery)
        return (
            <>
                <ThemeProvider
                    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                    minBreakpoint="xxs"
                >
                    <main>

                        <Container>
                            <Row>
                                <Col></Col>
                                <Col sm={4} md={4} lg={4}>
                                    <BeastSearchForm
                                        setSearchQuery={this.setSearchQuery}
                                        setSelectCategory={this.setSelectedCategory} />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>

                        <Container fluid="lg">
                            <Row className="justify-content-sm-center">
                                {this.state.searchQuery.length === 0 ?
                                    this.props.beastList.map(beast => (
                                        <Col sm={12} md={6} lg={4} xl={4}>
                                            <HornedBeast
                                                beast={beast}
                                                key={beast.key}
                                                imageUrl={beast.image_url}
                                                description={beast.description}
                                                title={beast.title}
                                                setSelectedBeast={this.setSelectedBeast}
                                            />
                                        </Col>
                                    ))
                                    : <SearchedBeasts
                                        filteredBeasts={this.fuzzySearch(this.state.searchQuery, this.state.searchCategory)}
                                        setSelectedBeast={this.setSelectedBeast} />}
                            </Row>
                        </Container>
                    </main>
                </ThemeProvider>
                <SelectedBeast
                    beast={this.state.selectedBeast}
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false, setModalShow: false })} />
            </>
        )
    }
}

export default Main;
