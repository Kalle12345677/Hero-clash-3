export const weapons = [
  { name:'Trainingsklinge', model:'sword', price:0, damage:11, crit:0, speed:1, range:.17, cooldown:.62, ammo:null, splash:0, desc:'Eine gut ausbalancierte Nahkampfwaffe für den Start.', owned:true },
  { name:'Kupfer-Säbel', model:'sabre', price:90, damage:13, crit:.05, speed:1.05, range:.19, cooldown:.52, ammo:null, splash:0, desc:'Leicht und flink. Erhöht deine kritische Chance um 5 %.' },
  { name:'Sternenstab', model:'staff', price:180, damage:10, crit:.12, speed:.92, range:.23, cooldown:.7, ammo:null, splash:0, desc:'Langer Stab für Nahkampftreffer mit erhöhter Kritchance.' },
  { name:'Mondlanze', model:'spear', price:300, damage:16, crit:.08, speed:.86, range:.22, cooldown:.78, ammo:null, splash:0, desc:'Hohe Reichweite und kräftige Treffer.' },
  { name:'Impulsblaster', model:'blaster', price:240, damage:18, crit:.08, speed:1, range:.8, cooldown:.32, ammo:{mag:8,reserve:48,reload:1.25}, splash:0, desc:'Präzise Schüsse mit sichtbarem Zielkegel und 8 Schuss im Magazin.' },
  { name:'Splitterkanone', model:'rifle', price:390, damage:10, crit:.05, speed:1.15, range:.9, cooldown:.15, ammo:{mag:24,reserve:144,reload:1.7}, splash:0, desc:'Schnelle Salven, 24 Schuss pro Magazin.' },
  { name:'Kometenwerfer', model:'launcher', price:520, damage:34, crit:.1, speed:.8, range:.72, cooldown:.82, ammo:{mag:4,reserve:24,reload:1.9}, splash:.15, desc:'Sprenggeschosse verursachen Flächenschaden. 4 Schuss pro Magazin.' },
  {name:'Funkenmesser', model:'knife', price:105, damage:9, crit:.14, speed:1.15, range:.14, cooldown:.34, ammo:null, splash:0, desc:'Kurze Reichweite und schnelle Stiche. +14 Prozentpunkte Kritchance.'},
  {name:'Basaltaxt', model:'axe', price:265, damage:26, crit:.04, speed:.9, range:.18, cooldown:.86, ammo:null, splash:0, desc:'Ein schwerer Hieb mit breiter Schneide.'},
  {name:'Prismenarmbrust', model:'bow', price:425, damage:23, crit:.09, speed:1, range:.86, cooldown:.53, ammo:{mag:5,reserve:40,reload:1.4}, splash:0, desc:'Fünf präzise Bolzen pro Magazin.'},
];
export const armors = [
  { name:'Camp-Weste', model:'vest', price:0, hp:0, resist:0, desc:'Leichte Standardrüstung für den Trainingsplatz.', owned:true },
  { name:'Lederweste', model:'leather', price:135, hp:18, resist:.08, desc:'+18 Leben und 8 % weniger erlittenen Schaden.' },
  { name:'Wächterpanzer', model:'plate', price:270, hp:36, resist:.17, desc:'+36 Leben und 17 % weniger erlittenen Schaden.' },
  { name:'Schattenrüstung', model:'shadow', price:340, hp:40, resist:.18, dodgeFactor:.85, desc:'Schattenschritt: Ausweichen ist 15 % schneller wieder bereit.' },
  {name:'Prismenharnisch', model:'prism', color:'#7f88b6', price:475, hp:48, resist:.21, reloadFactor:.8, desc:'Schnellspanner: Magazine laden 20 % schneller nach.'},
  {name:'Titanenpanzer', model:'titan', color:'#c79b58', price:820, hp:72, resist:.30, dodgeFactor:.75, reloadFactor:.75, desc:'Titanenkern: Ausweichen und Nachladen brauchen je 25 % weniger Zeit.'},
  {name:'Windläufer-Wams', model:'wind', color:'#73989a', hp:24, resist:.12, dodgeFactor:.8, desc:'Rückenwind: Ausweichen ist 20 % schneller wieder bereit.'},
  {name:'Glutwacht', model:'ember', color:'#ad6354', hp:52, resist:.23, reloadFactor:.78, desc:'Glutschloss: Magazine laden 22 % schneller nach.'},
];
