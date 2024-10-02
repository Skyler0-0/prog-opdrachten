function kubesInhoud(getal1, getal2, getal3){
return getal1 * getal2 * getal3;
}

function cilinderInhoud(diameter, hoogte){
    const radius = diameter / 2;
    const pi = Math.PI;
    return Math.pow(radius, 2) * pi * hoogte;
}

function driehoek(lengte, hoogte) {
    return Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
}

function gemiddeld(getal1, getal2, getal3, getal4, getal5, getal6, getal7) {
    let totaal = getal1 + getal2 + getal3 + getal4 + getal5 + getal6 + getal7;
    return totaal /7;
}





let kubes = kubesInhoud(2, 2, 2 )
console.log(kubes)

let cylinder = cilinderInhoud(30, 3);
console.log(cylinder);

let langeZijde = driehoek(5, 4);
console.log(langeZijde);

let yippee = gemiddeld(4, 5, 3, 2, 8, 5, 9);
console.log(yippee);