import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AutoCompleteList from './AutoCompleteList';
import { 
    cleanup, 
    fireEvent
  } from "@testing-library/react";

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

it('renders with data', () => {
    const mockData = [
        {
            'display_name': 'America'
        },
        {
            'display_name': 'Africa'
        }
    ]

    const dummyClickFunction = () => {
        
    }

    act(() => {
        render(<AutoCompleteList inputValueLen={2} suggestions={mockData} suggestionOnClick={dummyClickFunction}/>, container)
    });

    expect(container.textContent).toBe("AmericaAfrica")
});