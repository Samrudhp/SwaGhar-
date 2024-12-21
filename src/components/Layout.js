import { Container } from '@mui/material';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <Container>
                {children}
            </Container>
        </>
    );
};

export default Layout