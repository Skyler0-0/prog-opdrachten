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

function gemiddeldeBerekenen(getallen) {
    let som = getallen.reduce((acc, curr) => acc + curr, 0);
    return som / getallen.length;
}





let kubes = kubesInhoud(2, 2, 2 )
console.log(kubes)

let cylinder = cilinderInhoud(30, 3);
console.log(cylinder);

let langeZijde = driehoek(5, 4);
console.log(langeZijde);

let gemiddelde = gemiddeldeBerekenen([100, 200, 300, 400, 500, 600, 700]);
console.log(gemiddelde);
