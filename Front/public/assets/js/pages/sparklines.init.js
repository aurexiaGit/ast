$(document).ready(function(){function e(){$("#sparkline1").sparkline([20,40,30],{type:"pie",height:"200",resize:!0,sliceColors:["#f1b44c","#1D4A69","#e9ecef"]}),$("#sparkline2").sparkline([5,6,2,8,9,4,7,10,11,12,10,4,7,10],{type:"bar",height:"200",barWidth:10,barSpacing:7,barColor:"#f1b44c"}),$("#sparkline3").sparkline([5,6,2,9,4,7,10,12,4,7,10],{type:"bar",height:"200",barWidth:"10",resize:!0,barSpacing:"7",barColor:"#1D4A69"}),$("#sparkline3").sparkline([5,6,2,9,4,7,10,12,4,7,10],{type:"line",height:"200",lineColor:"#f1b44c",fillColor:"transparent",composite:!0,lineWidth:2,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline4").sparkline([0,23,43,35,44,45,56,37,40,45,56,7,10],{type:"line",width:"100%",height:"200",lineColor:"#1D4A69",fillColor:"transparent",spotColor:"#1D4A69",lineWidth:2,minSpotColor:void 0,maxSpotColor:void 0,highlightSpotColor:void 0,highlightLineColor:void 0}),$("#sparkline5").sparkline([15,23,55,35,54,45,66,47,30],{type:"line",width:"100%",height:"200",chartRangeMax:50,resize:!0,lineColor:"#1D4A69",fillColor:"rgba(91, 140, 232, 0.3)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline5").sparkline([0,13,10,14,15,10,18,20,0],{type:"line",width:"100%",height:"200",chartRangeMax:40,lineColor:"#f1b44c",fillColor:"rgba(241, 180, 76, 0.3)",composite:!0,resize:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline6").sparkline([4,6,7,7,4,3,2,1,4,4,5,6,3,4,5,8,7,6,9,3,2,4,1,5,6,4,3,7],{type:"discrete",width:"280",height:"200",lineColor:"#ffffff"}),$("#sparkline7").sparkline([10,12,12,9,7],{type:"bullet",width:"280",height:"80",targetColor:"#1D4A69",performanceColor:"#f1b44c"}),$("#sparkline8").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100],{type:"box",width:"280",height:"80",boxLineColor:"#34c38f",boxFillColor:"#f1f1f1",whiskerColor:"#34c38f",outlierLineColor:"#34c38f",medianColor:"#34c38f",targetColor:"#34c38f"}),$("#sparkline9").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1],{height:"80",width:"100%",type:"tristate",posBarColor:"#556ee6",negBarColor:"#f1b44c",zeroBarColor:"#FF5C5F",barWidth:8,barSpacing:3,zeroAxis:!1})}var r;$(window).resize(function(i){clearTimeout(r),r=setTimeout(e,500)}),e()});