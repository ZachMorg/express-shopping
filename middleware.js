const items = require('./fakeDb')

const findItem = function(name){
    let index = 0;
    for(let item of items){
        if(item['name'] === name){
            return index
        }
        index++;
    }
}


const updateItem = function(name, newName, newPrice){
    let initialIndex = findItem(name)
    items[initialIndex].name = newName
    items[initialIndex].price = newPrice
    return initialIndex
}


const deleteItem = function(name){
    let deleteIndex = findItem(name)
    items.splice(deleteIndex,1)
    return
}

module.exports = {
    findItem,
    updateItem,
    deleteItem
};