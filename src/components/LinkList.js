import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
query{
  peliculas{
    id,
    nombre,
    estudio,
    genero,
    recaudacion,
    duracion,
    productor,
    valoracion,
    servicio
  }
}
`
;

const LinkList = () => {

  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.peliculas.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;