import React, { Component } from "react";
import { Grid, Table, Header } from "semantic-ui-react";


class MobilePricing extends Component {
    render() {
        
        const prequantity = this.props.caseSize;
        const qty = prequantity.split("x");
        const quantity = qty[0];
        const bottleCost = (this.props.price / quantity).toFixed(2);
        const bottle5 = (bottleCost * .95).toFixed(2);
        const bottle10 = (bottleCost * .9).toFixed(2);
        const case5 = (this.props.price * .95).toFixed(2);
        const case10 = (this.props.price * .9).toFixed(2);
        return (
            <div>
  
<Table celled>
 <Table.Row>
     <Table.Cell>
     Wholesale Price: ${this.props.price} {this.props.net}
     </Table.Cell>
 </Table.Row>
</Table>



    <Grid.Row>
    <Grid.Column width={8}>
  <Table celled>

    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="2">Wholesale </Table.HeaderCell>
        {this.props.net === "Discountable" &&
        <Table.HeaderCell>5% Discounted</Table.HeaderCell>
        }
         {this.props.net === "Discountable" &&
        <Table.HeaderCell>10% Discounted</Table.HeaderCell>
        }
      </Table.Row>
    </Table.Header>

    <Table.Body>
        <Table.Row >
            <Table.Cell>Case Price</Table.Cell>
            <Table.Cell>${this.props.price} {this.props.net}</Table.Cell>
            {this.props.net === "Discountable" &&
        <Table.Cell>{case5}</Table.Cell>
        }
            {this.props.net === "Discountable" &&
        <Table.Cell>{case10}</Table.Cell>
        }
        </Table.Row>

        <Table.Row >
            <Table.Cell>Price/Bottle</Table.Cell>
            <Table.Cell>${bottleCost}</Table.Cell>
            {this.props.net === "Discountable" &&
        <Table.Cell>{bottle5}</Table.Cell>
        }
            {this.props.net === "Discountable" &&
        <Table.Cell>{bottle10}</Table.Cell>
        }
        </Table.Row>

      <Table.Row >
            <Table.Cell>Case Format</Table.Cell>
            <Table.Cell colSpan='3'>{this.props.caseSize}</Table.Cell>
        </Table.Row>

      <Table.Row >
            <Table.Cell>Availability</Table.Cell>
            {(this.props.avail <=3) &&<Table.Cell colSpan='3'> Very Low
            </Table.Cell>}
            {((this.props.avail < 5) && this.props.avail > 3) &&<Table.Cell colSpan='3'> Low
            </Table.Cell>}
            {(this.props.avail >= 5) &&<Table.Cell colSpan='3'> In Stock
            </Table.Cell>}
        </Table.Row>
         
    </Table.Body>
   </Table>
   </Grid.Column>
  </Grid.Row> 
            </div>
        );
    }
}

export default MobilePricing;

