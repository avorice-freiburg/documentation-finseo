import OpenAI from 'openai';

export const dynamic = 'force-dynamic';
export const maxDuration = 900; // 15 minutes maximum duration

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const CHART_TYPES = {
  linear: `You are a chart generation expert. Generate a Highcharts configuration object for a line chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example, change the legends according to the prompt:
    {
      "chart": {
        "type": "line"
      },
      "title": {
        "text": "U.S Solar Employment Growth",
        "align": "left"
      },
      "subtitle": {
        "text": "By Job Category. Source: <a href=\\"https://irecusa.org/programs/solar-jobs-census/\\" target=\\"_blank\\">IREC</a>.",
        "align": "left"
      },
      "yAxis": {
        "title": {
          "text": "Number of Employees"
        }
      },
      "xAxis": {
        "accessibility": {
          "rangeDescription": "Range: 2010 to 2022"
        }
      },
      "legend": {
        "layout": "vertical",
        "align": "right",
        "verticalAlign": "middle",
        "enabled": true
      },
      "plotOptions": {
        "series": {
          "label": {
            "connectorAllowed": false
          },
          "pointStart": 2010,
          "showInLegend": true
        }
      },
      "series": [{
        "name": "Installation & Developers",
        "data": [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610, 168960, 171558]
      }, {
        "name": "Manufacturing",
        "data": [24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 31050, 33099, 33473]
      }, {
        "name": "Sales & Distribution",
        "data": [11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213, 25663, 28978, 30618]
      }, {
        "name": "Operations & Maintenance",
        "data": [null, null, null, null, null, null, null, null, 11164, 11218, 10077, 12530, 16585]
      }, {
        "name": "Other",
        "data": [21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906, 10073, 11471, 11648]
      }],
      "responsive": {
        "rules": [{
          "condition": {
            "maxWidth": 500
          },
          "chartOptions": {
            "legend": {
              "layout": "horizontal",
              "align": "center",
              "verticalAlign": "bottom"
            }
          }
        }]
      }
    }`,
  
  pie: `You are a chart generation expert. Generate a Highcharts configuration object for a pie chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "pie"
      },
      "title": {
        "text": "Distribution"
      },
      "tooltip": {
        "valueSuffix": "%"
      },
      "plotOptions": {
        "series": {
          "allowPointSelect": true,
          "cursor": "pointer",
          "dataLabels": [{
            "enabled": true,
            "distance": 20
          }]
        }
      },
      "series": [{
        "name": "Percentage",
        "colorByPoint": true,
        "data": [
          { "name": "Category 1", "y": 55.02 },
          { "name": "Category 2", "y": 26.71, "sliced": true, "selected": true },
          { "name": "Category 3", "y": 18.27 }
        ]
      }]
    }`,

  area: `You are a chart generation expert. Generate a Highcharts configuration object for an area chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "area"
      },
      "title": {
        "text": "Area Chart Title",
        "align": "left"
      },
      "yAxis": {
        "title": {
          "text": "Values"
        }
      },
      "plotOptions": {
        "area": {
          "stacking": "normal",
          "lineColor": "#666666",
          "lineWidth": 1
        }
      },
      "series": [{
        "name": "Series 1",
        "data": [1, 2, 3, 4, 5]
      }]
    }`,

  donut: `You are a chart generation expert. Generate a Highcharts configuration object for a donut chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "pie",
        "custom": {},
        "events": {
          "render": "function() { /* Center label rendering logic */ }"
        }
      },
      "title": {
        "text": "Distribution"
      },
      "plotOptions": {
        "series": {
          "allowPointSelect": true,
          "cursor": "pointer",
          "borderRadius": 8,
          "dataLabels": [{
            "enabled": true,
            "distance": 20,
            "format": "{point.name}"
          }, {
            "enabled": true,
            "distance": -15,
            "format": "{point.percentage:.0f}%",
            "style": {
              "fontSize": "0.9em"
            }
          }],
          "showInLegend": true
        }
      },
      "series": [{
        "name": "Categories",
        "colorByPoint": true,
        "innerSize": "75%",
        "data": [
          { "name": "Category 1", "y": 25.0 },
          { "name": "Category 2", "y": 25.0 },
          { "name": "Category 3", "y": 25.0 },
          { "name": "Category 4", "y": 25.0 }
        ]
      }]
    }`,

  variableradius: `You are a chart generation expert. Generate a Highcharts configuration object for a variable radius pie chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "variablepie"
      },
      "title": {
        "text": "Variable Radius Pie Chart",
        "align": "left"
      },
      "tooltip": {
        "headerFormat": "",
        "pointFormat": "<b>{point.name}</b><br/>Value 1: {point.y}<br/>Value 2: {point.z}"
      },
      "series": [{
        "minPointSize": 10,
        "innerSize": "20%",
        "zMin": 0,
        "name": "countries",
        "borderRadius": 5,
        "data": [
          { "name": "Item 1", "y": 500, "z": 100 },
          { "name": "Item 2", "y": 300, "z": 80 },
          { "name": "Item 3", "y": 200, "z": 60 }
        ]
      }]
    }`,

  bubble: `You are a chart generation expert. Generate a Highcharts configuration object for a bubble chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "bubble",
        "plotBorderWidth": 1,
        "zooming": {
          "type": "xy"
        }
      },
      "title": {
        "text": "Bubble Chart Title"
      },
      "xAxis": {
        "gridLineWidth": 1,
        "title": {
          "text": "X-Axis Title"
        }
      },
      "yAxis": {
        "title": {
          "text": "Y-Axis Title"
        }
      },
      "series": [{
        "data": [
          { "x": 95, "y": 95, "z": 13.8, "name": "Point 1" },
          { "x": 86.5, "y": 102.9, "z": 14.7, "name": "Point 2" },
          { "x": 80.8, "y": 91.5, "z": 15.8, "name": "Point 3" }
        ],
        "colorByPoint": true
      }]
    }`,

  dualaxes: `You are a chart generation expert. Generate a Highcharts configuration object for a dual axes chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "zooming": {
          "type": "xy"
        }
      },
      "title": {
        "text": "Temperature and Precipitation",
        "align": "left"
      },
      "xAxis": [{
        "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        "crosshair": true
      }],
      "yAxis": [
        {
          "labels": {
            "format": "{value}°C",
            "style": {
              "color": "#7cb5ec"
            }
          },
          "title": {
            "text": "Temperature",
            "style": {
              "color": "#7cb5ec"
            }
          }
        },
        {
          "title": {
            "text": "Precipitation",
            "style": {
              "color": "#434348"
            }
          },
          "labels": {
            "format": "{value} mm",
            "style": {
              "color": "#434348"
            }
          },
          "opposite": true
        }
      ],
      "tooltip": {
        "shared": true
      },
      "series": [
        {
          "name": "Precipitation",
          "type": "column",
          "yAxis": 1,
          "data": [49.9, 71.5, 106.4, 129.2, 144.0, 176.0],
          "tooltip": {
            "valueSuffix": " mm"
          }
        },
        {
          "name": "Temperature",
          "type": "spline",
          "data": [7.0, 6.9, 9.5, 14.5, 18.2, 21.5],
          "tooltip": {
            "valueSuffix": "°C"
          }
        }
      ]
    }`,

  sparkline: `You are a chart generation expert. Generate a Highcharts configuration object for a sparkline chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "backgroundColor": null,
        "borderWidth": 0,
        "type": "area",
        "margin": [2, 0, 2, 0],
        "width": 120,
        "height": 20,
        "style": {
          "overflow": "visible"
        },
        "skipClone": true
      },
      "title": {
        "text": ""
      },
      "xAxis": {
        "labels": {
          "enabled": false
        },
        "title": {
          "text": null
        },
        "startOnTick": false,
        "endOnTick": false,
        "tickPositions": []
      },
      "yAxis": {
        "endOnTick": false,
        "startOnTick": false,
        "labels": {
          "enabled": false
        },
        "title": {
          "text": null
        },
        "tickPositions": [0]
      },
      "tooltip": {
        "hideDelay": 0,
        "outside": true,
        "shared": true
      },
      "series": [{
        "data": [1, 2, 3, 4, 5],
        "pointStart": 1
      }]
    }`,

  gauge: `You are a chart generation expert. Generate a Highcharts configuration object for a gauge chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "gauge",
        "plotBackgroundColor": null,
        "plotBackgroundImage": null,
        "plotBorderWidth": 0,
        "plotShadow": false,
        "height": "80%"
      },
      "title": {
        "text": "Speedometer"
      },
      "pane": {
        "startAngle": -90,
        "endAngle": 89.9,
        "background": null,
        "center": ["50%", "75%"],
        "size": "110%"
      },
      "yAxis": {
        "min": 0,
        "max": 200,
        "tickPixelInterval": 72,
        "tickPosition": "inside",
        "tickLength": 20,
        "tickWidth": 2,
        "minorTickInterval": null,
        "labels": {
          "distance": 20,
          "style": {
            "fontSize": "14px"
          }
        },
        "plotBands": [{
          "from": 0,
          "to": 130,
          "color": "#55BF3B",
          "thickness": 20
        }, {
          "from": 130,
          "to": 160,
          "color": "#DDDF0D",
          "thickness": 20
        }, {
          "from": 160,
          "to": 200,
          "color": "#DF5353",
          "thickness": 20
        }]
      },
      "series": [{
        "name": "Speed",
        "data": [80],
        "tooltip": {
          "valueSuffix": " km/h"
        },
        "dataLabels": {
          "format": "{y} km/h",
          "borderWidth": 0,
          "style": {
            "fontSize": "16px"
          }
        }
      }]
    }`,

  bullet: `You are a chart generation expert. Generate a Highcharts configuration object for a bullet graph based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "inverted": true,
        "marginLeft": 135,
        "type": "bullet"
      },
      "title": {
        "text": "Revenue 2024"
      },
      "xAxis": {
        "categories": ["Revenue"]
      },
      "yAxis": {
        "plotBands": [{
          "from": 0,
          "to": 150,
          "color": "#666"
        }, {
          "from": 150,
          "to": 225,
          "color": "#999"
        }, {
          "from": 225,
          "to": 300,
          "color": "#bbb"
        }],
        "title": null
      },
      "series": [{
        "data": [{
          "y": 275,
          "target": 250
        }]
      }]
    }`,

  heatmap: `You are a chart generation expert. Generate a Highcharts configuration object for a heatmap chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "heatmap",
        "marginTop": 40,
        "marginBottom": 80,
        "plotBorderWidth": 1
      },
      "title": {
        "text": "Sales per employee per weekday"
      },
      "xAxis": {
        "categories": ["Alexander", "Marie", "Maximilian", "Sophia", "Lukas"]
      },
      "yAxis": {
        "categories": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "title": null,
        "reversed": true
      },
      "colorAxis": {
        "min": 0,
        "minColor": "#FFFFFF",
        "maxColor": "#7cb5ec"
      },
      "legend": {
        "align": "right",
        "layout": "vertical",
        "margin": 0,
        "verticalAlign": "top",
        "y": 25,
        "symbolHeight": 280
      },
      "series": [{
        "name": "Sales per employee",
        "borderWidth": 1,
        "data": [
          [0, 0, 10], [0, 1, 19], [0, 2, 8],
          [1, 0, 92], [1, 1, 58], [1, 2, 78],
          [2, 0, 35], [2, 1, 15], [2, 2, 123]
        ],
        "dataLabels": {
          "enabled": true,
          "color": "#000000"
        }
      }]
    }`,

  treemap: `You are a chart generation expert. Generate a Highcharts configuration object for a treemap chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "treemap",
        "margin": [50, 10, 50, 10]
      },
      "series": [{
        "type": "treemap",
        "layoutAlgorithm": "stripes",
        "alternateStartingDirection": true,
        "borderColor": "#fff",
        "borderRadius": 6,
        "borderWidth": 2,
        "dataLabels": {
          "style": {
            "textOutline": "none"
          }
        },
        "levels": [{
          "level": 1,
          "layoutAlgorithm": "sliceAndDice",
          "dataLabels": {
            "enabled": true,
            "align": "left",
            "verticalAlign": "top",
            "style": {
              "fontSize": "15px",
              "fontWeight": "bold"
            }
          }
        }],
        "data": [{
          "id": "A",
          "name": "Nord-Norge",
          "color": "#50FFB1"
        }, {
          "id": "B",
          "name": "Trøndelag",
          "color": "#F5FBEF"
        }, {
          "id": "C",
          "name": "Vestlandet",
          "color": "#A09FA8"
        }, {
          "id": "D",
          "name": "Østlandet",
          "color": "#E7ECEF"
        }, {
          "id": "E",
          "name": "Sørlandet",
          "color": "#A9B4C2"
        }, {
          "name": "Troms og Finnmark",
          "parent": "A",
          "value": 70923
        }, {
          "name": "Nordland",
          "parent": "A",
          "value": 35759
        }, {
          "name": "Trøndelag",
          "parent": "B",
          "value": 39494
        }, {
          "name": "Møre og Romsdal",
          "parent": "C",
          "value": 13840
        }, {
          "name": "Vestland",
          "parent": "C",
          "value": 31969
        }, {
          "name": "Rogaland",
          "parent": "C",
          "value": 8576
        }, {
          "name": "Viken",
          "parent": "D",
          "value": 22768
        }, {
          "name": "Innlandet",
          "parent": "D",
          "value": 49391
        }, {
          "name": "Oslo",
          "parent": "D",
          "value": 454
        }, {
          "name": "Vestfold og Telemark",
          "parent": "D",
          "value": 15925
        }, {
          "name": "Agder",
          "parent": "E",
          "value": 14981
        }]
      }],
      "title": {
        "text": "Norwegian regions and counties by area",
        "align": "left",
        "margin": 30,
        "x": 10
      },
      "subtitle": {
        "text": "Source: <a href=\\"https://snl.no/Norge\\" target=\\"_blank\\">SNL</a>",
        "align": "left",
        "x": 10
      },
      "tooltip": {
        "useHTML": true,
        "pointFormat": "The area of <b>{point.name}</b> is <b>{point.value} km<sup>2</sup></b>"
      }
    }`,

  organization: `You are a chart generation expert. Generate a Highcharts configuration object for an organization chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "height": 600,
        "inverted": true
      },
      "title": {
        "text": "Organization Chart",
        "align": "left",
        "margin": 30,
        "x": 10
      },
      "series": [{
        "type": "organization",
        "name": "Organization",
        "keys": ["from", "to"],
        "data": [
          ["Shareholders", "Board"],
          ["Board", "CEO"],
          ["CEO", "CTO"],
          ["CEO", "CPO"],
          ["CEO", "CSO"],
          ["CTO", "Product"],
          ["CTO", "Web"]
        ],
        "levels": [{
          "level": 0,
          "color": "silver",
          "dataLabels": {
            "color": "black"
          },
          "height": 25
        }, {
          "level": 1,
          "color": "silver",
          "dataLabels": {
            "color": "black"
          },
          "height": 25
        }, {
          "level": 2,
          "color": "#980104"
        }],
        "nodes": [{
          "id": "Shareholders"
        }, {
          "id": "Board"
        }, {
          "id": "CEO",
          "title": "Chief Executive Officer"
        }, {
          "id": "CTO",
          "title": "Chief Technology Officer"
        }, {
          "id": "CPO",
          "title": "Chief Product Officer"
        }, {
          "id": "CSO",
          "title": "Chief Sales Officer"
        }, {
          "id": "Product",
          "name": "Product Team"
        }, {
          "id": "Web",
          "name": "Web Team"
        }],
        "colorByPoint": false,
        "color": "#007ad0",
        "dataLabels": {
          "color": "white"
        },
        "borderColor": "white",
        "nodeWidth": 65
      }],
      "tooltip": {
        "outside": true
      }
    }`,

  treegraph: `You are a chart generation expert. Generate a Highcharts configuration object for a treegraph chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "spacingBottom": 30,
        "marginRight": 120,
        "height": 800
      },
      "title": {
        "text": "Tree Graph Example",
        "align": "left",
        "margin": 30,
        "x": 10
      },
      "series": [{
        "type": "treegraph",
        "keys": ["parent", "id", "level"],
        "clip": false,
        "data": [
          [null, "Root"],
          ["Root", "Branch A"],
          ["Root", "Branch B"],
          ["Branch A", "Leaf 1", 3],
          ["Branch A", "Leaf 2", 3],
          ["Branch B", "Leaf 3", 3],
          ["Branch B", "Leaf 4", 3]
        ],
        "marker": {
          "symbol": "circle",
          "radius": 6,
          "fillColor": "#ffffff",
          "lineWidth": 3
        },
        "dataLabels": {
          "align": "left",
          "pointFormat": "{point.id}",
          "style": {
            "color": "#000000",
            "textOutline": "3px #ffffff",
            "whiteSpace": "nowrap"
          },
          "x": 24,
          "crop": false,
          "overflow": "none"
        },
        "levels": [{
          "level": 1,
          "levelIsConstant": false
        }, {
          "level": 2,
          "colorByPoint": true
        }, {
          "level": 3,
          "colorVariation": {
            "key": "brightness",
            "to": -0.5
          }
        }]
      }]
    }`,

  sankey: `You are a chart generation expert. Generate a Highcharts configuration object for a Sankey diagram based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "height": 600
      },
      "title": {
        "text": "Sample Sankey Diagram",
        "align": "left"
      },
      "subtitle": {
        "text": "Source: Sample Data",
        "align": "left"
      },
      "accessibility": {
        "point": {
          "valueDescriptionFormat": "{index}. {point.from} to {point.to}, {point.weight}."
        }
      },
      "tooltip": {
        "headerFormat": null,
        "pointFormat": "{point.fromNode.name} → {point.toNode.name}: {point.weight:.2f}",
        "nodeFormat": "{point.name}: {point.sum:.2f}"
      },
      "series": [{
        "keys": ["from", "to", "weight"],
        "nodes": [
          {
            "id": "Source A",
            "color": "#7cb5ec"
          },
          {
            "id": "Source B",
            "color": "#434348"
          },
          {
            "id": "Destination X",
            "color": "#90ed7d",
            "column": 2
          },
          {
            "id": "Destination Y",
            "color": "#f7a35c",
            "column": 2
          }
        ],
        "data": [
          ["Source A", "Destination X", 5],
          ["Source A", "Destination Y", 3],
          ["Source B", "Destination X", 2],
          ["Source B", "Destination Y", 4]
        ],
        "type": "sankey",
        "name": "Flow diagram"
      }]
    }`,

  pyramid: `You are a chart generation expert. Generate a Highcharts configuration object for a pyramid chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "pyramid"
      },
      "title": {
        "text": "Sales pyramid",
        "x": -50
      },
      "plotOptions": {
        "series": {
          "dataLabels": {
            "enabled": true,
            "format": "<b>{point.name}</b> ({point.y:,.0f})",
            "softConnector": true
          },
          "center": ["40%", "50%"],
          "width": "80%"
        }
      },
      "legend": {
        "enabled": false
      },
      "series": [{
        "name": "Unique users",
        "data": [
          ["Website visits", 15654],
          ["Downloads", 4064],
          ["Requested price list", 1987],
          ["Invoice sent", 976],
          ["Finalized", 846]
        ]
      }]
    }`,

  dependencywheel: `You are a chart generation expert. Generate a Highcharts configuration object for a dependency wheel chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "title": {
        "text": "Highcharts Dependency Wheel"
      },
      "accessibility": {
        "point": {
          "valueDescriptionFormat": "{index}. From {point.from} to {point.to}: {point.weight}."
        }
      },
      "series": [{
        "keys": ["from", "to", "weight"],
        "data": [
          ["Brazil", "Portugal", 5],
          ["Brazil", "France", 1],
          ["Brazil", "Spain", 1],
          ["Brazil", "England", 1],
          ["Canada", "Portugal", 1],
          ["Canada", "France", 5],
          ["Canada", "England", 1],
          ["Mexico", "Portugal", 1],
          ["Mexico", "France", 1],
          ["Mexico", "Spain", 5],
          ["Mexico", "England", 1],
          ["USA", "Portugal", 1],
          ["USA", "France", 1],
          ["USA", "Spain", 1],
          ["USA", "England", 5],
          ["Portugal", "Angola", 2],
          ["Portugal", "Senegal", 1],
          ["Portugal", "Morocco", 1],
          ["Portugal", "South Africa", 3],
          ["France", "Angola", 1],
          ["France", "Senegal", 3],
          ["France", "Mali", 3],
          ["France", "Morocco", 3],
          ["France", "South Africa", 1],
          ["Spain", "Senegal", 1],
          ["Spain", "Morocco", 3],
          ["Spain", "South Africa", 1],
          ["England", "Angola", 1],
          ["England", "Senegal", 1],
          ["England", "Morocco", 2],
          ["England", "South Africa", 7],
          ["South Africa", "China", 5],
          ["South Africa", "India", 1],
          ["South Africa", "Japan", 3],
          ["Angola", "China", 5],
          ["Angola", "India", 1],
          ["Angola", "Japan", 3],
          ["Senegal", "China", 5],
          ["Senegal", "India", 1],
          ["Senegal", "Japan", 3],
          ["Mali", "China", 5],
          ["Mali", "India", 1],
          ["Mali", "Japan", 3],
          ["Morocco", "China", 5],
          ["Morocco", "India", 1],
          ["Morocco", "Japan", 3],
          ["Japan", "Brazil", 1]
        ],
        "type": "dependencywheel",
        "name": "Dependency wheel series",
        "dataLabels": {
          "color": "#333",
          "style": {
            "textOutline": "none"
          },
          "textPath": {
            "enabled": true
          },
          "distance": 10
        },
        "size": "95%"
      }]
    }`,

  arcdiagram: `You are a chart generation expert. Generate a Highcharts configuration object for an arc diagram based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "title": {
        "text": "Main train connections in Europe"
      },
      "accessibility": {
        "description": "Arc diagram chart with circles of different sizes along the X axis, and connections drawn as arcs between them. From the chart we can see that Paris is the city with the most connections to other cities.",
        "point": {
          "valueDescriptionFormat": "Connection from {point.from} to {point.to}."
        }
      },
      "series": [{
        "keys": ["from", "to", "weight"],
        "type": "arcdiagram",
        "name": "Train connections",
        "linkWeight": 1.5,
        "centeredLinks": true,
        "dataLabels": {
          "rotation": 90,
          "y": 30,
          "verticalAlign": "top",
          "color": "black",
          "padding": 0
        },
        "offset": "65%",
        "data": [
          ["Hamburg", "Stuttgart", 1],
          ["Hamburg", "Frankfurt", 1],
          ["Hamburg", "München", 1],
          ["Hannover", "Wien", 1],
          ["Hannover", "München", 1],
          ["Berlin", "Wien", 1],
          ["Berlin", "München", 1],
          ["Berlin", "Stuttgart", 1],
          ["Berlin", "Frankfurt", 1],
          ["Berlin", "Köln", 1],
          ["Berlin", "Düsseldorf", 1],
          ["München", "Düsseldorf", 1],
          ["München", "Wien", 1],
          ["München", "Frankfurt", 1],
          ["München", "Köln", 1],
          ["München", "Amsterdam", 1],
          ["Stuttgart", "Wien", 1],
          ["Frankfurt", "Wien", 1],
          ["Frankfurt", "Amsterdam", 1],
          ["Frankfurt", "Paris", 1],
          ["Frankfurt", "Budapest", 1],
          ["Düsseldorf", "Wien", 1],
          ["Düsseldorf", "Hamburg", 1],
          ["Amsterdam", "Paris", 1],
          ["Paris", "Brest", 1],
          ["Paris", "Nantes", 1],
          ["Paris", "Bayonne", 1],
          ["Paris", "Bordeaux", 1],
          ["Paris", "Toulouse", 1],
          ["Paris", "Montpellier", 1],
          ["Paris", "Marseille", 1],
          ["Paris", "Nice", 1],
          ["Paris", "Milano", 1],
          ["Nantes", "Nice", 1],
          ["Bordeaux", "Lyon", 1],
          ["Nantes", "Lyon", 1],
          ["Milano", "München", 1],
          ["Milano", "Roma", 1],
          ["Milano", "Bari", 1],
          ["Milano", "Napoli", 1],
          ["Milano", "Brindisi", 1],
          ["Milano", "Lamezia Terme", 1],
          ["Torino", "Roma", 1],
          ["Venezia", "Napoli", 1],
          ["Roma", "Bari", 1],
          ["Roma", "Catania", 1],
          ["Roma", "Brindisi", 1],
          ["Catania", "Milano", 1]
        ]
      }]
    }`,

  timeline: `You are a chart generation expert. Generate a Highcharts configuration object for a timeline chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "timeline"
      },
      "accessibility": {
        "screenReaderSection": {
          "beforeChartFormat": "<h5>{chartTitle}</h5><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{viewTableButton}</div>"
        },
        "point": {
          "valueDescriptionFormat": "{index}. {point.label}. {point.description}."
        }
      },
      "xAxis": {
        "visible": false
      },
      "yAxis": {
        "visible": false
      },
      "title": {
        "text": "Timeline Example"
      },
      "colors": [
        "#4185F3",
        "#427CDD",
        "#406AB2",
        "#3E5A8E",
        "#3B4A68",
        "#363C46"
      ],
      "series": [{
        "data": [
          {
            "name": "Event 1",
            "description": "Description of event 1"
          },
          {
            "name": "Event 2",
            "description": "Description of event 2"
          }
        ]
      }]
    }`,

  pareto: `You are a chart generation expert. Generate a Highcharts configuration object for a Pareto chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "column"
      },
      "title": {
        "text": "Pareto Analysis"
      },
      "tooltip": {
        "shared": true
      },
      "xAxis": {
        "categories": ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"],
        "crosshair": true
      },
      "yAxis": [{
        "title": {
          "text": ""
        }
      }, {
        "title": {
          "text": ""
        },
        "minPadding": 0,
        "maxPadding": 0,
        "max": 100,
        "min": 0,
        "opposite": true,
        "labels": {
          "format": "{value}%"
        }
      }],
      "series": [{
        "type": "pareto",
        "name": "Pareto",
        "yAxis": 1,
        "zIndex": 10,
        "baseSeries": 1,
        "tooltip": {
          "valueDecimals": 2,
          "valueSuffix": "%"
        }
      }, {
        "name": "Values",
        "type": "column",
        "zIndex": 2,
        "data": [755, 222, 151, 86, 72]
      }]
    }`,

  bellcurve: `You are a chart generation expert. Generate a Highcharts configuration object for a bell curve chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "title": {
        "text": "Bell Curve Distribution"
      },
      "xAxis": [{
        "title": {
          "text": "Data"
        },
        "alignTicks": false
      }, {
        "title": {
          "text": "Bell curve"
        },
        "alignTicks": false,
        "opposite": true
      }],
      "yAxis": [{
        "title": { "text": "Data" }
      }, {
        "title": { "text": "Bell curve" },
        "opposite": true
      }],
      "series": [{
        "name": "Bell curve",
        "type": "bellcurve",
        "xAxis": 1,
        "yAxis": 1,
        "baseSeries": 1,
        "zIndex": -1
      }, {
        "name": "Data",
        "type": "scatter",
        "data": [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1],
        "accessibility": {
          "exposeAsGroupOnly": true
        },
        "marker": {
          "radius": 1.5
        }
      }]
    }`,

  funnel: `You are a chart generation expert. Generate a Highcharts configuration object for a funnel chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "funnel"
      },
      "title": {
        "text": "Sales funnel"
      },
      "plotOptions": {
        "series": {
          "dataLabels": {
            "enabled": true,
            "format": "<b>{point.name}</b> ({point.y:,.0f})",
            "softConnector": true
          },
          "center": ["40%", "50%"],
          "neckWidth": "30%",
          "neckHeight": "25%",
          "width": "80%"
        }
      },
      "legend": {
        "enabled": false
      },
      "series": [{
        "name": "Unique users",
        "data": [
          ["Website visits", 15654],
          ["Downloads", 4064],
          ["Requested price list", 1987],
          ["Invoice sent", 976],
          ["Finalized", 846]
        ]
      }],
      "responsive": {
        "rules": [{
          "condition": {
            "maxWidth": 500
          },
          "chartOptions": {
            "plotOptions": {
              "series": {
                "dataLabels": {
                  "inside": true
                },
                "center": ["50%", "50%"],
                "width": "100%"
              }
            }
          }
        }]
      }
    }`,

  histogram: `You are a chart generation expert. Generate a Highcharts configuration object for a histogram chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "title": {
        "text": "Histogram Distribution"
      },
      "xAxis": [{
        "title": { "text": "Data" },
        "alignTicks": false
      }, {
        "title": { "text": "Histogram" },
        "alignTicks": false,
        "opposite": true
      }],
      "yAxis": [{
        "title": { "text": "Data" }
      }, {
        "title": { "text": "Histogram" },
        "opposite": true
      }],
      "plotOptions": {
        "histogram": {
          "accessibility": {
            "point": {
              "valueDescriptionFormat": "{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}."
            }
          }
        }
      },
      "series": [{
        "name": "Histogram",
        "type": "histogram",
        "xAxis": 1,
        "yAxis": 1,
        "baseSeries": "s1",
        "zIndex": -1
      }, {
        "name": "Data",
        "type": "scatter",
        "data": [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1],
        "id": "s1",
        "marker": {
          "radius": 1.5
        }
      }]
    }`,

  arearange: `You are a chart generation expert. Generate a Highcharts configuration object for an arearange chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax. IMPORTANT: Limit the data array to maximum 10 points to avoid response truncation. Example:
    {
      "chart": {
        "type": "arearange",
        "zooming": {
          "type": "x"
        }
      },
      "title": {
        "text": "Temperature Range Over Time",
        "align": "left"
      },
      "xAxis": {
        "type": "datetime",
        "accessibility": {
          "rangeDescription": "Range: Jan 1st to Dec 31st"
        }
      },
      "yAxis": {
        "title": {
          "text": null
        }
      },
      "tooltip": {
        "crosshairs": true,
        "shared": true,
        "valueSuffix": "°C",
        "xDateFormat": "%A, %b %e"
      },
      "legend": {
        "enabled": false
      },
      "series": [{
        "name": "Temperature Range",
        "data": [
          [1701388800000, -5, 5],
          [1701475200000, -4, 6],
          [1701561600000, -2, 8],
          [1701648000000, -3, 7],
          [1701734400000, -1, 9],
          [1701820800000, -2, 8],
          [1701907200000, -4, 6],
          [1701993600000, -3, 7],
          [1702080000000, -2, 8],
          [1702166400000, -1, 9]
        ],
        "color": {
          "linearGradient": {
            "x1": 0,
            "x2": 0,
            "y1": 0,
            "y2": 1
          },
          "stops": [
            [0, "#ff0000"],
            [1, "#0000ff"]
          ]
        }
      }]
    }`,

  bar: `You are a chart generation expert. Generate a Highcharts configuration object for a vertical bar chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "bar"
      },
      "title": {
        "text": "Historic World Population by Region",
        "align": "left"
      },
      "xAxis": {
        "categories": ["Africa", "America", "Asia", "Europe"],
        "title": {
          "text": null
        },
        "gridLineWidth": 1,
        "lineWidth": 0
      },
      "yAxis": {
        "min": 0,
        "title": {
          "text": "Population (millions)",
          "align": "high"
        },
        "labels": {
          "overflow": "justify"
        },
        "gridLineWidth": 0
      },
      "tooltip": {
        "valueSuffix": " millions"
      },
      "plotOptions": {
        "bar": {
          "borderRadius": "50%",
          "dataLabels": {
            "enabled": true
          },
          "groupPadding": 0.1
        }
      },
      "legend": {
        "layout": "vertical",
        "align": "right",
        "verticalAlign": "top",
        "x": -40,
        "y": 80,
        "floating": true,
        "borderWidth": 1,
        "shadow": true
      },
      "series": [{
        "name": "Year 1990",
        "data": [632, 727, 3202, 721]
      }, {
        "name": "Year 2000",
        "data": [814, 841, 3714, 726]
      }]
    }`,

  column: `You are a chart generation expert. Generate a Highcharts configuration object for a horizontal column chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "column"
      },
      "title": {
        "text": "Corn vs wheat estimated production for 2023",
        "align": "left"
      },
      "xAxis": {
        "categories": ["USA", "China", "Brazil", "EU", "Argentina", "India"],
        "crosshair": true,
        "accessibility": {
          "description": "Countries"
        }
      },
      "yAxis": {
        "min": 0,
        "title": {
          "text": "1000 metric tons (MT)"
        }
      },
      "tooltip": {
        "valueSuffix": " (1000 MT)"
      },
      "plotOptions": {
        "column": {
          "pointPadding": 0.2,
          "borderWidth": 0
        }
      },
      "series": [{
        "name": "Corn",
        "data": [387749, 280000, 129000, 64300, 54000, 34300]
      }, {
        "name": "Wheat",
        "data": [45321, 140000, 10000, 140500, 19500, 113500]
      }]
    }`,

  stackedcolumn: `You are a chart generation expert. Generate a Highcharts configuration object for a stacked column chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "column"
      },
      "title": {
        "text": "Major trophies for some English teams",
        "align": "left"
      },
      "xAxis": {
        "categories": ["Arsenal", "Chelsea", "Liverpool", "Manchester United"]
      },
      "yAxis": {
        "min": 0,
        "title": {
          "text": "Count trophies"
        },
        "stackLabels": {
          "enabled": true
        }
      },
      "legend": {
        "align": "left",
        "x": 70,
        "verticalAlign": "top",
        "y": 70,
        "floating": true,
        "borderWidth": 1,
        "shadow": false
      },
      "tooltip": {
        "headerFormat": "<b>{category}</b><br/>",
        "pointFormat": "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
      },
      "plotOptions": {
        "column": {
          "stacking": "normal",
          "dataLabels": {
            "enabled": true
          }
        }
      },
      "series": [{
        "name": "Series 1",
        "data": [3, 5, 1, 13]
      }, {
        "name": "Series 2",
        "data": [14, 8, 8, 12]
      }, {
        "name": "Series 3",
        "data": [0, 2, 6, 3]
      }]
    }`,

  stackedbar: `You are a chart generation expert. Generate a Highcharts configuration object for a stacked bar chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "bar"
      },
      "title": {
        "text": "Ferry passengers by vehicle type 2024",
        "align": "left"
      },
      "xAxis": {
        "categories": ["January", "February", "March", "April", "May"]
      },
      "yAxis": {
        "min": 0,
        "title": {
          "text": ""
        }
      },
      "legend": {
        "reversed": true
      },
      "plotOptions": {
        "series": {
          "stacking": "normal",
          "dataLabels": {
            "enabled": true
          }
        }
      },
      "series": [{
        "name": "Category 1",
        "data": [74, 27, 52, 93, 1272]
      }, {
        "name": "Category 2",
        "data": [2106, 2398, 3046, 3195, 4916]
      }, {
        "name": "Category 3",
        "data": [12213, 12721, 15242, 16518, 25037]
      }]
    }`,

  columnrange: `You are a chart generation expert. Generate a Highcharts configuration object for a column range chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "columnrange",
        "inverted": true
      },
      "title": {
        "text": "Temperature variation by month"
      },
      "xAxis": {
        "categories": [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
      },
      "yAxis": {
        "title": {
          "text": "Temperature ( °C )"
        }
      },
      "tooltip": {
        "valueSuffix": "°C"
      },
      "plotOptions": {
        "columnrange": {
          "borderRadius": "50%",
          "dataLabels": {
            "enabled": true,
            "format": "{y}°C"
          }
        }
      },
      "legend": {
        "enabled": false
      },
      "series": [{
        "name": "Temperatures",
        "data": [
          [-9.5, 8.0],
          [-7.8, 8.3],
          [-13.1, 9.2],
          [-4.4, 15.7],
          [-1.0, 20.8],
          [3.1, 28.4]
        ]
      }]
    }`,

  stackedpercentage: `You are a chart generation expert. Generate a Highcharts configuration object for a stacked percentage column chart based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "column"
      },
      "title": {
        "text": "Transport Mode Distribution",
        "align": "left"
      },
      "xAxis": {
        "categories": ["2019", "2020", "2021"]
      },
      "yAxis": {
        "min": 0,
        "title": {
          "text": "Percent"
        }
      },
      "tooltip": {
        "pointFormat": "<span style=\\\"color:{series.color}\\\">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>",
        "shared": true
      },
      "plotOptions": {
        "column": {
          "stacking": "percent",
          "dataLabels": {
            "enabled": true,
            "format": "{point.percentage:.0f}%"
          }
        }
      },
      "series": [{
        "name": "Category 1",
        "data": [434, 290, 307]
      }, {
        "name": "Category 2",
        "data": [272, 153, 156]
      }, {
        "name": "Category 3",
        "data": [13, 7, 8]
      }]
    }`,

  negativestack: `You are a chart generation expert. Generate a Highcharts configuration object for a bar chart with negative stack (like a population pyramid) based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "bar"
      },
      "title": {
        "text": "Population pyramid",
        "align": "left"
      },
      "xAxis": [{
        "categories": ["0-4", "5-9", "10-14", "15-19", "20-24"],
        "reversed": false,
        "labels": {
          "step": 1
        }
      }, {
        "opposite": true,
        "reversed": false,
        "categories": ["0-4", "5-9", "10-14", "15-19", "20-24"],
        "linkedTo": 0,
        "labels": {
          "step": 1
        }
      }],
      "yAxis": {
        "title": {
          "text": null
        },
        "labels": {
          "formatter": "function() { return Math.abs(this.value) + '%'; }"
        }
      },
      "plotOptions": {
        "series": {
          "stacking": "normal",
          "borderRadius": "50%"
        }
      },
      "tooltip": {
        "formatter": "function() { return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>Population: ' + Math.abs(this.point.y).toFixed(2) + '%'; }"
      },
      "series": [{
        "name": "Male",
        "data": [-2.2, -2.1, -2.2, -2.4, -2.7]
      }, {
        "name": "Female",
        "data": [2.1, 2.0, 2.1, 2.3, 2.6]
      }]
    }`,

  negativebar: `You are a chart generation expert. Generate a Highcharts configuration object for a column chart with negative values based on the user's description.
    Return ONLY the raw JSON configuration object, without any markdown formatting or code block syntax, like this example:
    {
      "chart": {
        "type": "column"
      },
      "title": {
        "text": "Column chart with negative values"
      },
      "xAxis": {
        "categories": ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"]
      },
      "plotOptions": {
        "column": {
          "borderRadius": "25%"
        }
      },
      "series": [{
        "name": "Series 1",
        "data": [5, 3, 4, 7, 2]
      }, {
        "name": "Series 2",
        "data": [2, -2, -3, 2, 1]
      }, {
        "name": "Series 3",
        "data": [3, 4, 4, -2, 5]
      }]
    }`,
};

const CHART_DETECTION_PROMPT = `Based on the following description, determine the most suitable chart type from these options:
- linear (for trends over time, time series data)
- pie (for showing parts of a whole, proportions)
- area (for showing cumulative totals or ranges over time)
- donut (for showing proportions with emphasis on central metric)
- variableradius (for showing three-dimensional data relationships)
- bubble (for showing relationships between three numeric variables)
- dualaxes (for comparing two different scales)
- bullet (for comparing measures to targets with qualitative ranges)
- heatmap (for showing patterns in a matrix of data)
- treemap (for displaying hierarchical data using nested rectangles)
- organization (for displaying organizational hierarchy)
- treegraph (for displaying hierarchical data using nested rectangles)
- sankey (for showing flow quantities between nodes)
- pyramid (for displaying sales pyramid)
- dependencywheel (for displaying dependency wheel)
- arcdiagram (for showing connections between nodes in a semi-circular layout)
- timeline (for displaying sequential events or historical data chronologically)
- pareto (for identifying the most significant factors in a dataset)
- funnel (for showing stages in a process and conversion rates)
- histogram (for showing distribution of numerical data)
- arearange (for showing a range of values over time, like temperature ranges)
- bar (for comparing categories with vertical bars)
- column (for comparing categories with horizontal columns)
- stackedcolumn (for comparing parts of a whole across categories vertically)
- stackedbar (for comparing parts of a whole across categories horizontally)
- columnrange (for showing ranges of values with vertical columns)
- stackedpercentage (for showing percentage distribution across categories)
- negativestack (for population pyramids or back-to-back comparisons)
- negativebar (for showing positive and negative values in columns)

Consider:
- Linear charts are best for showing trends and changes over time
- Pie/Donut charts are best for showing proportions of a whole
- Area charts are best for showing cumulative totals or ranges
- Variable radius pie charts are good for showing multiple dimensions of data
- Bubble charts are ideal for plotting three variables
- Dual axes charts are perfect for comparing metrics with different scales
- Bullet graphs are excellent for comparing actual values to targets with context
- Heatmaps are excellent for showing patterns across two categorical dimensions
- Treemaps are perfect for showing hierarchical data with size relationships
- Organization charts are perfect for displaying organizational hierarchy
- Treegraphs are perfect for displaying hierarchical data using nested rectangles
- Sankey diagrams are perfect for visualizing flow quantities between different stages or categories
- Pyramid charts are perfect for displaying sales pyramid
- Dependency wheels are perfect for displaying dependency wheel
- Arc diagrams are excellent for showing relationships between nodes in a linear arrangement with arc connections
- Timeline charts are perfect for displaying sequential events or historical data in chronological order
- Pareto charts are excellent for identifying the vital few versus trivial many
- Funnel charts are excellent for visualizing stages in a process and conversion rates
- Histogram charts are perfect for showing the distribution of continuous numerical data
- Arearange charts are perfect for visualizing ranges of values over time, such as temperature variations or price ranges
- Bar charts are excellent for comparing values across categories with vertical bars
- Column charts are perfect for comparing values across categories with horizontal columns
- Stacked column charts are excellent for showing how different components contribute to a total vertically
- Stacked bar charts are perfect for showing how different components contribute to a total horizontally
- Column range charts are excellent for showing ranges of values like temperature or price ranges
- Stacked percentage column charts are perfect for showing relative proportions that sum to 100%
- Negative stack charts are perfect for population pyramids or comparing opposing metrics
- Negative bar charts are excellent for showing both positive and negative values in a column format

If the data is not clear make just a guess from the list and imagine some data. Be creative.

Respond with ONLY ONE of these exact terms (linear, pie, area, donut, variableradius, bubble, dualaxes, bullet, heatmap, treemap, organization, treegraph, sankey, pyramid, dependencywheel, arcdiagram, timeline, pareto, funnel, histogram, arearange, bar, column, stackedcolumn, stackedbar, columnrange, stackedpercentage, negativestack, negativebar), nothing else.`;

async function generateChart(prompt: string, systemPrompt: string): Promise<string> {
  const completion = await openai.chat.completions.create({
    model: "o3-mini",
    messages: [
      {
        role: "user",
        content: `As a chart generation expert, create a Highcharts configuration based on this example and description.\n\nExample configuration:\n${systemPrompt}\n\nDescription: ${prompt}`
      }
    ],
    max_completion_tokens: 16000,
  });

  const chartConfig = completion.choices[0]?.message?.content;
  
  if (!chartConfig) {
    throw new Error('Empty response from OpenAI');
  }

  try {
    // Add logging to see what we're getting
    console.log('Raw OpenAI response:', chartConfig);
    
    // Remove markdown code block if present
    let cleanConfig = chartConfig
      .replace(/^```json\n/, '')  // Remove opening ```json
      .replace(/\n```$/, '')      // Remove closing ```
      .replace(/\n/g, '')         // Remove newlines
      .replace(/\s+/g, ' ')       // Normalize spaces
      .trim();

    // If it's not wrapped in curly braces, wrap it
    if (!cleanConfig.startsWith('{')) {
      cleanConfig = '{' + cleanConfig;
    }
    if (!cleanConfig.endsWith('}')) {
      cleanConfig = cleanConfig + '}';
    }

    // Try to parse it to validate
    const parsed = JSON.parse(cleanConfig);
    
    // Add chart type if not present
    if (!parsed.chart) {
      parsed.chart = { type: 'line' };
    }

    return JSON.stringify(parsed);
  } catch (error) {
    console.error('JSON parsing error:', error);
    console.error('Received content:', chartConfig);
    
    // Attempt to fix common issues
    try {
      // Remove markdown code block if present and convert to proper JSON
      const fixedConfig = chartConfig
        .replace(/^```json\n/, '')  // Remove opening ```json
        .replace(/\n```$/, '')      // Remove closing ```
        .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":') // Ensure property names are quoted
        .replace(/'/g, '"')         // Replace single quotes with double quotes
        .replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas
      
      const parsed = JSON.parse(fixedConfig);
      return JSON.stringify(parsed);
    } catch (e) {
      throw new Error('Invalid chart configuration: ' + error.message);
    }
  }
}

export async function POST(req: Request) {
  try {
    const { prompt, chartType, detectChartType } = await req.json();
    
    console.log('Received request:', { prompt, chartType, detectChartType });

    // If detectChartType is true, first determine the best chart type
    let finalChartType = chartType;
    if (detectChartType) {
      const detection = await openai.chat.completions.create({
        model: "o1-mini",
        messages: [
          {
            role: "user",
            content: `As a chart type detection expert, analyze this description and choose the best chart type. ${CHART_DETECTION_PROMPT}\n\nDescription: ${prompt}`
          }
        ],
        max_completion_tokens: 16000,
      });

      finalChartType = detection.choices[0]?.message?.content?.trim().toLowerCase() || 'line';
      console.log('Detected chart type:', finalChartType);
    }

    const systemPrompt = CHART_TYPES[finalChartType as keyof typeof CHART_TYPES];
    if (!systemPrompt) {
      throw new Error(`Invalid chart type: ${finalChartType}`);
    }

    const chart = await generateChart(prompt, systemPrompt);
    
    return new Response(
      JSON.stringify({ chart }), 
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error) {
    console.error('Chart generation error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate chart',
        details: error.message 
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
