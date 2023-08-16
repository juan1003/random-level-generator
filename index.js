const playerLvl = 77;

const generateEnemyLvl = function (playerLvl){
    const minLvl = playerLvl - 5;
    const maxLvl = playerLvl + 5;
    const randomLvl = Math.random() * (maxLvl - minLvl) + minLvl;
    if(randomLvl >= 100) {
        return 100;
    }
    return randomLvl;
}

const enemylvl = generateEnemyLvl(playerLvl);

console.log(`Nidoking ${playerLvl} vs Charizard ${Math.round(enemylvl)}`);
