import React from 'react'
import './Dashboard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'


export const Dashboard = (props) => {



 
  

  function cerrarSesion(){
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();
  }



  return (
    
    
    <>
        <div className="DashboardMain" >
          <div id='red' >
          <a className="nav-link  h5"  href=" "  onClick={ cerrarSesion } > <FontAwesomeIcon icon={faUserLock}  /> Cerrar Sesión</a>
          </div>
          <div>
          <iframe id ="DashScapi"  title="SCAPI_V8 - Radiación"  src="https://app.powerbi.com/view?r=eyJrIjoiMTkwNzcwOWYtOTk3Zi00NzIwLTlkM2QtMjhjM2Q0YmM5ZGU3IiwidCI6IjcwYWIxMGRjLWI0MDMtNDU0Mi05NGRlLTJkM2Q4YzUzZjMzNiIsImMiOjl9&embedImagePlaceholder=true" frameborder="0" allowFullScreen={true} ></iframe>
          </div>
        </div>
    

</>
  



  )
}
