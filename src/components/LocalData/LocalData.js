// use local data manage 
const addLoadStorage = _id => {
    const quantity = localStorage.getItem(_id)
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(_id, newQuantity)
        console.log('already exist');
    }
    else {
        console.log('add item');
        localStorage.setItem(_id, 1);
    }
}
export { addLoadStorage }