import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  //If the API key is not configured correctly
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const description = req.body.description || '';

  //Make sure request has content
  if (description.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid description",
      }
    });
    return;
  }

  try {
    const completion = await openai.createImage({
      prompt: generatePrompt(description),
      n: 1,
      size: "512x512",
    });

    res.status(200).json({ result: completion.data.data[0].url });
  } catch(error) {
    // Error handling logic
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(description) {
    return `${description} in a fantasy setting ultra realistic grainy mystical painting`;
}