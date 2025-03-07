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

export const addWaitlist = async (name, size, time, phone, email, business_name, notes = '') => {
    try {
        const entry = await prisma.reservations.create({
            data: {
                name: name,
                size: size,
                time: time,
                phone: phone,
                email: email,
                notes: notes,
                b_name: business_name
            }
        })
        console.log('time: ' + time);
        console.log(entry);
        return [null, entry];
    } catch (err) {
        return [err, null];
    }
}

export const getBusinesses = async (uid) => {
    try {
        const businesses = await prisma.businesses.findMany({
            where: {
                user_id: uid
            }
        });
        return [null, businesses];
    } catch (err) {
        return [err, null];
    }
}

export const addBusiness = async (name, addr, phone, email, uid) => {
    try {
        const newBusiness = await prisma.businesses.create({
            data: {
                name: name,
                address: addr,
                phone: phone,
                email: email,
                user_id: uid
            }
        });
        console.log(newBusiness);
        return [null, newBusiness];
    } catch (err) {
        return [err, null];
    }
}

export const getReservations = async (start, end) => {
    try {
        const waitlist = await prisma.reservations.findMany({
            where: {
                time: {
                    gte: start,
                    lte: end
                }
            }
        })
        return [null, waitlist];
    } catch (err) {
        return [err, null];
    }
}

export const removeReservation = async (phone) => {
    try {
        const waitlist = await prisma.reservations.delete({
            where: {
                phone: phone
            }
        })
        return [null, waitlist];
    } catch (err) {
        return [err, null];
    }
}

// moves a reservation to confirmed reservation table
export const confirmReservation = async (phone) => {
    try {
        const [err, confirmedRes] = await removeReservation(phone);
        if (err) console.log(err);
        else {
            const confirmedReservation = await prisma.confirmed_reservations.create({
                data: {
                    name: confirmedRes.name,
                    size: confirmedRes.size,
                    time: confirmedRes.time,
                    phone: confirmedRes.phone,
                    b_name: confirmedRes.b_name
                }
            });
            return [null, confirmedReservation]
        }
    } catch (err) {
        return [err, null];
    }
}
