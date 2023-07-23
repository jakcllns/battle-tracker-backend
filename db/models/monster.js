import { Schema } from "mongoose";

export const MonsterSchema = new Schema({
    id_name: {
        index: {
            unique: true
        },
        type: String,
        lowercase: true
    },
    name: {type: String},
    size: {type: String},
    race: {type: String},
    alignment: {type: String},
    armorClass: {type: Number},
    armorType: {type: String},
    hitPoints: {type: Number},
    hitDie: {type: String},
    movementSpeed: [{type: String}],
    str: {type: Number},
    dex: {type: Number},
    con: {type: Number},
    int: {type: Number},
    wis: {type: Number},
    cha: {type: Number},
    savingThrows: [{
        savingThrowType: {type: String},
        modifier: {type: Number}
    }],
    skills: [{
        skillType: {type: String},
        modifier: {type: Number}
    }],
    damageResistances: [{type: String}],
    legendaryResistances: [{type: String}],
    damageImmunities: [{type: String}],
    conditionImmunities: [{type: String}],
    damageVulnerabilites: [{type: String}],
    senses: [{type: String}],
    languages: [{type: String}],
    challenge: {type: String},
    experience: {type: Number},
    abilities: [{
        name: {type: String},
        description: {type: String},
        isAction: {type: Boolean}
    }],
    actions: [{
        name: {type: String},
        attackType: {type: String},
        modifier: {type: Number},
        reach: {type: String},
        targets: {type: Number},
        hits: [{
            dieType: {type: String},
            damageType: {type: String}
        }],
        description: {type: String}
    }],
    legendaryDescription: {type: String},
    legendaryActions: [{
        name: {type: String},
        description: {type: String}
    }],
    lairDescription: {type: String},
    lairActions: [{
        name: {type: String},
        description: {type: String}
    }],
    regionalDescription: {type: String},
    regionalEffects: [{
        name: {type: String},
        description: {type: String}
    }],
    mythicDesription: {type: String},
    mythicActions: [{
        name: {type: String},
        description: {type: String}
    }]
})