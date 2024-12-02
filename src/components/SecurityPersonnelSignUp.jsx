import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export default function SecurityPersonnelSignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password || !formData.category) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await axios.post('/api/security/signup', formData);
      setLoading(false);
      if (res.data) {
        navigate('/security-sign-in');
      }
    } catch (error) {
      setErrorMessage(error.response.data.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Security
            </span>
            Personnel
          </Link>
          <p className='text-sm mt-5'>
            Sign up with your email and password
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Category' />
              <TextInput
                type='text'
                placeholder='Security Category'
                id='category'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/security-sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
// import { securitySignUp } from "../util/api";


// export default function SecurityPersonnelSignUp() {
//   const [formData, setFormData] = useState({});
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.username || !formData.email || !formData.password || !formData.category) {
//       return setErrorMessage('Please fill out all fields.');
//     }
//     try {
//       setLoading(true);
//       setErrorMessage(null);
//       const res = await securitySignUp(formData);
//       setLoading(false);
//       if (res.data) {
//         navigate('/security-sign-in');
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'Something went wrong');
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen mt-20">
//       <div className="container mx-auto max-w-md p-4">
//         <div className="mb-8 text-center">
//           <Link to="/" className="text-4xl font-bold">
//             <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               Security Personnel
//             </span>
//           </Link>
//           <p className="mt-2 text-muted-foreground">Sign up with your email and password</p>
//         </div>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <Label htmlFor="username">Username</Label>
//             <TextInput
//               type="text"
//               id="username"
//               placeholder="Username"
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <TextInput
//               type="email"
//               id="email"
//               placeholder="name@company.com"
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label htmlFor="password">Password</Label>
//             <TextInput
//               type="password"
//               id="password"
//               placeholder="Password"
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label htmlFor="category">Category</Label>
//             <TextInput
//               type="text"
//               id="category"
//               placeholder="Security Category"
//               onChange={handleChange}
//             />
//           </div>
//           <Button
//             type="submit"
//             className="w-full"
//             disabled={loading}
//           >
//             {loading ? <Spinner /> : 'Sign Up'}
//           </Button>
//         </form>
//         <div className="mt-4 text-center text-sm">
//           <span>Have an account? </span>
//           <Link to="/security-sign-in" className="text-primary hover:underline">
//             Sign In
//           </Link>
//         </div>
//         {errorMessage && (
//           <Alert variant="destructive" className="mt-4">{errorMessage}</Alert>
//         )}
//       </div>
//     </div>
//   );
// }

