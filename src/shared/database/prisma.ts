import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() // Sin argumentos usa las variables de entorno (.env)
export default prisma