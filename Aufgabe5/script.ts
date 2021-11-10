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

console.log("Die Emission von " + europa + " ist: " + europa2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + europa + " damit " + Math.round((europa2018/welt)*100) + "%");
console.log("Für " + europa + " hat sich 2018 im Vergleich zu 2008 die Emission um "+ Math.round(((europa2018-europa2008)/europa2008)*100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(europa2018-europa2008) + " kg CO2");

console.log("Die Emission von " + nordamerika + " ist: " + nordamerika2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + nordamerika + " damit " + Math.round((nordamerika2018/welt)*100) + "%");
console.log("Für " + nordamerika + " hat sich 2018 im Vergleich zu 2008 die Emission um "+ Math.round(((nordamerika2018-nordamerika2008)/nordamerika2008)*100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(nordamerika2018-nordamerika2008) + " kg CO2");

console.log("Die Emission von " + suedamerika + " ist: " + suedamerika2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + suedamerika + " damit " + Math.round((suedamerika2018/welt)*100) + "%");
console.log("Für " + suedamerika + " hat sich 2018 im Vergleich zu 2008 die Emission um "+ Math.round(((suedamerika2018-suedamerika2008)/suedamerika2008)*100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(suedamerika2018-suedamerika2008) + " kg CO2");

console.log("Die Emission von " + afrika + " ist: " + afrika2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + afrika + " damit " + Math.round((afrika2018/welt)*100) + "%");
console.log("Für " + afrika + " hat sich 2018 im Vergleich zu 2008 die Emission um "+ Math.round(((afrika2018-afrika2008)/afrika2008)*100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(afrika2018-afrika2008) + " kg CO2");

console.log("Die Emission von " + asien + " ist: " + asien2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + asien + " damit " + Math.round((asien2018/welt)*100) + "%");
console.log("Für " + asien + " hat sich 2018 im Vergleich zu 2008 die Emission um "+ Math.round(((asien2018-asien2008)/asien2008)*100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(asien2018-asien2008) + " kg CO2");

console.log("Die Emission von " + australien + " ist: " + australien2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + australien + " damit " + Math.round((australien2018/welt)*100) + "%");
console.log("Für " + australien + " hat sich 2018 im Vergleich zu 2008 die Emission um "+ Math.round(((australien2018-australien2008)/australien2008)*100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(australien2018-australien2008) + " kg CO2");