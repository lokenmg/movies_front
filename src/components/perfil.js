import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
query{
  me{
    username
  }
}`

const Perfil = () => {
    const { data } = useQuery(FEED_QUERY);
    console.log(data);
  
    return (
      <div>
        <h1>Perfil</h1>
        {data && data.me && data.me.username}
      </div>
    );
  };

export default Perfil;