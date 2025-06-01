'use client';

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function EmbeddedChart({ params }: { params: Promise<{ id: string }> }) {
  const [chartConfig, setChartConfig] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [chartId, setChartId] = useState<string | null>(null);

  useEffect(() => {
    const getParams = async () => {
      const { id } = await params;
      setChartId(id);
    };
    getParams();
  }, [params]);

  useEffect(() => {
    if (!chartId) return;

    const fetchChart = async () => {
      try {
        const response = await fetch(`/api/charts/${chartId}`);
        if (!response.ok) {
          throw new Error('Failed to load chart');
        }
        const data = await response.json();
        setChartConfig(data.config);
      } catch (err) {
        setError('Failed to load chart');
        console.error('Error loading chart:', err);
      }
    };

    fetchChart();
  }, [chartId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!chartConfig) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          ...chartConfig,
          credits: { enabled: false },
          exporting: { enabled: false }
        }}
      />
    </div>
  );
} 