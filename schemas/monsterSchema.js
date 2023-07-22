import { createSchema } from "graphql-yoga";

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
        monsters: String
        savingThrow: SavingThrow
        skill: Skill
        ability: Ability
        action: Action
        simpleAction: SimpleAction
        monster: Monster
    }`,
    resolvers: {
        Query: {
            monsters: () => 'this is where the monsters will come from',
            savingThrow: () => { return {savingThrowType: 'Dex', modifier: 8}},
            skill: () => {return {skillType: 'Perception', modifier: 3}},
            ability: () => {return {name: 'Multiattack', description: '3 attacks', isAction: true}},
            action: () => {return {name: 'Shortsword', attackType: 'Melee Weapon Attack', modifier: 9, reach: '5 ft.', targets: 1, hits: [{dieType: '1d6+6', damageType: 'piercing'}], description: ''}},
            simpleAction: () => {return {name: 'Action', description: 'Some action'}},
            monster: () => {
                return {
                    id: 'id',
                    id_name: 'id_name',
                    name: 'name',
                    size: 'size',
                    race: 'race',
                    alignment: 'alignment',
                    armorClass: 16,
                    armorType: 'natural armor',
                    hitPoints: 12,
                    hitDie: '2d6',
                    movementSpeed: ['30 ft.'],
                    str: 10,
                    dex: 10,
                    con: 10,
                    int: 10,
                    wis: 10,
                    cha: 10,
                    savingThrows: [
                        {
                            savingThrowType: 'Dex',
                            modifier: 2
                        }
                    ],
                    skills: [
                        {
                            skillType: 'Stealth',
                            modifier: 2
                        }
                    ],
                    damageResistances: ['Poison'],
                    legendaryResistances: [],
                    damageImmunities: ['Fire'],
                    conditionImmunities: ['Poisoned'],
                    damageVulnerabilities: ['Slashing'],
                    senses: ['blindsight 30 ft.'],
                    languages: ['common'],
                    challenge: '1/2',
                    experience: 100,
                    abilities: [],
                    actions: [],
                    legendaryDescription: '',
                    legendaryActions: [],
                    lairDescription: '',
                    lairActions: [],
                    regionalDescription: '',
                    regionalEffects: [],
                    mythicDescription: '',
                    mythicActions: []
                }
            }
        }
    }
})