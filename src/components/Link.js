import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div class='tituloseccion'>
        <h1>Titulo</h1>
        <h2>
        {link.nombre}
        </h2>
      </div>

      <div className='generoSeccion'>
        <h2>Género:</h2>
        <h3>{link.genero}</h3>
      </div>

      <div className='estudioSeccion'>
        <h2>Estudio:</h2>
        <h3>{link.estudio}</h3>
      </div>

      <div className='' >
        {link.duracion}
        </div>

      <div className=''>
        {link.recaudacion}
        </div>

      <div className=''>
        {link.productor}
        </div>

      <div className=''>
        {link.valoracion}
        </div>

      <div className=''>
        {link.servicio}
        </div>
    </div>
  );
};

export default Link;