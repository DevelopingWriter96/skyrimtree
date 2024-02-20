const treeData = [
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
]

console.log(treeData);