import React , {useState} from 'react';
import { Link } from 'react-router-dom'; //this is used to link to our /chat path
import './Join.css'; // apply the styles

import GoogleLogin from 'react-google-login';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import { useHistory } from "react-router-dom";

import ProjectInfo from "../ProjectInfo/ProjectInfo";

{/*WE do not transfer data through props or redux, we only pass data usng query strings, passing data through a url.
  we use an empty string as the initial value of our name state
*/}

const Join = () => {
    let  history = useHistory();
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState('Municipio'); 
    const [paso, setPaso] = useState(false); 
    let data="";

    const responseGoogle = (response) => {      
      console.log(response);
      if (response.profileObj!=undefined){
            console.log(response.profileObj);   
              
            console.log(response.profileObj.email);
            console.log(response.profileObj.name);
            setRoom("Municipio")
            setName(response.profileObj.name)         
            setPaso(true)
            
      }
    }

if (paso) {
   
  history.push("/chat?name="+name+"&room="+room)
}

else{
 data=(
  <div className = "joinInnerContainer">  
  <h1 className ="heading">Ingresar</h1>
  {/*When users type something in this input an event occurs and we can grab data from it
  event.target.value holds our data, and then we set the output of this input to the corresponding variable.
  I also use two hooks here for the name/room data.
  event.target.value => event.target whatever is clicked on is returned, but the .value returns a string, so you set the Name to the string given
  */}
  <div><input placeholder ="Nombre" className = "joinInput" type ="text" onChange={(event) => setName(event.target.value)} /> </div>            
  <div><input placeholder ="Sala" className = "joinInput mt-20" type ="text" onChange={(event) => setRoom(event.target.value)} /> </div> {/* mt 20 means margin top 20, used to differntiate the two*/}
  {/* We pass parameters into the url using ? and we pass in variables name and room, & divides name and room.
      The onClick part has a call back function, the event=> part that prevents the user from being able to click the link
      if they did not provide both parameters needed.
      logic is read as, if there is a room and name, we do nothing}(null)
  */}
  <Link onClick ={event => (!name || !room) ? event.preventDefault() : null} to ={`/chat?name=${name}&room=${room}`}>
      <button className = "button mt-20" type="submit">Ingresar</button>  {/*This button is used to sign in*/}
  </Link>  
</div> 
 )


}


    return (
         <div className = "joinOuterContainer">   
         <div>
      <h1 style={{color:"white"}}>Aplicacion de  Chat de la Municipalidad  </h1>
      <h2 style={{color:"white"}}>Distrital de Chamaca</h2>
      <h2>Para ingreasar debe de tener su cuenta de gmail</h2>
      <h2>Use esta plataforma para comunicarse!</h2>

    </div>                
       
          
              <GoogleLogin
                  clientId="721638543381-20otc5hd7b8urc6vevtr90vefuh0koor.apps.googleusercontent.com"
                  buttonText="Ingresar"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
          />        
         </div>  
          
    )
}

export default Join;