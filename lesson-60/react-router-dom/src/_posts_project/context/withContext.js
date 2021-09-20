import React from 'react';
import {AppContext} from './app-context';

// eslint-disable-next-line
export default Component =>{
    return props =>{
        return(
            <AppContext.Consumer>
                {context => <Component {...props} context = {context}/>}
            </AppContext.Consumer>
        )
    }
}

/* export default Component =>{
    return props =>{
        return(
            <WithBorder>
                {<Component {...props} style = {{border:'10px solid black'}}/>}
            </WithBorder>
        )
    }
} */

