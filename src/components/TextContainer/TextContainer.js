import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Bienvenidos a esta sala de Consultas!<span role="img" aria-label="emoji">💬</span></h1>
      <h2>Ingrese su consulta  <span role="img" aria-label="emoji">❤️</span></h2>
      
      
    </div>
    {
      users
        ? (
          <div>
            <h1>Personas Conectadas Actualmente:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;