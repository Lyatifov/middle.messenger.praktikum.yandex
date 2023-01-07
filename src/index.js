import template from "./index.hbs";
import "./index.scss";
import Authorization from "./pages/Authorization/Authorization";
import Registration from "./pages/Registration/Registration";
import Error from "./pages/Error/Error";
import Chats from "./pages/Chats/Chats"

const root = document.getElementById("root");

root.innerHTML = template({
    Authorization: Authorization,
    Registration: Registration,
    Error: Error,
    Chats: Chats,
});

// root.innerHTML = template({
//     page1: page1()
// })

// отслеживание URL //

// history.pushState(null, null, '/about')
// document.URL

// const observeUrlChange = () => {
//     const oldHref = document.location.href
//     const body = document.querySelector("body")
//     const observer = new MutationObserver(mutations => {
//         mutations.forEach(() => {
//             if (oldHref !== document.location.href) {
//                 oldHref = document.location.href
//                 /* Changed ! your code here */
//             }
//         })
//     })
//     observer.observe(body, { childList: true, subtree: true })
// };
// window.onload = observeUrlChange;

//=======================//

// добавление эвента существующему элементу //

// const button = document.getElementById(123)

// button.addEventListener("click", () => {
//     console.log("click!")
// })

//=======================//

// const comp = Handlebars.compile(template)
// const res = comp({
//     title: "Title",
//     // button: MyButton(("idbtn1", "Click Me!"))
// })

// console.log(MyButton(("idbtn1", "Click Me!")));

// window.createButton = (id, value) => {
//     const htmlTpl = document.createElement('template')
//     htmlTpl.innerHTML = MyButton(id, value)
//     root.appendChild(htmlTpl.content)
// }
