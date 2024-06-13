import { useEffect, useState,useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./Global";


  function UpdateFile(){

    const [file,setFile] = useState()

    const {id} =useParams();

    useEffect(()=>{
     
       getFile()
    },[])

    const getFile = async()=>{
       try{
        const data = await fetch(`${API}/api/getSingleFile/${id}`,{
            method : "GET"
        })
        const res = await data.json()

         setFile(res)
       
      }catch(err){
         alert(err.message)
       }
    }

    console.log(file)

      return(

         <div className="file-container">
         
          {file ? <UpdateForm value={file} setValue={setFile}/> : "Loading..."}
           
         </div>
      )
  }


   function UpdateForm({value,setValue}){


   
    const [title,setTitle] = useState(value.name)
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const navigate = useNavigate()

    const updateFile = async()=>{
      
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("title",title)
    
        try{
          const data = await fetch(`${API}/api/editFile/${value._id}`,{
            method : "PUT",
            
            body: formData
         })
     
         const res = await data.json();

         alert("Data updated successfully")

         setTitle("")
        
         if (fileInputRef.current) {
          fileInputRef.current.value = "";  
        }
         navigate("/allFiles")
        }catch(err){
        alert(err.message)
      }
    }
    
  return(
      <div className="form-container">
       <h3>Edit Form</h3>
      <div className="sub">  
      <label>Title :</label>
      <input className="inputField"onChange={(e)=>setTitle(e.target.value)} value={title}/>
      </div>
      <div className="sub">
      <label>File :</label>
      <input className="inputField" type="file"  ref={fileInputRef} onChange={(e)=>setSelectedFile(e.target.files[0])}/>
      </div>
      <button className="sub-btn" onClick={updateFile}>Update</button>
        </div>
      )
   }
  export default UpdateFile;