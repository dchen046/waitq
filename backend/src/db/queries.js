import { PrismaClient } from "@prisma/client";
import bcypt from 'bcryptjs'

const prisma = new PrismaClient();


export const getAllUsers = async () => {
    const users = await prisma.users.findMany();
    // console.log(users);
    return users;
}

export const getUser = async (username) => {
    return await prisma.users.findMany({
        where: {
            username: username
        }
    });
}

export const addUser = async (username, password) => {
    const newUser = await prisma.users.create({
        data: {
            username: username,
            password: password
        }
    });

    console.log(newUser);
}
