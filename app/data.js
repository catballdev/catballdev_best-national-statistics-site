// National Statistics Data for the Republic of Meridia
// All figures are illustrative sample data for the fictional Republic of Meridia

// This file provides data for the statistics portal

export const POPULATION = 12_480_000;
export const GDP = 486_000_000_000;
export const GDP_GROWTH = 3.1;
export const UNEMPLOYMENT = 4.2;
export const INFLATION = 2.4;
export const LIFE_EXPECTANCY = 81.6;
export const POPULATION_GROWTH_RATE = 0.8;

export const REGIONS = [
  { id: 'northgate', name: 'Northgate', population: 2_100_000 },
  { id: 'capital', name: 'Capital District', population: 3_200_000 },
  { id: 'coastland', name: 'Coastland', population: 1_800_000 },
  { id: 'highlands', name: 'Highlands', population: 1_200_000 },
  { id: 'riverplain', name: 'Riverplain', population: 1_500_000 },
  { id: 'southmark', name: 'Southmark', population: 2_200_000 },
];

export const INDICATORS = [
  { id: 'p1', topic: 'population', label: 'Total Population', value: '12.48M', unit: 'people', year: 2026, change: '+1.2%', topicOrder: 1 },
  { id: 'p2', topic: 'population', label: 'Population Growth', value: '+0.8%', unit: '%', year: 2026, change: '+1.2%', topicOrder: 1 },
  { id: 'p3', topic: 'population', label: 'Urban Population', value: '7.8M', unit: 'people', year: 2026, change: '+2.1%', topicOrder: 1 },
  { id: 'p4', topic: 'population', label: 'Rural Population', value: '4.68M', unit: 'people', year: 2026, change: '-0.5%', topicOrder: 1 },
  { id: 'e1', topic: 'economy', label: 'GDP', value: '$486B', unit: 'USD', year: 2026, change: '+3.1%', topicOrder: 2 },
  { id: 'e2', topic: 'economy', label: 'GDP Growth', value: '+3.1%', unit: '%', year: 2026, change: '+3.1%', topicOrder: 2 },
  { id: 'e3', topic: 'economy', label: 'Per Capita GDP', value: '$38,975', unit: 'USD', year: 2026, change: '+2.8%', topicOrder: 2 },
  { id: 'e4', topic: 'economy', label: 'Inflation Rate', value: '+2.4%', unit: '%', year: 2026, change: '-0.1%', topicOrder: 2 },
  { id: 'h1', topic: 'health', label: 'Life Expectancy', value: '81.6', unit: 'years', year: 2026, change: '+0.3%', topicOrder: 3 },
  { id: 'h2', topic: 'health', label: 'Infant Mortality', value: '8.2', unit: 'per 1K', year: 2026, change: '-8.5%', topicOrder: 3 },
  { id: 'h3', topic: 'health', label: 'Health Expenditure', value: '$1,240', unit: 'per capita', year: 2026, change: '+5.2%', topicOrder: 3 },
  { id: 'h4', topic: 'health', label: 'Doctor Density', value: '3.4', unit: 'per 1K', year: 2026, change: '+6.1%', topicOrder: 3 },
  { id: 'd1', topic: 'education', label: 'Literacy Rate', value: '98.5', unit: '%', year: 2026, change: '+0.2%', topicOrder: 4 },
  { id: 'd2', topic: 'education', label: 'School Enrollment', value: '96.2', unit: '%', year: 2026, change: '+1.1%', topicOrder: 4 },
  { id: 'd3', topic: 'education', label: 'Graduation Rate', value: '92.1', unit: '%', year: 2026, change: '+3.4%', topicOrder: 4 },
  { id: 'd4', topic: 'education', label: 'Student-Teacher Ratio', value: '15:1', unit: '', year: 2026, change: '-5.2%', topicOrder: 4 },
  { id: 'v1', topic: 'environment', label: 'CO₂ Emissions', value: '4.2', unit: 'Mt', year: 2026, change: '-3.8%', topicOrder: 5 },
  { id: 'v2', topic: 'environment', label: 'Renewable Energy', value: '67%', unit: '%', year: 2026, change: '+4.5%', topicOrder: 5 },
  { id: 'v3', topic: 'environment', label: 'Air Quality Index', value: '42', unit: 'AQI', year: 2026, change: '-2.1%', topicOrder: 5 },
  { id: 'v4', topic: 'environment', label: 'Forest Coverage', value: '38%', unit: '%', year: 2026, change: '+1.7%', topicOrder: 5 },
  { id: 'l1', topic: 'labour', label: 'Unemployment Rate', value: '4.2%', unit: '%', year: 2026, change: '+0.1%', topicOrder: 6 },
  { id: 'l2', topic: 'labour', label: 'Youth Unemployment', value: '15.6%', unit: '%', year: 2026, change: '+2.3%', topicOrder: 6 },
  { id: 'l3', topic: 'labour', label: 'Employment Rate', value: '95.8%', unit: '%', year: 2026, change: '-0.1%', topicOrder: 6 },
  { id: 'l4', topic: 'labour', label: 'Female Participation', value: '62.3%', unit: '%', year: 2026, change: '+1.5%', topicOrder: 6 },
];

export const GDP_TIME_SERIES = [
  { year: 2015, gdp: 285_000_000_000 },
  { year: 2016, gdp: 305_000_000_000 },
  { year: 2017, gdp: 328_000_000_000 },
  { year: 2018, gdp: 352_000_000_000 },
  { year: 2019, gdp: 378_000_000_000 },
  { year: 2020, gdp: 395_000_000_000 },
  { year: 2021, gdp: 420_000_000_000 },
  { year: 2022, gdp: 458_000_000_000 },
  { year: 2023, gdp: 475_000_000_000 },
  { year: 2024, gdp: 482_000_000_000 },
  { year: 2025, gdp: 485_000_000_000 },
  { year: 2026, gdp: 486_000_000_000 },
];

export const POPULATION_PYRAMID_DATA = {
  male: {
    ageGroups: [
      { label: '85+', value: 380000 }, { label: '80-84', value: 420000 },
      { label: '75-79', value: 480000 }, { label: '70-74', value: 520000 },
      { label: '65-69', value: 560000 }, { label: '60-64', value: 600000 },
      { label: '55-59', value: 620000 }, { label: '50-54', value: 600000 },
      { label: '45-49', value: 580000 }, { label: '40-44', value: 560000 },
      { label: '35-39', value: 540000 }, { label: '30-34', value: 520000 },
      { label: '25-29', value: 500000 }, { label: '20-24', value: 480000 },
      { label: '15-19', value: 460000 }, { label: '10-14', value: 440000 },
      { label: '5-9', value: 420000 }, { label: '0-4', value: 400000 },
    ],
    total: 9_880_000,
  },
  female: {
    ageGroups: [
      { label: '85+', value: 420000 }, { label: '80-84', value: 470000 },
      { label: '75-79', value: 540000 }, { label: '70-74', value: 590000 },
      { label: '65-69', value: 640000 }, { label: '60-64', value: 680000 },
      { label: '55-59', value: 700000 }, { label: '50-54', value: 680000 },
      { label: '45-49', value: 660000 }, { label: '40-44', value: 640000 },
      { label: '35-39', value: 620000 }, { label: '30-34', value: 600000 },
      { label: '25-29', value: 580000 }, { label: '20-24', value: 560000 },
      { label: '15-19', value: 540000 }, { label: '10-14', value: 520000 },
      { label: '5-9', value: 500000 }, { label: '0-4', value: 480000 },
    ],
    total: 10_600_000,
  },
};

export const REGION_INDICATORS = {
  northgate: [
    { label: 'GDP per capita', value: '$45,200', change: '+3.8%' },
    { label: 'Population', value: '2.1M', change: '+1.5%' },
    { label: 'Unemployment', value: '5.1%', change: '+0.8%' },
    { label: 'Life expectancy', value: '78.2', change: '+0.1 years' },
  ],
  capital: [
    { label: 'GDP per capita', value: '$67,800', change: '+4.2%' },
    { label: 'Population', value: '3.2M', change: '+2.1%' },
    { label: 'Unemployment', value: '3.8%', change: '-0.3%' },
    { label: 'Life expectancy', value: '84.5', change: '+0.4 years' },
  ],
  coastland: [
    { label: 'GDP per capita', value: '$32,100', change: '+2.9%' },
    { label: 'Population', value: '1.8M', change: '+0.7%' },
    { label: 'Unemployment', value: '6.3%', change: '+1.2%' },
    { label: 'Life expectancy', value: '79.8', change: '+0.2 years' },
  ],
  highlands: [
    { label: 'GDP per capita', value: '$28,500', change: '+2.1%' },
    { label: 'Population', value: '1.2M', change: '-0.4%' },
    { label: 'Unemployment', value: '7.8%', change: '+1.5%' },
    { label: 'Life expectancy', value: '76.1', change: '-0.2 years' },
  ],
  riverplain: [
    { label: 'GDP per capita', value: '$22,300', change: '+1.9%' },
    { label: 'Population', value: '1.5M', change: '+0.9%' },
    { label: 'Unemployment', value: '4.9%', change: '+0.5%' },
    { label: 'Life expectancy', value: '79.4', change: '+0.3 years' },
  ],
  southmark: [
    { label: 'GDP per capita', value: '$35,600', change: '+3.4%' },
    { label: 'Population', value: '2.2M', change: '+2.4%' },
    { label: 'Unemployment', value: '4.5%', change: '+0.2%' },
    { label: 'Life expectancy', value: '80.1', change: '+0.2 years' },
  ],
};