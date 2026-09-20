import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname,'data','data.json')


export const readTasks = async () => {

  const tasks = await fs.readFile(filePath,'utf-8')

  return JSON.parse(tasks)

}



export const writeTask = async (tasks) => {

  await fs.writeFile(filePath,JSON.stringify(tasks,null,2))

}

