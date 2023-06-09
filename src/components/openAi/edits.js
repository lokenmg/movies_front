import { useState } from "react";
import serviceEdits from "../../services/service.edits";
import { useTranslation } from "react-i18next";

export default function Editdavinci003() {

  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const { t } = useTranslation();
  
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await serviceEdits.getDaVinci({ animal: animalInput });
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
        <h3>{t("correct_texts")}</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder={t("enter_the_text")}
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value={t("correct_texts")} />
        </form>

        <h1>{t("corrected_texts")}</h1>
        <div>{result}</div>
      </main>
    </div>
  );
}