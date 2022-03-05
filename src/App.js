import { useState } from 'react';
import './App.css';

const App = () => {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]));

    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const fileSelectedHandler2 = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      console.log('Reader: ', reader);
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        console.log('Inside callback, Reader: ', reader);
        setFile2(reader.result);
      };
    }
  };

  return (
    <div className='App'>
      <br />
      <label>File 1 </label>
      <input type='file' onChange={fileSelectedHandler} />
      <br />
      <br />
      {file && <img src={file} alt='test' />}
      <br />
      <label>File 2 </label>
      <input type='file' onChange={fileSelectedHandler2} />
      <br />
      <br />
      {file2 && <img src={file2} alt='test' />}
    </div>
  );
};

export default App;
