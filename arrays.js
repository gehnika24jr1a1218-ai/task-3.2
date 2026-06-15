const products=[
    {id:1, name: 'Laptop', price: 50000,category: 'Electronics'},
    { id: 2, name: "Shoes", price: 2000, category: "Fashion" },
    { id: 3, name: "Mobile", price: 30000, category: "Electronics" },
    { id: 4, name: "T-Shirt", price: 1000, category: "Fashion" },
    { id: 5, name: "Headphones", price: 2500, category: "Electronics" }
];

//Use to create an array containing only product names.
const names = products.map((product)=> {
    return product.name;
})
console.log(names);

//Use to create a new array with a 10% discount price for each product.
const discount = products.map((product) => {
    return {
        ...product,
        discountedprice: product.price - (product.price * 0.1)
    };
});
console.log(discount);

//Use to display only Electronics products.
const electronics = products.filter((product) => {
    return product.category == "Electronics";
});
console.log(electronics);

//Use to display products costing more than ₹5,000.
const cost = products.filter((product) => {
    return product.price > 5000;
});
console.log(cost);

//Use to calculate the total price of all products.
const totalCost = products.reduce((sum,current) => {
    return sum + current.price;
},0);
console.log(totalCost);

//Use to find the most expensive product.
const mostExpensive = products.reduce((max,current) => {
    return current.price > max.price ? current: max
});
console.log(mostExpensive)

//Use to display names of Electronics products only.
const productName = products
.filter((product) => {
    return product.category == "Electronics";
})
.map((product) => {
    return product.name;
});
console.log(productName);

//Use to count the number of products in each category.
const countCat = products.reduce((count,product) => {
    if(product.category == 'Electronics') {
        count.Electronics++;
    }
    else if(product.category == "Fashion") {
        count.Fashion++;
    }
    return count;
},{Electronics:0,Fashion:0});
console.log(countCat);
