import { createServer } from 'https'
import { createYoga } from 'graphql-yoga'
import { schema } from './schemas/monsterSchema.js'
import { connectDb } from './db/db.js'
import * as dotenv from 'dotenv'
import {readFileSync} from 'fs'

const options = {
    key: readFileSync('./localhost-key.pem'),
    cert: readFileSync('./localhost.pem')
}

dotenv.config({path: './.env.local'})

const yoga = createYoga({ graphiql: true, schema, cors: {methods: ['POST']} })

const server = createServer(options, yoga)

server.listen(4000 , async () => {
    connectDb()
    console.info('Server is running on https://localhost:4000/graphql')
    
})
