import React, { Component } from 'react';
import { Dropdown } from "semantic-ui-react";



class CountryDropdown extends Component{

    handleScroll = (country) => {

        document.getElementById(country).scrollIntoView({
            block: "start",
            behavior: "smooth"
          })
         
          
      }
    
    render () {
    return (
        <Dropdown text='Jump to Country'>
            <Dropdown.Menu>
                <Dropdown.Item flag='fr' text='France' onClick={() => this.handleScroll("france")}/>
                <Dropdown.Item flag='es' text='Spain' onClick={() => this.handleScroll("spain")}/>
                <Dropdown.Item flag='pt' text='Portugal' onClick={() => this.handleScroll("portugal")}/>
                <Dropdown.Item flag='gr' text='Greece' onClick={() => this.handleScroll("greece")}/>
                <Dropdown.Item flag='de' text='Germany' onClick={() => this.handleScroll("germany")}/>
                <Dropdown.Item flag='at' text='Austria' onClick={() => this.handleScroll("austria")}/>
            </Dropdown.Menu>
        </Dropdown>
    );
}
}
export default CountryDropdown;


// class countryDropdown extends Component {

//         handleScroll = (country) => {
        
//         document.getElementById(country).scrollIntoView(position);
//       }

//     render() {

//         const choices = [
//             {key: 1, text: "France", value: 1, position: "france"},
//             {key: 2, text: "Spain", value: 2, position: "spain"},
//             {key: 3, text: "Portugal", value: 3, position: "portugal"},
//             {key: 4, text: "Greece", value: 4, position: "greece"},
//             {key: 5, text: "Germany", value: 5, position: "germany"},
//             {key: 6, text: "Austria", value: 6, position: "austria"},
//           ]
//         return (
        
// <Menu compact>
//  <Dropdown text="Jump to Country2" onClick={() => this.handleScroll(this.choices.position)} options={choices} simple item />
// </Menu>


//         );
//     }
// }

// export default countryDropdown;
