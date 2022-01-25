import "./display.css"
import Delete from '@material-ui/icons/Delete';
import { useReducer, useState } from "react";
export default function Displaylist(props){
//   const [check, setCheck] = useState();
//  const handleCheckBox=()=>{
  
     
//      setCheck(checked=>!checked)

 
//  }
// const[check,togglef]=useReducer(check=>!check)
 const mapoutput=props.arr.map((details)=>{

  //  console.log(details);
  const Del=()=>{
    const delid=details.id;
    props.remove(delid)
  }
  const checkfn=()=>{
    if(details.done){
      return null
    }
    props.handleChange(details.id)
    
  }
// console.log(details.done);
  
  return(
    <div className="card mx-auto" key={details.id}>
  <div className="card-body">
  <h5 className="card-title" style={details.done?{textDecoration:"line-through" }:null}>{details.task}</h5>
    <h6 className="card-subtitle mb-2 text-muted"> 
    {/* <input type="checkbox" className="form-check-label mr-4"  onChange={togglef}   value={check} /> */}
    <input type="checkbox" className="form-check-label mr-4"  onChange={checkfn}  checked={details.done}/>
    { details.date}</h6>
   
    {/* <button className="btn btn-primary" onClick={Del}>Delete</button> */}
    <Delete className="btn-outline-danger offset-10" onClick={Del}/><br></br>
    {/* {check?"checked":"notchecked"} */}
  </div>
</div>
  )

 })

    return(
      
        <>
        
        {mapoutput}
        </>
    )
}