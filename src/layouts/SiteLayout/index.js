/** @jsx jsx */
import { jsx, Container } from 'theme-ui';

const SiteLayout = (props) => {
  return (
    <div sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <header sx={{width: '100%'}}>
        <Container>
          Header
        </Container>
      </header>
      <main sx={{ width: '100%', flex: '1 1 auto'}}>
        <Container>
          {props.children}
        </Container>
      </main>
      <footer sx={{ width: '100%'}}>
        <Container>Footer</Container>
      </footer>
    </div>
  )
};

export default SiteLayout;

