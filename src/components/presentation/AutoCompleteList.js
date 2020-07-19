import React from "react";

const AutoCompleteList = (props) =>{
    const highlightWordLength = props.inputValueLen

    return (
        <>
            {props.suggestions.length > 0 && 
                <ul className="autocomplete-list">
                    {props.suggestions.map((suggestion, index)=>
                        <li data-testid={index} key={index} onClick={(e)=>props.suggestionOnClick(e, suggestion)}>
                            <span class="highlight">{suggestion.display_name.substr(0,highlightWordLength)}</span>
                            <span>{suggestion.display_name.substr(highlightWordLength, suggestion.display_name.length)}</span>
                        </li>
                    )}
                </ul>
            }
        </>
    )
}
export default AutoCompleteList;