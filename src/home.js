function switchHome() {
    const contentDOM = document.getElementById('content')

    const content = document.createElement('div');
    content.innerHTML = `<div class="content-div">
            <h1>El Sol Cantina</h1>
            <p>Bienvenidos! At El Sol Cantina, we bring the vibrant flavors of Mexico straight to your plate. 
                Nestled in the heart of Fort Lauderdale, our restaurant is more than just a place to eat—it’s a celebration of culture, tradition, and culinary artistry. 
                From sizzling fajitas to creamy guacamole made fresh at your table, every dish is crafted with passion and authenticity.<br><br>

                Our chefs draw inspiration from Mexico’s rich culinary heritage, blending traditional recipes with a modern twist. 
                Whether you’re craving hearty enchiladas, zesty tacos, or refreshing margaritas, we’ve got something for everyone. 
                Vegetarian, vegan, and gluten-free options ensure no one misses out on the fiesta.<br><br>
            
                We believe that great food is best shared with friends and family, which is why we’ve created a warm, 
                welcoming atmosphere perfect for gatherings big and small. With live music on weekends and a sunny patio for outdoor dining, 
                every visit to El Sol Cantina is a mini vacation to Mexico.<br><br>
            
                Come for the food, stay for the experience. We can’t wait to welcome you to our table!</p>
        </div>`;
    content.classList.add('home');

    if (contentDOM.firstChild !== null)
        contentDOM.removeChild(contentDOM.firstChild);
    contentDOM.appendChild(content);
}

export default switchHome;