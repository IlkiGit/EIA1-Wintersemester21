var europa: string = "Europa";
var nordamerika: string = "Nordamerika";
var suedamerika: string ="Südamerika";
var afrika: string = "Afrika";
var asien: string = "Asien";
var australien: string = "Australien";
var europa2018: number = 4209.3;
var europa2008: number = 4965.7;
var nordamerika2018: number = 6035.6;
var nordamerika2008: number = 6600.4;
var suedamerika2018: number = 1261.5;
var suedamerika2008: number = 1132.6;
var afrika2018: number = 1235.5;
var afrika2008: number = 1028;
var asien2018: number = 16274.2;
var asien2008: number = 12954.7;
var australien2018: number = 2100.5;
var australien2008: number = 1993;
var welt: number = europa2018 + nordamerika2018 + suedamerika2018 + afrika2018 + asien2018 + australien2018;

window.addEventListener("load", function () {
    document.querySelector(".europa").addEventListener("click", function () {emission(europa, europa2018, europa2008);});
    document.querySelector(".nordamerika").addEventListener("click", function () {emission(nordamerika, nordamerika2018, nordamerika2008);});
    document.querySelector(".suedamerika").addEventListener("click", function () {emission(suedamerika, suedamerika2018, suedamerika2008);});
    document.querySelector(".afrika").addEventListener("click", function () {emission(afrika, afrika2018, afrika2008);});
    document.querySelector(".asien").addEventListener("click", function () {emission(asien, asien2018, asien2008);});
    document.querySelector(".australien").addEventListener("click", function () {emission(australien, australien2018, australien2008);});

    function emission(kontinent, kontinent2018, kontinent2008) {
        document.querySelector("#kontinentTitel").innerHTML = kontinent;
        document.querySelector("#kontinentUntertitel").innerHTML = kontinent;
        document.querySelector("#emissionAbsolut").innerHTML = kontinent2018.toString(); 
        document.querySelector("#emissionRelativ").innerHTML = Math.round((kontinent2018 / welt)*100) + "%";
        document.querySelector("#anstiegRelativ").innerHTML = Math.round(((kontinent2018 - kontinent2008) / kontinent2008)*100) + "%";
        document.querySelector("#anstiegAbsolut").innerHTML = Math.round(kontinent2018 - kontinent2008).toString();
        document.querySelector(".chart").setAttribute("style", "height:" + (kontinent2018 / welt) * 100 + "%");
};
});