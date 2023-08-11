let productMaster11 = [
{id:'A441', name:'Pepsi',category:'SoftDrink',	price:15,	quantity:2},
{id:'B234', name:'Coke',	category:'SoftDrink',	price:10,	quantity:8},
{id:'A617', name:'Mirinda',	category:'SoftDrink',	price:20,	quantity:20},
{id:'B003', name:'Sprite',	category:'SoftDrink',	price:16,	quantity:5},
{id:'B225', name:'MinuteMaid',	category:'SoftDrink',	price:25,	quantity:12},
{id:'A742', name:'5Star',	category:'Chocloate',	price:10,	quantity:3},
{id:'B388', name:'Appy',	category:'SoftDrink',	price:35,	quantity:9},
{id:'A899', name:'Gems',	category:'Chocloate',	price:12,	quantity:11},
{id:'B635', name:'KitKat',	category:'Chocloate',	price:15,	quantity:7},
{id:'B408', name:'Perk',	category:'Chocloate',	price:8,	quantity:15},
{id:'A354', name:'DairyMilk',	category:'Chocloate',	price:30,	quantity:4}] 

function ascOrderNaC(id1,id2){
    return (id1.category).localeCompare(id2.category)||(id1.name).localeCompare(id2.name);

}
productMaster11.sort(ascOrderNaC);
console.log(productMaster11);