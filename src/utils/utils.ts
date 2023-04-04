export interface IState {
    id: number;
    name: string;
    abbreviation: string;
  }
  
  export const dollarValues: { [dollarSign: string]: number } = {
    $: 1,
    $$: 2,
    $$$: 3,
    $$$$: 4,
    $$$$$: 5
  };
  export const usStates: IState[] = [
    { id: 0, name: 'Alabama', abbreviation: 'AL' },
    { id: 1, name: 'Alaska', abbreviation: 'AK' },
    { id: 2, name: 'Arizona', abbreviation: 'AZ' },
    { id: 3, name: 'Arkansas', abbreviation: 'AR' },
    { id: 4, name: 'California', abbreviation: 'CA' },
    { id: 5, name: 'Colorado', abbreviation: 'CO' },
    { id: 6, name: 'Connecticut', abbreviation: 'CT' },
    { id: 7, name: 'Delaware', abbreviation: 'DE' },
    { id: 8, name: 'Florida', abbreviation: 'FL' },
    { id: 9, name: 'Georgia', abbreviation: 'GA' },
    { id: 10, name: 'Hawaii', abbreviation: 'HI' },
    { id: 11, name: 'Idaho', abbreviation: 'ID' },
    { id: 12, name: 'Illinois', abbreviation: 'IL' },
    { id: 13, name: 'Indiana', abbreviation: 'IN' },
    { id: 14, name: 'Iowa', abbreviation: 'IA' },
    { id: 15, name: 'Kansas', abbreviation: 'KS' },
    { id: 16, name: 'Kentucky', abbreviation: 'KY' },
    { id: 17, name: 'Louisiana', abbreviation: 'LA' },
    { id: 18, name: 'Maine', abbreviation: 'ME' },
    { id: 19, name: 'Maryland', abbreviation: 'MD' },
    { id: 20, name: 'Massachusetts', abbreviation: 'MA' },
    { id: 21, name: 'Michigan', abbreviation: 'MI' },
    { id: 22, name: 'Minnesota', abbreviation: 'MN' },
    { id: 23, name: 'Mississippi', abbreviation: 'MS' },
    { id: 24, name: 'Missouri', abbreviation: 'MO' },
    { id: 25, name: 'Montana', abbreviation: 'MT' },
    { id: 26, name: 'Nebraska', abbreviation: 'NE' },
    { id: 27, name: 'Nevada', abbreviation: 'NV' },
    { id: 28, name: 'New Hampshire', abbreviation: 'NH' },
    { id: 29, name: 'New Jersey', abbreviation: 'NJ' },
    { id: 30, name: 'New Mexico', abbreviation: 'NM' },
    { id: 31, name: 'New York', abbreviation: 'NY' },
    { id: 32, name: 'North Carolina', abbreviation: 'NC' },
    { id: 33, name: 'North Dakota', abbreviation: 'ND' },
    { id: 34, name: 'Ohio', abbreviation: 'OH' },
    { id: 35, name: 'Oklahoma', abbreviation: 'OK' },
    { id: 36, name: 'Oregon', abbreviation: 'OR' },
    { id: 37, name: 'Pennsylvania', abbreviation: 'PA' },
    { id: 38, name: 'Rhode Island', abbreviation: 'RI' },
    { id: 39, name: 'South Carolina', abbreviation: 'SC' },
    { id: 40, name: 'South Dakota', abbreviation: 'SD' },
    { id: 41, name: 'Tennessee', abbreviation: 'TN' },
    { id: 42, name: 'Texas', abbreviation: 'TX' },
    { id: 43, name: 'Utah', abbreviation: 'UT' },
    { id: 44, name: 'Vermont', abbreviation: 'VT' },
    { id: 45, name: 'Virginia', abbreviation: 'VA' },
    { id: 46, name: 'Washington', abbreviation: 'WA' },
    { id: 47, name: 'West Virginia', abbreviation: 'WV' },
    { id: 48, name: 'Wisconsin', abbreviation: 'WI' },
    { id: 49, name: 'Wyoming', abbreviation: 'WY' },
    ];
  

    
    export interface IFormData  {
      state: string;
      address: string;
      city: string;
      radius: number;
      priceRange: number[];
    };
    export interface IYelpBusiness {
      id: string;
      name: string;
      rating: number;
      review_count: number;
      price?: string;
      phone?: string;
      display_phone?: string;
      photos?: string[];
      location: {
        address1: string;
        address2?: string;
        address3?: string;
        city: string;
        zip_code: string;
        country: string;
        state: string;
        display_address: string[];
        cross_streets?: string;
      };
      coordinates: {
        latitude: number;
        longitude: number;
      };
      distance: number;
      categories: {
        alias: string;
        title: string;
      }[];
      url: string;
      is_closed: boolean;
    }
    
    