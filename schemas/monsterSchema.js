import { createSchema } from "graphql-yoga";
import { Monster } from "../db/db.js";

export const schema = createSchema({
    typeDefs: `

    type SavingThrow {
        savingThrowType: String
        modifier: Int
    }

    type Skill {
        skillType: String
        modifier: Int
    }

    type Ability {
        name: String
        description: String
        isAction: Boolean
    }

    type Hit {
        dieType: String
        damageType: String
    }

    type Action {
        name: String
        attackType: String
        modifier: Int
        reach: String
        targets: Int
        hits: [Hit]
        description: String
    }

    type SimpleAction {
        name: String
        description: String
    }

    type Monster {
        id: String
        id_name: String
        name: String
        size: String
        race: String
        alignment: String
        armorClass: Int
        armorType: String
        hitPoints: Int
        hitDie: String
        movementSpeed: [String]
        str: Int
        dex: Int
        con: Int
        int: Int
        wis: Int
        cha: Int
        savingThrows: [SavingThrow]
        skills: [Skill]
        damageResistances: [String]
        legendaryResistances: [String]
        damageImmunities: [String]
        conditionImmunities: [String]
        damageVulnerabilities: [String]
        senses: [String]
        languages: [String]
        challenge: String
        experience: Int
        abilities: [Ability]
        actions: [Action]
        legendaryDescription: String
        legendaryActions: [SimpleAction]
        lairDescription: String
        lairActions: [SimpleAction]
        regionalDescription: String
        regionalEffects: [SimpleAction]
        mythicDescription: String
        mythicActions: [SimpleAction]
    }

    type Query {
        monsters: [Monster]
        savingThrow: SavingThrow
        skill: Skill
        ability: Ability
        action: Action
        simpleAction: SimpleAction
        monster(id_name: String): Monster
    }`,
    resolvers: {
        Query: {
            monsters: async () => {
                console.log(Monster)
                const monsters = await Monster.find({})
                if(monsters.length === 0){
                    return []
                }

                return monsters.map(monster => {
                    return {
                        id: monster._id.toString(),
                        id_name: monster.id_name,
                        name: monster.name,
                        size: monster.size,
                        race: monster.race,
                        alignment: monster.alignment,
                        armorClass: monster.armorClass,
                        armorType: monster.armorType,
                        hitPoints: monster.hitPoints,
                        hitDie: monster.hitDie,
                        movementSpeed: monster.movementSpeed,
                        str: monster.str,
                        dex: monster.dex,
                        con: monster.con,
                        int: monster.int,
                        wis: monster.wis,
                        cha: monster.cha,
                        savingThrows: monster.savingThrows,
                        skills: monster.skills,
                        damageResistances: monster.damageResistances,
                        legendaryResistances: monster.legendaryResistances,
                        damageImmunities: monster.damageImmunites,
                        conditionImmunities: monster.conditionImmunities,
                        damageVulnerabilities: monster.damageVulnerabilities,
                        senses: monster.senses,
                        languages: monster.languages,
                        challenge: monster.challenge,
                        experience: monster.experience,
                        abilities: monster.abilities,
                        actions: monster.actions,
                        legendaryDescription: monster.legendaryDescription,
                        legendaryActions: monster.legendaryActions,
                        lairDescription: monster.lairDescription,
                        lairActions: monster.lairActions,
                        regionalDescription: monster.regionalDescription,
                        regionalEffects: monster.regionalEffects,
                        mythicDescription: monster.mythicDescription,
                        mythicActions: monster.mythicActions
                    }
                })
            },
            savingThrow: () => { return {savingThrowType: 'Dex', modifier: 8}},
            skill: () => {return {skillType: 'Perception', modifier: 3}},
            ability: () => {return {name: 'Multiattack', description: '3 attacks', isAction: true}},
            action: () => {return {name: 'Shortsword', attackType: 'Melee Weapon Attack', modifier: 9, reach: '5 ft.', targets: 1, hits: [{dieType: '1d6+6', damageType: 'piercing'}], description: ''}},
            simpleAction: () => {return {name: 'Action', description: 'Some action'}},
            monster: async (_, {id_name}) => {
                const monster = await Monster.findOne({id_name: id_name})
                return {
                    id: monster._id.toString(),
                    id_name: monster.id_name,
                    name: monster.name,
                    size: monster.size,
                    race: monster.race,
                    alignment: monster.alignment,
                    armorClass: monster.armorClass,
                    armorType: monster.armorType,
                    hitPoints: monster.hitPoints,
                    hitDie: monster.hitDie,
                    movementSpeed: monster.movementSpeed,
                    str: monster.str,
                    dex: monster.dex,
                    con: monster.con,
                    int: monster.int,
                    wis: monster.wis,
                    cha: monster.cha,
                    savingThrows: monster.savingThrows,
                    skills: monster.skills,
                    damageResistances: monster.damageResistances,
                    legendaryResistances: monster.legendaryResistances,
                    damageImmunities: monster.damageImmunities,
                    conditionImmunities: monster.conditionImmunities,
                    damageVulnerabilities: monster.damageVulnerabilites,
                    senses: monster.senses,
                    languages: monster.languages,
                    challenge: monster.challenge,
                    experience: monster.experience,
                    abilities: monster.abilities,
                    actions: monster.actions,
                    legendaryDescription: monster.legendaryDescription,
                    legendaryActions: monster.legendaryActions,
                    lairDescription: monster.lairDescription,
                    lairActions: monster.lairActions,
                    regionalDescription: monster.regionalDescription,
                    regionalEffects: monster.regionalEffects,
                    mythicDescription: monster.mythicDesription,
                    mythicActions: monster.mythicActions
                }
            }
        }
    }
})