var europa = "Europa";
var nordamerika = "Nordamerika";
var suedamerika = "Südamerika";
var afrika = "Afrika";
var asien = "Asien";
var australien = "Australien";
var europa2018 = 4209.3;
var europa2008 = 4965.7;
var nordamerika2018 = 6035.6;
var nordamerika2008 = 6600.4;
var suedamerika2018 = 1261.5;
var suedamerika2008 = 1132.6;
var afrika2018 = 1235.5;
var afrika2008 = 1028;
var asien2018 = 16274.2;
var asien2008 = 12954.7;
var australien2018 = 2100.5;
var australien2008 = 1993;
var welt = europa2018 + nordamerika2018 + suedamerika2018 + afrika2018 + asien2018 + australien2018;
window.addEventListener("load", function () {
    document.querySelector(".europa").addEventListener("click", function () { emission(europa, europa2018, europa2008); });
    document.querySelector(".nordamerika").addEventListener("click", function () { emission(nordamerika, nordamerika2018, nordamerika2008); });
    document.querySelector(".suedamerika").addEventListener("click", function () { emission(suedamerika, suedamerika2018, suedamerika2008); });
    document.querySelector(".afrika").addEventListener("click", function () { emission(afrika, afrika2018, afrika2008); });
    document.querySelector(".asien").addEventListener("click", function () { emission(asien, asien2018, asien2008); });
    document.querySelector(".australien").addEventListener("click", function () { emission(australien, australien2018, australien2008); });
    function emission(kontinent, kontinent2018, kontinent2008) {
        document.querySelector("#kontinentTitel").innerHTML = kontinent;
        document.querySelector("#kontinentUntertitel").innerHTML = kontinent;
        document.querySelector("#emissionAbsolut").innerHTML = kontinent2018.toString();
        document.querySelector("#emissionRelativ").innerHTML = Math.round((kontinent2018 / welt) * 100) + "%";
        document.querySelector("#anstiegRelativ").innerHTML = Math.round(((kontinent2018 - kontinent2008) / kontinent2008) * 100) + "%";
        document.querySelector("#anstiegAbsolut").innerHTML = Math.round(kontinent2018 - kontinent2008).toString();
        document.querySelector(".chart").setAttribute("style", "height:" + (kontinent2018 / welt) * 100 + "%");
    }
    ;
});
//# sourceMappingURL=script.js.map