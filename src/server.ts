/* eslint-disable prettier/prettier */
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
app.register(cors, {
  origin: true, // todas urls de front-end poderão acessar nosso back-end
})
app.register (memoriesRoutes)

// HTTP Methode: get , post , put , patch , delete



app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('😍 HTTP server running on http://localhost:3333')
  })
