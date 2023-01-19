/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui"

const Footer = () => {
  const [colorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="layout.footer">
      Copyright &copy; {new Date().getFullYear()}. Some rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {/* {isDark ? (
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2-light_w30.png" alt="LekoArts Logo" />
        ) : (
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2_w30.png" alt="LekoArts Logo" />
        )} */}
        {` `}
        
        <div sx={{ mx: 1 }}>
            <Link
                aria-label="Link to the theme's GitHub repository"
                sx={{ ml: 2 }}
                href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emma"
            >
                Contact
            </Link>
        </div>
      </Flex>
    </Box>
  )
}

export default Footer
