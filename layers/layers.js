var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pimpalesaudagar_1 = new ol.format.GeoJSON();
var features_Pimpalesaudagar_1 = format_Pimpalesaudagar_1.readFeatures(json_Pimpalesaudagar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimpalesaudagar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimpalesaudagar_1.addFeatures(features_Pimpalesaudagar_1);
var lyr_Pimpalesaudagar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimpalesaudagar_1, 
                style: style_Pimpalesaudagar_1,
                popuplayertitle: "Pimpale saudagar",
                interactive: true,
                title: '<img src="styles/legend/Pimpalesaudagar_1.png" /> Pimpale saudagar'
            });
var format_PimpleGaurav_2 = new ol.format.GeoJSON();
var features_PimpleGaurav_2 = format_PimpleGaurav_2.readFeatures(json_PimpleGaurav_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpleGaurav_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpleGaurav_2.addFeatures(features_PimpleGaurav_2);
var lyr_PimpleGaurav_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpleGaurav_2, 
                style: style_PimpleGaurav_2,
                popuplayertitle: "Pimple Gaurav",
                interactive: true,
                title: '<img src="styles/legend/PimpleGaurav_2.png" /> Pimple Gaurav'
            });
var format_Keshavnagar_3 = new ol.format.GeoJSON();
var features_Keshavnagar_3 = format_Keshavnagar_3.readFeatures(json_Keshavnagar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keshavnagar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keshavnagar_3.addFeatures(features_Keshavnagar_3);
var lyr_Keshavnagar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Keshavnagar_3, 
                style: style_Keshavnagar_3,
                popuplayertitle: "Keshavnagar",
                interactive: true,
                title: '<img src="styles/legend/Keshavnagar_3.png" /> Keshavnagar'
            });
var format_Yavatmal_4 = new ol.format.GeoJSON();
var features_Yavatmal_4 = format_Yavatmal_4.readFeatures(json_Yavatmal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yavatmal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yavatmal_4.addFeatures(features_Yavatmal_4);
var lyr_Yavatmal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yavatmal_4, 
                style: style_Yavatmal_4,
                popuplayertitle: "Yavatmal",
                interactive: true,
                title: '<img src="styles/legend/Yavatmal_4.png" /> Yavatmal'
            });
var format_Lahagaon_5 = new ol.format.GeoJSON();
var features_Lahagaon_5 = format_Lahagaon_5.readFeatures(json_Lahagaon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahagaon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahagaon_5.addFeatures(features_Lahagaon_5);
var lyr_Lahagaon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahagaon_5, 
                style: style_Lahagaon_5,
                popuplayertitle: "Lahagaon",
                interactive: true,
                title: '<img src="styles/legend/Lahagaon_5.png" /> Lahagaon'
            });
var format_KirkeeBoundary_6 = new ol.format.GeoJSON();
var features_KirkeeBoundary_6 = format_KirkeeBoundary_6.readFeatures(json_KirkeeBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KirkeeBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KirkeeBoundary_6.addFeatures(features_KirkeeBoundary_6);
var lyr_KirkeeBoundary_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KirkeeBoundary_6, 
                style: style_KirkeeBoundary_6,
                popuplayertitle: "Kirkee Boundary",
                interactive: true,
                title: '<img src="styles/legend/KirkeeBoundary_6.png" /> Kirkee Boundary'
            });
var format_PimpreChinchwadboundary_7 = new ol.format.GeoJSON();
var features_PimpreChinchwadboundary_7 = format_PimpreChinchwadboundary_7.readFeatures(json_PimpreChinchwadboundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpreChinchwadboundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpreChinchwadboundary_7.addFeatures(features_PimpreChinchwadboundary_7);
var lyr_PimpreChinchwadboundary_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpreChinchwadboundary_7, 
                style: style_PimpreChinchwadboundary_7,
                popuplayertitle: "Pimpre Chinchwad boundary",
                interactive: true,
                title: '<img src="styles/legend/PimpreChinchwadboundary_7.png" /> Pimpre Chinchwad boundary'
            });
var format_PuneGeoBoundary_8 = new ol.format.GeoJSON();
var features_PuneGeoBoundary_8 = format_PuneGeoBoundary_8.readFeatures(json_PuneGeoBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneGeoBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneGeoBoundary_8.addFeatures(features_PuneGeoBoundary_8);
var lyr_PuneGeoBoundary_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneGeoBoundary_8, 
                style: style_PuneGeoBoundary_8,
                popuplayertitle: "Pune Geo Boundary",
                interactive: true,
                title: '<img src="styles/legend/PuneGeoBoundary_8.png" /> Pune Geo Boundary'
            });
var format_AllPunePopsep_9 = new ol.format.GeoJSON();
var features_AllPunePopsep_9 = format_AllPunePopsep_9.readFeatures(json_AllPunePopsep_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopsep_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopsep_9.addFeatures(features_AllPunePopsep_9);
var lyr_AllPunePopsep_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopsep_9, 
                style: style_AllPunePopsep_9,
                popuplayertitle: "All Pune Pop sep",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopsep_9.png" /> All Pune Pop sep'
            });
var format_AllPunePopReprojected_10 = new ol.format.GeoJSON();
var features_AllPunePopReprojected_10 = format_AllPunePopReprojected_10.readFeatures(json_AllPunePopReprojected_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopReprojected_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopReprojected_10.addFeatures(features_AllPunePopReprojected_10);
var lyr_AllPunePopReprojected_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopReprojected_10, 
                style: style_AllPunePopReprojected_10,
                popuplayertitle: "All Pune Pop Reprojected",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopReprojected_10.png" /> All Pune Pop Reprojected'
            });
var format_Rt233DMTrs_11 = new ol.format.GeoJSON();
var features_Rt233DMTrs_11 = format_Rt233DMTrs_11.readFeatures(json_Rt233DMTrs_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233DMTrs_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233DMTrs_11.addFeatures(features_Rt233DMTrs_11);
var lyr_Rt233DMTrs_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233DMTrs_11, 
                style: style_Rt233DMTrs_11,
                popuplayertitle: "Rt 233D MTrs",
                interactive: true,
                title: '<img src="styles/legend/Rt233DMTrs_11.png" /> Rt 233D MTrs'
            });
var format_233DStops_12 = new ol.format.GeoJSON();
var features_233DStops_12 = format_233DStops_12.readFeatures(json_233DStops_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_233DStops_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_233DStops_12.addFeatures(features_233DStops_12);
var lyr_233DStops_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_233DStops_12, 
                style: style_233DStops_12,
                popuplayertitle: "233D Stops",
                interactive: true,
    title: '233D Stops<br />\
    <img src="styles/legend/233DStops_12_0.png" /> 1<br />\
    <img src="styles/legend/233DStops_12_1.png" /> 10<br />\
    <img src="styles/legend/233DStops_12_2.png" /> 11<br />\
    <img src="styles/legend/233DStops_12_3.png" /> 12<br />\
    <img src="styles/legend/233DStops_12_4.png" /> 13<br />\
    <img src="styles/legend/233DStops_12_5.png" /> 14<br />\
    <img src="styles/legend/233DStops_12_6.png" /> 15<br />\
    <img src="styles/legend/233DStops_12_7.png" /> 16<br />\
    <img src="styles/legend/233DStops_12_8.png" /> 17<br />\
    <img src="styles/legend/233DStops_12_9.png" /> 18<br />\
    <img src="styles/legend/233DStops_12_10.png" /> 19<br />\
    <img src="styles/legend/233DStops_12_11.png" /> 2<br />\
    <img src="styles/legend/233DStops_12_12.png" /> 20<br />\
    <img src="styles/legend/233DStops_12_13.png" /> 3<br />\
    <img src="styles/legend/233DStops_12_14.png" /> 4<br />\
    <img src="styles/legend/233DStops_12_15.png" /> 5<br />\
    <img src="styles/legend/233DStops_12_16.png" /> 6<br />\
    <img src="styles/legend/233DStops_12_17.png" /> 7<br />\
    <img src="styles/legend/233DStops_12_18.png" /> 8<br />\
    <img src="styles/legend/233DStops_12_19.png" /> 9<br />\
    <img src="styles/legend/233DStops_12_20.png" /> Stg<br />\
    <img src="styles/legend/233DStops_12_21.png" /> <br />'
        });
var format_hospital_13 = new ol.format.GeoJSON();
var features_hospital_13 = format_hospital_13.readFeatures(json_hospital_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_13.addFeatures(features_hospital_13);
var lyr_hospital_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hospital_13, 
                style: style_hospital_13,
                popuplayertitle: "hospital",
                interactive: true,
                title: '<img src="styles/legend/hospital_13.png" /> hospital'
            });
var format_Industries_14 = new ol.format.GeoJSON();
var features_Industries_14 = format_Industries_14.readFeatures(json_Industries_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industries_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industries_14.addFeatures(features_Industries_14);
var lyr_Industries_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industries_14, 
                style: style_Industries_14,
                popuplayertitle: "Industries",
                interactive: true,
                title: '<img src="styles/legend/Industries_14.png" /> Industries'
            });
var format_Temple_15 = new ol.format.GeoJSON();
var features_Temple_15 = format_Temple_15.readFeatures(json_Temple_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_15.addFeatures(features_Temple_15);
var lyr_Temple_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_15, 
                style: style_Temple_15,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_15.png" /> Temple'
            });
var format_Offices_16 = new ol.format.GeoJSON();
var features_Offices_16 = format_Offices_16.readFeatures(json_Offices_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Offices_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offices_16.addFeatures(features_Offices_16);
var lyr_Offices_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Offices_16, 
                style: style_Offices_16,
                popuplayertitle: "Offices",
                interactive: true,
                title: '<img src="styles/legend/Offices_16.png" /> Offices'
            });
var format_PublicBuildings_17 = new ol.format.GeoJSON();
var features_PublicBuildings_17 = format_PublicBuildings_17.readFeatures(json_PublicBuildings_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_17.addFeatures(features_PublicBuildings_17);
var lyr_PublicBuildings_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PublicBuildings_17, 
                style: style_PublicBuildings_17,
                popuplayertitle: "Public Buildings",
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_17.png" /> Public Buildings'
            });
var format_trafficsignal_18 = new ol.format.GeoJSON();
var features_trafficsignal_18 = format_trafficsignal_18.readFeatures(json_trafficsignal_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trafficsignal_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trafficsignal_18.addFeatures(features_trafficsignal_18);
var lyr_trafficsignal_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trafficsignal_18, 
                style: style_trafficsignal_18,
                popuplayertitle: "traffic signal",
                interactive: true,
                title: '<img src="styles/legend/trafficsignal_18.png" /> traffic signal'
            });
var format_Rt233Pop1000Mtrs_19 = new ol.format.GeoJSON();
var features_Rt233Pop1000Mtrs_19 = format_Rt233Pop1000Mtrs_19.readFeatures(json_Rt233Pop1000Mtrs_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Pop1000Mtrs_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Pop1000Mtrs_19.addFeatures(features_Rt233Pop1000Mtrs_19);
var lyr_Rt233Pop1000Mtrs_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Pop1000Mtrs_19, 
                style: style_Rt233Pop1000Mtrs_19,
                popuplayertitle: "Rt 233 Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt233Pop1000Mtrs_19.png" /> Rt 233 Pop 1000 Mtrs'
            });
var format_Rt233Pop500Mtrs_20 = new ol.format.GeoJSON();
var features_Rt233Pop500Mtrs_20 = format_Rt233Pop500Mtrs_20.readFeatures(json_Rt233Pop500Mtrs_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Pop500Mtrs_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Pop500Mtrs_20.addFeatures(features_Rt233Pop500Mtrs_20);
var lyr_Rt233Pop500Mtrs_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Pop500Mtrs_20, 
                style: style_Rt233Pop500Mtrs_20,
                popuplayertitle: "Rt 233 Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt233Pop500Mtrs_20.png" /> Rt 233 Pop 500 Mtrs'
            });
var format_Rt233Pop250Mtrs_21 = new ol.format.GeoJSON();
var features_Rt233Pop250Mtrs_21 = format_Rt233Pop250Mtrs_21.readFeatures(json_Rt233Pop250Mtrs_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Pop250Mtrs_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Pop250Mtrs_21.addFeatures(features_Rt233Pop250Mtrs_21);
var lyr_Rt233Pop250Mtrs_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Pop250Mtrs_21, 
                style: style_Rt233Pop250Mtrs_21,
                popuplayertitle: "Rt 233 Pop 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt233Pop250Mtrs_21.png" /> Rt 233 Pop 250 Mtrs'
            });
var format_Rt233Pop100Mtrs_22 = new ol.format.GeoJSON();
var features_Rt233Pop100Mtrs_22 = format_Rt233Pop100Mtrs_22.readFeatures(json_Rt233Pop100Mtrs_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Pop100Mtrs_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Pop100Mtrs_22.addFeatures(features_Rt233Pop100Mtrs_22);
var lyr_Rt233Pop100Mtrs_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Pop100Mtrs_22, 
                style: style_Rt233Pop100Mtrs_22,
                popuplayertitle: "Rt 233 Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt233Pop100Mtrs_22.png" /> Rt 233 Pop 100 Mtrs'
            });
var format_Rt233DStagewiseAssessmentxlsx_23 = new ol.format.GeoJSON();
var features_Rt233DStagewiseAssessmentxlsx_23 = format_Rt233DStagewiseAssessmentxlsx_23.readFeatures(json_Rt233DStagewiseAssessmentxlsx_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233DStagewiseAssessmentxlsx_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233DStagewiseAssessmentxlsx_23.addFeatures(features_Rt233DStagewiseAssessmentxlsx_23);
var lyr_Rt233DStagewiseAssessmentxlsx_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233DStagewiseAssessmentxlsx_23, 
                style: style_Rt233DStagewiseAssessmentxlsx_23,
                popuplayertitle: "Rt 233D Stagewise Assessment.xlsx",
                interactive: true,
                title: '<img src="styles/legend/Rt233DStagewiseAssessmentxlsx_23.png" /> Rt 233D Stagewise Assessment.xlsx'
            });
var format_Rt233StopPop_24 = new ol.format.GeoJSON();
var features_Rt233StopPop_24 = format_Rt233StopPop_24.readFeatures(json_Rt233StopPop_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233StopPop_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233StopPop_24.addFeatures(features_Rt233StopPop_24);
var lyr_Rt233StopPop_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233StopPop_24, 
                style: style_Rt233StopPop_24,
                popuplayertitle: "Rt 233 Stop Pop",
                interactive: true,
    title: 'Rt 233 Stop Pop<br />\
    <img src="styles/legend/Rt233StopPop_24_0.png" /> 10 min<br />'
        });
var format_Rt233StopPopDissolved_25 = new ol.format.GeoJSON();
var features_Rt233StopPopDissolved_25 = format_Rt233StopPopDissolved_25.readFeatures(json_Rt233StopPopDissolved_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233StopPopDissolved_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233StopPopDissolved_25.addFeatures(features_Rt233StopPopDissolved_25);
var lyr_Rt233StopPopDissolved_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233StopPopDissolved_25, 
                style: style_Rt233StopPopDissolved_25,
                popuplayertitle: "Rt 233 Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Rt233StopPopDissolved_25.png" /> Rt 233 Stop Pop Dissolved'
            });
var format_Rt233DMostPop_26 = new ol.format.GeoJSON();
var features_Rt233DMostPop_26 = format_Rt233DMostPop_26.readFeatures(json_Rt233DMostPop_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233DMostPop_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233DMostPop_26.addFeatures(features_Rt233DMostPop_26);
var lyr_Rt233DMostPop_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233DMostPop_26, 
                style: style_Rt233DMostPop_26,
                popuplayertitle: "Rt 233D Most Pop",
                interactive: true,
                title: '<img src="styles/legend/Rt233DMostPop_26.png" /> Rt 233D Most Pop'
            });
var format_Rt233DLeastPop_27 = new ol.format.GeoJSON();
var features_Rt233DLeastPop_27 = format_Rt233DLeastPop_27.readFeatures(json_Rt233DLeastPop_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233DLeastPop_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233DLeastPop_27.addFeatures(features_Rt233DLeastPop_27);
var lyr_Rt233DLeastPop_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233DLeastPop_27, 
                style: style_Rt233DLeastPop_27,
                popuplayertitle: "Rt 233D Least Pop",
                interactive: true,
                title: '<img src="styles/legend/Rt233DLeastPop_27.png" /> Rt 233D Least Pop'
            });
var format_Rt233ULeastPop_28 = new ol.format.GeoJSON();
var features_Rt233ULeastPop_28 = format_Rt233ULeastPop_28.readFeatures(json_Rt233ULeastPop_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233ULeastPop_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233ULeastPop_28.addFeatures(features_Rt233ULeastPop_28);
var lyr_Rt233ULeastPop_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233ULeastPop_28, 
                style: style_Rt233ULeastPop_28,
                popuplayertitle: "Rt 233U Least Pop",
                interactive: true,
                title: '<img src="styles/legend/Rt233ULeastPop_28.png" /> Rt 233U Least Pop'
            });
var format_Rt233UMostPop_29 = new ol.format.GeoJSON();
var features_Rt233UMostPop_29 = format_Rt233UMostPop_29.readFeatures(json_Rt233UMostPop_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233UMostPop_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233UMostPop_29.addFeatures(features_Rt233UMostPop_29);
var lyr_Rt233UMostPop_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233UMostPop_29, 
                style: style_Rt233UMostPop_29,
                popuplayertitle: "Rt 233U Most Pop",
                interactive: true,
                title: '<img src="styles/legend/Rt233UMostPop_29.png" /> Rt 233U Most Pop'
            });
var format_Rt233UStagewiseAssessmentxlsx_30 = new ol.format.GeoJSON();
var features_Rt233UStagewiseAssessmentxlsx_30 = format_Rt233UStagewiseAssessmentxlsx_30.readFeatures(json_Rt233UStagewiseAssessmentxlsx_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233UStagewiseAssessmentxlsx_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233UStagewiseAssessmentxlsx_30.addFeatures(features_Rt233UStagewiseAssessmentxlsx_30);
var lyr_Rt233UStagewiseAssessmentxlsx_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233UStagewiseAssessmentxlsx_30, 
                style: style_Rt233UStagewiseAssessmentxlsx_30,
                popuplayertitle: "Rt 233U Stagewise Assessment.xlsx",
                interactive: true,
                title: '<img src="styles/legend/Rt233UStagewiseAssessmentxlsx_30.png" /> Rt 233U Stagewise Assessment.xlsx'
            });
var format_Rt233Hospitals_31 = new ol.format.GeoJSON();
var features_Rt233Hospitals_31 = format_Rt233Hospitals_31.readFeatures(json_Rt233Hospitals_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Hospitals_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Hospitals_31.addFeatures(features_Rt233Hospitals_31);
var lyr_Rt233Hospitals_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Hospitals_31, 
                style: style_Rt233Hospitals_31,
                popuplayertitle: "Rt 233 Hospitals",
                interactive: true,
                title: '<img src="styles/legend/Rt233Hospitals_31.png" /> Rt 233 Hospitals'
            });
var format_Rt233Education_32 = new ol.format.GeoJSON();
var features_Rt233Education_32 = format_Rt233Education_32.readFeatures(json_Rt233Education_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Education_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Education_32.addFeatures(features_Rt233Education_32);
var lyr_Rt233Education_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Education_32, 
                style: style_Rt233Education_32,
                popuplayertitle: "Rt 233 Education",
                interactive: true,
                title: '<img src="styles/legend/Rt233Education_32.png" /> Rt 233 Education'
            });
var format_Rt233Offices_33 = new ol.format.GeoJSON();
var features_Rt233Offices_33 = format_Rt233Offices_33.readFeatures(json_Rt233Offices_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Offices_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Offices_33.addFeatures(features_Rt233Offices_33);
var lyr_Rt233Offices_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Offices_33, 
                style: style_Rt233Offices_33,
                popuplayertitle: "Rt 233 Offices",
                interactive: true,
                title: '<img src="styles/legend/Rt233Offices_33.png" /> Rt 233 Offices'
            });
var format_Rt233PSU_34 = new ol.format.GeoJSON();
var features_Rt233PSU_34 = format_Rt233PSU_34.readFeatures(json_Rt233PSU_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233PSU_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233PSU_34.addFeatures(features_Rt233PSU_34);
var lyr_Rt233PSU_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233PSU_34, 
                style: style_Rt233PSU_34,
                popuplayertitle: "Rt 233 PSU",
                interactive: true,
                title: '<img src="styles/legend/Rt233PSU_34.png" /> Rt 233 PSU'
            });
var format_Rt233Temple_35 = new ol.format.GeoJSON();
var features_Rt233Temple_35 = format_Rt233Temple_35.readFeatures(json_Rt233Temple_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Temple_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Temple_35.addFeatures(features_Rt233Temple_35);
var lyr_Rt233Temple_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Temple_35, 
                style: style_Rt233Temple_35,
                popuplayertitle: "Rt 233 Temple",
                interactive: true,
                title: '<img src="styles/legend/Rt233Temple_35.png" /> Rt 233 Temple'
            });
var format_Rt233Signals_36 = new ol.format.GeoJSON();
var features_Rt233Signals_36 = format_Rt233Signals_36.readFeatures(json_Rt233Signals_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Signals_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Signals_36.addFeatures(features_Rt233Signals_36);
var lyr_Rt233Signals_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Signals_36, 
                style: style_Rt233Signals_36,
                popuplayertitle: "Rt 233 Signals",
                interactive: true,
                title: '<img src="styles/legend/Rt233Signals_36.png" /> Rt 233 Signals'
            });
var format_Rt233RWI_37 = new ol.format.GeoJSON();
var features_Rt233RWI_37 = format_Rt233RWI_37.readFeatures(json_Rt233RWI_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233RWI_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233RWI_37.addFeatures(features_Rt233RWI_37);
var lyr_Rt233RWI_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233RWI_37, 
                style: style_Rt233RWI_37,
                popuplayertitle: "Rt 233 RWI",
                interactive: true,
    title: 'Rt 233 RWI<br />\
    <img src="styles/legend/Rt233RWI_37_0.png" /> 0.24 - 0.293<br />\
    <img src="styles/legend/Rt233RWI_37_1.png" /> 0.293 - 0.346<br />\
    <img src="styles/legend/Rt233RWI_37_2.png" /> 0.346 - 0.402<br />\
    <img src="styles/legend/Rt233RWI_37_3.png" /> 0.402 - 0.44<br />\
    <img src="styles/legend/Rt233RWI_37_4.png" /> 0.44 - 0.469<br />\
    <img src="styles/legend/Rt233RWI_37_5.png" /> 0.469 - 0.758<br />\
    <img src="styles/legend/Rt233RWI_37_6.png" /> 0.758 - 0.954<br />\
    <img src="styles/legend/Rt233RWI_37_7.png" /> 0.954 - 0.964<br />\
    <img src="styles/legend/Rt233RWI_37_8.png" /> 0.964 - 0.993<br />\
    <img src="styles/legend/Rt233RWI_37_9.png" /> 0.993 - 1.031<br />\
    <img src="styles/legend/Rt233RWI_37_10.png" /> 1.031 - 1.097<br />\
    <img src="styles/legend/Rt233RWI_37_11.png" /> 1.097 - 1.169<br />\
    <img src="styles/legend/Rt233RWI_37_12.png" /> 1.169 - 1.253<br />\
    <img src="styles/legend/Rt233RWI_37_13.png" /> 1.253 - 1.344<br />\
    <img src="styles/legend/Rt233RWI_37_14.png" /> 1.344 - 1.439<br />'
        });
var format_Rt233Ridership_38 = new ol.format.GeoJSON();
var features_Rt233Ridership_38 = format_Rt233Ridership_38.readFeatures(json_Rt233Ridership_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Ridership_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Ridership_38.addFeatures(features_Rt233Ridership_38);
var lyr_Rt233Ridership_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Ridership_38, 
                style: style_Rt233Ridership_38,
                popuplayertitle: "Rt 233 Ridership%",
                interactive: true,
                title: '<img src="styles/legend/Rt233Ridership_38.png" /> Rt 233 Ridership%'
            });
var format_Rt233Revenue_39 = new ol.format.GeoJSON();
var features_Rt233Revenue_39 = format_Rt233Revenue_39.readFeatures(json_Rt233Revenue_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Revenue_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Revenue_39.addFeatures(features_Rt233Revenue_39);
var lyr_Rt233Revenue_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Revenue_39, 
                style: style_Rt233Revenue_39,
                popuplayertitle: "Rt 233 Revenue",
                interactive: true,
                title: '<img src="styles/legend/Rt233Revenue_39.png" /> Rt 233 Revenue'
            });
var format_Rt233UMtrs_40 = new ol.format.GeoJSON();
var features_Rt233UMtrs_40 = format_Rt233UMtrs_40.readFeatures(json_Rt233UMtrs_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233UMtrs_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233UMtrs_40.addFeatures(features_Rt233UMtrs_40);
var lyr_Rt233UMtrs_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233UMtrs_40, 
                style: style_Rt233UMtrs_40,
                popuplayertitle: "Rt 233U Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt233UMtrs_40.png" /> Rt 233U Mtrs'
            });
var format_233UStops_41 = new ol.format.GeoJSON();
var features_233UStops_41 = format_233UStops_41.readFeatures(json_233UStops_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_233UStops_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_233UStops_41.addFeatures(features_233UStops_41);
var lyr_233UStops_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_233UStops_41, 
                style: style_233UStops_41,
                popuplayertitle: "233U Stops",
                interactive: true,
    title: '233U Stops<br />\
    <img src="styles/legend/233UStops_41_0.png" /> 1.0<br />\
    <img src="styles/legend/233UStops_41_1.png" /> 10.0<br />\
    <img src="styles/legend/233UStops_41_2.png" /> 11.0<br />\
    <img src="styles/legend/233UStops_41_3.png" /> 12.0<br />\
    <img src="styles/legend/233UStops_41_4.png" /> 13.0<br />\
    <img src="styles/legend/233UStops_41_5.png" /> 14.0<br />\
    <img src="styles/legend/233UStops_41_6.png" /> 15.0<br />\
    <img src="styles/legend/233UStops_41_7.png" /> 16.0<br />\
    <img src="styles/legend/233UStops_41_8.png" /> 17.0<br />\
    <img src="styles/legend/233UStops_41_9.png" /> 18.0<br />\
    <img src="styles/legend/233UStops_41_10.png" /> 19.0<br />\
    <img src="styles/legend/233UStops_41_11.png" /> 2.0<br />\
    <img src="styles/legend/233UStops_41_12.png" /> 20.0<br />\
    <img src="styles/legend/233UStops_41_13.png" /> 3.0<br />\
    <img src="styles/legend/233UStops_41_14.png" /> 4.0<br />\
    <img src="styles/legend/233UStops_41_15.png" /> 5.0<br />\
    <img src="styles/legend/233UStops_41_16.png" /> 6.0<br />\
    <img src="styles/legend/233UStops_41_17.png" /> 7.0<br />\
    <img src="styles/legend/233UStops_41_18.png" /> 8.0<br />\
    <img src="styles/legend/233UStops_41_19.png" /> 9.0<br />\
    <img src="styles/legend/233UStops_41_20.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pimpalesaudagar_1.setVisible(true);lyr_PimpleGaurav_2.setVisible(true);lyr_Keshavnagar_3.setVisible(true);lyr_Yavatmal_4.setVisible(true);lyr_Lahagaon_5.setVisible(true);lyr_KirkeeBoundary_6.setVisible(true);lyr_PimpreChinchwadboundary_7.setVisible(true);lyr_PuneGeoBoundary_8.setVisible(true);lyr_AllPunePopsep_9.setVisible(true);lyr_AllPunePopReprojected_10.setVisible(true);lyr_Rt233DMTrs_11.setVisible(true);lyr_233DStops_12.setVisible(true);lyr_hospital_13.setVisible(true);lyr_Industries_14.setVisible(true);lyr_Temple_15.setVisible(true);lyr_Offices_16.setVisible(true);lyr_PublicBuildings_17.setVisible(true);lyr_trafficsignal_18.setVisible(true);lyr_Rt233Pop1000Mtrs_19.setVisible(true);lyr_Rt233Pop500Mtrs_20.setVisible(true);lyr_Rt233Pop250Mtrs_21.setVisible(true);lyr_Rt233Pop100Mtrs_22.setVisible(true);lyr_Rt233DStagewiseAssessmentxlsx_23.setVisible(true);lyr_Rt233StopPop_24.setVisible(true);lyr_Rt233StopPopDissolved_25.setVisible(true);lyr_Rt233DMostPop_26.setVisible(true);lyr_Rt233DLeastPop_27.setVisible(true);lyr_Rt233ULeastPop_28.setVisible(true);lyr_Rt233UMostPop_29.setVisible(true);lyr_Rt233UStagewiseAssessmentxlsx_30.setVisible(true);lyr_Rt233Hospitals_31.setVisible(true);lyr_Rt233Education_32.setVisible(true);lyr_Rt233Offices_33.setVisible(true);lyr_Rt233PSU_34.setVisible(true);lyr_Rt233Temple_35.setVisible(true);lyr_Rt233Signals_36.setVisible(true);lyr_Rt233RWI_37.setVisible(true);lyr_Rt233Ridership_38.setVisible(true);lyr_Rt233Revenue_39.setVisible(true);lyr_Rt233UMtrs_40.setVisible(true);lyr_233UStops_41.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pimpalesaudagar_1,lyr_PimpleGaurav_2,lyr_Keshavnagar_3,lyr_Yavatmal_4,lyr_Lahagaon_5,lyr_KirkeeBoundary_6,lyr_PimpreChinchwadboundary_7,lyr_PuneGeoBoundary_8,lyr_AllPunePopsep_9,lyr_AllPunePopReprojected_10,lyr_Rt233DMTrs_11,lyr_233DStops_12,lyr_hospital_13,lyr_Industries_14,lyr_Temple_15,lyr_Offices_16,lyr_PublicBuildings_17,lyr_trafficsignal_18,lyr_Rt233Pop1000Mtrs_19,lyr_Rt233Pop500Mtrs_20,lyr_Rt233Pop250Mtrs_21,lyr_Rt233Pop100Mtrs_22,lyr_Rt233DStagewiseAssessmentxlsx_23,lyr_Rt233StopPop_24,lyr_Rt233StopPopDissolved_25,lyr_Rt233DMostPop_26,lyr_Rt233DLeastPop_27,lyr_Rt233ULeastPop_28,lyr_Rt233UMostPop_29,lyr_Rt233UStagewiseAssessmentxlsx_30,lyr_Rt233Hospitals_31,lyr_Rt233Education_32,lyr_Rt233Offices_33,lyr_Rt233PSU_34,lyr_Rt233Temple_35,lyr_Rt233Signals_36,lyr_Rt233RWI_37,lyr_Rt233Ridership_38,lyr_Rt233Revenue_39,lyr_Rt233UMtrs_40,lyr_233UStops_41];
lyr_Pimpalesaudagar_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpleGaurav_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Keshavnagar_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Yavatmal_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Lahagaon_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KirkeeBoundary_6.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpreChinchwadboundary_7.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PuneGeoBoundary_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_AllPunePopsep_9.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_AllPunePopReprojected_10.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'Area': 'Area', });
lyr_Rt233DMTrs_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_233DStops_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Stop_Name_Marathi': 'Stop_Name_Marathi', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', });
lyr_hospital_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'mobile': 'mobile', 'parking': 'parking', 'internet_a': 'internet_a', 'image': 'image', 'fax': 'fax', 'ele': 'ele', 'barrier': 'barrier', 'access': 'access', 'entrance': 'entrance', 'air_condit': 'air_condit', 'addr_floor': 'addr_floor', 'name_es': 'name_es', 'not_operat': 'not_operat', 'descriptio': 'descriptio', 'power': 'power', 'alt_name': 'alt_name', 'opening_ho': 'opening_ho', 'closing_ho': 'closing_ho', 'email': 'email', 'contact_we': 'contact_we', 'addr_quart': 'addr_quart', 'phone_mobi': 'phone_mobi', 'wheelchair': 'wheelchair', 'start_date': 'start_date', 'operator_t': 'operator_t', 'check_date': 'check_date', 'contact_ph': 'contact_ph', 'building': 'building', 'addr_neigh': 'addr_neigh', 'addr_house': 'addr_house', 'operator': 'operator', 'addr_subur': 'addr_subur', 'designatio': 'designatio', 'website': 'website', 'phone': 'phone', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'opening__1': 'opening__1', 'level': 'level', 'addr_hou_1': 'addr_hou_1', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'emergency': 'emergency', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'internet_1': 'internet_1', 'addr_stree': 'addr_stree', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'name': 'name', 'addr_subdi': 'addr_subdi', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', });
lyr_Industries_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_Temple_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', });
lyr_Offices_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'power': 'power', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'mobile': 'mobile', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'company': 'company', 'branch_wik': 'branch_wik', 'branch_w_1': 'branch_w_1', 'ref': 'ref', 'alt_name_e': 'alt_name_e', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'building_l': 'building_l', 'phone_mobi': 'phone_mobi', 'short_name': 'short_name', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'opening_ho': 'opening_ho', 'image': 'image', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'contact_tw': 'contact_tw', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'addr_count': 'addr_count', 'government': 'government', 'air_condit': 'air_condit', 'name_el': 'name_el', 'name_hi': 'name_hi', 'official_n': 'official_n', 'addr_floor': 'addr_floor', 'check_date': 'check_date', 'alt_name_m': 'alt_name_m', 'name_fr': 'name_fr', 'addr_unit': 'addr_unit', 'addr_full': 'addr_full', 'name_en': 'name_en', 'start_date': 'start_date', 'level': 'level', 'contact_mo': 'contact_mo', 'addr_place': 'addr_place', 'descriptio': 'descriptio', 'fax': 'fax', 'email': 'email', 'addr_neigh': 'addr_neigh', 'addr_local': 'addr_local', 'alt_name': 'alt_name', 'opening__1': 'opening__1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'name_mr': 'name_mr', 'entrance': 'entrance', 'smoking': 'smoking', 'phone': 'phone', 'addr_city': 'addr_city', 'designatio': 'designatio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'website': 'website', 'landuse': 'landuse', 'name': 'name', 'building': 'building', });
lyr_PublicBuildings_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'level': 'level', 'email': 'email', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'access': 'access', 'operator_s': 'operator_s', 'brand_shor': 'brand_shor', 'door': 'door', 'start_date': 'start_date', 'building': 'building', 'entrance': 'entrance', 'branch': 'branch', 'descriptio': 'descriptio', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'club': 'club', 'name_pl': 'name_pl', 'name_fr': 'name_fr', 'website': 'website', 'addr_floor': 'addr_floor', 'alt_name': 'alt_name', 'entertainm': 'entertainm', 'contact_ph': 'contact_ph', 'addr_place': 'addr_place', 'addr_house': 'addr_house', 'postal_cod': 'postal_cod', 'addr_hou_1': 'addr_hou_1', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'name_en': 'name_en', 'internet_a': 'internet_a', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'addr_postc': 'addr_postc', 'operator_t': 'operator_t', 'check_date': 'check_date', 'phone': 'phone', 'operator_w': 'operator_w', 'operator': 'operator', 'opening_ho': 'opening_ho', 'name_mr': 'name_mr', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', });
lyr_trafficsignal_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'descriptio': 'descriptio', 'check_date': 'check_date', 'alt_name': 'alt_name', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'name_en': 'name_en', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'name_mr': 'name_mr', 'name': 'name', 'junction': 'junction', });
lyr_Rt233Pop1000Mtrs_19.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt233Pop500Mtrs_20.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt233Pop250Mtrs_21.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt233Pop100Mtrs_22.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt233DStagewiseAssessmentxlsx_23.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Stg': 'Stg', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', 'unnamed__1_': 'unnamed__1_', 'Pax': 'Pax', 'Daily': 'Daily', 'Daily__': 'Daily__', });
lyr_Rt233StopPop_24.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt233StopPopDissolved_25.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_Rt233DMostPop_26.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Rt233DLeastPop_27.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Rt233ULeastPop_28.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Rt233UMostPop_29.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Rt233UStagewiseAssessmentxlsx_30.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Stg': 'Stg', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', 'unnamed__1_': 'unnamed__1_', 'Pax': 'Pax', 'Daily': 'Daily', 'Daily__': 'Daily__', });
lyr_Rt233Hospitals_31.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'mobile': 'mobile', 'parking': 'parking', 'internet_a': 'internet_a', 'image': 'image', 'fax': 'fax', 'ele': 'ele', 'barrier': 'barrier', 'access': 'access', 'entrance': 'entrance', 'air_condit': 'air_condit', 'addr_floor': 'addr_floor', 'name_es': 'name_es', 'not_operat': 'not_operat', 'descriptio': 'descriptio', 'power': 'power', 'alt_name': 'alt_name', 'opening_ho': 'opening_ho', 'closing_ho': 'closing_ho', 'email': 'email', 'contact_we': 'contact_we', 'addr_quart': 'addr_quart', 'phone_mobi': 'phone_mobi', 'wheelchair': 'wheelchair', 'start_date': 'start_date', 'operator_t': 'operator_t', 'check_date': 'check_date', 'contact_ph': 'contact_ph', 'building': 'building', 'addr_neigh': 'addr_neigh', 'addr_house': 'addr_house', 'operator': 'operator', 'addr_subur': 'addr_subur', 'designatio': 'designatio', 'website': 'website', 'phone': 'phone', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'opening__1': 'opening__1', 'level': 'level', 'addr_hou_1': 'addr_hou_1', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'emergency': 'emergency', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'internet_1': 'internet_1', 'addr_stree': 'addr_stree', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'name': 'name', 'addr_subdi': 'addr_subdi', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt233Education_32.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_full': 'addr_full', 'locked': 'locked', 'material': 'material', 'colour': 'colour', 'start_date': 'start_date', 'level': 'level', 'descriptio': 'descriptio', 'addr_floor': 'addr_floor', 'nursery': 'nursery', 'mobile': 'mobile', 'isced_leve': 'isced_leve', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'brand': 'brand', 'branch': 'branch', 'addr_place': 'addr_place', 'polling_st': 'polling_st', 'ref': 'ref', 'operator_w': 'operator_w', 'operator_s': 'operator_s', 'check_date': 'check_date', 'language_e': 'language_e', 'operator_t': 'operator_t', 'denominati': 'denominati', 'wheelchair': 'wheelchair', 'entrance': 'entrance', 'door': 'door', 'religion': 'religion', 'opening_ho': 'opening_ho', 'email': 'email', 'name_pl': 'name_pl', 'indoor_lev': 'indoor_lev', 'operator': 'operator', 'contact_ph': 'contact_ph', 'access': 'access', 'school': 'school', 'designatio': 'designatio', 'addr_house': 'addr_house', 'alt_name': 'alt_name', 'barrier': 'barrier', 'int_name': 'int_name', 'addr_hou_1': 'addr_hou_1', 'internet_a': 'internet_a', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'website': 'website', 'preschool': 'preschool', 'phone': 'phone', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'image': 'image', 'grades': 'grades', 'contact_mo': 'contact_mo', 'contact_em': 'contact_em', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt233Offices_33.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'power': 'power', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'mobile': 'mobile', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'company': 'company', 'branch_wik': 'branch_wik', 'branch_w_1': 'branch_w_1', 'ref': 'ref', 'alt_name_e': 'alt_name_e', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'building_l': 'building_l', 'phone_mobi': 'phone_mobi', 'short_name': 'short_name', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'opening_ho': 'opening_ho', 'image': 'image', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'contact_tw': 'contact_tw', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'addr_count': 'addr_count', 'government': 'government', 'air_condit': 'air_condit', 'name_el': 'name_el', 'name_hi': 'name_hi', 'official_n': 'official_n', 'addr_floor': 'addr_floor', 'check_date': 'check_date', 'alt_name_m': 'alt_name_m', 'name_fr': 'name_fr', 'addr_unit': 'addr_unit', 'addr_full': 'addr_full', 'name_en': 'name_en', 'start_date': 'start_date', 'level': 'level', 'contact_mo': 'contact_mo', 'addr_place': 'addr_place', 'descriptio': 'descriptio', 'fax': 'fax', 'email': 'email', 'addr_neigh': 'addr_neigh', 'addr_local': 'addr_local', 'alt_name': 'alt_name', 'opening__1': 'opening__1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'name_mr': 'name_mr', 'entrance': 'entrance', 'smoking': 'smoking', 'phone': 'phone', 'addr_city': 'addr_city', 'designatio': 'designatio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'website': 'website', 'landuse': 'landuse', 'name': 'name', 'building': 'building', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt233PSU_34.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'level': 'level', 'email': 'email', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'access': 'access', 'operator_s': 'operator_s', 'brand_shor': 'brand_shor', 'door': 'door', 'start_date': 'start_date', 'building': 'building', 'entrance': 'entrance', 'branch': 'branch', 'descriptio': 'descriptio', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'club': 'club', 'name_pl': 'name_pl', 'name_fr': 'name_fr', 'website': 'website', 'addr_floor': 'addr_floor', 'alt_name': 'alt_name', 'entertainm': 'entertainm', 'contact_ph': 'contact_ph', 'addr_place': 'addr_place', 'addr_house': 'addr_house', 'postal_cod': 'postal_cod', 'addr_hou_1': 'addr_hou_1', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'name_en': 'name_en', 'internet_a': 'internet_a', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'addr_postc': 'addr_postc', 'operator_t': 'operator_t', 'check_date': 'check_date', 'phone': 'phone', 'operator_w': 'operator_w', 'operator': 'operator', 'opening_ho': 'opening_ho', 'name_mr': 'name_mr', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt233Temple_35.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt233Signals_36.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'descriptio': 'descriptio', 'check_date': 'check_date', 'alt_name': 'alt_name', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'name_en': 'name_en', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'name_mr': 'name_mr', 'name': 'name', 'junction': 'junction', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt233RWI_37.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt233Ridership_38.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', 'layer': 'layer', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_Rt233Revenue_39.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', 'layer': 'layer', 'Pax': 'Pax', 'Revenue': 'Revenue', 'Rev/Pop': 'Rev/Pop', 'Rev/Pax': 'Rev/Pax', });
lyr_Rt233UMtrs_40.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_233UStops_41.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Stop_Name_Marathi': 'Stop_Name_Marathi', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', });
lyr_Pimpalesaudagar_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpleGaurav_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Keshavnagar_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Yavatmal_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Lahagaon_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KirkeeBoundary_6.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpreChinchwadboundary_7.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PuneGeoBoundary_8.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_AllPunePopsep_9.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_AllPunePopReprojected_10.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', 'Area': 'TextEdit', });
lyr_Rt233DMTrs_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_233DStops_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Stop_Name_Marathi': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', });
lyr_hospital_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'mobile': 'TextEdit', 'parking': 'TextEdit', 'internet_a': 'TextEdit', 'image': 'TextEdit', 'fax': 'TextEdit', 'ele': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'entrance': 'TextEdit', 'air_condit': 'TextEdit', 'addr_floor': 'TextEdit', 'name_es': 'TextEdit', 'not_operat': 'TextEdit', 'descriptio': 'TextEdit', 'power': 'TextEdit', 'alt_name': 'TextEdit', 'opening_ho': 'TextEdit', 'closing_ho': 'TextEdit', 'email': 'TextEdit', 'contact_we': 'TextEdit', 'addr_quart': 'TextEdit', 'phone_mobi': 'TextEdit', 'wheelchair': 'TextEdit', 'start_date': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'contact_ph': 'TextEdit', 'building': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_house': 'TextEdit', 'operator': 'TextEdit', 'addr_subur': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'opening__1': 'TextEdit', 'level': 'TextEdit', 'addr_hou_1': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'internet_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'addr_subdi': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', });
lyr_Industries_14.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', });
lyr_Temple_15.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', });
lyr_Offices_16.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'power': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'generato_2': 'TextEdit', 'generato_3': 'TextEdit', 'mobile': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'company': 'TextEdit', 'branch_wik': 'TextEdit', 'branch_w_1': 'TextEdit', 'ref': 'TextEdit', 'alt_name_e': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'building_l': 'TextEdit', 'phone_mobi': 'TextEdit', 'short_name': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'image': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'contact_tw': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_count': 'TextEdit', 'government': 'TextEdit', 'air_condit': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'official_n': 'TextEdit', 'addr_floor': 'TextEdit', 'check_date': 'TextEdit', 'alt_name_m': 'TextEdit', 'name_fr': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_full': 'TextEdit', 'name_en': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'contact_mo': 'TextEdit', 'addr_place': 'TextEdit', 'descriptio': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_local': 'TextEdit', 'alt_name': 'TextEdit', 'opening__1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'name_mr': 'TextEdit', 'entrance': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'addr_city': 'TextEdit', 'designatio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'website': 'TextEdit', 'landuse': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', });
lyr_PublicBuildings_17.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'level': 'TextEdit', 'email': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'operator_s': 'TextEdit', 'brand_shor': 'TextEdit', 'door': 'TextEdit', 'start_date': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'branch': 'TextEdit', 'descriptio': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'club': 'TextEdit', 'name_pl': 'TextEdit', 'name_fr': 'TextEdit', 'website': 'TextEdit', 'addr_floor': 'TextEdit', 'alt_name': 'TextEdit', 'entertainm': 'TextEdit', 'contact_ph': 'TextEdit', 'addr_place': 'TextEdit', 'addr_house': 'TextEdit', 'postal_cod': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'alt_name_m': 'TextEdit', 'alt_name_e': 'TextEdit', 'addr_postc': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'name_mr': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', });
lyr_trafficsignal_18.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'noexit': 'TextEdit', 'descriptio': 'TextEdit', 'check_date': 'TextEdit', 'alt_name': 'TextEdit', 'traffic_si': 'TextEdit', 'operationa': 'TextEdit', 'name_en': 'TextEdit', 'traffic__1': 'TextEdit', 'is_in': 'TextEdit', 'AND_a_nosr': 'TextEdit', 'traffic__2': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'junction': 'TextEdit', });
lyr_Rt233Pop1000Mtrs_19.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt233Pop500Mtrs_20.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt233Pop250Mtrs_21.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt233Pop100Mtrs_22.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt233DStagewiseAssessmentxlsx_23.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Stg': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'unnamed__1_': 'TextEdit', 'Pax': 'TextEdit', 'Daily': 'TextEdit', 'Daily__': 'TextEdit', });
lyr_Rt233StopPop_24.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt233StopPopDissolved_25.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', 'Pax': '', 'Ridership%': '', });
lyr_Rt233DMostPop_26.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Rt233DLeastPop_27.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Rt233ULeastPop_28.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Rt233UMostPop_29.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Rt233UStagewiseAssessmentxlsx_30.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Stg': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'unnamed__1_': 'TextEdit', 'Pax': 'TextEdit', 'Daily': 'TextEdit', 'Daily__': 'TextEdit', });
lyr_Rt233Hospitals_31.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'mobile': 'TextEdit', 'parking': 'TextEdit', 'internet_a': 'TextEdit', 'image': 'TextEdit', 'fax': 'TextEdit', 'ele': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'entrance': 'TextEdit', 'air_condit': 'TextEdit', 'addr_floor': 'TextEdit', 'name_es': 'TextEdit', 'not_operat': 'TextEdit', 'descriptio': 'TextEdit', 'power': 'TextEdit', 'alt_name': 'TextEdit', 'opening_ho': 'TextEdit', 'closing_ho': 'TextEdit', 'email': 'TextEdit', 'contact_we': 'TextEdit', 'addr_quart': 'TextEdit', 'phone_mobi': 'TextEdit', 'wheelchair': 'TextEdit', 'start_date': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'contact_ph': 'TextEdit', 'building': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_house': 'TextEdit', 'operator': 'TextEdit', 'addr_subur': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'opening__1': 'TextEdit', 'level': 'TextEdit', 'addr_hou_1': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'internet_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'addr_subdi': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt233Education_32.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_full': 'TextEdit', 'locked': 'TextEdit', 'material': 'TextEdit', 'colour': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'descriptio': 'TextEdit', 'addr_floor': 'TextEdit', 'nursery': 'TextEdit', 'mobile': 'TextEdit', 'isced_leve': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'brand': 'TextEdit', 'branch': 'TextEdit', 'addr_place': 'TextEdit', 'polling_st': 'TextEdit', 'ref': 'TextEdit', 'operator_w': 'TextEdit', 'operator_s': 'TextEdit', 'check_date': 'TextEdit', 'language_e': 'TextEdit', 'operator_t': 'TextEdit', 'denominati': 'TextEdit', 'wheelchair': 'TextEdit', 'entrance': 'TextEdit', 'door': 'TextEdit', 'religion': 'TextEdit', 'opening_ho': 'TextEdit', 'email': 'TextEdit', 'name_pl': 'TextEdit', 'indoor_lev': 'TextEdit', 'operator': 'TextEdit', 'contact_ph': 'TextEdit', 'access': 'TextEdit', 'school': 'TextEdit', 'designatio': 'TextEdit', 'addr_house': 'TextEdit', 'alt_name': 'TextEdit', 'barrier': 'TextEdit', 'int_name': 'TextEdit', 'addr_hou_1': 'TextEdit', 'internet_a': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'website': 'TextEdit', 'preschool': 'TextEdit', 'phone': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'image': 'TextEdit', 'grades': 'TextEdit', 'contact_mo': 'TextEdit', 'contact_em': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt233Offices_33.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'power': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'generato_2': 'TextEdit', 'generato_3': 'TextEdit', 'mobile': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'company': 'TextEdit', 'branch_wik': 'TextEdit', 'branch_w_1': 'TextEdit', 'ref': 'TextEdit', 'alt_name_e': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'building_l': 'TextEdit', 'phone_mobi': 'TextEdit', 'short_name': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'image': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'contact_tw': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_count': 'TextEdit', 'government': 'TextEdit', 'air_condit': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'official_n': 'TextEdit', 'addr_floor': 'TextEdit', 'check_date': 'TextEdit', 'alt_name_m': 'TextEdit', 'name_fr': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_full': 'TextEdit', 'name_en': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'contact_mo': 'TextEdit', 'addr_place': 'TextEdit', 'descriptio': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_local': 'TextEdit', 'alt_name': 'TextEdit', 'opening__1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'name_mr': 'TextEdit', 'entrance': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'addr_city': 'TextEdit', 'designatio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'website': 'TextEdit', 'landuse': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt233PSU_34.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'level': 'TextEdit', 'email': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'operator_s': 'TextEdit', 'brand_shor': 'TextEdit', 'door': 'TextEdit', 'start_date': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'branch': 'TextEdit', 'descriptio': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'club': 'TextEdit', 'name_pl': 'TextEdit', 'name_fr': 'TextEdit', 'website': 'TextEdit', 'addr_floor': 'TextEdit', 'alt_name': 'TextEdit', 'entertainm': 'TextEdit', 'contact_ph': 'TextEdit', 'addr_place': 'TextEdit', 'addr_house': 'TextEdit', 'postal_cod': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'alt_name_m': 'TextEdit', 'alt_name_e': 'TextEdit', 'addr_postc': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'name_mr': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt233Temple_35.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt233Signals_36.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'noexit': 'TextEdit', 'descriptio': 'TextEdit', 'check_date': 'TextEdit', 'alt_name': 'TextEdit', 'traffic_si': 'TextEdit', 'operationa': 'TextEdit', 'name_en': 'TextEdit', 'traffic__1': 'TextEdit', 'is_in': 'TextEdit', 'AND_a_nosr': 'TextEdit', 'traffic__2': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'junction': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt233RWI_37.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'Name': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt233Ridership_38.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'TextEdit', 'layer': 'TextEdit', 'Pax': 'TextEdit', 'Ridership%': 'TextEdit', });
lyr_Rt233Revenue_39.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'TextEdit', 'layer': 'TextEdit', 'Pax': 'TextEdit', 'Revenue': 'TextEdit', 'Rev/Pop': 'TextEdit', 'Rev/Pax': 'TextEdit', });
lyr_Rt233UMtrs_40.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_233UStops_41.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Stop_Name_Marathi': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', });
lyr_Pimpalesaudagar_1.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpleGaurav_2.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Keshavnagar_3.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Yavatmal_4.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Lahagaon_5.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KirkeeBoundary_6.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpreChinchwadboundary_7.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PuneGeoBoundary_8.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_AllPunePopsep_9.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'header label - visible with data', });
lyr_AllPunePopReprojected_10.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_Rt233DMTrs_11.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_233DStops_12.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Stop_Name_Marathi': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'Key': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', });
lyr_hospital_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'mobile': 'hidden field', 'parking': 'hidden field', 'internet_a': 'hidden field', 'image': 'hidden field', 'fax': 'hidden field', 'ele': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'entrance': 'hidden field', 'air_condit': 'hidden field', 'addr_floor': 'hidden field', 'name_es': 'hidden field', 'not_operat': 'hidden field', 'descriptio': 'hidden field', 'power': 'hidden field', 'alt_name': 'hidden field', 'opening_ho': 'hidden field', 'closing_ho': 'hidden field', 'email': 'hidden field', 'contact_we': 'hidden field', 'addr_quart': 'hidden field', 'phone_mobi': 'hidden field', 'wheelchair': 'hidden field', 'start_date': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'contact_ph': 'hidden field', 'building': 'hidden field', 'addr_neigh': 'hidden field', 'addr_house': 'hidden field', 'operator': 'hidden field', 'addr_subur': 'hidden field', 'designatio': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'opening__1': 'hidden field', 'level': 'hidden field', 'addr_hou_1': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'internet_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_count': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'name': 'header label - visible with data', 'addr_subdi': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', });
lyr_Industries_14.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_Temple_15.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', });
lyr_Offices_16.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'power': 'hidden field', 'generator_': 'hidden field', 'generato_1': 'hidden field', 'generato_2': 'hidden field', 'generato_3': 'hidden field', 'mobile': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'company': 'hidden field', 'branch_wik': 'hidden field', 'branch_w_1': 'hidden field', 'ref': 'hidden field', 'alt_name_e': 'hidden field', 'internet_a': 'hidden field', 'internet_1': 'hidden field', 'building_l': 'hidden field', 'phone_mobi': 'hidden field', 'short_name': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_2': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'image': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'contact_tw': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'addr_state': 'hidden field', 'addr_distr': 'hidden field', 'addr_count': 'hidden field', 'government': 'hidden field', 'air_condit': 'hidden field', 'name_el': 'hidden field', 'name_hi': 'hidden field', 'official_n': 'hidden field', 'addr_floor': 'hidden field', 'check_date': 'hidden field', 'alt_name_m': 'hidden field', 'name_fr': 'hidden field', 'addr_unit': 'hidden field', 'addr_full': 'hidden field', 'name_en': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'contact_mo': 'hidden field', 'addr_place': 'hidden field', 'descriptio': 'hidden field', 'fax': 'hidden field', 'email': 'hidden field', 'addr_neigh': 'hidden field', 'addr_local': 'hidden field', 'alt_name': 'hidden field', 'opening__1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'wheelchair': 'hidden field', 'name_mr': 'hidden field', 'entrance': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'addr_city': 'hidden field', 'designatio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'website': 'hidden field', 'landuse': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', });
lyr_PublicBuildings_17.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'level': 'hidden field', 'email': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'operator_s': 'hidden field', 'brand_shor': 'hidden field', 'door': 'hidden field', 'start_date': 'hidden field', 'building': 'hidden field', 'entrance': 'hidden field', 'branch': 'hidden field', 'descriptio': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'club': 'hidden field', 'name_pl': 'hidden field', 'name_fr': 'hidden field', 'website': 'hidden field', 'addr_floor': 'hidden field', 'alt_name': 'hidden field', 'entertainm': 'hidden field', 'contact_ph': 'hidden field', 'addr_place': 'hidden field', 'addr_house': 'hidden field', 'postal_cod': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'wheelchair': 'hidden field', 'name_en': 'hidden field', 'internet_a': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'addr_postc': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'phone': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'name_mr': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'inline label - visible with data', });
lyr_trafficsignal_18.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'descriptio': 'hidden field', 'check_date': 'hidden field', 'alt_name': 'hidden field', 'traffic_si': 'hidden field', 'operationa': 'hidden field', 'name_en': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'name_mr': 'hidden field', 'name': 'inline label - visible with data', 'junction': 'hidden field', });
lyr_Rt233Pop1000Mtrs_19.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt233Pop500Mtrs_20.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt233Pop250Mtrs_21.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt233Pop100Mtrs_22.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt233DStagewiseAssessmentxlsx_23.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'TOTAL_POP': 'inline label - visible with data', 'unnamed__1_': 'hidden field', 'Pax': 'inline label - visible with data', 'Daily': 'inline label - visible with data', 'Daily__': 'inline label - visible with data', });
lyr_Rt233StopPop_24.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt233StopPopDissolved_25.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'header label - visible with data', });
lyr_Rt233DMostPop_26.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_Rt233DLeastPop_27.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_Rt233ULeastPop_28.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_Rt233UMostPop_29.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_Rt233UStagewiseAssessmentxlsx_30.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'TOTAL_POP': 'inline label - visible with data', 'unnamed__1_': 'hidden field', 'Pax': 'inline label - visible with data', 'Daily': 'inline label - visible with data', 'Daily__': 'inline label - visible with data', });
lyr_Rt233Hospitals_31.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'mobile': 'hidden field', 'parking': 'hidden field', 'internet_a': 'hidden field', 'image': 'hidden field', 'fax': 'hidden field', 'ele': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'entrance': 'hidden field', 'air_condit': 'hidden field', 'addr_floor': 'hidden field', 'name_es': 'hidden field', 'not_operat': 'hidden field', 'descriptio': 'hidden field', 'power': 'hidden field', 'alt_name': 'hidden field', 'opening_ho': 'hidden field', 'closing_ho': 'hidden field', 'email': 'hidden field', 'contact_we': 'hidden field', 'addr_quart': 'hidden field', 'phone_mobi': 'hidden field', 'wheelchair': 'hidden field', 'start_date': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'contact_ph': 'hidden field', 'building': 'hidden field', 'addr_neigh': 'hidden field', 'addr_house': 'hidden field', 'operator': 'hidden field', 'addr_subur': 'hidden field', 'designatio': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'opening__1': 'hidden field', 'level': 'hidden field', 'addr_hou_1': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'internet_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_count': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'name': 'header label - visible with data', 'addr_subdi': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt233Education_32.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_full': 'hidden field', 'locked': 'hidden field', 'material': 'hidden field', 'colour': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'descriptio': 'hidden field', 'addr_floor': 'hidden field', 'nursery': 'hidden field', 'mobile': 'hidden field', 'isced_leve': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'brand': 'hidden field', 'branch': 'hidden field', 'addr_place': 'hidden field', 'polling_st': 'hidden field', 'ref': 'hidden field', 'operator_w': 'hidden field', 'operator_s': 'hidden field', 'check_date': 'hidden field', 'language_e': 'hidden field', 'operator_t': 'hidden field', 'denominati': 'hidden field', 'wheelchair': 'hidden field', 'entrance': 'hidden field', 'door': 'hidden field', 'religion': 'hidden field', 'opening_ho': 'hidden field', 'email': 'hidden field', 'name_pl': 'hidden field', 'indoor_lev': 'hidden field', 'operator': 'hidden field', 'contact_ph': 'hidden field', 'access': 'hidden field', 'school': 'hidden field', 'designatio': 'hidden field', 'addr_house': 'hidden field', 'alt_name': 'hidden field', 'barrier': 'hidden field', 'int_name': 'hidden field', 'addr_hou_1': 'hidden field', 'internet_a': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'website': 'hidden field', 'preschool': 'hidden field', 'phone': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'image': 'hidden field', 'grades': 'hidden field', 'contact_mo': 'hidden field', 'contact_em': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_distr': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt233Offices_33.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'power': 'hidden field', 'generator_': 'hidden field', 'generato_1': 'hidden field', 'generato_2': 'hidden field', 'generato_3': 'hidden field', 'mobile': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'company': 'hidden field', 'branch_wik': 'hidden field', 'branch_w_1': 'hidden field', 'ref': 'hidden field', 'alt_name_e': 'hidden field', 'internet_a': 'hidden field', 'internet_1': 'hidden field', 'building_l': 'hidden field', 'phone_mobi': 'hidden field', 'short_name': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_2': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'image': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'contact_tw': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'addr_state': 'hidden field', 'addr_distr': 'hidden field', 'addr_count': 'hidden field', 'government': 'hidden field', 'air_condit': 'hidden field', 'name_el': 'hidden field', 'name_hi': 'hidden field', 'official_n': 'hidden field', 'addr_floor': 'hidden field', 'check_date': 'hidden field', 'alt_name_m': 'hidden field', 'name_fr': 'hidden field', 'addr_unit': 'hidden field', 'addr_full': 'hidden field', 'name_en': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'contact_mo': 'hidden field', 'addr_place': 'hidden field', 'descriptio': 'hidden field', 'fax': 'hidden field', 'email': 'hidden field', 'addr_neigh': 'hidden field', 'addr_local': 'hidden field', 'alt_name': 'hidden field', 'opening__1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'wheelchair': 'hidden field', 'name_mr': 'hidden field', 'entrance': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'addr_city': 'hidden field', 'designatio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'website': 'hidden field', 'landuse': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt233PSU_34.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'level': 'hidden field', 'email': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'operator_s': 'hidden field', 'brand_shor': 'hidden field', 'door': 'hidden field', 'start_date': 'hidden field', 'building': 'hidden field', 'entrance': 'hidden field', 'branch': 'hidden field', 'descriptio': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'club': 'hidden field', 'name_pl': 'hidden field', 'name_fr': 'hidden field', 'website': 'hidden field', 'addr_floor': 'hidden field', 'alt_name': 'hidden field', 'entertainm': 'hidden field', 'contact_ph': 'hidden field', 'addr_place': 'hidden field', 'addr_house': 'hidden field', 'postal_cod': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'wheelchair': 'hidden field', 'name_en': 'hidden field', 'internet_a': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'addr_postc': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'phone': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'name_mr': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt233Temple_35.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt233Signals_36.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'descriptio': 'hidden field', 'check_date': 'hidden field', 'alt_name': 'hidden field', 'traffic_si': 'hidden field', 'operationa': 'hidden field', 'name_en': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'junction': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt233RWI_37.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'inline label - visible with data', 'error': 'hidden field', 'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt233Ridership_38.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'inline label - visible with data', });
lyr_Rt233Revenue_39.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Revenue': 'inline label - visible with data', 'Rev/Pop': 'inline label - visible with data', 'Rev/Pax': 'inline label - visible with data', });
lyr_Rt233UMtrs_40.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_233UStops_41.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Stop_Name_Marathi': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'Key': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', });
lyr_233UStops_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});