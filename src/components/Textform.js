import React, { useState } from 'react'



export default function Textform(props) {
    
    const handleClickup =() =>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("uppercase has been enabled ","success");
    }
    const handleClicklo =() =>{
      console.log("uppercase was clicked" + text);
      let newText = text.toLocaleLowerCase();
      setText(newText)
      props.showAlert("lowercase has been enabled ","success");
  }    
    const hendleOnChange =(event) =>{
        console.log("uppercase was clicked")
        setText(event.target.value)
    }
    
    
    const [text, setText] = useState('');
    return (
    <div style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>  
  <div className="mb-3">
    
    <textarea className="form-control" placeholder="Enter text hear *" value={text} onChange={hendleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="mybox" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleClickup}>convert to Uppercase</button>
  <button className='btn btn-primary mx-2' onClick={handleClicklo}>convert to LowerCase</button>     
       <div className="container my-2">
              <h1>your text summary</h1>
              <p>{text.split(" ").length-1} words and {text.length} characters</p>
              <p>{text.split(" ").length*0.008} Minutes read</p>
              <h2>preview</h2>
              <p>{text}</p>
       </div>
       

  </div>
  )
}
