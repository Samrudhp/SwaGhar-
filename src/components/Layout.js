import { Container } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    );
};

export default Layout