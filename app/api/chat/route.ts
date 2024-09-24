import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");

export async function POST(request: Request) {
  const question = await request.json();

  //   for await (const output of hf.textGenerationStream({
  //     model: "google/flan-t5-xxl",
  //     inputs: `with these data ${gouniInfo} concerning gouni answer these questions like an intelligent chatbot. where is the school located?`,
  //     parameters: { max_new_tokens: 1000 }
  //   })) {
  //     console.log(output.token.text, output.generated_text);
  //     result = output.generated_text;

  //   }

  // let generate = await hf.textGeneration({
  //     model: 'meta-llama/Meta-Llama-3-70B',
  //     inputs: 'who is the president of the united states'
  //   })

  let out = "";
  for await (const chunk of hf.chatCompletionStream({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    messages: [
      {
        role: "user",
        content: `You are an Riddle Trivia Bot ask simple riddles for children in elementary school. When you ask the riddle suggest 3 options and let the correct option be part of it. ${question.prompt}`
      },

      {
        role: ""
      }
    ],
    max_tokens: 500,
    temperature: 0.1,
    seed: 0
  })) {
    if (chunk.choices && chunk.choices.length > 0) {
      out += chunk.choices[0].delta.content;
    }
  }

  return Response.json({ data: out });
}

// export async function POST(req: Request, res: Response){

//     const values = await req.json()

//     return Response.json({ values })
// }
