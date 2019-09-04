// global variables
var tieI = { 
    HP: 120, 
    atk: 10, 
    cta: 10 };

var tieA = { 
    HP: 120, 
    atk: 10, 
    cta: 10 };

var tieOG = { 
    HP: 120, 
    atk: 10, 
    cta: 10 };

var tieB = { 
    HP: 120, 
    atk: 10, 
    cta: 10 };

var currentEnemyHP = chosenEnemy[0];// equals click to a defender
var chosenEnemy = "";// on click choice
var currentATK = hero[1];
var hero = ""; //hero on click choice
var currentHeroHP = hero[0] - enemyCATK;
var currentHeroATK = hero[1] + atkBonus;
var atkBonus = hero[1];
var enemyCATK = chosenEnemy[2];
var TIEBIMG = document.getElementById('TIE_Bomber');

// function gameStart () {
    
// };

$('#attack-button').on('click', function () { 
    currentEnemyHP - currentHeroATK;
    $('#TIE_BomberHP').text(currentEnemyHP);
    //grab initial attack and deal that damage to hp of defender
    //double the base attack bonus by itself
    //reduce hero hp by cta
    //check if defender or hero is at 0 hp
    //if hero hp is === 0 or less than 0 "you were defeated"
    //if defender hp is === 0 or less than 0 remove from defender area
    //if there are no more defenders you win


});

$('#TIE_Bomber').on('click', function () { 
    $('#Defender').append(TIEBIMG);
});

// Choose hero, assign all others as enemies, move them to enemy area

// enemies get red boarders

// choose enemy to attack who becomes the defender

// push attack button to attack (change hp based on randon attack damage done and counter attack)

// Each time I attack increase attack power

// check if health goes below 0, first to go below zero is defeated

// when an enemey is defeated remove them from the board

// restart button

