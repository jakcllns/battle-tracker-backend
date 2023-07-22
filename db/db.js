import mongoose from "mongoose";
import { MonsterSchema } from "./models/monster.js"

let isConnected = false
let monsterDb = undefined

export const connectDb = () => {
    const {MONSTER_DATABASE_URI} = process.env

    console.log("Connecting to db")

    if(!isConnected){
        mongoose.connect(MONSTER_DATABASE_URI)
        .then(db => {
            
            isConnected = true
            monsterDb = db
            console.log("Connected to database")
        }).catch(() => console.log("Some error happened"))
        return monsterDb;
    }

    console.log("Already connected to Database")
    return monsterDb
}

export const Monster = mongoose.model("newmonsters", MonsterSchema)