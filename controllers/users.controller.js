const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const agregarUsuario = async(req = request, res = response) =>{

    const { email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        email,
        password
      },
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })

    res.status(201).json({
        user
     });
}

const editarUsuario = async(req = request, res = response) =>{
    const { id } = req.params
    const { email, password } = req.body;
    const user = await prisma.user.update({
        where: { id:Number(id) },
        data: { 
            email:email,
            password:password
        },
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })

    res.status(202).json({
        user
     });
}

const mostrarUsuarios = async(req = request, res = response) =>{
    const users = await prisma.user.findMany()
    .catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })

    res.status(200).json({
        users
     });
}

const mostrarUsuario = async(req = request, res = response) =>{
    
    const {id} = req.params;

    const user = await prisma.user.findMany({
        where: { id: Number(id) }
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })

    res.status(200).json({
        user
     });
}

const eliminarUsuario = async(req = request, res = response) =>{
    const { id } = req.params
    const user = await prisma.user.delete({
        where: {
        id:Number(id),
        },
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect();
    })
    
    res.status(200).json({
        user
    });
}

module.exports = {agregarUsuario, mostrarUsuario, mostrarUsuarios, editarUsuario, eliminarUsuario};