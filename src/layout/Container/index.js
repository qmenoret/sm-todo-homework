import { Container } from "theme-ui"

const Cont = ({ children }) => {
  return (
    <Container sx={{ maxWidth: "600px", p: 3, py: 5 }}>
      { children }
    </Container>
  )
}

export default Cont