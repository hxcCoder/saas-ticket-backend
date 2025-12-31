import express, { Application } from 'express';
import { prisma } from './shared/database/prisma'; // Importamos nuestra instancia

const app: Application = express();

app.use(express.json());

// Endpoint de prueba para verificar la conexión
app.get('/health', async (req, res) => {
  try {
    // Intentamos una consulta simple para verificar la DB
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'OK', database: 'Connected', timestamp: new Date() });
  } catch (error) {
    console.error('Database connection failed', error);
    res.status(500).json({ status: 'ERROR', message: 'Database failure' });
  }
});

// Ejemplo: Crear un usuario (basado en tu schema)
app.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        email,
        password, // Nota: En producción, hashea esto con bcrypt
      },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
});

export default app;