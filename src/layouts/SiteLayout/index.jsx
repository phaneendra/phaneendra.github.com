/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import Header from "@components/Header";
import Footer from "@components/Footer";

const SiteLayout = props => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root"
      }}
    >
      <header
        sx={{
          position: "fixed",
          width: "100%",
          boxShadow: "lg",
          variant: "layout.header"
        }}
      >
        <Header />
      </header>
      <main
        sx={{ width: "100%", flex: "1 1 auto", pt: 24, variant: "layout.main" }}
      >
        <Container>{props.children}</Container>
      </main>
      <footer sx={{ width: "100%", variant: "layout.footer" }}>
        <Footer />
      </footer>
    </div>
  );
};

export default SiteLayout;
