import { getRepository } from "typeorm";
import { Students } from '../entity/Alunos';
import { Request, Response } from "express";
 
export const getStudents = async(request: Request, response: Response) => {
    const alunos = await getRepository(Students).find()
    return response.json(alunos);
};

export const saveStudent = async(request: Request, response: Response) => {
    const alunos = await getRepository(Students).save(request.body)
    return response.json(alunos);
}

export const getStudent = async (request: Request, response: Response) => {
    const{id} = request.params
    const alunos = await getRepository(Students).findOne(id)
    return response.json(alunos)
}

export const updateStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const alunos = await getRepository(Students).update(id, request.body)
 
    if (alunos.affected == 1){
        const alunosUpdated = await getRepository(Students).findOne(id)
        return response.json(alunosUpdated);
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};
 
export const deleteStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const alunos = await getRepository(Students).delete(id)
 
    if (alunos.affected == 1){
        return response.status(200).json( {message: "Tarefa excluída com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};
 
export const finishedStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const alunos = await getRepository(Students).update(id, {
        matricula_status: true,
    })
 
    if (alunos.affected == 1){
        const alunosFinished = await getRepository(Students).findOne(id)
        return response.json(alunosFinished);
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};
