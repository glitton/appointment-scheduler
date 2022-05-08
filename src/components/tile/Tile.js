import React from "react"

export const Tile = (props) => {
  const contactInfo = Object.values(props)

  return (
    <div className="tile-container">
      {contactInfo.map((info, index) => {
        if (index === 0) {
          return (
            <p className="tile-title" key={index}>
              {info}
            </p>
          )
        }
        return <p key={index}>{info}</p>
      })}
    </div>
  )
}
