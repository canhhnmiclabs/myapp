//import axios from 'axios';
class AllFruits extends React.Component {

  render(){
  	var {fruits} = this.props
  	var item = fruits.map((fruit, index) =>{
  		return <FruitItem key={fruit.id} index={index} fruit={fruit} > </FruitItem>
  						
  	})
    return(
    	<table className="table table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>name</th>
              <th>description</th>
              <th>status</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
           {item}
          </tbody>
        </table>
     )
   }
}