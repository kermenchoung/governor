(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=382)})({382:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(383);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},383:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Bobonaro.17.06-21-2016 06:10:56
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Bobonaro",revision:17,standaloneInit:true,baseWidth:500,baseHeight:478,baseScaleFactor:10,entities:{"TL.BB.AT":{outlines:[[M,2495,157,Q,2478,157,2437,184,2397,210,2373,210,2350,210,2331,197,2313,184,2293,184,2285,184,2274,187,2262,191,2249,191,2244,191,2228,187,2212,182,2199,182,2193,182,2180,187,2166,193,2158,193,2135,193,2107,167,2083,140,2081,138,2070,126,2065,122,2062,119,2048,109,2040,102,2028,102,2017,102,2011,102,1943,93,1922,66,1911,52,1906,49,1893,42,1865,42,1850,42,1808,50,1766,58,1742,58,1696,58,1673,46,1650,33,1628,33,1616,33,1613,35,L,1613,107,Q,1617,127,1625,189,1632,240,1639,263,1652,310,1656,341,1660,372,1659,400,1658,402,1658,405,1673,486,1674,498,1675,509,1675,570,1675,626,1672,634,1664,659,1618,696,1594,715,1565,754,1535,795,1514,812,1507,818,1487,827,1469,836,1460,845,1444,864,1436,873,1423,889,1409,896,1374,915,1312,940,1248,966,1245,960,1244,960,1244,959,1245,959,1245,959,1217,957,1189,954,1131,947,1131,945,1130,945,1129,945,1101,946,1084,966,1054,1005,1041,1015,1020,1032,995,1050,976,1065,957,1096,944,1111,917,1138,892,1164,884,1171,870,1182,842,1202,820,1221,803,1243,770,1286,753,1332,747,1348,747,1371,748,1406,747,1418,747,1421,747,1424,L,783,1424,Q,787,1424,793,1412,799,1401,808,1401,824,1408,826,1408,833,1408,837,1404,841,1401,847,1401,856,1401,860,1404,864,1408,869,1408,875,1408,885,1392,894,1376,896,1374,901,1369,914,1364,930,1358,935,1355,957,1337,974,1328,983,1322,998,1321,L,1026,1321,Q,1042,1321,1053,1333,1063,1345,1083,1345,1099,1345,1115,1349,1131,1353,1140,1353,1157,1353,1161,1346,1165,1333,1169,1321,1171,1316,1187,1311,1202,1307,1204,1293,1206,1280,1229,1281,1252,1282,1252,1273,1251,1254,1253,1245,1257,1232,1270,1232,1275,1232,1300,1235,1314,1235,1319,1226,1325,1217,1333,1217,1341,1217,1363,1245,1386,1273,1400,1273,1402,1273,1415,1271,1428,1268,1431,1268,1457,1268,1461,1276,1473,1305,1477,1310,1480,1313,1485,1328,1489,1339,1497,1341,1508,1342,1524,1344,1535,1346,1535,1355,1535,1370,1528,1376,1526,1378,1512,1386,1489,1399,1489,1445,1489,1464,1540,1561,1546,1570,1560,1583,1573,1596,1583,1603,1595,1612,1602,1622,1611,1636,1607,1647,L,1615,1647,Q,1616,1643,1630,1643,1643,1643,1653,1664,1659,1677,1669,1699,1670,1700,1687,1733,1698,1754,1707,1758,1718,1761,1737,1783,1759,1808,1772,1817,1777,1821,1807,1828,1834,1839,1830,1860,L,1842,1860,Q,1858,1853,1868,1853,1870,1853,1900,1861,1933,1869,1947,1869,1955,1869,1962,1867,1970,1865,1981,1865,1993,1865,1995,1866,1997,1869,2e3,1887,2003,1889,2005,1889,2023,1889,2050,1869,L,2090,1869,Q,2089,1854,2089,1836,2091,1824,2099,1809,2108,1793,2112,1785,2113,1782,2116,1771,2119,1761,2122,1756,2124,1752,2130,1747,2136,1741,2140,1735,2141,1733,2148,1701,2151,1695,2153,1696,2155,1697,2175,1694,2176,1693,2176,1692,2186,1678,2195,1673,2209,1664,2231,1667,2226,1642,2235,1626,2246,1609,2268,1611,2277,1613,2288,1611,2302,1609,2310,1604,2316,1599,2332,1600,2340,1600,2355,1601,2355,1600,2355,1575,2355,1558,2358,1549,L,2371,1549,Q,2371,1558,2374,1560,2375,1560,2383,1560,2391,1560,2395,1558,2398,1556,2407,1549,2412,1546,2416,1535,2420,1525,2421,1522,2427,1511,2446,1513,2472,1516,2479,1514,2493,1510,2501,1493,2509,1475,2517,1471,2527,1466,2535,1447,2546,1424,2551,1417,2552,1417,2552,1416,2558,1408,2565,1388,2572,1366,2575,1359,2585,1338,2588,1331,2595,1320,2604,1309,2623,1288,2623,1258,2625,1217,2627,1205,L,2625,1169,Q,2651,1147,2684,1127,2685,1126,2720,1112,2730,1108,2730,1090,2730,1079,2725,1066,2720,1052,2720,1043,2720,1026,2725,1024,2741,1017,2751,1009,2754,1005,2755,996,2755,988,2758,985,2762,982,2769,978,2773,975,2773,967,2773,965,2767,942,2761,919,2761,890,2761,870,2764,858,2767,843,2777,834,2784,828,2785,805,2787,782,2795,775,2803,768,2813,759,2822,752,2840,749,2859,746,2865,742,2875,735,2877,720,L,2878,714,Q,2878,705,2859,692,2840,680,2840,660,2840,649,2841,639,2842,630,2842,624,2842,618,2836,610,2828,600,2827,597,2824,586,2822,582,2819,574,2812,574,2782,574,2778,571,2774,568,2774,547,2774,541,2771,532,2766,522,2764,516,2758,502,2753,499,2749,496,2746,494,2741,490,2741,487,2741,478,2744,475,2750,471,2754,461,2762,444,2765,435,2767,432,2767,429,2767,428,2767,423,2767,414,2762,412,2754,411,2746,409,2719,402,2711,395,2696,382,2689,347,2687,347,2686,347,2676,347,2658,331,2644,317,2639,309,2616,272,2595,246,2589,238,2571,221,2554,207,2546,195,2527,167,2526,165,Q,2518,157,2495,157,Z]],label:"Atabae",shortLabel:"AT",labelPosition:[197.3,96.1],labelAlignment:[CEN,MID]},"TL.BB.BA":{outlines:[[M,1333,1217,Q,1325,1217,1319,1226,1314,1235,1300,1235,1275,1232,1270,1232,1257,1232,1253,1245,1251,1254,1252,1273,1252,1282,1229,1281,1206,1280,1204,1293,1202,1307,1187,1311,1171,1316,1169,1321,1165,1333,1161,1346,1157,1353,1140,1353,1131,1353,1115,1349,1099,1345,1083,1345,1063,1345,1053,1333,1042,1321,1026,1321,L,998,1321,Q,983,1322,974,1328,957,1337,935,1355,930,1358,914,1364,901,1369,896,1374,894,1376,885,1392,875,1408,869,1408,864,1408,860,1404,856,1401,847,1401,841,1401,837,1404,833,1408,826,1408,824,1408,808,1401,799,1401,793,1412,787,1424,783,1424,L,747,1424,Q,745,1444,738,1465,728,1500,724,1514,723,1522,721,1555,720,1582,714,1595,700,1624,665,1683,636,1732,629,1751,628,1753,627,1755,620,1777,606,1832,590,1885,565,1898,528,1917,515,1961,509,1986,500,2033,488,2066,434,2082,369,2096,344,2106,323,2114,285,2160,283,2162,251,2181,225,2196,225,2210,225,2217,233,2232,241,2248,241,2263,241,2284,211,2328,195,2351,174,2378,167,2391,137,2448,115,2492,106,2505,106,2506,105,2507,101,2515,95,2530,89,2548,80,2558,70,2570,59,2578,54,2584,54,2603,54,2619,78,2626,103,2634,103,2659,103,2669,96,2681,89,2694,89,2704,89,2725,94,2739,99,2755,99,2766,99,2784,70,2795,40,2806,40,2828,40,2910,94,2952,103,2959,131,2976,148,2986,148,2993,148,2998,141,3017,133,3037,133,3051,133,3075,150,3103,169,3134,194,3134,207,3134,220,3116,233,3098,245,3098,250,3098,255,3106,259,3113,259,3118,259,3122,250,3158,250,3182,292,3192,315,3197,343,3197,360,3197,373,3189,386,3180,395,3180,406,3180,433,3211,446,3227,458,3243,465,3246,500,3257,510,3260,525,3268,535,3275,543,3275,569,3275,575,3247,580,3220,592,3220,604,3220,609,3225,613,3229,618,3237,632,3255,682,3255,740,3255,755,3243,775,3226,788,3155,789,3153,790,3151,796,3131,797,3129,803,3115,814,3115,816,3115,827,3118,837,3120,843,3120,L,843,3131,885,3131,Q,903,3113,909,3076,914,3047,930,3047,939,3047,949,3055,960,3063,975,3063,995,3063,999,3061,1007,3055,1010,3028,1011,3016,1024,3006,1041,2991,1045,2986,1054,2972,1058,2969,1063,2964,1075,2964,1087,2963,1088,2962,1101,2949,1110,2942,1126,2929,1142,2929,1149,2929,1181,2937,1212,2944,1222,2944,1232,2944,1251,2921,1270,2899,1289,2899,1296,2899,1309,2906,1321,2914,1341,2914,1361,2914,1380,2896,1410,2867,1419,2861,1429,2858,1438,2853,1454,2843,1463,2829,1481,2800,1495,2785,1512,2768,1542,2759,1568,2750,1579,2737,1622,2682,1655,2636,1680,2603,1694,2545,1698,2528,1712,2448,1718,2413,1719,2408,1725,2385,1736,2371,L,1767,2334,Q,1785,2314,1797,2308,1796,2306,1796,2303,1796,2290,1799,2265,1802,2237,1804,2235,1819,2215,1823,2207,1829,2192,1829,2169,1834,2134,1835,2129,1838,2119,1853,2096,1857,2090,1862,2078,1865,2073,1871,2069,1883,2062,1886,2058,1893,2051,1894,2039,L,1929,2038,Q,1950,2038,1961,2028,1965,2024,1973,2021,1981,2019,1988,2019,1997,2020,2005,2001,2008,1995,2020,1994,2033,1992,2037,1988,2057,1966,2060,1959,2072,1942,2078,1933,2088,1918,2090,1906,2090,1891,2090,1869,L,2050,1869,Q,2023,1889,2005,1889,2003,1889,2e3,1887,1997,1869,1995,1866,1993,1865,1981,1865,1970,1865,1962,1867,1955,1869,1947,1869,1933,1869,1900,1861,1870,1853,1868,1853,1858,1853,1842,1860,L,1830,1860,Q,1834,1839,1807,1828,1777,1821,1772,1817,1759,1808,1737,1783,1718,1761,1707,1758,1698,1754,1687,1733,1670,1700,1669,1699,1659,1677,1653,1664,1643,1643,1630,1643,1616,1643,1615,1647,L,1607,1647,Q,1611,1636,1602,1622,1595,1612,1583,1603,1573,1596,1560,1583,1546,1570,1540,1561,1489,1464,1489,1445,1489,1399,1512,1386,1526,1378,1528,1376,1535,1370,1535,1355,1535,1346,1524,1344,1508,1342,1497,1341,1489,1339,1485,1328,1480,1313,1477,1310,1473,1305,1461,1276,1457,1268,1431,1268,1428,1268,1415,1271,1402,1273,1400,1273,1386,1273,1363,1245,Q,1341,1217,1333,1217,Z]],label:"Balibó",shortLabel:"BA",labelPosition:[106.5,224.6],labelAlignment:[CEN,MID]},"TL.BB.BO":{outlines:[[M,4576,2489,Q,4554,2496,4518,2496,4471,2495,4440,2496,4355,2498,4282,2558,4243,2590,4228,2598,4197,2616,4160,2616,4134,2616,4117,2607,4114,2606,4084,2583,4075,2576,4072,2551,4067,2504,4067,2502,4057,2456,4041,2413,4018,2351,3994,2340,3948,2318,3928,2283,3915,2261,3908,2219,3886,2235,3876,2243,3859,2256,3850,2273,3850,2273,3850,2274,3848,2281,3847,2284,3847,2285,3847,2292,3847,2299,3853,2305,3858,2310,3858,2315,3857,2325,3851,2325,3846,2325,3842,2323,3838,2320,3832,2320,3825,2319,3822,2319,3816,2320,3812,2326,3812,2328,3810,2336,3808,2343,3801,2347,3795,2350,3795,2356,3794,2366,3793,2367,3793,2368,3786,2373,3779,2379,3780,2384,3781,2393,3775,2403,3768,2413,3766,2421,3765,2423,3764,2425,3759,2447,3756,2456,3756,2460,3757,2479,3757,2515,3765,2524,3766,2525,3775,2531,3781,2535,3783,2539,3785,2543,3784,2551,3783,2559,3786,2563,3794,2576,3799,2604,3800,2611,3806,2613,3809,2615,3816,2618,3826,2624,3826,2636,3826,2666,3806,2695,3776,2736,3769,2753,3762,2779,3736,2788,3721,2794,3687,2795,3669,2794,3660,2795,3657,2795,3651,2805,3645,2818,3643,2819,3638,2827,3622,2825,3602,2822,3590,2822,L,3548,2822,Q,3532,2822,3527,2815,3522,2808,3513,2808,3494,2808,3449,2830,3405,2851,3400,2862,3388,2888,3369,2927,3355,2958,3347,2986,3345,2991,3338,2996,3329,3002,3327,3005,3322,3013,3312,3027,3304,3037,3293,3056,3281,3077,3275,3086,3264,3105,3234,3148,3204,3193,3196,3206,3186,3221,3176,3239,3175,3240,3171,3249,3169,3254,3163,3255,3159,3256,3152,3256,3145,3255,3142,3255,L,3103,3255,Q,3087,3255,3080,3257,3071,3260,3058,3270,3041,3283,3022,3291,3010,3295,2986,3302,2983,3302,2961,3303,2944,3304,2938,3310,L,2908,3347,Q,2904,3352,2895,3366,2887,3378,2878,3379,2865,3379,2855,3380,2852,3380,2846,3385,2840,3388,2839,3390,2829,3398,2827,3408,2825,3414,2824,3426,2832,3433,2833,3448,2833,3458,2832,3476,2831,3489,2837,3502,2841,3515,2844,3523,2844,3524,2844,3525,2850,3539,2860,3559,2874,3587,2880,3587,2893,3587,2923,3573,2952,3558,2997,3558,3024,3558,3031,3558,3046,3560,3059,3564,3073,3568,3086,3582,3094,3590,3105,3593,3110,3595,3117,3597,3120,3598,3147,3612,3172,3626,3181,3629,3191,3633,3217,3639,3238,3646,3241,3658,3244,3667,3246,3688,3252,3705,3270,3705,3282,3705,3295,3721,3308,3738,3309,3751,3309,3767,3321,3777,3341,3793,3347,3802,3351,3808,3358,3817,3363,3825,3362,3831,3361,3845,3365,3850,3368,3853,3378,3853,3382,3853,3392,3847,3403,3841,3406,3841,3410,3841,3418,3850,3426,3858,3429,3858,3432,3858,3444,3845,3457,3830,3459,3830,3465,3827,3485,3824,3494,3822,3503,3821,3508,3821,3515,3826,3521,3831,3526,3831,L,3531,3827,Q,3536,3824,3539,3824,3542,3824,3547,3824,3552,3824,3554,3822,3557,3821,3568,3812,3579,3801,3580,3801,3586,3798,3616,3779,3643,3761,3645,3761,3653,3761,3677,3772,3701,3782,3704,3782,3707,3782,3725,3768,3743,3755,3747,3754,3771,3753,3776,3752,3786,3750,3794,3743,L,3829,3743,Q,3829,3745,3827,3803,3826,3834,3843,3858,3848,3865,3865,3873,3881,3880,3891,3881,3935,3887,3943,3900,3951,3898,3961,3899,3989,3901,4013,3888,4036,3874,4051,3873,L,4052,3873,Q,4052,3868,4084,3874,4115,3880,4139,3890,4155,3897,4170,3906,4181,3911,4201,3911,4230,3911,4238,3907,4248,3901,4258,3878,4262,3869,4263,3838,4263,3818,4281,3809,4310,3795,4333,3741,4354,3692,4354,3655,4354,3620,4341,3603,4324,3584,4307,3562,4304,3557,4301,3553,4297,3545,4293,3534,4285,3512,4285,3498,4285,3477,4310,3456,4335,3435,4335,3406,4335,3381,4318,3341,4301,3302,4301,3282,4301,3266,4319,3251,4348,3228,4351,3224,4358,3215,4373,3191,4386,3168,4397,3156,4410,3142,4458,3126,4508,3108,4534,3086,4559,3064,4582,3030,4590,3020,4589,2992,4588,2966,4602,2956,4645,2922,4652,2901,4676,2833,4695,2833,4723,2833,4735,2887,4741,2915,4745,2956,4748,2972,4768,3003,4794,3042,4816,3042,4842,3042,4868,3001,4882,2981,4892,2958,4923,2936,4935,2921,4952,2901,4952,2876,4952,2856,4943,2830,4932,2796,4930,2784,4927,2756,4923,2744,4918,2728,4902,2714,4901,2712,4899,2711,4899,2710,4898,2709,4890,2689,4873,2664,4864,2649,4864,2616,4864,2582,4882,2546,4901,2517,4901,2513,4901,2500,4862,2479,4820,2459,4815,2456,4784,2437,4726,2437,4687,2437,4652,2454,Q,4595,2483,4576,2489,Z]],label:"Bobonaro",shortLabel:"BO",labelPosition:[388.8,316.8],labelAlignment:[CEN,MID]},"TL.BB.CA":{outlines:[[M,3415,865,Q,3405,850,3393,837,3375,817,3375,816,3359,797,3351,756,3344,716,3330,702,3286,653,3257,605,3218,542,3181,508,3145,474,3080,440,3042,421,3020,410,2982,390,2966,379,2935,359,2916,349,2889,336,2864,334,2861,334,2858,334,2846,334,2827,331,2803,328,2792,328,2791,328,2790,328,2790,322,2772,326,2756,329,2736,336,2707,346,2689,347,2696,382,2711,395,2719,402,2746,409,2754,411,2762,412,2767,414,2767,423,2767,428,2767,429,2767,432,2765,435,2762,444,2754,461,2750,471,2744,475,2741,478,2741,487,2741,490,2746,494,2749,496,2753,499,2758,502,2764,516,2766,522,2771,532,2774,541,2774,547,2774,568,2778,571,2782,574,2812,574,2819,574,2822,582,2824,586,2827,597,2828,600,2836,610,2842,618,2842,624,2842,630,2841,639,2840,649,2840,660,2840,680,2859,692,2878,705,2878,714,L,2877,720,Q,2875,735,2865,742,2859,746,2840,749,2822,752,2813,759,2803,768,2795,775,2787,782,2785,805,2784,828,2777,834,2767,843,2764,858,2761,870,2761,890,2761,919,2767,942,2773,965,2773,967,2773,975,2769,978,2762,982,2758,985,2755,988,2755,996,2754,1005,2751,1009,2741,1017,2725,1024,2720,1026,2720,1043,2720,1052,2725,1066,2730,1079,2730,1090,2730,1108,2720,1112,2685,1126,2684,1127,2651,1147,2625,1169,L,2627,1205,Q,2625,1217,2623,1258,2623,1288,2604,1309,2595,1320,2588,1331,2585,1338,2575,1359,2572,1366,2565,1388,2558,1408,2552,1416,2552,1417,2551,1417,2567,1430,2583,1434,2593,1437,2617,1441,2627,1443,2632,1451,2638,1463,2638,1463,2643,1467,2657,1475,2668,1481,2673,1487,2678,1493,2690,1498,2701,1503,2705,1508,2706,1510,2716,1521,2725,1533,2728,1539,2736,1555,2754,1581,2766,1604,2766,1615,2766,1631,2763,1648,2759,1664,2759,1687,2759,1689,2759,1711,2759,1716,2765,1720,2773,1724,2774,1725,2776,1731,2777,1744,2779,1757,2788,1764,2796,1770,2805,1775,2812,1781,2817,1795,2810,1796,2807,1798,2802,1800,2802,1804,2802,1811,2810,1818,2817,1826,2817,1832,2817,1836,2815,1839,2806,1845,2806,1848,2806,1851,2806,1859,2805,1866,2802,1871,2801,1874,2799,1892,2796,1910,2796,1916,2796,1926,2797,1928,2797,1931,2803,1939,2804,1941,2806,1950,2808,1958,2815,1959,2830,1959,2837,1974,2843,1984,2843,1998,2843,2007,2838,2013,2833,2018,2833,2021,2833,2034,2840,2050,2849,2074,2850,2079,2851,2083,2853,2098,2854,2109,2856,2113,2860,2119,2860,2126,2861,2128,2861,2136,2861,2138,2861,2140,2862,2149,2863,2161,2863,2175,2856,2186,2849,2196,2849,2209,2849,2227,2860,2251,2870,2275,2870,2280,2870,2315,2872,2317,2877,2328,2911,2326,2925,2325,2932,2326,2941,2328,2947,2336,2953,2343,2962,2345,2967,2346,2981,2346,3010,2346,3017,2341,3027,2335,3039,2324,3049,2315,3050,2315,3054,2315,3059,2318,3061,2319,3067,2324,3074,2329,3083,2327,3100,2326,3118,2313,3134,2301,3143,2287,3156,2265,3174,2256,3190,2248,3212,2248,3226,2248,3232,2250,3238,2251,3264,2259,3271,2260,3280,2261,3285,2262,3289,2271,3289,2273,3296,2283,3304,2293,3306,2295,3327,2313,3365,2320,3392,2326,3423,2326,3428,2326,3434,2328,3441,2330,3446,2330,3450,2331,3460,2331,3468,2331,3472,2337,3478,2346,3479,2352,3480,2356,3481,2365,3484,2377,3498,2387,3501,2390,3510,2393,3521,2396,3525,2398,3530,2400,3534,2407,3536,2411,3541,2421,3543,2424,3547,2434,3550,2442,3556,2442,3565,2442,3584,2450,3595,2450,3605,2439,3615,2427,3636,2427,3642,2427,3653,2449,3664,2472,3677,2472,3694,2472,3701,2446,3704,2417,3705,2411,L,3718,2411,Q,3725,2420,3741,2421,3750,2421,3766,2421,3768,2413,3775,2403,3781,2393,3780,2384,3779,2379,3786,2373,3793,2368,3793,2367,3794,2366,3795,2356,3795,2350,3801,2347,3808,2343,3810,2336,3812,2328,3812,2326,3816,2320,3822,2319,3825,2319,3832,2320,3838,2320,3842,2323,3846,2325,3851,2325,3857,2325,3858,2315,3858,2310,3853,2305,3847,2299,3847,2292,3847,2285,3847,2284,3848,2281,3850,2274,3850,2273,3850,2273,3859,2256,3876,2243,3886,2235,3908,2219,3908,2218,3908,2218,3908,2213,3907,2208,3904,2189,3888,2170,3860,2137,3858,2134,3855,2129,3829,2113,3808,2101,3808,2080,3808,2053,3826,2031,3853,1997,3860,1982,3867,1969,3905,1948,3940,1929,3940,1918,3940,1903,3910,1874,3892,1856,3882,1850,3881,1849,3880,1848,3869,1831,3861,1821,3848,1806,3834,1796,3829,1793,3795,1778,3778,1770,3778,1754,3778,1753,3789,1719,3801,1684,3801,1673,3801,1648,3780,1642,3755,1640,3746,1639,3682,1626,3653,1604,3574,1543,3574,1470,3574,1448,3590,1411,3604,1374,3604,1351,3604,1337,3569,1283,3535,1233,3525,1226,3493,1204,3483,1174,3476,1138,3473,1119,3474,1113,3478,1085,3481,1063,3481,1044,3481,1002,3441,921,Q,3421,874,3415,865,Z]],label:"Cailaco",shortLabel:"CA",labelPosition:[324.5,162.8],labelAlignment:[CEN,MID]},"TL.BB.LO":{outlines:[[M,3616,3779,Q,3586,3798,3580,3801,3579,3801,3568,3812,3557,3821,3554,3822,3552,3824,3547,3824,3542,3824,3539,3824,3536,3824,3531,3827,L,3526,3831,Q,3521,3831,3515,3826,3508,3821,3503,3821,3494,3822,3485,3824,3465,3827,3459,3830,3457,3830,3444,3845,3432,3858,3429,3858,3426,3858,3418,3850,3410,3841,3406,3841,3403,3841,3392,3847,3382,3853,3378,3853,3368,3853,3365,3850,3361,3845,3362,3831,3363,3825,3358,3817,3351,3808,3347,3802,3341,3793,3321,3777,3309,3767,3309,3751,3308,3738,3295,3721,3282,3705,3270,3705,3252,3705,3246,3688,3244,3667,3241,3658,3238,3646,3217,3639,3191,3633,3181,3629,3172,3626,3147,3612,3120,3598,3117,3597,3110,3595,3105,3593,3094,3590,3086,3582,3073,3568,3059,3564,3046,3560,3031,3558,3024,3558,2997,3558,2952,3558,2923,3573,2893,3587,2880,3587,2874,3587,2860,3559,2850,3539,2844,3525,2844,3524,2844,3523,2841,3515,2837,3502,2831,3489,2832,3476,2833,3458,2833,3448,2832,3433,2824,3426,2823,3427,2823,3428,2818,3444,2804,3460,2800,3464,2795,3481,2791,3495,2785,3497,2783,3497,2775,3497,2769,3497,2767,3498,2762,3500,2757,3508,2753,3512,2750,3517,2744,3525,2733,3527,2720,3528,2715,3529,2710,3530,2705,3540,2700,3549,2688,3549,2681,3549,2679,3546,2676,3540,2667,3537,2663,3535,2653,3535,2644,3536,2640,3533,2635,3527,2630,3506,2626,3488,2614,3485,2610,3484,2599,3485,2588,3486,2583,3484,2576,3481,2568,3473,2562,3465,2557,3464,L,2526,3464,Q,2502,3463,2492,3456,L,2471,3456,Q,2456,3486,2450,3512,2443,3541,2442,3567,2442,3576,2444,3608,2443,3631,2421,3648,2400,3664,2400,3674,2400,3686,2424,3725,2448,3765,2448,3785,2448,3799,2436,3802,2431,3803,2411,3802,2373,3800,2373,3834,2373,3914,2413,4007,2432,4052,2452,4095,2452,4097,2450,4111,2448,4126,2448,4135,2438,4151,2430,4161,2426,4168,2426,4188,2426,4209,2441,4221,2452,4230,2476,4235,2497,4239,2522,4249,2535,4254,2557,4262,2594,4274,2631,4283,2673,4292,2702,4293,2756,4294,2847,4327,2966,4372,2966,4433,2966,4468,2930,4524,2893,4582,2893,4618,2893,4638,2911,4657,2932,4680,2965,4680,2971,4680,2986,4679,3e3,4678,3005,4681,3010,4685,3027,4698,3036,4704,3043,4704,3054,4704,3072,4690,3090,4675,3094,4675,3100,4675,3115,4708,3130,4741,3149,4741,3155,4741,3178,4711,3204,4678,3204,4678,3234,4654,3266,4645,3266,4644,3309,4644,3313,4644,3316,4645,3334,4650,3347,4662,3392,4703,3408,4713,L,3423,4713,Q,3413,4674,3450,4641,3483,4612,3521,4612,3555,4612,3610,4633,3638,4644,3661,4655,L,3689,4633,Q,3719,4608,3728,4603,3737,4597,3774,4580,3809,4564,3810,4564,3814,4564,3830,4577,3847,4590,3849,4590,3853,4590,3867,4571,3882,4552,3895,4552,3912,4552,3933,4569,3953,4585,3973,4585,3987,4585,4001,4568,4018,4544,4024,4540,4037,4530,4051,4517,4071,4499,4071,4488,4071,4482,4069,4468,4067,4454,4067,4448,4067,4427,4073,4423,4077,4419,4085,4414,4092,4409,4097,4403,4113,4383,4123,4372,4141,4349,4141,4345,4141,4328,4135,4322,4130,4318,4116,4317,4077,4312,4051,4289,4035,4275,3999,4264,3966,4256,3953,4252,3951,4252,3950,4251,3867,4222,3839,4207,3793,4181,3793,4125,3793,4095,3797,4082,3802,4060,3822,4022,3832,4002,3858,3986,3884,3971,3892,3956,3903,3927,3912,3916,3923,3903,3943,3900,3935,3887,3891,3881,3881,3880,3865,3873,3848,3865,3843,3858,3826,3834,3827,3803,3829,3745,3829,3743,L,3794,3743,Q,3786,3750,3776,3752,3771,3753,3747,3754,3743,3755,3725,3768,3707,3782,3704,3782,3701,3782,3677,3772,3653,3761,3645,3761,Q,3643,3761,3616,3779,Z]],label:"Lolotoe",shortLabel:"LO",labelPosition:[325.7,415.2],labelAlignment:[CEN,MID]},"TL.BB.MA":{outlines:[[M,2817,1832,Q,2817,1826,2810,1818,2802,1811,2802,1804,2802,1800,2807,1798,2810,1796,2817,1795,2812,1781,2805,1775,2796,1770,2788,1764,2779,1757,2777,1744,2776,1731,2774,1725,2773,1724,2765,1720,2759,1716,2759,1711,2759,1689,2759,1687,2759,1664,2763,1648,2766,1631,2766,1615,2766,1604,2754,1581,2736,1555,2728,1539,2725,1533,2716,1521,2706,1510,2705,1508,2701,1503,2690,1498,2678,1493,2673,1487,2668,1481,2657,1475,2643,1467,2638,1463,2638,1463,2632,1451,2627,1443,2617,1441,2593,1437,2583,1434,2567,1430,2551,1417,2546,1424,2535,1447,2527,1466,2517,1471,2509,1475,2501,1493,2493,1510,2479,1514,2472,1516,2446,1513,2427,1511,2421,1522,2420,1525,2416,1535,2412,1546,2407,1549,2398,1556,2395,1558,2391,1560,2383,1560,2375,1560,2374,1560,2371,1558,2371,1549,L,2358,1549,Q,2355,1558,2355,1575,2355,1600,2355,1601,2340,1600,2332,1600,2316,1599,2310,1604,2302,1609,2288,1611,2277,1613,2268,1611,2246,1609,2235,1626,2226,1642,2231,1667,2209,1664,2195,1673,2186,1678,2176,1692,2176,1693,2175,1694,2155,1697,2153,1696,2151,1695,2148,1701,2141,1733,2140,1735,2136,1741,2130,1747,2124,1752,2122,1756,2119,1761,2116,1771,2113,1782,2112,1785,2108,1793,2099,1809,2091,1824,2089,1836,2089,1854,2090,1869,2090,1891,2090,1906,2088,1918,2078,1933,2072,1942,2060,1959,2057,1966,2037,1988,2033,1992,2020,1994,2008,1995,2005,2001,1997,2020,1988,2019,1981,2019,1973,2021,1965,2024,1961,2028,1950,2038,1929,2038,L,1894,2039,Q,1893,2051,1886,2058,1883,2062,1871,2069,1865,2073,1862,2078,1857,2090,1853,2096,1838,2119,1835,2129,1834,2134,1829,2169,1829,2192,1823,2207,1819,2215,1804,2235,1802,2237,1799,2265,1796,2290,1796,2303,1796,2306,1797,2308,1805,2303,1810,2303,1823,2303,1825,2305,1828,2307,1845,2326,1854,2334,1870,2336,1895,2339,1896,2339,1899,2359,1898,2379,1897,2396,1908,2404,1915,2408,1929,2415,1943,2428,1962,2444,1975,2457,1977,2477,1980,2508,1992,2532,1999,2544,2009,2558,2012,2561,2016,2565,2036,2581,2062,2588,2087,2594,2112,2595,2126,2595,2158,2599,2209,2661,2224,2674,2245,2692,2392,2800,2528,2905,2528,2929,2528,2939,2521,2968,2513,2997,2513,3008,2513,3010,2535,3078,2557,3145,2557,3157,2557,3171,2551,3180,2545,3189,2531,3196,2521,3203,2512,3217,2502,3233,2500,3236,2500,3241,2500,3248,2500,3271,2516,3311,2531,3351,2531,3358,2531,3367,2489,3424,2479,3441,2471,3456,L,2492,3456,Q,2502,3463,2526,3464,L,2557,3464,Q,2562,3465,2568,3473,2576,3481,2583,3484,2588,3486,2599,3485,2610,3484,2614,3485,2626,3488,2630,3506,2635,3527,2640,3533,2644,3536,2653,3535,2663,3535,2667,3537,2676,3540,2679,3546,2681,3549,2688,3549,2700,3549,2705,3540,2710,3530,2715,3529,2720,3528,2733,3527,2744,3525,2750,3517,2753,3512,2757,3508,2762,3500,2767,3498,2769,3497,2775,3497,2783,3497,2785,3497,2791,3495,2795,3481,2800,3464,2804,3460,2818,3444,2823,3428,2823,3427,2824,3426,2825,3414,2827,3408,2829,3398,2839,3390,2840,3388,2846,3385,2852,3380,2855,3380,2865,3379,2878,3379,2887,3378,2895,3366,2904,3352,2908,3347,L,2938,3310,Q,2944,3304,2961,3303,2983,3302,2986,3302,3010,3295,3022,3291,3041,3283,3058,3270,3071,3260,3080,3257,3087,3255,3103,3255,L,3142,3255,Q,3145,3255,3152,3256,3159,3256,3163,3255,3169,3254,3171,3249,3175,3240,3176,3239,3186,3221,3196,3206,3204,3193,3234,3148,3264,3105,3275,3086,3281,3077,3293,3056,3304,3037,3312,3027,3322,3013,3327,3005,3329,3002,3338,2996,3345,2991,3347,2986,3355,2958,3369,2927,3388,2888,3400,2862,3405,2851,3449,2830,3494,2808,3513,2808,3522,2808,3527,2815,3532,2822,3548,2822,L,3590,2822,Q,3602,2822,3622,2825,3638,2827,3643,2819,3645,2818,3651,2805,3657,2795,3660,2795,3669,2794,3687,2795,3721,2794,3736,2788,3762,2779,3769,2753,3776,2736,3806,2695,3826,2666,3826,2636,3826,2624,3816,2618,3809,2615,3806,2613,3800,2611,3799,2604,3794,2576,3786,2563,3783,2559,3784,2551,3785,2543,3783,2539,3781,2535,3775,2531,3766,2525,3765,2524,3757,2515,3757,2479,3756,2460,3756,2456,3759,2447,3764,2425,3765,2423,3766,2421,3750,2421,3741,2421,3725,2420,3718,2411,L,3705,2411,Q,3704,2417,3701,2446,3694,2472,3677,2472,3664,2472,3653,2449,3642,2427,3636,2427,3615,2427,3605,2439,3595,2450,3584,2450,3565,2442,3556,2442,3550,2442,3547,2434,3543,2424,3541,2421,3536,2411,3534,2407,3530,2400,3525,2398,3521,2396,3510,2393,3501,2390,3498,2387,3484,2377,3481,2365,3480,2356,3479,2352,3478,2346,3472,2337,3468,2331,3460,2331,3450,2331,3446,2330,3441,2330,3434,2328,3428,2326,3423,2326,3392,2326,3365,2320,3327,2313,3306,2295,3304,2293,3296,2283,3289,2273,3289,2271,3285,2262,3280,2261,3271,2260,3264,2259,3238,2251,3232,2250,3226,2248,3212,2248,3190,2248,3174,2256,3156,2265,3143,2287,3134,2301,3118,2313,3100,2326,3083,2327,3074,2329,3067,2324,3061,2319,3059,2318,3054,2315,3050,2315,3049,2315,3039,2324,3027,2335,3017,2341,3010,2346,2981,2346,2967,2346,2962,2345,2953,2343,2947,2336,2941,2328,2932,2326,2925,2325,2911,2326,2877,2328,2872,2317,2870,2315,2870,2280,2870,2275,2860,2251,2849,2227,2849,2209,2849,2196,2856,2186,2863,2175,2863,2161,2862,2149,2861,2140,2861,2138,2861,2136,2861,2128,2860,2126,2860,2119,2856,2113,2854,2109,2853,2098,2851,2083,2850,2079,2849,2074,2840,2050,2833,2034,2833,2021,2833,2018,2838,2013,2843,2007,2843,1998,2843,1984,2837,1974,2830,1959,2815,1959,2808,1958,2806,1950,2804,1941,2803,1939,2797,1931,2797,1928,2796,1926,2796,1916,2796,1910,2799,1892,2801,1874,2802,1871,2805,1866,2806,1859,2806,1851,2806,1848,2806,1845,2815,1839,Q,2817,1836,2817,1832,Z]],label:"Maliana",shortLabel:"MA",labelPosition:[281.1,264.4],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"bobonaro",type:"maps"}}})});