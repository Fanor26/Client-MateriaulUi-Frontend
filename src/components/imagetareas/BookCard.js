import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const BookCard = (props) => {
    const  book  = props.book;
    const user =props.user;

    return(
        <div className="card-container">
            <img src="https://i.pinimg.com/originals/9e/5d/55/9e5d554cd5bb44d06077ff495055768a.jpg" alt="" width={"100%"} height={400}/>
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    )
};

export default BookCard;