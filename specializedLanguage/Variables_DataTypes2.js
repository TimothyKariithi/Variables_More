let initMass, growthRate, yearsGrow, finalMass;

initMass = 10000.0

growthRate = 0.40

yearsGrow = 10.0

finalMass = initMass * Math.pow(1.05 + growthRate, yearsGrow)

console.log("Final mass after ")
console.log(yearsGrow)
console.log(" years is: ")
console.log(finalMass)

