import React from 'react'

let ratings=prompt("Enter the mock rating")

const Switch = () => {
    switch (ratings) {
        case "2":
            return <>
                <h1>you are not eligible for requirement</h1>
            </>
            break;
        case "1":
            return <>
                <h1>if you want you can give remock for updation of ratings</h1>
            </>
        case "*":
            return <>
                <h1>you wil get requirement</h1>
            </>
        default:
            return <>
                <h1>We will see you on mock</h1>
            </>
            break;
    }


}

export default Switch