import "./addlist.css"
import {Component} from "react"
export default class Addlist extends Component{
    constructor(props){
    super(props)
    this.state={
        task:"",
        date:"",
        done:false
       
    }}
    Add=(e)=>{
        e.preventDefault()
        this.props.adddata(this.state)
    }
    render(){
        return(<div id="addlist" className="mx-auto">
<form onSubmit={this.Add}>
  <div className="mb-3 ">
    <label  className="form-label">Task</label>
    <input type="text" className="form-control" onChange={(e)=>{this.setState({task:e.target.value})}} value={this.state.task}></input>
  
  </div>
  <div className="mb-3">
    <label className="form-label">Date</label>
    <input type="date" className="form-control" onChange={(e)=>{this.setState({date:e.target.value})}} value={this.state.date}/>
  </div>
 
  <button type="submit" className="btn btn-success mb-3">Submit</button>
</form>
        </div>)
    }
}

