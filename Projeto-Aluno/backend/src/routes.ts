import { Router, request, response, Request, Response} from 'express'
 
import { getStudents } from './controller/AlunosController';
import { saveStudent } from './controller/AlunosController';
import { getStudent } from './controller/AlunosController';
import { updateStudent } from './controller/AlunosController';
import { deleteStudent } from './controller/AlunosController';
import { finishedStudent } from './controller/AlunosController';
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
 
routes.get('/alunos', getStudents)
routes.post('/alunos', saveStudent)
routes.get('/alunos/:id', getStudent)
routes.put('/alunos/:id', updateStudent)
routes.delete('/alunos/:id', deleteStudent)
routes.patch('/alunos/:id', finishedStudent)
 
export default routes