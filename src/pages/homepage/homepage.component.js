import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

/*All the history properties are available here.
App.js sends props to its direct child only automatically
if we need history property in any other component we have to pass it down as props
To avoid this, we can use withRouter which gives us history in any component.*/
const HomePage = (props) => { 
    console.log(props)
    return (
    <div className='homepage'>
        <Directory/>
    </div>
)}

export default HomePage
