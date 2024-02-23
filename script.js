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
        perkLevel: 4,
        skillName: "Light Armor",
        skillCost: 60,
        prerequisites: "none",
        skillDescription: "	Increase armor rating for Light Armor by 20% (+20% per additional rank)."
    },
    {
        name: "Agile Defender",
        category: "Thief",
        perkLevel: 5,
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
        prerequisites: "Unhindered",
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
        name: "Novice Locks",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 0,
        prerequisites: "None",
        skillDescription: "Novice locks are much easier to pick."
    },
    {
        name: "Apprentice Locks",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 20,
        prerequisites: "Novice Locks",
        skillDescription: "Apprentice locks are much easier to pick."
    },
    {
        name: "Quick Hands",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 40,
        prerequisites: "Apprentice Locks",
        skillDescription: "Able to pick locks without being noticed."
    },
    {
        name: "Wax Key",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 50,
        prerequisites: "Quick Hands",
        skillDescription: "Automatically gives you a copy of a picked lock's key if it has one."
    },
    {
        name: "Adept Locks",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 50,
        prerequisites: "Apprentice Locks",
        skillDescription: "Adept locks are much easier to pick."
    },
    {
        name: "Golden Touch",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 60,
        prerequisites: "Adept Locks",
        skillDescription: "Find more gold in chests."
    },
    {
        name: "Treasure Hunter",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 70,
        prerequisites: "Golden Touch",
        skillDescription: "50% greater chance of finding special treasure."
    },
    {
        name: "Locksmith",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 50,
        prerequisites: "Expert Locks",
        skillDescription: "Pick starts close to the lock opening position."
    },
    {
        name: "Unbreakable",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 100,
        prerequisites: "Locksmith",
        skillDescription: "Lockpicks never break."
    },
    {
        name: "Master Locks",
        category: "Thief",
        perkLevel: 1,
        skillName: "Lockpicking",
        skillCost: 100,
        prerequisites: "Expert Locks",
        skillDescription: "Master locks are much easier to pick."
    },
    {
        name: "Light Fingers",
        category: "Thief",
        perkLevel: 1,
        skillName: "Pickpocket",
        skillCost: 0,
        prerequisites: "None",
        skillDescription: "Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds (+20% per additional rank)."
    },
    {
        name: "Light Fingers",
        category: "Thief",
        perkLevel: 2,
        skillName: "Pickpocket",
        skillCost: 20,
        prerequisites: "None",
        skillDescription: "Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds (+20% per additional rank)."
    },
    {
        name: "Light Fingers",
        category: "Thief",
        perkLevel: 3,
        skillName: "Pickpocket",
        skillCost: 40,
        prerequisites: "None",
        skillDescription: "Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds (+20% per additional rank)."
    },
    {
        name: "Light Fingers",
        category: "Thief",
        perkLevel: 4,
        skillName: "Pickpocket",
        skillCost: 60,
        prerequisites: "None",
        skillDescription: "Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds (+20% per additional rank)."
    },
    {
        name: "Light Fingers",
        category: "Thief",
        perkLevel: 5,
        skillName: "Pickpocket",
        skillCost: 80,
        prerequisites: "None",
        skillDescription: "Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds (+20% per additional rank)."
    },
    {
        name: "Night Thief",
        category: "Thief",
        perkLevel: 1,
        skillName: "Pickpocket",
        skillCost: 30,
        prerequisites: "Light Fingers",
        skillDescription: "+25% chance to pickpocket if the target is asleep."
    },
    {
        name: "Poisoned",
        category: "Thief",
        perkLevel: 1,
        skillName: "Pickpocket",
        skillCost: 40,
        prerequisites: "Night Thief",
        skillDescription: "Silently harm enemies by placing poisons in their pockets."
    },
    {
        name: "Cutpurse",
        category: "Thief",
        perkLevel: 1,
        skillName: "Pickpocket",
        skillCost: 40,
        prerequisites: "Night Thief",
        skillDescription: "Pickpocketing gold becomes 50% easier."
    },
    {
        name: "Extra Pockets",
        category: "Thief",
        perkLevel: 1,
        skillName: "Pickpocket",
        skillCost: 50,
        prerequisites: "Night Thief",
        skillDescription: "Carrying capacity is increased by 100."
    },
    {
        name: "Keymaster",
        category: "Thief",
        perkLevel: 1,
        skillName: "Pickpocket",
        skillCost: 60,
        prerequisites: "Cutpurse",
        skillDescription: "Pickpocketing keys almost always works."
    },
    {
        name: "Misdirection",
        category: "Thief",
        perkLevel: 1,
        skillName: "Pickpocket",
        skillCost: 70,
        prerequisites: "Cutpurse",
        skillDescription: "Can pickpocket equipped weapons (when hidden)."
    },
    {
        name: "Perfect Touch",
        category: "Thief",
        perkLevel: 1,
        skillName: "Pickpocket",
        skillCost: 100,
        prerequisites: "Misdirection",
        skillDescription: "Can pickpocket equipped items, clothes and armor (when hidden)."
    },
    {
        name: "Stealth",
        category: "Thief",
        perkLevel: 1,
        skillName: "Sneak",
        skillCost: 0,
        prerequisites: "None",
        skillDescription: "You are 20% harder to detect when sneaking (+5% per additional rank, max 40% with 5/5)."
    },
    {
        name: "Stealth",
        category: "Thief",
        perkLevel: 2,
        skillName: "Sneak",
        skillCost: 20,
        prerequisites: "None",
        skillDescription: "You are 20% harder to detect when sneaking (+5% per additional rank, max 40% with 5/5)."
    },
    {
        name: "Stealth",
        category: "Thief",
        perkLevel: 3,
        skillName: "Sneak",
        skillCost: 40,
        prerequisites: "None",
        skillDescription: "You are 20% harder to detect when sneaking (+5% per additional rank, max 40% with 5/5)."
    },
    {
        name: "Stealth",
        category: "Thief",
        perkLevel: 4,
        skillName: "Sneak",
        skillCost: 60,
        prerequisites: "None",
        skillDescription: "You are 20% harder to detect when sneaking (+5% per additional rank, max 40% with 5/5)."
    },
    {
        name: "Stealth",
        category: "Thief",
        perkLevel: 5,
        skillName: "Sneak",
        skillCost: 80,
        prerequisites: "None",
        skillDescription: "You are 20% harder to detect when sneaking (+5% per additional rank, max 40% with 5/5)."
    },
    {
        name: "Muffled Movement",
        category: "Thief",
        perkLevel: 1,
        skillName: "Sneak",
        skillCost: 30,
        prerequisites: "Stealth",
        skillDescription: "Noise from armor is reduced by 50%."
    },
    {
        name: "Backstab",
        category: "Thief",
        perkLevel: 3,
        skillName: "Sneak",
        skillCost: 30,
        prerequisites: "Stealth",
        skillDescription: "Sneak attacks with one-handed weapons now do six times damage. This bonus stacks with the Shrouded Gloves enchantment, giving 12 times normal damage. It can also apply to the Berserker Rage power, offering 12 times normal damage, or 24 times normal damage with both Shrouded Gloves and the race power active."
    },
    {
        name: "Lightfoot",
        category: "Thief",
        perkLevel: 1,
        skillName: "Sneak",
        skillCost: 40,
        prerequisites: "Muffled Movement",
        skillDescription: "You won't trigger pressure plates."
    },
    {
        name: "Deadly Aim",
        category: "Thief",
        perkLevel: 1,
        skillName: "Sneak",
        skillCost: 40,
        prerequisites: "Backstab",
        skillDescription: "	Sneak attacks with bows now do three times damage. Can apply to the Berserker Rage power, offering 6 times normal damage."
    },
    {
        name: "Silent Roll",
        category: "Thief",
        perkLevel: 1,
        skillName: "Sneak",
        skillCost: 50,
        prerequisites: "Light Foot",
        skillDescription: "Sprinting while sneaking executes a silent forward roll."
    },
    {
        name: "Assassin's Blade",
        category: "Thief",
        perkLevel: 1,
        skillName: "Sneak",
        skillCost: 50,
        prerequisites: "None",
        skillDescription: "Deadly Aim."
    },
    {
        name: "Silence",
        category: "Thief",
        perkLevel: 5,
        skillName: "Sneak",
        skillCost: 70,
        prerequisites: "Silent Roll",
        skillDescription: "Walking and running does not affect detection."
    },
    {
        name: "Shadow Warrior",
        category: "Thief",
        perkLevel: 1,
        skillName: "Sneak",
        skillCost: 30,
        prerequisites: "Silence",
        skillDescription: "Crouching stops combat for a moment and forces distant opponents to search for a target."
    },
    {
        name: "Haggling",
        category: "Thief",
        perkLevel: 1,
        skillName: "Speech",
        skillCost: 0,
        prerequisites: "None",
        skillDescription: "Buying and selling prices are 10% better (+5% per additional rank)."
    },
    {
        name: "Haggling",
        category: "Thief",
        perkLevel: 2,
        skillName: "Speech",
        skillCost: 20,
        prerequisites: "None",
        skillDescription: "Buying and selling prices are 10% better (+5% per additional rank)."
    },
    {
        name: "Haggling",
        category: "Thief",
        perkLevel: 3,
        skillName: "Speech",
        skillCost: 40,
        prerequisites: "None",
        skillDescription: "Buying and selling prices are 10% better (+5% per additional rank)."
    },
    {
        name: "Haggling",
        category: "Thief",
        perkLevel: 4,
        skillName: "Speech",
        skillCost: 60,
        prerequisites: "None",
        skillDescription: "Buying and selling prices are 10% better (+5% per additional rank)."
    },
    {
        name: "Haggling",
        category: "Thief",
        perkLevel: 5,
        skillName: "Speech",
        skillCost: 80,
        prerequisites: "None",
        skillDescription: "Buying and selling prices are 10% better (+5% per additional rank)."
    },
    {
        name: "Allure",
        category: "Thief",
        perkLevel: 1,
        skillName: "Speech",
        skillCost: 30,
        prerequisites: "Haggling",
        skillDescription: "10% better prices with the opposite sex."
    },
    {
        name: "Bribery",
        category: "Thief",
        perkLevel: 1,
        skillName: "Speech",
        skillCost: 30,
        prerequisites: "Haggling",
        skillDescription: "Can bribe guards to ignore crimes."
    },
    {
        name: "Merchant",
        category: "Thief",
        perkLevel: 1,
        skillName: "Speech",
        skillCost: 50,
        prerequisites: "Allure",
        skillDescription: "Can sell any type of item to any kind of merchant."
    },
    {
        name: "Persuasion",
        category: "Thief",
        perkLevel: 1,
        skillName: "Speech",
        skillCost: 50,
        prerequisites: "Bribery",
        skillDescription: "Persuasion attempts are 30% easier."
    },
    {
        name: "Investor",
        category: "Thief",
        perkLevel: 1,
        skillName: "Speech",
        skillCost: 70,
        prerequisites: "Merchant",
        skillDescription: "Can invest 500 gold with a shopkeeper to increase their available gold permanently."
    },
    {
        name: "Intimidation",
        category: "Thief",
        perkLevel: 1,
        skillName: "Speech",
        skillCost: 70,
        prerequisites: "Persuasion",
        skillDescription: "Intimidation is twice as successful."
    },
    {
        name: "Fence",
        category: "Thief",
        perkLevel: 1,
        skillName: "Speech",
        skillCost: 90,
        prerequisites: "Investor",
        skillDescription: "Can barter stolen goods with any merchant the Dragonborn has invested in."
    },
    {
        name: "Master Trader",
        category: "Thief",
        perkLevel: 1,
        skillName: "Speech",
        skillCost: 100,
        prerequisites: "Fence",
        skillDescription: "Every merchant in the world gains 1000 gold for bartering."
    },
]

console.log(treeData);