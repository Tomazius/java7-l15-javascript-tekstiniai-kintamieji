window.onload = function() {

    let o = "vampyras";
    let p = "vilkolakis";
    let r = "burtininkas";

    console.log(ilgis(o))
    console.log(ilgis(p))
    console.log(ilgis(r))

}

function ilgis (maistas) {

    return maistas [maistas.length - 1];
}