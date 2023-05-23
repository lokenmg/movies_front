import { Configuration, OpenAIApi } from "openai";

class ServiceImg {

  async getDaVinci(data) {
    const configuration = new Configuration({
        apiKey: "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",
      });
    const openai = new OpenAIApi(configuration);
    console.log(configuration);
    console.log(data.animal);
    if (!configuration.apiKey) {
        /*
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        */
        return {
            status:500,
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        };
      }
    
      const animal = data.animal || '';
      if (animal.trim().length === 0) {
        /*
        res.status(400).json({
          error: {
            message: "Please enter a valid animal",
          }
        });
        */
        return {
            status:400,
            error: {
                message: "Please enter a valid animal",
            }
        };
      }
    
      try {
        const completion = await openai.createImage({
          prompt: this.generatePrompt(animal),
          n: 1,
          size: "1024x1024",
        });
        // res.status(200).json({ result: completion.data.choices[0].text });
        return {
            status: 200,
            result: completion.data.data[0].url
        }
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          // res.status(error.response.status).json(error.response.data);
          return {
            status: error.response.data
          }
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          /*
          res.status(500).json({
            error: {
              message: 'An error occurred during your request.',
            }
          });
          */
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
        return `Suggest three names for an animal that is a superhero.
    
        Animal: Cat
        Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
        Animal: Dog
        Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
        Animal: ${capitalizedAnimal}
        Names:`;
    }
}

export default new ServiceImg();