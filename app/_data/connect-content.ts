export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  directionsUrl: string;
}

export const globalOffices: OfficeLocation[] = [
  {
    id: "dus",
    city: "Düsseldorf",
    country: "Germany",
    directionsUrl: "#"
  },
  {
    id: "cbe",
    city: "Coimbatore",
    country: "India",
    directionsUrl: "#"
  }
];

export const hqInfo = {
  address: "123 Global Strategy Way, Suite 400, Financial District, General Republic, 41 (234) 567-8910",
  linkedin: "Connect with us on LinkedIn",
  careers: "Careers at HARTS",
  offices: "Our offices span major financial centers worldwide"
};