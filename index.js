//Create a menu app as seen in this week’s video. 
//What you create is up to you as long as it meets the 
//following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, 
//and delete elements.

class Trucks{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
}

class Menu{
    constructor(){
        this.trucks=[];
    }



addTruck(){
    let truckMake = prompt("Enter truck make");
    let truckModel = prompt("Enter truck model");
    this.trucks.push(new Trucks(truckMake, truckModel));
}

deleteTruck(){
    let truckIndex = prompt("Enter truck index to DELETE:");
    this.trucks.splice(truckIndex, 1);
}

viewTrucks(){
    let displayTrucks = '';
    for (let i = 0; i < this.trucks.length; i++){

        displayTrucks += `
        ${i} ${this.trucks[i].make} ${this.trucks[i].model}`;
    }

    alert(` 
    Truck Inventory:
    -------------------
    ${displayTrucks}
    `);

}

showMainMenu(){
    return prompt(`
        Main Menu:
        0) Exit Menu
        1) Add Truck
        2) Delete Truck
        3) View All Trucks
        `);
}


start(){
 let selection = this.showMainMenu();

 while(selection != 0){

    switch(selection){

        case "1" : this.addTruck();
        break;

        case "2": this.deleteTruck();
        break;

        case "3": this.viewTrucks();
        break;

        default: selection = 0;
    }
    selection = this.showMainMenu();
  }
  alert("Exiting Menu...goodbye!");
}

}


let truck1 = new Trucks("Chevy", "Silverado")
console.log(truck1);

let menu = new Menu();

menu.start();







