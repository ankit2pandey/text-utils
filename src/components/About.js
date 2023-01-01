import React, { useState } from 'react'

export default function About(props) {

//    const [myStyle, setmyStyle] = useState
  //  ({
    //    color: props.mode==='dark'?'white':'black',
      //  backgroundColor: props.mode==='dark'?'black':'white' 
    //})

   let myStyle={
     color: props.mode==='dark'?'white':'black',
     backgroundColor: props.mode==='dark'?'#535c6461':'white' 
   }
    
    
 

    return (
        
    <div style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}}>
        <h1 className="my-2">About us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne" style={myStyle}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" style={myStyle} aria-controls="collapseOne">
        Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body" style={myStyle}>
       textutils gives you a way to analyze you text quickly and efficiently be it word count, character count or 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo" style={myStyle}>
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use 
      </button>
    </h2>
    <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={myStyle} className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count & woed count statistics for a gives text .TextUtils reports the numder of words and characters. Thus it is suitable for writing text with word/ character limit
       </div>
   </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree" style={myStyle}>
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browsern Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"  style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
          This word counter software work in any wed browsers such as Chrome, FireFox, Internet, safari etc It suits to count character in facedook blog books excel document ,pdf document, essays ,etc 
    </div>
    </div>
  </div>
</div>
             
    </div>
   
  )
}

