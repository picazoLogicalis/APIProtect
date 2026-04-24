import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.disable('x-powered-by'); 
app.use(cors());
app.use(express.json()); // Permite recibir datos en formato JSON

// 1. Conexión a MongoDB 
const mongoURI = "mongodb+srv://mcdeiling35_db_user:rlwj075sctuWaoB3@cluster0.mrfiqhs.mongodb.net/?appName=Cluster0";
mongoose.connect(mongoURI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error de conexión:", err));

// 2. Definir el "Esquema" (Estructura de los datos)
const MensajeSchema = new mongoose.Schema({ texto: String });
const Mensaje = mongoose.model('Mensaje', MensajeSchema);

// 3. Endpoint para GUARDAR un mensaje (POST)
app.post('/api/mensajes', async (req, res) => {
  const nuevoMensaje = new Mensaje({ texto: req.body.texto });
  await nuevoMensaje.save();
  res.json({ estado: "Mensaje guardado" });
});

// 4. Endpoint para OBTENER todos los mensajes (GET)
app.get('/api/mensajes', async (req, res) => {
  const mensajes = await Mensaje.find();
  res.json(mensajes);
});

app.listen(3000, () => console.log('API con DB en http://localhost:3000'));
