import { Configuration, OpenAIApi } from "openai";

class ServiceEdits {

  async getDaVinci(data) {
    const configuration = new Configuration({
        apiKey: "",
      });
    const openai = new OpenAIApi(configuration);
    console.log(configuration);
    console.log(data.animal);
    if (!configuration.apiKey) {
        return {
            status:500,
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        };
      }
    
      const animal = data.animal || '';
      
      if (animal.trim().length === 0) {
        return {
            status:400,
            error: {
                message: "Please enter a valid animal",
            }
        };
      }
    
      try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: this.generatePrompt(animal),
          temperature: 0.6,
        });        
        // res.status(200).json({ result: completion.data.choices[0].text });
        return {
            status: 200,
            result: completion.data.choices[0].text
        }
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          return {
            status: error.response.data
          }
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);

         return {
            status: 500,
            error: {
                message: 'An error occurred during your request.',
            }
         }
        }
      }
    return ;
  }

    generatePrompt(animal) {
        const capitalizedAnimal =
        animal[0].toUpperCase() + animal.slice(1).toLowerCase();
        return `Fix the spelling and grammar errors in the text below.

        Text: She no went to the market.
        Correction: She did not go to the market.
        Text: What day of the wek is it?
        Correction: What day of the week is it?
        Text: am I a big fan of the movi Star Wars.
        Correction: I am a big fan of the movie Star Wars.
        Text: like I to eat sushi and drink milk.
        Correction: I like to eat sushi and drink milk.
        Text: ${capitalizedAnimal}
        Correction:`;;
    }
}

export default new ServiceEdits();