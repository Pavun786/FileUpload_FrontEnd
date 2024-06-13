import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {API} from "../src/Global"

 function FileUpload(){

    const [file, setFile] = useState();
    const [title,setTitle] = useState()

    const navigate = useNavigate()
   
    const uploadFile = async()=>{
      
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title",title)
  
      try{
        const data = await fetch(`${API}/api/fileUpload`,{
          method : "POST",
          // headers : {
          //   'Content-Type': 'multipart/form-data'
          // },
          body: formData
       })
   
       const res = await data.json();

       alert("File uploaded..!")

       navigate("/allFiles")
  
      }catch(err){
      alert(err.message)
    }
  }
  
   console.log(file)


     return(
      <div className="form-container">
      <h3>Upload Form</h3>
     <div className="sub">  
     <label>Title :</label>
     <input className="inputField"onChange={(e)=>setTitle(e.target.value)} value={title}/>
     </div>
     <div className="sub">
     <label>File :</label>
     <input className="inputField" type="file" onChange={(e)=>setFile(e.target.files[0])}/>
     </div>
     <button className="sub-btn" onClick={uploadFile}>Upload</button>
       </div>
     )
 }

 export default FileUpload