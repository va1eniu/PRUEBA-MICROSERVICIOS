const express = require('express');
const { MongoClient } = require('mongodb'); 
require('dotenv').config();
const router = express.Router();

const uri = process.env.DDBB;
const dbName = 'test';
const collectionName = 'Usuario';

router.get('/holi', async (req, res) => {
  try {
    res.json('Somos CL');
  } catch (error) {
    res.json('Estoy mal :(');
  }
});

router.get('/ejercicio1', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.find().toArray();

    result.sort((a, b) => a.nombre.localeCompare(b.nombre));

    client.close();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json('Error en el servidor');
  }
});

const citasCollectionName = 'Citas';
const usuariosCollectionName = 'Usuario';

router.get('/citasPorFecha', async (req, res) => {
  try {
    const fechaEspecifica = new Date('2023-12-01T00:00:00.000+00:00'); 

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const citasCollection = db.collection(citasCollectionName);
    const usuariosCollection = db.collection(usuariosCollectionName);

    const result = await citasCollection.aggregate([
      {
        $match: { fecha: fechaEspecifica },
      },
      {
        $lookup: {
          from: usuariosCollectionName,
          localField: 'datosUsuario._id',
          foreignField: '_id',
          as: 'pacienteInfo',
        },
      },
      {
        $unwind: '$pacienteInfo',
      },
      {
        $sort: { 'pacienteInfo.nombre': 1 },
      },
      {
        $project: {
          _id: 0,
          fecha: 1,
          estado: 1,
          medico: 1,
          pacienteInfo: 1,
        },
      },
    ]).toArray();

    client.close();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json('Error en el servidor');
  }
});

router.get('/medicosPorEspecialidad/:especialidadId', async (req, res) => {
  try {
    const especialidadId = req.params.especialidadId;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const medicosCollection = db.collection('Medico');

    const result = await medicosCollection.find({ especialidad: especialidadId }).toArray();

    client.close();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json('Error en el servidor');
  }
});




module.exports = router;
