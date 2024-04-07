import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const POST = async (request: Request) => {
  const { question } = await request.json();
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You will be provided with a piece of code or a question, and your task is to provide ideas for efficiency improvements.',
        },
        { role: 'user', content: `${question}` },
      ],
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1,
    });

    return response.choices[0].message.content;
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
