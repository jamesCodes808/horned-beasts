import React from 'react';
import HornedBeast from './HornedBeast';
import Col from 'react-bootstrap/Col';

class SearchedBeasts extends React.Component {

    render() {
        console.log(this.props.filteredBeasts)
        return (
            <>

                {this.props.filteredBeasts.map(beast =>
                    <Col sm={12} md={6} lg={4} xl={4}>
                        <HornedBeast
                            beast={beast}
                            key={beast.key}
                            imageUrl={beast.image_url}
                            description={beast.description}
                            title={beast.title}
                            setSelectedBeast={this.props.setSelectedBeast}
                        />
                    </Col>)}

            </>
        )
    }

}

export default SearchedBeasts;