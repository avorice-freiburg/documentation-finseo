'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

// Suppress console errors - wrap this in a try/catch to prevent it from breaking
if (typeof window !== 'undefined') {
  try {
    const originalConsoleError = console.error;
    console.error = function(...args) {
      // Check if the error is related to Highcharts modules
      const errorString = args[0] && typeof args[0] === 'string' ? args[0] : 
                         args[0] && args[0].toString ? args[0].toString() : '';
      if (
        errorString.includes('Error loading Highcharts modules') || 
        errorString.includes('HighchartsMore is not a function') || 
        errorString.includes('e is not a function')
      ) {
        // Suppress the error
        return;
      }
      // Pass other errors to the original console.error
      originalConsoleError.apply(console, args);
    };
  } catch (e) {
    // Fail silently if we can't override console.error
  }
}

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsSankey from 'highcharts/modules/sankey';
import HighchartsDependendencyWheel from 'highcharts/modules/dependency-wheel';
import HighchartsBullet from 'highcharts/modules/bullet';
import HighchartsHeatmap from 'highcharts/modules/heatmap';
import HighchartsTreemap from 'highcharts/modules/treemap';
import HighchartsOrganization from 'highcharts/modules/organization';
import HighchartsTreegraph from 'highcharts/modules/treegraph';
import HighchartsFunnel from 'highcharts/modules/funnel';
import HighchartsParallelCoordinates from 'highcharts/modules/parallel-coordinates';
import HighchartsArcDiagram from 'highcharts/modules/arc-diagram';
import HighchartsTimeline from 'highcharts/modules/timeline';
import HighchartsPareto from 'highcharts/modules/pareto';
import HighchartsBellcurve from 'highcharts/modules/histogram-bellcurve';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsVariablePie from 'highcharts/modules/variable-pie';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from 'next/link';
import { Download, Share2, FileCode, Upload, X, Bot, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Label } from "@/components/ui/label";
import { FooterSection } from "@/components/sections/footer-section";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Import highcharts-more from the package
import 'highcharts-more';

type ChartType = 'auto' | 'linear' | 'pie' | 'area' | 'donut' | 'variableradius' | 
  'bubble' | 'dualaxes' | 'bullet' | 'heatmap' | 'treemap' | 'organization' | 
  'treegraph' | 'sankey' | 'pyramid' | 'dependencywheel' | 'arcdiagram' | 
  'timeline' | 'pareto' | 'funnel' | 'histogram' | 'arearange' | 'bar' | 
  'column' | 'stackedcolumn' | 'stackedbar' | 'columnrange' | 'stackedpercentage' | 
  'negativestack' | 'negativebar';

const CHART_PLACEHOLDERS: Record<ChartType, string> = {
  auto: "Describe your chart in terms of data, color and chart type...",
  linear: "Describe time-series data, e.g., 'Monthly sales for the past year'",
  pie: "Describe parts of a whole, e.g., 'Market share distribution'",
  area: "Describe trends over time, e.g., 'Revenue growth over the past year'",
  donut: "Describe parts of a whole, e.g., 'Market share distribution'",
  variableradius: "Describe parts of a whole, e.g., 'Market share distribution'",
  bubble: "Describe relationships between variables, e.g., 'Sales by region'",
  dualaxes: "Describe comparisons between two variables, e.g., 'Revenue and expenses'",
  bullet: "Describe performance indicators, e.g., 'Sales targets'",
  heatmap: "Describe relationships between variables, e.g., 'Employee productivity'",
  treemap: "Describe hierarchical data, e.g., 'Company structure'",
  organization: "Describe hierarchical data, e.g., 'Company structure'",
  treegraph: "Describe hierarchical data, e.g., 'Company structure'",
  sankey: "Describe flow between nodes, e.g., 'Energy flow in a manufacturing process'",
  pyramid: "Describe hierarchical data, e.g., 'Company structure'",
  dependencywheel: "Describe relationships between nodes, e.g., 'Energy flow in a manufacturing process'",
  arcdiagram: "Describe relationships between nodes, e.g., 'Energy flow in a manufacturing process'",
  timeline: "Describe time-series data, e.g., 'Monthly sales for the past year'",
  pareto: "Describe Pareto distribution, e.g., 'Customer satisfaction'",
  funnel: "Describe flow through stages, e.g., 'Sales funnel'",
  histogram: "Describe distribution of data, e.g., 'Customer satisfaction'",
  arearange: "Describe range of data, e.g., 'Revenue range'",
  bar: "Describe categorical comparisons, e.g., 'Product sales by region'",
  column: "Describe categorical comparisons, e.g., 'Product sales by region'",
  stackedcolumn: "Describe stacked categorical comparisons, e.g., 'Product sales by region'",
  stackedbar: "Describe stacked categorical comparisons, e.g., 'Product sales by region'",
  columnrange: "Describe range of categorical comparisons, e.g., 'Revenue range'",
  stackedpercentage: "Describe percentage distribution, e.g., 'Market share distribution'",
  negativestack: "Describe negative stack chart, e.g., 'Negative sales growth'",
  negativebar: "Describe negative bar chart, e.g., 'Negative sales growth'"
};

// Initialize modules in correct order
if (typeof window !== 'undefined') {
  try {
    // highcharts-more is now imported directly at the top, so we don't need to require it here
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
  } catch (error) {
    console.error('Error loading Highcharts modules:', error);
  }
}

// Add this helper function at the top level, outside the component
function createFormatter(format: string) {
  return function() {
    // @ts-ignore - 'this' context is provided by Highcharts
    return Math.abs(this.value) + '%';
  }
}

// Update ChartWrapper to expose chart instance
const ChartWrapper = ({ config, onChartInit }: { config: any, onChartInit?: (chart: Highcharts.Chart) => void }) => {
  const [key, setKey] = useState(Date.now());
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    if (chartRef.current?.chart && onChartInit) {
      onChartInit(chartRef.current.chart);
    }

    return () => {
      if (chartRef.current?.chart) {
        try {
          chartRef.current.chart.destroy();
        } catch (error) {
          console.warn('Chart cleanup warning:', error);
        }
      }
    };
  }, [onChartInit]);

  return (
    <HighchartsReact
      key={key}
      highcharts={Highcharts}
      options={{
        ...config,
        exporting: {
          enabled: false
        }
      }}
      ref={chartRef}
      containerProps={{ style: { height: '600px' } }}
    />
  );
};

export default function ChartGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chartConfig, setChartConfig] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [chartType, setChartType] = useState<ChartType>('auto');
  const [hasGenerated, setHasGenerated] = useState(false);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [showEmbedDialog, setShowEmbedDialog] = useState(false);
  const [embedCode, setEmbedCode] = useState('');
  const [hasCopied, setHasCopied] = useState(false);
  const [csvData, setCsvData] = useState<string | null>(null);
  const [parsedCsvData, setParsedCsvData] = useState<string[][]>([]);
  const [csvError, setCsvError] = useState<string | null>(null);
  const [isDataSheetOpen, setIsDataSheetOpen] = useState(false);
  const [currentChart, setCurrentChart] = useState<Highcharts.Chart | null>(null);
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);

  const parseCSV = (text: string): string[][] => {
    // Basic CSV parsing (can be enhanced for more complex cases)
    const lines = text.split(/\r\n|\n/);
    return lines.map(line => line.split(',').map(cell => cell.trim()));
  };

  const validateCSV = (data: string[][]): boolean => {
    if (data.length < 2) {
      setCsvError("CSV must contain at least a header row and one data row");
      return false;
    }

    return true;
  };

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const parsed = parseCSV(text);
        
        if (validateCSV(parsed)) {
          setCsvData(text);
          setParsedCsvData(parsed);
          setCsvError(null);
          setIsDataSheetOpen(true); // Open the preview sheet
        }
      };
      reader.onerror = () => {
        setCsvError("Error reading file");
      };
      reader.readAsText(file);
    }
  };

  const clearCsvData = () => {
    setCsvData(null);
    setParsedCsvData([]);
    setCsvError(null);
  };

  const handleChartInit = useCallback((chart: Highcharts.Chart) => {
    setCurrentChart(chart);
  }, []);

  const handleDownloadSVG = () => {
    if (!currentChart) return;
    
    // Get SVG data
    const svgData = currentChart.container.innerHTML;
    
    // Create download
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${getFileName()}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPNG = () => {
    if (!currentChart) return;
    
    // Create a canvas with higher resolution (2x)
    const scale = 2;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas dimensions at higher resolution
    canvas.width = currentChart.chartWidth * scale;
    canvas.height = currentChart.chartHeight * scale;

    // Scale the context to match the higher resolution
    context.scale(scale, scale);

    // Enable high-quality image rendering
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';

    // Draw white background
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width / scale, canvas.height / scale);

    // Convert SVG to data URL with proper scaling
    const svgContainer = currentChart.container.querySelector('svg');
    if (!svgContainer) return;
    
    // Clone the SVG to modify it without affecting the chart
    const svg = svgContainer.cloneNode(true) as SVGElement;
    svg.setAttribute('width', (currentChart.chartWidth * scale).toString());
    svg.setAttribute('height', (currentChart.chartHeight * scale).toString());
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    // Create image and draw to canvas
    const img = new Image();
    img.onload = () => {
      context.drawImage(img, 0, 0, currentChart.chartWidth, currentChart.chartHeight);
      
      // Create download link with maximum quality
      const link = document.createElement('a');
      link.download = `${getFileName()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
      
      // Cleanup
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const handleSaveAndEmbed = async () => {
    if (!chartConfig) return;
    
    try {
      const response = await fetch('/api/charts/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          config: chartConfig,
          title: prompt
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save chart');
      }

      const { chartId } = await response.json();
      
      // Create embed code
      const code = `<iframe src="https://app.finseo.ai/embed/chart/${chartId}" width="100%" height="400" frameborder="0"></iframe>`;
      setEmbedCode(code);
      setShowEmbedDialog(true);
    } catch (err) {
      console.error('Error saving chart:', err);
      setError('Failed to save chart for embedding');
    }
  };

  const handleCopyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode)
      .then(() => {
        setHasCopied(true);
        // Reset the button after 2 seconds
        setTimeout(() => {
          setHasCopied(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if hCaptcha token is available
    if (!hcaptchaToken) {
      setError('Please complete the captcha verification');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setChartConfig(null);
    setHasGenerated(true); // Set hasGenerated to true when generating a chart

    try {
      // Construct the prompt for OpenAI
      const openAIPrompt = `${prompt}${csvData ? `\n\nTry to use the following data:\n${csvData}` : ''}`;

      // Now proceed with chart generation
      const response = await fetch('/api/chart-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt: openAIPrompt, 
          chartType: chartType === 'auto' ? undefined : chartType,
          detectChartType: chartType === 'auto',
          hcaptchaToken: hcaptchaToken
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.details || data.error || 'Failed to generate chart');
      }

      // Log the received data
      console.log('Received chart data:', data);

      let config;
      try {
        config = typeof data.chart === 'string' ? JSON.parse(data.chart) : data.chart;
        
        // Special handling for negative stack charts
        if (config.yAxis?.labels?.formatter && typeof config.yAxis.labels.formatter === 'string') {
          config.yAxis = {
            ...config.yAxis,
            labels: {
              ...config.yAxis.labels,
              formatter: createFormatter(config.yAxis.labels.formatter)
            }
          };
        }

        // Special handling for tooltip formatter if it exists
        if (config.tooltip?.formatter && typeof config.tooltip.formatter === 'string') {
          config.tooltip = {
            ...config.tooltip,
            formatter: function() {
              // @ts-ignore - 'this' context is provided by Highcharts
              return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>Population: ' + Math.abs(this.point.y).toFixed(2) + '%';
            }
          };
        }

        console.log('Parsed and processed chart config:', config);
      } catch (err) {
        throw new Error('Could not generate your chart. Please specify your data and chart type more clearly.');
      }

      setChartConfig(config);
    } catch (err) {
      console.error('Chart generation error:', err);
      setError('Could not generate your chart. Please specify your data and chart type more clearly.');
    } finally {
      setIsLoading(false);
      // Reset hCaptcha for next use
      setHcaptchaToken(null);
      if (hcaptchaRef.current) {
        hcaptchaRef.current.resetCaptcha();
      }
    }
  };

  const getFileName = () => {
    // Clean the prompt to make it filename-friendly
    return prompt
      ? prompt.toLowerCase()
          .replace(/[^a-z0-9]/g, '-') // Replace non-alphanumeric chars with hyphens
          .replace(/-+/g, '-')        // Replace multiple hyphens with single hyphen
          .replace(/^-|-$/g, '')      // Remove leading/trailing hyphens
          .substring(0, 50)           // Limit length
      : 'chart';
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center gap-10 py-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 h-[600px] md:h-[800px] w-full bg-background rounded-b-xl"></div>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
              "opacity-20"
            )}
          />
        </div>
        
        <div className="text-center max-w-3xl mx-auto px-6 z-10 pt-16">
          <div className="mx-auto flex justify-center">
            <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2 mb-6">
              <LineChart className="h-4 w-4" />
              AI-Powered Chart Generator
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
            Create beautiful charts with AI
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Transform your data into stunning visualizations with our AI chart generator. 
            Just describe what you want or upload your data - no design skills required.
          </p>
        </div>
      </section>
      
      {/* Chart Generator Form */}
      <section id="chart-generator" className="w-full max-w-4xl mx-auto px-6 -mt-10 mb-16 z-10">
        <div className="rounded-xl bg-card shadow-xl border border-border overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 tracking-tight">Generate Your Chart</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="chartType">Chart Type</Label>
                  <Select
                    value={chartType}
                    onValueChange={(value: ChartType) => setChartType(value)}
                  >
                    <SelectTrigger id="chartType" className="w-full mt-1 border-0">
                      <SelectValue placeholder="Select chart type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Automatic Detection</SelectItem>
                      <SelectItem value="linear">Linear Chart</SelectItem>
                      <SelectItem value="pie">Pie Chart</SelectItem>
                      <SelectItem value="area">Area Chart</SelectItem>
                      <SelectItem value="donut">Donut Chart</SelectItem>
                      <SelectItem value="variableradius">Variable Radius Chart</SelectItem>
                      <SelectItem value="bubble">Bubble Chart</SelectItem>
                      <SelectItem value="dualaxes">Dual Axes Chart</SelectItem>
                      <SelectItem value="bullet">Bullet Chart</SelectItem>
                      <SelectItem value="heatmap">Heatmap Chart</SelectItem>
                      <SelectItem value="treemap">Treemap Chart</SelectItem>
                      <SelectItem value="organization">Organization Chart</SelectItem>
                      <SelectItem value="treegraph">Treegraph Chart</SelectItem>
                      <SelectItem value="sankey">Sankey Diagram</SelectItem>
                      <SelectItem value="pyramid">Pyramid Chart</SelectItem>
                      <SelectItem value="dependencywheel">Dependency Wheel Chart</SelectItem>
                      <SelectItem value="arcdiagram">Arc Diagram</SelectItem>
                      <SelectItem value="timeline">Timeline Chart</SelectItem>
                      <SelectItem value="pareto">Pareto Chart</SelectItem>
                      <SelectItem value="funnel">Funnel Chart</SelectItem>
                      <SelectItem value="histogram">Histogram Chart</SelectItem>
                      <SelectItem value="arearange">Area Range Chart</SelectItem>
                      <SelectItem value="bar">Bar Chart</SelectItem>
                      <SelectItem value="column">Column Chart</SelectItem>
                      <SelectItem value="stackedcolumn">Stacked Column Chart</SelectItem>
                      <SelectItem value="stackedbar">Stacked Bar Chart</SelectItem>
                      <SelectItem value="columnrange">Column Range Chart</SelectItem>
                      <SelectItem value="stackedpercentage">Stacked Percentage Chart</SelectItem>
                      <SelectItem value="negativestack">Negative Stack Chart</SelectItem>
                      <SelectItem value="negativebar">Negative Bar Chart</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="dataUpload">Data Source (Optional)</Label>
                  <Sheet open={isDataSheetOpen} onOpenChange={setIsDataSheetOpen}>
                    <SheetTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full mt-1 flex gap-2 items-center h-10"
                        type="button"
                        id="dataUpload"
                      >
                        <Upload className="h-4 w-4" />
                        {csvData ? 'View Uploaded Data' : 'Upload CSV Data'}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:max-w-lg">
                      <SheetHeader>
                        <SheetTitle>Data Import</SheetTitle>
                        <SheetDescription>
                          Upload a CSV file to use as data for your chart
                        </SheetDescription>
                      </SheetHeader>
                      
                      <div className="mt-6 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="csvUpload">Upload CSV</Label>
                          <div className="flex gap-2">
                            <Input
                              id="csvUpload"
                              type="file"
                              accept=".csv"
                              onChange={handleCSVUpload}
                              className="flex-1"
                            />
                            {csvData && (
                              <Button
                                variant="destructive"
                                size="icon"
                                onClick={clearCsvData}
                                type="button"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          {csvError && (
                            <p className="text-sm text-red-500">{csvError}</p>
                          )}
                        </div>

                        {parsedCsvData.length > 0 && (
                          <div className="border rounded-lg overflow-hidden">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  {parsedCsvData[0].map((header, i) => (
                                    <TableHead key={i}>{header}</TableHead>
                                  ))}
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {parsedCsvData.slice(1, 6).map((row, i) => (
                                  <TableRow key={i}>
                                    {row.map((cell, j) => (
                                      <TableCell key={j}>{cell}</TableCell>
                                    ))}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                            {parsedCsvData.length > 6 && (
                              <div className="p-2 text-center text-sm text-muted-foreground">
                                Showing first 5 rows of {parsedCsvData.length - 1} rows
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              
              <div>
                <Label htmlFor="chartDescription">Chart Description</Label>
                <Input
                  id="chartDescription"
                  placeholder={CHART_PLACEHOLDERS[chartType]}
                  value={prompt}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
                  className="w-full mt-1 bg-background h-10"
                  disabled={isLoading}
                />
              </div>
              
              {/* hCaptcha Verification */}
              <div className="flex justify-begin">
                <HCaptcha
                  ref={hcaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001"}
                  onVerify={(token) => setHcaptchaToken(token)}
                  onExpire={() => setHcaptchaToken(null)}
                  onError={() => setHcaptchaToken(null)}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading || !hcaptchaToken} 
                className="w-full md:w-auto bg-secondary text-black hover:bg-secondary/90"
              >
                {isLoading ? 'Generating...' : 'Generate Chart'}
              </Button>
            </form>
          </div>
          
          {/* Chart Results Section */}
          {(chartConfig || isLoading || error) && (
            <div className="border-t border-border p-6 md:p-8">
              {error && (
                <div className="mb-4 text-red-500 text-sm">
                  {error}
                </div>
              )}
              
              {/* Chart Actions */}
              {chartConfig && !isLoading && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Button onClick={handleDownloadSVG} variant="outline" size="sm">
                    <FileCode className="mr-2 h-4 w-4" />
                    SVG
                  </Button>
                  <Button onClick={handleDownloadPNG} variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    PNG
                  </Button>
                  <Button 
                    onClick={handleSaveAndEmbed} 
                    size="sm"
                    className="bg-secondary text-black hover:bg-secondary/90"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Save & Embed
                  </Button>
                </div>
              )}

              {/* Chart or Loading Indicator */}
              {isLoading ? (
                <div className="flex justify-center items-center h-[400px]">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-secondary"></div>
                </div>
              ) : (
                <>
                  {chartConfig && (
                    <div className="chart-container">
                      <ChartWrapper config={chartConfig} onChartInit={handleChartInit} />
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </section>

      <AlertDialog open={showEmbedDialog} onOpenChange={setShowEmbedDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Chart Saved Successfully!</AlertDialogTitle>
            <AlertDialogDescription>
              Your chart has been saved and is ready to embed. Use the code below to embed this chart on your website:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4">
            <div className="relative">
              <Input
                value={embedCode}
                readOnly
                className="pr-20 font-mono text-sm"
              />
              <Button
                className={`absolute right-1 top-1 h-7 w-16 ${hasCopied ? 'bg-green-500 hover:bg-green-600 text-white' : ''}`}
                size="sm"
                onClick={handleCopyEmbedCode}
                variant={hasCopied ? "default" : "default"}
              >
                {hasCopied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}
