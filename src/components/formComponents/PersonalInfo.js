import React from "react";
import '../managers.css';

const PersonalInfo = (props) => {
    return (
        <form>
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Full Name" onChange={props.handleNameChange}></input>

            {/* <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name"></input> */}

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="123-132-1231"></input>
            {/* JSX doesn't allow this - pattern="[0-9]{3}-[0-9]{2}-[0-9]{3} */}

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email Address"></input>

            <label for="address">Address</label>
            <input type="text" id="address" name="address" placeholder="Address"></input>
        </form>
    )
}

export default PersonalInfo