class TaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      status: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
  	console.log(event.target.name)
  	var target = event.target;
  	var name = target.name;
  	var value = target.value;
  	this.setState({
  		[name] : value
  	})
  }

  onSubmit(event) {
  	event.preventDefault();
  	this.props.onSubmit(this.state);
  }

  render(){
  	var {fruit, index} = this.props
		return (
						<div>
							<h1>Form</h1>
	            <form onSubmit = {this.onSubmit}>
	              <div className="form-group">
	                <input
	                	type="text"
	                	className="form-control"
	                	id=""
	                	placeholder="Input field"
	                	name="name"
	                	value={this.state.name}

	                	onChange = {this.onChange} />
	              </div>
	              <div className="form-group">
	                <input
	                	type="text"
	                	className="form-control"
	                	id=""
	                	placeholder="Input field"
	                	name="description"
	                	value={this.state.description}
	                	onChange = {this.onChange} />
	              </div>
	              <div className="form-group">
	                <input
	                	type="text"
	                	className="form-control"
	                	id=""
	                	placeholder="Input field"
	                	name="status"
	                	value={this.state.status}
	                	onChange = {this.onChange} />
	              </div>
	              <button type="submit" className="btn btn-primary">Submit 123</button>
	            </form>
	          </div>
	  );

	}
}
