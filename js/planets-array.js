(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('The Sun');
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf('Earth'));

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();

function addWithSurcharge(a, b){
    var arr = [a,b];
    var aggregator = 0;
    //establishing that aggregator is a number
    arr.forEach(function(num){
        aggregator += num;
        if ( num > 20) {
            aggregator += 3
        } else if (aggregator <= 20 && aggregator > 10){
            aggregator += 2
        } else {
            aggregator += 1;
        }
    });
    return aggregator;
}

