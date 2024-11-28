function switchMenu() {
    const contentDOM = document.getElementById('content')

    const content = document.createElement('div');
    content.innerText = "Menu";
    content.classList.add('menu');

    if (contentDOM.firstChild !== null)
        contentDOM.removeChild(contentDOM.firstChild);
    contentDOM.appendChild(content);
}

export default switchMenu;