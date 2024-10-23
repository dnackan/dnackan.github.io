function hideAbstract(id) {
    document.getElementById("expand"+id).innerHTML = "[+abstract]";
    document.getElementById("abstract"+id).style.display = 'none';
}

function showAbstract(id) {
    document.getElementById("expand"+id).innerHTML = "[-abstract]";
    document.getElementById("abstract"+id).style.display = 'block';
}

function toggle_visibility(id) {
    var abstract = document.getElementById("abstract"+id);
    
    if (abstract.style.display == 'block') {
        hideAbstract(id);
    }
    else if (abstract.style.display == 'none') {
        showAbstract(id);
    }   
}


function showAll(num) {
    let i = 1;
    while (document.getElementById("expand"+i)) {
        showAbstract(i);
        i++;
    }
}

function hideAll(num) {
    let i = 1;
    while (document.getElementById("expand"+i)) {
        hideAbstract(i);
        i++;
    }
}