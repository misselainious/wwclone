import React, { Component } from "react";
import { Grid, Table} from "semantic-ui-react";



class Scores extends Component {
render(){
return (
<div>


{/* SCORES */}
<Grid.Row>
 <Grid.Column width={8}>
  <Table celled>
   <Table.Header>
     <Table.Row>
       <Table.HeaderCell colSpan="2">Review Scores</Table.HeaderCell>
     </Table.Row>
   </Table.Header>

   <Table.Body>

   {this.props.pk !== "" &&
   <Table.Row >
            <Table.Cell>Robert Parker</Table.Cell>
            <Table.Cell>{this.props.pk}</Table.Cell>
    </Table.Row>
}

   {this.props.ws !== "" &&
   <Table.Row >
            <Table.Cell>Wine Spectator</Table.Cell>
            <Table.Cell>{this.props.ws}</Table.Cell>
    </Table.Row>
}
{this.props.vn !== "" &&
   <Table.Row >
            <Table.Cell>Vinous</Table.Cell>
            <Table.Cell>{this.props.vn}</Table.Cell>
    </Table.Row>
}
{this.props.dc !== "" &&
   <Table.Row >
            <Table.Cell>Decanter</Table.Cell>
            <Table.Cell>{this.props.dc}</Table.Cell>
    </Table.Row>
}
{this.props.gh !== "" &&
   <Table.Row >
            <Table.Cell>Guide Hachette</Table.Cell>
            <Table.Cell>{this.props.gh}</Table.Cell>
    </Table.Row>
}
{this.props.we !== "" &&
    <Table.Row >
            <Table.Cell>Wine Enthusiast</Table.Cell>
            <Table.Cell>{this.props.we}</Table.Cell>
    </Table.Row>
}
{this.props.jr !== "" &&
    <Table.Row >
            <Table.Cell>Jancis Robinson</Table.Cell>
            <Table.Cell>{this.props.jr}</Table.Cell>
    </Table.Row>
}
{this.props.gg !== "" &&
   <Table.Row >
            <Table.Cell>Gilbert Faillard</Table.Cell>
            <Table.Cell>{this.props.gg}</Table.Cell>
    </Table.Row>
}
{this.props.fs !== "" &&
   <Table.Row >
            <Table.Cell>Falstaff</Table.Cell>
            <Table.Cell>{this.props.fs}</Table.Cell>
    </Table.Row>
}
        
   </Table.Body>
  </Table>
 </Grid.Column>
</Grid.Row>
</div>
);
}
}
export default Scores;