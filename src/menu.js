import menu1 from "./img/menu-1.png"
import menu2 from "./img/menu-2.png"
import menu3 from "./img/menu-3.png"

function switchMenu() {
    const contentDOM = document.getElementById('content')

    const content = document.createElement('div');
    content.innerHTML = `<div class="content-div">
            <h1>Menu</h1>
            <div class="menu-item">
                <img src=${menu1}>
                <p>Two soft corn tortillas overflowing with bold flavors that transport you straight to a bustling Mexican plaza. 
                    Choose from smoky grilled carne asada, tangy marinated chicken, or flavorful carnitas, each topped with chopped onions, 
                    fresh cilantro, and a squeeze of lime. Add a drizzle of our house-made salsa verde or fiery rojo for a burst of heat. 
                    Served with a side of Mexican street corn or our refreshing cucumber-lime salad, these tacos are as authentic as it gets.</p>
            </div>
            <button>Select</button>

            <div class="menu-item">
                <p>A fiesta wrapped in a warm flour tortilla! 
                    Packed with your choice of tender, seasoned meat (chicken, beef, or slow-cooked pork), 
                    our burrito is layered with cilantro-lime rice, hearty black beans, fresh pico de gallo, 
                    creamy guacamole, and a sprinkle of shredded cheese. Smothered in your choice of rich, 
                    zesty red sauce or creamy queso, it’s a dish that satisfies every craving. 
                    Served with a side of crisp tortilla chips and house-made salsa for the perfect bite every time.</p>
                <img src=${menu2}>
            </div>
            <button>Select</button>

            <div class="menu-item">
                <img src=${menu3}>
                <p>A show-stopping classic brought to your table still sizzling! Choose from tender strips of marinated steak, juicy chicken, 
                    or succulent shrimp, seared to perfection with a medley of caramelized onions and bell peppers. Served with warm flour or 
                    corn tortillas, creamy guacamole, sour cream, shredded cheese, and a side of Mexican rice and refried beans. Build your own 
                    and savor the perfect balance of smoky, savory, and fresh flavors in every bite.</p>
            </div>
            <button>Select</button>
        </div>`;
    content.classList.add('menu');

    if (contentDOM.firstChild !== null)
        contentDOM.removeChild(contentDOM.firstChild);
    contentDOM.appendChild(content);
}

export default switchMenu;