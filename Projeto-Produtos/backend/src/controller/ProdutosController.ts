import { getRepository } from "typeorm";
import { Produtos } from '../entity/Produtos';
import { Request, Response } from "express";
 
export const getProdutos = async(request: Request, response: Response) => {
    const produtos = await getRepository(Produtos).find()
    return response.json(produtos);
};
 
export const saveProduto = async(request: Request, response: Response) => {
    const produto = await getRepository(Produtos).save(request.body)
    return response.json(produto);
};
 
export const getProduto = async(request: Request, response: Response) => {
    const {id} = request.params
    const produto = await getRepository(Produtos).findOne(id)
    return response.json(produto);
};
 
export const updateProduto = async(request: Request, response: Response) => {
    const {id} = request.params
    const produto = await getRepository(Produtos).update(id, request.body)
 
    if (produto.affected == 1){
        const produtoUpdated = await getRepository(Produtos).findOne(id)
        return response.json(produtoUpdated);
    }
    else{
        return response.status(404).json( {message: 'Produto não encontrada!'} )
    }
};
 
export const deleteProduto = async(request: Request, response: Response) => {
    const {id} = request.params
    const produto = await getRepository(Produtos).delete(id)
 
    if (produto.affected == 1){
        return response.status(200).json( {message: "Produto excluído com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Produto não encontrado!'} )
    }
};

export const finishedProduto = async(request: Request, response: Response) => {
    const {id} = request.params
    const produto = await getRepository(Produtos).update(id, {
        vendido: true,
    })
 
    if (produto.affected == 1){
        const produtoFinished = await getRepository(Produtos).findOne(id)
        return response.json(produtoFinished);
    }
    else{
        return response.status(404).json( {message: 'Produto não encontrado!'} )
    }
};

