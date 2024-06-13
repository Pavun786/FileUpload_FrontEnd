import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FileUpload from './FileUpload';
import GetAllFiles from './GetAllFiles';
import UpdateFile from './UpdateFile';


function App() {
 
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<FileUpload/>}/>
        <Route path='/allFiles' element={<GetAllFiles/>}/>
        <Route path='/update/:id' element={<UpdateFile/>}/>
      </Routes>
    </div>
  );
}
export default App; 