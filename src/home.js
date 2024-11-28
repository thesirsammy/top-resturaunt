function switchHome() {
    const contentDOM = document.getElementById('content')

    const content = document.createElement('div');
    content.innerText = "Home";
    content.classList.add('home');

    if (contentDOM.firstChild !== null)
        contentDOM.removeChild(contentDOM.firstChild);
    contentDOM.appendChild(content);
}

export default switchHome;