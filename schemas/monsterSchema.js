import { createSchema } from "graphql-yoga";

export const monsterSchema = createSchema({
    typeDefs: /* GraphQl */  `
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
    `
})