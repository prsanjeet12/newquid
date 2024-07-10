import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import axios from 'axios';
import {QuidProfile} from '../types/types'

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<QuidProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get<QuidProfile>('http://localhost:3050/api/quid');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const styles = {
    container: {
      width: '100%',
      height: '100%',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      padding: { xs: '10px', md: '20px' },
      position: 'relative',
    },
    box: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: { xs: 'center', md: 'flex-start' },
      paddingLeft: '8px',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: { xs: 'center', md: 'flex-start' },
      textAlign: { xs: 'center', md: 'left' },
      marginLeft: { xs: '0', md: '20px' },
      marginTop: { xs: '10px', md: '0' },
    },
    text: {
      fontSize: { xs: '14px', md: '16px' },
      marginBottom: '4px',
    },
  };

  return (
    <Box className="border-gray-200 border-2" sx={styles.container}>
      <Box className="border-2 border-gray-200" sx={{ ...styles.box, width: { xs: '100%', md: '154px' }, height: '111px' }}>
        <Image src="/Logo Icon.png" width={48} height={48} alt="Logo" />
        <Typography className="ml-1 text-4xl font-medium text-baseColor" sx={{ display: { xs: 'none', md: 'block' } }}>QuID</Typography>
      </Box>
      <Box sx={styles.textContainer}>
        {profile ? (
          <>
            <Typography variant="body1" sx={{ ...styles.text, fontSize: { xs: '20px', md: '24px' }, fontWeight: 'medium', color: '#00A991' }}>{profile.companyName}</Typography>
            <Typography variant="body2" sx={styles.text}><span className="text-gray-400">QuID ID:</span> {profile.quidId}</Typography>
            <Typography variant="body2" sx={styles.text}><span className="text-gray-400">Registered Phone no.:</span> {profile.registeredPhone}</Typography>
            <Typography variant="body2" sx={styles.text}><span className="text-gray-400">Email id:</span> {profile.email}</Typography>
          </>
        ) : (
          <Typography variant="body1" sx={{ ...styles.text, fontSize: { xs: '20px', md: '24px' }, fontWeight: 'medium', color: '#00A991' }}>Loading...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
