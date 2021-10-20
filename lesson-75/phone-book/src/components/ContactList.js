import { getAllContactsAction, contactsSelector } from '../store/contacts'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Delete from './../images/trash.png'


const ContactList = () => {
    const contacts = useSelector(contactsSelector);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllContactsAction())
    }, [dispatch])

    return (
        <Wrapper>
            {contacts.length === 0 && <h3>Contacts list is empty</h3>}
            <List>
                {contacts.map(contact =>
                    <Li key={contact.id}>
                        <Link to={`/contact/${contact.id}`}>
                            {contact.firstName} {contact.lastName}
                        </Link>
                        <Image src = {Delete}/>
                    </Li>)}
            </List>
        </Wrapper>
    )
}

export default ContactList

const Wrapper = styled.div`
    width:50%;
    margin-top:50px;
`
const List = styled.ul`
    list-style: none;
    padding-left:0px
`

const Li = styled.li`
    display:flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items:center;
    height: 80px;
    margin-bottom:10px;
    border-bottom: 1px solid black;
     & a{
    text-decoration: none;
    color: black;
     }
     &:hover{
         background-color:#1aa592;
     }

     & a:hover{
        color:white;
     }
    
`

const Image = styled.img`
     width: 24px;
`
