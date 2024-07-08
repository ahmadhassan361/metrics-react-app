import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import APIService from '../../services/ApiService';
import 'chart.js/auto';
import chart_data from '../../assets/chart-data.csv';

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const [skuData, setSkuData] = useState(null);
  const [regionData, setRegionData] = useState(null);
  const [fulfillmentChannelData, setFulfillmentChannelData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(chart_data);
        const csvData = await response.text();
        
        // Parse CSV data
        const parsedData = await APIService.parseCSV(csvData);

        if (parsedData && parsedData.length > 0) {
          // For Order Quantities Over Time
          const labels = parsedData.map(item => item.CLEAN_DateTime);
          const quantities = parsedData.map(item => item.Quantity);

          setChartData({
            labels: labels,
            datasets: [
              {
                label: 'Quantity Over Time',
                data: quantities,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
              }
            ]
          });

          // For Total Orders of Each SKU
          const skuOrders = {};
          parsedData.forEach(item => {
            if (skuOrders[item.SKU]) {
              skuOrders[item.SKU] += 1;
            } else {
              skuOrders[item.SKU] = 1;
            }
          });
          const skuLabels = Object.keys(skuOrders);
          const skuQuantities = Object.values(skuOrders);

          setSkuData({
            labels: skuLabels,
            datasets: [
              {
                label: 'Total Orders per SKU',
                data: skuQuantities,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
              }
            ]
          });

          // For Total Orders Region-Wise
          const regionOrders = {};
          parsedData.forEach(item => {
            if (regionOrders[item.Region]) {
              regionOrders[item.Region] += 1;
            } else {
              regionOrders[item.Region] = 1;
            }
          });
          const regionLabels = Object.keys(regionOrders);
          const regionQuantities = Object.values(regionOrders);

          setRegionData({
            labels: regionLabels,
            datasets: [
              {
                label: 'Total Orders per Region',
                data: regionQuantities,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
              }
            ]
          });

          // For Total Orders per Fulfillment Channel
          const fulfillmentOrders = {};
          parsedData.forEach(item => {
            if (fulfillmentOrders[item.FulfillmentChannel]) {
              fulfillmentOrders[item.FulfillmentChannel] += 1;
            } else {
              fulfillmentOrders[item.FulfillmentChannel] = 1;
            }
          });
          const fulfillmentLabels = Object.keys(fulfillmentOrders);
          const fulfillmentQuantities = Object.values(fulfillmentOrders);

          setFulfillmentChannelData({
            labels: fulfillmentLabels,
            datasets: [
              {
                label: 'Total Orders per Fulfillment Channel',
                data: fulfillmentQuantities,
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true,
              }
            ]
          });
        }
      } catch (error) {
        console.error('Error fetching or parsing CSV data', error);
      }
    };
    fetchData();
  }, []);

  if (!chartData || !skuData || !regionData || !fulfillmentChannelData) {
    return <div>Loading...</div>;
  }

  return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6  p-3">
            <div className='bg-secondary-custom p-2'>

          <h2 className='text-danger'>Order Quantities Over Time</h2>
          <Line data={chartData} />
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6  p-3">
        <div className='bg-secondary-custom p-2'>
          <h2 className='text-danger'>Total Orders per SKU</h2>
          <Bar data={skuData} />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6  p-3">
        <div className='bg-secondary-custom p-2'>
          <h2 className='text-danger'>Total Orders per Region</h2>
          <Bar data={regionData} />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6  p-3">
        <div className='bg-secondary-custom p-2'>
          <h2 className='text-danger'>Total Orders per Fulfillment Channel</h2>
          <Bar data={fulfillmentChannelData} />
          </div>
        </div>
      </div>
  );
};

export default ChartComponent;