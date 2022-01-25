import Addlist from "../../Component/Addlist/Addlist";
import Displaylist from "../../Component/Displaylist/Displaylist";
import { useState } from "react";
import {v4 as uuidv4} from "uuid"
import { useEffect } from "react";
export default function Home(){
    const [list, setlist] = useState([]);

//getting the data rom addlist
//we use uuidv4 for creating unique id
    const getdata=(data)=>{
setlist([...list,{id:uuidv4(),...data}])

}
console.log(uuidv4());
//retrieving the data from local storage
//useEffect is the hook used to store and retrive data from local storage
useEffect(() => {
   const localdata=JSON.parse(localStorage.getItem("todolist"))
   if(localdata){
       setlist(localdata)
   }
}, []);

//storing the data to localstorage
//the key is todolist
//we use stringify function to store datas in local storage in json format
useEffect(() => {
   localStorage.setItem("todolist",JSON.stringify(list))
}, [list]);


const idd=(deldatas)=>{
console.log("parents id is "+deldatas);
const filtervar=list.filter(delfunction)
function delfunction(list) {
    return list.id!=deldatas
    
}
console.log(filtervar);
setlist(filtervar)

}
const handleChangeCheckbox=(id)=>{
// console.log("the id is "+id);
const todolist=list.map(todo=>{
    if(todo.id===id)
    //if ids are true below values return otherwise returns null
return{...todo,done:!todo.done}
    
    return todo;
   
})
// console.log(todolist);
setlist(todolist)
}

    return(
        <>
        <Addlist adddata={getdata}/>
        <Displaylist arr={list} remove={idd} handleChange={handleChangeCheckbox}/>
        </>
    )
}