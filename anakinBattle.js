let anakinAttack = 25
let obiWanAttack = 35 
let anakinHealth = 100
let anakinDefense = 0

if(anakinAttack > obiWanAttack){
  console.log("Anakin has the stronger attack.")
}else if(obiWanAttack > anakinAttack){
  console.log("Obiwan has the higher attack")
} else {
  console.log("the force is with both of them")
}


if(anakinHealth <= 0){
  console.log("Anakin has fallen.")
}else{
  anakinHealth -= obiWanAttack
  console.log("ANakin's health is low", anakinHealth)
}

anakinDefense += 25

if(anakinHealth <= obiWanAttack - anakinDefense){
  console.log("Anakin has fallen.")
}else {
  anakinHealth -= obiWanAttack - anakinDefense
  console.log(`Anakin's health is now ${anakinHealth}`)
}

console.log("Anakin takes a medpack")

if(anakinHealth + 50 >= 100){
  anakinHealth = 100
  console.log(anakinHealth)
}else {
  anakinHealth += 50
  console.log(anakinHealth)
} 

for(i = 0; i < 5; i++){
  anakinHealth -= obiWanAttack - anakinDefense
   console.log(`Anakin's health is now ${anakinHealth}`)
}

while(anakinHealth > 0){
  anakinHealth -= obiWanAttack - anakinDefense
  console.log(`Anakin's health is now ${anakinHealth}`)
  if(anakinHealth <= 0){
    console.log("Anakin has fallen to the dark side and is no longer Anakin. Or alive.")
  }
}