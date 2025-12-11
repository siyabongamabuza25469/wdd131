// Get the current year
const currentYear = new Date().getFullYear();
// Select the footer paragraph for the current year and set its content
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
// Select the footer paragraph for the last modified date and set its content
document.getElementById('lastModified').textContent = `This document was last modified on: ${lastModifiedDate}`;

const products = [
    { id: "fc-1888", name: "fruits and vegetables", averagerating: 4.5 },
    { id: "fc-2050", name: "starch", averagerating: 4.7 },
    { id: "fs-1987", name: "meat", averagerating: 3.5 },
    { id: "ac-2000", name: "oil", averagerating: 3.9 },
    { id: "jj-1969", name: "vitamins and minerals", averagerating: 5.0 }
];

const productsSelect = document.getElementById("product");
if (productsSelect) { products.forEach(product => { const option = document.createElement("option"); option.value = product.id; option.textContent = product.name; productsSelect.appendChild(option); }); }
// This function populates a select element with product names.
function populateProductsSelect(products) {
    const productsSelect = document.getElementById('productsSelect'); // Assuming 'productsSelect' is the ID of your <select> element
    if (!productsSelect) {
        console.error("Element with ID 'productsSelect' not found.");
        return;
    }
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productsSelect.appendChild(option);
    });
}

