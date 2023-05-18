/**
 * Create a chart
 */
var chart = AmCharts.makeChart("chartdiv", {
  type: "serial",
  theme: "light",
  addClassNames: true,
  legend: {
    horizontalGap: 10,
    maxColumns: 1,
    position: "right",
    useGraphSettings: true,
    markerSize: 10,
    listeners: [
      {
        event: "rollOverItem",
        method: function (event) {
          setOpacity(event.chart.graphs[event.dataItem.index], 1);
        },
      },
      {
        event: "rollOutItem",
        method: function (event) {
          setOpacity(event.chart.graphs[event.dataItem.index], 0.5);
        },
      },
    ],
  },
  dataProvider: [
    {
      year: 2003,
      Dollar: 2.5,
    },
    {
      year: 2004,
      Dollar: 2.6,
    },
    {
      year: 2005,
      Dollar: 2.8,
    },
    {
      year: 2005,
      Dollar: 2.8,
    },
    {
      year: 2005,
      Dollar: 2.8,
    },
    {
      year: 2005,
      Dollar: 2.8,
    },
    {
      year: 2005,
      Dollar: 2.8,
    },
  ],
  valueAxes: [
    {
      stackType: "regular",
      axisAlpha: 0.3,
      gridAlpha: 0.1,
      color: "white",
    },
  ],
  graphs: [
    {
      id: "g1",
      bullet: "round",
      bulletAlpha: 0.3,
      lineAlpha: 0.3,
      lineThickness: 3,
      title: "Dollar",
      color: "#ffffff",
      valueField: "Dollar",
      labelText: "[[value]]",
      lineColor: "#ffffff",
    },
  ],
  categoryField: "year",
  categoryAxis: {
    gridAlpha: 0.1,
    position: "left",
    color: "white",
  },
});

/**
 * Define functions that set opacity of the line graphs
 */
chart.timeout;

function setOpacity(graph, opacity) {
  console.log(graph.id);
  var className = "amcharts-graph-" + graph.id;
  var items = document.getElementsByClassName(className);
  if (undefined === items) return;
  for (var x in items) {
    if ("object" !== typeof items[x]) continue;
    var path = items[x].getElementsByTagName("path")[0];
    if (undefined !== path) {
      // set line opacity
      path.style.strokeOpacity = opacity;
    }

    // set bullet opacity
    var bullets = items[x].getElementsByClassName("amcharts-graph-bullet");
    for (var y in bullets) {
      if ("object" !== typeof bullets[y]) continue;
      bullets[y].style.fillOpacity = opacity;
    }

    // set label opacity
    var labels = items[x].getElementsByClassName("amcharts-graph-label");
    for (var y in labels) {
      if ("object" !== typeof labels[y]) continue;
      labels[y].style.opacity = opacity == 1 ? 1 : 0;
    }
  }
}
