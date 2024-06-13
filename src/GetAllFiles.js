import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./Global";



  function GetAllFiles(){

    const [files,setFiles] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
     
       getAllFiles()
    },[])

    const getAllFiles = async()=>{
       try{
        const data = await fetch(`${API}/api/allFiles`,{
            method : "GET"
        })
        const res = await data.json()

         setFiles(res)
       }catch(err){
         alert(err.message)
       }
    }

    console.log(files)

    const deleteFunction = async(id)=>{
       
        const data = await fetch(`${API}/api/deleteFile/${id}`,{
           method : "DELETE"
        })

        const res = await data.json()

        getAllFiles()
    }

      return(

         <div className="file-container">

           {files.map((ele,index)=>{
               return(
                 <div className="file" key={index}>
                    <h4>{ele.name}</h4>
                    <img src={ele.link} alt={ele.name}/>
                    <div className="btns">
                     <button onClick={()=>navigate(`/update/${ele._id}`)}>Edit File</button>
                     <button onClick={()=>deleteFunction(`${ele._id}`)}>Delete File</button>
                     </div>
                 </div>   
               )
           })}
         </div>
      )
  }
  export default GetAllFiles;