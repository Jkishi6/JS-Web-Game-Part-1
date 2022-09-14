//creates image on screen
function newImage(source, left, bottom) {
    let greenCharacter = document.createElement('img');
    greenCharacter.src = source;
    greenCharacter.style.position = 'fixed';
    greenCharacter.style.left = left + 'px';
    greenCharacter.style.bottom = bottom + 'px';
    document.body.append(greenCharacter);   
    return greenCharacter;
}

//creates inventory system
let inventory
function newInventory(){
    inventory = document.createElement('div');
    inventory.style.position = 'fixed';
    inventory.style.bottom = '0px';
    inventory.style.left = '0px';
    inventory.style.width = '100%';
    inventory.style.height = '100px';
    inventory.style.display = 'flex';
    inventory.style.flexDirection = 'row';
    inventory.style.alignItems = 'center';
    inventory.style.justifyContent = 'space-evenly';
    inventory.style.border = '2px solid black';
    inventory.style.backgroundColor = 'brown';
    document.body.append(inventory);
    return inventory;
}

//creates item on screen (additional functionality compared to image)
function newItem(source, left, bottom) {
    let item = newImage(source, left, bottom);
    
    item.addEventListener("dblclick", function(){
        item.remove()
        let inventoryItem = document.createElement("img");
        inventoryItem.src = source
        inventory.append(inventoryItem);
    })
    return item
}

//creates the background on the screen
function backdrop(source, bottom){
    for(let i= 0; i<window.innerWidth; i = i +100){
        let background = newImage(source, [i], bottom);
    }    
}
for(let i=0; i<=400; i = i+100){
    let grass = backdrop("assets/grass.png", [i]);
}
for(let i=500; i<window.innerHeight; i = i+100){
    let sky = backdrop("assets/sky.png", [i]);
}



newInventory();

//image creation
let greenCharacter = newImage('assets/green-character.gif', 100, 100);
let pineTree = newImage('assets/pine-tree.png', 450, 250);
let tree = newImage('assets/tree.png', 200, 300);
let piller = newImage('assets/pillar.png', 350, 100);
let crate = newImage('assets/crate.png', 150, 200);
let well = newImage('assets/well.png', 500, 425);

//item creation
let sword = newItem("assets/sword.png", 500, 405);
let sheild = newItem("assets/sheild.png", 165, 185);
let staff = newItem("assets/staff.png", 600, 100);

