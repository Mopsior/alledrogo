import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';
import path from 'path';

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.warn('process.cwd()', process.cwd())
    console.warn('process.env.NEXT_PUBLIC_JSON_DIRECTORY', process.env.NEXT_PUBLIC_JSON_DIRECTORY)
    const jsonDirectory = path.join(process.cwd(), 'public');
    console.log("🚀 ~ file: getItems.ts:16 ~ jsonDirectory:", jsonDirectory)
    const fileContents = await fs.readFile(jsonDirectory + process.env.NEXT_PUBLIC_JSON_DIRECTORY, 'utf8');
    res.status(200).json(JSON.parse(fileContents))
}
