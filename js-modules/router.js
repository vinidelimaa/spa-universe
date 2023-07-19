export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event.preventDefault()
    //called to prevent the default behavior of the browser, which is to reload the entire page when a link is clicked.

    window.history.pushState({}, "", event.target.href)
    //used to modify the browser's history state. This method allows changing the URL in the address bar without triggering a full page reload. It takes three arguments: the state object (empty in this case), the title (an empty string), and the new URL (obtained from the event.target.href property, which represents the clicked link's URL)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    // same as: 'const pathname = window.location.pathname'

    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then((data) => {
        if (!data.ok) {
          throw new Error(`HTTP error: ${data.status}`)
        }
        return data.text()
      })
      .then((html) => {
        ;(document.querySelector("#app").innerHTML = html),
          this.bgChange(pathname)
      })
      // .catch((error) => {
      //   window.location.href = this.routes["404"]
      // })
  }

  bgChange(pathname) {
    const body = document.body

    switch (pathname) {
      case "/universe":
        body.style.backgroundImage = "url(./assets/2-universe-background.png)"
        break
      case "/explore":
        body.style.backgroundImage = "url(./assets/3-explore-background.png)"
        break
      default:
        // Define the standart background for other pages
        body.style.backgroundImage = "url(./assets/1-home-background.png)"
        break
    }
  }
}
