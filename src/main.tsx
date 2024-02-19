import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store, persistor } from "./redux/store"
import "./index.css"
import { PersistGate } from "redux-persist/integration/react"
import "overlayscrollbars/overlayscrollbars.css"
const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <App />
        </PersistGate>
      </Provider>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
