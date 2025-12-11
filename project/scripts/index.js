// Set the current year in an element with id 'currentyear'
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastmodified').textContent = document.lastModified;
    // Set the last modified date of the document in an element with id 'lastmodified' document.getElementById('lastmodified').textContent = document.lastModified; 

// Add an event listener to the form with id 'learnMoreForm' to prevent default submission document.getElementById('learnMoreForm').addEventListener('submit', function (event) { event.preventDefault(); // Prevents the form from submitting and reloading the page  });

//Function to update the information displayed based on the selected food group
function updateInfo() {
  const selectElement = document.getElementById('learnMoreSelect');
  const infoDiv = document.getElementById('infoDisplay'); 

  // Check if both elements exist before proceeding if (!selectElement || !infoDiv) { console.error("Required HTML elements (learnMoreSelect or infoDisplay) not found."); return; }

foodItems.forEach(item => { item.addEventListener('click', function() { 
    const category = this.dataset.category; // Assuming data-category attribute is used

switch (category) { case 'fruits': infoDiv.textContent = "Fruits are packed with vitamins, minerals, and fiber, essential for a healthy diet."; 
    break; case 'vegetables': infoDiv.textContent = "Vegetables offer a wide range of nutrients, including antioxidants, and are low in calories."; 
    break; case 'grains': infoDiv.textContent = "Whole grains provide complex carbohydrates for sustained energy and are rich in fiber."; 
    break; case 'protein': infoDiv.textContent = "Protein is vital for muscle repair and growth, and can be found in meats, beans, and nuts."; 
    break; case 'dairy': infoDiv.textContent = "Dairy products are a good source of calcium for strong bones and teeth."; 
    break; case 'oils': infoDiv.textContent = "Healthy oils, such as olive oil, provide essential fatty acids and aid in nutrient absorption."; 
    break; case 'vitamins': infoDiv.textContent = "Vitamins and minerals are crucial for various bodily functions, including immune support and bone health."; 
    break; default: infoDiv.textContent = "";} }); }); };
 