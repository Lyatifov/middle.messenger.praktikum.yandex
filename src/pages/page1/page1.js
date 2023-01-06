// import Handlebars from 'handlebars'
import Button from '../../components/UI/Button/Button';
import template from './page1.hbs'


export default (params) => {
    const buttonId = "123",
        buttonValue = "Click heare!"
    const res = template({
        title: 'students',
        button: MyButton(buttonId, buttonValue)
    })
    

    // button.onclick(() => {
    //     console.log('click');
    //     history.pushState(null, null, '/about')
    // })

    return res
}