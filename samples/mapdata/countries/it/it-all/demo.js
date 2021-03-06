$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "it-na",
            "value": 0
        },
        {
            "hc-key": "it-tp",
            "value": 1
        },
        {
            "hc-key": "it-pa",
            "value": 2
        },
        {
            "hc-key": "it-me",
            "value": 3
        },
        {
            "hc-key": "it-ag",
            "value": 4
        },
        {
            "hc-key": "it-nu",
            "value": 5
        },
        {
            "hc-key": "it-og",
            "value": 6
        },
        {
            "hc-key": "it-mt",
            "value": 7
        },
        {
            "hc-key": "it-ce",
            "value": 8
        },
        {
            "hc-key": "it-bn",
            "value": 9
        },
        {
            "hc-key": "it-ct",
            "value": 10
        },
        {
            "hc-key": "it-cl",
            "value": 11
        },
        {
            "hc-key": "it-an",
            "value": 12
        },
        {
            "hc-key": "it-pg",
            "value": 13
        },
        {
            "hc-key": "it-ci",
            "value": 14
        },
        {
            "hc-key": "it-ss",
            "value": 15
        },
        {
            "hc-key": "it-ot",
            "value": 16
        },
        {
            "hc-key": "it-gr",
            "value": 17
        },
        {
            "hc-key": "it-li",
            "value": 18
        },
        {
            "hc-key": "it-ar",
            "value": 19
        },
        {
            "hc-key": "it-pc",
            "value": 20
        },
        {
            "hc-key": "it-fe",
            "value": 21
        },
        {
            "hc-key": "it-ra",
            "value": 22
        },
        {
            "hc-key": "it-fi",
            "value": 23
        },
        {
            "hc-key": "it-fc",
            "value": 24
        },
        {
            "hc-key": "it-rn",
            "value": 25
        },
        {
            "hc-key": "it-pr",
            "value": 26
        },
        {
            "hc-key": "it-ge",
            "value": 27
        },
        {
            "hc-key": "it-sv",
            "value": 28
        },
        {
            "hc-key": "it-ve",
            "value": 29
        },
        {
            "hc-key": "it-sp",
            "value": 30
        },
        {
            "hc-key": "it-vs",
            "value": 31
        },
        {
            "hc-key": "it-or",
            "value": 32
        },
        {
            "hc-key": "it-ca",
            "value": 33
        },
        {
            "hc-key": "it-pi",
            "value": 34
        },
        {
            "hc-key": "it-lu",
            "value": 35
        },
        {
            "hc-key": "it-re",
            "value": 36
        },
        {
            "hc-key": "it-bo",
            "value": 37
        },
        {
            "hc-key": "it-pt",
            "value": 38
        },
        {
            "hc-key": "it-si",
            "value": 39
        },
        {
            "hc-key": "it-cz",
            "value": 40
        },
        {
            "hc-key": "it-rc",
            "value": 41
        },
        {
            "hc-key": "it-lt",
            "value": 42
        },
        {
            "hc-key": "it-pz",
            "value": 43
        },
        {
            "hc-key": "it-av",
            "value": 44
        },
        {
            "hc-key": "it-is",
            "value": 45
        },
        {
            "hc-key": "it-cb",
            "value": 46
        },
        {
            "hc-key": "it-ba",
            "value": 47
        },
        {
            "hc-key": "it-br",
            "value": 48
        },
        {
            "hc-key": "it-le",
            "value": 49
        },
        {
            "hc-key": "it-ta",
            "value": 50
        },
        {
            "hc-key": "it-en",
            "value": 51
        },
        {
            "hc-key": "it-rg",
            "value": 52
        },
        {
            "hc-key": "it-pe",
            "value": 53
        },
        {
            "hc-key": "it-ri",
            "value": 54
        },
        {
            "hc-key": "it-te",
            "value": 55
        },
        {
            "hc-key": "it-fr",
            "value": 56
        },
        {
            "hc-key": "it-aq",
            "value": 57
        },
        {
            "hc-key": "it-rm",
            "value": 58
        },
        {
            "hc-key": "it-ch",
            "value": 59
        },
        {
            "hc-key": "it-vt",
            "value": 60
        },
        {
            "hc-key": "it-pu",
            "value": 61
        },
        {
            "hc-key": "it-mc",
            "value": 62
        },
        {
            "hc-key": "it-fm",
            "value": 63
        },
        {
            "hc-key": "it-ap",
            "value": 64
        },
        {
            "hc-key": "it-tr",
            "value": 65
        },
        {
            "hc-key": "it-to",
            "value": 66
        },
        {
            "hc-key": "it-bi",
            "value": 67
        },
        {
            "hc-key": "it-no",
            "value": 68
        },
        {
            "hc-key": "it-vc",
            "value": 69
        },
        {
            "hc-key": "it-ao",
            "value": 70
        },
        {
            "hc-key": "it-vb",
            "value": 71
        },
        {
            "hc-key": "it-al",
            "value": 72
        },
        {
            "hc-key": "it-mi",
            "value": 73
        },
        {
            "hc-key": "it-bg",
            "value": 74
        },
        {
            "hc-key": "it-mn",
            "value": 75
        },
        {
            "hc-key": "it-cr",
            "value": 76
        },
        {
            "hc-key": "it-pv",
            "value": 77
        },
        {
            "hc-key": "it-lo",
            "value": 78
        },
        {
            "hc-key": "it-va",
            "value": 79
        },
        {
            "hc-key": "it-so",
            "value": 80
        },
        {
            "hc-key": "it-co",
            "value": 81
        },
        {
            "hc-key": "it-lc",
            "value": 82
        },
        {
            "hc-key": "it-mb",
            "value": 83
        },
        {
            "hc-key": "it-ud",
            "value": 84
        },
        {
            "hc-key": "it-go",
            "value": 85
        },
        {
            "hc-key": "it-ts",
            "value": 86
        },
        {
            "hc-key": "it-ro",
            "value": 87
        },
        {
            "hc-key": "it-pd",
            "value": 88
        },
        {
            "hc-key": "it-vr",
            "value": 89
        },
        {
            "hc-key": "it-tn",
            "value": 90
        },
        {
            "hc-key": "it-bl",
            "value": 91
        },
        {
            "hc-key": "it-mo",
            "value": 92
        },
        {
            "hc-key": "it-fg",
            "value": 93
        },
        {
            "hc-key": "it-im",
            "value": 94
        },
        {
            "hc-key": "it-cs",
            "value": 95
        },
        {
            "hc-key": "it-vv",
            "value": 96
        },
        {
            "hc-key": "it-sa",
            "value": 97
        },
        {
            "hc-key": "it-bt",
            "value": 98
        },
        {
            "hc-key": "it-sr",
            "value": 99
        },
        {
            "hc-key": "it-cn",
            "value": 100
        },
        {
            "hc-key": "it-bz",
            "value": 101
        },
        {
            "hc-key": "it-ms",
            "value": 102
        },
        {
            "hc-key": "it-po",
            "value": 103
        },
        {
            "hc-key": "it-kr",
            "value": 104
        },
        {
            "hc-key": "it-at",
            "value": 105
        },
        {
            "hc-key": "it-bs",
            "value": 106
        },
        {
            "hc-key": "it-pn",
            "value": 107
        },
        {
            "hc-key": "it-vi",
            "value": 108
        },
        {
            "hc-key": "it-tv",
            "value": 109
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/it/it-all.js">Italy</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/it/it-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
