// TopLayout.tsx
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Card from '../../../../Components/Card';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useAnchorStore } from '../../../Api/useAnchorStore';

// Define types for the data
export interface Detail {
  label: string;
  value: string;
}

export interface TransformedItem {
  title: string;
  details: Detail[];
  layoutType: 'single-column' | 'two-column' | 'three-column';
}

// Transform API data to the required format
const transformData = (data: any): TransformedItem[] => {
  return [
    {
      title: 'Anchor Details',
      details: [
        { label: 'ANCHOR NAME', value: data.anchorDetails.anchorName },
        { label: 'ANCHOR POC', value: data.anchorDetails.anchorPOC },
        { label: 'ANCHOR CREATED DATE', value: data.anchorDetails.anchorCreatedDate },
        { label: 'ANCHOR ID', value: data.anchorDetails.anchorID },
        { label: 'REGISTERED NO.', value: data.anchorDetails.registeredNo },
        { label: 'CATEGORY', value: data.anchorDetails.category }
      ],
      layoutType: 'two-column'
    },
    {
      title: 'QuID POC',
      details: [
        { label: 'QUID SALES POC', value: data.quidPOC.quidSalesPOC },
        { label: 'QUID PORTFOLIO MANAGER', value: data.quidPOC.quidPortfolioManager }
      ],
      layoutType: 'single-column'
    },
    {
      title: 'Address',
      details: [
        { label: 'BUSINESS ADDRESS', value: data.address.businessAddress },
        { label: 'CITY & STATE', value: data.address.cityState },
        { label: 'PIN CODE', value: data.address.pinCode }
      ],
      layoutType: 'single-column'
    }
  ];
};

const TopRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '2.3fr 0.9fr 1.3fr',
  gap: '16px',
});

const TopLayout: React.FC = () => {
  const { selectedAnchorId } = useAnchorStore();
  const [data, setData] = useState<TransformedItem[]>([]);

  useEffect(() => {
    if (selectedAnchorId) {
      axios.get(`http://localhost:3050/api/anchors/${selectedAnchorId}`)
        .then(response => {
          const transformedData = transformData(response.data);
          console.log(transformedData)
          setData(transformedData);
        })
        .catch(error => {
          console.error('Error fetching anchor data:', error);
        });
    }
  }, [selectedAnchorId]);

  return (
    <TopRow data-testid="top-row">
      {data.map((item, index) => (
        <Card key={index} title={item.title}>
          <Grid container spacing={1}>
            {item.details.map((detail, i) => (
              <Grid
                item
                xs={12}
                sm={
                  item.layoutType === 'three-column' ? 4 :
                  item.layoutType === 'two-column' ? 6 :
                  12
                }
                key={i}
              >
                <Typography
                  variant="body1"
                  className="mt-2 text-blackColor"
                  style={{ fontWeight: 500, fontSize: '13px' }}
                >
                  <span className="text-[#95A2A6]">{detail.label}:</span> {detail.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Card>
      ))}
    </TopRow>
  );
};

export default TopLayout;
