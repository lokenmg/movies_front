import { useState } from "react";
import ServiceImg from "../../services/service.img";
import { useTranslation } from "react-i18next";

export default function Imgdavinci003() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [numberOfImages, setNumberOfImages] = useState(1);
  const { t } = useTranslation();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await ServiceImg.getDaVinci({ animal: animalInput, n: numberOfImages });


      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setAnimalInput("");
    } catch (error) {
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
        <h3>{t("create_poster_movie")}</h3>
        <form onSubmit={onSubmit} style={{ transition: '0.3s', marginBottom: "15px" }}>
          <label>{t("description")} </label>
          <input
            type="text"
            name="animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <label>{t("number_of_images")}</label>
          <input
            type="number"
            name="number"
            value={numberOfImages}
            onChange={(e) => setNumberOfImages(e.target.value)}
          />
          <input type="submit" value={t("generate")} />
        </form>
        <div>
          {result && result.map((url) => (
            <img src={url} key={url} alt="Imagen" style={{border: '1px solid black', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', margin: "4px" }}/>
          ))}
        </div>
      </main>
    </div>
  );
}