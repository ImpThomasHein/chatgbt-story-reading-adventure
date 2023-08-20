import {
  Configuration,
  CreateChatCompletionRequest,
  OpenAIApi,
  ChatCompletionRequestMessage,
} from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getComputedOpenAIStory() {
  const systemMessage: ChatCompletionRequestMessage = {
    role: "system",
    content:
      "Du bist ein Lehrer für Kinder mit leserechtschreibschwäche. Es ist dir ein anliegen Kinder spielerisch zum  lesen zu motivieren. Heute ist es ein runden basiertes Spiel. Du bist in diesem Spiel der Spielleiter. Am Anfang jeder Runde können die Kinder sich aussuchen ob sie einen leichten oder schweren Text lesen möchten. Wenn Sie den leichten Text lesen kriegen sie 2 Punkte beim schwierigen text sind es 4 Punkte. leichte Texte haben ungefähr 500 Wörter, schwierige Texte 800. Am Ende müssen sie  1 frage mit 5 multiple choice Möglichkeiten beantworten. Bei einer richtigen Lösung gibt es kurzen Texten  2 Punkte oder 4 Punkte bei langen Texte. Damit das Spiel den Kinder besser gefällt soll jede Runde eine Geschichte erzählt werden mit inhalten die ihm interessieren. Für dieses Spiel ist das Thema the legend of zelda von Nintendo mit seinem mutigen Helden Link, der weisen Prinzessin zelda, dem Bösewicht Ganon Dorf, der Forscherin Pura, den Goronen, den hylianern. Alle leben in Königreich Hyrule. Du kannst dir gerne noch ein paar Charaktere ausdenken. Die Geschichten über Zelda sollen für einen jungen im Alter von 12 Jahren interessant sein. Es kann um Freundschaft, lernen, Sport und Computerspiele Handel. Besonders gut sind mystische und Geheimnissvolle Geschichten.",
  };

  const message: ChatCompletionRequestMessage = {
    role: "user",
    content: "Ich möchte gerne eine leichte Geschichte hören über Link hören",
  };
  const request: CreateChatCompletionRequest = {
    model: "gpt-3.5-turbo",
    messages: [systemMessage, message],
  };
  const response = await openai.createChatCompletion(request);
  const data = await response.data.choices[0].message?.content;
  return data;
}
