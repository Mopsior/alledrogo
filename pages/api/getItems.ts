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
    // Zapisywanie ścieżki do folderu public
    const publicDirectory = path.join(process.cwd(), 'public');
    // Odczyt pliku JSON (z publicDirectory + ścieżka do pliku JSON z ENV)
    const fileContent = await fs.readFile(publicDirectory + process.env.NEXT_PUBLIC_JSON_DIRECTORY, 'utf8');
    // Zwrócenie JSONa
    res.status(200).json(JSON.parse(fileContent))
}
