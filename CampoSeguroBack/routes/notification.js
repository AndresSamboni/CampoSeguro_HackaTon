import { Router } from 'express'
import nodemailer from 'nodemailer'
import 'dotenv/config'
const notificationRouter = Router()
const { USER, PASS } = process.env

// TODO cropType (opcional), latitude, longitude, type

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: USER,
    pass: PASS
  },
  secure: true
})

notificationRouter.post('/', (req, res) => {
  const { cropType, latitude, longitude, type, additionalInfo } = req.body
  let text
  if (cropType) {
    text = `
    Tipo de cultivo: ${cropType}
    Ubicación:
      - Latitud: ${latitude}
      - Longitud: ${longitude}
    Tipo de reporte: ${type}
    Información adicional: ${additionalInfo}
    `
  } else {
    text = `
    Ubicación:
      - Latitud: ${latitude}
      - Longitud: ${longitude}
    Tipo de reporte: ${type}
    `
  }
  const mailData = {
    from: 'segurocampo7@gmail.com', // sender address
    to: 'segurocampo7@gmail.com', // list of receivers
    subject: 'Ingreso de Nuevo reporte',
    text
  }
  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.error(error)
    }
    return res.status(200).json({ message: 'Email Enviado', message_id: info.messageId })
  })
})

export { notificationRouter }
