// import axios from 'axios'

class Fruit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fruits: this.props.fruits,
      isDisplayForm: false,
    };
    this.onToggleForm = this.onToggleForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onToggleForm() {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    })
  }

  onSubmit(event) {
    // event.preventDefault();
    var fruits = this.state.fruits;
    fruits.push(event);
    this.setState({
      fruits :fruits
    })
  }

  render(){
    var { fruits, isDisplayForm } = this.state;
    var elmForm = isDisplayForm ? <TaskForm onSubmit = {this.onSubmit}/> : '';
    return(
      <div className="container-fluid">
        <div className="row">
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
            "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <div>
              <h1>To ddooo: List of fruits</h1>
              <AllFruits fruits={fruits} />
              <button type="button" className="btn btn-default"
                onClick = {this.onToggleForm} >
                Create Fruit
              </button>
            </div>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            {elmForm}
          </div>
        </div>
      </div>
    )
   }
}
