import React from 'react';
import Chip from '@material-ui/core/Chip';

const AutoCompleteForm = React.forwardRef((props, ref)=>(
    <div className="auto-complete" onBlur={props.onBlur}>
                        
        {props.selectedSuggestions.map((suggestion, index)=> <Chip key={index} label={suggestion.display_name} onDelete={props.handlePillDelete.bind(this,suggestion)} />)} 
        
        <input ref={ref} type="text" onChange={props.onChangeText} value={props.input}/>
    </div>
))

export default AutoCompleteForm;