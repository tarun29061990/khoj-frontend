import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AutoCompleteList from './AutoCompleteList';
import { 
    cleanup, 
    fireEvent
} from "@testing-library/react";
import AutoCompleteForm from './AutoCompleteForm';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  cleanup;
});

it('renders with input box', () =>{

    act(()=>{
        render(<AutoCompleteForm 
            selectedSuggestions={[]} 
            handlePillDelete={()=>{}}
            inputValue={''}
            ref = {React.createRef()}
            onChangeText={()=>{}}/>, container);
    })
    const input = document.querySelector('input');
    expect(input).toBeInTheDocument(); 
})

it('adds a pill when suggestions are passed', ()=>{
    act(()=>{
        render(<AutoCompleteForm 
            selectedSuggestions={[{'display_name':'America'}]} 
            handlePillDelete={()=>{}}
            inputValue={''}
            ref = {React.createRef()}
            onChangeText={()=>{}}/>, container);
    })

    const pill = document.querySelector('.MuiChip-root');
    expect(pill).toBeInTheDocument();
})