export interface VisitorFormData {
  name: string;
  address: string;
  contactNumber: string;
  vehicleNumber: string;
  purposeOfVisit: string;
  typeOfVisit: string;
}

export interface AdditionalDetailsFormData {
  whomToMeet: string;
  department: string;
  documentType: string;
  documentUri: string;
  visitorPhotoUri: string;
  sendNotification: boolean;
}

export interface DropdownOption {
  label: string;
  value: string;
}

export type RootStackParamList = {
  VisitorRegistration: undefined;
  VisitorAdditionalDetails: {
    formData: VisitorFormData;
  };
  VisitorSuccess: {
    formData: VisitorFormData & AdditionalDetailsFormData;
  };
}; 