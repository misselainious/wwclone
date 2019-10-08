import _ from "lodash";
import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import API from '../../utils/API'
import { Link } from "react-router-dom"
import "./prodSearch.css"


export default class SearchBar extends Component {

    state = {
        producers: []
    }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, producers: [], value: "" });

    //What shows on the results bar when you click on it:
  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.Producer });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    API.getProducers()
      .then(res => {
        this.setState({ producers: res.data }) 
      }
      )
      .catch(err => console.log(err));
    
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      //what is being tested for in search input
      const isMatch = result => re.test(result.Producer);

      this.setState({
        isLoading: false,
        producers: _.filter(this.state.producers, isMatch)
      });
    }, 300);
  };

  render() {
    
    const { isLoading, value, producers } = this.state;

    const resRender = ({ Producer }) => (
      <Link to={"/producerdetails/" + Producer}>
        <div key="name">
        {Producer}
        </div>
      </Link>
    );


    return (

          <Search className="search"
            placeholder="Search producers..."
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={producers}
            value={value}
            resultRenderer={resRender}
          />

    );
  }
}
