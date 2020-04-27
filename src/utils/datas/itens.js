export default {
  type: "item",
  version: "10.4.1",
  basic: {
    name: "",
    rune: {
      isrune: false,
      tier: 1,
      type: "red"
    },
    gold: {
      base: 0,
      total: 0,
      sell: 0,
      purchasable: false
    },
    group: "",
    description: "",
    colloq: ";",
    plaintext: "",
    consumed: false,
    stacks: 1,
    depth: 1,
    consumeOnFull: false,
    from: [],
    into: [],
    specialRecipe: 0,
    inStore: true,
    hideFromAll: false,
    requiredChampion: "",
    requiredAlly: "",
    stats: {
      FlatHPPoolMod: 0,
      rFlatHPModPerLevel: 0,
      FlatMPPoolMod: 0,
      rFlatMPModPerLevel: 0,
      PercentHPPoolMod: 0,
      PercentMPPoolMod: 0,
      FlatHPRegenMod: 0,
      rFlatHPRegenModPerLevel: 0,
      PercentHPRegenMod: 0,
      FlatMPRegenMod: 0,
      rFlatMPRegenModPerLevel: 0,
      PercentMPRegenMod: 0,
      FlatArmorMod: 0,
      rFlatArmorModPerLevel: 0,
      PercentArmorMod: 0,
      rFlatArmorPenetrationMod: 0,
      rFlatArmorPenetrationModPerLevel: 0,
      rPercentArmorPenetrationMod: 0,
      rPercentArmorPenetrationModPerLevel: 0,
      FlatPhysicalDamageMod: 0,
      rFlatPhysicalDamageModPerLevel: 0,
      PercentPhysicalDamageMod: 0,
      FlatMagicDamageMod: 0,
      rFlatMagicDamageModPerLevel: 0,
      PercentMagicDamageMod: 0,
      FlatMovementSpeedMod: 0,
      rFlatMovementSpeedModPerLevel: 0,
      PercentMovementSpeedMod: 0,
      rPercentMovementSpeedModPerLevel: 0,
      FlatAttackSpeedMod: 0,
      PercentAttackSpeedMod: 0,
      rPercentAttackSpeedModPerLevel: 0,
      rFlatDodgeMod: 0,
      rFlatDodgeModPerLevel: 0,
      PercentDodgeMod: 0,
      FlatCritChanceMod: 0,
      rFlatCritChanceModPerLevel: 0,
      PercentCritChanceMod: 0,
      FlatCritDamageMod: 0,
      rFlatCritDamageModPerLevel: 0,
      PercentCritDamageMod: 0,
      FlatBlockMod: 0,
      PercentBlockMod: 0,
      FlatSpellBlockMod: 0,
      rFlatSpellBlockModPerLevel: 0,
      PercentSpellBlockMod: 0,
      FlatEXPBonus: 0,
      PercentEXPBonus: 0,
      rPercentCooldownMod: 0,
      rPercentCooldownModPerLevel: 0,
      rFlatTimeDeadMod: 0,
      rFlatTimeDeadModPerLevel: 0,
      rPercentTimeDeadMod: 0,
      rPercentTimeDeadModPerLevel: 0,
      rFlatGoldPer10Mod: 0,
      rFlatMagicPenetrationMod: 0,
      rFlatMagicPenetrationModPerLevel: 0,
      rPercentMagicPenetrationMod: 0,
      rPercentMagicPenetrationModPerLevel: 0,
      FlatEnergyRegenMod: 0,
      rFlatEnergyRegenModPerLevel: 0,
      FlatEnergyPoolMod: 0,
      rFlatEnergyModPerLevel: 0,
      PercentLifeStealMod: 0,
      PercentSpellVampMod: 0
    },
    tags: [],
    maps: {
      "1": true,
      "8": true,
      "10": true,
      "12": true
    }
  },
  data: {
    "1001": {
      name: "Boots of Speed",
      description:
        "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed",
      colloq: ";",
      plaintext: "Slightly increases Movement Speed",
      into: ["3006", "3047", "3020", "3158", "3111", "3117", "3009"],
      image: {
        full: "1001.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 210
      },
      tags: ["Boots"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 25
      }
    },
    "1004": {
      name: "Faerie Charm",
      description: "<stats><mana>+25% Base Mana Regen </mana></stats>",
      colloq: ";",
      plaintext: "Slightly increases Mana Regen",
      into: ["3028", "3070", "3073", "3114"],
      image: {
        full: "1004.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 125,
        purchasable: true,
        total: 125,
        sell: 88
      },
      tags: ["ManaRegen"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "1006": {
      name: "Rejuvenation Bead",
      description: "<stats>+50% Base Health Regen </stats>",
      colloq: ";",
      plaintext: "Slightly increases Health Regen",
      into: ["3077", "3801", "3194"],
      image: {
        full: "1006.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 150,
        purchasable: true,
        total: 150,
        sell: 105
      },
      tags: ["HealthRegen"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "1011": {
      name: "Giant's Belt",
      description: "<stats>+380 Health</stats>",
      colloq: ";",
      plaintext: "Greatly increases Health",
      from: ["1028"],
      into: ["3083", "3084", "3022", "3143", "3742"],
      image: {
        full: "1011.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ["Health"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 380
      },
      depth: 2
    },
    "1018": {
      name: "Cloak of Agility",
      description: "<stats>+20% Critical Strike Chance</stats>",
      colloq: ";",
      plaintext: "Increases critical strike chance",
      into: ["3086", "3095", "3031", "3508"],
      image: {
        full: "1018.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ["CriticalStrike"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatCritChanceMod: 0.2
      }
    },
    "1026": {
      name: "Blasting Wand",
      description: "<stats>+40 Ability Power</stats>",
      colloq: ";",
      plaintext: "Moderately increases Ability Power",
      into: [
        "3135",
        "3029",
        "3151",
        "3027",
        "3100",
        "3102",
        "3116",
        "3165",
        "3285"
      ],
      image: {
        full: "1026.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 850,
        purchasable: true,
        total: 850,
        sell: 595
      },
      tags: ["SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 40
      }
    },
    "1027": {
      name: "Sapphire Crystal",
      description: "<stats><mana>+250 Mana</mana></stats>",
      colloq: ";blue",
      plaintext: "Increases Mana",
      into: ["3057", "3070", "3010", "3024", "3073", "1402", "1414", "3802"],
      image: {
        full: "1027.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
      },
      tags: ["Mana"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 250
      }
    },
    "1028": {
      name: "Ruby Crystal",
      description: "<stats>+150 Health</stats>",
      colloq: ";red",
      plaintext: "Increases Health",
      into: [
        "1011",
        "3075",
        "3211",
        "3136",
        "3068",
        "3010",
        "3801",
        "3044",
        "3052",
        "3053",
        "3067",
        "3814",
        "3116",
        "3748",
        "3751",
        "3916"
      ],
      image: {
        full: "1028.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 280
      },
      tags: ["Health"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 150
      }
    },
    "1029": {
      name: "Cloth Armor",
      description: "<stats>+15 Armor</stats>",
      colloq: ";",
      plaintext: "Slightly increases Armor",
      into: ["3047", "1031", "3191", "3024", "3082", "3076", "3105"],
      image: {
        full: "1029.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 210
      },
      tags: ["Armor"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatArmorMod: 15
      }
    },
    "1031": {
      name: "Chain Vest",
      description: "<stats>+40 Armor</stats>",
      colloq: ";",
      plaintext: "Greatly increases Armor",
      from: ["1029"],
      into: ["3068", "3109", "3026", "3193", "3742"],
      image: {
        full: "1031.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ["Armor"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatArmorMod: 40
      },
      depth: 2
    },
    "1033": {
      name: "Null-Magic Mantle",
      description: "<stats>+25 Magic Resist</stats>",
      colloq: ";",
      plaintext: "Slightly increases Magic Resist",
      into: [
        "3111",
        "3211",
        "1057",
        "3028",
        "3140",
        "3155",
        "3105",
        "3190",
        "3102",
        "3194"
      ],
      image: {
        full: "1033.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 315
      },
      tags: ["SpellBlock"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 25
      }
    },
    "1036": {
      name: "Long Sword",
      description: "<stats>+10 Attack Damage</stats>",
      colloq: ";",
      plaintext: "Slightly increases Attack Damage",
      into: [
        "3077",
        "3123",
        "1053",
        "3155",
        "3134",
        "3179",
        "3035",
        "3044",
        "3052",
        "3072",
        "3133",
        "3144",
        "3161"
      ],
      image: {
        full: "1036.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
      },
      tags: ["Damage", "Lane"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 10
      }
    },
    "1037": {
      name: "Pickaxe",
      description: "<stats>+25 Attack Damage</stats>",
      colloq: ";",
      plaintext: "Moderately increases Attack Damage",
      into: [
        "3124",
        "3004",
        "3008",
        "3031",
        "3036",
        "3053",
        "3074",
        "3814",
        "3812",
        "3139"
      ],
      image: {
        full: "1037.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 875,
        purchasable: true,
        total: 875,
        sell: 613
      },
      tags: ["Damage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 25
      }
    },
    "1038": {
      name: "B. F. Sword",
      description: "<stats>+40 Attack Damage</stats>",
      colloq: ";bf",
      plaintext: "Greatly increases Attack Damage",
      into: ["3095", "3026", "3031", "3072", "3161", "3508"],
      image: {
        full: "1038.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 1300,
        purchasable: true,
        total: 1300,
        sell: 910
      },
      tags: ["Damage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 40
      }
    },
    "1039": {
      name: "Hunter's Talisman",
      description:
        "<br><unique>UNIQUE Passive - Tooth:</unique> Damaging a monster with a spell or attack  steals 30 Health over 5 seconds and burns them for 60 magic damage. <mana>While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana.</mana> This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: ";jungle;Jungle",
      plaintext:
        "Provides damage against Monsters and Mana Regen in the Jungle",
      into: ["3706", "3715"],
      image: {
        full: "1039.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
      },
      tags: ["LifeSteal", "ManaRegen", "OnHit", "Jungle"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "60",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8"
      }
    },
    "1041": {
      name: "Hunter's Machete",
      description:
        "<stats>+10% Life Steal vs. Monsters</stats><br><br><unique>UNIQUE Passive - Nail:</unique> Basic attacks vs. Monsters deal 35 bonus damage on hit. This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: ";jungle;Jungle",
      plaintext: "Provides damage and life steal versus Monsters",
      into: ["3706", "3715"],
      image: {
        full: "1041.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
      },
      tags: ["LifeSteal", "OnHit", "Jungle"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "35",
        Effect2Amount: "0.1"
      }
    },
    "1042": {
      name: "Dagger",
      description: "<stats>+12% Attack Speed</stats>",
      colloq: ";",
      plaintext: "Slightly increases Attack Speed",
      into: ["1043", "3091", "3006", "2015", "3085", "3086", "3046", "3101"],
      image: {
        full: "1042.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 210
      },
      tags: ["AttackSpeed"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentAttackSpeedMod: 0.12
      }
    },
    "1043": {
      name: "Recurve Bow",
      description:
        "<stats>+25% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal an additional 15 physical damage on hit.",
      colloq: ";",
      plaintext: "Greatly increases Attack Speed",
      from: ["1042", "1042"],
      into: ["3091", "3153", "3124", "3675", "1416", "1419"],
      image: {
        full: "1043.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ["AttackSpeed", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentAttackSpeedMod: 0.25
      },
      effect: {
        Effect1Amount: "15"
      },
      depth: 2
    },
    "1052": {
      name: "Amplifying Tome",
      description: "<stats>+20 Ability Power</stats>",
      colloq: ";amptome",
      plaintext: "Slightly increases Ability Power",
      into: [
        "3108",
        "3191",
        "3136",
        "3135",
        "3145",
        "3113",
        "3124",
        "3116",
        "3673",
        "3802",
        "3916"
      ],
      image: {
        full: "1052.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 435,
        purchasable: true,
        total: 435,
        sell: 305
      },
      tags: ["SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 20
      }
    },
    "1053": {
      name: "Vampiric Scepter",
      description: "<stats>+15 Attack Damage<br>+10% Life Steal</stats>",
      colloq: ";",
      plaintext: "Basic attacks restore Health",
      from: ["1036"],
      into: ["3072", "3074", "3812", "3139", "3144", "3181"],
      image: {
        full: "1053.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 550,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ["Damage", "LifeSteal"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 15,
        PercentLifeStealMod: 0.1
      },
      depth: 2
    },
    "1054": {
      name: "Doran's Shield",
      description:
        "<stats>+80 Health</stats><br><br><passive>Passive: </passive>Restores 6 Health every 5 seconds.<br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.<br><unique>UNIQUE Passive:</unique> Regenerate up to 40 health over 8 seconds after taking damage from an enemy champion, based on percent missing health. (66% effective for Ranged Champions or Area of Effect and Periodic damage triggers)",
      colloq: ";dshield",
      plaintext: "Good defensive starting item",
      image: {
        full: "1054.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
      },
      tags: ["Health", "HealthRegen", "Lane"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 80,
        FlatHPRegenMod: 1.2
      },
      effect: {
        Effect1Amount: "8",
        Effect2Amount: "5",
        Effect3Amount: "40",
        Effect4Amount: "0.66"
      }
    },
    "1055": {
      name: "Doran's Blade",
      description:
        "<stats>+8 Attack Damage<br>+80 Health<br>+3% Life Steal</stats>",
      colloq: ";dblade",
      plaintext: "Good starting item for attackers",
      image: {
        full: "1055.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
      },
      tags: ["Damage", "Health", "Lane", "LifeSteal"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 8,
        FlatHPPoolMod: 80,
        PercentLifeStealMod: 0.03
      },
      effect: {
        Effect1Amount: "10"
      }
    },
    "1056": {
      name: "Doran's Ring",
      description:
        "<stats>+60 Health<br>+15 Ability Power<br><mana>+5 Mana per 5 seconds</mana></stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.",
      colloq: ";dring",
      plaintext: "Good starting item for casters",
      image: {
        full: "1056.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ["Health", "Lane", "ManaRegen", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 60,
        FlatMagicDamageMod: 15
      },
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "5"
      }
    },
    "1057": {
      name: "Negatron Cloak",
      description: "<stats>+40 Magic Resist</stats>",
      colloq: ";",
      plaintext: "Moderately increases Magic Resist",
      from: ["1033"],
      into: ["3091", "3193", "3001"],
      image: {
        full: "1057.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 270,
        purchasable: true,
        total: 720,
        sell: 504
      },
      tags: ["SpellBlock"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 40
      },
      depth: 2
    },
    "1058": {
      name: "Needlessly Large Rod",
      description: "<stats>+60 Ability Power</stats>",
      colloq: ";nlr",
      plaintext: "Greatly increases Ability Power",
      into: ["3089", "3907"],
      image: {
        full: "1058.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 1250,
        purchasable: true,
        total: 1250,
        sell: 875
      },
      tags: ["SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 60
      }
    },
    "1082": {
      name: "Dark Seal",
      description:
        "<stats>+10 Ability Power<br>+25% Increased Healing from Potions<br><mana>+100 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +3 Ability Power per Glory.  <br><unique>UNIQUE Passive - Do or Die:</unique> Grants 2 Glory for a champion kill or 1 Glory for an assist, up to 10 Glory total. Lose 4 Glory on death.",
      colloq: ";Noxian",
      plaintext:
        "Provides Ability Power and Mana.  Increases in power as you kill enemies.",
      into: ["3041"],
      image: {
        full: "1082.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 140
      },
      tags: ["HealthRegen", "SpellDamage", "Mana", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 100,
        FlatMagicDamageMod: 10
      },
      effect: {
        Effect1Amount: "0.25",
        Effect2Amount: "2",
        Effect3Amount: "1",
        Effect4Amount: "10",
        Effect5Amount: "3",
        Effect6Amount: "4"
      }
    },
    "1083": {
      name: "Cull",
      description:
        "<stats>+7 Attack Damage<br>+3 Life on Hit</stats><br><br><unique>UNIQUE Passive:</unique> Killing a lane minion grants 1 additional Gold. Killing 100 lane minions grants an additional 350 bonus gold immediately and disables this passive.",
      colloq: ";dblade",
      plaintext:
        "Provides damage and Life Steal on hit - Killing minions grant bonus Gold",
      image: {
        full: "1083.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
      },
      tags: ["Damage", "LifeSteal", "Lane"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 7
      },
      effect: {
        Effect1Amount: "3",
        Effect2Amount: "1",
        Effect3Amount: "100",
        Effect4Amount: "350"
      }
    },
    "1400": {
      name: "Enchantment: Warrior",
      description:
        "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Grants Attack Damage and Cooldown Reduction",
      from: ["3133", "3706"],
      hideFromAll: true,
      image: {
        full: "1400.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 60
      },
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "0.1",
        Effect7Amount: "2",
        Effect8Amount: "-0.2"
      },
      depth: 3
    },
    "1401": {
      name: "Enchantment: Cinderhulk",
      description:
        "<stats>+300 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> While in combat, burns nearby enemies for <scaleLevel>[12 to 29]</scaleLevel> magic damage a second. Once every 10 seconds, your next immobilizing spell deals <scaleLevel>[12 to 29]</scaleLevel> <scaleHealth>(+4% Your Bonus HP)</scaleHealth> bonus magic damage and releases a fire nova that also deals that bonus damage around you. Immolate's damage is increased by 300% damage to minions and monsters.<br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Grants Health and Immolate Aura",
      from: ["3751", "3706"],
      hideFromAll: true,
      image: {
        full: "1401.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: [],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "0.1",
        Effect7Amount: "2",
        Effect8Amount: "-0.2"
      },
      depth: 3
    },
    "1402": {
      name: "Enchantment: Runic Echoes",
      description:
        "<stats>+80 Ability Power<br>+10% Cooldown Reduction<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 25% of your missing Mana.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Grants Ability Power and periodically empowers your Spells",
      from: ["3108", "1027", "3706"],
      hideFromAll: true,
      image: {
        full: "1402.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: [],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "0.1",
        Effect7Amount: "2",
        Effect8Amount: "-0.2"
      },
      depth: 3
    },
    "1412": {
      name: "Enchantment: Warrior",
      description:
        "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Grants Attack Damage and Cooldown Reduction",
      from: ["3133", "3715"],
      hideFromAll: true,
      image: {
        full: "1412.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 60
      },
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "4",
        Effect7Amount: "3",
        Effect8Amount: "18",
        Effect9Amount: "2",
        Effect10Amount: "0.2",
        Effect11Amount: "0.1"
      },
      depth: 3
    },
    "1413": {
      name: "Enchantment: Cinderhulk",
      description:
        "<stats>+300 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> While in combat, burns nearby enemies for <scaleLevel>[12 to 29]</scaleLevel> magic damage a second. Once every 10 seconds, your next immobilizing spell deals <scaleLevel>[12 to 29]</scaleLevel> <scaleHealth>(+4% Your Bonus HP)</scaleHealth> bonus magic damage and releases a fire nova that also deals that bonus damage around you. Immolate's damage is increased by 300% damage to minions and monsters.<br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Grants Health and Immolate Aura",
      from: ["3751", "3715"],
      hideFromAll: true,
      image: {
        full: "1413.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: [],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "4",
        Effect7Amount: "3",
        Effect8Amount: "18",
        Effect9Amount: "2",
        Effect10Amount: "0.2",
        Effect11Amount: "0.1"
      },
      depth: 3
    },
    "1414": {
      name: "Enchantment: Runic Echoes",
      description:
        "<stats>+80 Ability Power<br>+10% Cooldown Reduction<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 25% of your missing Mana.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Grants Ability Power and periodically empowers your Spells",
      from: ["3108", "1027", "3715"],
      hideFromAll: true,
      image: {
        full: "1414.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: [],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "4",
        Effect7Amount: "3",
        Effect8Amount: "18",
        Effect9Amount: "2",
        Effect10Amount: "0.2",
        Effect11Amount: "0.1"
      },
      depth: 3
    },
    "1416": {
      name: "Enchantment: Bloodrazor",
      description:
        "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext:
        "Increases Attack Speed and deals damage based on the target's Health",
      from: ["1043", "3706"],
      hideFromAll: true,
      image: {
        full: "1416.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 625,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "0.1",
        Effect7Amount: "2",
        Effect8Amount: "-0.2"
      },
      depth: 3
    },
    "1419": {
      name: "Enchantment: Bloodrazor",
      description:
        "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext:
        "Increases Attack Speed and deals damage based on the target's Health",
      from: ["1043", "3715"],
      hideFromAll: true,
      image: {
        full: "1419.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 625,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "4",
        Effect7Amount: "3",
        Effect8Amount: "18",
        Effect9Amount: "2",
        Effect10Amount: "0.2",
        Effect11Amount: "0.1"
      },
      depth: 3
    },
    "2003": {
      name: "Health Potion",
      description:
        "<groupLimit>Limited to 5 at one time. Limited to 1 type of Healing Potion.</groupLimit><br><br><consumable>Click to Consume:</consumable> Restores 150 Health over 15 seconds.",
      colloq: ";",
      plaintext: "Consume to restore Health over time",
      stacks: 5,
      consumed: true,
      image: {
        full: "2003.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 50,
        purchasable: true,
        total: 50,
        sell: 20
      },
      tags: ["Consumable", "Jungle", "Lane"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "150",
        Effect2Amount: "15"
      }
    },
    "2006": {
      name: "Showdown Health Potion",
      description:
        "<groupLimit>Limited to 2 at one time. Limited to 1 type of Healing Potion.</groupLimit><br><br><consumable>Click to Consume:</consumable> Restores 150 Health over 15 seconds.",
      colloq: ";",
      plaintext: "Consume to restore Health over time",
      stacks: 2,
      consumed: true,
      image: {
        full: "2006.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 50,
        purchasable: true,
        total: 50,
        sell: 20
      },
      tags: ["Consumable", "Jungle", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "150",
        Effect2Amount: "15"
      }
    },
    "2009": {
      name: "Total Biscuit of Rejuvenation",
      description:
        "<consumable>Click to Consume:</consumable> Restores 80 Health and 50 Mana over 10 seconds.",
      colloq: ";",
      plaintext: "",
      consumed: true,
      inStore: false,
      image: {
        full: "2009.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "2010": {
      name: "Total Biscuit of Everlasting Will",
      description:
        "<consumable>Click to Consume:</consumable> Restores 10% of missing Health and Mana over 5 seconds.",
      colloq: ";",
      plaintext: "",
      stacks: 10,
      consumed: true,
      inStore: false,
      hideFromAll: true,
      image: {
        full: "2010.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 75,
        purchasable: false,
        total: 75,
        sell: 30
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "10"
      }
    },
    "2015": {
      name: "Kircheis Shard",
      description:
        "<stats>+15% Attack Speed</stats><br><br><unique>UNIQUE Passive - Energized:</unique> Moving and attacking will make an attack <a href='Energized'>Energized</a>. <br><unique>UNIQUE Passive - Jolt:</unique> Energized attacks gain <magicDamage>80 bonus magic damage</magicDamage>.",
      colloq: ";",
      plaintext: "Attack speed and a chargable magic hit",
      from: ["1042"],
      into: ["3094", "3095", "3087"],
      image: {
        full: "2015.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 700,
        sell: 490
      },
      tags: ["AttackSpeed", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentAttackSpeedMod: 0.15
      },
      effect: {
        Effect1Amount: "80"
      },
      depth: 2
    },
    "2031": {
      name: "Refillable Potion",
      description:
        "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.",
      colloq: ";",
      plaintext: "Restores Health over time. Refills at shop.",
      into: ["2033"],
      image: {
        full: "2031.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 150,
        purchasable: true,
        total: 150,
        sell: 60
      },
      tags: ["HealthRegen", "Consumable", "Active", "Lane", "Jungle"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "125",
        Effect2Amount: "0",
        Effect3Amount: "12",
        Effect4Amount: "2"
      }
    },
    "2033": {
      name: "Corrupting Potion",
      description:
        "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health and 75 Mana over 12 seconds and grants <font color='#FF8811'><u>Touch of Corruption</u></font> during that time. Holds up to 3 charges that refills upon visiting the shop.<br><br><font color='#FF8811'><u>Touch of Corruption:</u></font> Damaging spells and attacks burn enemy champions for 15 magic damage over 3 seconds. (50% Damage for Area of Effect or Damage over Time spells. Damage increases with champion level.)<br><br><rules>(Corrupting Potion can be used even at full Health and Mana.)</rules>",
      colloq: ";",
      plaintext:
        "Restores Health and Mana over time and boosts combat power - Refills at Shop",
      from: ["2031"],
      image: {
        full: "2033.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 500,
        sell: 200
      },
      tags: ["Active", "Consumable", "HealthRegen", "Lane", "ManaRegen"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "125",
        Effect2Amount: "75",
        Effect3Amount: "12",
        Effect4Amount: "3",
        Effect5Amount: "10",
        Effect6Amount: "0.1",
        Effect7Amount: "15",
        Effect8Amount: "3",
        Effect9Amount: "0.5"
      },
      depth: 2
    },
    "2047": {
      name: "Oracle's Extract",
      description:
        "<consumable>Click to Consume:</consumable> Grants detection of nearby invisible or unseen enemy units for 5 minutes.",
      colloq: ";",
      plaintext: "Allows champion to see invisible or unseen enemy units",
      consumed: true,
      consumeOnFull: true,
      image: {
        full: "2047.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 120
      },
      tags: ["Consumable", "Stealth", "Vision"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "2051": {
      name: "Guardian's Horn",
      description:
        "<stats>+150 Health</stats><br><br><passive>Passive: </passive>Restores 20 Health every 5 seconds.<br><unique>UNIQUE Passive:</unique> Blocks 12 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).<br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
      colloq:
        "Golden Arm of Kobe;Golden Bicep of Kobe;Horn; Horn of the ManWolf; ManWolf",
      plaintext: "Good starting item for tanks",
      image: {
        full: "2051.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 380
      },
      tags: ["Health", "HealthRegen", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 150,
        FlatHPRegenMod: 4
      },
      effect: {
        Effect1Amount: "12",
        Effect2Amount: "0.25"
      }
    },
    "2052": {
      name: "Poro-Snax",
      description:
        "This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br><br><i>All proceeds will be donated towards fighting Noxian animal cruelty.</i>",
      colloq: ";",
      plaintext: "",
      stacks: 2,
      consumed: true,
      inStore: false,
      image: {
        full: "2052.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "2054": {
      name: "Diet Poro-Snax",
      description:
        "All the flavor of regular Poro-Snax, without the calories! Keeps your Poro happy AND healthy.<br><br><consumable>Click to Consume:</consumable> Gives your Poros a delicious healthy treat.",
      colloq: "",
      plaintext: "",
      consumed: true,
      inStore: false,
      image: {
        full: "2054.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "2055": {
      name: "Control Ward",
      description:
        "<groupLimit>Can only carry 2 Control Wards in inventory.</groupLimit><br><br><consumable>Click to Consume:</consumable> Places a ward that grants vision of the surrounding area. This device will also reveal invisible traps and reveal / disable wards. Control Wards do not disable other Control Wards. Camouflaged units will also be revealed. <br><br>Limit 1 <font color='#BBFFFF'>Control Ward</font> on the map per player.",
      colloq: "orange;",
      plaintext: "Used to disable wards and invisible traps in an area.",
      stacks: 2,
      consumed: true,
      image: {
        full: "2055.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 75,
        purchasable: true,
        total: 75,
        sell: 30
      },
      tags: ["Consumable", "Lane", "Stealth", "Vision"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "1",
        Effect2Amount: "2"
      }
    },
    "2065": {
      name: "Shurelya's Reverie",
      description:
        "<stats>+300 Health<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana><br>+100% Base Health Regen <br></stats><br><unique>UNIQUE Passive:</unique> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Grants yourself and nearby allies +40% Movement Speed for 3 seconds. (90 second cooldown).",
      colloq: ";shurelya;reverie;",
      plaintext: "Activate to speed up nearby allies.",
      from: ["3114", "3801"],
      image: {
        full: "2065.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2050,
        sell: 1435
      },
      tags: [
        "Health",
        "HealthRegen",
        "ManaRegen",
        "Active",
        "CooldownReduction",
        "NonbootsMovement"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: "0.4",
        Effect2Amount: "3",
        Effect3Amount: "90",
        Effect4Amount: "-0.1",
        Effect5Amount: "0",
        Effect6Amount: "2",
        Effect7Amount: "0.1",
        Effect8Amount: "1000"
      },
      depth: 3
    },
    "2138": {
      name: "Elixir of Iron",
      description:
        "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +300 Health, 25% Tenacity, increased champion size, and <font color='#FF8811'><u>Path of Iron</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Path of Iron:</u></font> Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>",
      colloq: ";white",
      plaintext:
        "Temporarily increases defenses. Leaves a trail for allies to follow.",
      consumed: true,
      consumeOnFull: true,
      image: {
        full: "2138.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 500,
        sell: 200
      },
      tags: ["Health", "Consumable", "NonbootsMovement", "Tenacity"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "300",
        Effect2Amount: "0.25",
        Effect3Amount: "3",
        Effect4Amount: "0.15",
        Effect5Amount: "0.15",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "9"
      }
    },
    "2139": {
      name: "Elixir of Sorcery",
      description:
        "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +50 Ability Power, 15 bonus Mana Regen per 5 seconds and <font color='#FF8811'><u>Sorcery</u></font> for 3 minutes. <br><br><font color='#FF8811'><u>Sorcery:</u></font> Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules><br>",
      colloq: ";blue",
      plaintext:
        "Temporarily grants Ability Power and Bonus Damage to champions and turrets.",
      consumed: true,
      consumeOnFull: true,
      image: {
        full: "2139.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 500,
        sell: 200
      },
      tags: ["Consumable", "ManaRegen", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "50",
        Effect2Amount: "50",
        Effect3Amount: "25",
        Effect4Amount: "3",
        Effect5Amount: "5",
        Effect6Amount: "3",
        Effect7Amount: "0",
        Effect8Amount: "9"
      }
    },
    "2140": {
      name: "Elixir of Wrath",
      description:
        "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +30 Attack Damage and <font color='#FF8811'><u>Bloodlust</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Bloodlust:</u></font> Dealing physical damage to champions heals for 15% of the damage dealt.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>",
      colloq: ";red",
      plaintext:
        "Temporarily grants Attack Damage and heals you when dealing physical damage to champions.",
      consumed: true,
      consumeOnFull: true,
      image: {
        full: "2140.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 500,
        sell: 200
      },
      tags: ["Consumable", "Damage", "LifeSteal", "SpellVamp"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "30",
        Effect2Amount: "30",
        Effect3Amount: "0.15",
        Effect4Amount: "3",
        Effect5Amount: "0",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "9"
      }
    },
    "2403": {
      name: "Minion Dematerializer",
      description:
        "<consumable>Click to Consume:</consumable> Kill target Lane Minion (550 Range, 10 Second Cooldown).",
      colloq: ";",
      plaintext: "",
      stacks: 10,
      consumed: true,
      inStore: false,
      hideFromAll: true,
      image: {
        full: "2403.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "2419": {
      name: "Commencing Stopwatch",
      description:
        "Transforms into a Stopwatch after 14 minutes. Takedowns reduce this timer by 2 minutes. That Stopwatch contributes 250 gold for the items it builds into.<br><br><rules>(Stopwatch normally contributes 650 gold)</rules>",
      colloq: "",
      plaintext: "",
      inStore: false,
      into: ["2420"],
      image: {
        full: "2419.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "2420": {
      name: "Stopwatch",
      description:
        "<active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (One time use).",
      colloq: ";zhg;zonyas",
      plaintext: "Activate to become invincible but unable to take actions",
      into: ["3157", "3026", "3193"],
      image: {
        full: "2420.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 650,
        sell: 260
      },
      tags: ["Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "2.5"
      }
    },
    "2421": {
      name: "Broken Stopwatch",
      description:
        "<unique>UNIQUE Passive:</unique> Is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you Broken Stopwatches.</rules>",
      colloq: ";",
      plaintext: "Upgrades to stopwatch",
      hideFromAll: true,
      into: ["3157", "3026", "3193"],
      image: {
        full: "2421.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 650,
        sell: 260
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "300"
      }
    },
    "2422": {
      name: "Slightly Magical Boots",
      description:
        "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed<br><br><unique>UNIQUE Passive:</unique> +10 Movement Speed<br><br>Boots that build from Slightly Magical Boots retain the +10 Movement Speed.",
      colloq: ";",
      plaintext: "Slightly increases Movement Speed",
      inStore: false,
      into: ["3006", "3047", "3020", "3158", "3111", "3117", "3009"],
      image: {
        full: "2422.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: false,
        total: 300,
        sell: 210
      },
      tags: ["Boots"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 25
      }
    },
    "2423": {
      name: "Stopwatch",
      description:
        "<active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (One time use).",
      colloq: "",
      plaintext: "",
      inStore: false,
      into: ["3157", "3026", "3193"],
      image: {
        full: "2423.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: false,
        total: 650,
        sell: 260
      },
      tags: ["Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "2.5"
      }
    },
    "2424": {
      name: "Broken Stopwatch",
      description:
        "<unique>UNIQUE Passive:</unique> Is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you Broken Stopwatches.</rules>",
      colloq: "",
      plaintext: "",
      inStore: false,
      hideFromAll: true,
      into: ["3157", "3026", "3193"],
      image: {
        full: "2424.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: false,
        total: 650,
        sell: 260
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "300"
      }
    },
    "3001": {
      name: "Abyssal Mask",
      description:
        "<stats>+350 Health<br><mana>+300 Mana</mana><br>+55 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><aura>UNIQUE Aura:</aura> Nearby enemy champions take 15% more magic damage.",
      colloq: ";",
      plaintext: "Nearby enemies take more magic damage",
      from: ["3010", "1057"],
      into: ["3379"],
      image: {
        full: "3001.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 1180,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: [
        "Health",
        "SpellBlock",
        "HealthRegen",
        "Mana",
        "ManaRegen",
        "Aura",
        "CooldownReduction",
        "MagicPenetration"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 350,
        FlatSpellBlockMod: 55,
        FlatMPPoolMod: 300
      },
      effect: {
        Effect1Amount: "-10",
        Effect2Amount: "-25",
        Effect3Amount: "0.15",
        Effect4Amount: "25",
        Effect5Amount: "0.2",
        Effect6Amount: "0.15",
        Effect7Amount: "325"
      },
      depth: 3
    },
    "3003": {
      name: "Archangel's Staff",
      description:
        "<stats>+50 Ability Power<br><mana>+650 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 1% of maximum Mana. Refunds 25% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +8 maximum Mana (max +750 Mana) for each Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>",
      colloq: ";aa",
      plaintext: "Increases Ability Power based on maximum Mana",
      from: ["3070", "3802"],
      image: {
        full: "3003.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 1050,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ["SpellDamage", "Mana", "ManaRegen", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 650,
        FlatMagicDamageMod: 50
      },
      effect: {
        Effect1Amount: "0.01",
        Effect2Amount: "8",
        Effect3Amount: "750",
        Effect4Amount: "2",
        Effect5Amount: "8",
        Effect6Amount: "0",
        Effect7Amount: "0.25",
        Effect8Amount: "3",
        Effect9Amount: "12",
        Effect10Amount: "-0.1"
      },
      depth: 3
    },
    "3004": {
      name: "Manamune",
      description:
        "<stats>+35 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +5 maximum Mana (max +750 Mana) for each basic attack or Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>",
      colloq: ";",
      plaintext: "Increases Attack Damage based on maximum Mana",
      from: ["3070", "1037"],
      image: {
        full: "3004.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 675,
        purchasable: true,
        total: 2400,
        sell: 1680
      },
      tags: ["Damage", "Mana", "ManaRegen", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: "0.02",
        Effect2Amount: "4",
        Effect3Amount: "750",
        Effect4Amount: "2",
        Effect5Amount: "8",
        Effect6Amount: "1",
        Effect7Amount: "0.15",
        Effect8Amount: "5",
        Effect9Amount: "3",
        Effect10Amount: "12"
      },
      depth: 3
    },
    "3006": {
      name: "Berserker's Greaves",
      description:
        "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats> +35% Attack Speed</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
      colloq: ";",
      plaintext: "Enhances Movement Speed and Attack Speed",
      from: ["1001", "1042"],
      image: {
        full: "3006.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["AttackSpeed", "Boots"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 45,
        PercentAttackSpeedMod: 0.35
      },
      depth: 2
    },
    "3007": {
      name: "Archangel's Staff (Quick Charge)",
      description:
        "<stats>+50 Ability Power<br><mana>+650 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 1% of maximum Mana. Refunds 25% of Mana spent. <br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +12 maximum Mana (max +750 Mana) for each Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>",
      colloq: ";aa",
      plaintext: "Increases Ability Power based on maximum Mana",
      from: ["3073", "3802"],
      image: {
        full: "3007.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1050,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ["SpellDamage", "Mana", "ManaRegen", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 650,
        FlatMagicDamageMod: 50
      },
      effect: {
        Effect1Amount: "0.01",
        Effect2Amount: "12",
        Effect3Amount: "750",
        Effect4Amount: "2",
        Effect5Amount: "8",
        Effect6Amount: "0",
        Effect7Amount: "0.25",
        Effect8Amount: "3",
        Effect9Amount: "12",
        Effect10Amount: "-0.1"
      },
      depth: 3
    },
    "3008": {
      name: "Manamune (Quick Charge)",
      description:
        "<stats>+35 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +6 maximum Mana (max +750 Mana) for each basic attack or Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>",
      colloq: ";",
      plaintext: "Increases Attack Damage based on maximum Mana",
      from: ["3073", "1037"],
      image: {
        full: "3008.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 675,
        purchasable: true,
        total: 2400,
        sell: 1680
      },
      tags: ["Damage", "Mana", "ManaRegen", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: "0.02",
        Effect2Amount: "6",
        Effect3Amount: "750",
        Effect4Amount: "2",
        Effect5Amount: "8",
        Effect6Amount: "1",
        Effect7Amount: "0.15",
        Effect8Amount: "6",
        Effect9Amount: "3",
        Effect10Amount: "12"
      },
      depth: 3
    },
    "3009": {
      name: "Boots of Swiftness",
      description:
        "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +55 Movement Speed<br><unique>UNIQUE Passive - Slow Resist:</unique> Movement slowing effects are reduced by 25%.",
      colloq: ";",
      plaintext: "Enhances Movement Speed and reduces the effect of slows",
      from: ["1001"],
      image: {
        full: "3009.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ["Boots"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 55
      },
      effect: {
        Effect1Amount: "0.25"
      },
      depth: 2
    },
    "3010": {
      name: "Catalyst of Aeons",
      description:
        "<stats>+225 Health<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. <br><br>Spending Mana restores 20% of the cost as Health, up to 15 per spell cast.  <br><br><rules>(Toggled Spells heal for a maximum of 15 per second.)</rules>",
      colloq: ";",
      plaintext: "Spend Mana to recover Health",
      from: ["1028", "1027"],
      into: ["3027", "3029", "3001"],
      image: {
        full: "3010.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["Health", "HealthRegen", "Mana", "ManaRegen"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 225,
        FlatMPPoolMod: 300
      },
      effect: {
        Effect1Amount: "150",
        Effect2Amount: "200",
        Effect3Amount: "8",
        Effect4Amount: "15",
        Effect5Amount: "0.2",
        Effect6Amount: "0.15"
      },
      depth: 2
    },
    "3020": {
      name: "Sorcerer's Shoes",
      description:
        "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats>+18 <a href='FlatMagicPen'>Magic Penetration</a></stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
      colloq: ";",
      plaintext: "Enhances Movement Speed and magic damage",
      from: ["1001"],
      image: {
        full: "3020.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["Boots", "MagicPenetration"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 45
      },
      effect: {
        Effect1Amount: "18"
      },
      depth: 2
    },
    "3022": {
      name: "Frozen Mallet",
      description:
        "<stats>+700 Health<br>+30 Attack Damage</stats><br><br><unique>UNIQUE Passive - Icy:</unique> Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 20% slow for ranged attacks).",
      colloq: ";fm",
      plaintext: "Basic attacks slow enemies",
      from: ["3052", "1011"],
      image: {
        full: "3022.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 3100,
        sell: 2170
      },
      tags: ["Damage", "Health", "OnHit", "Slow"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 30,
        FlatHPPoolMod: 700
      },
      effect: {
        Effect1Amount: "1.5",
        Effect2Amount: "0.4",
        Effect3Amount: "0.2"
      },
      depth: 3
    },
    "3024": {
      name: "Glacial Shroud",
      description:
        "<stats>+20 Armor<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      colloq: ";",
      plaintext: "Increases Armor and Cooldown Reduction",
      from: ["1027", "1029"],
      into: ["3110", "3025", "3050", "3800"],
      image: {
        full: "3024.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ["Armor", "CooldownReduction", "Mana"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 250,
        FlatArmorMod: 20
      },
      effect: {
        Effect1Amount: "-0.1"
      },
      depth: 2
    },
    "3025": {
      name: "Iceborn Gauntlet",
      description:
        "<stats>+65 Armor<br>+20% Cooldown Reduction<br><mana>+500 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.",
      colloq: ";frozen fist",
      plaintext: "Basic attacks create a slow field after spell cast",
      from: ["3057", "3024"],
      into: ["3387"],
      image: {
        full: "3025.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 750,
        purchasable: true,
        total: 2700,
        sell: 1890
      },
      tags: ["Armor", "Mana", "CooldownReduction", "Slow"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 500,
        FlatArmorMod: 65
      },
      effect: {
        Effect1Amount: "-0.2",
        Effect2Amount: "1",
        Effect3Amount: "2",
        Effect4Amount: "-0.3",
        Effect5Amount: "1.5"
      },
      depth: 3
    },
    "3026": {
      name: "Guardian Angel",
      description:
        "<stats>+45 Attack Damage<br>+40 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Upon taking lethal damage, restores 50% of base Health and 30% of maximum Mana after 4 seconds of stasis (300 second cooldown).",
      colloq: ";ga",
      plaintext: "Periodically revives champion upon death",
      from: ["1038", "1031", "2420"],
      image: {
        full: "3026.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 50,
        purchasable: true,
        total: 2800,
        sell: 1120
      },
      tags: ["Armor", "Damage"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 45,
        FlatArmorMod: 40
      },
      effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "4",
        Effect3Amount: "300",
        Effect4Amount: "0.3"
      },
      depth: 3
    },
    "3027": {
      name: "Rod of Ages",
      description:
        "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
      colloq: ";roa",
      plaintext: "Greatly increases Health, Mana, and Ability Power",
      from: ["3010", "1026"],
      image: {
        full: "3027.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ["Health", "HealthRegen", "Mana", "ManaRegen", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 60
      },
      effect: {
        Effect1Amount: "20",
        Effect2Amount: "10",
        Effect3Amount: "4",
        Effect4Amount: "1",
        Effect5Amount: "10",
        Effect6Amount: "150",
        Effect7Amount: "200",
        Effect8Amount: "8",
        Effect9Amount: "25",
        Effect10Amount: "0.2",
        Effect11Amount: "0.15"
      },
      depth: 3
    },
    "3028": {
      name: "Chalice of Harmony",
      description:
        "<stats>+30 Magic Resist<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.",
      colloq: ";",
      plaintext: "Increases Mana and Health Regeneration",
      from: ["1004", "1033", "1004"],
      into: ["3174", "3222"],
      image: {
        full: "3028.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 100,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ["SpellBlock", "HealthRegen", "ManaRegen"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 30
      },
      effect: {
        Effect1Amount: "2",
        Effect2Amount: "5",
        Effect3Amount: "600",
        Effect4Amount: "180",
        Effect5Amount: "8",
        Effect6Amount: "1",
        Effect7Amount: "1"
      },
      depth: 2
    },
    "3029": {
      name: "Rod of Ages (Quick Charge)",
      description:
        "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per 40 seconds (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
      colloq: ";roa",
      plaintext: "Greatly increases Health, Mana, and Ability Power",
      from: ["3010", "1026"],
      image: {
        full: "3029.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ["Health", "HealthRegen", "Mana", "ManaRegen", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 60
      },
      effect: {
        Effect1Amount: "20",
        Effect2Amount: "10",
        Effect3Amount: "4",
        Effect4Amount: "1",
        Effect5Amount: "10",
        Effect6Amount: "150",
        Effect7Amount: "200",
        Effect8Amount: "8",
        Effect9Amount: "25",
        Effect10Amount: "0.2",
        Effect11Amount: "0.15"
      },
      depth: 3
    },
    "3030": {
      name: "Hextech GLP-800",
      description:
        "<stats>+80 Ability Power<br><mana>+600 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><unique>UNIQUE Active - Frost Bolt:</unique> Fires a spray of icy bolts that explode on first unit hit, dealing <scaleLevel>100 - 200</scaleLevel> (+20% of your Ability Power) magic damage to all enemies hit. (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br> Enemies hit are slowed by 65% decaying over 2 second.",
      colloq: "frost cannon;",
      plaintext: "Activate to fire icy bolts to slow enemies",
      from: ["3802", "3145"],
      image: {
        full: "3030.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ["SpellDamage", "Mana", "Active", "CooldownReduction", "Slow"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 600,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "2",
        Effect5Amount: "0.65",
        Effect6Amount: "100",
        Effect7Amount: "200",
        Effect8Amount: "0.2",
        Effect9Amount: "25",
        Effect10Amount: "0.2",
        Effect11Amount: "0.15",
        Effect12Amount: "40",
        Effect13Amount: "-0.1",
        Effect14Amount: "10",
        Effect15Amount: "-0.65"
      },
      depth: 3
    },
    "3031": {
      name: "Infinity Edge",
      description:
        "<stats>+80 Attack Damage<br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical strikes deal 225% damage instead of 200%.",
      colloq: ";ie",
      plaintext: "Massively enhances critical strikes",
      from: ["1038", "1037", "1018"],
      into: ["3371"],
      image: {
        full: "3031.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 425,
        purchasable: true,
        total: 3400,
        sell: 2380
      },
      tags: ["CriticalStrike", "Damage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 80,
        FlatCritChanceMod: 0.25
      },
      effect: {
        Effect1Amount: "2.25"
      },
      depth: 2
    },
    "3033": {
      name: "Mortal Reminder",
      description:
        "<stats>+45 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +25% <a href='FlatArmorPen'>Armor Penetration</a><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 5 seconds.",
      colloq: ";lw;grievous",
      plaintext: "Overcomes enemies with high Health recovery and Armor",
      from: ["3035", "3123"],
      image: {
        full: "3033.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 550,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ["ArmorPenetration", "Damage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 45
      },
      effect: {
        Effect1Amount: "5",
        Effect2Amount: "0.25"
      },
      depth: 3
    },
    "3035": {
      name: "Last Whisper",
      description:
        "<stats>+20 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +20% <a href='FlatArmorPen'>Armor Penetration</a>",
      colloq: ";lw",
      plaintext: "Overcomes enemies with high Armor",
      from: ["1036", "1036"],
      into: ["3033", "3036"],
      image: {
        full: "3035.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 750,
        purchasable: true,
        total: 1450,
        sell: 1015
      },
      tags: ["ArmorPenetration", "Damage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 20
      },
      effect: {
        Effect1Amount: "0.25",
        Effect2Amount: "0.35",
        Effect3Amount: "0.2"
      },
      depth: 2
    },
    "3036": {
      name: "Lord Dominik's Regards",
      description:
        "<stats>+45 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +35% <a href='FlatArmorPen'>Armor Penetration</a>",
      colloq: ";lw",
      plaintext: "Overcomes enemies with high health and armor",
      from: ["3035", "1037"],
      image: {
        full: "3036.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 475,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ["Damage", "ArmorPenetration"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 45
      },
      effect: {
        Effect1Amount: "0.35"
      },
      depth: 3
    },
    "3040": {
      name: "Seraph's Embrace",
      description:
        "<stats>+50 Ability Power<br><mana>+1400 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 15% of current Mana to grant a shield for 2 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).<br><br><groupLimit>Limited to 1 Tear item.</groupLimit>",
      colloq: ";",
      plaintext: "",
      specialRecipe: 3003,
      inStore: false,
      image: {
        full: "3040.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 3200,
        purchasable: false,
        total: 3200,
        sell: 2240
      },
      tags: ["Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 1400,
        FlatMagicDamageMod: 50
      },
      effect: {
        Effect1Amount: "0.03",
        Effect2Amount: "0.15",
        Effect3Amount: "2",
        Effect4Amount: "150",
        Effect5Amount: "120",
        Effect6Amount: "0",
        Effect7Amount: "0.25",
        Effect8Amount: "-0.1"
      }
    },
    "3041": {
      name: "Mejai's Soulstealer",
      description:
        "<stats>+20 Ability Power<br><mana>+200 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +5 Ability Power per Glory. Grants 10% Movement Speed if you have at least 10 Glory.<br><unique>UNIQUE Passive - Do or Die:</unique> Grants 4 Glory for a champion kill or 2 Glory for an assist, up to 25 Glory total. Lose 10 stacks of Glory upon dying.",
      colloq: ";",
      plaintext: "Grants Ability Power for kills and assists",
      from: ["1082"],
      image: {
        full: "3041.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 1050,
        purchasable: true,
        total: 1400,
        sell: 980
      },
      tags: ["SpellDamage", "Mana"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 200,
        FlatMagicDamageMod: 20
      },
      effect: {
        Effect1Amount: "5",
        Effect2Amount: "4",
        Effect3Amount: "2",
        Effect4Amount: "25",
        Effect5Amount: "0.5",
        Effect6Amount: "0.1",
        Effect7Amount: "10",
        Effect8Amount: "10"
      },
      depth: 2
    },
    "3042": {
      name: "Muramana",
      description:
        "<stats>+35 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>",
      colloq: ";",
      plaintext: "",
      specialRecipe: 3004,
      inStore: false,
      image: {
        full: "3042.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 2400,
        purchasable: false,
        total: 2400,
        sell: 1680
      },
      tags: ["OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 1000
      },
      effect: {
        Effect1Amount: "0.15"
      }
    },
    "3043": {
      name: "Muramana",
      description:
        "<stats>+35 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3008,
      inStore: false,
      image: {
        full: "3043.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 2400,
        purchasable: false,
        total: 2400,
        sell: 1680
      },
      tags: ["OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 1000
      },
      effect: {
        Effect1Amount: "0.15"
      }
    },
    "3044": {
      name: "Phage",
      description:
        "<stats>+200 Health<br>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.",
      colloq: ";",
      plaintext: "Attacks and kills give a small burst of speed",
      from: ["1028", "1036"],
      into: ["3078", "3071"],
      image: {
        full: "3044.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1250,
        sell: 875
      },
      tags: ["Damage", "Health", "NonbootsMovement", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 15,
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: "20",
        Effect2Amount: "2",
        Effect3Amount: "60"
      },
      depth: 2
    },
    "3046": {
      name: "Phantom Dancer",
      description:
        "<stats>+30% Attack Speed<br>+25% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Spectral Waltz:</unique> Basic attacking a champion grants ghosting and 7% Movement Speed for 2 seconds.<br><unique>UNIQUE Passive - Lifeline:</unique> If you would take damage that would reduce your Health below 30%, gain a shield that absorbs up to 240 - 600 damage for 2 seconds. (90 second cooldown)",
      colloq: ";pd",
      plaintext:
        "Move faster while attacking enemies and gain a shield when on low health.",
      from: ["1042", "3086"],
      image: {
        full: "3046.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ["AttackSpeed", "CriticalStrike", "NonbootsMovement"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentMovementSpeedMod: 0.05,
        PercentAttackSpeedMod: 0.3
      },
      effect: {
        Effect1Amount: "0.24",
        Effect2Amount: "10",
        Effect3Amount: "550",
        Effect4Amount: "0.07",
        Effect5Amount: "0.3",
        Effect6Amount: "2.5",
        Effect7Amount: "90",
        Effect8Amount: "240",
        Effect9Amount: "600",
        Effect10Amount: "40",
        Effect11Amount: "5",
        Effect12Amount: "0.3",
        Effect13Amount: "0.7",
        Effect14Amount: "2",
        Effect15Amount: "300",
        Effect16Amount: "1",
        Effect17Amount: "0.4",
        Effect18Amount: "9"
      },
      depth: 3
    },
    "3047": {
      name: "Ninja Tabi",
      description:
        "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats>+20 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Blocks 12% of the damage from basic attacks.<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
      colloq: ";",
      plaintext:
        "Enhances Movement Speed and reduces incoming basic attack damage",
      from: ["1001", "1029"],
      image: {
        full: "3047.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["Armor", "Boots"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 45,
        FlatArmorMod: 20
      },
      effect: {
        Effect1Amount: "0.12"
      },
      depth: 2
    },
    "3048": {
      name: "Seraph's Embrace",
      description:
        "<stats>+50 Ability Power<br><mana>+1400 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 15% of current Mana to grant a shield for 2 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).<br><br><groupLimit>Limited to 1 Tear item.</groupLimit>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3007,
      inStore: false,
      image: {
        full: "3048.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 3200,
        purchasable: false,
        total: 3200,
        sell: 2240
      },
      tags: ["Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 1400,
        FlatMagicDamageMod: 50
      },
      effect: {
        Effect1Amount: "0.03",
        Effect2Amount: "0.15",
        Effect3Amount: "2",
        Effect4Amount: "150",
        Effect5Amount: "120",
        Effect6Amount: "0",
        Effect7Amount: "0.25",
        Effect8Amount: "-0.1"
      }
    },
    "3050": {
      name: "Zeke's Convergence",
      description:
        "<stats>+60 Armor<br>+30 Magic Resist<br><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><mainText><active>UNIQUE Active - Conduit:</active> Bind to an ally without an existing Conduit.<br><unique>UNIQUE Passive:</unique> Casting your ultimate near your ally surrounds you with a frost storm and ignites your ally's basic attacks for 10 seconds. Enemies inside your frost storm are slowed by 20% and your ally's attacks burn their target for 30% bonus magic damage over 2 seconds (45 second cooldown).<br><br><unlockedPassive>Frostfire Covenant:</unlockedPassive> Your frost storm ignites when it slows a burning enemy, dealing 40 magic damage per second and slowing by 40% instead for 3 seconds.</mainText><br><br><rules>(Champions can only be linked by one Zeke's Convergence at a time.)</rules>",
      colloq: ";haroldandkumar",
      plaintext:
        "Grants you and your ally bonuses when you cast your ultimate.",
      from: ["3105", "3024"],
      image: {
        full: "3050.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 2250,
        sell: 1575
      },
      tags: [
        "SpellBlock",
        "Armor",
        "Mana",
        "Aura",
        "Active",
        "CooldownReduction"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 30,
        FlatMPPoolMod: 250,
        FlatArmorMod: 60
      },
      effect: {
        Effect1Amount: "-0.1",
        Effect2Amount: "20",
        Effect3Amount: "40",
        Effect4Amount: "0.3",
        Effect5Amount: "1000",
        Effect6Amount: "0.5",
        Effect7Amount: "10",
        Effect8Amount: "3",
        Effect9Amount: "45",
        Effect10Amount: "3",
        Effect11Amount: "2",
        Effect12Amount: "300",
        Effect13Amount: "40",
        Effect14Amount: "2",
        Effect15Amount: "0.5"
      },
      depth: 3
    },
    "3052": {
      name: "Jaurim's Fist",
      description:
        "<stats>+15 Attack Damage<br>+200 Health</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 5 maximum Health. This bonus stacks up to 20 times.",
      colloq: ";enforcer",
      plaintext: "Attack Damage and stacking Health on Unit Kill",
      from: ["1036", "1028"],
      into: ["3022", "3053", "3748"],
      image: {
        full: "3052.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 1200,
        sell: 840
      },
      tags: ["Health", "Damage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 15,
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: "20",
        Effect2Amount: "5",
        Effect3Amount: "2",
        Effect4Amount: "100"
      },
      depth: 2
    },
    "3053": {
      name: "Sterak's Gage",
      description:
        "<stats>+450 Health</stats><br><br><unique>UNIQUE Passive - Giant Strength:</unique> Gain 50% of your Base Attack Damage as Bonus Attack Damage <br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain a shield for 75% of your bonus Health. After 0.75 seconds, the shield decays over 3 seconds (60 second cooldown).<br><br><unlockedPassive>Sterak's Fury:</unlockedPassive> When <i>Lifeline</i> triggers, grow in size and strength, gaining +30% Tenacity for 8 seconds.",
      colloq: ";juggernaut;primal",
      plaintext: "Shields against large bursts of damage",
      from: ["3052", "1037", "1028"],
      image: {
        full: "3053.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 725,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ["Health", "Damage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 450
      },
      effect: {
        Effect1Amount: "400",
        Effect2Amount: "0.5",
        Effect3Amount: "5",
        Effect4Amount: "0.75",
        Effect5Amount: "0",
        Effect6Amount: "8",
        Effect7Amount: "60",
        Effect8Amount: "3",
        Effect9Amount: "1800",
        Effect10Amount: "0.75",
        Effect11Amount: "0.3"
      },
      depth: 3
    },
    "3057": {
      name: "Sheen",
      description:
        "<stats><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown).",
      colloq: ";",
      plaintext: "Grants a bonus to next attack after spell cast",
      from: ["1027"],
      into: ["3078", "3100", "3025"],
      image: {
        full: "3057.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 1050,
        sell: 735
      },
      tags: ["Mana", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: "1.5",
        Effect2Amount: "1"
      },
      depth: 2
    },
    "3065": {
      name: "Spirit Visage",
      description:
        "<stats>+450 Health<br>+55 Magic Resist<br>+100% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Increases all healing received by 30%.",
      colloq: ";sv",
      plaintext: "Increases Health and healing effects",
      from: ["3211", "3067"],
      image: {
        full: "3065.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ["CooldownReduction", "Health", "HealthRegen", "SpellBlock"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 450,
        FlatSpellBlockMod: 55
      },
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "0.3",
        Effect3Amount: "0.5"
      },
      depth: 3
    },
    "3067": {
      name: "Kindlegem",
      description:
        "<stats>+200 Health  </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      colloq: ";",
      plaintext: "Increases Health and Cooldown Reduction",
      from: ["1028"],
      into: ["3065", "3071", "3109", "3083", "3152", "3161"],
      image: {
        full: "3067.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ["CooldownReduction", "Health"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: "-0.1"
      },
      depth: 2
    },
    "3068": {
      name: "Sunfire Cape",
      description:
        "<stats>+425 Health<br>+60 Armor  </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Burns nearby enemies for <scaleLevel>[26 to 43]</scaleLevel> magic damage per second. Once every 10 seconds, your next immobilizing spell deals <scaleLevel>[26 to 43]</scaleLevel> <scaleHealth>(+5% Your Bonus HP)</scaleHealth> bonus magic damage and releases a fire nova that also deals that bonus damage around you. Immolate's damage is increased by 50% to minions and monsters.",
      colloq: ";",
      plaintext: "Constantly deals damage to nearby enemies",
      from: ["1031", "1028", "3751"],
      into: ["3373"],
      image: {
        full: "3068.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2750,
        sell: 1925
      },
      tags: ["Armor", "Health"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 425,
        FlatArmorMod: 60
      },
      effect: {
        Effect1Amount: "26",
        Effect2Amount: "43",
        Effect3Amount: "0.5",
        Effect4Amount: "10",
        Effect5Amount: "0.05"
      },
      depth: 3
    },
    "3070": {
      name: "Tear of the Goddess",
      description:
        "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 10% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 4 maximum Mana on Mana expenditure (up to 3 times per 12 seconds).<br><br>Caps at +750 Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>",
      colloq: ";",
      plaintext: "Increases maximum Mana as Mana is spent",
      from: ["1027", "1004"],
      into: ["3003", "3004"],
      image: {
        full: "3070.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 375,
        purchasable: true,
        total: 850,
        sell: 595
      },
      tags: ["Mana", "ManaRegen"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: "4",
        Effect2Amount: "8",
        Effect3Amount: "1",
        Effect4Amount: "8",
        Effect5Amount: "750",
        Effect6Amount: "2",
        Effect7Amount: "0.1",
        Effect8Amount: "3",
        Effect9Amount: "12"
      },
      depth: 2
    },
    "3071": {
      name: "Black Cleaver",
      description:
        "<stats>+400 Health<br>+40 Attack Damage<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 4% for 6 seconds (stacks up to 6 times, up to 24%).<br><unique>UNIQUE Passive - Rage:</unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.",
      colloq: ";bc",
      plaintext:
        "Dealing physical damage to enemy champions reduces their Armor",
      from: ["3044", "3067"],
      into: ["3380"],
      image: {
        full: "3071.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: [
        "ArmorPenetration",
        "CooldownReduction",
        "Damage",
        "Health",
        "NonbootsMovement",
        "OnHit"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 40,
        FlatHPPoolMod: 400
      },
      effect: {
        Effect1Amount: "-0.2",
        Effect2Amount: "0.04",
        Effect3Amount: "6",
        Effect4Amount: "6",
        Effect5Amount: "0.24",
        Effect6Amount: "20",
        Effect7Amount: "2",
        Effect8Amount: "60",
        Effect9Amount: "2",
        Effect10Amount: "0.01"
      },
      depth: 3
    },
    "3072": {
      name: "Bloodthirster",
      description:
        "<stats>+80 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20% Life Steal<br><unique>UNIQUE Passive:</unique> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.",
      colloq: ";bt",
      plaintext:
        "Grants Attack Damage, Life Steal and Life Steal now overheals",
      from: ["1038", "1036", "1053"],
      image: {
        full: "3072.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 3500,
        sell: 2450
      },
      tags: ["Damage", "LifeSteal"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 80
      },
      effect: {
        Effect1Amount: "50",
        Effect2Amount: "350",
        Effect3Amount: "25",
        Effect4Amount: "0.2"
      },
      depth: 3
    },
    "3073": {
      name: "Tear of the Goddess (Quick Charge)",
      description:
        "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 10% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 6 maximum Mana on Mana expenditure (up to 3 times per 12 seconds).<br><br>Caps at +750 Mana.</mana>",
      colloq: ";",
      plaintext: "Increases maximum Mana as Mana is spent",
      from: ["1027", "1004"],
      into: ["3007", "3008"],
      image: {
        full: "3073.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 375,
        purchasable: true,
        total: 850,
        sell: 595
      },
      tags: ["Mana", "ManaRegen"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: "6",
        Effect2Amount: "8",
        Effect3Amount: "1",
        Effect4Amount: "8",
        Effect5Amount: "750",
        Effect6Amount: "2",
        Effect7Amount: "0.1",
        Effect8Amount: "3",
        Effect9Amount: "12"
      },
      depth: 2
    },
    "3074": {
      name: "Ravenous Hydra",
      description:
        "<stats>+80 Attack Damage<br>+100% Base Health Regen <br>+12% Life Steal</stats><br><br><passive>Passive:</passive> 50% of total Life Steal applies to damage dealt by this item.<br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).",
      colloq: ";",
      plaintext:
        "Melee attacks hit nearby enemies, dealing damage and restoring Health",
      from: ["3077", "1053", "1037"],
      image: {
        full: "3074.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 3500,
        sell: 2450
      },
      tags: ["Active", "Damage", "HealthRegen", "LifeSteal", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 80,
        PercentLifeStealMod: 0.12
      },
      effect: {
        Effect1Amount: "0.2",
        Effect2Amount: "0.6",
        Effect3Amount: "0.6",
        Effect4Amount: "1",
        Effect5Amount: "10",
        Effect6Amount: "350",
        Effect7Amount: "0.5",
        Effect8Amount: "400"
      },
      depth: 3
    },
    "3075": {
      name: "Thornmail",
      description:
        "<stats>+250 Health<br>+80 Armor</stats><br><br><unique>UNIQUE Passive - Thorns:</unique> Upon being hit by a basic attack, reflects magic damage equal to 10% of your bonus Armor plus 25, inflicting <a href='GrievousWounds'>Grievous Wounds</a> on the attacker for 3 second(s).<br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 second(s).",
      colloq: ";grievous",
      plaintext: "Returns damage taken from basic attacks as magic damage",
      from: ["3076", "1028", "3082"],
      image: {
        full: "3075.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ["Health", "Armor", "Slow"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 250,
        FlatArmorMod: 80
      },
      effect: {
        Effect1Amount: "25",
        Effect2Amount: "3",
        Effect3Amount: "3",
        Effect4Amount: "1",
        Effect5Amount: "0.15",
        Effect6Amount: "0.1",
        Effect7Amount: "0.1"
      },
      depth: 3
    },
    "3076": {
      name: "Bramble Vest",
      description:
        "<stats>+35 Armor</stats><br><br><unique>UNIQUE Passive - Thorns:</unique> Upon being hit by a basic attack, reflects magic damage equal to 3 plus 10% of your bonus Armor, inflicting <a href='GrievousWounds'>Grievous Wounds</a> on the attacker for 3 second(s).",
      colloq: ";grievous",
      plaintext: "Prevents enemies from using Life Steal against you.",
      from: ["1029", "1029"],
      into: ["3075"],
      image: {
        full: "3076.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ["Armor"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatArmorMod: 35
      },
      effect: {
        Effect1Amount: "0.1",
        Effect2Amount: "3",
        Effect3Amount: "3"
      },
      depth: 2
    },
    "3077": {
      name: "Tiamat",
      description:
        "<stats>+25 Attack Damage<br>+50% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).",
      colloq: ";",
      plaintext: "Melee attacks hit nearby enemies",
      from: ["1036", "1006", "1036"],
      into: ["3074", "3748"],
      image: {
        full: "3077.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 475,
        purchasable: true,
        total: 1325,
        sell: 928
      },
      tags: ["HealthRegen", "Damage", "Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 25
      },
      effect: {
        Effect1Amount: "0.2",
        Effect2Amount: "0.6",
        Effect3Amount: "0.6",
        Effect4Amount: "1",
        Effect5Amount: "10"
      },
      depth: 2
    },
    "3078": {
      name: "Trinity Force",
      description:
        "<stats>+250 Health<br><mana>+250 Mana</mana><br>+25 Attack Damage<br>+40% Attack Speed<br>+20% Cooldown Reduction<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).",
      colloq: ";triforce;tons of damage",
      plaintext: "Tons of Damage",
      from: ["3101", "3057", "3044"],
      into: ["3384"],
      image: {
        full: "3078.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 333,
        purchasable: true,
        total: 3733,
        sell: 2613
      },
      tags: [
        "Health",
        "Damage",
        "AttackSpeed",
        "Mana",
        "CooldownReduction",
        "OnHit",
        "NonbootsMovement"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        PercentMovementSpeedMod: 0.05,
        FlatHPPoolMod: 250,
        FlatMPPoolMod: 250,
        PercentAttackSpeedMod: 0.4
      },
      effect: {
        Effect1Amount: "20",
        Effect2Amount: "60",
        Effect3Amount: "2",
        Effect4Amount: "2",
        Effect5Amount: "1.5"
      },
      depth: 3
    },
    "3082": {
      name: "Warden's Mail",
      description:
        "<stats>+40 Armor</stats><br><br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 seconds.",
      colloq: ";",
      plaintext:
        "Slows Attack Speed of enemy champions when receiving basic attacks",
      from: ["1029", "1029"],
      into: ["3110", "3143", "3075"],
      image: {
        full: "3082.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ["Armor", "Slow"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatArmorMod: 40
      },
      effect: {
        Effect1Amount: "-0.15",
        Effect2Amount: "1"
      },
      depth: 2
    },
    "3083": {
      name: "Warmog's Armor",
      description:
        "<stats>+800 Health<br>+200% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Grants <unlockedPassive>Warmog's Heart</unlockedPassive> if you have at least 3000 maximum Health.<br><br><unlockedPassive>Warmog's Heart:</unlockedPassive> Restores 25% of maximum Health every 5 seconds if damage hasn't been taken within 6 seconds (3 seconds for damage from minions and monsters).",
      colloq: ";",
      plaintext: "Grants massive Health and Health Regen",
      from: ["1011", "3067", "3801"],
      image: {
        full: "3083.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 2850,
        sell: 1995
      },
      tags: ["Health", "HealthRegen", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 800
      },
      effect: {
        Effect1Amount: "0.015",
        Effect2Amount: "5",
        Effect3Amount: "0.25",
        Effect4Amount: "2999",
        Effect5Amount: "6",
        Effect6Amount: "-0.1",
        Effect7Amount: "6",
        Effect8Amount: "3",
        Effect9Amount: "3000"
      },
      depth: 3
    },
    "3084": {
      name: "Overlord's Bloodmail",
      description:
        "<stats>+800 Health<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> Upon champion kill or assist, restores 300 Health over 5 seconds.",
      colloq: ";",
      plaintext: "Restores Health on kill or assist",
      from: ["1011", "3801"],
      image: {
        full: "3084.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 2550,
        sell: 1785
      },
      tags: ["Health", "HealthRegen"],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 800
      },
      effect: {
        Effect1Amount: "300",
        Effect2Amount: "5"
      },
      depth: 3
    },
    "3085": {
      name: "Runaan's Hurricane",
      description:
        "<stats>+40% Attack Speed<br>+25% Critical Strike Chance<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Wind's Fury:</unique> When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (40% of Attack Damage) physical damage. Bolts can critically strike and apply on hit effects.",
      colloq: ";",
      plaintext: "Ranged attacks fire two bolts at nearby enemies",
      from: ["1042", "3086", "1042"],
      image: {
        full: "3085.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ["CriticalStrike", "AttackSpeed", "OnHit", "NonbootsMovement"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentMovementSpeedMod: 0.07,
        PercentAttackSpeedMod: 0.4
      },
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "40",
        Effect3Amount: "2",
        Effect4Amount: "0",
        Effect5Amount: "40",
        Effect6Amount: "1"
      },
      depth: 3
    },
    "3086": {
      name: "Zeal",
      description:
        "<stats>+12% Attack Speed<br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed",
      colloq: ";",
      plaintext:
        "Slight bonuses to Critical Strike Chance, Movement Speed and Attack Speed",
      from: ["1018", "1042"],
      into: ["3085", "3094", "3046", "3087"],
      image: {
        full: "3086.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 1400,
        sell: 980
      },
      tags: ["AttackSpeed", "CriticalStrike", "NonbootsMovement"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentAttackSpeedMod: 0.12
      },
      effect: {
        Effect1Amount: "0.05"
      },
      depth: 2
    },
    "3087": {
      name: "Statikk Shiv",
      description:
        "<stats>+40% Attack Speed<br>+25% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Energized:</unique> Moving and attacking will make an attack <a href='Energized'>Energized</a>. <br><unique>UNIQUE Passive - Electroshock:</unique> Energized attacks gain <magicDamage>120 bonus magic damage</magicDamage>. Energized effects chain to 7 targets.",
      colloq: ";",
      plaintext:
        "Movement builds charges that release chain lightning on basic attack",
      from: ["3086", "2015"],
      image: {
        full: "3087.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ["AttackSpeed", "CriticalStrike", "NonbootsMovement", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentMovementSpeedMod: 0.05,
        PercentAttackSpeedMod: 0.4
      },
      effect: {
        Effect1Amount: "100",
        Effect2Amount: "80",
        Effect3Amount: "7",
        Effect4Amount: "750",
        Effect5Amount: "120",
        Effect6Amount: "120",
        Effect7Amount: "5"
      },
      depth: 3
    },
    "3089": {
      name: "Rabadon's Deathcap",
      description:
        "<stats>+120 Ability Power  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 40%.",
      colloq: ";dc;banksys;hat",
      plaintext: "Massively increases Ability Power",
      from: ["1058", "1058"],
      into: ["3374"],
      image: {
        full: "3089.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 1100,
        purchasable: true,
        total: 3600,
        sell: 2520
      },
      tags: ["SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 120
      },
      effect: {
        Effect1Amount: "40"
      },
      depth: 2
    },
    "3091": {
      name: "Wit's End",
      description:
        "<stats>+50% Attack Speed<br>+50 Magic Resist<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - At Wit's End:</unique> Deal <scaleLevel>15 - 80</scaleLevel> magic damage on hit. While below half health, heal for 33% of this effect's damage dealt - increased to 100% for Melee Champions.",
      colloq: ";",
      plaintext: "Resist magic damage and claw your way back to life.",
      from: ["1043", "1057", "1042"],
      image: {
        full: "3091.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 880,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ["SpellBlock", "AttackSpeed", "LifeSteal", "NonbootsMovement"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentMovementSpeedMod: 0.05,
        FlatSpellBlockMod: 50,
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: "15",
        Effect2Amount: "80",
        Effect3Amount: "0.5",
        Effect4Amount: "0.33",
        Effect5Amount: "1",
        Effect6Amount: "10",
        Effect7Amount: "-8.75"
      },
      depth: 3
    },
    "3094": {
      name: "Rapid Firecannon",
      description:
        "<stats>+30% Attack Speed<br>+25% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Energized:</unique> Moving and attacking will make an attack <a href='Energized'>Energized</a>. <br><unique>UNIQUE Passive - Sharpshooter:</unique> Your Energized attacks gain <magicDamage>120 bonus magic damage</magicDamage>. Energized attacks gain 35% bonus range (+150 range maximum).",
      colloq: ";canon;rapidfire;rfc",
      plaintext:
        "Movement builds charges that release a sieging fire attack on release",
      from: ["3086", "2015"],
      image: {
        full: "3094.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ["AttackSpeed", "CriticalStrike", "NonbootsMovement", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentMovementSpeedMod: 0.05,
        PercentAttackSpeedMod: 0.3
      },
      effect: {
        Effect1Amount: "0.35",
        Effect2Amount: "150",
        Effect3Amount: "120",
        Effect4Amount: "120",
        Effect5Amount: "5",
        Effect6Amount: "0.25"
      },
      depth: 3
    },
    "3095": {
      name: "Stormrazor",
      description:
        "<stats>+50 Attack Damage<br>+25% Critical Strike Chance<br>+15% Attack Speed</stats><br><br><unique>UNIQUE Passive - Energized:</unique> Moving and attacking will make an attack <a href='Energized'>Energized</a>. <br><unique>UNIQUE Passive - Paralyze:</unique> Your Energized attacks gain <magicDamage>120 bonus magic damage</magicDamage>. Energized effects slow by 75% for 0.5 seconds.",
      colloq: ";Windblade",
      plaintext: "Tremendously empower other Energized effects.",
      from: ["1038", "1018", "2015"],
      image: {
        full: "3095.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ["Damage", "CriticalStrike", "AttackSpeed", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 50,
        FlatCritChanceMod: 0.25,
        PercentAttackSpeedMod: 0.15
      },
      effect: {
        Effect1Amount: "120",
        Effect2Amount: "120",
        Effect3Amount: "5",
        Effect4Amount: "0.35",
        Effect5Amount: "0.75",
        Effect6Amount: "0.5"
      },
      depth: 3
    },
    "3100": {
      name: "Lich Bane",
      description:
        "<stats>+80 Ability Power<br>+7% Movement Speed<br>+10% Cooldown Reduction<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).",
      colloq: ";",
      plaintext: "Grants a bonus to next attack after spell cast",
      from: ["3057", "3113", "1026"],
      image: {
        full: "3100.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ["SpellDamage", "Mana", "CooldownReduction", "NonbootsMovement"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentMovementSpeedMod: 0.07,
        FlatMPPoolMod: 250,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: "0.75",
        Effect2Amount: "0.5",
        Effect3Amount: "1.5"
      },
      depth: 3
    },
    "3101": {
      name: "Stinger",
      description:
        "<stats>+35% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      colloq: ";",
      plaintext: "Increased Attack Speed and Cooldown Reduction",
      from: ["1042", "1042"],
      into: ["3115", "3137", "3078"],
      image: {
        full: "3101.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["AttackSpeed", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentAttackSpeedMod: 0.35
      },
      effect: {
        Effect1Amount: "10"
      },
      depth: 2
    },
    "3102": {
      name: "Banshee's Veil",
      description:
        "<stats>+75 Ability Power<br>+60 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Spell Shield:</unique> Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.",
      colloq: ";bv",
      plaintext: "Periodically blocks enemy abilities",
      from: ["3108", "1033", "1026"],
      image: {
        full: "3102.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ["SpellBlock", "SpellDamage", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 60,
        FlatMagicDamageMod: 75
      },
      effect: {
        Effect1Amount: "40",
        Effect2Amount: "45",
        Effect3Amount: "10",
        Effect4Amount: "-0.1",
        Effect5Amount: "8",
        Effect6Amount: "2"
      },
      depth: 3
    },
    "3105": {
      name: "Aegis of the Legion",
      description: "<stats>+30 Armor<br>+30 Magic Resist</stats>",
      colloq: ";",
      plaintext: "Grants Armor and Magic Resistance",
      from: ["1033", "1029"],
      into: ["3190", "3050"],
      image: {
        full: "3105.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["SpellBlock", "Armor"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 30,
        FlatArmorMod: 30
      },
      depth: 2
    },
    "3107": {
      name: "Redemption",
      description:
        "<stats>+200 Health<br>+50% Base Health Regen <br><mana>+150% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><passive>UNIQUE Passive:</passive> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 10 (+20 per level of target) Health, burn enemy champions for 10% of their maximum Health as <font color='#FFFFFF'>true</font> damage and deal 250 <font color='#FFFFFF'>true</font> damage to enemy minions (120 second cooldown). Heal and Shield Power is 3 times as effective on Redemption's heal.<br><br>Can be used while dead.<br><br><rules>Half effect if the target has been affected by another Redemption recently.</rules>",
      colloq: ";",
      plaintext: "Activate to heal allies and damage enemies in an area",
      from: ["3114", "3801"],
      into: ["3382"],
      image: {
        full: "3107.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2100,
        sell: 1470
      },
      tags: ["Health", "HealthRegen", "ManaRegen", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: "0.1",
        Effect2Amount: "10",
        Effect3Amount: "20",
        Effect4Amount: "0.1",
        Effect5Amount: "250",
        Effect6Amount: "120",
        Effect7Amount: "550",
        Effect8Amount: "5500",
        Effect9Amount: "0.5",
        Effect10Amount: "8",
        Effect11Amount: "3"
      },
      depth: 3
    },
    "3108": {
      name: "Fiendish Codex",
      description:
        "<stats>+35 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      colloq: ";",
      plaintext: "Increases Ability Power and Cooldown Reduction",
      from: ["1052"],
      into: ["3174", "3115", "3157", "1402", "1414", "3102", "3905"],
      image: {
        full: "3108.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 465,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ["CooldownReduction", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 35
      },
      effect: {
        Effect1Amount: "-0.1"
      },
      depth: 2
    },
    "3109": {
      name: "Knight's Vow",
      description:
        "<stats>+250 Health<br>+40 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Designate an allied champion as your <a href='KnightsVowPartner'>Partner</a> (90 second cooldown).<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, gain +20 additional Armor and +15% Movement Speed towards them.<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, heal for 12% of the damage your <a href='KnightsVowPartner'>Partner</a> deals to champions and redirect 12% of the damage your <a href='KnightsVowPartner'>Partner</a> takes from champions to you as <font color='#FFFFFF'>true</font> damage (healing and damage redirection are reduced by 50% if you are ranged).<br><br><rules>(Champions can only be linked by one Knight's Vow at a time.)</rules>",
      colloq: ";",
      plaintext: "Partner with an ally to protect each other",
      from: ["3067", "1031"],
      image: {
        full: "3109.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2200,
        sell: 1540
      },
      tags: [
        "Health",
        "Armor",
        "Aura",
        "CooldownReduction",
        "NonbootsMovement"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 250,
        FlatArmorMod: 40
      },
      effect: {
        Effect1Amount: "20",
        Effect2Amount: "0.15",
        Effect3Amount: "0.12",
        Effect4Amount: "0.12",
        Effect5Amount: "90",
        Effect6Amount: "0.5",
        Effect7Amount: "1000"
      },
      depth: 3
    },
    "3110": {
      name: "Frozen Heart",
      description:
        "<stats>+110 Armor<br>+20% Cooldown Reduction<br><mana>+400 Mana</mana></stats><br><br><aura>UNIQUE Aura:</aura> Reduces the Attack Speed of nearby enemies by 15%.",
      colloq: ";fh",
      plaintext: "Massively increases Armor and slows enemy basic attacks",
      from: ["3082", "3024"],
      image: {
        full: "3110.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 2700,
        sell: 1890
      },
      tags: ["Armor", "Aura", "CooldownReduction", "Mana"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 400,
        FlatArmorMod: 110
      },
      effect: {
        Effect1Amount: "-0.2",
        Effect2Amount: "-0.15"
      },
      depth: 3
    },
    "3111": {
      name: "Mercury's Treads",
      description:
        "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 30%.",
      colloq: ";",
      plaintext:
        "Increases Movement Speed and reduces duration of disabling effects",
      from: ["1001", "1033"],
      image: {
        full: "3111.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["Boots", "SpellBlock", "Tenacity"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 45,
        FlatSpellBlockMod: 25
      },
      depth: 2
    },
    "3112": {
      name: "Guardian's Orb",
      description:
        "<stats>+150 Health<br>+35 Ability Power<br><mana>+10 Mana regen per 5 seconds</mana></stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
      colloq: ";",
      plaintext: "Good starting item for mages",
      image: {
        full: "3112.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 380
      },
      tags: ["Health", "SpellDamage", "ManaRegen", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 150,
        FlatMagicDamageMod: 35
      }
    },
    "3113": {
      name: "Aether Wisp",
      description:
        "<stats>+30 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed",
      colloq: ";",
      plaintext: "Increases Ability Power and Movement Speed",
      from: ["1052"],
      into: ["3100", "3504", "3673", "3905", "3907"],
      image: {
        full: "3113.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 415,
        purchasable: true,
        total: 850,
        sell: 595
      },
      tags: ["NonbootsMovement", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 30
      },
      effect: {
        Effect1Amount: "0.05"
      },
      depth: 2
    },
    "3114": {
      name: "Forbidden Idol",
      description:
        "<stats><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> +5% Heal and Shield Power",
      colloq: ";",
      plaintext:
        "Increases Heal and Shield Power, Mana Regeneration, and Cooldown Reduction",
      from: ["1004", "1004"],
      into: ["2065", "3107", "3222", "3504"],
      image: {
        full: "3114.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 550,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ["CooldownReduction", "ManaRegen"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "-0.1",
        Effect2Amount: "0.05"
      },
      depth: 2
    },
    "3115": {
      name: "Nashor's Tooth",
      description:
        "<stats>+50% Attack Speed<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.<br>",
      colloq: ";",
      plaintext:
        "Increases Attack Speed, Ability Power, and Cooldown Reduction",
      from: ["3101", "3108"],
      image: {
        full: "3115.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 1000,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ["AttackSpeed", "CooldownReduction", "OnHit", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 80,
        PercentAttackSpeedMod: 0.5
      },
      depth: 3
    },
    "3116": {
      name: "Rylai's Crystal Scepter",
      description:
        "<stats>+300 Health<br>+90 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Damaging spells and abilities reduce enemy movement speed by 20% for 1 second.",
      colloq: ";",
      plaintext: "Abilities slow enemies",
      from: ["1026", "1052", "1028"],
      image: {
        full: "3116.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 915,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ["Health", "SpellDamage", "Slow"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 90
      },
      effect: {
        Effect1Amount: "-0.2",
        Effect2Amount: "-0.2",
        Effect3Amount: "-0.2",
        Effect4Amount: "1",
        Effect5Amount: "1",
        Effect6Amount: "1"
      },
      depth: 2
    },
    "3117": {
      name: "Boots of Mobility",
      description:
        "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed. Increases to +115 Movement Speed when out of combat for 5 seconds.",
      colloq: ";",
      plaintext: "Greatly enhances Movement Speed when out of combat",
      from: ["1001"],
      image: {
        full: "3117.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ["Boots"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 115
      },
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "0",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "25"
      },
      depth: 2
    },
    "3123": {
      name: "Executioner's Calling",
      description:
        "<stats>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 3 seconds.",
      colloq: ";grievous",
      plaintext: "Overcomes enemies with high health gain",
      from: ["1036"],
      into: ["3033"],
      image: {
        full: "3123.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ["Damage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 15
      },
      effect: {
        Effect1Amount: "3"
      },
      depth: 2
    },
    "3124": {
      name: "Guinsoo's Rageblade",
      description:
        "<stats>+25 Attack Damage<br>+25 Ability Power<br>+25% Attack Speed</stats><br><br><passive>Passive: </passive>Basic attacks deal 15 magic damage on hit.<br><unique>UNIQUE Passive - Last Whisper:</unique> Gain 15% <a href='FlatArmorPen'>Armor Penetration</a>.<br><unique>UNIQUE Passive - Dissolve:</unique> Gain 15% <a href='TotalMagicPen'>Magic Penetration</a>.<br><unique>UNIQUE Passive:</unique> Basic attacks grant +8% Attack Speed for 5 seconds (up to 6 stacks). At max stacks, gain <unlockedPassive>Guinsoo's Rage</unlockedPassive>.<br><br><unlockedPassive>Guinsoo's Rage:</unlockedPassive> Every 3 basic attacks, trigger on hit effects twice.<br><br><rules><font color='#8c8c8c'>While at half stacks, melee champions' next attack will fully stack Rageblade.</font></rules>",
      colloq: ";",
      plaintext:
        "Increases Attack Speed, Armor Penetration, and Magic Penetration",
      from: ["1052", "1043", "1037"],
      image: {
        full: "3124.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 790,
        purchasable: true,
        total: 3100,
        sell: 2170
      },
      tags: [
        "Damage",
        "AttackSpeed",
        "SpellDamage",
        "OnHit",
        "MagicPenetration",
        "ArmorPenetration"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        FlatMagicDamageMod: 25,
        PercentAttackSpeedMod: 0.25
      },
      effect: {
        Effect1Amount: "0.08",
        Effect2Amount: "2.5",
        Effect3Amount: "2.5",
        Effect4Amount: "5",
        Effect5Amount: "6",
        Effect6Amount: "0.1",
        Effect7Amount: "0.1",
        Effect8Amount: "15",
        Effect9Amount: "1",
        Effect10Amount: "3",
        Effect11Amount: "0.15",
        Effect12Amount: "0",
        Effect13Amount: "3"
      },
      depth: 3
    },
    "3133": {
      name: "Caulfield's Warhammer",
      description:
        "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      colloq: ";",
      plaintext: "Attack Damage and Cooldown Reduction",
      stacks: 0,
      from: ["1036", "1036"],
      into: ["1400", "1412", "3812", "3142", "3147", "3156", "3508", "3671"],
      image: {
        full: "3133.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["Damage", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 25
      },
      effect: {
        Effect1Amount: "-0.1"
      },
      depth: 2
    },
    "3134": {
      name: "Serrated Dirk",
      description:
        "<stats>+30 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10 <a href='Lethality'>Lethality</a><br>",
      colloq: ";lethality",
      plaintext: "Increases Attack Damage and Lethality",
      stacks: 0,
      from: ["1036", "1036"],
      into: ["3142", "3179", "3814", "3147", "3181"],
      image: {
        full: "3134.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["Damage", "ArmorPenetration"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 30
      },
      effect: {
        Effect1Amount: "10"
      },
      depth: 2
    },
    "3135": {
      name: "Void Staff",
      description:
        "<stats>+70 Ability Power</stats><br><br><unique>UNIQUE Passive - Dissolve:</unique> +40% <a href='TotalMagicPen'>Magic Penetration</a>.",
      colloq: ";",
      plaintext: "Increases magic damage",
      from: ["1026", "1052"],
      image: {
        full: "3135.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 1365,
        purchasable: true,
        total: 2650,
        sell: 1855
      },
      tags: ["MagicPenetration", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 70
      },
      effect: {
        Effect1Amount: "0.4",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "0",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "4"
      },
      depth: 2
    },
    "3136": {
      name: "Haunting Guise",
      description:
        "<stats>+35 Ability Power<br>+200 Health</stats><br><br><unique>UNIQUE Passive - Madness:</unique> Deal 2% more damage for each second in combat with champions (10% maximum).",
      colloq: ";mask",
      plaintext: "Increases magic damage",
      stacks: 0,
      from: ["1028", "1052"],
      into: ["3151"],
      image: {
        full: "3136.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 665,
        purchasable: true,
        total: 1500,
        sell: 1050
      },
      tags: ["Health", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 200,
        FlatMagicDamageMod: 35
      },
      effect: {
        Effect1Amount: "15",
        Effect2Amount: "15",
        Effect3Amount: "1",
        Effect4Amount: "3",
        Effect5Amount: "15",
        Effect6Amount: "33",
        Effect7Amount: "2",
        Effect8Amount: "10",
        Effect9Amount: "5"
      },
      depth: 2
    },
    "3137": {
      name: "Dervish Blade",
      description:
        "<stats>+50% Attack Speed<br>+45 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all debuffs, and if the champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
      colloq: ";",
      plaintext:
        "Activate to remove all debuffs and grant massive Movement Speed",
      from: ["3140", "3101"],
      image: {
        full: "3137.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 2700,
        sell: 1890
      },
      tags: [
        "Active",
        "AttackSpeed",
        "CooldownReduction",
        "NonbootsMovement",
        "SpellBlock"
      ],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 45,
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "1",
        Effect3Amount: "90"
      },
      depth: 3
    },
    "3139": {
      name: "Mercurial Scimitar",
      description:
        "<stats>+50 Attack Damage<br>+35 Magic Resist<br>+10% Life Steal</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
      colloq: ";",
      plaintext:
        "Activate to remove all crowd control debuffs and grant massive Movement Speed",
      from: ["3140", "1037", "1053"],
      image: {
        full: "3139.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 325,
        purchasable: true,
        total: 3400,
        sell: 2380
      },
      tags: ["SpellBlock", "Damage", "LifeSteal", "Active", "NonbootsMovement"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 50,
        FlatSpellBlockMod: 35,
        PercentLifeStealMod: 0.1
      },
      effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "1",
        Effect3Amount: "90"
      },
      depth: 3
    },
    "3140": {
      name: "Quicksilver Sash",
      description:
        "<stats>+30 Magic Resist</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs (90 second cooldown).",
      colloq: ";qss",
      plaintext: "Activate to remove all crowd control debuffs",
      from: ["1033"],
      into: ["3139", "3137"],
      image: {
        full: "3140.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 850,
        purchasable: true,
        total: 1300,
        sell: 910
      },
      tags: ["Active", "SpellBlock"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 30
      },
      effect: {
        Effect1Amount: "90"
      },
      depth: 2
    },
    "3142": {
      name: "Youmuu's Ghostblade",
      description:
        "<stats>+55 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> +18 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +40 Movement Speed out of Combat<br><active>UNIQUE Active:</active> Grants +20% Movement Speed and the ability to move through units for 6 seconds (45 second cooldown).",
      colloq: ";lethality",
      plaintext: "Activate to greatly increase Movement Speed",
      from: ["3133", "3134"],
      into: ["3388"],
      image: {
        full: "3142.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: [
        "Damage",
        "Active",
        "CooldownReduction",
        "NonbootsMovement",
        "ArmorPenetration"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 55
      },
      effect: {
        Effect1Amount: "45",
        Effect2Amount: "18",
        Effect3Amount: "0.2",
        Effect4Amount: "0",
        Effect5Amount: "6",
        Effect6Amount: "40"
      },
      depth: 3
    },
    "3143": {
      name: "Randuin's Omen",
      description:
        "<stats>+400 Health<br>+70 Armor</stats><br><br><unique>UNIQUE Passive:</unique> -20% damage taken from basic attack critical strikes.<br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 second.<br><active>UNIQUE Active:</active> Slows the Movement Speed of nearby enemy units by 55% for 2 seconds (60 second cooldown).",
      colloq: ";",
      plaintext: "Greatly increases defenses, activate to slow nearby enemies",
      from: ["3082", "1011"],
      image: {
        full: "3143.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ["Active", "Armor", "Health", "Slow"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 400,
        FlatArmorMod: 70
      },
      effect: {
        Effect1Amount: "2",
        Effect2Amount: "0.2",
        Effect3Amount: "-0.55",
        Effect4Amount: "1",
        Effect5Amount: "-0.15",
        Effect6Amount: "0.15",
        Effect7Amount: "0.3"
      },
      depth: 3
    },
    "3144": {
      name: "Bilgewater Cutlass",
      description:
        "<stats>+25 Attack Damage<br>+10% Life Steal</stats><br><br><active>UNIQUE Active:</active> Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).",
      colloq: ";",
      plaintext: "Activate to deal magic damage and slow target champion",
      from: ["1053", "1036"],
      into: ["3146", "3153"],
      image: {
        full: "3144.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1600,
        sell: 1120
      },
      tags: ["Active", "Damage", "LifeSteal", "Slow"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        PercentLifeStealMod: 0.1
      },
      effect: {
        Effect1Amount: "-0.25",
        Effect2Amount: "2",
        Effect3Amount: "90",
        Effect4Amount: "100"
      },
      depth: 3
    },
    "3145": {
      name: "Hextech Revolver",
      description:
        "<stats>+40 Ability Power</stats><br><br><unique>UNIQUE Passive - Magic Bolt:</unique> Damaging an enemy champion with a basic attack shocks them for <scaleLevel>50 - 125</scaleLevel> bonus magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Magic Bolt's cooldown is reduced by Active Item cooldown reduction.<br><br><rules>(Damage scales based on level. Hextech effects can trigger other item spell effects.)</rules>",
      colloq: ";",
      plaintext:
        "Increases Ability Power. Deal bonus magic damage on attack periodically.",
      from: ["1052", "1052"],
      into: ["3146", "3152", "3030"],
      image: {
        full: "3145.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 180,
        purchasable: true,
        total: 1050,
        sell: 735
      },
      tags: ["SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 40
      },
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "50",
        Effect3Amount: "0",
        Effect4Amount: "125",
        Effect5Amount: "40"
      },
      depth: 2
    },
    "3146": {
      name: "Hextech Gunblade",
      description:
        "<stats>+40 Attack Damage<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage.<br><active>UNIQUE Active - Lightning Bolt:</active> Deals <scaleLevel>175 - 253</scaleLevel> (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).",
      colloq: ";",
      plaintext:
        "Increases Attack Damage and Ability Power, activate to slow a target",
      from: ["3144", "3145"],
      image: {
        full: "3146.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 750,
        purchasable: true,
        total: 3400,
        sell: 2380
      },
      tags: [
        "Active",
        "Damage",
        "LifeSteal",
        "Slow",
        "SpellDamage",
        "SpellVamp"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 40,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: "0.15",
        Effect2Amount: "40",
        Effect3Amount: "175",
        Effect4Amount: "253",
        Effect5Amount: "0.4",
        Effect6Amount: "2"
      },
      depth: 4
    },
    "3147": {
      name: "Duskblade of Draktharr",
      description:
        "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive</unique>: +21 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive - Nightstalker:</unique> After being unseen for at least 1 second, your next basic attack against an enemy champion deals <scaleLevel>30 - 150</scaleLevel> bonus physical damage and slows them by 99% for 0.25 seconds. Ranged basic attacks do not apply the slow. (Lasts for 5 seconds after being seen by an enemy champion).",
      colloq: ";lethality",
      plaintext: "Deals additional physical damage when ambushing enemies",
      from: ["3134", "3133"],
      image: {
        full: "3147.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ["Damage", "CooldownReduction", "OnHit", "ArmorPenetration"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 60
      },
      effect: {
        Effect1Amount: "21",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "30",
        Effect6Amount: "150",
        Effect7Amount: "99",
        Effect8Amount: "0.25",
        Effect9Amount: "5",
        Effect10Amount: "30",
        Effect11Amount: "1",
        Effect12Amount: "150"
      },
      depth: 3
    },
    "3151": {
      name: "Liandry's Torment",
      description:
        "<stats>+75 Ability Power<br>+300 Health</stats><br><br><unique>UNIQUE Passive - Madness:</unique> Deal 2% more damage for each second in combat with champions (10% maximum).<br><unique>UNIQUE Passive - Torment:</unique> Spells burn enemies for 3 seconds, dealing bonus magic damage equal to 1.5% of their maximum Health per second. Burn damage is increased to 2.5% against <a href='MovementImpaired'>movement-impaired</a> units.",
      colloq: ";mask",
      plaintext: "Spell damage burns enemies for a portion of their Health",
      stacks: 0,
      from: ["3136", "1026"],
      image: {
        full: "3151.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 750,
        purchasable: true,
        total: 3100,
        sell: 2170
      },
      tags: ["Health", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 75
      },
      effect: {
        Effect1Amount: "15",
        Effect2Amount: "0.015",
        Effect3Amount: "3",
        Effect4Amount: "100",
        Effect5Amount: "2",
        Effect6Amount: "10",
        Effect7Amount: "2",
        Effect8Amount: "2.5"
      },
      depth: 3
    },
    "3152": {
      name: "Hextech Protobelt-01",
      description:
        "<stats>+300 Health<br>+60 Ability Power<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active - Fire Bolt:</unique> Dash forward and unleash a nova of fire bolts that deal <scaleLevel>75 - 150</scaleLevel> (+25% of your Ability Power) as magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Champions and Monsters hit by multiple fire bolts take 10% damage per additional bolt.<br><br><rules>(This dash cannot pass through terrain.)</rules>",
      colloq: "rocket belt;",
      plaintext: "Activate to dash forward and unleash a fiery explosion",
      from: ["3145", "3067"],
      image: {
        full: "3152.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: ["Health", "SpellDamage", "Active", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 60
      },
      effect: {
        Effect1Amount: "0.12",
        Effect2Amount: "0.04",
        Effect3Amount: "40",
        Effect4Amount: "75",
        Effect5Amount: "150",
        Effect6Amount: "0.1",
        Effect7Amount: "0.25",
        Effect8Amount: "40",
        Effect9Amount: "0.5"
      },
      depth: 3
    },
    "3153": {
      name: "Blade of the Ruined King",
      description:
        "<stats>+40 Attack Damage<br>+25% Attack Speed<br>+12% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health as bonus physical damage on hit.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).<br><br><rules>Minimum bonus physical damage dealt is 15.<br>Maximum bonus physical damage dealt to monsters and minions is 60.<br>User's Life Steal is applied to bonus physical damage dealt.</rules>",
      colloq: ";brk;bork;bork;bork;botrk",
      plaintext:
        "Deals damage based on target's Health, can steal Movement Speed",
      from: ["3144", "1043"],
      into: ["3389"],
      image: {
        full: "3153.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 3300,
        sell: 2310
      },
      tags: [
        "Damage",
        "AttackSpeed",
        "LifeSteal",
        "Active",
        "Slow",
        "OnHit",
        "NonbootsMovement"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 40,
        PercentAttackSpeedMod: 0.25,
        PercentLifeStealMod: 0.12
      },
      effect: {
        Effect1Amount: "0.08",
        Effect2Amount: "0.08",
        Effect3Amount: "15",
        Effect4Amount: "60"
      },
      depth: 4
    },
    "3155": {
      name: "Hexdrinker",
      description:
        "<stats>+20 Attack Damage<br>+35 Magic Resist</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 110 to 280 (based on level) magic damage for 5 seconds (90 second cooldown).",
      colloq: ";",
      plaintext: "Increases Attack Damage and Magic Resist",
      stacks: 0,
      from: ["1036", "1033"],
      into: ["3156"],
      image: {
        full: "3155.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1300,
        sell: 910
      },
      tags: ["Damage", "SpellBlock"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 20,
        FlatSpellBlockMod: 35
      },
      effect: {
        Effect1Amount: "0.3",
        Effect2Amount: "110",
        Effect3Amount: "5",
        Effect4Amount: "90",
        Effect5Amount: "280",
        Effect6Amount: "100",
        Effect7Amount: "10"
      },
      depth: 2
    },
    "3156": {
      name: "Maw of Malmortius",
      description:
        "<stats>+50 Attack Damage<br>+50 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs up to 350 magic damage within 5 seconds (90 second cooldown).<br><unlockedPassive>Lifegrip:</unlockedPassive> When <i>Lifeline</i> triggers, gain +20 Attack Damage, +10% Spell Vamp and +10% Life Steal until out of combat.",
      colloq: ";",
      plaintext: "Grants bonus Attack Damage when Health is low",
      stacks: 0,
      from: ["3155", "3133"],
      image: {
        full: "3156.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 850,
        purchasable: true,
        total: 3250,
        sell: 2275
      },
      tags: [
        "SpellBlock",
        "Damage",
        "LifeSteal",
        "CooldownReduction",
        "SpellVamp"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 50,
        FlatSpellBlockMod: 50
      },
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "35",
        Effect3Amount: "0.3",
        Effect4Amount: "350",
        Effect5Amount: "5",
        Effect6Amount: "90",
        Effect7Amount: "20",
        Effect8Amount: "0",
        Effect9Amount: "0.1",
        Effect10Amount: "0.1"
      },
      depth: 3
    },
    "3157": {
      name: "Zhonya's Hourglass",
      description:
        "<stats>+75 Ability Power<br>+45 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
      colloq: ";zhg;zonyas",
      plaintext: "Activate to become invincible but unable to take actions",
      from: ["3191", "3108", "2420"],
      into: ["3386"],
      image: {
        full: "3157.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ["Armor", "SpellDamage", "Active", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 75,
        FlatArmorMod: 45
      },
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "2.5",
        Effect3Amount: "120"
      },
      depth: 3
    },
    "3158": {
      name: "Ionian Boots of Lucidity",
      description:
        "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive:</unique> Reduces Summoner Spell cooldowns by 10%<br><br><br><rules><font color='#FDD017'>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.''</font></rules>",
      colloq: ";",
      plaintext: "Increases Movement Speed and Cooldown Reduction",
      from: ["1001"],
      image: {
        full: "3158.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ["Boots", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 45
      },
      effect: {
        Effect1Amount: "-0.1",
        Effect2Amount: "0.1"
      },
      depth: 2
    },
    "3161": {
      name: "Spear of Shojin",
      description:
        "<stats>+60 Attack Damage<br>+250 Health<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> After you cast your ultimate, your next basic attack within 10 seconds grants <unlockedPassive>Awakened Dragon</unlockedPassive> for 6 seconds (30 second cooldown).<br><br><unlockedPassive>Awakened Dragon:</unlockedPassive> Gain 50% attack speed, and basic attacks refund 20% of your remaining non-ultimate cooldowns.",
      colloq: ";",
      plaintext:
        "After casting your ultimate, your basic attacks reduces your remaining non-ultimate cooldowns.",
      stacks: 0,
      from: ["1038", "3067", "1036"],
      image: {
        full: "3161.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 3400,
        sell: 2380
      },
      tags: ["Health", "Damage", "CooldownReduction"],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 60,
        FlatHPPoolMod: 250
      },
      effect: {
        Effect1Amount: "0.01",
        Effect2Amount: "0",
        Effect3Amount: "0.5",
        Effect4Amount: "0.2",
        Effect5Amount: "6",
        Effect6Amount: "30",
        Effect7Amount: "0.2",
        Effect8Amount: "10"
      },
      depth: 3
    },
    "3165": {
      name: "Morellonomicon",
      description:
        "<stats>+70 Ability Power<br>+300 Health</stats><br><br><unique>UNIQUE Passive - Touch of Death:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a><br><unique>UNIQUE Passive - Cursed Strike:</unique> Magic damage dealt to champions inflicts them with <a href='GrievousWounds'>Grievous Wounds</a> for 3 seconds.",
      colloq: ";nmst;grievous",
      plaintext: "Increases magic damage",
      from: ["3916", "1026"],
      image: {
        full: "3165.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 550,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ["Health", "SpellDamage", "MagicPenetration"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 70
      },
      effect: {
        Effect1Amount: "15",
        Effect2Amount: "40",
        Effect3Amount: "3",
        Effect4Amount: "0.2",
        Effect5Amount: "60",
        Effect6Amount: "1",
        Effect7Amount: "50",
        Effect8Amount: "150",
        Effect9Amount: "20"
      },
      depth: 3
    },
    "3174": {
      name: "Athene's Unholy Grail",
      description:
        "<stats>+30 Ability Power<br>+30 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> Gain 35% of the <a href='premitigation'><font color='#6666FF'><u>premitigation</u></font></a> damage dealt to champions as Blood Charges, up to <scaleLevel>100 - 250</scaleLevel> max. Healing or shielding another ally consumes charges equal to 100% of the heal or shield value, healing the ally for that amount.<br><unique>UNIQUE Passive - Dissonance:</unique> Grants 5 ability power per 25% Base Mana Regen you have. Disables <unique>Harmony</unique> on your other items.<br><br><rules>(Maximum amount of Blood Charges stored is based on level. Healing amplification is applied to the total heal value.)</rules>",
      colloq: ";",
      plaintext: "Deal damage to empower your heals and shields",
      from: ["3108", "3028"],
      image: {
        full: "3174.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 2100,
        sell: 1470
      },
      tags: [
        "SpellBlock",
        "HealthRegen",
        "SpellDamage",
        "ManaRegen",
        "CooldownReduction"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 30,
        FlatMagicDamageMod: 30
      },
      effect: {
        Effect1Amount: "10",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "5",
        Effect6Amount: "0.35",
        Effect7Amount: "100",
        Effect8Amount: "250",
        Effect9Amount: "1",
        Effect10Amount: "1",
        Effect11Amount: "0.25",
        Effect12Amount: "600",
        Effect13Amount: "8",
        Effect14Amount: "90"
      },
      depth: 3
    },
    "3175": {
      name: "Head of Kha'Zix",
      description:
        "<unique>UNIQUE Active - Bonetooth Totem:</unique> Places a Stealth Ward that lasts 180 seconds (90 Second cooldown). Limit 3 Stealth Wards on the map per player.<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Rengar gains the movement speed bonus of Thrill of the Hunt while he is stealthed.",
      colloq: "",
      plaintext: "",
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: "Rengar",
      hideFromAll: true,
      image: {
        full: "3175.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Active", "Trinket", "Vision"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "25",
        Effect2Amount: "125",
        Effect3Amount: "5",
        Effect4Amount: "180",
        Effect5Amount: "90"
      }
    },
    "3179": {
      name: "Umbral Glaive",
      description:
        "<stats>+50 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive</unique>: +12 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive - Blackout:</unique> When spotted by an enemy ward, reveal traps and disable wards around you for 8 seconds (45 second cooldown). Basic attacks instantly kill revealed traps and do triple damage to wards.",
      colloq: ";lethality",
      plaintext: "Provides trap and ward detection periodically",
      from: ["3134", "1036", "1036"],
      image: {
        full: "3179.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2400,
        sell: 1680
      },
      tags: [
        "Damage",
        "Vision",
        "CooldownReduction",
        "OnHit",
        "ArmorPenetration"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 50
      },
      effect: {
        Effect1Amount: "12",
        Effect2Amount: "8",
        Effect3Amount: "45"
      },
      depth: 3
    },
    "3181": {
      name: "Sanguine Blade",
      description:
        "<stats>+50 Attack Damage<br>+15% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> +10 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive - Blood Pursuit:</unique> While near one or fewer visible enemy champions gain 8 <a href='Lethality'>Lethality</a> and 20%-80% Attack Speed (based on level), decaying over 3 seconds if other enemy champions get too close.",
      colloq: ";lethality",
      plaintext:
        "When hunting lone enemy champions gain Attack Speed and Lethality",
      from: ["3134", "1053"],
      image: {
        full: "3181.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 1100,
        purchasable: true,
        total: 3100,
        sell: 2170
      },
      tags: ["Damage", "AttackSpeed", "LifeSteal", "ArmorPenetration"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 50,
        PercentLifeStealMod: 0.15
      },
      effect: {
        Effect1Amount: "10",
        Effect2Amount: "0.2",
        Effect3Amount: "0.8",
        Effect4Amount: "4",
        Effect5Amount: "3",
        Effect6Amount: "1400",
        Effect7Amount: "8"
      },
      depth: 3
    },
    "3184": {
      name: "Guardian's Hammer",
      description:
        "<stats>+150 Health<br>+20 Attack Damage<br>+10% Life Steal</stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
      colloq: ";dblade",
      plaintext: "Good starting item for attackers",
      image: {
        full: "3184.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 380
      },
      tags: ["Health", "Damage", "LifeSteal", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 20,
        FlatHPPoolMod: 150,
        PercentLifeStealMod: 0.1
      }
    },
    "3190": {
      name: "Locket of the Iron Solari",
      description:
        "<stats>+30 Armor<br>+60 Magic Resist</stats><br><br><active>UNIQUE Active:</active> Grants a decaying shield to nearby allied champions for 2.5 seconds that absorbs up to 120 (+10 per level) <scaleHealth>(+20% of your bonus health)</scaleHealth> damage (120 second cooldown).<br><br><rules>Shield per level uses the higher of your level or the target's level.<br>Shield ratio scales with your level.<br>Shield amount is reduced to 25% if the target has been affected by another Locket of the Iron Solari in the last 20 seconds.</rules>",
      colloq: ";",
      plaintext: "Activate to shield nearby allies from damage",
      from: ["3105", "1033"],
      into: ["3383"],
      image: {
        full: "3190.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2200,
        sell: 1540
      },
      tags: ["SpellBlock", "Armor", "Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 60,
        FlatArmorMod: 30
      },
      effect: {
        Effect1Amount: "120",
        Effect2Amount: "10",
        Effect3Amount: "2.5",
        Effect4Amount: "0.25",
        Effect5Amount: "20",
        Effect6Amount: "120",
        Effect7Amount: "0.2"
      },
      depth: 3
    },
    "3191": {
      name: "Seeker's Armguard",
      description:
        "<stats>+30 Armor<br>+20 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.",
      colloq: ";",
      plaintext: "Increases Armor and Ability Power",
      from: ["1029", "1052", "1029"],
      into: ["3157"],
      image: {
        full: "3191.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 65,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ["Armor", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 20,
        FlatArmorMod: 30
      },
      effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "30"
      },
      depth: 2
    },
    "3193": {
      name: "Gargoyle Stoneplate",
      description:
        "<stats>+40 Armor<br>+40 Magic Resist</stats><br><br><unique>UNIQUE Passive - Stone Skin:</unique> If 3+ enemy champions are nearby, grants 40 bonus Armor and Magic Resist.<br><active>UNIQUE Active - Metallicize:</active> Increases Health by 40% and increases champion size, but reduces damage dealt by 60% for 4 seconds (90 second cooldown). If Stone Skin is active, the Health increase becomes 100% instead.",
      colloq: ";",
      plaintext: "Greatly increases defense near multiple enemies.",
      from: ["1031", "1057", "2420"],
      image: {
        full: "3193.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 330,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: ["Health", "SpellBlock", "Armor"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 40,
        FlatArmorMod: 40
      },
      effect: {
        Effect1Amount: "40",
        Effect2Amount: "850",
        Effect3Amount: "3",
        Effect4Amount: "4",
        Effect5Amount: "0.6",
        Effect6Amount: "0.4",
        Effect7Amount: "0.07",
        Effect8Amount: "1",
        Effect9Amount: "0.25",
        Effect10Amount: "90",
        Effect11Amount: "1"
      },
      depth: 3
    },
    "3194": {
      name: "Adaptive Helm",
      description:
        "<stats>+350 Health<br>+55 Magic Resist<br>+100% Base Health Regeneration <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Taking magic damage from a spell or effect reduces all subsequent magic damage from that same spell or effect by 20% for 4 seconds.",
      colloq: ";",
      plaintext: "Reduces damage from repeated spells and effects.",
      from: ["1033", "3211", "1006"],
      image: {
        full: "3194.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1000,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ["Health", "SpellBlock", "HealthRegen", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 350,
        FlatSpellBlockMod: 55
      },
      effect: {
        Effect1Amount: "20",
        Effect2Amount: "4",
        Effect3Amount: "25"
      },
      depth: 3
    },
    "3196": {
      name: "Hex Core mk-1",
      description:
        "<stats>+3 Ability Power per level<br>+15 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.",
      colloq: ";viktor",
      plaintext: "Allows Viktor to improve an ability of his choice",
      from: ["3200"],
      requiredChampion: "Viktor",
      into: ["3197"],
      image: {
        full: "3196.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1150,
        purchasable: true,
        total: 1150,
        sell: 805
      },
      tags: ["Mana", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "3",
        Effect2Amount: "15"
      },
      depth: 2
    },
    "3197": {
      name: "Hex Core mk-2",
      description:
        "<stats>+6 Ability Power per level<br>+20 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.",
      colloq: ";viktor",
      plaintext: "Allows Viktor to improve an ability of his choice",
      from: ["3196"],
      requiredChampion: "Viktor",
      into: ["3198"],
      image: {
        full: "3197.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1000,
        purchasable: true,
        total: 2150,
        sell: 1505
      },
      tags: ["Mana", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "6",
        Effect2Amount: "20"
      },
      depth: 3
    },
    "3198": {
      name: "Perfect Hex Core",
      description:
        "<stats>+10 Ability Power per level<br>+25 Mana per level</stats><br><br><unique>UNIQUE Passive - Glorious Evolution:</unique> Viktor has reached the pinnacle of his power, upgrading Chaos Storm in addition to his basic spells.",
      colloq: ";viktor",
      plaintext: "Allows Viktor to improve an ability of his choice",
      from: ["3197"],
      requiredChampion: "Viktor",
      image: {
        full: "3198.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 850,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ["Mana", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "10",
        Effect2Amount: "25"
      },
      depth: 4
    },
    "3200": {
      name: "Prototype Hex Core",
      description:
        "<stats>+1 Ability Power per level<br>+10 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> This item can be upgraded three times to enhance Viktor's basic abilities.",
      colloq: ";viktor",
      plaintext:
        "Increases Ability Power and can be upgraded to improve Viktor's abilities",
      inStore: false,
      requiredChampion: "Viktor",
      into: ["3196"],
      image: {
        full: "3200.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "1",
        Effect2Amount: "10"
      }
    },
    "3211": {
      name: "Spectre's Cowl",
      description:
        "<stats>+250 Health<br>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Grants 150% Base Health Regen for up to 10 seconds after taking damage from an enemy champion.",
      colloq: ";hat",
      plaintext: "Improves defense and grants regeneration upon being damaged",
      from: ["1028", "1033"],
      into: ["3065", "3194"],
      image: {
        full: "3211.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1200,
        sell: 840
      },
      tags: ["Health", "HealthRegen", "SpellBlock"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 250,
        FlatSpellBlockMod: 25
      },
      effect: {
        Effect1Amount: "1.5",
        Effect2Amount: "10"
      },
      depth: 2
    },
    "3222": {
      name: "Mikael's Crucible",
      description:
        "<stats>+40 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +20% Heal and Shield Power<br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.<br><active>UNIQUE Active:</active> Cleanses all stuns, roots, taunts, fears, silences, and slows on an allied champion and grants them slow immunity for 2 seconds (120 second cooldown). <br><br>Cleansing an effect grants the ally 40% movement speed for 2 seconds.",
      colloq: ";",
      plaintext:
        "Activate to remove all disabling effects from an allied champion",
      from: ["3028", "3114"],
      image: {
        full: "3222.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 2100,
        sell: 1470
      },
      tags: [
        "SpellBlock",
        "HealthRegen",
        "ManaRegen",
        "Active",
        "CooldownReduction"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 40
      },
      effect: {
        Effect1Amount: "2",
        Effect2Amount: "5",
        Effect3Amount: "0.5",
        Effect4Amount: "0.25",
        Effect5Amount: "600",
        Effect6Amount: "8",
        Effect7Amount: "90",
        Effect8Amount: "1",
        Effect9Amount: "1",
        Effect10Amount: "0.4",
        Effect11Amount: "0.2",
        Effect12Amount: "2",
        Effect13Amount: "120"
      },
      depth: 3
    },
    "3285": {
      name: "Luden's Echo",
      description:
        "<stats>+90 Ability Power<br><mana>+600 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.",
      colloq: ";",
      plaintext: "Increases Ability Power, Mana, and Cooldown Reduction",
      from: ["3802", "1026"],
      into: ["3390"],
      image: {
        full: "3285.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1050,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ["SpellDamage", "Mana", "CooldownReduction", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 600,
        FlatMagicDamageMod: 90
      },
      effect: {
        Effect1Amount: "100",
        Effect2Amount: "100",
        Effect3Amount: "4",
        Effect4Amount: "0.1",
        Effect5Amount: "35",
        Effect6Amount: "10",
        Effect7Amount: "0",
        Effect8Amount: "0",
        Effect9Amount: "-0.1"
      },
      depth: 3
    },
    "3340": {
      name: "Warding Totem (Trinket)",
      description:
        "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consume a charge to place an invisible <font color='#BBFFFF'>Stealth Ward</font> which reveals the surrounding area for <scaleLevel>90 - 120</scaleLevel> seconds. <br><br>Stores one charge every <scaleLevel>240 - 120</scaleLevel> seconds, up to 2 maximum charges.<br><br>Ward duration and recharge time gradually improve with level.<br><br><rules>(Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player.)</rules>",
      colloq: "yellow; totem; trinket",
      plaintext: "Periodically place a Stealth Ward",
      image: {
        full: "3340.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Active", "Jungle", "Lane", "Trinket", "Vision"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "90",
        Effect2Amount: "240",
        Effect3Amount: "120",
        Effect4Amount: "120",
        Effect5Amount: "2",
        Effect6Amount: "9",
        Effect7Amount: "30",
        Effect8Amount: "120"
      }
    },
    "3348": {
      name: "Arcane Sweeper",
      description:
        "<active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting <font color='#ee91d7'>True Sight</font> of traps in the area for 3 seconds (90 second cooldown).",
      colloq: ";",
      plaintext: "Activate to reveal a nearby area of the map",
      inStore: false,
      image: {
        full: "3348.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Vision", "Trinket", "Stealth", "Active"],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "5",
        Effect5Amount: "3",
        Effect6Amount: "90"
      }
    },
    "3361": {
      name: "Greater Stealth Totem (Trinket)",
      description:
        "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Consume a charge to place an invisible ward that reveals the surrounding area for 180 seconds.  Stores a charge every 60 seconds, up to 2 total. Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>",
      colloq: "yellow;",
      plaintext: "Periodically place a Stealth Ward",
      inStore: false,
      image: {
        full: "3361.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: false,
        total: 250,
        sell: 175
      },
      tags: ["Active", "Trinket", "Vision"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "180",
        Effect2Amount: "60",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "0",
        Effect6Amount: "9",
        Effect7Amount: "30",
        Effect8Amount: "120"
      }
    },
    "3362": {
      name: "Greater Vision Totem (Trinket)",
      description:
        "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Places a visible ward that reveals the surrounding area and invisible units in the area until killed (120 second cooldown). Limit 1 <font color='#BBFFFF'>Vision Ward</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>",
      colloq: "yellow;",
      plaintext: "Periodically place a Vision Ward",
      inStore: false,
      image: {
        full: "3362.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: false,
        total: 250,
        sell: 175
      },
      tags: ["Active", "Trinket", "Vision"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "120",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "0",
        Effect6Amount: "9",
        Effect7Amount: "30",
        Effect8Amount: "120"
      }
    },
    "3363": {
      name: "Farsight Alteration",
      description:
        "<levelLimit>Level 9+ required to upgrade.</levelLimit><br><groupLimit>Limited to 1 Trinket.</groupLimit><br><br>Alters the <font color='#FFFFFF'>Warding Totem</font> Trinket:<br><br><stats><font color='#00FF00'>+</font> Massively increased cast range (+650%)<br><font color='#00FF00'>+</font> Infinite duration and does not count towards ward limit<br><font color='#FF0000'>-</font> <font color='#FF6600'>10% increased cooldown</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Ward is visible, fragile, untargetable by allies</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>45% reduced ward vision radius</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Cannot store charges</font></stats>",
      colloq: "blue; totem; trinket",
      plaintext: "Grants increased range and reveals the targetted area",
      image: {
        full: "3363.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Active", "Trinket", "Vision"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "4000",
        Effect2Amount: "2",
        Effect3Amount: "5",
        Effect4Amount: "198",
        Effect5Amount: "60",
        Effect6Amount: "9",
        Effect7Amount: "30",
        Effect8Amount: "120",
        Effect9Amount: "6.5",
        Effect10Amount: "198",
        Effect11Amount: "99",
        Effect12Amount: "60",
        Effect13Amount: "180",
        Effect14Amount: "10",
        Effect15Amount: "45"
      }
    },
    "3364": {
      name: "Oracle Lens",
      description:
        "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Scans around you, warning against hidden hostile units, and revealing invisible traps and revealing / disabling nearby wards for 10 seconds (90 to 60 second cooldown).",
      colloq: "red; lens; trinket",
      plaintext: "Disables nearby invisible wards and traps for a duration",
      image: {
        full: "3364.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Active", "Trinket", "Vision"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "6",
        Effect2Amount: "10",
        Effect3Amount: "90",
        Effect4Amount: "60",
        Effect5Amount: "0",
        Effect6Amount: "1",
        Effect7Amount: "30",
        Effect8Amount: "120",
        Effect9Amount: "60"
      }
    },
    "3371": {
      name: "Molten Edge",
      description:
        "<stats><font color='#FFFFFF'>+110 Attack Damage</font><br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical strikes deal 225% damage instead of 200%.",
      colloq: ";ie;Ornn;forge;Masterwork",
      plaintext: "Massively enhances critical strikes",
      from: ["3031"],
      requiredAlly: "Ornn",
      image: {
        full: "3371.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3400,
        sell: 2380
      },
      tags: ["Damage", "CriticalStrike"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 110,
        FlatCritChanceMod: 0.25
      },
      effect: {
        Effect1Amount: "2.25"
      },
      depth: 3
    },
    "3373": {
      name: "Forgefire Cape",
      description:
        "<stats><font color='#FFFFFF'>+750 Health</font><br><font color='#FFFFFF'>+100 Armor</font></stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Burns nearby enemies for <scaleLevel>[26 to 43]</scaleLevel> magic damage per second. Once every 10 seconds, your next immobilizing spell deals [26 to 43] (+5% Your Bonus HP) bonus magic damage and releases a fire nova that also deals that bonus damage around you. Immolate's damage is increased by 50% to minions and monsters.",
      colloq: ";Ornn;forge;Masterwork",
      plaintext: "Constantly deals damage to nearby enemies",
      from: ["3068"],
      requiredAlly: "Ornn",
      image: {
        full: "3373.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2750,
        sell: 1925
      },
      tags: ["Health", "Armor"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 750,
        FlatArmorMod: 100
      },
      effect: {
        Effect1Amount: "26",
        Effect2Amount: "43",
        Effect3Amount: "0.5",
        Effect4Amount: "10",
        Effect5Amount: "0.05"
      },
      depth: 4
    },
    "3374": {
      name: "Rabadon's Deathcrown",
      description:
        "<stats><font color='#FFFFFF'>+175 Ability Power</font>  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 40%.",
      colloq: ";dc;banksys;hat;Ornn;forge;Masterwork",
      plaintext: "Massively increases Ability Power",
      from: ["3089"],
      requiredAlly: "Ornn",
      image: {
        full: "3374.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3600,
        sell: 2520
      },
      tags: ["SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 175
      },
      effect: {
        Effect1Amount: "40"
      },
      depth: 3
    },
    "3379": {
      name: "Infernal Mask",
      description:
        "<stats><font color='#FFFFFF'>+750 Health</font><br><mana>+300 Mana</mana><br><font color='#FFFFFF'>+100 Magic Resist</font><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><aura>UNIQUE Aura:</aura> Nearby enemy champions take 15% more magic damage.",
      colloq: ";Ornn;forge;Masterwork",
      plaintext: "Nearby enemies take more magic damage",
      from: ["3001"],
      requiredAlly: "Ornn",
      image: {
        full: "3379.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: [
        "Health",
        "SpellBlock",
        "HealthRegen",
        "Mana",
        "ManaRegen",
        "Aura",
        "CooldownReduction",
        "MagicPenetration"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 750,
        FlatSpellBlockMod: 100,
        FlatMPPoolMod: 300
      },
      effect: {
        Effect1Amount: "-10",
        Effect2Amount: "-25",
        Effect3Amount: "0.15",
        Effect4Amount: "25",
        Effect5Amount: "0.2",
        Effect6Amount: "0.15"
      },
      depth: 4
    },
    "3380": {
      name: "Obsidian Cleaver",
      description:
        "<stats><font color='#FFFFFF'>+550 Health</font><br><font color='#FFFFFF'>+60 Attack Damage</font><br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 4% for 6 seconds (stacks up to 6 times, up to 24%).<br><unique>UNIQUE Passive - Rage:</unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.",
      colloq: ";bc;Ornn;forge;Masterwork",
      plaintext:
        "Dealing physical damage to enemy champions reduces their Armor",
      from: ["3071"],
      requiredAlly: "Ornn",
      image: {
        full: "3380.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: [
        "ArmorPenetration",
        "CooldownReduction",
        "Damage",
        "Health",
        "NonbootsMovement",
        "OnHit"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 60,
        FlatHPPoolMod: 550
      },
      effect: {
        Effect1Amount: "-0.2",
        Effect2Amount: "0.04",
        Effect3Amount: "6",
        Effect4Amount: "6",
        Effect5Amount: "0.24",
        Effect6Amount: "20",
        Effect7Amount: "2",
        Effect8Amount: "60",
        Effect9Amount: "2",
        Effect10Amount: "0.01"
      },
      depth: 4
    },
    "3382": {
      name: "Salvation",
      description:
        "<stats><font color='#FFFFFF'>+300 Health</font><br><font color='#FFFFFF'>+150% Base Health Regen </font><br><font color='#FFFFFF'>+200% Base Mana Regen </font><br>+10% Cooldown Reduction</stats><br><br><passive>UNIQUE Passive:</passive> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 10 (+20 per level of target) Health, burn enemy champions for 10% of their maximum Health as <font color='#FFFFFF'>true</font> damage and deal 250 <font color='#FFFFFF'>true</font> damage to enemy minions (120 second cooldown). Heal and Shield Power is 3 times as effective on Salvation's heal.<br><br>Can be used while dead.<br><br><rules>Half effect if the target has been affected by Redemption recently.</rules>",
      colloq: ";Ornn;forge;Masterwork",
      plaintext: "Activate to heal allies and damage enemies in an area",
      from: ["3107"],
      requiredAlly: "Ornn",
      image: {
        full: "3382.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2100,
        sell: 1470
      },
      tags: ["Health", "HealthRegen", "ManaRegen", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: "0.1",
        Effect2Amount: "10",
        Effect3Amount: "20",
        Effect4Amount: "0.1",
        Effect5Amount: "250",
        Effect6Amount: "120",
        Effect7Amount: "550",
        Effect8Amount: "5500",
        Effect9Amount: "0.5",
        Effect10Amount: "8",
        Effect11Amount: "3"
      },
      depth: 4
    },
    "3383": {
      name: "Circlet of the Iron Solari",
      description:
        "<stats><font color='#FFFFFF'>+45 Armor</font><br><font color='#FFFFFF'>+75 Magic Resist</font></stats><br><br><active>UNIQUE Active:</active> Grants a decaying shield to nearby allied champions for 2.5 seconds that absorbs up to 120 (+10 per level) <scaleHealth>(+20% of your bonus health)</scaleHealth> damage (120 second cooldown).<br><br><rules>Shield per level uses the higher of your level or the target's level.<br>Shield ratio scales with your level.<br>Shield amount is reduced to 25% if the target has been affected by another Locket of the Iron Solari in the last 20 seconds.</rules>",
      colloq: ";Ornn;forge;Masterwork",
      plaintext: "Activate to shield nearby allies from damage",
      from: ["3190"],
      requiredAlly: "Ornn",
      image: {
        full: "3383.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2200,
        sell: 1540
      },
      tags: ["SpellBlock", "Armor", "Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatSpellBlockMod: 75,
        FlatArmorMod: 45
      },
      effect: {
        Effect1Amount: "120",
        Effect2Amount: "10",
        Effect3Amount: "2.5",
        Effect4Amount: "0.25",
        Effect5Amount: "20",
        Effect6Amount: "120",
        Effect7Amount: "0.2"
      },
      depth: 4
    },
    "3384": {
      name: "Trinity Fusion",
      description:
        "<stats><font color='#FFFFFF'>+350 Health</font><br><font color='#FFFFFF'><mana>+350 Mana</mana></font><br><font color='#FFFFFF'>+35 Attack Damage</font><br><font color='#FFFFFF'>+50% Attack Speed</font><br>+20% Cooldown Reduction<br><font color='#FFFFFF'>+8% Movement Speed</font></stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).",
      colloq: ";triforce;tons of damage;Ornn;forge;Masterwork",
      plaintext: "Tons of Damage",
      from: ["3078"],
      requiredAlly: "Ornn",
      image: {
        full: "3384.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3733,
        sell: 2613
      },
      tags: [
        "Health",
        "Damage",
        "AttackSpeed",
        "Mana",
        "CooldownReduction",
        "OnHit",
        "NonbootsMovement"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        PercentMovementSpeedMod: 0.08,
        FlatHPPoolMod: 350,
        FlatMPPoolMod: 350,
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: "20",
        Effect2Amount: "60",
        Effect3Amount: "2",
        Effect4Amount: "2",
        Effect5Amount: "1.5"
      },
      depth: 4
    },
    "3386": {
      name: "Zhonya's Paradox",
      description:
        "<stats><font color='#FFFFFF'>+100 Ability Power</font><br><font color='#FFFFFF'>+60 Armor</font><br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
      colloq: ";zhg;zonyas;ornn;forge",
      plaintext: "Activate to become invincible but unable to take actions",
      from: ["3157"],
      requiredAlly: "Ornn",
      image: {
        full: "3386.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ["Armor", "SpellDamage", "Active", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 100,
        FlatArmorMod: 60
      },
      effect: {
        Effect1Amount: "0",
        Effect2Amount: "2.5",
        Effect3Amount: "120"
      },
      depth: 4
    },
    "3387": {
      name: "Frozen Fist",
      description:
        "<stats><font color='#FFFFFF'>+125 Armor</font><br>+20% Cooldown Reduction<br><font color='#FFFFFF'>+700 Mana</font></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.",
      colloq: ";frozen fist;Ornn",
      plaintext: "Basic attacks create a slow field after spell cast",
      from: ["3025"],
      requiredAlly: "Ornn",
      image: {
        full: "3387.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2700,
        sell: 1890
      },
      tags: ["Armor", "Mana", "CooldownReduction", "Slow"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 700,
        FlatArmorMod: 125
      },
      effect: {
        Effect1Amount: "-0.2",
        Effect2Amount: "1",
        Effect3Amount: "2",
        Effect4Amount: "-0.3",
        Effect5Amount: "1.5"
      },
      depth: 4
    },
    "3388": {
      name: "Youmuu's Wraithblade",
      description:
        "<stats><font color='#FFFFFF'>+75 Attack Damage</font><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> <font color='#FFFFFF'>+25 <a href='Lethality'>Lethality</a></font><br><unique>UNIQUE Passive:</unique> +40 Movement Speed out of Combat<br><active>UNIQUE Active:</active> Grants +20% Movement Speed for 6 seconds (45 second cooldown).",
      colloq: ";lethality;Ornn",
      plaintext: "Activate to greatly increase Movement Speed",
      from: ["3142"],
      requiredAlly: "Ornn",
      image: {
        full: "3388.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: [
        "Damage",
        "Active",
        "CooldownReduction",
        "NonbootsMovement",
        "ArmorPenetration"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 75
      },
      effect: {
        Effect1Amount: "45",
        Effect2Amount: "25",
        Effect3Amount: "0.2",
        Effect4Amount: "0",
        Effect5Amount: "6",
        Effect6Amount: "40"
      },
      depth: 4
    },
    "3389": {
      name: "Might of the Ruined King",
      description:
        "<stats><font color='#FFFFFF'>+55 Attack Damage</font><br><font color='#FFFFFF'>+40% Attack Speed</font><br>+12% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health as bonus physical damage on hit.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).<br><br><rules>Minimum bonus physical damage dealt is 15.<br>Maximum bonus physical damage dealt to monsters and minions is 60.<br>User's Life Steal is applied to bonus physical damage dealt.</rules>",
      colloq: ";brk;bork;bork;bork;botrk;Ornn",
      plaintext:
        "Deals damage based on target's Health, can steal Movement Speed",
      from: ["3153"],
      requiredAlly: "Ornn",
      image: {
        full: "3389.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3300,
        sell: 2310
      },
      tags: [
        "Damage",
        "AttackSpeed",
        "LifeSteal",
        "Active",
        "Slow",
        "OnHit",
        "NonbootsMovement"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 55,
        PercentAttackSpeedMod: 0.4,
        PercentLifeStealMod: 0.12
      },
      effect: {
        Effect1Amount: "0.08",
        Effect2Amount: "0.08",
        Effect3Amount: "15",
        Effect4Amount: "60"
      },
      depth: 5
    },
    "3390": {
      name: "Luden's Pulse",
      description:
        "<stats><font color='#FFFFFF'>+120 Ability Power</font><br><mana><font color='#FFFFFF'>+850 Mana</font></mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.",
      colloq: ";Ornn",
      plaintext: "Increases Ability Power, Mana, and Cooldown Reduction",
      from: ["3285"],
      requiredAlly: "Ornn",
      image: {
        full: "3390.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ["SpellDamage", "Mana", "CooldownReduction", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 850,
        FlatMagicDamageMod: 120
      },
      effect: {
        Effect1Amount: "100",
        Effect2Amount: "100",
        Effect3Amount: "4",
        Effect4Amount: "0.1",
        Effect5Amount: "35",
        Effect6Amount: "10",
        Effect7Amount: "0",
        Effect8Amount: "0",
        Effect9Amount: "-0.1"
      },
      depth: 4
    },
    "3400": {
      name: "'Your Cut'",
      description:
        "<spellPassive>Click to Consume:</spellPassive> Gain <gold>Gold</gold>!",
      colloq: "",
      plaintext: "",
      consumed: true,
      inStore: false,
      hideFromAll: true,
      image: {
        full: "3400.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Consumable", "GoldPer"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "3410": {
      name: "Head of Kha'Zix",
      description:
        "<unique>UNIQUE Active - Sweeping Lens:</unique> Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a medium radius and grants detection of invisible units for 10 seconds (60 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
      colloq: "",
      plaintext: "",
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: "Rengar",
      hideFromAll: true,
      image: {
        full: "3410.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Active", "Trinket", "Vision"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "25",
        Effect2Amount: "125",
        Effect3Amount: "5",
        Effect4Amount: "6",
        Effect5Amount: "10",
        Effect6Amount: "60"
      }
    },
    "3416": {
      name: "Head of Kha'Zix",
      description:
        "<unique>UNIQUE Active - Scrying:</unique> Reveals a small location within 4000 range for 2 seconds. Enemy champions found will be revealed for 5 seconds (90 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
      colloq: "",
      plaintext: "",
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: "Rengar",
      hideFromAll: true,
      image: {
        full: "3416.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Active", "Trinket", "Vision"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "25",
        Effect2Amount: "125",
        Effect3Amount: "5",
        Effect4Amount: "4000",
        Effect5Amount: "2",
        Effect6Amount: "5",
        Effect7Amount: "90"
      }
    },
    "3422": {
      name: "Head of Kha'Zix",
      description:
        "<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
      colloq: "",
      plaintext: "",
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: "Rengar",
      hideFromAll: true,
      image: {
        full: "3422.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Active", "Trinket", "Vision"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "25",
        Effect2Amount: "125",
        Effect3Amount: "5"
      }
    },
    "3455": {
      name: "Head of Kha'Zix",
      description:
        "<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
      colloq: "",
      plaintext: "",
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: "Rengar",
      hideFromAll: true,
      image: {
        full: "3455.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Active", "Trinket", "Vision"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "25",
        Effect2Amount: "125",
        Effect3Amount: "5"
      }
    },
    "3504": {
      name: "Ardent Censer",
      description:
        "<stats>+60 Ability Power<br>+10% Cooldown Reduction<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Heal and Shield Power<br><unique>UNIQUE Passive:</unique> +8% Movement Speed<br><unique>UNIQUE Passive:</unique> Whenever you heal or shield an ally, you and your ally gain 10% - 30% Attack Speed and your attacks deal an additional 5 - 20 on-hit magic damage for 6 seconds. <br><br><rules>This does not include regeneration effects. Bonus effects are based on target's level.</rules>",
      colloq: "",
      plaintext:
        "Shield and heal effects on other units grant both of you Attack Speed and their attacks deal additional on-hit magic damage.",
      from: ["3114", "3113"],
      image: {
        full: "3504.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2300,
        sell: 1610
      },
      tags: [
        "CooldownReduction",
        "ManaRegen",
        "NonbootsMovement",
        "SpellDamage"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMagicDamageMod: 60
      },
      effect: {
        Effect1Amount: "0.08",
        Effect2Amount: "0.1",
        Effect3Amount: "6",
        Effect4Amount: "5",
        Effect5Amount: "0.1",
        Effect6Amount: "0.3",
        Effect7Amount: "20"
      },
      depth: 3
    },
    "3508": {
      name: "Essence Reaver",
      description:
        "<stats>+70 Attack Damage<br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Basic attacks refund 1.5% of your missing mana.",
      colloq: ";",
      plaintext:
        "Grants Critical Strike Chance, Cooldown Reduction, Attack Damage and restores mana on hit.",
      from: ["1038", "3133", "1018"],
      image: {
        full: "3508.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 100,
        purchasable: true,
        total: 3300,
        sell: 2310
      },
      tags: [
        "Damage",
        "CriticalStrike",
        "Mana",
        "ManaRegen",
        "CooldownReduction"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 70,
        FlatCritChanceMod: 0.25
      },
      effect: {
        Effect1Amount: "0.015",
        Effect2Amount: "0.2",
        Effect3Amount: "0.5",
        Effect4Amount: "0.2",
        Effect5Amount: "6",
        Effect6Amount: "30",
        Effect7Amount: "0.2",
        Effect8Amount: "10"
      },
      depth: 3
    },
    "3513": {
      name: "Eye of the Herald",
      description:
        "<br><unique>UNIQUE Passive - Glimpse of the Void:</unique> The holder of the Eye of the Herald has Empowered Recall.<br><br><active>UNIQUE Active:</active> Channel for 1 seconds to crush the Eye of the Herald, summoning the Rift Herald to siege enemy turrets.<br><br>The Eye of the Herald will be lost to the Void if not used within 240 seconds.",
      colloq: ";Herald's Eye",
      plaintext: "Eye of the Herald - a Gift of the Void.",
      consumed: true,
      inStore: false,
      image: {
        full: "3513.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Trinket", "Active"],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "240",
        Effect2Amount: "1",
        Effect3Amount: "20"
      }
    },
    "3514": {
      name: "Eye of the Herald",
      description:
        "<br><unique>UNIQUE Passive - Glimpse of the Void:</unique> The holder of the Eye of the Herald has Empowered Recall.<br><br><active>UNIQUE Active:</active> Channel for 1 seconds to crush the Eye of the Herald, summoning the Rift Herald to siege enemy turrets.<br><br>The Eye of the Herald will be lost to the Void if not used within 240 seconds.",
      colloq: ";Herald's Eye",
      plaintext: "Eye of the Herald - a Gift of the Void.",
      consumed: true,
      inStore: false,
      image: {
        full: "3514.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Trinket", "Active"],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "240",
        Effect2Amount: "1",
        Effect3Amount: "40"
      }
    },
    "3520": {
      name: "Ghost Poro",
      description:
        "<subtitleLeft><font color='#FFFFFF'>(Trinket)</font></subtitleLeft><br><mainText><active>Active:</active> Command your Ghost Poro to stay in a brush. Gain additional stats if you or your Ghost Poro are in enemy territory.</mainText>",
      colloq: "",
      plaintext: "",
      consumed: true,
      inStore: false,
      image: {
        full: "3520.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ["Vision", "Trinket", "Active"],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "240",
        Effect2Amount: "3.5",
        Effect3Amount: "42"
      }
    },
    "3599": {
      name: "Black Spear",
      description:
        "<stats></stats><br><active>Active:</active> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.",
      colloq: ";spear",
      plaintext: "Kalista's spear that binds an Oathsworn Ally.",
      requiredChampion: "Kalista",
      image: {
        full: "3599.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "3600": {
      name: "Black Spear",
      description:
        "<stats></stats><br><active>Active:</active> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.",
      colloq: ";spear",
      plaintext: "Kalista's spear that binds an Oathsworn Ally.",
      requiredChampion: "Sylas",
      image: {
        full: "3600.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Active"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "3671": {
      name: "Enchantment: Warrior",
      description:
        "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
      colloq: ";",
      plaintext: "",
      from: ["3133"],
      hideFromAll: true,
      image: {
        full: "3671.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 1625,
        sell: 1138
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 60
      },
      depth: 3
    },
    "3672": {
      name: "Enchantment: Cinderhulk",
      description:
        "<stats>+325 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
      colloq: ";",
      plaintext: "",
      from: ["3751"],
      hideFromAll: true,
      image: {
        full: "3672.png",
        sprite: "item2.png",
        group: "item",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 1425,
        sell: 998
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 325
      },
      depth: 3
    },
    "3673": {
      name: "Enchantment: Runic Echoes",
      description:
        "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
      colloq: ";",
      plaintext: "",
      from: ["3113", "1052"],
      hideFromAll: true,
      image: {
        full: "3673.png",
        sprite: "item2.png",
        group: "item",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 340,
        purchasable: true,
        total: 1625,
        sell: 1138
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentMovementSpeedMod: 0.07,
        FlatMagicDamageMod: 60
      },
      depth: 3
    },
    "3675": {
      name: "Enchantment: Bloodrazor",
      description:
        "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
      colloq: ";",
      plaintext: "",
      from: ["1043"],
      hideFromAll: true,
      image: {
        full: "3675.png",
        sprite: "item2.png",
        group: "item",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 625,
        purchasable: true,
        total: 1625,
        sell: 1138
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentAttackSpeedMod: 0.5
      },
      depth: 3
    },
    "3680": {
      name: "Frosted Snax",
      description:
        "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King lobs many projectiles at far-away enemies, each dealing <scaleLevel>213-775</scaleLevel> magic damage to targets in the center of the impact, scaling down to <scaleLevel>85-310</scaleLevel> on the edge. (120s cooldown)",
      colloq: "",
      plaintext: "King: Fires a barrage of icy artillery",
      image: {
        full: "3680.png",
        sprite: "item2.png",
        group: "item",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Trinket", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "5",
        Effect2Amount: "120",
        Effect3Amount: "40",
        Effect4Amount: "15",
        Effect5Amount: "250",
        Effect6Amount: "213",
        Effect7Amount: "775",
        Effect8Amount: "85",
        Effect9Amount: "310"
      }
    },
    "3681": {
      name: "Super Spicy Snax",
      description:
        "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King breathes fire for 4 seconds, dealing <scaleLevel>705-1479</scaleLevel> true damage over the duration to enemies caught in the cone. Deals up to 560 true damage to Turrets. (120s cooldown)",
      colloq: "",
      plaintext: "King: Shoots flames that burn units and Turrets",
      image: {
        full: "3681.png",
        sprite: "item2.png",
        group: "item",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Trinket", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "4",
        Effect2Amount: "120",
        Effect3Amount: "700",
        Effect4Amount: "2.35",
        Effect5Amount: "560",
        Effect6Amount: "705",
        Effect7Amount: "1479"
      }
    },
    "3682": {
      name: "Espresso Snax",
      description:
        "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King leaps into the air and crashes down twice, knocking enemies away and dealing <scaleLevel>40-190</scaleLevel> physical damage. He also gains a decaying shield for <font color='#FF3300'>20% of his maximum health</font>, lasting 4 seconds. (30s cooldown)",
      colloq: "",
      plaintext: "King: Knocks back and grants a large shield",
      image: {
        full: "3682.png",
        sprite: "item2.png",
        group: "item",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Trinket", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "1.8",
        Effect2Amount: "30",
        Effect3Amount: "10",
        Effect4Amount: "10",
        Effect5Amount: "20",
        Effect6Amount: "4",
        Effect7Amount: "600",
        Effect8Amount: "40",
        Effect9Amount: "190",
        Effect10Amount: "500"
      }
    },
    "3683": {
      name: "Rainbow Snax Party Pack!",
      description:
        "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King tosses many Snax behind the enemy, attracting Poros which dash back towards him. Enemy champions hit will be knocked forwards and dealt <scaleLevel>230-680</scaleLevel> physical damage. (120s cooldown)",
      colloq: "",
      plaintext: "King: Poros knock enemies towards him",
      image: {
        full: "3683.png",
        sprite: "item2.png",
        group: "item",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Trinket", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "6",
        Effect2Amount: "120",
        Effect3Amount: "140",
        Effect4Amount: "30",
        Effect5Amount: "1",
        Effect6Amount: "1500",
        Effect7Amount: "1650",
        Effect8Amount: "1000",
        Effect9Amount: "230",
        Effect10Amount: "680",
        Effect11Amount: "2"
      }
    },
    "3684": {
      name: "Dawnbringer Snax",
      description:
        "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King draws you to himself. For up to 4 seconds, you are untargetable and pacified. You may mouse click to fly to target position, stopping at the first enemy champion hit and knocking all enemies in a small radius back. The shockwave from your flight deals <scaleLevel>230-680</scaleLevel> physical damage in a cone. (120s cooldown)",
      colloq: "",
      plaintext: "King: Fires you at your target",
      image: {
        full: "3684.png",
        sprite: "item2.png",
        group: "item",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Trinket", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "6",
        Effect2Amount: "120",
        Effect3Amount: "140",
        Effect4Amount: "30",
        Effect5Amount: "230",
        Effect6Amount: "680"
      }
    },
    "3685": {
      name: "Nightbringer Snax",
      description:
        "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King summons dark winds from behind himself, then fires them forward in a spiral, dealing <scaleLevel>230-680</scaleLevel> physical damage and knocking enemies Airborne. (120s cooldown)",
      colloq: "",
      plaintext:
        "King: Summons tornadoes from behind, then fires them forward.",
      image: {
        full: "3685.png",
        sprite: "item2.png",
        group: "item",
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ["Trinket", "Lane"],
      maps: {
        "11": false,
        "12": true,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "2",
        Effect2Amount: "120",
        Effect3Amount: "140",
        Effect4Amount: "30",
        Effect5Amount: "7",
        Effect6Amount: "900",
        Effect7Amount: "1200",
        Effect8Amount: "230",
        Effect9Amount: "680"
      }
    },
    "3690": {
      name: "Cosmic Shackle",
      description:
        "<passive>Passive - Cosmic Shackle: </passive>Death Sentence pulls much farther (based on the target's Missing Health), and can be ignited by the Dark Star to do more damage.<br><br><flavorText>''A still more glorious dawn awaits.''</flavorText>",
      colloq: ";",
      plaintext: "",
      image: {
        full: "3690.png",
        sprite: "item2.png",
        group: "item",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {}
    },
    "3691": {
      name: "Singularity Lantern",
      description:
        "<passive>Passive - Singularity Lantern: </passive>Dark Passage automatically saves disabled allies. However, it no longer provides a shield.<br><br><flavorText>''The stars call to us.''</flavorText>",
      colloq: ";",
      plaintext: "",
      image: {
        full: "3691.png",
        sprite: "item2.png",
        group: "item",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {}
    },
    "3692": {
      name: "Dark Matter Scythe",
      description:
        "<passive>Passive - Dark Matter Scythe: </passive>Flay's on-hit passive charges damage very quickly. Flay will throw enemies much farther (based on their Missing Health).<br><br><flavorText>''If you want to make a Singularity from scratch, you must first destroy the universe.''</flavorText>",
      colloq: ";",
      plaintext: "",
      image: {
        full: "3692.png",
        sprite: "item2.png",
        group: "item",
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {}
    },
    "3693": {
      name: "Gravity Boots",
      description:
        "<passive>Passive - Mass Conversion: </passive>Thresh's Health represents how far enemy pulls and pushes will send him. At lower Health, he will be thrown farther.<br><br><passive>Passive - Terminus Dwellers: </passive>Abyss Scuttlers emerge periodically, and will scurry towards the Dark Star when attacked. Gravitational disturbances will temporarily attract many of them.",
      colloq: ";",
      plaintext: "",
      image: {
        full: "3693.png",
        sprite: "item2.png",
        group: "item",
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 50
      }
    },
    "3694": {
      name: "Cloak of Stars",
      description:
        "<passive>Passive - Stellar Spirit: </passive>Upon spawning, Thresh is invulnerable, untargetable, cannot cast, and is able to travel in open space. This is lost when stepping foot on stable ground.<br><br>Being saved by Dark Passage or using Death Sentence on one of the three <font color='#3091ec'>Gravity Anchors</font> will briefly put you into this invulnerable state and break enemy chains on you.",
      colloq: ";",
      plaintext: "",
      image: {
        full: "3694.png",
        sprite: "item2.png",
        group: "item",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 50
      }
    },
    "3695": {
      name: "Dark Star Sigil",
      description:
        "<passive>Passive - Stellar Fealty: </passive>Thresh cannot kill units directly - their souls, experience, and gold belong to the Dark Star.<br><br>Pulling or pushing an enemy into the Dark Star will destroy them instantly, scoring points for your team (+5, or +1 for Abyss Scuttlers).<br><br>Winning a round requires 100 points, and the final points must be from a champion kill.",
      colloq: ";",
      plaintext: "",
      image: {
        full: "3695.png",
        sprite: "item2.png",
        group: "item",
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": false,
        "12": false,
        "22": false
      },
      stats: {
        FlatMovementSpeedMod: 50
      }
    },
    "3706": {
      name: "Stalker's Blade",
      description:
        "<groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br>+10% Life Steal vs. Monsters<br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks vs. monsters deal 40 bonus damage.  Damaging a monster with a spell or attack steals 30 Health over 5 seconds and burns them for 80 magic damage.<mana> While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana.</mana> This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.",
      colloq: ";jungle;Jungle;jangle",
      plaintext: "Lets your Smite slow Champions",
      from: ["1039", "1041"],
      into: ["1401", "1400", "1402", "1416"],
      image: {
        full: "3706.png",
        sprite: "item2.png",
        group: "item",
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: [
        "LifeSteal",
        "ManaRegen",
        "Slow",
        "OnHit",
        "NonbootsMovement",
        "Jungle"
      ],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "0.1",
        Effect7Amount: "2",
        Effect8Amount: "-0.2"
      },
      depth: 2
    },
    "3715": {
      name: "Skirmisher's Sabre",
      description:
        "<groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br>+10% Life Steal vs. Monsters<br><br><unique>UNIQUE Passive - Challenging Smite:</unique> Smite can be cast on enemy champions, marking them for 4 seconds. While marked your basic attacks deal bonus true damage over 2.5 seconds, and their damage to you is reduced by 20%.<br>Basic attacks vs. monsters deal 40 bonus damage. Damaging a monster with a spell or attack steals 30 Health over 5 seconds and burns them for 80 magic damage. While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana. This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.",
      colloq: ";jungle;Jungle",
      plaintext:
        "Lets your Smite mark Champions, giving you combat power against them.",
      from: ["1039", "1041"],
      into: ["1412", "1413", "1414", "1419"],
      image: {
        full: "3715.png",
        sprite: "item2.png",
        group: "item",
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ["LifeSteal", "ManaRegen", "OnHit", "Jungle"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {},
      effect: {
        Effect1Amount: "80",
        Effect2Amount: "30",
        Effect3Amount: "5",
        Effect4Amount: "8",
        Effect5Amount: "40",
        Effect6Amount: "4",
        Effect7Amount: "2.5",
        Effect8Amount: "14.5",
        Effect9Amount: "1.5",
        Effect10Amount: "0.2",
        Effect11Amount: "0.1"
      },
      depth: 2
    },
    "3742": {
      name: "Dead Man's Plate",
      description:
        "<stats>+425 Health<br>+60 Armor</stats><br><br><unique>UNIQUE Passive - Dreadnought:</unique> While moving, build stacks of Momentum, increasing movement speed by up to 60 at 100 stacks. Momentum decays while under the effect of a stun, taunt, fear, polymorph, or immobilize effect.<br><unique>UNIQUE Passive - Crushing Blow:</unique> Basic attacks deal 1 magic damage per stack of Momentum, discharging all stacks. At max stacks, if the attacker is melee, they also slow the target by 50% for 1 second.<br><br><flavorText>''There's only one way you'll get this armor from me...'' - forgotten namesake</flavorText>",
      colloq: ";juggernaut;dreadnought",
      plaintext: "Build momentum as you move around then smash into enemies.",
      from: ["1031", "1011"],
      image: {
        full: "3742.png",
        sprite: "item2.png",
        group: "item",
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 1100,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ["Health", "Armor", "OnHit", "NonbootsMovement", "Bilgewater"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 425,
        FlatArmorMod: 60
      },
      effect: {
        Effect1Amount: "60",
        Effect2Amount: "100",
        Effect3Amount: "1",
        Effect4Amount: "-0.5",
        Effect5Amount: "1"
      },
      depth: 3
    },
    "3748": {
      name: "Titanic Hydra",
      description:
        "<stats>+450 Health<br>+40 Attack Damage<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 5 + 1% of your maximum health as bonus physical damage  to your target and 40 + 2.5% of your maximum health as physical damage  to other enemies in a cone on hit.<br><active>UNIQUE Active - Crescent:</active> Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage  in a larger cone for your next basic attack (20 second cooldown).<br><br><rules>(Unique Passives with the same name don't stack.)</rules>",
      colloq: ";juggernaut",
      plaintext: "Deals area of effect damage based on owner's health",
      from: ["3077", "1028", "3052"],
      image: {
        full: "3748.png",
        sprite: "item2.png",
        group: "item",
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 575,
        purchasable: true,
        total: 3500,
        sell: 2450
      },
      tags: ["Health", "HealthRegen", "Damage", "Active", "OnHit"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 40,
        FlatHPPoolMod: 450
      },
      effect: {
        Effect1Amount: "0.025",
        Effect2Amount: "40",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "0.1",
        Effect6Amount: "0",
        Effect7Amount: "20",
        Effect8Amount: "40",
        Effect9Amount: "0.01",
        Effect10Amount: "5"
      },
      depth: 3
    },
    "3751": {
      name: "Bami's Cinder",
      description:
        "<stats>+200 Health  </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Burns nearby enemies for <scaleLevel>[6 to 23]</scaleLevel> magic damage per second. Once every 10 seconds, your next immobilizing spell deals <scaleLevel>[6 to 23]</scaleLevel> <scaleHealth>(+2% Your Bonus HP)</scaleHealth> bonus magic damage and releases a fire nova that also deals that bonus damage around you. Immolate's damage is increased by 100% to minions and monsters.",
      colloq: ";",
      plaintext: "Grants Health and Immolate Aura",
      from: ["1028"],
      into: ["3068", "1401", "1413", "3672"],
      image: {
        full: "3751.png",
        sprite: "item2.png",
        group: "item",
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ["Health"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: "6",
        Effect2Amount: "23",
        Effect3Amount: "1",
        Effect4Amount: "325",
        Effect5Amount: "10",
        Effect6Amount: "0.02",
        Effect7Amount: "400"
      },
      depth: 2
    },
    "3800": {
      name: "Righteous Glory",
      description:
        "<stats>+400 Health<br><mana>+300 Mana</mana><br>+30 Armor<br>+100% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active:</unique> Grants 75% Movement Speed when moving towards enemies or enemy turrets for 4 seconds. Once near an enemy (or after 4 seconds) a shockwave is emitted, slowing nearby enemy champion Movement Speed by 75% for 2 second(s) (90 second cooldown).",
      colloq: ";",
      plaintext:
        "Grants Health, Mana, and Armor. Activate to speed towards enemies and slow them.",
      from: ["3024", "3801"],
      image: {
        full: "3800.png",
        sprite: "item2.png",
        group: "item",
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 1100,
        purchasable: true,
        total: 2650,
        sell: 1855
      },
      tags: [
        "Health",
        "HealthRegen",
        "Armor",
        "Mana",
        "Active",
        "CooldownReduction",
        "Slow",
        "NonbootsMovement"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 400,
        FlatMPPoolMod: 300,
        FlatArmorMod: 30
      },
      effect: {
        Effect1Amount: "0.75",
        Effect2Amount: "4",
        Effect3Amount: "-0.75",
        Effect4Amount: "2",
        Effect5Amount: "90",
        Effect6Amount: "225",
        Effect7Amount: "450"
      },
      depth: 3
    },
    "3801": {
      name: "Crystalline Bracer",
      description: "<stats>+200 Health<br>+50% Base Health Regen </stats>",
      colloq: ";",
      plaintext: "Grants Health and Health Regen",
      from: ["1028", "1006"],
      into: ["3084", "3083", "2065", "3800", "3107"],
      image: {
        full: "3801.png",
        sprite: "item2.png",
        group: "item",
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 100,
        purchasable: true,
        total: 650,
        sell: 455
      },
      tags: ["Health", "HealthRegen"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 200
      },
      depth: 2
    },
    "3802": {
      name: "Lost Chapter",
      description:
        "<stats>+40 Ability Power<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Haste:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Upon levelling up, restores 20% of your maximum Mana over 3 seconds.",
      colloq: ";",
      plaintext: "Restores Mana upon levelling up.",
      from: ["1052", "1027", "1052"],
      into: ["3003", "3007", "3030", "3285"],
      image: {
        full: "3802.png",
        sprite: "item2.png",
        group: "item",
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 80,
        purchasable: true,
        total: 1300,
        sell: 910
      },
      tags: ["SpellDamage", "Mana", "ManaRegen", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 40
      },
      effect: {
        Effect1Amount: "25",
        Effect2Amount: "-0.1",
        Effect3Amount: "15",
        Effect4Amount: "10",
        Effect5Amount: "20",
        Effect6Amount: "5",
        Effect7Amount: "0.2",
        Effect8Amount: "3"
      },
      depth: 2
    },
    "3812": {
      name: "Death's Dance",
      description:
        "<stats>+80 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage.<br><unique>UNIQUE Passive:</unique> 30% of damage taken is dealt as a Bleed effect over 3 seconds instead.",
      colloq: ";Bloodbag",
      plaintext: "Trades incoming damage now for incoming damage later",
      stacks: 0,
      from: ["1053", "1037", "3133"],
      image: {
        full: "3812.png",
        sprite: "item2.png",
        group: "item",
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 625,
        purchasable: true,
        total: 3500,
        sell: 2450
      },
      tags: ["Damage", "LifeSteal", "CooldownReduction"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 80
      },
      effect: {
        Effect1Amount: "0.15",
        Effect2Amount: "0.3",
        Effect3Amount: "3"
      },
      depth: 3
    },
    "3814": {
      name: "Edge of Night",
      description:
        "<stats>+325 Health<br>+55 Attack Damage</stats><br><br><unique>UNIQUE Passive</unique>: +10 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive - Spell Shield</unique>: Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.",
      colloq: ";lethality",
      plaintext: "Periodically blocks enemy abilities",
      stacks: 0,
      from: ["1037", "3134", "1028"],
      image: {
        full: "3814.png",
        sprite: "item2.png",
        group: "item",
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ["Health", "Damage", "ArmorPenetration"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 55,
        FlatHPPoolMod: 325
      },
      effect: {
        Effect1Amount: "10",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "40"
      },
      depth: 3
    },
    "3850": {
      name: "Spellthief's Edge",
      description:
        "<stats>+8 Ability Power<br>+10 Health<br>+2 Gold Per 10 Seconds<br><mana>+25% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings grant 15 gold. This can occur up to 3 times every 30 seconds.<hr><passive>QUEST:</passive> Earning gold through using this item will transform the item, granting <active>UNIQUE Active - Warding</active>.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Gain gold and upgrade by damaging enemy champions",
      image: {
        full: "3850.png",
        sprite: "item2.png",
        group: "item",
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ["Health", "SpellDamage", "ManaRegen", "Vision", "GoldPer", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 10,
        FlatMagicDamageMod: 8
      },
      effect: {
        Effect1Amount: "2",
        Effect2Amount: "15",
        Effect3Amount: "15",
        Effect4Amount: "500",
        Effect5Amount: "10",
        Effect6Amount: "3"
      }
    },
    "3851": {
      name: "Frostfang",
      description:
        "<stats>+15 Ability Power<br>+70 Health<br>+3 Gold Per 10 Seconds<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings grant 15 gold. This can occur up to 3 times every 30 seconds.<br><br><passive>QUEST:</passive> Earn 1000 gold to upgrade to Shard of True Ice.<br><br><active>UNIQUE Active - Warding:</active> Place a <font color='#FF9900'>Stealth Ward</font>. Holds up to 3 charges which refill upon visiting the shop.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3850,
      inStore: false,
      image: {
        full: "3851.png",
        sprite: "item2.png",
        group: "item",
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ["GoldPer", "Lane", "ManaRegen", "SpellDamage"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 70,
        FlatMagicDamageMod: 15
      },
      effect: {
        Effect1Amount: "3",
        Effect2Amount: "15",
        Effect3Amount: "15",
        Effect4Amount: "1000",
        Effect5Amount: "10",
        Effect6Amount: "3"
      }
    },
    "3853": {
      name: "Shard of True Ice",
      description:
        "<stats>+45 Ability Power<br>+100 Health<br>+3 Gold Per 10 Seconds<br><mana>+100% Base Mana Regen </mana></stats><br><br><active>UNIQUE Active - Warding:</active> Place a <font color='#FF9900'>Stealth Ward</font>. Holds up to 4 charges which refill upon visiting the shop.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3851,
      inStore: false,
      image: {
        full: "3853.png",
        sprite: "item2.png",
        group: "item",
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ["GoldPer", "Lane", "ManaRegen", "SpellDamage"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 100,
        FlatMagicDamageMod: 45
      },
      effect: {
        Effect1Amount: "3"
      }
    },
    "3854": {
      name: "Steel Shoulderguards",
      description:
        "<stats>+30 Health<br>+3 Attack Damage<br>+2 Gold Per 10 Seconds<br>+25% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> While nearby an ally, basic attacks execute minions below 50% of their max Health (30% for ranged). Killing a minion grants kill gold to the nearest allied champion.<rules> (These effects recharge every 45 seconds. Max 3 charges.)</rules><hr><passive>QUEST:</passive> Earning gold through using this item will transform the item, granting <active>UNIQUE Active - Warding</active>.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Gain gold and upgrade by executing minions alongside allies",
      image: {
        full: "3854.png",
        sprite: "item2.png",
        group: "item",
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ["Health", "HealthRegen", "Damage", "Vision", "GoldPer", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 3,
        FlatHPPoolMod: 30
      },
      effect: {
        Effect1Amount: "2",
        Effect2Amount: "0.5",
        Effect3Amount: "0.3",
        Effect4Amount: "500",
        Effect5Amount: "45",
        Effect6Amount: "3"
      }
    },
    "3855": {
      name: "Runesteel Spaulders",
      description:
        "<stats>+100 Health<br>+6 Attack Damage<br>+3 Gold Per 10 Seconds<br>+50% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> While nearby an ally, basic attacks execute minions below 50% of their max Health. Killing a minion grants kill gold to the nearest allied champion.<rules> (These effects recharge every 45 seconds. Max 3 charges.)</rules><br><br><passive>QUEST:</passive> Earn 1000 gold to upgrade to Pauldrons of Whiterock.<br><br><active>UNIQUE Active - Warding:</active> Place a <font color='#FF9900'>Stealth Ward</font>. Holds up to 3 charges which refill upon visiting the shop.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3854,
      inStore: false,
      image: {
        full: "3855.png",
        sprite: "item2.png",
        group: "item",
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ["Health", "HealthRegen", "GoldPer", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 6,
        FlatHPPoolMod: 100
      },
      effect: {
        Effect1Amount: "3",
        Effect2Amount: "0.5",
        Effect3Amount: "0.5",
        Effect4Amount: "1000",
        Effect5Amount: "45",
        Effect6Amount: "3"
      }
    },
    "3857": {
      name: "Pauldrons of Whiterock",
      description:
        "<stats>+300 Health<br>+15 Attack Damage<br>+3 Gold Per 10 Seconds<br>+100% Base Health Regen </stats><br><br><active>UNIQUE Active - Warding:</active> Place a <font color='#FF9900'>Stealth Ward</font>. Holds up to 4 charges which refill upon visiting the shop.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3855,
      inStore: false,
      image: {
        full: "3857.png",
        sprite: "item2.png",
        group: "item",
        x: 0,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ["Health", "HealthRegen", "GoldPer", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 15,
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: "3"
      }
    },
    "3858": {
      name: "Relic Shield",
      description:
        "<stats>+30 Health<br>+5 Ability Power<br>+2 Gold Per 10 Seconds<br>+25% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> While nearby an ally, basic attacks execute minions below 50% of their max Health (30% for ranged). Killing a minion grants kill gold to the nearest allied champion.<rules> (These effects recharge every 45 seconds. Max 3 charges.)</rules><hr><passive>QUEST:</passive> Earning gold through using this item will transform the item, granting <active>UNIQUE Active - Warding</active>.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Gain gold and upgrade by executing minions alongside allies",
      image: {
        full: "3858.png",
        sprite: "item2.png",
        group: "item",
        x: 48,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: [
        "Health",
        "HealthRegen",
        "SpellDamage",
        "Vision",
        "GoldPer",
        "Lane"
      ],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 30,
        FlatMagicDamageMod: 5
      },
      effect: {
        Effect1Amount: "2",
        Effect2Amount: "0.5",
        Effect3Amount: "0.3",
        Effect4Amount: "500",
        Effect5Amount: "45",
        Effect6Amount: "3"
      }
    },
    "3859": {
      name: "Targon's Buckler",
      description:
        "<stats>+100 Health<br>+10 Ability Power<br>+3 Gold Per 10 Seconds<br>+50% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> While nearby an ally, basic attacks execute minions below 50% of their max Health. Killing a minion grants kill gold to the nearest allied champion.<rules> (These effects recharge every 45 seconds. Max 3 charges.)</rules><br><br><passive>QUEST:</passive> Earn 1000 gold to upgrade to Bulwark of the Mountain.<br><br><active>UNIQUE Active - Warding:</active> Place a <font color='#FF9900'>Stealth Ward</font>. Holds up to 3 charges which refill upon visiting the shop.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3858,
      inStore: false,
      image: {
        full: "3859.png",
        sprite: "item2.png",
        group: "item",
        x: 96,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ["Health", "HealthRegen", "GoldPer", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 100,
        FlatMagicDamageMod: 10
      },
      effect: {
        Effect1Amount: "3",
        Effect2Amount: "0.5",
        Effect3Amount: "0.5",
        Effect4Amount: "1000",
        Effect5Amount: "45",
        Effect6Amount: "3"
      }
    },
    "3860": {
      name: "Bulwark of the Mountain",
      description:
        "<stats>+300 Health<br>+25 Ability Power<br>+3 Gold Per 10 Seconds<br>+100% Base Health Regen </stats><br><br><active>UNIQUE Active - Warding:</active> Place a <font color='#FF9900'>Stealth Ward</font>. Holds up to 4 charges which refill upon visiting the shop.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3859,
      inStore: false,
      image: {
        full: "3860.png",
        sprite: "item2.png",
        group: "item",
        x: 144,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ["Health", "HealthRegen", "GoldPer", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 25
      },
      effect: {
        Effect1Amount: "3"
      }
    },
    "3862": {
      name: "Spectral Sickle",
      description:
        "<stats>+5 Attack Damage<br>+10 Health<br>+2 Gold Per 10 Seconds<br><mana>+25% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings grant 15 gold. This can occur up to 3 times every 30 seconds.<hr><passive>QUEST:</passive> Earning gold through using this item will transform the item, granting <active>UNIQUE Active - Warding</active>.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>",
      colloq: "",
      plaintext: "Gain gold and upgrade by damaging enemy champions",
      image: {
        full: "3862.png",
        sprite: "item2.png",
        group: "item",
        x: 192,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ["Health", "Damage", "ManaRegen", "Vision", "GoldPer", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 5,
        FlatHPPoolMod: 10
      },
      effect: {
        Effect1Amount: "2",
        Effect2Amount: "15",
        Effect3Amount: "15",
        Effect4Amount: "500",
        Effect5Amount: "10",
        Effect6Amount: "3"
      }
    },
    "3863": {
      name: "Harrowing Crescent",
      description:
        "<stats>+10 Attack Damage<br>+60 Health<br>+3 Gold Per 10 Seconds<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings grant 15 gold. This can occur up to 3 times every 30 seconds.<br><br><passive>QUEST:</passive> Earn 1000 gold to upgrade to Black Mist Scythe.<br><br><active>UNIQUE Active - Warding:</active> Place a <font color='#FF9900'>Stealth Ward</font>. Holds up to 3 charges which refill upon visiting the shop.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3862,
      inStore: false,
      image: {
        full: "3863.png",
        sprite: "item2.png",
        group: "item",
        x: 240,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ["Health", "ManaRegen", "GoldPer", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 10,
        FlatHPPoolMod: 60
      },
      effect: {
        Effect1Amount: "3",
        Effect2Amount: "15",
        Effect3Amount: "15",
        Effect4Amount: "1000",
        Effect5Amount: "10",
        Effect6Amount: "3"
      }
    },
    "3864": {
      name: "Black Mist Scythe",
      description:
        "<stats>+25 Attack Damage<br>+100 Health<br>+3 Gold Per 10 Seconds<br><mana>+100% Base Mana Regen </mana></stats><br><br><active>UNIQUE Active - Warding:</active> Place a <font color='#FF9900'>Stealth Ward</font>. Holds up to 4 charges which refill upon visiting the shop.<br><br><rules>(Receive diminishing gold from <a href='Support_Minion_Penalty'>excessive minion kills</a>.)</rules>",
      colloq: "",
      plaintext: "",
      specialRecipe: 3863,
      inStore: false,
      image: {
        full: "3864.png",
        sprite: "item2.png",
        group: "item",
        x: 288,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ["Health", "ManaRegen", "GoldPer", "Lane"],
      maps: {
        "11": true,
        "12": false,
        "22": false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        FlatHPPoolMod: 100
      },
      effect: {
        Effect1Amount: "3"
      }
    },
    "3901": {
      name: "Fire at Will",
      description:
        "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
      colloq: "",
      plaintext: "Cannon Barrage gains extra waves",
      consumed: true,
      consumeOnFull: true,
      requiredChampion: "Gangplank",
      image: {
        full: "3901.png",
        sprite: "item2.png",
        group: "item",
        x: 336,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "3902": {
      name: "Death's Daughter",
      description:
        "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage additionally fires a mega-cannonball at center of the Barrage, dealing 300% true damage and slowing them by 60% for 1.5 seconds. ",
      colloq: "",
      plaintext: "Cannon Barrage fires a mega-cannonball",
      consumed: true,
      consumeOnFull: true,
      requiredChampion: "Gangplank",
      image: {
        full: "3902.png",
        sprite: "item2.png",
        group: "item",
        x: 384,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "3903": {
      name: "Raise Morale",
      description:
        "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Allies in the Cannon Barrage gain 30% Movement Speed for 2 seconds.",
      colloq: "",
      plaintext: "Cannon Barrage hastes allies",
      consumed: true,
      consumeOnFull: true,
      requiredChampion: "Gangplank",
      image: {
        full: "3903.png",
        sprite: "item2.png",
        group: "item",
        x: 432,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {}
    },
    "3905": {
      name: "Twin Shadows",
      description:
        "<stats>+70 Ability Power<br>+7% Movement Speed<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active - Spectral Pursuit:</unique> Summons 2 spooky ghosts that hunt down nearby champions, revealing and Haunting them on contact. <br><br>Haunted enemies are slowed by 40% for up to 5 seconds based on the distance the ghosts travel. (90 second cooldown).",
      colloq: ";spooky;spooky ghosts",
      plaintext: "Increases Ability Power and Movement Speed",
      from: ["3108", "3113"],
      image: {
        full: "3905.png",
        sprite: "item2.png",
        group: "item",
        x: 0,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2400,
        sell: 1680
      },
      tags: [
        "SpellDamage",
        "Active",
        "CooldownReduction",
        "Slow",
        "NonbootsMovement"
      ],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentMovementSpeedMod: 0.07,
        FlatMagicDamageMod: 70
      },
      effect: {
        Effect1Amount: "10",
        Effect2Amount: "35",
        Effect3Amount: "8",
        Effect4Amount: "0.2",
        Effect5Amount: "0.5",
        Effect6Amount: "10",
        Effect7Amount: "2100",
        Effect8Amount: "10",
        Effect9Amount: "90",
        Effect10Amount: "60",
        Effect11Amount: "150",
        Effect12Amount: "0.1",
        Effect13Amount: "40",
        Effect14Amount: "5",
        Effect15Amount: "2",
        Effect16Amount: "7"
      },
      depth: 3
    },
    "3907": {
      name: "Spellbinder",
      description:
        "<stats>+120 Ability Power<br>+10% Movement Speed<br></stats><br><unique>UNIQUE Passive:</unique> Nearby allied and enemy spellcasts charge Spellbinder up to a cap (100 maximum). <br><unique>UNIQUE Active:</unique> Gain a maximum of 80 Ability Power and 50% decaying Movement Speed for 4 seconds. <br><br>Each spellcast stored contributes +0.8 Ability Power and +0.5% Movement Speed to the effect. (60 second cooldown).",
      colloq: "",
      plaintext:
        "Stores nearby spellcasts and can consume them to grant Movement Speed and Ability Power.",
      from: ["1058", "3113"],
      image: {
        full: "3907.png",
        sprite: "item2.png",
        group: "item",
        x: 48,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ["SpellDamage", "Active", "NonbootsMovement"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        PercentMovementSpeedMod: 0.1,
        FlatMagicDamageMod: 120
      },
      effect: {
        Effect1Amount: "10",
        Effect2Amount: "100",
        Effect3Amount: "0.5",
        Effect4Amount: "4",
        Effect5Amount: "0.8",
        Effect6Amount: "60",
        Effect7Amount: "4",
        Effect8Amount: "80",
        Effect9Amount: "50",
        Effect10Amount: "120",
        Effect11Amount: "1800"
      },
      depth: 3
    },
    "3916": {
      name: "Oblivion Orb",
      description:
        "<stats>+20 Ability Power<br>+200 Health</stats><br><br><unique>UNIQUE Passive - Touch of Death:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a>",
      colloq: "",
      plaintext: "Increases magic damage",
      stacks: 0,
      from: ["1028", "1052"],
      into: ["3165"],
      image: {
        full: "3916.png",
        sprite: "item2.png",
        group: "item",
        x: 96,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 765,
        purchasable: true,
        total: 1600,
        sell: 1120
      },
      tags: ["Health", "MagicPenetration", "SpellDamage"],
      maps: {
        "11": true,
        "12": true,
        "22": false
      },
      stats: {
        FlatHPPoolMod: 200,
        FlatMagicDamageMod: 20
      },
      effect: {
        Effect1Amount: "15"
      },
      depth: 2
    }
  },
  groups: [
    {
      id: "HuntersTalismanGroup",
      MaxGroupOwnable: "1"
    },
    {
      id: "HuntersMacheteGroup",
      MaxGroupOwnable: "1"
    },
    {
      id: "BaseJungleItems",
      MaxGroupOwnable: "-1"
    },
    {
      id: "Boots",
      MaxGroupOwnable: "1"
    },
    {
      id: "BootsOfSpeed",
      MaxGroupOwnable: "-1"
    },
    {
      id: "BootsWithoutActives",
      MaxGroupOwnable: "1"
    },
    {
      id: "BuildsFromStopwatchGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "Consumable",
      MaxGroupOwnable: "-1"
    },
    {
      id: "Default",
      MaxGroupOwnable: "-1"
    },
    {
      id: "DoransItems",
      MaxGroupOwnable: "-1"
    },
    {
      id: "Elixir",
      MaxGroupOwnable: "-1"
    },
    {
      id: "GangplankRUpgrade01",
      MaxGroupOwnable: "1"
    },
    {
      id: "GangplankRUpgrade02",
      MaxGroupOwnable: "1"
    },
    {
      id: "GangplankRUpgrade03",
      MaxGroupOwnable: "1"
    },
    {
      id: "GoldItems",
      MaxGroupOwnable: "1"
    },
    {
      id: "GuardianItems",
      MaxGroupOwnable: "1"
    },
    {
      id: "ItemGroupSwapToSummonerDot",
      MaxGroupOwnable: "-1"
    },
    {
      id: "ItemGroupSwapToSummonerFlash",
      MaxGroupOwnable: "-1"
    },
    {
      id: "ItemGroupSwapToSummonerHaste",
      MaxGroupOwnable: "-1"
    },
    {
      id: "ItemGroupSwapToSummonerHeal",
      MaxGroupOwnable: "-1"
    },
    {
      id: "ItemGroupSwapToSummonerSmite",
      MaxGroupOwnable: "-1"
    },
    {
      id: "ItemGroupSwapToSummonerTeleport",
      MaxGroupOwnable: "-1"
    },
    {
      id: "JungleEnchantments",
      MaxGroupOwnable: "1"
    },
    {
      id: "JungleItems",
      MaxGroupOwnable: "1"
    },
    {
      id: "LegendaryClearingItems",
      MaxGroupOwnable: "-1"
    },
    {
      id: "LethalityItems",
      MaxGroupOwnable: "-1"
    },
    {
      id: "NewDoransItems",
      MaxGroupOwnable: "-1"
    },
    {
      id: "NonItem",
      MaxGroupOwnable: "-1"
    },
    {
      id: "OdysseySustainItems",
      MaxGroupOwnable: "-1"
    },
    {
      id: "OrnnItems",
      MaxGroupOwnable: "1"
    },
    {
      id: "PerksElixir",
      MaxGroupOwnable: "0"
    },
    {
      id: "PerksElixirAdvanced",
      MaxGroupOwnable: "0"
    },
    {
      id: "Potion",
      MaxGroupOwnable: "1"
    },
    {
      id: "SLIMEStarterItems",
      MaxGroupOwnable: "1"
    },
    {
      id: "SiegeEmergencyShieldGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SiegeFlashZoneGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SiegeLaserAffixGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SiegeMissileBarrageGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SiegePortableBarracksGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SiegeRefundGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SiegeShieldGeneratorGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SiegeSniperCannonGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SiegeTeleportPadGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SiegeTimefieldGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "SightstoneActiveItems",
      MaxGroupOwnable: "1"
    },
    {
      id: "SightstoneDisableGroup",
      MaxGroupOwnable: "0"
    },
    {
      id: "StopwatchGroup",
      MaxGroupOwnable: "-1"
    },
    {
      id: "TearItems",
      MaxGroupOwnable: "1"
    },
    {
      id: "TheBlackSpear",
      MaxGroupOwnable: "1"
    },
    {
      id: "TotalBiscuit",
      MaxGroupOwnable: "0"
    },
    {
      id: "Trinket",
      MaxGroupOwnable: "-1"
    },
    {
      id: "ViktorHexCore",
      MaxGroupOwnable: "1"
    },
    {
      id: "WardGreen",
      MaxGroupOwnable: "1"
    },
    {
      id: "WardPink",
      MaxGroupOwnable: "1"
    }
  ],
  tree: [
    {
      header: "START",
      tags: ["LANE", "JUNGLE"]
    },
    {
      header: "TOOLS",
      tags: ["GOLDPER", "CONSUMABLE", "VISION"]
    },
    {
      header: "DEFENSE",
      tags: ["HEALTH", "HEALTHREGEN", "ARMOR", "SPELLBLOCK"]
    },
    {
      header: "ATTACK",
      tags: ["LIFESTEAL", "CRITICALSTRIKE", "ATTACKSPEED", "DAMAGE"]
    },
    {
      header: "MAGIC",
      tags: ["MANA", "SPELLDAMAGE", "COOLDOWNREDUCTION", "MANAREGEN"]
    },
    {
      header: "MOVEMENT",
      tags: ["BOOTS", "NONBOOTSMOVEMENT"]
    },
    {
      header: "UNCATEGORIZED",
      tags: [
        "ACTIVE",
        "MAGICPENETRATION",
        "ARMORPENETRATION",
        "AURA",
        "ONHIT",
        "TRINKET",
        "SLOW",
        "STEALTH",
        "SPELLVAMP",
        "TENACITY"
      ]
    }
  ]
};
