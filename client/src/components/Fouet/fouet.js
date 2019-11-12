import React, { Component } from 'react';
import { Pagination, Image } from 'semantic-ui-react'


  
class Fouet extends Component {
    state = {
        imageArray: ["fouet1", "fouet2", "fouet3", "fouet4", "fouet5","fouet6","fouet7","fouet8","fouet9", "fouet10","fouet11", "fouet12","fouet13","fouet14","fouet15","fouet16","fouet17","fouet18"],
        currentImageIndex: 0
      }
      componentDidMount() {
        setInterval(() => {
          if (this.state.currentImageIndex === this.state.imageArray.length - 1) {
            this.setState({ currentImageIndex: 0 })
          }
          else {
            this.setState({ currentImageIndex: this.state.currentImageIndex + 1 })
          }
        }, 5000)
    
      }
    
      render() {
        let image = this.state.imageArray[this.state.currentImageIndex]
        return (
    
      
          <Image className="frontImage" src={`https://s3.us-west-1.wasabisys.com/wwassets/Producers/Fouet/${image}`} />
      
   
    
        // <HomeHeading />
     
        );
      }
    // state = {
    //     activepage: 0
    // }
    // handleClick = () => {
    //     this.setState( {activepage: this.value})
    //     console.log(this.state.activepage)
    // }
    
    // render() {
     
        
    //     return (
    //         <div>
    //             <Pagination onClick={this.handleClick} activepage={this.value} defaultActivePage={1} totalPages={5} />
    //         </div>
    //     );
    // }
}

export default Fouet;