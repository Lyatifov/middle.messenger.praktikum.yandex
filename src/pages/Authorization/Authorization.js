import template from "./Authorization.hbs"
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"

export default () => {
    const res = template({
        input: Input,
        button: Button
    })
    return res
}