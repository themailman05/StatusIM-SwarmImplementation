var series1 = { type: "scatter", mode: "lines", name: "Whisper Messages (Public Channels)", x: ["2018-10-05T23:31:40", "2018-10-06T23:31:40", "2018-10-07T23:31:40", "2018-10-08T23:31:40", "2018-10-09T23:31:40", "2018-10-10T23:31:40", "2018-10-11T23:31:40", "2018-10-12T23:31:40", "2018-10-13T23:31:40", "2018-10-14T23:31:40", "2018-10-15T23:31:40"], y: ["0.0", "604.3865067547068", "2922.1882064228607", "1227.5039555210424", "1650.8006473982387", "1374.1084770156426", "2545.999461994914", "2400.8470097758145", "723.2528834027371", "222.0771101076762", "2806.0532275962482"], line: {color: "#17BECF"}}
Plotly.newPlot("whisper-messages-daily", [series1], {title: "Status.im Daily Whisper Messages (Public Channels)"});
