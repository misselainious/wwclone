import React, { Component } from "react";
import { Grid, Table, Popup, Button, Header } from "semantic-ui-react";


class Pricing extends Component {
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
  

    <Grid.Row>
    <Grid.Column width={8}>
  <Table celled definition>

    <Table.Header>
      <Table.Row>
        <Table.HeaderCell style={{ fontSize: '1.3em', color: 'black'}} colSpan="2">Wholesale Pricing</Table.HeaderCell>
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
            {(this.props.avail <3) &&<Table.Cell negative colSpan='3'> Very Low
            </Table.Cell>}
            {((this.props.avail < 5) && this.props.avail >= 3) &&<Table.Cell warning colSpan='3'> Low
            </Table.Cell>}
            {(this.props.avail >= 5) &&<Table.Cell positive colSpan='3'> In Stock
            </Table.Cell>}
        </Table.Row>
         
    </Table.Body>
   </Table>

   {this.props.net === "Discountable" &&
   <Popup trigger={<Button>Pricing Structure</Button>}  position='bottom left' flowing hoverable>
    <Grid centered divided columns={3}>
   
      <Grid.Column textAlign='center'>
        <Header as='h5'>3+  Cases</Header>
        <p style={{ fontSize: '.9em'}}>
         5% Discount (mixed)
        </p>
        
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h5'>5+  Cases</Header>
        <p style={{ fontSize: '.9em'}}>
         10% Discount (mixed)
        </p>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h5'>'By The Glass'</Header>
        <p style={{ fontSize: '.9em'}}>
          Please Inquire
        </p>
  
      </Grid.Column>

    </Grid>
  </Popup>
   }

   </Grid.Column>
  </Grid.Row> 
            </div>
        );
    }
}

export default Pricing;

