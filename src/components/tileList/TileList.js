import React from "react"
import { Tile } from "../tile/Tile"

export const TileList = (props) => {
  const contacts = props.contacts
  return (
    <div>
      tile page
      {contacts.map((contact, index) => {
        return <Tile key={index} contact={contact} />
      })}
    </div>
  )
}
