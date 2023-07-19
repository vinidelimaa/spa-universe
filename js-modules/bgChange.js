// export function bgChange() {
//   const getPathname = () => {
//     const path = window.location.pathname
//     return path.charAt(0) === "/" ? path.slice(1) : path
//   }

//   function setBodyBackground() {
//     const body = document.body
//     const path = getPathname()

//     // Verify the pathname and define the body
//     switch (path) {
//       case "universe":
//         body.style.backgroundImage = "url(./assets/2-universe-background.png)"
//         break
//       case "explore":
//         body.style.backgroundImage = "url(./assets/3-explore-background.png)"
//         break
//       default:
//         // Define the standart background for other pages
//         body.style.backgroundImage = "url(./assets/1-home-background.png)"
//         break
//     }
//   }

//   setBodyBackground()
// }
