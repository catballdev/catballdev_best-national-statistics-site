// Statlas — National Statistics Portal of the Republic of Meridia
// All figures are illustrative sample data for the fictional Republic of Meridia

// All data inlined to avoid ES module import issues with the test server
const POPULATION = 12_480_000;
const GDP = 486_000_000_000;
const GDP_GROWTH = 3.1;
const UNEMPLOYMENT = 4.2;
const INFLATION = 2.4;
const LIFE_EXPECTANCY = 81.6;
const POPULATION_GROWTH_RATE = 0.8;

const REGIONS = [
  { id: 'northgate', name: 'Northgate', population: 2_100_000 },
  { id: 'capital', name: 'Capital District', population: 3_200_000 },
  { id: 'coastland', name: 'Coastland', population: 1_800_000 },
  { id: 'highlands', name: 'Highlands', population: 1_200_000 },
  { id: 'riverplain', name: 'Riverplain', population: 1_500_000 },
  { id: 'southmark', name: 'Southmark', population: 2_200_000 },
];

const INDICATORS = [
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

const GDP_TIME_SERIES = [
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

const POPULATION_PYRAMID_DATA = {
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

const REGION_INDICATORS = {
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

// DOM Elements
const kpiCardsContainer = document.getElementById('kpi-cards');
const gdpChartCanvas = document.getElementById('gdp-chart');
const populationPyramidCanvas = document.getElementById('population-pyramid');
const indicatorsTable = document.getElementById('indicators-table');
const topicFilterContainer = document.getElementById('topic-filter-chips');
const searchInput = document.getElementById('indicators-search');
const regionChartCanvas = document.getElementById('region-chart');
const regionIndicatorText = document.getElementById('region-indicator-text');

// Initialize app state
let currentRoute = '/';

// Render KPI cards
function renderKPIs() {
  const kpis = [
    { label: 'Population', value: new Intl.NumberFormat('en-US').format(POPULATION / 1_000_000) + 'M', delta: '+1.2%', deltaPositive: true },
    { label: 'GDP', value: new Intl.NumberFormat('en-US').format(GDP / 1_000_000_000) + 'B', delta: '+3.1%', deltaPositive: true },
    { label: 'GDP Growth', value: GDP_GROWTH + '%', delta: '+3.1%', deltaPositive: true },
    { label: 'Unemployment', value: UNEMPLOYMENT + '%', delta: '-0.2%', deltaPositive: false },
    { label: 'Inflation', value: INFLATION + '%', delta: '-0.1%', deltaPositive: false },
    { label: 'Life Expectancy', value: LIFE_EXPECTANCY + ' years', delta: '+0.3 years', deltaPositive: true },
  ];

  kpiCardsContainer.innerHTML = kpis.map((kpi, i) => `
    <div class="kpi-card ${kpi.deltaPositive ? 'positive' : 'negative'}" style="animation-delay: ${i * 0.1}s">
      <div class="kpi-label">${kpi.label}</div>
      <div class="kpi-value">${kpi.value}</div>
      <div class="kpi-delta">${kpi.delta}</div>
    </div>
  `).join('');
}

// Render GDP line chart
function renderGDPChart() {
  const ctx = gdpChartCanvas.getContext('2d');
  const data = GDP_TIME_SERIES;

  const maxGDP = Math.max(...data.map(d => d.gdp));
  const minGDP = Math.min(...data.map(d => d.gdp));
  const range = maxGDP - minGDP || 1;

  const chartWidth = gdpChartCanvas.width;
  const chartHeight = gdpChartCanvas.height;

  // Clear canvas
  ctx.clearRect(0, 0, chartWidth, chartHeight);

  // Draw axes
  ctx.strokeStyle = '#4a5568';
  ctx.lineWidth = 1;

  // X axis
  ctx.beginPath();
  ctx.moveTo(60, chartHeight - 40);
  ctx.lineTo(chartWidth - 40, chartHeight - 40);
  ctx.stroke();

  // Y axis
  ctx.beginPath();
  ctx.moveTo(60, 40);
  ctx.lineTo(60, chartHeight - 40);
  ctx.stroke();

  // Draw grid lines and labels
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 0.5;
  const yTicks = 5;
  for (let i = 0; i <= yTicks; i++) {
    const y = chartHeight - 40 - (i / yTicks) * (chartHeight - 80);
    ctx.beginPath();
    ctx.moveTo(60, y);
    ctx.lineTo(chartWidth - 40, y);
    ctx.stroke();

    const value = minGDP + (range / yTicks) * i;
    ctx.fillStyle = '#4a5568';
    ctx.font = '10px system-ui';
    ctx.fillText(new Intl.NumberFormat('en-US').format(value / 1_000_000_000) + 'B', 45, y + 4);
  }

  // Draw line and fill
  ctx.fillStyle = 'rgba(49, 130, 206, 0.3)';
  ctx.strokeStyle = '#3182CE';
  ctx.lineWidth = 2;
  
  ctx.beginPath();
  data.forEach((point, index) => {
    const x = 60 + (index / (data.length - 1)) * (chartWidth - 80);
    const y = chartHeight - 40 - ((point.gdp - minGDP) / range) * (chartHeight - 80);
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.lineTo(chartWidth - 40, chartHeight - 40);
  ctx.lineTo(60, chartHeight - 40);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Draw points
  ctx.fillStyle = '#FFFFFF';
  data.forEach((point, index) => {
    const x = 60 + (index / (data.length - 1)) * (chartWidth - 80);
    const y = chartHeight - 40 - ((point.gdp - minGDP) / range) * (chartHeight - 80);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Render population pyramid
function renderPopulationPyramid() {
  const ctx = populationPyramidCanvas.getContext('2d');
  const data = POPULATION_PYRAMID_DATA;

  const width = populationPyramidCanvas.width;
  const height = populationPyramidCanvas.height;
  const centerY = width / 2;
  const maxWidth = width / 2 - 60;

  // Clear
  ctx.clearRect(0, 0, width, height);

  // Draw center line
  ctx.strokeStyle = '#4a5568';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerY, 0);
  ctx.lineTo(centerY, height);
  ctx.stroke();

  // Draw male bars (left)
  ctx.fillStyle = '#3182CE';
  let maleStart = centerY;
  data.male.ageGroups.forEach((group, i) => {
    const barWidth = (group.value / data.male.total) * maxWidth;
    const y = 40 + (i / data.male.ageGroups.length) * (height - 80);
    const groupHeight = (height - 80) / data.male.ageGroups.length;

    ctx.fillRect(maleStart - barWidth, y, barWidth, groupHeight);
    
    ctx.fillStyle = '#4a5568';
    ctx.font = '10px system-ui';
    ctx.fillText(new Intl.NumberFormat('en-US').format(group.value), maleStart - barWidth - 40, y + groupHeight / 2 + 4);
    ctx.fillStyle = '#3182CE';
  });

  // Draw female bars (right)
  ctx.fillStyle = '#E53E3E';
  let femaleStart = centerY;
  data.female.ageGroups.forEach((group, i) => {
    const barWidth = (group.value / data.female.total) * maxWidth;
    const y = 40 + (i / data.female.ageGroups.length) * (height - 80);
    const groupHeight = (height - 80) / data.female.ageGroups.length;

    ctx.fillRect(femaleStart, y, barWidth, groupHeight);
    
    ctx.fillStyle = '#4a5568';
    ctx.font = '10px system-ui';
    ctx.fillText(new Intl.NumberFormat('en-US').format(group.value), femaleStart + barWidth + 4, y + groupHeight / 2 + 4);
    ctx.fillStyle = '#E53E3E';
  });

  // Labels
  ctx.fillStyle = '#4a5568';
  ctx.font = '12px system-ui';
  ctx.fillText('Male', centerY - maxWidth - 20, 30);
  ctx.fillText('Female', centerY + maxWidth + 20, 30);
}

// Render indicators table
function renderIndicatorsTable(filteredIndicators) {
  const tbody = indicatorsTable.querySelector('tbody');
  if (!tbody) {
    const thead = indicatorsTable.querySelector('thead');
    tbody = document.createElement('tbody');
    thead.parentNode.insertBefore(tbody, thead.nextSibling);
  }
  tbody.innerHTML = '';

  if (filteredIndicators.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--muted);">No indicators match your criteria</td></tr>';
    return;
  }

  // Show only first 30
  const display = filteredIndicators.slice(0, 30);

  display.forEach(ind => {
    const tr = document.createElement('tr');
    tr.style.cssText = 'transition: background 0.2s';
    tr.innerHTML = `
      <td>${ind.label}</td>
      <td>${ind.value}</td>
      <td>${ind.unit}</td>
      <td>${ind.year}</td>
      <td>${ind.change}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Render topic filter chips
function renderTopicChips() {
  const topics = [...new Set(INDICATORS.map(i => i.topic))];
  topicFilterContainer.innerHTML = topics.map(topic => `
    <button class="topic-chip ${topic === 'population' ? 'active' : ''}" data-topic="${topic}">${topic.charAt(0).toUpperCase() + topic.slice(1)}</button>
  `).join('');

  // Add click handlers
  topicFilterContainer.querySelectorAll('.topic-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterAndRenderIndicators();
    });
  });
}

// Filter indicators based on topic and search
function filterAndRenderIndicators() {
  const activeTopic = document.querySelector('.topic-chip.active')?.dataset.topic || 'all';
  const searchTerm = searchInput.value.trim().toLowerCase();

  let filtered = INDICATORS;

  // Filter by topic
  if (activeTopic !== 'all') {
    filtered = filtered.filter(i => i.topic === activeTopic);
  }

  // Filter by search
  if (searchTerm) {
    filtered = filtered.filter(i => 
      i.label.toLowerCase().includes(searchTerm) || 
      i.value.toLowerCase().includes(searchTerm) ||
      i.unit.toLowerCase().includes(searchTerm)
    );
  }

  renderIndicatorsTable(filtered);
}

// Initialize the app
function init() {
  // Render all views
  renderKPIs();
  renderGDPChart();
  renderPopulationPyramid();
  renderTopicChips();
  filterAndRenderIndicators();

  // Set up hash routing
  window.addEventListener('hashchange', () => {
    currentRoute = window.location.hash || '/';
    renderRoute();
  });

  // Search input listener
  searchInput.addEventListener('input', filterAndRenderIndicators);

  // Initial render
  renderRoute();
}

function renderRoute() {
  const path = window.location.hash || '/';

  // Hide all main content sections
  document.querySelectorAll('.main-section').forEach(section => {
    section.style.display = 'none';
  });

  switch (path) {
    case '#/':
      document.getElementById('home').style.display = 'block';
      break;
    case '#/indicators':
      document.getElementById('indicators').style.display = 'block';
      break;
    case '#/regions':
      document.getElementById('regions').style.display = 'block';
      renderRegionChart();
      break;
  }
}

function renderRegionChart() {
  const ctx = regionChartCanvas.getContext('2d');

  // Use GDP per capita as the default indicator for regional comparison
  const selectedIndicator = 'GDP per capita';
  
  // Get region data for the selected indicator
  const regionData = REGIONS.map(region => {
    const indicators = REGION_INDICATORS[region.id];
    const indicator = indicators.find(i => i.label.toLowerCase().includes(selectedIndicator.toLowerCase()));
    return {
      region: region.name,
      value: indicator ? parseFloat(indicator.value.replace(/,/g, '')) : 0,
      change: indicator ? indicator.change : 'N/A'
    };
  });

  // Sort by value descending
  regionData.sort((a, b) => b.value - a.value);

  const chartWidth = regionChartCanvas.width;
  const chartHeight = regionChartCanvas.height;

  // Clear
  ctx.clearRect(0, 0, chartWidth, chartHeight);

  // Draw bars
  const barWidth = 38;
  const barSpacing = 12;
  const maxValue = Math.max(...regionData.map(d => Math.max(d.value, 1)));
  const minValue = Math.min(...regionData.map(d => Math.min(d.value, 0)));
  const range = maxValue - minValue || 1;

  regionData.forEach((region, i) => {
    const x = 50 + i * (barWidth + barSpacing);
    const barHeight = (region.value - minValue) / range * (chartHeight - 100);
    const y = chartHeight - 60 - barHeight;

    ctx.fillStyle = '#3182CE';
    ctx.fillRect(x, y, barWidth, barHeight);

    // Value label
    ctx.fillStyle = '#4a5568';
    ctx.font = '10px system-ui';
    ctx.fillText(new Intl.NumberFormat('en-US').format(Math.abs(region.value)), x + barWidth / 2, y - 5);

    // Region name
    ctx.fillText(region.region, x + barWidth / 2, chartHeight - 35);
  });

  // Draw axes
  ctx.strokeStyle = '#4a5568';
  ctx.lineWidth = 1;
  
  // X axis
  ctx.beginPath();
  ctx.moveTo(50, chartHeight - 60);
  ctx.lineTo(chartWidth - 30, chartHeight - 60);
  ctx.stroke();

  // Y axis
  ctx.beginPath();
  ctx.moveTo(50, 60);
  ctx.lineTo(50, chartHeight - 60);
  ctx.stroke();

  // Update indicator text
  regionIndicatorText.innerHTML = '<strong>Selected Indicator: GDP per capita</strong> | Values in USD';
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}