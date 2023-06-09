import { Configuration, OpenAIApi } from "openai";

class ServiceImg {

  async getDaVinci(data) {
    const configuration = new Configuration({
        apiKey: "",
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
      const number = Math.floor(data.n) || 1;
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
          n: number,
          size: "1024x1024",
        });
        const images =completion.data.data;
        const urls =images.map((image) => image.url);
        return {
            status: 200,
            result: urls
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
        return `give me movie posters whit .
    
        pelicula: A comedy film
        poster: funny characters, characters watching tv, comedy movie style
        pelicula: an action movie
        Names: strong characters, characters in fighting pose, accion movie style
        pelicula: cars movies
        Names: cars of the year, characters in a car, accion movie style
        pwlicula: animated movie
        Names: disney style, fairy tales, new worlds
        pelicula: ${capitalizedAnimal}
        Names:`;
    }
}

export default new ServiceImg();