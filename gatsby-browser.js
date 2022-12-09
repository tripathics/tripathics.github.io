import React from "react"

// Wraps every page in a component
export function wrapPageElement ({ element, props }) {
  return <>{element}</>
}