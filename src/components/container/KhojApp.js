import React, { Component } from 'react';
import AutoCompleteForm from './../presentation/AutoCompleteForm';
import AutocompleteService from "./../services/AutocompleteService";
import AutoCompleteList from './../presentation/AutoCompleteList';

export default class KhojApp extends Component{

    constructor(){
        super()
        this.state = {
            input:'',
            suggestions:[],
            selectedSuggestions:[]
        }
        //For checking if location is already added - Took Set for O(1) operation benefit
        this.selectedSuggestionsSet= new Set() 
        
        this.nameInput = React.createRef();
    }

    componentDidMount(){
        if(this.nameInput.current)
            this.nameInput.current.focus();

        document.addEventListener('click', ()=>{
            this.setState(
                {
                    'suggestions':[]
                }
            )
        });
    }

    onChangeText = (e) => {
        
        const userInput = e.currentTarget.value;
        const count = 10;
        const sortBy = '-popularity';

        
        this.setState({
            "input": userInput
        }, ()=> {
            AutocompleteService.getLocations(userInput, count, sortBy).then(res => {
                console.log(res);
                this.setState({
                    suggestions: res.data.response
                })
            })
        })
    }

    selectSuggestion = (e, suggestionData) => {
        e.stopPropagation();
        this.setState({'suggestions':[]});
        
        if(this.state.selectedSuggestions.length <= 5){
            
            if(!this.selectedSuggestionsSet.has(suggestionData.id)){
                let selectedSuggestions = [...this.state.selectedSuggestions]
                selectedSuggestions.push(suggestionData);
                
                this.selectedSuggestionsSet.add(suggestionData.id);

                if(selectedSuggestions.length === 5){
                    this.nameInput.current.disabled = true;
                }

                this.setState({
                    'selectedSuggestions': selectedSuggestions
                })

            }
            this.nameInput.current.focus();

        }

        this.nameInput.current.value = '';
    }

    handlePillDelete = (suggestionData) => {
        this.selectedSuggestionsSet.delete(suggestionData.id);
        let selectedSuggestions = this.state.selectedSuggestions.filter(suggestion => suggestion.id !== suggestionData.id);
        if(selectedSuggestions.length <=5) {
            this.nameInput.current.disabled = false;
            this.nameInput.current.focus();
        }
        this.setState({
            "selectedSuggestions": selectedSuggestions
        });
    }

    render(){
        return (
            <div className="App-header">
                <AutoCompleteForm 
                    
                    selectedSuggestions={this.state.selectedSuggestions} 
                    handlePillDelete={this.handlePillDelete}
                    inputValue={this.state.input}
                    ref = {this.nameInput}
                    onChangeText={this.onChangeText}
                >
                </AutoCompleteForm>

                <AutoCompleteList inputValueLen={this.state.input.length} suggestions={this.state.suggestions} suggestionOnClick={this.selectSuggestion} ></AutoCompleteList>
            </div>
        );
    }
}