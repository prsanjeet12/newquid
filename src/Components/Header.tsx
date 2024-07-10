import React, { useState, useEffect, ChangeEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Dropdown from './DropDown';
import { MenuItem, RadioGroup, Box, FormControlLabel, Radio } from '@mui/material';
import ActionButtons from './ActionButton';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../app/config/firebaseConfig';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { useAnchorStore } from '../app/Api/useAnchorStore';

export interface SearchAnchor {
  anchorName: string;
  anchorId: string;
}

const GreenRadio = styled(Radio)({
  '&.Mui-checked': {
    color: '#00A991',
  },
});

const Header: React.FC = () => {
  const { setSelectedAnchorId } = useAnchorStore();
  const [anchorName, setAnchorName] = useState("Intelligent Retail");
  const [ANCHOR, setANCHOR] = useState<SearchAnchor[]>([]);
  const [userEmail, setUserEmail] = useState("");
  const [userPhoto, setUserPhoto] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email || "");
        setUserPhoto(user.photoURL || "");
      } else {
        setUserEmail("");
        setUserPhoto("");
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchAnchors = async (searchKey: string) => {
    console.log('Search key:', searchKey); 
    try {
      const response = await axios.get(`http://localhost:3050/api/anchors/Search/${searchKey}`);
      console.log('Fetched anchors data:', response.data); 
      setANCHOR(response.data);
    } catch (error) {
      console.error('Error fetching anchors:', error);
    }
  };

  const handleAnchorSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const anchorId = event.target.value;
    setSelectedAnchorId(anchorId);
    const selectedAnchor = ANCHOR.find(anchor => anchor.anchorId === anchorId);
    if (selectedAnchor) {
      setAnchorName(selectedAnchor.anchorName);
    }
  };

  const handleAdminSettingClick = () => {
    console.log('Admin Setting clicked');
  };

  const handleLogoutClick = () => {
    auth.signOut().then(() => {
      console.log('User signed out');
    }).catch((error) => {
      console.error('Sign out error', error);
    });
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        color: '#133039',
        boxShadow: 'none',
        borderBottom: '1px solid #D9DCDF',
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Typography sx={{ fontWeight: 600, fontSize: '24px' }}>
            <span style={{ color: '#95A2A6', fontWeight: 500 }}>Anchor:</span> {anchorName}
          </Typography>
          <Dropdown
            triggerElement={
              <Image src="/Polygon 5.png" alt="Dropdown Icon" width={17} height={10} style={{ marginLeft: '16px', cursor: 'pointer' }} />
            }
          >
            <Box width="300px" p={2}>
              <ActionButtons
                type="search"
                placeholder="Search"
                style={{ marginBottom: '10px' }}
                searchOnChange={(e: ChangeEvent<HTMLInputElement>) => fetchAnchors(e.target.value)}
              />
              {ANCHOR.length > 0 ? (
                <RadioGroup onChange={handleAnchorSelect}>
                  {ANCHOR.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item.anchorId}
                      control={<GreenRadio />}
                      label={item.anchorName}
                    />
                  ))}
                </RadioGroup>
              ) : (
                <Typography>No anchors found</Typography>
              )}
            </Box>
          </Dropdown>
        </Box>
        <Box display="flex" alignItems="center">
          <Image src="/Notification (1).png" alt="Notification Icon" width={24} height={24} style={{ marginLeft: '16px' }} />
          <Box display="flex" alignItems="center" ml={4}>
            {userPhoto ? (
              <Image
                src={userPhoto}
                alt="User"
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
              />
            ) : (
              <></>
            )}
            <Box ml={2}>
              <Typography sx={{ fontWeight: 500, fontSize: '16px' }} variant="body1">{userEmail}</Typography>
            </Box>
            <Dropdown
              triggerElement={
                <Image src="/Vector (2).png" alt="Dropdown Icon" width={12} height={6} style={{ marginLeft: '16px', cursor: 'pointer' }} />
              }
            >
              <Box>
                <MenuItem onClick={handleAdminSettingClick}>Admin Setting</MenuItem>
                <MenuItem >Logout</MenuItem>
              </Box>
            </Dropdown>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
