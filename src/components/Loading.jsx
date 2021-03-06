import React from "react"
import Typing from "react-typing-animation"

function Loading() {
  return (
    <div className="right-0 bottom-0 absolute left-0 top-0 flex items-center justify-center">
      <h1 className="text-white text-3xl font-mono">
        Loading
        <Typing loop={true} className="inline" speed={100}>
          <span>...</span>
          <Typing.Backspace count={3} />
        </Typing>
      </h1>
    </div>
  )
}

export default Loading
