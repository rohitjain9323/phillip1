export const MOCK_USER = {
  name: "Rohit Jain",
  id: "ankita.sahu",
  balance: 0,
  invested: 180558,
  current: 218705,
  todaysGain: -646,
  todaysGainPercent: -0.3,
  totalGain: 38147,
  totalGainPercent: 21.1,
  gainers: 6,
  gainersValue: 994,
  losers: 9,
  losersValue: 1640
};

export const MOCK_HOLDINGS = [
  {
    symbol: "BEL",
    name: "BHARAT ELECTRONICS LIMITED",
    qty: 34,
    avgPrice: 323.94,
    ltp: 413.65,
    invested: 11014,
    current: 14064,
    gain: 3050,
    gainPercent: 27.7,
    isPositive: true
  },
  {
    symbol: "BHEL",
    name: "BHARAT HEAVY ELECTRICALS",
    qty: 201,
    avgPrice: 197.82,
    ltp: 265.55,
    invested: 39762,
    current: 53376,
    gain: 13614,
    gainPercent: 34.2,
    isPositive: true
  },
  {
    symbol: "EXIDEIND",
    name: "EXIDE INDUSTRIES LIMITED",
    qty: 102,
    avgPrice: 308.75,
    ltp: 346.00,
    invested: 31492, 
    current: 35292,
    gain: 3800,
    gainPercent: 12.1,
    isPositive: true
  },
  {
    symbol: "MAHABANK",
    name: "BANK OF MAHARASHTRA",
    qty: 211,
    avgPrice: 50.00, // Implied
    ltp: 65.05,
    invested: 10550, // Implied
    current: 13726,
    gain: 3176, // Implied
    gainPercent: 30.1, // Implied
    isPositive: true
  }
];
