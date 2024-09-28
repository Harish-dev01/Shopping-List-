import react from "react"
import ReactDom from "react-dom/client"
import Shoppinglist from "./Shoppinglist"


const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  <>
  <Shoppinglist></Shoppinglist>
  </>
)