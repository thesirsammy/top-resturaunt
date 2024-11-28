import profile from "./img/profile.png"

function switchAbout() {
    const contentDOM = document.getElementById('content')

    const content = document.createElement('div');
    content.innerHTML = `
    <div class="content-div">
            <h1>About</h1>
            <div class="about-div">
                <img src=${profile} class="img-chef">
                <p>Hi, I’m Pedro Pascal, the chef and heart behind the flavors of El Sol Cantina.
                     I was born and raised in the vibrant streets of Oaxaca, Mexico, where my 
                     love for cooking started in my abuela’s kitchen. I still remember the joy of 
                     hand-rolling tortillas with her and grinding spices in a molcajete, learning 
                     that every meal has a story to tell. Over the years, I’ve worked in kitchens 
                     across Mexico and the United States, perfecting my craft and finding ways to 
                     blend traditional recipes with a modern twist. Bringing the rich flavors of 
                     Mexico to Ft. Lauderdale has been a dream come true. When I’m not in the kitchen, 
                     you’ll find me teaching cooking classes or browsing local farmers’ markets for the 
                     freshest ingredients. For me, every dish I create is about making people feel at home, 
                     one bite at a time.</p>
            </div>
        </div>`;
    content.classList.add('about');

    if (contentDOM.firstChild !== null)
        contentDOM.removeChild(contentDOM.firstChild);
    contentDOM.appendChild(content);
}

export default switchAbout;