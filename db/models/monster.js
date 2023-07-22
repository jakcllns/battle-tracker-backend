import { Schema } from "mongoose";

const MonsterSchema = new Schema({
    id_name: {
        index: true,
        type: String
    },
    name: {type: String},
    size: {type: String},
    race: {type: String},
    alignment: {type: String}
})