import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react'


  
class Travels extends Component {
    state = {
        imageArray: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg","6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"],
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
    <div>
      <Header as="h3" style={{textAlign:"center", marginTop:"30px"}}>Hiram's recent trip to Baden</Header>
          <Image className="frontImage" src={`../../images/travel/${image}`} />
      
   
    
    </div>
     
        );
      }

}

export default Travels;