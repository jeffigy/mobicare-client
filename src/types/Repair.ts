export type RepairType = {
  customer: { name: string; number: string; email: string };
  device: {
    type: "smartphone" | "tablet" | "laptop" | "other";
    brand: string;
    model: string;
    imeiOrSerialNumber: string;
  };
  problemDescription: {
    issueCategory:
      | "screen replacement"
      | "battery replacement"
      | "water damage"
      | "software issues"
      | "other";
    details: string;
  };
  additionalInfo: {
    images: string[];
  };
  status: "pending" | "in progress" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
  id: string;
};
