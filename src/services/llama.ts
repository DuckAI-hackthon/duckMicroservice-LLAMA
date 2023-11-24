import Replicate from "replicate";
import dotenv from 'dotenv';

dotenv.config();

const LLAMA_API_KEY = process.env.LLAMA_API_KEY;

const replicate = new Replicate({
    auth: process.env.LLAMA_API_KEY,
});

let output: any = []

export const qea = async (prompt: string) => {
    output = await replicate.run(
        "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
        {
            input: {
                prompt: prompt
            }
        }
    )
    return output.join("")
}

export const translate = async (prompt: string, from: string, to: string) => {
    output = await replicate.run(
        "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
        {
            input: {
                prompt: `Translate ${prompt} from ${from} to ${to}, just give me the answer, be straightforward`
            }
        }
    )
    return output.join("")
}

export const summarize = async (prompt: string) => {
    output = await replicate.run(
        "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
        {
            input: {
                prompt: `Faça um resumo: ${prompt}`
            }
        }
    )
    return output.join("")
}

export const getKeywords = async (prompt: string) => {
    output = await replicate.run(
        "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
        {
            input: {
                prompt: `Get 7 keywords from ${prompt}`
            }
        }
    )
    return output.join("")
}
