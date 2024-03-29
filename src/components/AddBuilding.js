import React from 'react';
import '../App.css';

class AddBuilding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            code: '',
            name: '',
            coordinates: {
                latitude: '',
                longitude: ''
            },
            address: '',
            error: false
        };
    }

    handleCodeChange() {
        this.setState({code: this.code.value});
    }
    handleNameChange() {
        this.setState({name: this.name.value});
    }
    handleLatChange() {
        let lon = this.state.coordinates.longitude;
        this.setState({coordinates: {latitude: this.lat.value, longitude: lon}});
    }
    handleLonChange() {
        let lat = this.state.coordinates.latitude;
        this.setState({coordinates: {latitude: lat, longitude: this.lon.value}});
    }
    handleAddrChange() {
        this.setState({address: this.addr.value});
    }

    handleAdd() {
        if (this.state.name && this.state.code) {
            this.props.addListing(this.state);
        } else {
            this.setState({error: true});
        }
    }

    render() {
        let error = this.state.error ?
            <p className="error-text">Please enter the name and code of building</p> : null;
        return (
            <div>
                {error}
                <input
                    type="text"
                    placeholder="Enter Building Code"
                    ref={ (value) => { this.code = value } }
                    onChange={this.handleCodeChange.bind(this)}
                />
                <input
                    type="text"
                    placeholder="Enter Building Name"
                    ref={ (value) => { this.name = value } }
                    onChange={this.handleNameChange.bind(this)}
                />
                <input
                    type="text"
                    placeholder="Enter Building Latitude"
                    ref={ (value) => { this.lat = value } }
                    onChange={this.handleLatChange.bind(this)}
                />
                <input
                    type="text"
                    placeholder="Enter Building Longitude"
                    ref={ (value) => { this.lon = value } }
                    onChange={this.handleLonChange.bind(this)}
                />
                <input
                    type="text"
                    placeholder="Enter Building Address"
                    ref={ (value) => { this.addr = value} }
                    onChange={this.handleAddrChange.bind(this)}
                />
                <button  onClick={this.handleAdd.bind(this)}>Add</button>
                <button className="bottomButton" onClick={this.props.cancelListing}>Cancel</button>
            </div>
        );
    }
}

export default AddBuilding;
