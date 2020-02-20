import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid} from "semantic-ui-react";
import API from '../../utils/API'
import { Link } from "react-router-dom"
import "./searchwines.css";


export default class SearchBar extends Component {

    state = {
        wines: [],
        list: [],
        searchcriterea: [],
        multiple:[]
    }

  componentDidMount() {
    this.resetComponent();
    API.getWines()
      .then(res => {
        this.setState({ wines: res.data })
      }
      )
      .catch(err => console.log(err));
  }

  // setCriterea = () => {
  //   this.setState( { searchcriterea: this.state.wines.Code && this.state.wines.Wine })
  // }
  resetComponent = () =>
    this.setState({ isLoading: false, wines: [], value: "" });

    //What shows on the results bar when you click on it:
  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.Wine  });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    API.getWines()
      .then(res => {
        this.setState({ wines: res.data }) 
      }
      )
      .catch(err => console.log(err));
    
  setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();
      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      
      //Searches in wine Name, Code or Producer:
      const wineMatch = result => (re.test(result.Wine) || re.test(result.Code) || re.test(result.Producer) );
   

      this.setState({
        isLoading: false,
        list: _.filter(this.state.wines, wineMatch)
      });
    }, 300);
  };


  render() {
    
    const { isLoading, value, wines, list } = this.state;

    const resRender = ({ Wine, Producer, Code, _id }) => (
      <Link to={"/details/" + _id}>
        <div key="name">
        {Wine}, {Producer}, {Code}
        </div>
      </Link>
    );


    return (

  <Search 
            aligned="left"
            placeholder="Search..."
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={list}
            value={value}
            resultRenderer={resRender}
          />

         

    );
  }
}
