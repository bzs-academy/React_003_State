import React from 'react';

function Child (props) {

    return (
        <h1> Hey, my name is {props.isim} </h1>
    )
}
export default Child;

// Destructuring yöntem 1
// function Child ({isim}) {
//     return (
//         <h1> Hey, my name is {isim} </h1>
//     )
// }


// Destructuring yöntem 2
// function Child (props) {
//     const { isim } = props
//     return (
//         <h1> Hey, my name is {isim} </h1>
//     )
// }
