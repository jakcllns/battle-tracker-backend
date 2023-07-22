import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schemas/monsterSchema.js'
import { connectDb } from './db/db.js'
import * as dotenv from 'dotenv'

dotenv.config({path: './.env.local'})

const yoga = createYoga({ schema })

const server = createServer(yoga)

connectDb()

server.listen(4000, async () => {
    
    console.info('Server is running on http://localhost:4000/graphql')
    
})
