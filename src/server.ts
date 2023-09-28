import fastify from 'fastify'
import { randomUUID } from 'node:crypto'
import { knexdb } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  // const transaction = await knexdb('transactions')
  //   .insert({
  //     id: randomUUID(),
  //     title: 'Transação de teste',
  //     amount: 1000,
  //   })
  //   .returning('*')
  // const transaction = await knexdb('transactions').select('*')
  const transaction = await knexdb('transactions')
    .where('amount', 1000)
    .select('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
