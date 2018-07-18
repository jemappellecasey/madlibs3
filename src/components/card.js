import React, { Component } from 'react';

import Input from './input';
import Content from './content';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebOne: '',
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjectiveThree: '',
            celebTwo: '',
            celebThree: '',
            adjectiveFour: '',
            nounThree: '',
            celebFour: '',
            adjectiveFive: '',
            contentVisible: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    } 
    
    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    handleFormSubmit(event) {
        event.preventDefault()
        this.setState({ contentVisible: !this.state.contentVisible })
    }


    render() {

        const inputData = [
            {type: 'Color', state: this.state.color, name: 'color'},
            {type: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {type: 'Adjective', state: this.state.adjectiveOne, name: 'adjectiveOne'},
            {type: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},

            {type: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo'},
            {type: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {type: 'Number', state: this.state.numberOne, name: 'numberOne'},
            {type: 'Number', state: this.state.numberTwo, name: 'numberTwo'},

            {type: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {type: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree'},
            {type: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo'},
            {type: 'Celebrity', state: this.state.celebThree, name: 'celebThree'},

            {type: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour'},
            {type: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {type: 'Celebrity', state: this.state.celebFour, name: 'celebFour'},
            {type: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive'},
]
        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                    { 
                        inputData.map(data => Input( (data), this.handleInputChange )) 
                    }
                </div>
                <button>{this.state.contentVisible ? 'Clear' : 'Generate Madlib' }</button>
                {
                    this.state.contentVisible ? <Content data={this.state} /> : ''
                }
            </form>
        )
    }
}

export default Card;