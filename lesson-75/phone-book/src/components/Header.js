import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { authSelector, logout } from '../store/app';
import { useSelector, useDispatch } from 'react-redux'




const Header = () => {

    const auth = useSelector(authSelector);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Nav>{!auth &&
                <HeaderLink style={{ marginLeft: 'auto' }}>
                    <NavLink to='/login' activeClassName='active'>login/registartion</NavLink>
                </HeaderLink>}
                {auth && <>
                    <HeaderLink>
                        <NavLink to='/contacts' activeClassName='active'>all contacts</NavLink>
                    </HeaderLink>
                    <HeaderLink>
                        <NavLink to='/contact/add' activeClassName='active'>add contact</NavLink>
                    </HeaderLink>
                    <HeaderLink style={{ marginLeft: 'auto' }}
                                onClick = {()=>{
                                    dispatch(logout())
                                }}>
                        <NavLink exact to='/' activeClassName='active' >logout</NavLink>
                    </HeaderLink>
                </>}
            </Nav>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    background-color:#1aa592;
    display:flex;
    padding: 10px 0;
    margin-bottom:30px;
`
const Nav = styled.ul`
    list-style: none;
    display:flex;
    padding: 0 20px;
    width:100%;
`
const HeaderLink = styled.li`
    & a{
        text-decoration:none;
        margin-right:20px;
        color:white;
    }
    & a:hover{
        cursor:pointer;
        text-decoration: underline;
        color:rgba(255, 255, 255, 0.7);
    }

`