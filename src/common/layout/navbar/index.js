import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {book} from "../../../navigation/book";


export const Navbar = () => {

  return (
    <nav className='navbar'>
      <h1>
        <Link to={book.timer}>
          <i className='far fa-clock'></i> {'  '}
          Timer
        </Link>
      </h1>
    </nav>
  )
};
