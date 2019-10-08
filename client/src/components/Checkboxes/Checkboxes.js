import React from "react"
import { Grid, Checkbox } from 'semantic-ui-react';
import "./Checkboxes.css"

// it should take in an array of attributes and an onlick fuction 
const Checkboxes = props =>{
    const checkboxArray = props.checkables
        .map( (checkable,i )=> (
            <Grid.Row key={i.toString()}>
    
                <input type="checkbox" value ={checkable} data-filter={props.filterType} onChange={props.handleFilterChange}  /> {checkable}
            
                {/* <Checkbox  value={checkable} data-filter={props.filterType} onChange={props.handleFilterChange}  /> {checkable}
                */}
            </Grid.Row>
        ))
    return (
        <div className="checkboxContainer">
            {checkboxArray}
        </div>
    )
}

export default Checkboxes;
