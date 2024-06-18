

function customRender(reactElement , container)
{
   /*  // creating dom element
    const domElement = document.createElement(reactElement.type);

    // innerHTML
    // children creating
    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href',reactElement.props.href);

    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement); */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // traversing in properties
    for(const prop in reactElement.props)
        {
            if(prop == 'children')
                {
                    continue;
                }
            // repeating setAttribute
            domElement.setAttribute(prop , reactElement.props[prop])
        }
        container.appendChild(domElement)
}




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