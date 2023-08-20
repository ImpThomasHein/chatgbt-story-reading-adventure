import { useLogger } from "@nuxt/kit";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getComputedOpenAIStory() {
  const logger = useLogger();
  const response = await openai.listEngines();
  const data = await response.data;
  logger.info(data.data[0].id);
  const result = data.data[0].id;
  return result;
}
