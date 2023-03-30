import { Configuration, OpenAIApi } from "openai";
const config = new Configuration({
  apiKey: process.env.OPEN_AI_API,
  organization: process.env.OPEN_AI_ORGANIZATION,
});
const openai = new OpenAIApi(config);
export default openai;
