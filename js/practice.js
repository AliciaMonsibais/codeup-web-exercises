"use strict";

/**Heather is wanting to join an after school club. She is currently involved with another club at school, but luckily all after school clubs will only meet on one day out of the week. Return an alert to Heather as to whether or not she can join another club.*/
//Why can't this bitch use deductive reasoning?//

var newClubDay = prompt("What day does the club you want to join meet?");
var currentClubDay = !confirm("Does your club meet on " + newClubDay + "?");
alert ("You can join this club:" + (currentClubDay && newClubDay));



/**Rodrigo is a chef, and needs to buy food for his restaurant. He's worked out a deal with the shop and can get his food for a twenty percent discount, but the shop changes their prices from week to week. Rodrigo needs to buy tofu, lamb, and potatoes. Return an alert to Rodrigo with his total based on how much of each item he's buying, by weight in pounds, the price of the items per pound, and also inform him of the savings he's receiving from the store.*/
var lamb = Number(prompt("How many pounds of lamb will you buy?"));
var tofu = Number(prompt("How many pounds of tofu will you buy?"));
var potatoes = Number(prompt("How many pounds of potatoes will you buy?"));




/**!!! ALGEBRA HEAVY !!!
Jimmy wants to buy and sell some metal. If he has two and a half pounds he can smelt it into an ingot and sell back the metal for triple the profit. Any metal he has, he can sell back for a thirty percent loss. Jimmy will alway make an ingot if he can, and will sell all of the metal he has, ingot or not. The metal Jimmy wants to smelt is priced at fifteen dollars per eight ounces. Alert Jimmy with how much money he's made from selling the metal, as well as how much of it, by pounds, he was forced to sell at a loss, and how many ingots he was able to sell.*/


/**Georgia wants to run a marathon. She is able to run at a speed of 10.75 km/hr for an hour, but her speed decreases by half of a mile per hour every forty-five minutes. Georgia will only ever run as slow as 1 km/hr. How long will it take for Gerogia to finish her race? Return an alert saying how many hours it will take for Georgia to complete her run for a given distance.*/