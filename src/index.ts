import express from "express";
import "./models/index.js";
import { v4 as uuidv4 } from 'uuid';
import { contact, contactCreationAttributes } from './models/init-models';
const port = 8100;

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM EXPRESS");
});

app.get("/hi", async (req, res) => {
  try {
    const contactValue: contactCreationAttributes = {
      id: uuidv4(),
      name: 'Maharshi Gor',
      mobile: '8128376007',
    } 
    await contact.create(contactValue)
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  res.send("HELLO FROM EXPRESS!!");

});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});