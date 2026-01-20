var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SzombathelyTeleplsszerkezetitervrszlet_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Szombathely Településszerkezeti terv (részlet)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SzombathelyTeleplsszerkezetitervrszlet_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1847641.261606, 5980380.353507, 1854695.985255, 5988340.131768]
        })
    });
var lyr_Gencsaptiszablyozsitervrszlet_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Gencsapáti szabályozási terv (részlet)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Gencsaptiszablyozsitervrszlet_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1847830.456414, 5986601.086772, 1851892.578645, 5992658.378468]
        })
    });
var format_Httr_5 = new ol.format.GeoJSON();
var features_Httr_5 = format_Httr_5.readFeatures(json_Httr_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Httr_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Httr_5.addFeatures(features_Httr_5);
var lyr_Httr_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Httr_5, 
                style: style_Httr_5,
                popuplayertitle: 'Háttér',
                interactive: false,
                title: '<img src="styles/legend/Httr_5.png" /> Háttér'
            });
var lyr_Teleplsszerkezetiterv_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Településszerkezeti terv<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Teleplsszerkezetiterv_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1849619.741664, 5984392.659459, 1857365.921572, 5993111.220191]
        })
    });
var format_Kataszter_7 = new ol.format.GeoJSON();
var features_Kataszter_7 = format_Kataszter_7.readFeatures(json_Kataszter_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kataszter_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kataszter_7.addFeatures(features_Kataszter_7);
var lyr_Kataszter_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kataszter_7,
maxResolution:4.900781576645843,
 
                style: style_Kataszter_7,
                popuplayertitle: 'Kataszter',
                interactive: false,
                title: '<img src="styles/legend/Kataszter_7.png" /> Kataszter'
            });
var format_Vzfolysok_8 = new ol.format.GeoJSON();
var features_Vzfolysok_8 = format_Vzfolysok_8.readFeatures(json_Vzfolysok_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vzfolysok_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vzfolysok_8.addFeatures(features_Vzfolysok_8);
var lyr_Vzfolysok_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vzfolysok_8,
maxResolution:11.201786460904787,
 
                style: style_Vzfolysok_8,
                popuplayertitle: 'Vízfolyások',
                interactive: false,
                title: '<img src="styles/legend/Vzfolysok_8.png" /> Vízfolyások'
            });
var format_Vzellts_9 = new ol.format.GeoJSON();
var features_Vzellts_9 = format_Vzellts_9.readFeatures(json_Vzellts_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vzellts_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vzellts_9.addFeatures(features_Vzellts_9);
var lyr_Vzellts_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vzellts_9,
maxResolution:2.8004466152261966,
 
                style: style_Vzellts_9,
                popuplayertitle: 'Vízellátás',
                interactive: false,
                title: '<img src="styles/legend/Vzellts_9.png" /> Vízellátás'
            });
var format_Csatorna_10 = new ol.format.GeoJSON();
var features_Csatorna_10 = format_Csatorna_10.readFeatures(json_Csatorna_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Csatorna_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Csatorna_10.addFeatures(features_Csatorna_10);
var lyr_Csatorna_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Csatorna_10,
maxResolution:2.8004466152261966,
 
                style: style_Csatorna_10,
                popuplayertitle: 'Csatorna',
                interactive: false,
                title: '<img src="styles/legend/Csatorna_10.png" /> Csatorna'
            });
var format_Elektromossg_11 = new ol.format.GeoJSON();
var features_Elektromossg_11 = format_Elektromossg_11.readFeatures(json_Elektromossg_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elektromossg_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elektromossg_11.addFeatures(features_Elektromossg_11);
var lyr_Elektromossg_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elektromossg_11,
maxResolution:2.8004466152261966,
 
                style: style_Elektromossg_11,
                popuplayertitle: 'Elektromosság',
                interactive: false,
                title: '<img src="styles/legend/Elektromossg_11.png" /> Elektromosság'
            });
var format_Hrkzls_12 = new ol.format.GeoJSON();
var features_Hrkzls_12 = format_Hrkzls_12.readFeatures(json_Hrkzls_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hrkzls_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hrkzls_12.addFeatures(features_Hrkzls_12);
var lyr_Hrkzls_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hrkzls_12,
maxResolution:2.8004466152261966,
 
                style: style_Hrkzls_12,
                popuplayertitle: 'Hírközlés',
                interactive: false,
                title: '<img src="styles/legend/Hrkzls_12.png" /> Hírközlés'
            });
var format_Sznhidrogn_13 = new ol.format.GeoJSON();
var features_Sznhidrogn_13 = format_Sznhidrogn_13.readFeatures(json_Sznhidrogn_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sznhidrogn_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sznhidrogn_13.addFeatures(features_Sznhidrogn_13);
var lyr_Sznhidrogn_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sznhidrogn_13,
maxResolution:2.8004466152261966,
 
                style: style_Sznhidrogn_13,
                popuplayertitle: 'Szénhidrogén',
                interactive: false,
                title: '<img src="styles/legend/Sznhidrogn_13.png" /> Szénhidrogén'
            });
var format_Tvh_14 = new ol.format.GeoJSON();
var features_Tvh_14 = format_Tvh_14.readFeatures(json_Tvh_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tvh_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tvh_14.addFeatures(features_Tvh_14);
var lyr_Tvh_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tvh_14,
maxResolution:2.8004466152261966,
 
                style: style_Tvh_14,
                popuplayertitle: 'Távhő',
                interactive: false,
                title: '<img src="styles/legend/Tvh_14.png" /> Távhő'
            });
var format_Vzellts_15 = new ol.format.GeoJSON();
var features_Vzellts_15 = format_Vzellts_15.readFeatures(json_Vzellts_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vzellts_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vzellts_15.addFeatures(features_Vzellts_15);
var lyr_Vzellts_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vzellts_15,
maxResolution:4.900781576645843,
 
                style: style_Vzellts_15,
                popuplayertitle: 'Vízellátás',
                interactive: false,
                title: '<img src="styles/legend/Vzellts_15.png" /> Vízellátás'
            });
var format_Csatorna_16 = new ol.format.GeoJSON();
var features_Csatorna_16 = format_Csatorna_16.readFeatures(json_Csatorna_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Csatorna_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Csatorna_16.addFeatures(features_Csatorna_16);
var lyr_Csatorna_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Csatorna_16,
maxResolution:4.900781576645843,
 
                style: style_Csatorna_16,
                popuplayertitle: 'Csatorna',
                interactive: false,
                title: '<img src="styles/legend/Csatorna_16.png" /> Csatorna'
            });
var format_Elektromossg_17 = new ol.format.GeoJSON();
var features_Elektromossg_17 = format_Elektromossg_17.readFeatures(json_Elektromossg_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elektromossg_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elektromossg_17.addFeatures(features_Elektromossg_17);
var lyr_Elektromossg_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elektromossg_17,
maxResolution:4.900781576645843,
 
                style: style_Elektromossg_17,
                popuplayertitle: 'Elektromosság',
                interactive: false,
                title: '<img src="styles/legend/Elektromossg_17.png" /> Elektromosság'
            });
var format_Hrkzls_18 = new ol.format.GeoJSON();
var features_Hrkzls_18 = format_Hrkzls_18.readFeatures(json_Hrkzls_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hrkzls_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hrkzls_18.addFeatures(features_Hrkzls_18);
var lyr_Hrkzls_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hrkzls_18,
maxResolution:4.900781576645843,
 
                style: style_Hrkzls_18,
                popuplayertitle: 'Hírközlés',
                interactive: false,
                title: '<img src="styles/legend/Hrkzls_18.png" /> Hírközlés'
            });
var format_Sznhidrogn_19 = new ol.format.GeoJSON();
var features_Sznhidrogn_19 = format_Sznhidrogn_19.readFeatures(json_Sznhidrogn_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sznhidrogn_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sznhidrogn_19.addFeatures(features_Sznhidrogn_19);
var lyr_Sznhidrogn_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sznhidrogn_19,
maxResolution:4.900781576645843,
 
                style: style_Sznhidrogn_19,
                popuplayertitle: 'Szénhidrogén',
                interactive: false,
                title: '<img src="styles/legend/Sznhidrogn_19.png" /> Szénhidrogén'
            });
var format_Vzellts_20 = new ol.format.GeoJSON();
var features_Vzellts_20 = format_Vzellts_20.readFeatures(json_Vzellts_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vzellts_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vzellts_20.addFeatures(features_Vzellts_20);
var lyr_Vzellts_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vzellts_20,
maxResolution:1.4002233076130983,
 
                style: style_Vzellts_20,
                popuplayertitle: 'Vízellátás',
                interactive: false,
                title: '<img src="styles/legend/Vzellts_20.png" /> Vízellátás'
            });
var format_Csatorna_21 = new ol.format.GeoJSON();
var features_Csatorna_21 = format_Csatorna_21.readFeatures(json_Csatorna_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Csatorna_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Csatorna_21.addFeatures(features_Csatorna_21);
var lyr_Csatorna_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Csatorna_21,
maxResolution:1.4002233076130983,
 
                style: style_Csatorna_21,
                popuplayertitle: 'Csatorna',
                interactive: false,
                title: '<img src="styles/legend/Csatorna_21.png" /> Csatorna'
            });
var format_Elektromossg_22 = new ol.format.GeoJSON();
var features_Elektromossg_22 = format_Elektromossg_22.readFeatures(json_Elektromossg_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elektromossg_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elektromossg_22.addFeatures(features_Elektromossg_22);
var lyr_Elektromossg_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elektromossg_22,
maxResolution:1.4002233076130983,
 
                style: style_Elektromossg_22,
                popuplayertitle: 'Elektromosság',
                interactive: false,
                title: '<img src="styles/legend/Elektromossg_22.png" /> Elektromosság'
            });
var format_Hrkzls_23 = new ol.format.GeoJSON();
var features_Hrkzls_23 = format_Hrkzls_23.readFeatures(json_Hrkzls_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hrkzls_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hrkzls_23.addFeatures(features_Hrkzls_23);
var lyr_Hrkzls_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hrkzls_23,
maxResolution:1.4002233076130983,
 
                style: style_Hrkzls_23,
                popuplayertitle: 'Hírközlés',
                interactive: false,
                title: '<img src="styles/legend/Hrkzls_23.png" /> Hírközlés'
            });
var format_Sznhidrogn_24 = new ol.format.GeoJSON();
var features_Sznhidrogn_24 = format_Sznhidrogn_24.readFeatures(json_Sznhidrogn_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sznhidrogn_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sznhidrogn_24.addFeatures(features_Sznhidrogn_24);
var lyr_Sznhidrogn_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sznhidrogn_24,
maxResolution:1.4002233076130983,
 
                style: style_Sznhidrogn_24,
                popuplayertitle: 'Szénhidrogén',
                interactive: false,
                title: '<img src="styles/legend/Sznhidrogn_24.png" /> Szénhidrogén'
            });
var format_Tvh_25 = new ol.format.GeoJSON();
var features_Tvh_25 = format_Tvh_25.readFeatures(json_Tvh_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tvh_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tvh_25.addFeatures(features_Tvh_25);
var lyr_Tvh_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tvh_25,
maxResolution:1.4002233076130983,
 
                style: style_Tvh_25,
                popuplayertitle: 'Távhő',
                interactive: false,
                title: '<img src="styles/legend/Tvh_25.png" /> Távhő'
            });
var format_FthlzatM8687_26 = new ol.format.GeoJSON();
var features_FthlzatM8687_26 = format_FthlzatM8687_26.readFeatures(json_FthlzatM8687_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FthlzatM8687_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FthlzatM8687_26.addFeatures(features_FthlzatM8687_26);
var lyr_FthlzatM8687_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FthlzatM8687_26,
maxResolution:28004.466152261964,
 minResolution:2.8004466152261966,

                style: style_FthlzatM8687_26,
                popuplayertitle: 'Főúthálózat (M86, 87)',
                interactive: false,
                title: '<img src="styles/legend/FthlzatM8687_26.png" /> Főúthálózat (M86, 87)'
            });
var format_Vastvonalak_27 = new ol.format.GeoJSON();
var features_Vastvonalak_27 = format_Vastvonalak_27.readFeatures(json_Vastvonalak_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vastvonalak_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vastvonalak_27.addFeatures(features_Vastvonalak_27);
var lyr_Vastvonalak_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vastvonalak_27,
maxResolution:28004.466152261964,
 minResolution:2.8004466152261966,

                style: style_Vastvonalak_27,
                popuplayertitle: 'Vasútvonalak',
                interactive: false,
                title: '<img src="styles/legend/Vastvonalak_27.png" /> Vasútvonalak'
            });
var format_Tvlatiiparvgnyok_28 = new ol.format.GeoJSON();
var features_Tvlatiiparvgnyok_28 = format_Tvlatiiparvgnyok_28.readFeatures(json_Tvlatiiparvgnyok_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tvlatiiparvgnyok_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tvlatiiparvgnyok_28.addFeatures(features_Tvlatiiparvgnyok_28);
var lyr_Tvlatiiparvgnyok_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tvlatiiparvgnyok_28, 
                style: style_Tvlatiiparvgnyok_28,
                popuplayertitle: 'Távlati iparvágányok',
                interactive: false,
                title: '<img src="styles/legend/Tvlatiiparvgnyok_28.png" /> Távlati iparvágányok'
            });
var format_M87tervezettnyomvonala_29 = new ol.format.GeoJSON();
var features_M87tervezettnyomvonala_29 = format_M87tervezettnyomvonala_29.readFeatures(json_M87tervezettnyomvonala_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M87tervezettnyomvonala_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M87tervezettnyomvonala_29.addFeatures(features_M87tervezettnyomvonala_29);
var lyr_M87tervezettnyomvonala_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M87tervezettnyomvonala_29, 
                style: style_M87tervezettnyomvonala_29,
                popuplayertitle: 'M87 tervezett nyomvonala',
                interactive: false,
                title: '<img src="styles/legend/M87tervezettnyomvonala_29.png" /> M87 tervezett nyomvonala'
            });
var format_Gothardkastly_30 = new ol.format.GeoJSON();
var features_Gothardkastly_30 = format_Gothardkastly_30.readFeatures(json_Gothardkastly_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gothardkastly_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gothardkastly_30.addFeatures(features_Gothardkastly_30);
var lyr_Gothardkastly_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gothardkastly_30,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_Gothardkastly_30,
                popuplayertitle: 'Gothard-kastély',
                interactive: false,
                title: '<img src="styles/legend/Gothardkastly_30.png" /> Gothard-kastély'
            });
var format_Laktanya_31 = new ol.format.GeoJSON();
var features_Laktanya_31 = format_Laktanya_31.readFeatures(json_Laktanya_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Laktanya_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laktanya_31.addFeatures(features_Laktanya_31);
var lyr_Laktanya_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Laktanya_31,
maxResolution:280.0446615226196,
 minResolution:2.8004466152261966,

                style: style_Laktanya_31,
                popuplayertitle: 'Laktanya',
                interactive: false,
                title: '<img src="styles/legend/Laktanya_31.png" /> Laktanya'
            });
var format_IpariPark_32 = new ol.format.GeoJSON();
var features_IpariPark_32 = format_IpariPark_32.readFeatures(json_IpariPark_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IpariPark_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IpariPark_32.addFeatures(features_IpariPark_32);
var lyr_IpariPark_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IpariPark_32,
maxResolution:280.0446615226196,
 minResolution:4.900781576645843,

                style: style_IpariPark_32,
                popuplayertitle: 'Ipari Park',
                interactive: false,
                title: '<img src="styles/legend/IpariPark_32.png" /> Ipari Park'
            });
var format_Telekhatr_33 = new ol.format.GeoJSON();
var features_Telekhatr_33 = format_Telekhatr_33.readFeatures(json_Telekhatr_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Telekhatr_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Telekhatr_33.addFeatures(features_Telekhatr_33);
var lyr_Telekhatr_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Telekhatr_33,
maxResolution:22.403572921809573,
 minResolution:4.900781576645843,

                style: style_Telekhatr_33,
                popuplayertitle: 'Telekhatár',
                interactive: false,
    title: 'Telekhatár<br />\
    <img src="styles/legend/Telekhatr_33_0.png" /> DominoTrans Kft.<br />\
    <img src="styles/legend/Telekhatr_33_1.png" /> Galambos Holding Kft.<br />\
    <img src="styles/legend/Telekhatr_33_2.png" /> Schaeffler Savaria Kft.<br />' });
var format_jelzvonal_34 = new ol.format.GeoJSON();
var features_jelzvonal_34 = format_jelzvonal_34.readFeatures(json_jelzvonal_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jelzvonal_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jelzvonal_34.addFeatures(features_jelzvonal_34);
var lyr_jelzvonal_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jelzvonal_34,
maxResolution:22.403572921809573,
 minResolution:4.900781576645843,

                style: style_jelzvonal_34,
                popuplayertitle: 'jelzővonal',
                interactive: false,
    title: 'jelzővonal<br />\
    <img src="styles/legend/jelzvonal_34_0.png" /> 1<br />\
    <img src="styles/legend/jelzvonal_34_1.png" /> 2<br />\
    <img src="styles/legend/jelzvonal_34_2.png" /> 3<br />' });
var format_jelzvonal_35 = new ol.format.GeoJSON();
var features_jelzvonal_35 = format_jelzvonal_35.readFeatures(json_jelzvonal_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jelzvonal_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jelzvonal_35.addFeatures(features_jelzvonal_35);
var lyr_jelzvonal_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jelzvonal_35,
maxResolution:22.403572921809573,
 minResolution:4.900781576645843,

                style: style_jelzvonal_35,
                popuplayertitle: 'jelzővonal',
                interactive: false,
    title: 'jelzővonal<br />\
    <img src="styles/legend/jelzvonal_35_0.png" /> 1<br />\
    <img src="styles/legend/jelzvonal_35_1.png" /> 2<br />\
    <img src="styles/legend/jelzvonal_35_2.png" /> 3<br />' });
var lyr_SchaefflerSavariaKft_36 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Schaeffler Savaria Kft.<br />' ,
        
maxResolution:22.403572921809573,

        minResolution:4.900781576645843,

        source: new ol.source.ImageStatic({
            url: "./layers/SchaefflerSavariaKft_36.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1844884.855263, 5986684.606440, 1848569.715373, 5991042.494556]
        })
    });
var lyr_DominoTransKft_37 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DominoTrans Kft.<br />' ,
        
maxResolution:22.403572921809573,

        minResolution:4.900781576645843,

        source: new ol.source.ImageStatic({
            url: "./layers/DominoTransKft_37.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1854256.782640, 5987082.189105, 1858169.843892, 5991466.437364]
        })
    });
var lyr_GalambosHoldingKft_38 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Galambos Holding Kft.<br />' ,
        
maxResolution:22.403572921809573,

        minResolution:4.900781576645843,

        source: new ol.source.ImageStatic({
            url: "./layers/GalambosHoldingKft_38.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1854382.518093, 5982237.803500, 1858306.382280, 5987155.958787]
        })
    });
var format_IpariParkparkolterletek_39 = new ol.format.GeoJSON();
var features_IpariParkparkolterletek_39 = format_IpariParkparkolterletek_39.readFeatures(json_IpariParkparkolterletek_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IpariParkparkolterletek_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IpariParkparkolterletek_39.addFeatures(features_IpariParkparkolterletek_39);
var lyr_IpariParkparkolterletek_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IpariParkparkolterletek_39,
maxResolution:4.900781576645843,
 
                style: style_IpariParkparkolterletek_39,
                popuplayertitle: 'Ipari Park - parkolóterületek',
                interactive: true,
                title: '<img src="styles/legend/IpariParkparkolterletek_39.png" /> Ipari Park - parkolóterületek'
            });
var format_IpariParkpletek_40 = new ol.format.GeoJSON();
var features_IpariParkpletek_40 = format_IpariParkpletek_40.readFeatures(json_IpariParkpletek_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IpariParkpletek_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IpariParkpletek_40.addFeatures(features_IpariParkpletek_40);
var lyr_IpariParkpletek_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IpariParkpletek_40,
maxResolution:4.900781576645843,
 
                style: style_IpariParkpletek_40,
                popuplayertitle: 'Ipari Park - épületek',
                interactive: true,
                title: '<img src="styles/legend/IpariParkpletek_40.png" /> Ipari Park - épületek'
            });
var group_IpariParkpleteksparkolterletek = new ol.layer.Group({
                                layers: [lyr_IpariParkparkolterletek_39,lyr_IpariParkpletek_40,],
                                fold: 'close',
                                title: 'Ipari Park épületek és parkolóterületek'});
var group_Cginformcik = new ol.layer.Group({
                                layers: [lyr_Telekhatr_33,lyr_jelzvonal_34,lyr_jelzvonal_35,lyr_SchaefflerSavariaKft_36,lyr_DominoTransKft_37,lyr_GalambosHoldingKft_38,],
                                fold: 'close',
                                title: 'Céginformációk'});
var group_Tervezsiterletek = new ol.layer.Group({
                                layers: [lyr_Gothardkastly_30,lyr_Laktanya_31,lyr_IpariPark_32,],
                                fold: 'close',
                                title: 'Tervezési területek'});
var group_Tervezetttsvasthlzat = new ol.layer.Group({
                                layers: [lyr_Tvlatiiparvgnyok_28,lyr_M87tervezettnyomvonala_29,],
                                fold: 'close',
                                title: 'Tervezett út- és vasúthálózat'});
var group_Jelenlegitsvasthlzat = new ol.layer.Group({
                                layers: [lyr_FthlzatM8687_26,lyr_Vastvonalak_27,],
                                fold: 'close',
                                title: 'Jelenlegi út- és vasúthálózat'});
var group_KzmvekGothardkastly = new ol.layer.Group({
                                layers: [lyr_Vzellts_20,lyr_Csatorna_21,lyr_Elektromossg_22,lyr_Hrkzls_23,lyr_Sznhidrogn_24,lyr_Tvh_25,],
                                fold: 'close',
                                title: 'Közművek - Gothard-kastély'});
var group_KzmvekIpariPark = new ol.layer.Group({
                                layers: [lyr_Vzellts_15,lyr_Csatorna_16,lyr_Elektromossg_17,lyr_Hrkzls_18,lyr_Sznhidrogn_19,],
                                fold: 'close',
                                title: 'Közművek - Ipari Park'});
var group_KzmvekLaktanya = new ol.layer.Group({
                                layers: [lyr_Vzellts_9,lyr_Csatorna_10,lyr_Elektromossg_11,lyr_Hrkzls_12,lyr_Sznhidrogn_13,lyr_Tvh_14,],
                                fold: 'close',
                                title: 'Közművek - Laktanya'});
var group_Spteteleplsszerkezetiterv = new ol.layer.Group({
                                layers: [lyr_Httr_5,lyr_Teleplsszerkezetiterv_6,],
                                fold: 'close',
                                title: 'Söpte településszerkezeti terv'});

lyr_EsriImagery_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_SzombathelyTeleplsszerkezetitervrszlet_3.setVisible(false);lyr_Gencsaptiszablyozsitervrszlet_4.setVisible(false);lyr_Httr_5.setVisible(false);lyr_Teleplsszerkezetiterv_6.setVisible(false);lyr_Kataszter_7.setVisible(true);lyr_Vzfolysok_8.setVisible(true);lyr_Vzellts_9.setVisible(true);lyr_Csatorna_10.setVisible(true);lyr_Elektromossg_11.setVisible(true);lyr_Hrkzls_12.setVisible(true);lyr_Sznhidrogn_13.setVisible(true);lyr_Tvh_14.setVisible(true);lyr_Vzellts_15.setVisible(true);lyr_Csatorna_16.setVisible(true);lyr_Elektromossg_17.setVisible(true);lyr_Hrkzls_18.setVisible(true);lyr_Sznhidrogn_19.setVisible(true);lyr_Vzellts_20.setVisible(true);lyr_Csatorna_21.setVisible(true);lyr_Elektromossg_22.setVisible(true);lyr_Hrkzls_23.setVisible(true);lyr_Sznhidrogn_24.setVisible(true);lyr_Tvh_25.setVisible(true);lyr_FthlzatM8687_26.setVisible(true);lyr_Vastvonalak_27.setVisible(true);lyr_Tvlatiiparvgnyok_28.setVisible(true);lyr_M87tervezettnyomvonala_29.setVisible(true);lyr_Gothardkastly_30.setVisible(true);lyr_Laktanya_31.setVisible(true);lyr_IpariPark_32.setVisible(true);lyr_Telekhatr_33.setVisible(true);lyr_jelzvonal_34.setVisible(true);lyr_jelzvonal_35.setVisible(true);lyr_SchaefflerSavariaKft_36.setVisible(true);lyr_DominoTransKft_37.setVisible(true);lyr_GalambosHoldingKft_38.setVisible(true);lyr_IpariParkparkolterletek_39.setVisible(true);lyr_IpariParkpletek_40.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_GoogleSatelliteHybrid_1,lyr_OpenStreetMap_2,lyr_SzombathelyTeleplsszerkezetitervrszlet_3,lyr_Gencsaptiszablyozsitervrszlet_4,group_Spteteleplsszerkezetiterv,lyr_Kataszter_7,lyr_Vzfolysok_8,group_KzmvekLaktanya,group_KzmvekIpariPark,group_KzmvekGothardkastly,group_Jelenlegitsvasthlzat,group_Tervezetttsvasthlzat,group_Tervezsiterletek,group_Cginformcik,group_IpariParkpleteksparkolterletek];
lyr_Httr_5.set('fieldAliases', {'MEGYEKOD': 'MEGYEKOD', 'POP_2013': 'POP_2013', 'T4': 'T4', 'TELNEV': 'TELNEV', 'erintett': 'erintett', 'X': 'X', 'Y': 'Y', 'AreaHA': 'AreaHA', 'Aream': 'Aream', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kataszter_7.set('fieldAliases', {'hrsz': 'hrsz', });
lyr_Vzfolysok_8.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Vzellts_9.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Csatorna_10.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Elektromossg_11.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Hrkzls_12.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Sznhidrogn_13.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Tvh_14.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Vzellts_15.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Csatorna_16.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Elektromossg_17.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Hrkzls_18.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Sznhidrogn_19.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Vzellts_20.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Csatorna_21.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Elektromossg_22.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Hrkzls_23.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Sznhidrogn_24.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_Tvh_25.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'Shape_Leng': 'Shape_Leng', });
lyr_FthlzatM8687_26.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 't00000': 't00000', 't2500': 't2500', 'TELEP': 'TELEP', 'TELEPULES': 'TELEPULES', 'Shape_Leng': 'Shape_Leng', });
lyr_Vastvonalak_27.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 't00000': 't00000', 't2500': 't2500', 'TELEP': 'TELEP', 'TELEPULES': 'TELEPULES', 'Shape_Leng': 'Shape_Leng', });
lyr_Tvlatiiparvgnyok_28.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 't00000': 't00000', 't2500': 't2500', 'TELEP': 'TELEP', 'TELEPULES': 'TELEPULES', 'Shape_Leng': 'Shape_Leng', });
lyr_M87tervezettnyomvonala_29.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 't00000': 't00000', 't2500': 't2500', 'TELEP': 'TELEP', 'TELEPULES': 'TELEPULES', 'Shape_Leng': 'Shape_Leng', });
lyr_Gothardkastly_30.set('fieldAliases', {'id': 'id', 'width': 'width', 'height': 'height', 'area': 'area', 'perimeter': 'perimeter', 'nev': 'nev', });
lyr_Laktanya_31.set('fieldAliases', {'id': 'id', 'width': 'width', 'height': 'height', 'area': 'area', 'perimeter': 'perimeter', 'nev': 'nev', });
lyr_IpariPark_32.set('fieldAliases', {'id': 'id', 'width': 'width', 'height': 'height', 'area': 'area', 'perimeter': 'perimeter', 'nev': 'nev', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Telekhatr_33.set('fieldAliases', {'id': 'id', 'nev': 'nev', 'hrsz': 'hrsz', });
lyr_jelzvonal_34.set('fieldAliases', {'id': 'id', 'nev': 'nev', });
lyr_jelzvonal_35.set('fieldAliases', {'id': 'id', 'nev': 'nev', });
lyr_IpariParkparkolterletek_39.set('fieldAliases', {'Kapacitás': 'Kapacitás', });
lyr_IpariParkpletek_40.set('fieldAliases', {'Név': 'Név', 'Leírás': 'Leírás', });
lyr_Httr_5.set('fieldImages', {'MEGYEKOD': 'TextEdit', 'POP_2013': 'TextEdit', 'T4': 'Range', 'TELNEV': 'TextEdit', 'erintett': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'AreaHA': 'TextEdit', 'Aream': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kataszter_7.set('fieldImages', {'hrsz': 'TextEdit', });
lyr_Vzfolysok_8.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Vzellts_9.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Csatorna_10.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Elektromossg_11.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Hrkzls_12.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Sznhidrogn_13.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Tvh_14.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Vzellts_15.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Csatorna_16.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Elektromossg_17.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Hrkzls_18.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Sznhidrogn_19.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'GlobalWidt': '', 'Shape_Leng': '', });
lyr_Vzellts_20.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Csatorna_21.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Elektromossg_22.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Hrkzls_23.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Sznhidrogn_24.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Tvh_25.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_FthlzatM8687_26.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 't00000': 'TextEdit', 't2500': 'TextEdit', 'TELEP': 'TextEdit', 'TELEPULES': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Vastvonalak_27.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 't00000': 'TextEdit', 't2500': 'TextEdit', 'TELEP': 'TextEdit', 'TELEPULES': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Tvlatiiparvgnyok_28.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 't00000': 'TextEdit', 't2500': 'TextEdit', 'TELEP': 'TextEdit', 'TELEPULES': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_M87tervezettnyomvonala_29.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 't00000': 'TextEdit', 't2500': 'TextEdit', 'TELEP': 'TextEdit', 'TELEPULES': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Gothardkastly_30.set('fieldImages', {'id': 'Range', 'width': 'TextEdit', 'height': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'nev': 'TextEdit', });
lyr_Laktanya_31.set('fieldImages', {'id': 'Range', 'width': 'TextEdit', 'height': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'nev': 'TextEdit', });
lyr_IpariPark_32.set('fieldImages', {'id': 'Range', 'width': 'TextEdit', 'height': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'nev': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_Telekhatr_33.set('fieldImages', {'id': 'TextEdit', 'nev': 'TextEdit', 'hrsz': 'TextEdit', });
lyr_jelzvonal_34.set('fieldImages', {'id': 'TextEdit', 'nev': 'TextEdit', });
lyr_jelzvonal_35.set('fieldImages', {'id': 'TextEdit', 'nev': 'TextEdit', });
lyr_IpariParkparkolterletek_39.set('fieldImages', {'Kapacitás': 'TextEdit', });
lyr_IpariParkpletek_40.set('fieldImages', {'Név': 'TextEdit', 'Leírás': 'TextEdit', });
lyr_Httr_5.set('fieldLabels', {'MEGYEKOD': 'no label', 'POP_2013': 'no label', 'T4': 'no label', 'TELNEV': 'no label', 'erintett': 'no label', 'X': 'no label', 'Y': 'no label', 'AreaHA': 'no label', 'Aream': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Kataszter_7.set('fieldLabels', {'hrsz': 'inline label - visible with data', });
lyr_Vzfolysok_8.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Vzellts_9.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Csatorna_10.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Elektromossg_11.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Hrkzls_12.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Sznhidrogn_13.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Tvh_14.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Vzellts_15.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Csatorna_16.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Elektromossg_17.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Hrkzls_18.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Sznhidrogn_19.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Vzellts_20.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Csatorna_21.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Elektromossg_22.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Hrkzls_23.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Sznhidrogn_24.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_Tvh_25.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 'Shape_Leng': 'no label', });
lyr_FthlzatM8687_26.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 't00000': 'no label', 't2500': 'no label', 'TELEP': 'no label', 'TELEPULES': 'no label', 'Shape_Leng': 'no label', });
lyr_Vastvonalak_27.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 't00000': 'no label', 't2500': 'no label', 'TELEP': 'no label', 'TELEPULES': 'no label', 'Shape_Leng': 'no label', });
lyr_Tvlatiiparvgnyok_28.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 't00000': 'no label', 't2500': 'no label', 'TELEP': 'no label', 'TELEPULES': 'no label', 'Shape_Leng': 'no label', });
lyr_M87tervezettnyomvonala_29.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', 't00000': 'no label', 't2500': 'no label', 'TELEP': 'no label', 'TELEPULES': 'no label', 'Shape_Leng': 'no label', });
lyr_Gothardkastly_30.set('fieldLabels', {'id': 'no label', 'width': 'no label', 'height': 'no label', 'area': 'no label', 'perimeter': 'no label', 'nev': 'no label', });
lyr_Laktanya_31.set('fieldLabels', {'id': 'no label', 'width': 'no label', 'height': 'no label', 'area': 'no label', 'perimeter': 'no label', 'nev': 'no label', });
lyr_IpariPark_32.set('fieldLabels', {'id': 'no label', 'width': 'no label', 'height': 'no label', 'area': 'no label', 'perimeter': 'no label', 'nev': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_Telekhatr_33.set('fieldLabels', {'id': 'no label', 'nev': 'no label', 'hrsz': 'no label', });
lyr_jelzvonal_34.set('fieldLabels', {'id': 'no label', 'nev': 'no label', });
lyr_jelzvonal_35.set('fieldLabels', {'id': 'no label', 'nev': 'no label', });
lyr_IpariParkparkolterletek_39.set('fieldLabels', {'Kapacitás': 'inline label - visible with data', });
lyr_IpariParkpletek_40.set('fieldLabels', {'Név': 'inline label - visible with data', 'Leírás': 'inline label - visible with data', });
lyr_IpariParkpletek_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});