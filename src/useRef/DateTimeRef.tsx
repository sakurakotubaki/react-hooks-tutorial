import React from 'react'

const DateTimeRef = () => {
  const now = new Date().getMilliseconds().toString()
  const ref = React.useRef<string>(now)

  const handleClick = () => {
    window.alert(ref.current)
  }

  return (
    <div>
        <h1>Current Date and Time</h1>
        <p>{now}</p>
        <button onClick={handleClick}>Show Date and Time</button>
    </div>
  )
}

export default DateTimeRef