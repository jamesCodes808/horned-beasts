import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Data from './data.json';

class BeastSearchForm extends React.Component {

    constructor() {
        super();
        this.state = {
            searchQuery: '',
            title: '',
            horns: '',
            keyword: '',
            description: ''
        }
    }

    // handleSearchInput = (e) => {
    //     console.log(e.target.value)
    //     this.setState = ({ searchQuery: e.target.value });
    // }

    // handleSelect = (e) => {
    //     this.setState = ({})
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.onSubmit()
    // }

    render() {
        return (
            <Form className='mb-4' onSubmit={this.handleSubmit}>
                <fieldset>
                    <Form.Group className='mb-2'>
                        <Form.Label htmlFor="fuzzySearch">Search</Form.Label>
                        <Form.Control
                            type='text'
                            id="fuzzySearch"
                            placeholder="Search for horned beast"
                            onChange={this.props.setSearchQuery}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Label htmlFor="searchCategory">Category</Form.Label>
                        <Form.Select
                            id="searchCategory"
                            onChange={this.props.setSelectCategory}>
                            <option value="horns"># Of Horns</option>
                            <option value="description">Description</option>
                            <option value="title">Title</option>
                            <option value="keyword">Keywords</option>
                        </Form.Select>
                    </Form.Group>
                </fieldset>
                <Button type="submit">Search</Button>
            </Form>
        )
    }
}


export default BeastSearchForm;