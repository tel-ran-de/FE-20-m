import ContactList from './ContactList';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import ContactView from './ContactView';

const ContactMain = ()=>{
    return(
        <Wrapper>
            <ContactList />
            <Route exact path = '/contact/:id' component = {ContactView} />
        </Wrapper>
    )
}

export default ContactMain;

const Wrapper = styled.div`
    display: flex;
`