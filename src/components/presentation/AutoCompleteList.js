import React from "react";

const AutoCompleteList = (props) =>{
    const highlightWordLength = props.inputValueLen

    return (
        <>
            {props.suggestions.length > 0 && 
                <ul className="autocomplete-list">
                    {props.suggestions.map((suggestion, index)=>
                        {
                            const highlightedString = suggestion.display_name.substr(0,highlightWordLength);
                            const normalString = suggestion.display_name.substr(highlightWordLength, suggestion.display_name.length)
                            return (
                                <li data-testid={index} key={index} onClick={(e)=>props.suggestionOnClick(e, suggestion)}>
                                    <span className="highlight">{highlightedString}</span>
                                    <span>{normalString}</span>
                                </li>
                            )
                        }
                    )}
                </ul>
            }
        </>
    )
}
export default AutoCompleteList;