import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function (props) {
  const match = useRouteMatch()
  return <h3>{match.params.id}</h3>
}
