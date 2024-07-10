// types.ts


//anchor data
export interface AnchorDetails {
  name: string;
  poc: string;
  createdDate: string;
  id: string;
  registeredNo: string;
  category: string;
}

export interface QuidPOC {
  salesPOC: string;
  portfolioManager: string;
}

export interface Address {
  businessAddress: string;
  cityState: string;
  pinCode: string;
}

export interface Brand {
  label: string;
  value: string;
}

export interface ProgramSize {
  label: string;
  value: string;
}

export interface InterestSchedule {
  no: number;
  days: number;
  interestPerDay: number;
  interestPerAnnum: number;
}

export interface BottomLayoutData {
  brands: Brand[];
  programSize: ProgramSize[];
  interestSchedule: InterestSchedule[];
}

export interface OnboardingDetails {
  noOfOnboarding: number;
  activated: number;
  transacting: number;
}

export interface TransactionDetails {
  noOfTransactions: number;
  pos: string;
  totalDisbursements: string;
  collections: number;
}

export interface AnchorData {
  id: string;
  anchorDetails: AnchorDetails;
  quidPOC: QuidPOC;
  address: Address;
  bottomLayoutData: BottomLayoutData;
  onboardingDetails: OnboardingDetails;
  transactionDetails: TransactionDetails;
}

















export interface QuidProfile {
  quidId: string;
  companyName: string;
  registeredPhone: string;
  email: string;
}






//      Accounts Types
export interface BusinessCell {
    businessName: string;
    details: string;
    userId: string;
  }
  
  export interface CreditLimitCell {
    lender: string;
    creditLimit: string;
    availableBalance: string;
  }
  
  export interface CreatedDate {
    date: string;
    time: string;
    updatedDate: string;
    updatedTime: string;
  }
  

  export type RowData = (number | string | BusinessCell | CreditLimitCell | CreatedDate)[];
  
  export interface Row {
    id: number;
    data: RowData;
  }
  