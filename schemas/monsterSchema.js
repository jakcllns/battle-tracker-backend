import { createSchema } from "graphql-yoga";
import { Monster } from "../db/db.js";
import { GraphQLError } from "graphql";

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
        _id: String
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

    input MonsterInput {
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
        savingThrows: [SavingThrowInput]
        skills: [SkillInput]
        damageResistances: [String]
        legendaryResistances: [String]
        damageImmunities: [String]
        conditionImmunities: [String]
        damageVulnerabilities: [String]
        senses: [String]
        languages: [String]
        challenge: String
        experience: Int
        abilities: [AbilityInput]
        actions: [ActionInput]
        legendaryDescription: String
        legendaryActions: [SimpleActionInput]
        lairDescription: String
        lairActions: [SimpleActionInput]
        regionalDescription: String
        regionalEffects: [SimpleActionInput]
        mythicDescription: String
        mythicActions: [SimpleActionInput]
    }

    input SavingThrowInput {
        savingThrowType: String
        modifier: Int
    }

    input SkillInput {
        skillType: String
        modifier: Int
    }

    input AbilityInput {
        name: String
        description: String
        isAction: Boolean
    }

    input HitInput {
        dieType: String
        damageType: String
    }

    input ActionInput {
        name: String
        attackType: String
        modifier: Int
        reach: String
        targets: Int
        hits: [HitInput]
        description: String
    }

    input SimpleActionInput {
        name: String
        description: String
    }

    type Response {
        message: String
        data: Monster
    }

    type Query {
        monsters: [Monster]
        monster(id_name: String): Monster
    }
    
    type Mutation {
        addMonster(monster: MonsterInput): Response 
    }
    `,
    resolvers: {
        Query: {
            monsters: async () => {
                
                const monsters = await Monster.find({})
                if(monsters.length === 0){
                    return []
                }

                return monsters.map(monster => {
                    return {...monster.toJSON()}
                })
            },
            monster: async (_, {id_name}) => {
                const monster = await Monster.findOne({id_name: id_name})
                if(!monster) { throw new GraphQLError(`Monster with id_name '${id_name}' not found`)}

                return {...monster.toJSON()}
            }
        },
        Mutation : {
            addMonster: async (_, {monster}) => {
                if(await Monster.findOne({id_name: monster.id_name})) {
                    return {
                        message: 'Monster with this name already exists',
                        data: {}
                    }
                }

                const result = await (new Monster(monster)).save()

                
                return {
                    message: 'Success',
                    data: {...result.toJSON()}
                }
            }
        }
    }
})

