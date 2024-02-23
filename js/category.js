function toggleCategory(categoryId) {
    const categories = document.querySelectorAll('.category-content');
  
    categories.forEach(category => {
      category.style.display = 'none';
    });
  
    categories.forEach(div => {
      div.classList.remove('active');
    });
  
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
      selectedCategory.style.display = 'block';
    }
  
    categories.classList.add('active');
}

const groupBtn = document.querySelector("#groupButton");
groupBtn.addEventListener( "click", () => {
  window.open("https://github.com/arajshow", "_blank");
})

const joinGroupBtn = document.querySelector("#joinBtn");
joinGroupBtn.addEventListener( "click", () => {
  window.open("https://github.com/arajshow", "_blank");
})
  toggleCategory('all');
