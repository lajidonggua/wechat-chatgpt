import {config} from "./config.js";

let apiKey = config.openai_api_key;
let model = config.model;
let temperature = 0.9;
const sendMessage = async (message: string) => {
  try {
    const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            "role": "user",
            "content": message
          }
        ],
        temperature: temperature
      }),
    });
    return response.json()
      .then((data) => data.choices[0].message.content);
  } catch (e) {
    console.error(e)
    return "Something went wrong"
  }
}

export {sendMessage};
