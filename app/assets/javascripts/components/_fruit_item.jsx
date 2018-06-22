//import axios from 'axios';

class FruitItem extends React.Component {

  render(){
  	var {fruit, index} = this.props
		return (
						<tr key= {index}>
			        <td>{index +1}</td>
			        <td>{fruit.name}</td>
			        <td>{fruit.description}</td>
			        <td>{fruit.status ? "Seen" : "Not Seen"}</td>

			        <td>
			          <button type="button" className="btn btn-primary" onClick = {this.onDelete} >delete</button>
			        </td>
			      </tr>
	  );
					
	}
}