const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const agregarPersona = async(req = request, res = response) =>{

    const { name, lastname, published, userId } = req.body;
    publishe = (published === "true") ? true:false;
    const person = await prisma.person.create({
      data: {
        name,
        lastname,
        published:publishe,
        userId
      },
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })

    res.status(201).json({
        person
     });
}

const editarPersona = async(req = request, res = response) =>{
    const { id } = req.params
    const { name, lastname, published, userId } = req.body;
    const person = await prisma.person.update({
        where: { id:Number(id) },
        data: { 
            name:name, 
            lastname:lastname, 
            published:published, 
            userId:userId },
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })

    res.status(202).json({
        person
     });
}

const mostrarPersonas = async(req = request, res = response) =>{
    const persons = await prisma.person.findMany()
    .catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })

    res.status(200).json({
        persons
     });
}

const mostrarPersona = async(req = request, res = response) =>{
    
    const {id} = req.params;

    const person = await prisma.person.findMany({
        where: { id: Number(id) },
        //include: { user: true },
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })

    res.status(200).json({
        person
     });
}

const eliminarPersona = async(req = request, res = response) =>{
    const { id } = req.params
    const person = await prisma.person.delete({
        where: {
            id:Number(id),
        },
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })
    
    res.status(200).json({
        person
    });
}

module.exports = {agregarPersona, mostrarPersona, mostrarPersonas, editarPersona, eliminarPersona};