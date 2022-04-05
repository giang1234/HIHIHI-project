import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterWrapper = styled(Box)(
  ({ theme }) => `
        border-radius: 0;
        margin: ${theme.spacing(3)} 0;
`
);

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="xl">
        <Box
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'center', md: 'left' }}
          justifyContent="space-between"
        >
          {/* <img src="/static/images/logo/logo.png" alt=""/> */}
          Phạm Hồng Giang - phamhonggiang2209@gmail.com - 0977006620
        </Box>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
