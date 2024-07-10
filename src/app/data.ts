;


  interface BottomLayoutDataItem {
    title: string;
    values: { label: string, value: string }[];
    layoutType: 'single-column' | 'two-column';
  }
  
  export const bottomLayoutData = [
    {
      title: "Brands",
      values: [
        { label: "Icon1", value: "/image 33.png" },
        { label: "Icon2", value: "/image 35.png" },
        { label: "Icon3", value: "/image 36.png" }
      ],
      layoutType: 'single-column'
    },
    {
      title: "Onboarding Details",
      values: [
        { label: "No. of ONBOARDING", value: "50" },
        { label: "ACTIVATED", value: "50" },
        { label: "TRANSACTING", value: "50" }
      ],
      layoutType: 'single-column'
    },
    {
      title: "Transaction Details",
      values: [
        { label: "No. of transactions", value: "50" },
        { label: "P.O.S.", value: "₹5,00,000" },
        { label: "TOTAL DISBURSEMENTS", value: "₹5,00,000" },
        { label: "COLLECTIONS", value: "55" }
      ],

    
      layoutType: 'single-column'
    },
    {
      title: "PROGRAM SIZE",
      values: [
        { label: 'Credit Limit', value: '₹1,40,000 / ₹2,00,000' },
        { label: 'Subvention by anchor', value: '0' },
        { label: 'Platform fees', value: '0' },
        { label: 'Interest Rate for Retailers', value: '22-24' },
        { label: 'Penal Interest', value: '0' },
        { label: 'Processing fee', value: '0' },
        { label: 'Credit Tenure', value: '60' },
        { label: 'Subverted days', value: '15' },
        { label: 'Interest bearing days', value: '45' },
      ],
      layoutType: 'three-column'
    }

  ];


 

