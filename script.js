const treeData = [
    {
        name: "Agile Defender",
        category: "Thief",
        perkLevel: 1,
        skillName: "Light Armor",
        skillCost: 0,
        prerequisites: "none",
        skillDescription: "	Increase armor rating for Light Armor by 20% (+20% per additional rank)."
    },
    {
        name: "Agile Defender",
        category: "Thief",
        perkLevel: 2,
        skillName: "Light Armor",
        skillCost: 20,
        prerequisites: "none",
        skillDescription: "	Increase armor rating for Light Armor by 20% (+20% per additional rank)."
    },
    {
        name: "Agile Defender",
        category: "Thief",
        perkLevel: 3,
        skillName: "Light Armor",
        skillCost: 40,
        prerequisites: "none",
        skillDescription: "	Increase armor rating for Light Armor by 20% (+20% per additional rank)."
    },
    {
        name: "Agile Defender",
        category: "Thief",
        perkLevel: 5,
        skillName: "Light Armor",
        skillCost: 60,
        prerequisites: "none",
        skillDescription: "	Increase armor rating for Light Armor by 20% (+20% per additional rank)."
    },
    {
        name: "Agile Defender",
        category: "Thief",
        perkLevel: 4,
        skillName: "Light Armor",
        skillCost: 80,
        prerequisites: "none",
        skillDescription: "	Increase armor rating for Light Armor by 20% (+20% per additional rank)."
    },
    {
        name: "Custom Fit",
        category: "Thief",
        perkLevel: 1,
        skillName: "Light Armor",
        skillCost: 30,
        prerequisites: "Agile Defender",
        skillDescription: "25% armor bonus if wearing all Light Armor: head, chest, hands, feet."
    },
    {
        name: "Undhindered",
        category: "Thief",
        perkLevel: 1,
        skillName: "Light Armor",
        skillCost: 50,
        prerequisites: "Custom Fit",
        skillDescription: "Light Armor weighs nothing and doesn't slow you down when worn."
    },
    {
        name: "Wind Walker",
        category: "Thief",
        perkLevel: 1,
        skillName: "Light Armor",
        skillCost: 50,
        prerequisites: "Custom Fit",
        skillDescription: "Stamina regenerates 50% faster in all Light Armor: head, chest, hands, feet."
    },
    {
        name: "Matching Set",
        category: "Thief",
        perkLevel: 1,
        skillName: "Light Armor",
        skillCost: 70,
        prerequisites: "Custom Fit",
        skillDescription: "Additional 25% Armor bonus if wearing a matched set of Light Armor."
    },
    {
        name: "Deft Movement",
        category: "Thief",
        perkLevel: 1,
        skillName: "Light Armor",
        skillCost: 100,
        prerequisites: "Wind Walker, Matching Set",
        skillDescription: "10% chance of avoiding all damage from a melee attack while wearing all Light Armor: head, chest, hands, feet."
    },
    {
        name: "Alchemist",
        category: "Thief",
        perkLevel: 1,
        skillName: "Alchemy",
        skillCost: 0,
        prerequisites: "none",
        skillDescription: "Potions and poisons you make are 20% stronger."
    },
    {
        name: "Alchemist",
        category: "Thief",
        perkLevel: 2,
        skillName: "Alchemy",
        skillCost: 20,
        prerequisites: "none",
        skillDescription: "Potions and poisons you make are 40% stronger."
    },
    {
        name: "Alchemist",
        category: "Thief",
        perkLevel: 3,
        skillName: "Alchemy",
        skillCost: 40,
        prerequisites: "none",
        skillDescription: "Potions and poisons you make are 60% stronger."
    },
    {
        name: "Alchemist",
        category: "Thief",
        perkLevel: 4,
        skillName: "Alchemy",
        skillCost: 60,
        prerequisites: "none",
        skillDescription: "Potions and poisons you make are 60% stronger."
    },
    {
        name: "Alchemist",
        category: "Thief",
        perkLevel: 5,
        skillName: "Alchemy",
        skillCost: 80,
        prerequisites: "none",
        skillDescription: "Potions and poisons you make are twice as strong."
    },
    {
        name: "Physician",
        category: "Thief",
        perkLevel: 1,
        skillName: "Alchemy",
        skillCost: 20,
        prerequisites: "Alchemist",
        skillDescription: "Potions you mix that restore health or stamina are 25% more powerful."
    },
    {
        name: "Poisoner",
        category: "Thief",
        perkLevel: 1,
        skillName: "Alchemy",
        skillCost: 30,
        prerequisites: "Physician",
        skillDescription: "Poisons you mix are 25% more effective."
    },
    {
        name: "Benefactor",
        category: "Thief",
        perkLevel: 1,
        skillName: "Alchemy",
        skillCost: 30,
        prerequisites: "Physician",
        skillDescription: "Potions you mix with beneficial effects have an additional 25% greater magnitude."
    },
    {
        name: "Experimenter",
        category: "Thief",
        perkLevel: 1,
        skillName: "Alchemy",
        skillCost: 50,
        prerequisites: "Benefactor",
        skillDescription: "Eating an ingredient reveals the first two effects."
    },
    {
        name: "Experimenter",
        category: "Thief",
        perkLevel: 2,
        skillName: "Alchemy",
        skillCost: 70,
        prerequisites: "Benefactor",
        skillDescription: "Eating an ingredient reveals the first three effects."
    },
    {
        name: "Experimenter",
        category: "Thief",
        perkLevel: 3,
        skillName: "Alchemy",
        skillCost: 90,
        prerequisites: "Benefactor",
        skillDescription: "Eating an ingredient reveals the first four effects."
    },
    {
        name: "Concentrated Poison",
        category: "Thief",
        perkLevel: 1,
        skillName: "Alchemy",
        skillCost: 60,
        prerequisites: "Poisoner",
        skillDescription: "Poisons applied to weapons last for twice as many hits."
    },
    {
        name: "Green Thumb",
        category: "Thief",
        perkLevel: 1,
        skillName: "Alchemy",
        skillCost: 70,
        prerequisites: "Concentrated Poison",
        skillDescription: "Two ingredients are gathered from plants."
    },
    {
        name: "Snakeblood",
        category: "Thief",
        perkLevel: 1,
        skillName: "Alchemy",
        skillCost: 80,
        prerequisites: "Concentrated Poison, Experimenter",
        skillDescription: "50% resistance to all poisons."
    },
    {
        name: "Purity",
        category: "Thief",
        perkLevel: 1,
        skillName: "Alchemy",
        skillCost: 100,
        prerequisites: "Snakeblood",
        skillDescription: "All negative effects are removed from created potions while all positive effects are removed from created poisons."
    },

]

console.log(treeData);