import { useState } from "react";
import serviceDavinci003 from "../../services/service.davinci-003";
import { useTranslation } from "react-i18next";
import { useQuery, gql } from '@apollo/client';
import SavePrompt from "../savepromp";

const FEED_QUERY = gql`
  query {
    me {
      username
    }
  }
`;

export default function Textdavinci003() {
  const { data: { me } = {} } = useQuery(FEED_QUERY);
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const { t } = useTranslation();
  const user = me?.username;
  
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await serviceDavinci003.getDaVinci({ animal: animalInput });

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setAnimalInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />

      <main>
        <h3>{t("look_for_actors")}</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder={t("movie_name_actors")}
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value={t("generate_names")} />
        </form>

        <h1>{t("actors_of_movie")}</h1>
        <div>{result}</div>
        {user && (
          <SavePrompt
            user={user}
            model="text-davinci-003"
            prompt={animalInput}
            result={result}
          />
        )}
      </main>
    </div>
  );
}