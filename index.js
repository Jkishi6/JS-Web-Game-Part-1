function newImage(source, left, bottom) {
    let greenCharacter = document.createElement('img');
    greenCharacter.src = source;
    greenCharacter.style.position = 'fixed';
    greenCharacter.style.left = left + 'px';
    greenCharacter.style.bottom = bottom + 'px';
    document.body.append(greenCharacter);   
    return greenCharacter;
}

function newItem(source, left, bottom) {
    let item = newImage(source, left, bottom);
    
    item.addEventListener("dblclick", function(){
        item.remove()
    })
    return item
}

function backdrop(source, bottom){
    for(let i= 0; i<window.innerWidth; i = i +100){
        let backgrount = newItem(source, [i], bottom);
    }    
}

for(let i=0; i<=400; i = i+100){
    let grass = backdrop("assets/grass.png", [i]);
}
for(let i=500; i<window.innerHeight; i = i+100){
    let sky = backdrop("assets/sky.png", [i]);
}

let greenCharacter = newImage('assets/green-character.gif', 100, 100);
let pineTree = newImage('assets/pine-tree.png', 450, 250);
let tree = newImage('assets/tree.png', 200, 300);
let piller = newImage('assets/pillar.png', 350, 100);
let crate = newImage('assets/crate.png', 150, 200);
let well = newImage('assets/well.png', 500, 425);

let sword = newItem("assets/sword.png", 500, 405);
let sheild = newItem("assets/sheild.png", 165, 185);
let staff = newItem("assets/staff.png", 600, 100);

