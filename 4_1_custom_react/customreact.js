
/* 

if more than 2 elements came than it gaves problem

*/

function customRender(reactElement , container)
{
    // creating dom element
    const domElement = document.createElement(reactElement.type);

    // innerHTML
    // children creating
    domElement.innerHTML = reactElement.children
    
    // setting attribute
    domElement.setAttribute('href',reactElement.props.href);

    domElement.setAttribute('target',reactElement.props.target);
    
    // injecting dom element
    container.appendChild(domElement);
}

// react sees element as a tree after compilation


const reactElement = {
    type: 'a',

    // props -> properties
    // its the type of object -> inside it add as much properties as u can
    props: {
        href: 'https://google.com',
        target: '_blank'
    },

    children: 'Click me to visit google'
}


// root -> id
const mainContainer = document.querySelector('#root')

// now we have to render 'a' tag
customRender(reactElement,mainContainer) ;