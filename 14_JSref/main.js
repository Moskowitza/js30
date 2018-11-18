// let age=100;
// let age2=age;
// console.log(`age: ${age}, age2: ${age2}`)
// age2=200;
// console.log(`age: ${age}, age2: ${age2}`)
// let name="Aaron";
// let name2="Blue";
// console.log(`name: ${name}, name2: ${name2}`)
//  name2="Eno"
// console.log(`name: ${name}, name2: ${name2}`)

// Let's say we have an array
// const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// const team=players;
// console.log(`players: ${players}, team: ${team}`)
// // team[3]='ZaZa'
// console.log(`players: ${players}, team: ${team}`)
// // UH OH!!! Zaza! changed origingal array
// const team2=players.slice();
// team2[3]='ZaZa'
// console.log(`players: ${players}, team2: ${team2}`)
// const team3=[].concat(players)
// team3[3]='ZaZa'
// console.log(`players: ${players}, team3 using concat: ${team3}`)
// const team4=[...players]
// team4[3]='ZaZa'
// console.log(`players: ${players}, team4 using spread: ${team4}`)
// const team5=Array.from(players)
// team5[3]='ZaZa'
// console.log(`players: ${players}, team5 using spread: ${team5}`)

const person ={
    name:"Aaron Moskowitz",
    age:190
}
// const captain=person;
// captain.number=99
// console.log(captain) 
//{ name: 'Aaron Moskowitz', age: 190, number: 99 }

// Object.assign takes 3 arguments
// const captain2=Object.assign({},person,{position:"captain"})
// console.log(captain2)

// spread an object
// const cap3={...person}
// console.log(cap3)
const aaron={
    name:"Aaron Moskowitz",
    age:"200",
    pets:{
        cats:['Eno', 'Toki'],
        dogs:['Blue'],
    }
}
// console.log(aaron)
// const aaronClone={...aaron}
// console.log(aaronClone)
// const dev=Object.assign({},aaron)
// dev.pets.dogs=['Red']
// console.log(`Aaron: ${JSON.stringify(aaron)}, dev:${JSON.stringify(dev)}`);
// OH NO!!! Blue has been over written

// HACK AROUND
const dev2=JSON.parse(JSON.stringify(aaron))
dev2.pets.dogs=['Red']
// Now Aaron has Blue and Dev2 has Red
console.log(`Aaron: ${JSON.stringify(aaron)}, dev2:${JSON.stringify(dev2)}`);
