/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 266.0, "minX": 0.0, "maxY": 9819.0, "series": [{"data": [[0.0, 266.0], [0.1, 266.0], [0.2, 266.0], [0.3, 271.0], [0.4, 271.0], [0.5, 274.0], [0.6, 274.0], [0.7, 274.0], [0.8, 314.0], [0.9, 314.0], [1.0, 317.0], [1.1, 317.0], [1.2, 317.0], [1.3, 317.0], [1.4, 317.0], [1.5, 321.0], [1.6, 321.0], [1.7, 321.0], [1.8, 326.0], [1.9, 326.0], [2.0, 328.0], [2.1, 328.0], [2.2, 328.0], [2.3, 328.0], [2.4, 328.0], [2.5, 362.0], [2.6, 362.0], [2.7, 362.0], [2.8, 364.0], [2.9, 364.0], [3.0, 364.0], [3.1, 364.0], [3.2, 364.0], [3.3, 370.0], [3.4, 370.0], [3.5, 383.0], [3.6, 383.0], [3.7, 383.0], [3.8, 387.0], [3.9, 387.0], [4.0, 389.0], [4.1, 389.0], [4.2, 389.0], [4.3, 397.0], [4.4, 397.0], [4.5, 412.0], [4.6, 412.0], [4.7, 412.0], [4.8, 418.0], [4.9, 418.0], [5.0, 421.0], [5.1, 421.0], [5.2, 421.0], [5.3, 432.0], [5.4, 432.0], [5.5, 435.0], [5.6, 435.0], [5.7, 435.0], [5.8, 459.0], [5.9, 459.0], [6.0, 464.0], [6.1, 464.0], [6.2, 464.0], [6.3, 480.0], [6.4, 480.0], [6.5, 483.0], [6.6, 483.0], [6.7, 483.0], [6.8, 491.0], [6.9, 491.0], [7.0, 494.0], [7.1, 494.0], [7.2, 494.0], [7.3, 515.0], [7.4, 515.0], [7.5, 526.0], [7.6, 526.0], [7.7, 526.0], [7.8, 528.0], [7.9, 528.0], [8.0, 533.0], [8.1, 533.0], [8.2, 533.0], [8.3, 534.0], [8.4, 534.0], [8.5, 535.0], [8.6, 535.0], [8.7, 535.0], [8.8, 538.0], [8.9, 538.0], [9.0, 543.0], [9.1, 543.0], [9.2, 543.0], [9.3, 546.0], [9.4, 546.0], [9.5, 552.0], [9.6, 552.0], [9.7, 552.0], [9.8, 590.0], [9.9, 590.0], [10.0, 604.0], [10.1, 604.0], [10.2, 604.0], [10.3, 617.0], [10.4, 617.0], [10.5, 625.0], [10.6, 625.0], [10.7, 625.0], [10.8, 629.0], [10.9, 629.0], [11.0, 631.0], [11.1, 631.0], [11.2, 631.0], [11.3, 632.0], [11.4, 632.0], [11.5, 633.0], [11.6, 633.0], [11.7, 633.0], [11.8, 637.0], [11.9, 637.0], [12.0, 643.0], [12.1, 643.0], [12.2, 643.0], [12.3, 649.0], [12.4, 649.0], [12.5, 664.0], [12.6, 664.0], [12.7, 664.0], [12.8, 675.0], [12.9, 675.0], [13.0, 680.0], [13.1, 680.0], [13.2, 680.0], [13.3, 680.0], [13.4, 680.0], [13.5, 683.0], [13.6, 683.0], [13.7, 683.0], [13.8, 689.0], [13.9, 689.0], [14.0, 695.0], [14.1, 695.0], [14.2, 695.0], [14.3, 702.0], [14.4, 702.0], [14.5, 702.0], [14.6, 702.0], [14.7, 702.0], [14.8, 708.0], [14.9, 708.0], [15.0, 709.0], [15.1, 709.0], [15.2, 709.0], [15.3, 717.0], [15.4, 717.0], [15.5, 727.0], [15.6, 727.0], [15.7, 727.0], [15.8, 728.0], [15.9, 728.0], [16.0, 728.0], [16.1, 728.0], [16.2, 728.0], [16.3, 729.0], [16.4, 729.0], [16.5, 734.0], [16.6, 734.0], [16.7, 734.0], [16.8, 735.0], [16.9, 735.0], [17.0, 736.0], [17.1, 736.0], [17.2, 736.0], [17.3, 742.0], [17.4, 742.0], [17.5, 746.0], [17.6, 746.0], [17.7, 746.0], [17.8, 747.0], [17.9, 747.0], [18.0, 774.0], [18.1, 774.0], [18.2, 774.0], [18.3, 774.0], [18.4, 774.0], [18.5, 776.0], [18.6, 776.0], [18.7, 776.0], [18.8, 780.0], [18.9, 780.0], [19.0, 791.0], [19.1, 791.0], [19.2, 791.0], [19.3, 799.0], [19.4, 799.0], [19.5, 822.0], [19.6, 822.0], [19.7, 822.0], [19.8, 827.0], [19.9, 827.0], [20.0, 832.0], [20.1, 832.0], [20.2, 832.0], [20.3, 840.0], [20.4, 840.0], [20.5, 843.0], [20.6, 843.0], [20.7, 843.0], [20.8, 846.0], [20.9, 846.0], [21.0, 853.0], [21.1, 853.0], [21.2, 853.0], [21.3, 855.0], [21.4, 855.0], [21.5, 855.0], [21.6, 855.0], [21.7, 855.0], [21.8, 871.0], [21.9, 871.0], [22.0, 871.0], [22.1, 871.0], [22.2, 871.0], [22.3, 875.0], [22.4, 875.0], [22.5, 893.0], [22.6, 893.0], [22.7, 893.0], [22.8, 898.0], [22.9, 898.0], [23.0, 900.0], [23.1, 900.0], [23.2, 900.0], [23.3, 910.0], [23.4, 910.0], [23.5, 912.0], [23.6, 912.0], [23.7, 912.0], [23.8, 914.0], [23.9, 914.0], [24.0, 930.0], [24.1, 930.0], [24.2, 930.0], [24.3, 943.0], [24.4, 943.0], [24.5, 944.0], [24.6, 944.0], [24.7, 944.0], [24.8, 961.0], [24.9, 961.0], [25.0, 966.0], [25.1, 966.0], [25.2, 966.0], [25.3, 969.0], [25.4, 969.0], [25.5, 976.0], [25.6, 976.0], [25.7, 976.0], [25.8, 978.0], [25.9, 978.0], [26.0, 990.0], [26.1, 990.0], [26.2, 990.0], [26.3, 1015.0], [26.4, 1015.0], [26.5, 1015.0], [26.6, 1015.0], [26.7, 1015.0], [26.8, 1027.0], [26.9, 1027.0], [27.0, 1029.0], [27.1, 1029.0], [27.2, 1029.0], [27.3, 1038.0], [27.4, 1038.0], [27.5, 1044.0], [27.6, 1044.0], [27.7, 1044.0], [27.8, 1057.0], [27.9, 1057.0], [28.0, 1059.0], [28.1, 1059.0], [28.2, 1059.0], [28.3, 1060.0], [28.4, 1060.0], [28.5, 1064.0], [28.6, 1064.0], [28.7, 1064.0], [28.8, 1065.0], [28.9, 1065.0], [29.0, 1065.0], [29.1, 1065.0], [29.2, 1065.0], [29.3, 1066.0], [29.4, 1066.0], [29.5, 1069.0], [29.6, 1069.0], [29.7, 1069.0], [29.8, 1077.0], [29.9, 1077.0], [30.0, 1082.0], [30.1, 1082.0], [30.2, 1082.0], [30.3, 1087.0], [30.4, 1087.0], [30.5, 1091.0], [30.6, 1091.0], [30.7, 1091.0], [30.8, 1097.0], [30.9, 1097.0], [31.0, 1100.0], [31.1, 1100.0], [31.2, 1100.0], [31.3, 1103.0], [31.4, 1103.0], [31.5, 1109.0], [31.6, 1109.0], [31.7, 1109.0], [31.8, 1112.0], [31.9, 1112.0], [32.0, 1116.0], [32.1, 1116.0], [32.2, 1116.0], [32.3, 1116.0], [32.4, 1116.0], [32.5, 1117.0], [32.6, 1117.0], [32.7, 1117.0], [32.8, 1120.0], [32.9, 1120.0], [33.0, 1131.0], [33.1, 1131.0], [33.2, 1131.0], [33.3, 1135.0], [33.4, 1135.0], [33.5, 1137.0], [33.6, 1137.0], [33.7, 1137.0], [33.8, 1138.0], [33.9, 1138.0], [34.0, 1146.0], [34.1, 1146.0], [34.2, 1146.0], [34.3, 1158.0], [34.4, 1158.0], [34.5, 1159.0], [34.6, 1159.0], [34.7, 1159.0], [34.8, 1159.0], [34.9, 1159.0], [35.0, 1174.0], [35.1, 1174.0], [35.2, 1174.0], [35.3, 1179.0], [35.4, 1179.0], [35.5, 1181.0], [35.6, 1181.0], [35.7, 1181.0], [35.8, 1182.0], [35.9, 1182.0], [36.0, 1187.0], [36.1, 1187.0], [36.2, 1187.0], [36.3, 1187.0], [36.4, 1187.0], [36.5, 1191.0], [36.6, 1191.0], [36.7, 1191.0], [36.8, 1194.0], [36.9, 1194.0], [37.0, 1198.0], [37.1, 1198.0], [37.2, 1198.0], [37.3, 1199.0], [37.4, 1199.0], [37.5, 1204.0], [37.6, 1204.0], [37.7, 1204.0], [37.8, 1206.0], [37.9, 1206.0], [38.0, 1207.0], [38.1, 1207.0], [38.2, 1207.0], [38.3, 1211.0], [38.4, 1211.0], [38.5, 1222.0], [38.6, 1222.0], [38.7, 1222.0], [38.8, 1222.0], [38.9, 1222.0], [39.0, 1244.0], [39.1, 1244.0], [39.2, 1244.0], [39.3, 1245.0], [39.4, 1245.0], [39.5, 1249.0], [39.6, 1249.0], [39.7, 1249.0], [39.8, 1258.0], [39.9, 1258.0], [40.0, 1260.0], [40.1, 1260.0], [40.2, 1260.0], [40.3, 1268.0], [40.4, 1268.0], [40.5, 1270.0], [40.6, 1270.0], [40.7, 1270.0], [40.8, 1274.0], [40.9, 1274.0], [41.0, 1290.0], [41.1, 1290.0], [41.2, 1290.0], [41.3, 1294.0], [41.4, 1294.0], [41.5, 1300.0], [41.6, 1300.0], [41.7, 1300.0], [41.8, 1301.0], [41.9, 1301.0], [42.0, 1301.0], [42.1, 1301.0], [42.2, 1301.0], [42.3, 1305.0], [42.4, 1305.0], [42.5, 1319.0], [42.6, 1319.0], [42.7, 1319.0], [42.8, 1325.0], [42.9, 1325.0], [43.0, 1331.0], [43.1, 1331.0], [43.2, 1331.0], [43.3, 1340.0], [43.4, 1340.0], [43.5, 1346.0], [43.6, 1346.0], [43.7, 1346.0], [43.8, 1349.0], [43.9, 1349.0], [44.0, 1350.0], [44.1, 1350.0], [44.2, 1350.0], [44.3, 1351.0], [44.4, 1351.0], [44.5, 1357.0], [44.6, 1357.0], [44.7, 1357.0], [44.8, 1368.0], [44.9, 1368.0], [45.0, 1369.0], [45.1, 1369.0], [45.2, 1369.0], [45.3, 1391.0], [45.4, 1391.0], [45.5, 1395.0], [45.6, 1395.0], [45.7, 1395.0], [45.8, 1399.0], [45.9, 1399.0], [46.0, 1401.0], [46.1, 1401.0], [46.2, 1401.0], [46.3, 1404.0], [46.4, 1404.0], [46.5, 1407.0], [46.6, 1407.0], [46.7, 1407.0], [46.8, 1407.0], [46.9, 1407.0], [47.0, 1409.0], [47.1, 1409.0], [47.2, 1409.0], [47.3, 1410.0], [47.4, 1410.0], [47.5, 1411.0], [47.6, 1411.0], [47.7, 1411.0], [47.8, 1427.0], [47.9, 1427.0], [48.0, 1427.0], [48.1, 1427.0], [48.2, 1427.0], [48.3, 1439.0], [48.4, 1439.0], [48.5, 1441.0], [48.6, 1441.0], [48.7, 1441.0], [48.8, 1454.0], [48.9, 1454.0], [49.0, 1468.0], [49.1, 1468.0], [49.2, 1468.0], [49.3, 1496.0], [49.4, 1496.0], [49.5, 1498.0], [49.6, 1498.0], [49.7, 1498.0], [49.8, 1499.0], [49.9, 1499.0], [50.0, 1508.0], [50.1, 1508.0], [50.2, 1508.0], [50.3, 1513.0], [50.4, 1513.0], [50.5, 1516.0], [50.6, 1516.0], [50.7, 1516.0], [50.8, 1523.0], [50.9, 1523.0], [51.0, 1526.0], [51.1, 1526.0], [51.2, 1526.0], [51.3, 1528.0], [51.4, 1528.0], [51.5, 1529.0], [51.6, 1529.0], [51.7, 1529.0], [51.8, 1536.0], [51.9, 1536.0], [52.0, 1536.0], [52.1, 1536.0], [52.2, 1536.0], [52.3, 1548.0], [52.4, 1548.0], [52.5, 1551.0], [52.6, 1551.0], [52.7, 1551.0], [52.8, 1555.0], [52.9, 1555.0], [53.0, 1567.0], [53.1, 1567.0], [53.2, 1567.0], [53.3, 1576.0], [53.4, 1576.0], [53.5, 1583.0], [53.6, 1583.0], [53.7, 1583.0], [53.8, 1587.0], [53.9, 1587.0], [54.0, 1590.0], [54.1, 1590.0], [54.2, 1590.0], [54.3, 1590.0], [54.4, 1590.0], [54.5, 1590.0], [54.6, 1590.0], [54.7, 1590.0], [54.8, 1596.0], [54.9, 1596.0], [55.0, 1601.0], [55.1, 1601.0], [55.2, 1601.0], [55.3, 1608.0], [55.4, 1608.0], [55.5, 1623.0], [55.6, 1623.0], [55.7, 1623.0], [55.8, 1629.0], [55.9, 1629.0], [56.0, 1638.0], [56.1, 1638.0], [56.2, 1638.0], [56.3, 1647.0], [56.4, 1647.0], [56.5, 1648.0], [56.6, 1648.0], [56.7, 1648.0], [56.8, 1655.0], [56.9, 1655.0], [57.0, 1668.0], [57.1, 1668.0], [57.2, 1668.0], [57.3, 1675.0], [57.4, 1675.0], [57.5, 1679.0], [57.6, 1679.0], [57.7, 1679.0], [57.8, 1684.0], [57.9, 1684.0], [58.0, 1688.0], [58.1, 1688.0], [58.2, 1688.0], [58.3, 1695.0], [58.4, 1695.0], [58.5, 1698.0], [58.6, 1698.0], [58.7, 1698.0], [58.8, 1704.0], [58.9, 1704.0], [59.0, 1716.0], [59.1, 1716.0], [59.2, 1716.0], [59.3, 1720.0], [59.4, 1720.0], [59.5, 1727.0], [59.6, 1727.0], [59.7, 1727.0], [59.8, 1732.0], [59.9, 1732.0], [60.0, 1733.0], [60.1, 1733.0], [60.2, 1733.0], [60.3, 1740.0], [60.4, 1740.0], [60.5, 1744.0], [60.6, 1744.0], [60.7, 1744.0], [60.8, 1787.0], [60.9, 1787.0], [61.0, 1788.0], [61.1, 1788.0], [61.2, 1788.0], [61.3, 1797.0], [61.4, 1797.0], [61.5, 1798.0], [61.6, 1798.0], [61.7, 1798.0], [61.8, 1802.0], [61.9, 1802.0], [62.0, 1809.0], [62.1, 1809.0], [62.2, 1809.0], [62.3, 1815.0], [62.4, 1815.0], [62.5, 1827.0], [62.6, 1827.0], [62.7, 1827.0], [62.8, 1828.0], [62.9, 1828.0], [63.0, 1829.0], [63.1, 1829.0], [63.2, 1829.0], [63.3, 1830.0], [63.4, 1830.0], [63.5, 1853.0], [63.6, 1853.0], [63.7, 1853.0], [63.8, 1866.0], [63.9, 1866.0], [64.0, 1866.0], [64.1, 1866.0], [64.2, 1866.0], [64.3, 1876.0], [64.4, 1876.0], [64.5, 1876.0], [64.6, 1876.0], [64.7, 1876.0], [64.8, 1882.0], [64.9, 1882.0], [65.0, 1886.0], [65.1, 1886.0], [65.2, 1886.0], [65.3, 1924.0], [65.4, 1924.0], [65.5, 1928.0], [65.6, 1928.0], [65.7, 1928.0], [65.8, 1957.0], [65.9, 1957.0], [66.0, 1967.0], [66.1, 1967.0], [66.2, 1967.0], [66.3, 1972.0], [66.4, 1972.0], [66.5, 1986.0], [66.6, 1986.0], [66.7, 1986.0], [66.8, 2024.0], [66.9, 2024.0], [67.0, 2039.0], [67.1, 2039.0], [67.2, 2039.0], [67.3, 2062.0], [67.4, 2062.0], [67.5, 2065.0], [67.6, 2065.0], [67.7, 2065.0], [67.8, 2086.0], [67.9, 2086.0], [68.0, 2093.0], [68.1, 2093.0], [68.2, 2093.0], [68.3, 2104.0], [68.4, 2104.0], [68.5, 2106.0], [68.6, 2106.0], [68.7, 2106.0], [68.8, 2120.0], [68.9, 2120.0], [69.0, 2122.0], [69.1, 2122.0], [69.2, 2122.0], [69.3, 2126.0], [69.4, 2126.0], [69.5, 2132.0], [69.6, 2132.0], [69.7, 2132.0], [69.8, 2132.0], [69.9, 2132.0], [70.0, 2149.0], [70.1, 2149.0], [70.2, 2149.0], [70.3, 2165.0], [70.4, 2165.0], [70.5, 2176.0], [70.6, 2176.0], [70.7, 2176.0], [70.8, 2178.0], [70.9, 2178.0], [71.0, 2183.0], [71.1, 2183.0], [71.2, 2183.0], [71.3, 2186.0], [71.4, 2186.0], [71.5, 2194.0], [71.6, 2194.0], [71.7, 2194.0], [71.8, 2211.0], [71.9, 2211.0], [72.0, 2216.0], [72.1, 2216.0], [72.2, 2216.0], [72.3, 2216.0], [72.4, 2216.0], [72.5, 2241.0], [72.6, 2241.0], [72.7, 2241.0], [72.8, 2262.0], [72.9, 2262.0], [73.0, 2277.0], [73.1, 2277.0], [73.2, 2277.0], [73.3, 2291.0], [73.4, 2291.0], [73.5, 2293.0], [73.6, 2293.0], [73.7, 2293.0], [73.8, 2326.0], [73.9, 2326.0], [74.0, 2333.0], [74.1, 2333.0], [74.2, 2333.0], [74.3, 2340.0], [74.4, 2340.0], [74.5, 2346.0], [74.6, 2346.0], [74.7, 2346.0], [74.8, 2347.0], [74.9, 2347.0], [75.0, 2352.0], [75.1, 2352.0], [75.2, 2352.0], [75.3, 2356.0], [75.4, 2356.0], [75.5, 2357.0], [75.6, 2357.0], [75.7, 2357.0], [75.8, 2362.0], [75.9, 2362.0], [76.0, 2385.0], [76.1, 2385.0], [76.2, 2385.0], [76.3, 2390.0], [76.4, 2390.0], [76.5, 2394.0], [76.6, 2394.0], [76.7, 2394.0], [76.8, 2403.0], [76.9, 2403.0], [77.0, 2419.0], [77.1, 2419.0], [77.2, 2419.0], [77.3, 2431.0], [77.4, 2431.0], [77.5, 2440.0], [77.6, 2440.0], [77.7, 2440.0], [77.8, 2442.0], [77.9, 2442.0], [78.0, 2454.0], [78.1, 2454.0], [78.2, 2454.0], [78.3, 2458.0], [78.4, 2458.0], [78.5, 2459.0], [78.6, 2459.0], [78.7, 2459.0], [78.8, 2505.0], [78.9, 2505.0], [79.0, 2507.0], [79.1, 2507.0], [79.2, 2507.0], [79.3, 2514.0], [79.4, 2514.0], [79.5, 2523.0], [79.6, 2523.0], [79.7, 2523.0], [79.8, 2550.0], [79.9, 2550.0], [80.0, 2566.0], [80.1, 2566.0], [80.2, 2566.0], [80.3, 2579.0], [80.4, 2579.0], [80.5, 2590.0], [80.6, 2590.0], [80.7, 2590.0], [80.8, 2607.0], [80.9, 2607.0], [81.0, 2615.0], [81.1, 2615.0], [81.2, 2615.0], [81.3, 2623.0], [81.4, 2623.0], [81.5, 2627.0], [81.6, 2627.0], [81.7, 2627.0], [81.8, 2645.0], [81.9, 2645.0], [82.0, 2694.0], [82.1, 2694.0], [82.2, 2694.0], [82.3, 2733.0], [82.4, 2733.0], [82.5, 2780.0], [82.6, 2780.0], [82.7, 2780.0], [82.8, 2795.0], [82.9, 2795.0], [83.0, 2814.0], [83.1, 2814.0], [83.2, 2814.0], [83.3, 2834.0], [83.4, 2834.0], [83.5, 2853.0], [83.6, 2853.0], [83.7, 2853.0], [83.8, 2879.0], [83.9, 2879.0], [84.0, 2885.0], [84.1, 2885.0], [84.2, 2885.0], [84.3, 2891.0], [84.4, 2891.0], [84.5, 2913.0], [84.6, 2913.0], [84.7, 2913.0], [84.8, 2933.0], [84.9, 2933.0], [85.0, 2943.0], [85.1, 2943.0], [85.2, 2943.0], [85.3, 2943.0], [85.4, 2943.0], [85.5, 2962.0], [85.6, 2962.0], [85.7, 2962.0], [85.8, 3006.0], [85.9, 3006.0], [86.0, 3039.0], [86.1, 3039.0], [86.2, 3039.0], [86.3, 3136.0], [86.4, 3136.0], [86.5, 3170.0], [86.6, 3170.0], [86.7, 3170.0], [86.8, 3193.0], [86.9, 3193.0], [87.0, 3214.0], [87.1, 3214.0], [87.2, 3214.0], [87.3, 3225.0], [87.4, 3225.0], [87.5, 3247.0], [87.6, 3247.0], [87.7, 3247.0], [87.8, 3335.0], [87.9, 3335.0], [88.0, 3377.0], [88.1, 3377.0], [88.2, 3377.0], [88.3, 3606.0], [88.4, 3606.0], [88.5, 3609.0], [88.6, 3609.0], [88.7, 3609.0], [88.8, 3619.0], [88.9, 3619.0], [89.0, 3622.0], [89.1, 3622.0], [89.2, 3622.0], [89.3, 3641.0], [89.4, 3641.0], [89.5, 3712.0], [89.6, 3712.0], [89.7, 3712.0], [89.8, 3775.0], [89.9, 3775.0], [90.0, 3790.0], [90.1, 3790.0], [90.2, 3790.0], [90.3, 3819.0], [90.4, 3819.0], [90.5, 3821.0], [90.6, 3821.0], [90.7, 3821.0], [90.8, 3832.0], [90.9, 3832.0], [91.0, 3854.0], [91.1, 3854.0], [91.2, 3854.0], [91.3, 3889.0], [91.4, 3889.0], [91.5, 3948.0], [91.6, 3948.0], [91.7, 3948.0], [91.8, 4004.0], [91.9, 4004.0], [92.0, 4007.0], [92.1, 4007.0], [92.2, 4007.0], [92.3, 4015.0], [92.4, 4015.0], [92.5, 4034.0], [92.6, 4034.0], [92.7, 4034.0], [92.8, 4195.0], [92.9, 4195.0], [93.0, 4264.0], [93.1, 4264.0], [93.2, 4264.0], [93.3, 4280.0], [93.4, 4280.0], [93.5, 4297.0], [93.6, 4297.0], [93.7, 4297.0], [93.8, 4337.0], [93.9, 4337.0], [94.0, 4354.0], [94.1, 4354.0], [94.2, 4354.0], [94.3, 4407.0], [94.4, 4407.0], [94.5, 4413.0], [94.6, 4413.0], [94.7, 4413.0], [94.8, 4429.0], [94.9, 4429.0], [95.0, 4518.0], [95.1, 4518.0], [95.2, 4518.0], [95.3, 4534.0], [95.4, 4534.0], [95.5, 4562.0], [95.6, 4562.0], [95.7, 4562.0], [95.8, 4593.0], [95.9, 4593.0], [96.0, 4651.0], [96.1, 4651.0], [96.2, 4651.0], [96.3, 4663.0], [96.4, 4663.0], [96.5, 4766.0], [96.6, 4766.0], [96.7, 4766.0], [96.8, 4809.0], [96.9, 4809.0], [97.0, 4944.0], [97.1, 4944.0], [97.2, 4944.0], [97.3, 5005.0], [97.4, 5005.0], [97.5, 5048.0], [97.6, 5048.0], [97.7, 5048.0], [97.8, 5285.0], [97.9, 5285.0], [98.0, 5437.0], [98.1, 5437.0], [98.2, 5437.0], [98.3, 5473.0], [98.4, 5473.0], [98.5, 6363.0], [98.6, 6363.0], [98.7, 6363.0], [98.8, 6472.0], [98.9, 6472.0], [99.0, 6850.0], [99.1, 6850.0], [99.2, 6850.0], [99.3, 6933.0], [99.4, 6933.0], [99.5, 7824.0], [99.6, 7824.0], [99.7, 7824.0], [99.8, 9819.0], [99.9, 9819.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 26.0, "series": [{"data": [[600.0, 17.0], [700.0, 21.0], [800.0, 14.0], [900.0, 13.0], [1000.0, 19.0], [1100.0, 26.0], [1200.0, 16.0], [1300.0, 18.0], [1400.0, 16.0], [1500.0, 20.0], [1600.0, 15.0], [1700.0, 12.0], [1800.0, 14.0], [1900.0, 6.0], [2000.0, 6.0], [2100.0, 14.0], [2200.0, 8.0], [2300.0, 12.0], [2400.0, 8.0], [2500.0, 8.0], [2600.0, 6.0], [2700.0, 3.0], [2800.0, 6.0], [2900.0, 5.0], [3000.0, 2.0], [3100.0, 3.0], [3300.0, 2.0], [3200.0, 3.0], [3600.0, 5.0], [3700.0, 3.0], [3800.0, 5.0], [3900.0, 1.0], [4000.0, 4.0], [4200.0, 3.0], [4300.0, 2.0], [4100.0, 1.0], [4400.0, 3.0], [4600.0, 2.0], [4500.0, 4.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5000.0, 2.0], [5200.0, 1.0], [5400.0, 2.0], [6300.0, 1.0], [6400.0, 1.0], [6900.0, 1.0], [6800.0, 1.0], [7800.0, 1.0], [9800.0, 1.0], [200.0, 3.0], [300.0, 15.0], [400.0, 11.0], [500.0, 11.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 29.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [[0.0, 29.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 171.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 200.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 48.60000000000001, "minX": 1.70126376E12, "maxY": 48.60000000000001, "series": [{"data": [[1.70126376E12, 48.60000000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70126376E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 362.0, "minX": 1.0, "maxY": 4534.0, "series": [{"data": [[2.0, 390.5], [3.0, 412.0], [4.0, 604.0], [5.0, 445.5], [6.0, 362.0], [7.0, 538.0], [8.0, 435.0], [9.0, 1276.25], [10.0, 647.0], [11.0, 1499.0], [12.0, 816.25], [13.0, 828.6666666666666], [14.0, 517.0], [15.0, 1652.0], [16.0, 662.6666666666666], [17.0, 894.3333333333333], [18.0, 464.3333333333333], [19.0, 823.75], [20.0, 1006.0], [21.0, 838.4], [22.0, 604.3333333333334], [23.0, 849.2], [24.0, 725.375], [25.0, 950.3333333333334], [26.0, 1026.25], [27.0, 729.0], [28.0, 1528.0], [29.0, 869.1666666666667], [30.0, 1019.1666666666666], [31.0, 1051.2857142857144], [32.0, 1038.6666666666667], [33.0, 2067.2], [34.0, 1127.9], [35.0, 1680.7777777777778], [36.0, 927.0], [37.0, 4534.0], [38.0, 2259.3333333333335], [39.0, 1286.5], [41.0, 1905.75], [40.0, 1268.0], [42.0, 2061.0], [43.0, 1403.0], [44.0, 1283.5], [45.0, 2174.75], [46.0, 1329.3333333333333], [47.0, 3018.428571428571], [49.0, 1568.3333333333333], [48.0, 3721.0], [50.0, 1754.3333333333333], [51.0, 2123.8], [52.0, 1331.4], [53.0, 2555.2], [55.0, 3344.8333333333335], [54.0, 1935.75], [56.0, 1297.6666666666667], [57.0, 1926.6], [58.0, 3067.5], [59.0, 1704.0], [60.0, 1918.8333333333333], [61.0, 1890.3], [62.0, 1873.75], [63.0, 2854.625], [65.0, 2642.5], [66.0, 2230.0], [67.0, 1952.375], [64.0, 2833.3333333333335], [69.0, 2889.5833333333335], [68.0, 2678.304347826087], [70.0, 1846.6666666666667], [71.0, 2993.4444444444443], [73.0, 2295.666666666667], [74.0, 2212.4117647058824], [75.0, 2181.5], [72.0, 2563.846153846154], [76.0, 1697.6666666666667], [77.0, 2097.125], [1.0, 364.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[48.60000000000001, 1840.3600000000008]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 77.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 760.0, "minX": 1.70126376E12, "maxY": 739893.0, "series": [{"data": [[1.70126376E12, 739893.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70126376E12, 760.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70126376E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1840.3600000000008, "minX": 1.70126376E12, "maxY": 1840.3600000000008, "series": [{"data": [[1.70126376E12, 1840.3600000000008]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70126376E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 261.9874999999999, "minX": 1.70126376E12, "maxY": 261.9874999999999, "series": [{"data": [[1.70126376E12, 261.9874999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70126376E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 110.92999999999992, "minX": 1.70126376E12, "maxY": 110.92999999999992, "series": [{"data": [[1.70126376E12, 110.92999999999992]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70126376E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 266.0, "minX": 1.70126376E12, "maxY": 9819.0, "series": [{"data": [[1.70126376E12, 9819.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70126376E12, 266.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70126376E12, 3788.5000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70126376E12, 6846.220000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70126376E12, 1503.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.70126376E12, 4513.549999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70126376E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 364.0, "minX": 1.0, "maxY": 2390.0, "series": [{"data": [[33.0, 2390.0], [32.0, 2304.5], [1.0, 364.0], [43.0, 1529.0], [22.0, 1433.0], [23.0, 1346.0], [24.0, 662.5], [25.0, 2176.0], [27.0, 646.0], [31.0, 2086.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 60.0, "minX": 1.0, "maxY": 215.0, "series": [{"data": [[33.0, 142.0], [32.0, 108.0], [1.0, 60.0], [43.0, 82.0], [22.0, 84.0], [23.0, 132.0], [24.0, 73.5], [25.0, 215.0], [27.0, 100.5], [31.0, 85.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.666666666666667, "minX": 1.70126376E12, "maxY": 6.666666666666667, "series": [{"data": [[1.70126376E12, 6.666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70126376E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 6.666666666666667, "minX": 1.70126376E12, "maxY": 6.666666666666667, "series": [{"data": [[1.70126376E12, 6.666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70126376E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.666666666666667, "minX": 1.70126376E12, "maxY": 6.666666666666667, "series": [{"data": [[1.70126376E12, 6.666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70126376E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.666666666666667, "minX": 1.70126376E12, "maxY": 6.666666666666667, "series": [{"data": [[1.70126376E12, 6.666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70126376E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

