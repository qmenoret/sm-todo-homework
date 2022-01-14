import fs from "fs"
import { object, string, array, boolean } from 'yup';

const todosSchema = object({
  todos: array().of(object().shape({
    id: string().required(),
    complete: boolean().required(),
    text: string().required()
  })).required()
});

export function isValid(str) {
  try {
    const body = JSON.parse(str)
    todosSchema.validateSync(body)
    return true
  } catch(e) {
    return false
  }
}

export default function handler(req, res) {
  if (!isValid(req.body)) {
    return res.status(500).send("")
  }
  fs.writeFileSync(
    "./todos.json",
    req.body,
    { flag: 'w' }
  )
  return res.status(200).send("")
}