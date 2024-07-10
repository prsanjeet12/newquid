"use client"
import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../Api/useAuthStore';

const Login: React.FC = () => {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    if (await login()) {
      router.push('/home');
    } else {
      console.error('Login failed');
    }
  };

  const renderImage = (src: string, alt: string, width: number, height: number) => (
    <Image src={src} alt={alt} width={width} height={height} objectFit="contain" />
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      {/* Top left image */}
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        {renderImage('/Ellipse 116.png', 'Top Left Image', 400, 500)}
      </div>

      {/* Logo and text */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ position: 'relative', width: '83px', height: '84px', }}>
          {renderImage('/Logo Icon.png', 'Centered Icon', 83.44, 74)}
        </div>
        <Typography variant="h1" sx={{ fontWeight: 400, fontSize: '64px', color: '#00A991',marginLeft:'10px'  }}>
          QuID
        </Typography>
      </div>

      {/* Welcome message */}
      <Typography variant="h2" sx={{ fontWeight: 500, fontSize: '48px', color: '#133039' }}>
        Welcome
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '18px', color: '#95A2A6', marginBottom: '2rem' }}>
        Hello there, Log In...
      </Typography>

      {/* Login box */}
      <Box sx={{ width: '578px', height:'184px', maxWidth: '100%', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', padding: '24px', marginTop: '2rem' }}>
        <Typography variant="h3" sx={{ color: '#133039', fontWeight: 600, fontSize: '20px', marginBottom: '40px' }}>
          Login to your account
        </Typography>
        <Button
          variant="outlined"
          onClick={handleLogin}
          sx={{   display: 'flex', alignItems: 'center',  width: '100%', height: '72px', borderRadius: '16px', textTransform: 'none', color: '#133039', border: '1px solid #D1D5DB' ,
           
          }}
        >
          <Box sx={{ position: 'relative', width: '46px', height: '40px', marginRight: '12px' }}>
            {renderImage('/Google__G__logo.svg 1.png', 'Google Icon', 46, 40)}
          </Box>
          <Typography variant="body1" sx={{ fontSize: '20px', fontWeight:500,color: '#133039',  }}>
            Login with Google
          </Typography>
        </Button>
      </Box>

      {/* Right image */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
        <div style={{ marginRight: 0, height: '600px' }}>
          {renderImage('/Ellipse 117.png', 'Right Image', 300, 400)}
        </div>
      </div>
    </div>
  );
};

export default Login;