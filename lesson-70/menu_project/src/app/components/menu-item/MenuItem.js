import React from 'react';
import './MenuItem.css';
import { connect } from 'react-redux'
import { addItemToCart } from '../../../store/ActionCreator';


const MenuItem = ({ match, menu, addToCart }) => {
    console.log(match)
    const item = menu.find(item=> item.id === +match.params.id)
    const {title, url, category, price, id} =item
    return (
        <div className="item_page">
            <div className='item_block'>
                <img className='menu__img' src={url} alt={title} />
                <div className='menu__category'>Category: <span>{category}</span></div>
                <div className='menu__price'>Price: <span>{price} $</span></div>
                <button className='menu__btn' onClick = {()=>addToCart(id)}>Add to cart</button>
                <span className={`menu__category_Img ${category}`}></span>

            </div>
        </div>
    )
}

const mapStateToProps = ({ menu }) => {
    return {
        menu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addItemToCart(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);


