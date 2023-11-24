import express from 'express'
import { qea, translate, summarize, getKeywords } from './services/llama'
import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Llama 2!' })
})

route.post('/llama/qea', async (req: Request, res: Response) => {
    const { prompt } = req.body
    const output = await qea(prompt)
    res.json({ output })
})

route.post('/llama/translate', async (req: Request, res: Response) => {
    const { prompt, from, to } = req.body
    const output = await translate(prompt, from, to)
    res.json({ output })
})

route.post('/llama/sumup', async (req: Request, res: Response) => {
    const { prompt } = req.body
    const output = await summarize(prompt)
    res.json({ output })
})

route.post('/llama/getKeywords', async (req: Request, res: Response) => {
    const { prompt } = req.body
    const output = await getKeywords(prompt)
    res.json({ output })
})

app.use(route)

app.listen(3000, () => console.log('Server running on http://localhost:3000'))