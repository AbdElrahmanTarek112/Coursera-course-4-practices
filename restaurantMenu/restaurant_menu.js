const breakfastMenu = ['Pancakes - 12$', 'Eggs Benedict - 15$', 'Oatmeal - 8$', 'Frittata - 13$'];
const mainCourseMenu = ['Steak - 28$', 'Pasta - 18$', 'Burger - 16$', 'Salmon - 24$'];
const dessertMenu = ['Cake - 9$', 'Ice Cream - 7$', 'Pudding - 6$', 'Fruit Salad - 8$'];
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
