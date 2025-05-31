'use client';

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import '../globals.css';
import { useEffect } from 'react';
import Highcharts from 'highcharts';

// Use the same Geist font as the main layout
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Move Highcharts initialization to a client-side effect
export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Initialize Highcharts modules only on the client side
    try {
      const HighchartsMore = require('highcharts/highcharts-more');
      const HighchartsHeatmap = require('highcharts/modules/heatmap');
      const HighchartsVariablePie = require('highcharts/modules/variable-pie');
      const HighchartsSankey = require('highcharts/modules/sankey');
      const HighchartsDependendencyWheel = require('highcharts/modules/dependency-wheel');
      const HighchartsFunnel = require('highcharts/modules/funnel');
      const HighchartsTreemap = require('highcharts/modules/treemap');
      const HighchartsOrganization = require('highcharts/modules/organization');
      const HighchartsTreegraph = require('highcharts/modules/treegraph');
      const HighchartsBullet = require('highcharts/modules/bullet');
      const HighchartsParallelCoordinates = require('highcharts/modules/parallel-coordinates');
      const HighchartsArcDiagram = require('highcharts/modules/arc-diagram');
      const HighchartsTimeline = require('highcharts/modules/timeline');
      const HighchartsPareto = require('highcharts/modules/pareto');
      const HighchartsBellcurve = require('highcharts/modules/histogram-bellcurve');
      const HighchartsExporting = require('highcharts/modules/exporting');
      const HighchartsExportData = require('highcharts/modules/export-data');
      const HighchartsAccessibility = require('highcharts/modules/accessibility');

      HighchartsMore(Highcharts);
      HighchartsHeatmap(Highcharts);
      HighchartsVariablePie(Highcharts);
      HighchartsSankey(Highcharts);
      HighchartsDependendencyWheel(Highcharts);
      HighchartsFunnel(Highcharts);
      HighchartsTreemap(Highcharts);
      HighchartsOrganization(Highcharts);
      HighchartsTreegraph(Highcharts);
      HighchartsBullet(Highcharts);
      HighchartsParallelCoordinates(Highcharts);
      HighchartsArcDiagram(Highcharts);
      HighchartsTimeline(Highcharts);
      HighchartsPareto(Highcharts);
      HighchartsBellcurve(Highcharts);
      HighchartsExporting(Highcharts);
      HighchartsExportData(Highcharts);
      HighchartsAccessibility(Highcharts);
      console.log('Highcharts modules loaded successfully');
    } catch (error) {
      console.error('Error loading Highcharts modules:', error);
    }
  }, []);

  return (
    <html lang="en">
      <body className={geistSans.variable}>
        {children}
      </body>
    </html>
  );
} 