export type RepairType = {
  customer: { name: string; number: string; email: string };
  device: {
    type: string;
    brand: string;
    model: string;
    imeiOrSerialNumber: string;
  };
  problemDescription: {
    issueCategory: string;
    details: string;
  };
  additionalInfo: {
    images: string[];
  };
  status: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type RepairFormType = {
  id?: string;
  customer: { name: string; number: string; email: string };
  device: {
    type: string;
    brand: string;
    model: string;
    imeiOrSerialNumber: string;
  };
  problemDescription: {
    issueCategory: string;
    details: string;
  };
  status: string;
};
