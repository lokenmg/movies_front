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
  
  /*const linksToRender = [
    {
      id: 'link-id-1',
      description:
        'Prisma gives you a powerful database toolkit 😎',
      url: 'https://prisma.io'
    },
    {
      id: 'link-id-2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    },
    {
        id: 'link-id-3',
        description: 'Crunchyrroll',
        url: 'https://www.crunchyroll.com/es'
      }
  ];*/

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

  /*return (
    <div>
      {linksToRender.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );*/
};

export default LinkList;