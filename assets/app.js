// items

const menu = [
    {
        id:1,
        title:"basic nail 1",
        category:"basic",
        img:"../assets/images/Basic1.JPG",
        desc:`Simple art with glitter`,
    },
    {
        id: 2,
        title:"basic nail 2",
        category:"basic",
        img:"../assets/images/Basic2.JPG",
        desc:`Simple color art with with minimal design`,
    },
    {
        id: 3,
        title:"Medium art 1",
        category:"medium",
        img:"../assets/images/Medium1.JPG",
        desc:`Medium art with design`,
    },
    // {
    //     id: 4,
    //     title:"Medium art 2",
    //     category:"medium",
    //     img:"../assets/images/Medium2.JPG",
    //     desc:`Medium art with design`,
    // },
    {
        id: 5,
        title:"Medium art 3",
        category:"medium",
        img:"../assets/images/Medium3.JPG",
        desc:`Medium art with design`,
    },
    {
        id: 6,
        title:"Advanced art 1",
        category:"advanced",
        img:"../assets/images/Advanced1.JPG",
        desc:`Advanced art with detailed character`,
    },
    {
        id: 7,
        title:"Advanced art 2",
        category:"advanced",
        img:"../assets/images/Advanced2.JPG",
        desc:`Advanced art with detailed character`,
    },
]

const sectionCenter = document.querySelector('.section-center');

const filterBtns = document.querySelectorAll('.filter-btn')

//load items
window.addEventListener("DOMContentLoaded", function () {
        displayMenuItems(menu);
});

// filter buttons 
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
        return menuItem;
    }
    });
    // console.log(menuCategory);
    if (category === "all") {
        displayMenuItems(menu)
    } else {
        displayMenuItems(menuCategory)
    }
 });
});


//filter items
// filterBtns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const category = e.currentTarget.dataset.id;
//         const menuCategory = menu.filter(function (menuItem) {
//             // console.log(menuItem.category);
//             if (menuItem.category === category) {
//                 return menuItem;
//             }
//         });
//         // console.log(menuCategory);
//         if (category === "all") {
//             displayMenuItems(menu);
//         } else {
//           displayMenuItems(menuCategory);
//         }
//     });
//  });


function displayMenuItems(menuItems) {
    let displayMenu= menu.map(function(item) {
        console.log(item);
      return `<article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title}>
      <div class="item-info">
           <header>
              <h4>${item.title}</h4>
        </header>
          <p>${item.desc}</p>
      </div>
     </article> `;  
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu
};



