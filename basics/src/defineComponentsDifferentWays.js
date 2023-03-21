// function declaration used as a component in React
function Nav(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// function declaration to a function expression
// Changing a component from a function declaration to a function expression doesn't change its behavior, or how you write the code to render the Nav component. It's still the same:
const Nav = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// Components as Arrow Functions
// One of the main benefits of using arrow functions is its shorter syntax
const Nav = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// Arrow functions is that using the parentheses is optional if there's a single parameter that a function accepts
const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// In all other cases, when we write arrow functions, for any number of parameters other than a single parameter, using parentheses around parameters is compulsory
const Nav = () => {
    return (
        <ul>
            <li>Home</li>
        </ul>
    )
}

// Another interesting thing about arrow functions is the implicit return. However, it only works if it's on the same line of code as the arrow itself. In other words, the implicit return works if your entire component is a single line of code
const Nav = () => <ul><li>Home</li></ul>