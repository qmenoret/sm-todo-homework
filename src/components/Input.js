import { forwardRef } from "react"
import { Input } from "theme-ui"

const Inp = forwardRef((props, ref) => {
  return (
    <Input {...props} ref={ref} />
  )
})

Inp.displayName = "Input"

export default Inp
