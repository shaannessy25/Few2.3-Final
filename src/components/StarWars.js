import React, { Component, useState } from 'react';
import characterDetails from './Character';

export default class StarWars extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data: '',
            number: '',
            characterDetails: []
        };
        this.onChange=this.onChange.bind(this)
        this.onClick=this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.savePerson = this.savePerson.bind(this)
        this.showAll = this.showAll.bind(this)
    };

    onChange = evt =>{
        const number = evt.target.value
        this.setState({ number })
    }

    onSubmit(e) {
        e.preventDefault()
    }
    showAll(e) {
        return (
            characterDetails()
        )
    }

    async onClick() {
        const { number } = this.state
        const response = await fetch(`https://swapi.dev/api/people/${number}/`);
        const data = await response.json();
        if (data.detail !== "Not There") {
            this.setState({ data })
        }

    }

    async savePerson() {
        let {data, characterDetails } = this.state
        characterDetails.push(data)
        this.setState({ data, characterDetails })
    }
    
    renderData() {
        const { data } = this.state
        return (
            <div>
            <h3>Name:{data.name}</h3>
            <h3>Height(in):{data.height}</h3>
            <h3>Weight(kg):{data.mass}</h3>
            <h3>Eye Color:{data.eye_color}</h3>
            <h3>Hair Color:{data.hair_color}</h3>
            <button onClick={this.savePerson}>Save</button>
            </div>
        )
    }

    render(){
        const { number, characterDetails, data } = this.state
        return (
            <div>
                <h3>Star Wars Data</h3>
                <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Enter Number" value={number} onChange={this.onChange}/>
                <button type="submit" value="search" onClick={this.onClick}>Search</button>
                <button onClick={this.showAll}>Click for List </button>
                </form>
                <div>
                    {data !== '' ? this.renderData() : null}
                </div>
                <characterDetails character={characterDetails}/>
            </div>
        )
    }
    
}