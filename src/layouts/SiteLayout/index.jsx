/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui";
import Header from "@components/Header";
import Footer from "@components/Footer";

const SiteLayout = props => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root"
      }}
    >
      <Box
        id="top"
        sx={{
          position: "fixed",
          width: "100%",
          boxShadow: "lg",
          variant: "layout.header"
        }}
      >
        <Header />
      </Box>
      <Box
        id="center"
        sx={{ width: "100%", flex: "1 1 auto", pt: 24, variant: "layout.main" }}
      >
        <Container>{props.children}</Container>
      </Box>
      <Box id="bottom" sx={{ width: "100%", variant: "layout.footer" }}>
        <Footer />
      </Box>
    </Flex>
  );
};

export default SiteLayout;
