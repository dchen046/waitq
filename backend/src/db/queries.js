import { PrismaClient } from "@prisma/client";
import bcypt from 'bcryptjs'

const prisma = new PrismaClient();


export const getAllUsers = async () => {
    const users = await prisma.users.findMany();
    // console.log(users);
    return users;
}

export const getUserByEmail = async (email) => {
    return await prisma.users.findFirst({
        where: {
            email
        }
    });
}

export const addUser = async (email, password) => {
    const newUser = await prisma.users.create({
        data: {
            email: email,
            password: password
        }
    });
    console.log(newUser);
    return newUser;
}
