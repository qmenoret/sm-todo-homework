import { Link, Box } from "theme-ui"
import NextLink from "next/link"

const Header = () => (
  <Box
    as="header"
    sx={{
        width: "100vw",
        display: 'flex',
        alignItems: 'center',
        variant: 'styles.header',
        borderBottom: "1px solid #111"
    }}>
    <NextLink passHref href="/">
      <Link
        sx={{
          color: "#111",
          textDecoration: "none",
          variant: 'styles.navlink',
          p: 2,
        }}
      >
        Slicemachine TODO
      </Link>
    </NextLink>
    <Box sx={{ mx: 'auto' }} />
    <NextLink href="https://github.com" passHref>
      <Link
        sx={{
          color: "#111",
          textDecoration: "none",
          variant: 'styles.navlink',
          p: 2,
        }}
      >
        GH
      </Link>
    </NextLink>
</Box>
)

export default Header