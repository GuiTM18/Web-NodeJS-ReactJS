import { Router, request, response, Request, Response} from 'express'
 
import { getProdutos } from './controller/ProdutosController';
import { saveProduto } from './controller/ProdutosController';
import { getProduto } from './controller/ProdutosController';
import { updateProduto } from './controller/ProdutosController';
import { deleteProduto } from './controller/ProdutosController';
import { finishedProduto } from './controller/ProdutosController';
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
 
routes.get('/produtos', getProdutos)
routes.post('/produtos', saveProduto)
routes.get('/produtos/:id', getProduto)
routes.put('/produtos/:id', updateProduto)
routes.delete('/produtos/:id', deleteProduto)
routes.patch('/produtos/:id', finishedProduto)
 
export default routes
