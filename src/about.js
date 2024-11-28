function switchAbout() {
    const contentDOM = document.getElementById('content')

    const content = document.createElement('div');
    content.innerText = "About";
    content.classList.add('about');

    if (contentDOM.firstChild !== null)
        contentDOM.removeChild(contentDOM.firstChild);
    contentDOM.appendChild(content);
}

export default switchAbout;