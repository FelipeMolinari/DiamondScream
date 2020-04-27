export default {
  data: {
    21: {
      id: "SummonerBarrier",
      name: "Barrier",
      description:
        "Shields your champion from 115-455 damage (depending on champion level) for 2 seconds.",
      tooltip:
        "Temporarily shields {{ f1 }} damage from your champion for 2 seconds.",
      key: "21",
      image: {
        full: "SummonerBarrier.png",
        sprite: "spell0.png",
        group: "spell",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      }
    },
    1: {
      id: "SummonerBoost",
      name: "Cleanse",
      description:
        "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.",
      tooltip:
        "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and reduces the duration of disables by 65% for the next {{ f1 }} seconds.",

      image: {
        full: "SummonerBoost.png",
        sprite: "spell0.png",
        group: "spell",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    14: {
      id: "SummonerDot",
      name: "Ignite",
      description:
        "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.",
      tooltip:
        'Ignite deals <span class="colorFEFCFF">{{ f1 }}</span> true damage to target enemy champion over 5 seconds, grants you vision of the target and applies Grievous Wounds for the duration.<br /><br /><rules>(Grievous Wounds reduces healing effects by 40%. This vision does not reveal stealthed enemies.)</rules>',

      image: {
        full: "SummonerDot.png",
        sprite: "spell0.png",
        group: "spell",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    3: {
      id: "SummonerExhaust",
      name: "Exhaust",
      description:
        "Exhausts target enemy champion, reducing their Movement Speed by 30%, and their damage dealt by 40% for 2.5 seconds.",
      tooltip:
        "Exhausts target enemy champion, reducing their Movement Speed by {{ f3 }}%, and their damage dealt by {{ f2 }}% for 2.5 seconds.",

      image: {
        full: "SummonerExhaust.png",
        sprite: "spell0.png",
        group: "spell",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    4: {
      id: "SummonerFlash",
      name: "Flash",
      description:
        "Teleports your champion a short distance toward your cursor's location.",
      tooltip:
        "Teleports your champion a short distance toward your cursor's location.",
      image: {
        full: "SummonerFlash.png",
        sprite: "spell0.png",
        group: "spell",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    6: {
      id: "SummonerHaste",
      name: "Ghost",
      description:
        "Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of 28-45% (depending on champion level) Movement Speed after accelerating for 2 seconds.",
      tooltip:
        "Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of {{ f1 }}% Movement Speed after accelerating for 2 seconds.",
      image: {
        full: "SummonerHaste.png",
        sprite: "spell0.png",
        group: "spell",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    7: {
      id: "SummonerHeal",
      name: "Heal",
      description:
        "Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.",
      tooltip:
        'Restores {{ f1 }} Health and grants 30% Movement Speed for 1 second to your champion and target allied champion. This healing is halved for units recently affected by Summoner Heal.<br /><br /><span class="colorFFFF00">If this spell cannot find a target, it will cast on the most wounded allied champion in range.</span>',
      image: {
        full: "SummonerHeal.png",
        sprite: "spell0.png",
        group: "spell",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    13: {
      id: "SummonerMana",
      name: "Clarity",
      description:
        "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana.",
      tooltip:
        "Restores {{ f1 }}% maximum Mana to your Champion and {{ f2 }}% to nearby allies.",
      image: {
        full: "SummonerMana.png",
        sprite: "spell0.png",
        group: "spell",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    31: {
      id: "SummonerPoroRecall",
      name: "To the King!",
      description: "Quickly travel to the Poro King's side.",
      tooltip:
        '<span class="colorFFE076">Passive:</span> Hitting an enemy champion with a Poro gives your team a Poro Mark. Upon reaching 10 Poro Marks, your team summons the Poro King to fight alongside them. While the Poro King is active, no Poro Marks can be scored by either team.<br /><br /><span class="colorFFE076">Active:</span> Quickly dash to King Poro\'s side. Can only be cast while the Poro King is summoned for your team. <br /><br /><i><span class="colorFDD017">\'\'Poros tug the heartstrings. The rest of you just comes along for the ride.\'\'</span></i></mainText>',
      image: {
        full: "SummonerPoroThrow.png",
        sprite: "spell0.png",
        group: "spell",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    11: {
      id: "SummonerSmite",
      name: "Smite",
      description:
        "Deals 390-1000 true damage (depending on champion level) to target epic, large, or medium monster or enemy minion. Restores Health based on your maximum life when used against monsters.",
      tooltip:
        'Deals <span class="colorFEFCFF">{{ f1 }}</span> true damage to target epic, large, or medium monster or enemy minion.  Against monsters, additionally restores <span class="colorFFFFFF">{{ f6 }}</span> <span class="colorFF6666">(+{{ f7 }})</span> Health.<br /><br />Smite regains a charge every {{ ammorechargetime }} seconds, up to a maximum of 2 charges.',
      image: {
        full: "SummonerSmite.png",
        sprite: "spell0.png",
        group: "spell",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    39: {
      id: "SummonerSnowURFSnowball_Mark",
      name: "Mark",
      description:
        "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
      tooltip:
        'Throw a snowball a long distance, dealing {{ f1 }} true damage to the first enemy unit hit and granting <span class="coloree91d7">True Sight</span> of the target. If it hits an enemy, this ability can be recast for {{ e3 }} seconds to Dash to the tagged unit, dealing an additional {{ f1 }} true damage. Dashing to the target will reduce the cooldown of Mark by {{ e4 }}%.<br /><br /><span class="colorFFFF00">Mark projectiles are not stopped by spell shields or projectile mitigation.</span>',
      image: {
        full: "SummonerSnowURFSnowball_Mark.png",
        sprite: "spell0.png",
        group: "spell",
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    32: {
      id: "SummonerSnowball",
      name: "Mark",
      description:
        "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
      tooltip:
        'Throw a snowball a long distance, dealing {{ f1 }} true damage to the first enemy unit hit and granting <span class="coloree91d7">True Sight</span> of the target. If it hits an enemy, this ability can be recast for {{ e3 }} seconds to Dash to the tagged unit, dealing an additional {{ f1 }} true damage. Dashing to the target will reduce the cooldown of Mark by {{ e4 }}%.<br /><br /><span class="colorFFFF00">Mark projectiles are not stopped by spell shields or projectile mitigation.</span>',
      image: {
        full: "SummonerSnowball.png",
        sprite: "spell0.png",
        group: "spell",
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    },
    12: {
      id: "SummonerTeleport",
      name: "Teleport",
      description:
        "After channeling for 4 seconds, teleports your champion to target allied structure, minion, or ward.",
      tooltip:
        "After channeling for {{ f1 }} seconds, your champion teleports to target allied structure, minion, or ward.",
      image: {
        full: "SummonerTeleport.png",
        sprite: "spell0.png",
        group: "spell",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      resource: "{{ cooldown }}s %i:cooldown%"
    }
  }
};
