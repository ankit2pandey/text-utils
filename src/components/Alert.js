import React from 'react'

export default function (props) {
  return (
    <div style={{height:'50px'}}> 
   { props.alert && <div>
      
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} >
  <strong>{props.alert.type}  </strong>  {props.alert.msg} 
  
</div>
        
    </div>
}
</div>
  )
}
