// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.
// aantal nog te verkopen units is gelijk aan (originalStock - sold) per type en dan totaal berekenen.
const typesToSell = inventory.map((unit) => {
  return unit.originalStock - unit.sold
})
console.log(typesToSell)

const totalUnitsToSell = typesToSell.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})
console.log(totalUnitsToSell);


//Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina => css

//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
tvTypes = inventory.map((typeName) => {
  return typeName.type;
})
console.log(tvTypes)

// Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
tvSoldOut = inventory.filter((count) => {
  if (count.originalStock - count.sold === 0){
    return count;
  }
})
console.log(tvSoldOut);

// Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
tvAmbilight = inventory.filter((light) => {
  if (light.options.ambiLight){
    return light;
  }
})
console.log(tvAmbilight);

// Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
tvPriceSorted = inventory.sort((previousPrice, currentPrice) => {
  return previousPrice.price - currentPrice.price ;
})
console.log(tvPriceSorted);

//Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type
// zouden verkopen. Geef dit in het blauw weer op de pagina.
profitPerType = inventory.map((unit) => {
  return (unit.originalStock - unit.sold)* unit.price;
})
console.log(profitPerType);

totalProfit = profitPerType.reduce((accumulator, currentValue) =>{
  return accumulator + currentValue;
})
console.log(totalProfit);


// Opdracht 3b: Hoeveel hebben we tot nu toe verdiend? Bereken hoeveel we tot nu toe verdiend hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina
profitUnitsSold = inventory.map ((unit) => {
  return (unit.sold * unit.price);
})
console.log(profitUnitsSold);


//Opdracht 4
// Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit.
// Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg


//Opdracht 5
// We gaan één van de twee tv's van de vorige opdracht weergeven in het volgende format:
//
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// NIKKEI NH3216SMART - HD smart TV
// €159,-
// 32 inch (81 cm)


// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// tv-object als parameter verwacht en de naam op de volgende manier samenvoegt:
// [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.


// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
// Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string
// van maakt: €379,-. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.


// Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv
// in zowel inches als cm Maak een functie die één screen-sizes array verwacht en de groottes op de volgende
// manier samenvoegt:
// [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Dus een input van [32] geeft 32 inch (81 cm)
// en een input van [43, 50, 55, 58] geeft 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken, zowel voor tv's met maar één schermgrootte
// als met tientallen schermgroottes.



// Opdracht 5d: Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.



// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
// Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's,
// maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven,
// om onderdelen van de data te formatten.
// Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!



// Bonusopdracht
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren.
// Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies
// zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden.
// Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt.
// Tip: Google eens naar het onclick event van buttons!