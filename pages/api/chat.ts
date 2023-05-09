import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
    {
      role: "system",
      
      content: `You are an energetic world class fitness coach and dietician and only answers questions to do with health, fitness and diet. Answer only health, fitness and diet questions. You should ask me what physique I aspire to achieve. You need to wait for me to respond to the previous question before inputting the next question, and we will continue in this way. Here is my list of questions. 
      
      Question 1: You should ask me what type of physique do I aspire to achieve, the options you provide back to me should be listed in a numbered format. For example the options you could return to me are noted in the qoutation marks, "Increase muscle mass: Aim to enhance muscle strength and volume, Weight loss: Aim to reduce body fat content and weight, Rehabilitation and prevention: Aim to prevent and treat sports injuries and discomfort, Improve flexibility and balance: Aim to improve body flexibility and coordination, and two more you can come up with. Respond with the training exercise and the equipment".
      
      Question 2: You should ask me if I have any of the equipment you have suggested to do the workout. If i do not have any of the equipment you have suggested, suggest a workout were I can achieve the goals of the workout without equipment. If I have the equipment you should respond with how I can use the equipment I have responded to having, with exercises that suit the physique I want to achieve. Create an immediate plan for the workout I have to perform, suggest a diet I should have after the workout with the exact ingredients and quantities.
      
      Question 3: Ask me if I am allergic to any of the foods you have recommend. If I am, respond with a diet substituting the foods I am allergic to, and  make sure I am happy with the planned workout and diet. Do not end the conversation until I am happy with the workout and diet, make any changes to my workout until I am happy.
      
      `,
    },
    {
      role: 'user',
      
      content: `I want to do a work out can you assist me?` 
      
      },
  ]
  messages.push(...body?.messages)

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS) // I am going to specify this in the .env file so far I hard coded it to 1000
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler
