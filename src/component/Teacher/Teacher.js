import { BsCartCheckFill } from 'react-icons/bs';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const {name, picture, age, balance, gender, email} = props.teacher;
    console.log(picture);
    return (
        <div className='item'>
            <div className='img-teacher'>
            <img src={picture} alt="" />
            </div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>Gender: <BsCartCheckFill /> {gender}</p>
            <p>Salary: <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> ${balance}</p>
            <button className='btn'><BsCartCheckFill /> Calculate</button>
        </div>
    );
};

export default Teacher;