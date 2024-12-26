// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//     Container,
//     Paper,
//     Typography,
//     TextField,
//     Button,
//     Box,
//     MenuItem,
//     Alert
// } from '@mui/material';
// import { useAuth } from '../contexts/AuthContext';
// import axios from 'axios';

// const Register = () => {
//     const navigate = useNavigate();
//     const { login } = useAuth();
//     const [error, setError] = useState('');
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         confirmPassword: '',
//         userType: 'citizen',
//         name: '',
//         phone: ''
//     });

//     const handleChange = (e) => {
//         setFormData(prev => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         if (formData.password !== formData.confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         try {
//             const apiUrl = process.env.REACT_APP_BACKEND_URL || 
//             const response = await axios.post('http://localhost:5000/api/auth/register', {
//                 email: formData.email,
//                 password: formData.password,
//                 userType: formData.userType,
//                 personalDetails: {
//                     name: formData.name,
//                     phone: formData.phone
//                 }
//             });

//             login(response.data.token, response.data.userType);
//             if (formData.userType === 'government') {
//                 navigate('/dashboardGov')
//             } else {
//                 navigate('/dashboard')
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'Registration failed');
//         }
//     };

//     return (
//         //real one
//         // <Container maxWidth="sm">
//         //     <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
//         //         <Typography variant="h4" align="center" gutterBottom>
//         //             Register
//         //         </Typography>

//         //         {error && (
//         //             <Alert severity="error" sx={{ mb: 2 }}>
//         //                 {error}
//         //             </Alert>
//         //         )}

//         //         <form onSubmit={handleSubmit}>
//         //             <TextField
//         //                 fullWidth
//         //                 label="Email"
//         //                 name="email"
//         //                 type="email"
//         //                 value={formData.email}
//         //                 onChange={handleChange}
//         //                 margin="normal"
//         //                 required
//         //             />

//         //             <TextField
//         //                 fullWidth
//         //                 label="Full Name"
//         //                 name="name"
//         //                 value={formData.name}
//         //                 onChange={handleChange}
//         //                 margin="normal"
//         //                 required
//         //             />

//         //             <TextField
//         //                 fullWidth
//         //                 label="Phone Number"
//         //                 name="phone"
//         //                 value={formData.phone}
//         //                 onChange={handleChange}
//         //                 margin="normal"
//         //                 required
//         //             />

//         //             <TextField
//         //                 fullWidth
//         //                 select
//         //                 label="User Type"
//         //                 name="userType"
//         //                 value={formData.userType}
//         //                 onChange={handleChange}
//         //                 margin="normal"
//         //                 required
//         //             >
//         //                 <MenuItem value="citizen">Citizen</MenuItem>
//         //                 <MenuItem value="government">Government Official</MenuItem>
//         //                 <MenuItem value="ngo">NGO Worker</MenuItem>
//         //             </TextField>

//         //             <TextField
//         //                 fullWidth
//         //                 label="Password"
//         //                 name="password"
//         //                 type="password"
//         //                 value={formData.password}
//         //                 onChange={handleChange}
//         //                 margin="normal"
//         //                 required
//         //             />

//         //             <TextField
//         //                 fullWidth
//         //                 label="Confirm Password"
//         //                 name="confirmPassword"
//         //                 type="password"
//         //                 value={formData.confirmPassword}
//         //                 onChange={handleChange}
//         //                 margin="normal"
//         //                 required
//         //             />

//         //             <Box sx={{ mt: 3 }}>
//         //                 <Button
//         //                     type="submit"
//         //                     variant="contained"
//         //                     fullWidth
//         //                     size="large"
//         //                 >
//         //                     Register
//         //                 </Button>
//         //             </Box>
//         //         </form>
//         //     </Paper>
//         // </Container>

//         //test one
//         <Container maxWidth="sm" className="bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl">
//             <Paper elevation={6} sx={{ p: 6, borderRadius: "12px", backgroundColor: "gray-300", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}>

//                 {/* Title */}
//                 <Typography variant="h4" align="center" gutterBottom className="text-gray-700 dark:text-gray-700 font-extrabold text-3xl">
//                     Register
//                 </Typography>

//                 {/* Error Message */}
//                 {error && (
//                     <Alert severity="error" sx={{ mb: 2 }}>
//                         {error}
//                     </Alert>
//                 )}

//                 {/* Registration Form */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     {/* Email Field */}
//                     <TextField
//                         fullWidth
//                         label="Email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         margin="normal"
//                         required
//                         className="text-lg"
//                         sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
//                     />

//                     {/* Full Name Field */}
//                     <TextField
//                         fullWidth
//                         label="Full Name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         margin="normal"
//                         required
//                         className="text-lg"
//                         sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
//                     />

//                     {/* Phone Number Field */}
//                     <TextField
//                         fullWidth
//                         label="Phone Number"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         margin="normal"
//                         required
//                         className="text-lg"
//                         sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
//                     />

//                     {/* User Type Field */}
//                     <TextField
//                         fullWidth
//                         select
//                         label="User Type"
//                         name="userType"
//                         value={formData.userType}
//                         onChange={handleChange}
//                         margin="normal"
//                         required
//                         className="text-lg"
//                         sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
//                     >
//                         <MenuItem value="citizen">Citizen</MenuItem>
//                         <MenuItem value="government">Government Official</MenuItem>
//                         <MenuItem value="ngo">NGO Worker</MenuItem>
//                     </TextField>

//                     {/* Password Field */}
//                     <TextField
//                         fullWidth
//                         label="Password"
//                         name="password"
//                         type="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         margin="normal"
//                         required
//                         className="text-lg"
//                         sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
//                     />

//                     {/* Confirm Password Field */}
//                     <TextField
//                         fullWidth
//                         label="Confirm Password"
//                         name="confirmPassword"
//                         type="password"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         margin="normal"
//                         required
//                         className="text-lg"
//                         sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
//                     />

//                     {/* Submit Button */}
//                     <Box sx={{ mt: 3 }}>
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             fullWidth
//                             size="large"
//                             sx={{
//                                 backgroundColor: '#2563eb',
//                                 '&:hover': { backgroundColor: '#1d4ed8' },
//                                 fontWeight: 'bold',
//                                 fontSize: '1.125rem',
//                                 padding: '12px',
//                                 borderRadius: '10px',
//                                 transition: 'all 0.3s ease',
//                             }}
//                         >
//                             Register
//                         </Button>
//                     </Box>
//                 </form>
//             </Paper>
//         </Container>
//     );
// };

// export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    MenuItem,
    Alert
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'citizen',
        name: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const apiUrl = process.env.REACT_APP_BACKEND_URL; // Use the deployed backend URL
            const response = await axios.post(`${apiUrl}/api/auth/register`, {
                email: formData.email,
                password: formData.password,
                userType: formData.userType,
                personalDetails: {
                    name: formData.name,
                    phone: formData.phone,
                },
            });

            login(response.data.token, response.data.userType);
            if (formData.userType === 'government') {
                navigate('/dashboardGov');
            } else {
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <Container maxWidth="sm" className="bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl">
            <Paper
                elevation={6}
                sx={{
                    p: 6,
                    borderRadius: "12px",
                    backgroundColor: "gray-300",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    className="text-gray-700 dark:text-gray-700 font-extrabold text-3xl"
                >
                    Register
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        required
                        className="text-lg"
                        sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
                    />
                    <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                        className="text-lg"
                        sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
                    />
                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        margin="normal"
                        required
                        className="text-lg"
                        sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
                    />
                    <TextField
                        fullWidth
                        select
                        label="User Type"
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        margin="normal"
                        required
                        className="text-lg"
                        sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
                    >
                        <MenuItem value="citizen">Citizen</MenuItem>
                        <MenuItem value="government">Government Official</MenuItem>
                        <MenuItem value="ngo">NGO Worker</MenuItem>
                    </TextField>
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        margin="normal"
                        required
                        className="text-lg"
                        sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
                    />
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        margin="normal"
                        required
                        className="text-lg"
                        sx={{ input: { fontSize: '1.2rem' }, label: { fontSize: '1rem' } }}
                    />
                    <Box sx={{ mt: 3 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{
                                backgroundColor: '#2563eb',
                                '&:hover': { backgroundColor: '#1d4ed8' },
                                fontWeight: 'bold',
                                fontSize: '1.125rem',
                                padding: '12px',
                                borderRadius: '10px',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Register
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Register;
