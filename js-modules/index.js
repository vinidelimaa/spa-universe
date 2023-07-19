// import { bgChange } from "./bgChange.js"
import { Router } from "./router.js"

const router = new Router()
router.add("/", "./pages/home.html")
router.add("/universe", "./pages/universe.html")
router.add("/explore", "./pages/explore.html")
router.add('404', "./pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
// the popstate event is triggered when the user navigates backward or forward in the browser's history. By assigning the router.handle() function to window.onpopstate, we are defining that the handle() function of the router object will be called every time the popstate event is triggered
window.route = (event) => router.route(event)
