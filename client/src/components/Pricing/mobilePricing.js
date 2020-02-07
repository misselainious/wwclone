import React, { Component } from "react";
import { Grid, Table, Header, Button, Popup } from "semantic-ui-react";


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
    <Table.Body>
 <Table.Row>
     <Table.Cell>Wholesale Pricing</Table.Cell>
     <Table.Cell>
  ${this.props.price} {this.props.net} ({bottleCost}/bottle)
     </Table.Cell>
 </Table.Row>
 {(this.props.net == "Discountable") &&
 <div>
 <Table.Row>
 <Table.Cell>Price with 5% discount (3+ cases, mixed):</Table.Cell>
     <Table.Cell>
      ${case5} case, (${bottle5} bottle)
     </Table.Cell>
 </Table.Row>
 <Table.Row>
 <Table.Cell>Price with 10% discount (5+ cases, mixed):</Table.Cell>
     <Table.Cell>
     ${case10} case, (${bottle10} bottle)
     </Table.Cell>
 </Table.Row>
 </div>
    }
    <Table.Row>
    <Table.Cell>Availability</Table.Cell>
            {(this.props.avail <=3) &&<Table.Cell> Very Low
            </Table.Cell>}
            {((this.props.avail < 5) && this.props.avail > 3) &&<Table.Cell> Low
            </Table.Cell>}
            {(this.props.avail >= 5) &&<Table.Cell> In Stock
            </Table.Cell>}
    </Table.Row>
 </Table.Body>
</Table>
{/* {this.props.net === "Discountable" &&
<Table style={{backgroundColor:'#dfdfbf'}}>
<Table.Row>
    <Table.Cell style={{textAlign:"center"}}>
    Discount Structure
    </Table.Cell>
    </Table.Row>
<Table.Row>
    <Table.Cell>
    <Header as='h5'>3+  Cases</Header>
        <p style={{ fontSize: '.9em'}}>
         5% Discount (mixed)
        </p>
    </Table.Cell>
    </Table.Row>
<Table.Row>
    <Table.Cell>
    <Header as='h5'>5+  Cases</Header>
        <p style={{ fontSize: '.9em'}}>
         10% Discount (mixed)
        </p>
    </Table.Cell>
    </Table.Row>
<Table.Row>
    <Table.Cell>
    <Header as='h5'>'By The Glass'</Header>
        <p style={{ fontSize: '.9em'}}>
          Please Inquire
        </p>
    </Table.Cell>
    </Table.Row>
</Table>
} */}
            </div>
        );
    }
}

export default MobilePricing;

