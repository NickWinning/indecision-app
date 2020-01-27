'use strict';

// My Code =(
// const app = {
//     title: 'Visibility Toggle',
//     state: 0
// };

// const showDetails = () => {
//     app.state = 1;
//     render();
// };

// const hideDetails = () => {
//     app.state = 0;
//     render();
// }

// const render = () => { 
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {}
//             <button hidden={app.state === 1} onClick={showDetails}>Show Details</button>
//             <button hidden={app.state === 0}onClick={hideDetails}>Hide Details</button>
//             <p hidden={app.state === 0}>Hey. These are some details you can now see!</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');
// render();


//Instructor code =)
var visibility = false;

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some details you can now see!'
            )
        )
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

render();
