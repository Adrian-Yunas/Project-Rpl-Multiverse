var classes = [
    {
        "name": "Laporan",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cek_laporan_sm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "export_laporan_sm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cek_laporan_sk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "export_laporan_sk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 11,
        "ccnMethodMax": 4,
        "externals": [
            "CI_Controller",
            "PhpOffice\\PhpSpreadsheet\\Spreadsheet",
            "PhpOffice\\PhpSpreadsheet\\Writer\\Xlsx",
            "PhpOffice\\PhpSpreadsheet\\Spreadsheet",
            "PhpOffice\\PhpSpreadsheet\\Writer\\Xlsx"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 1,
        "length": 378,
        "vocabulary": 86,
        "volume": 2429.13,
        "difficulty": 7.76,
        "effort": 18840.55,
        "level": 0.13,
        "bugs": 0.81,
        "time": 1047,
        "intelligentContent": 313.19,
        "number_operators": 60,
        "number_operands": 318,
        "number_operators_unique": 4,
        "number_operands_unique": 82,
        "cloc": 5,
        "loc": 170,
        "lloc": 165,
        "mi": 39.57,
        "mIwoC": 26.44,
        "commentWeight": 13.13,
        "kanDefect": 1.17,
        "relativeStructuralComplexity": 529,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 529,
        "totalStructuralComplexity": 3703,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 3703,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Auth",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_login",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registrasi",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sendEmail",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forgotPass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetPassword",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "changePassword",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "logout",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notfound",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 22,
        "ccn": 14,
        "ccnMethodMax": 4,
        "externals": [
            "CI_Controller"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 1,
        "length": 373,
        "vocabulary": 101,
        "volume": 2483.51,
        "difficulty": 8.31,
        "effort": 20631.27,
        "level": 0.12,
        "bugs": 0.83,
        "time": 1146,
        "intelligentContent": 298.96,
        "number_operators": 54,
        "number_operands": 319,
        "number_operators_unique": 5,
        "number_operands_unique": 96,
        "cloc": 23,
        "loc": 195,
        "lloc": 172,
        "mi": 50.94,
        "mIwoC": 25.58,
        "commentWeight": 25.37,
        "kanDefect": 0.99,
        "relativeStructuralComplexity": 676,
        "relativeDataComplexity": 0.05,
        "relativeSystemComplexity": 676.05,
        "totalStructuralComplexity": 6084,
        "totalDataComplexity": 0.41,
        "totalSystemComplexity": 6084.41,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "backup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "restore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 6,
        "ccnMethodMax": 4,
        "externals": [
            "CI_Controller"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 1,
        "length": 120,
        "vocabulary": 51,
        "volume": 680.69,
        "difficulty": 5.22,
        "effort": 3551.43,
        "level": 0.19,
        "bugs": 0.23,
        "time": 197,
        "intelligentContent": 130.47,
        "number_operators": 24,
        "number_operands": 96,
        "number_operators_unique": 5,
        "number_operands_unique": 46,
        "cloc": 11,
        "loc": 76,
        "lloc": 65,
        "mi": 67.6,
        "mIwoC": 39.81,
        "commentWeight": 27.79,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 121.25,
        "totalStructuralComplexity": 484,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 485,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Disposisi",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tambah_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_disposisi_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ubah_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hapus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "CI_Controller"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 1,
        "length": 126,
        "vocabulary": 32,
        "volume": 630,
        "difficulty": 5.38,
        "effort": 3388.97,
        "level": 0.19,
        "bugs": 0.21,
        "time": 188,
        "intelligentContent": 117.12,
        "number_operators": 22,
        "number_operands": 104,
        "number_operators_unique": 3,
        "number_operands_unique": 29,
        "cloc": 0,
        "loc": 73,
        "lloc": 73,
        "mi": 38.81,
        "mIwoC": 38.81,
        "commentWeight": 0,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 0.01,
        "relativeSystemComplexity": 361.01,
        "totalStructuralComplexity": 2166,
        "totalDataComplexity": 0.05,
        "totalSystemComplexity": 2166.05,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Export",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "openfile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "download",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pdfSm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pdfSk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "excelSm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "excelSk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 12,
        "ccnMethodMax": 6,
        "externals": [
            "CI_Controller",
            "PHPExcel",
            "PHPExcel_IOFactory",
            "PHPExcel",
            "PHPExcel_IOFactory"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 3,
        "length": 385,
        "vocabulary": 103,
        "volume": 2574.3,
        "difficulty": 9.65,
        "effort": 24840.69,
        "level": 0.1,
        "bugs": 0.86,
        "time": 1380,
        "intelligentContent": 266.78,
        "number_operators": 73,
        "number_operands": 312,
        "number_operators_unique": 6,
        "number_operands_unique": 97,
        "cloc": 12,
        "loc": 168,
        "lloc": 156,
        "mi": 46.78,
        "mIwoC": 26.66,
        "commentWeight": 20.12,
        "kanDefect": 1.03,
        "relativeStructuralComplexity": 784,
        "relativeDataComplexity": 0.15,
        "relativeSystemComplexity": 784.15,
        "totalStructuralComplexity": 5488,
        "totalDataComplexity": 1.03,
        "totalSystemComplexity": 5489.03,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Home",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_Controller"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 1,
        "length": 35,
        "vocabulary": 18,
        "volume": 145.95,
        "difficulty": 0.97,
        "effort": 141.65,
        "level": 1.03,
        "bugs": 0.05,
        "time": 8,
        "intelligentContent": 150.37,
        "number_operators": 2,
        "number_operands": 33,
        "number_operators_unique": 1,
        "number_operands_unique": 17,
        "cloc": 0,
        "loc": 16,
        "lloc": 16,
        "mi": 58.45,
        "mIwoC": 58.45,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 196,
        "totalStructuralComplexity": 392,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 392,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Pengaturan",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "role",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "role_tambah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "role_ubah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "role_hapus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pengguna",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pengguna_tambah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pengguna_hapus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jabatan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jabatan_tambah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jabatan_ubah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jabatan_hapus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sifat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sifat_tambah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sifat_ubah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sifat_hapus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 16,
        "nbMethods": 16,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 16,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 34,
        "ccn": 19,
        "ccnMethodMax": 4,
        "externals": [
            "CI_Controller"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 1,
        "length": 402,
        "vocabulary": 59,
        "volume": 2364.82,
        "difficulty": 8.68,
        "effort": 20523.28,
        "level": 0.12,
        "bugs": 0.79,
        "time": 1140,
        "intelligentContent": 272.49,
        "number_operators": 78,
        "number_operands": 324,
        "number_operators_unique": 3,
        "number_operands_unique": 56,
        "cloc": 0,
        "loc": 208,
        "lloc": 208,
        "mi": 23.25,
        "mIwoC": 23.25,
        "commentWeight": 0,
        "kanDefect": 1.41,
        "relativeStructuralComplexity": 576,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 576,
        "totalStructuralComplexity": 9216,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 9216,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Sk",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ambilData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hapus_multiple",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "detail",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tambah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tambah_sk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hapus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ubah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ubah_sk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 14,
        "ccnMethodMax": 5,
        "externals": [
            "CI_Controller"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 1,
        "length": 402,
        "vocabulary": 89,
        "volume": 2603.24,
        "difficulty": 7.74,
        "effort": 20152.18,
        "level": 0.13,
        "bugs": 0.87,
        "time": 1120,
        "intelligentContent": 336.29,
        "number_operators": 73,
        "number_operands": 329,
        "number_operators_unique": 4,
        "number_operands_unique": 85,
        "cloc": 6,
        "loc": 167,
        "lloc": 161,
        "mi": 40.53,
        "mIwoC": 26.06,
        "commentWeight": 14.47,
        "kanDefect": 1.15,
        "relativeStructuralComplexity": 625,
        "relativeDataComplexity": 0.01,
        "relativeSystemComplexity": 625.01,
        "totalStructuralComplexity": 6250,
        "totalDataComplexity": 0.08,
        "totalSystemComplexity": 6250.08,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Sm",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ambilData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hapus_multiple",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "detail",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tambah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tambah_sm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ubah",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ubah_sm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 20,
        "ccn": 12,
        "ccnMethodMax": 5,
        "externals": [
            "CI_Controller"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 1,
        "length": 375,
        "vocabulary": 88,
        "volume": 2422.29,
        "difficulty": 7.33,
        "effort": 17763.44,
        "level": 0.14,
        "bugs": 0.81,
        "time": 987,
        "intelligentContent": 330.31,
        "number_operators": 67,
        "number_operands": 308,
        "number_operators_unique": 4,
        "number_operands_unique": 84,
        "cloc": 7,
        "loc": 154,
        "lloc": 147,
        "mi": 43.63,
        "mIwoC": 27.41,
        "commentWeight": 16.22,
        "kanDefect": 1.08,
        "relativeStructuralComplexity": 484,
        "relativeDataComplexity": 0.01,
        "relativeSystemComplexity": 484.01,
        "totalStructuralComplexity": 4356,
        "totalDataComplexity": 0.09,
        "totalSystemComplexity": 4356.09,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "User",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_user_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update_profile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update_password",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 9,
        "ccnMethodMax": 6,
        "externals": [
            "CI_Controller"
        ],
        "parents": [
            "CI_Controller"
        ],
        "lcom": 1,
        "length": 188,
        "vocabulary": 54,
        "volume": 1081.92,
        "difficulty": 7.6,
        "effort": 8224.79,
        "level": 0.13,
        "bugs": 0.36,
        "time": 457,
        "intelligentContent": 142.32,
        "number_operators": 39,
        "number_operands": 149,
        "number_operators_unique": 5,
        "number_operands_unique": 49,
        "cloc": 3,
        "loc": 90,
        "lloc": 87,
        "mi": 49.19,
        "mIwoC": 35.24,
        "commentWeight": 13.95,
        "kanDefect": 0.71,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 289,
        "totalStructuralComplexity": 1445,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1445,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Dompdf_gen",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "DOMPDF"
        ],
        "parents": [],
        "lcom": 1,
        "length": 8,
        "vocabulary": 5,
        "volume": 18.58,
        "difficulty": 1.67,
        "effort": 30.96,
        "level": 0.6,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 11.15,
        "number_operators": 3,
        "number_operands": 5,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 17,
        "loc": 28,
        "lloc": 11,
        "mi": 114.99,
        "mIwoC": 68.26,
        "commentWeight": 46.73,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Template",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render_page",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 18,
        "vocabulary": 7,
        "volume": 50.53,
        "difficulty": 0,
        "effort": 0,
        "level": 0.78,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 39.3,
        "number_operators": 0,
        "number_operands": 18,
        "number_operators_unique": 0,
        "number_operands_unique": 7,
        "cloc": 0,
        "loc": 17,
        "lloc": 17,
        "mi": 61.1,
        "mIwoC": 61.1,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 3,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Disposisi_model",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "checkSm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDisposisi",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRowDispos",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_Model"
        ],
        "parents": [
            "CI_Model"
        ],
        "lcom": 1,
        "length": 116,
        "vocabulary": 23,
        "volume": 524.73,
        "difficulty": 4.9,
        "effort": 2573.69,
        "level": 0.2,
        "bugs": 0.17,
        "time": 143,
        "intelligentContent": 106.98,
        "number_operators": 13,
        "number_operands": 103,
        "number_operators_unique": 2,
        "number_operands_unique": 21,
        "cloc": 0,
        "loc": 44,
        "lloc": 44,
        "mi": 44.97,
        "mIwoC": 44.97,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 144.28,
        "totalStructuralComplexity": 720,
        "totalDataComplexity": 1.38,
        "totalSystemComplexity": 721.38,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Home_model",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "countSm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "countSk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "countJabatan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "countFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSmBulan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSkBulan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSmTahun",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSkTahun",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_Model"
        ],
        "parents": [
            "CI_Model"
        ],
        "lcom": 1,
        "length": 85,
        "vocabulary": 22,
        "volume": 379.05,
        "difficulty": 5.78,
        "effort": 2190.08,
        "level": 0.17,
        "bugs": 0.13,
        "time": 122,
        "intelligentContent": 65.61,
        "number_operators": 33,
        "number_operands": 52,
        "number_operators_unique": 4,
        "number_operands_unique": 18,
        "cloc": 5,
        "loc": 49,
        "lloc": 44,
        "mi": 69.71,
        "mIwoC": 45.96,
        "commentWeight": 23.75,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.33,
        "relativeSystemComplexity": 26.33,
        "totalStructuralComplexity": 200,
        "totalDataComplexity": 10.67,
        "totalSystemComplexity": 210.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Pengaturan_model",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getRole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insertRole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateRole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPengguna",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insertPengguna",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getJabatan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insertJabatan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateJabatan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSifat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insertSifat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateSifat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 11,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 14,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "CI_Model"
        ],
        "parents": [
            "CI_Model"
        ],
        "lcom": 1,
        "length": 175,
        "vocabulary": 30,
        "volume": 858.71,
        "difficulty": 11.46,
        "effort": 9842.09,
        "level": 0.09,
        "bugs": 0.29,
        "time": 547,
        "intelligentContent": 74.92,
        "number_operators": 26,
        "number_operands": 149,
        "number_operators_unique": 4,
        "number_operands_unique": 26,
        "cloc": 1,
        "loc": 88,
        "lloc": 87,
        "mi": 44.83,
        "mIwoC": 36.61,
        "commentWeight": 8.22,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 144.6,
        "totalStructuralComplexity": 1584,
        "totalDataComplexity": 6.62,
        "totalSystemComplexity": 1590.62,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Sk_model",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_get_datatables_query",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_datatables",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count_filtered",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count_all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSuratKeluar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hapus_multiple",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetch_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSkByDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 24,
        "ccn": 15,
        "ccnMethodMax": 7,
        "externals": [
            "CI_Model"
        ],
        "parents": [
            "CI_Model"
        ],
        "lcom": 1,
        "length": 352,
        "vocabulary": 67,
        "volume": 2135.26,
        "difficulty": 25,
        "effort": 53381.58,
        "level": 0.04,
        "bugs": 0.71,
        "time": 2966,
        "intelligentContent": 85.41,
        "number_operators": 67,
        "number_operands": 285,
        "number_operators_unique": 10,
        "number_operands_unique": 57,
        "cloc": 7,
        "loc": 150,
        "lloc": 143,
        "mi": 44.08,
        "mIwoC": 27.65,
        "commentWeight": 16.42,
        "kanDefect": 1.22,
        "relativeStructuralComplexity": 576,
        "relativeDataComplexity": 0.34,
        "relativeSystemComplexity": 576.34,
        "totalStructuralComplexity": 5760,
        "totalDataComplexity": 3.4,
        "totalSystemComplexity": 5763.4,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Sm_model",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_get_datatables_query",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_datatables",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count_filtered",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count_all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSuratMasuk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hapus_multiple",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetch_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSmByDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 14,
        "ccnMethodMax": 7,
        "externals": [
            "CI_Model"
        ],
        "parents": [
            "CI_Model"
        ],
        "lcom": 1,
        "length": 348,
        "vocabulary": 69,
        "volume": 2125.77,
        "difficulty": 24.07,
        "effort": 51162.52,
        "level": 0.04,
        "bugs": 0.71,
        "time": 2842,
        "intelligentContent": 88.32,
        "number_operators": 64,
        "number_operands": 284,
        "number_operators_unique": 10,
        "number_operands_unique": 59,
        "cloc": 5,
        "loc": 145,
        "lloc": 140,
        "mi": 42.19,
        "mIwoC": 28,
        "commentWeight": 14.19,
        "kanDefect": 1.15,
        "relativeStructuralComplexity": 576,
        "relativeDataComplexity": 0.3,
        "relativeSystemComplexity": 576.3,
        "totalStructuralComplexity": 5760,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 5763,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "User_model",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "get_user_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ubahProfile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ubahPassword",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "CI_Model"
        ],
        "parents": [
            "CI_Model"
        ],
        "lcom": 1,
        "length": 45,
        "vocabulary": 19,
        "volume": 191.16,
        "difficulty": 5.47,
        "effort": 1044.99,
        "level": 0.18,
        "bugs": 0.06,
        "time": 58,
        "intelligentContent": 34.97,
        "number_operators": 4,
        "number_operands": 41,
        "number_operators_unique": 4,
        "number_operands_unique": 15,
        "cloc": 1,
        "loc": 29,
        "lloc": 28,
        "mi": 66.37,
        "mIwoC": 52.19,
        "commentWeight": 14.19,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.19,
        "relativeSystemComplexity": 64.19,
        "totalStructuralComplexity": 192,
        "totalDataComplexity": 0.56,
        "totalSystemComplexity": 192.56,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Absolute_Positioner",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 6,
        "ccnMethodMax": 6,
        "externals": [
            "Positioner",
            "Frame_Decorator"
        ],
        "parents": [
            "Positioner"
        ],
        "lcom": 2,
        "length": 79,
        "vocabulary": 18,
        "volume": 329.42,
        "difficulty": 8.14,
        "effort": 2682.45,
        "level": 0.12,
        "bugs": 0.11,
        "time": 149,
        "intelligentContent": 40.46,
        "number_operators": 22,
        "number_operands": 57,
        "number_operators_unique": 4,
        "number_operands_unique": 14,
        "cloc": 43,
        "loc": 81,
        "lloc": 38,
        "mi": 92.3,
        "mIwoC": 47.1,
        "commentWeight": 45.19,
        "kanDefect": 0.5,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.06,
        "relativeSystemComplexity": 49.06,
        "totalStructuralComplexity": 98,
        "totalDataComplexity": 0.13,
        "totalSystemComplexity": 98.13,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Abstract_Renderer",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_background_image",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_dash_pattern",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_border_none",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_border_dotted",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_border_dashed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_border_solid",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_border_double",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_border_groove",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_border_ridge",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_tint",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_shade",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_border_inset",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_border_outset",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_opacity",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_debug_layout",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 17,
        "nbMethods": 17,
        "nbMethodsPrivate": 15,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 136,
        "ccn": 120,
        "ccnMethodMax": 67,
        "externals": [
            "DOMPDF",
            "Frame",
            "Image_Cache",
            "CSS_Color"
        ],
        "parents": [],
        "lcom": 5,
        "length": 1880,
        "vocabulary": 133,
        "volume": 13263.93,
        "difficulty": 135.39,
        "effort": 1795755.38,
        "level": 0.01,
        "bugs": 4.42,
        "time": 99764,
        "intelligentContent": 97.97,
        "number_operators": 585,
        "number_operands": 1295,
        "number_operators_unique": 23,
        "number_operands_unique": 110,
        "cloc": 188,
        "loc": 716,
        "lloc": 528,
        "mi": 35.65,
        "mIwoC": 0,
        "commentWeight": 35.65,
        "kanDefect": 5.85,
        "relativeStructuralComplexity": 484,
        "relativeDataComplexity": 1.12,
        "relativeSystemComplexity": 485.12,
        "totalStructuralComplexity": 8228,
        "totalDataComplexity": 18.96,
        "totalSystemComplexity": 8246.96,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 5,
        "efferentCoupling": 4,
        "instability": 0.44,
        "violations": {}
    },
    {
        "name": "Attribute_Translator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "translate_attributes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_resolve_target",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_table_cellpadding",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_table_border",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_table_cellspacing",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_table_rules",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_hr_align",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_table_row_align",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_table_row_valign",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_table_row_bgcolor",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_body_link",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_basefont_size",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_font_size",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 13,
        "nbMethodsPrivate": 12,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 47,
        "ccn": 35,
        "ccnMethodMax": 8,
        "externals": [],
        "parents": [],
        "lcom": 13,
        "length": 701,
        "vocabulary": 206,
        "volume": 5388.24,
        "difficulty": 21.07,
        "effort": 113545.87,
        "level": 0.05,
        "bugs": 1.8,
        "time": 6308,
        "intelligentContent": 255.69,
        "number_operators": 123,
        "number_operands": 578,
        "number_operators_unique": 14,
        "number_operands_unique": 192,
        "cloc": 67,
        "loc": 327,
        "lloc": 260,
        "mi": 48.74,
        "mIwoC": 16.48,
        "commentWeight": 32.26,
        "kanDefect": 3.57,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 3.17,
        "relativeSystemComplexity": 28.17,
        "totalStructuralComplexity": 325,
        "totalDataComplexity": 41.17,
        "totalSystemComplexity": 366.17,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Block_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_current_line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_current_line_number",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_lines",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_current_line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear_line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_frame_to_line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove_frames_from_line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increase_line_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "maximize_line_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset_counter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increment_counter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "counter_value",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 16,
        "nbMethods": 14,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 14,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 58,
        "ccn": 43,
        "ccnMethodMax": 13,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF",
            "Frame",
            "Frame",
            "Frame"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 1,
        "length": 440,
        "vocabulary": 72,
        "volume": 2714.77,
        "difficulty": 53.67,
        "effort": 145692.5,
        "level": 0.02,
        "bugs": 0.9,
        "time": 8094,
        "intelligentContent": 50.59,
        "number_operators": 118,
        "number_operands": 322,
        "number_operators_unique": 18,
        "number_operands_unique": 54,
        "cloc": 96,
        "loc": 298,
        "lloc": 202,
        "mi": 58.4,
        "mIwoC": 19.88,
        "commentWeight": 38.51,
        "kanDefect": 2.76,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 0.89,
        "relativeSystemComplexity": 361.89,
        "totalStructuralComplexity": 5776,
        "totalDataComplexity": 14.25,
        "totalSystemComplexity": 5790.25,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Block_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_calculate_width",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_calculate_restricted_width",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_calculate_content_height",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_calculate_restricted_height",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_text_align",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "vertical_align",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 165,
        "ccn": 158,
        "ccnMethodMax": 55,
        "externals": [
            "Frame_Reflower",
            "Block_Frame_Decorator",
            "DOMPDF_Exception",
            "Font_Metrics",
            "Frame_Decorator"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 2,
        "length": 1359,
        "vocabulary": 109,
        "volume": 9197.96,
        "difficulty": 78.62,
        "effort": 723177.44,
        "level": 0.01,
        "bugs": 3.07,
        "time": 40177,
        "intelligentContent": 116.99,
        "number_operators": 445,
        "number_operands": 914,
        "number_operators_unique": 16,
        "number_operands_unique": 93,
        "cloc": 132,
        "loc": 657,
        "lloc": 525,
        "mi": 32,
        "mIwoC": 0,
        "commentWeight": 32,
        "kanDefect": 10.91,
        "relativeStructuralComplexity": 1444,
        "relativeDataComplexity": 0.16,
        "relativeSystemComplexity": 1444.16,
        "totalStructuralComplexity": 11552,
        "totalDataComplexity": 1.31,
        "totalSystemComplexity": 11553.31,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 5,
        "instability": 0.83,
        "violations": {}
    },
    {
        "name": "Block_Positioner",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 6,
        "ccnMethodMax": 6,
        "externals": [
            "Positioner",
            "Frame_Decorator"
        ],
        "parents": [
            "Positioner"
        ],
        "lcom": 2,
        "length": 64,
        "vocabulary": 19,
        "volume": 271.87,
        "difficulty": 8.04,
        "effort": 2184.65,
        "level": 0.12,
        "bugs": 0.09,
        "time": 121,
        "intelligentContent": 33.83,
        "number_operators": 19,
        "number_operands": 45,
        "number_operators_unique": 5,
        "number_operands_unique": 14,
        "cloc": 47,
        "loc": 79,
        "lloc": 32,
        "mi": 95.82,
        "mIwoC": 49.31,
        "commentWeight": 46.51,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.06,
        "relativeSystemComplexity": 64.06,
        "totalStructuralComplexity": 128,
        "totalDataComplexity": 0.11,
        "totalSystemComplexity": 128.11,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Block_Renderer",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_render_border",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_render_outline",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 37,
        "ccn": 35,
        "ccnMethodMax": 16,
        "externals": [
            "Abstract_Renderer",
            "Frame",
            "Frame_Decorator",
            "Frame_Decorator"
        ],
        "parents": [
            "Abstract_Renderer"
        ],
        "lcom": 1,
        "length": 411,
        "vocabulary": 59,
        "volume": 2417.77,
        "difficulty": 63.55,
        "effort": 153643.29,
        "level": 0.02,
        "bugs": 0.81,
        "time": 8536,
        "intelligentContent": 38.05,
        "number_operators": 97,
        "number_operands": 314,
        "number_operators_unique": 17,
        "number_operands_unique": 42,
        "cloc": 47,
        "loc": 169,
        "lloc": 122,
        "mi": 62.54,
        "mIwoC": 26.09,
        "commentWeight": 36.45,
        "kanDefect": 1.98,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 0.31,
        "relativeSystemComplexity": 289.31,
        "totalStructuralComplexity": 867,
        "totalDataComplexity": 0.94,
        "totalSystemComplexity": 867.94,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 3,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Canvas_Factory",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_instance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 11,
        "ccn": 10,
        "ccnMethodMax": 10,
        "externals": [
            "class"
        ],
        "parents": [],
        "lcom": 2,
        "length": 55,
        "vocabulary": 22,
        "volume": 245.27,
        "difficulty": 7.47,
        "effort": 1831.34,
        "level": 0.13,
        "bugs": 0.08,
        "time": 102,
        "intelligentContent": 32.85,
        "number_operators": 23,
        "number_operands": 32,
        "number_operators_unique": 7,
        "number_operands_unique": 15,
        "cloc": 48,
        "loc": 81,
        "lloc": 33,
        "mi": 95.26,
        "mIwoC": 48.8,
        "commentWeight": 46.47,
        "kanDefect": 0.5,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2.5,
        "relativeSystemComplexity": 2.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 5,
        "totalSystemComplexity": 5,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "Cellmap",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_num_rows",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_num_cols",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_columns",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_column",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_rows",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_properties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_spanned_cells",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "frame_exists_in_cellmap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_frame_position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_frame_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_frame_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_column_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_row_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_resolve_border",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_frame",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove_row_group",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update_row_group",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assign_x_positions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assign_frame_heights",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_frame_heights",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 28,
        "nbMethods": 24,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 23,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 0,
        "wmc": 97,
        "ccn": 70,
        "ccnMethodMax": 30,
        "externals": [
            "Table_Frame_Decorator",
            "DOMPDF_Internal_Exception",
            "DOMPDF_Internal_Exception",
            "DOMPDF_Internal_Exception",
            "DOMPDF_Internal_Exception",
            "Exception",
            "Frame",
            "Frame",
            "Frame",
            "Frame",
            "Frame"
        ],
        "parents": [],
        "lcom": 2,
        "length": 1133,
        "vocabulary": 145,
        "volume": 8134.84,
        "difficulty": 70.45,
        "effort": 573112.39,
        "level": 0.01,
        "bugs": 2.71,
        "time": 31840,
        "intelligentContent": 115.47,
        "number_operators": 301,
        "number_operands": 832,
        "number_operators_unique": 21,
        "number_operands_unique": 124,
        "cloc": 164,
        "loc": 594,
        "lloc": 430,
        "mi": 42.11,
        "mIwoC": 5.76,
        "commentWeight": 36.35,
        "kanDefect": 5.96,
        "relativeStructuralComplexity": 400,
        "relativeDataComplexity": 1.05,
        "relativeSystemComplexity": 401.05,
        "totalStructuralComplexity": 11200,
        "totalDataComplexity": 29.38,
        "totalSystemComplexity": 11229.38,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "CPDF_Adapter",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_cpdf",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "open_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reopen_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "close_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stop_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "serialize_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reopen_serialized_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_width",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_height",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_page_number",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_page_count",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_page_number",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_page_count",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_stroke_color",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_fill_color",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_line_transparency",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_fill_transparency",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_line_style",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_opacity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "y",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_convert_gif_bmp_to_png",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filled_rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clipping_rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clipping_end",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "restore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rotate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "skew",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "scale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transform",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "polygon",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "circle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "javascript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_named_dest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_link",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_text_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_font_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "page_text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "page_script",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "new_page",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_add_page_text",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_messages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 53,
        "nbMethods": 46,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 38,
        "nbMethodsGetter": 5,
        "nbMethodsSetters": 2,
        "wmc": 90,
        "ccn": 38,
        "ccnMethodMax": 17,
        "externals": [
            "Canvas",
            "Cpdf",
            "DOMPDF_Exception",
            "PHP_Evaluator"
        ],
        "parents": [],
        "lcom": 1,
        "length": 1043,
        "vocabulary": 271,
        "volume": 8429.68,
        "difficulty": 28.77,
        "effort": 242510.37,
        "level": 0.03,
        "bugs": 2.81,
        "time": 13473,
        "intelligentContent": 293.02,
        "number_operators": 126,
        "number_operands": 917,
        "number_operators_unique": 16,
        "number_operands_unique": 255,
        "cloc": 363,
        "loc": 759,
        "lloc": 396,
        "mi": 54.63,
        "mIwoC": 10.73,
        "commentWeight": 43.89,
        "kanDefect": 2.89,
        "relativeStructuralComplexity": 3136,
        "relativeDataComplexity": 0.36,
        "relativeSystemComplexity": 3136.36,
        "totalStructuralComplexity": 166208,
        "totalDataComplexity": 18.89,
        "totalSystemComplexity": 166226.89,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CSS_Color",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "parse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 22,
        "ccnMethodMax": 21,
        "externals": [],
        "parents": [],
        "lcom": 2,
        "length": 567,
        "vocabulary": 337,
        "volume": 4760.87,
        "difficulty": 11.89,
        "effort": 56596.57,
        "level": 0.08,
        "bugs": 1.59,
        "time": 3144,
        "intelligentContent": 400.48,
        "number_operators": 90,
        "number_operands": 477,
        "number_operators_unique": 16,
        "number_operands_unique": 321,
        "cloc": 46,
        "loc": 134,
        "lloc": 88,
        "mi": 68.28,
        "mIwoC": 28.87,
        "commentWeight": 39.4,
        "kanDefect": 1.66,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 6.5,
        "relativeSystemComplexity": 7.5,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 13,
        "totalSystemComplexity": 15,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "DOMPDF",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save_locale",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "restore_locale",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_tree",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_protocol",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_host",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_base_path",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_protocol",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_host",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_base_path",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_canvas",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_callbacks",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load_html_file",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load_html",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_html",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_paper",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "enable_caching",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_callbacks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "write_log",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output_html",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 25,
        "nbMethods": 15,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 6,
        "nbMethodsSetters": 4,
        "wmc": 94,
        "ccn": 70,
        "ccnMethodMax": 18,
        "externals": [
            "DOMDocument",
            "Frame_Tree",
            "Stylesheet",
            "DOMPDF_Exception",
            "DOMPDF_Exception",
            "DOMPDF_Exception",
            "DOMPDF_Exception",
            "Frame_Factory",
            "Frame_Factory",
            "Frame",
            "Frame_Factory",
            "Canvas_Factory",
            "Renderer",
            "Image_Cache"
        ],
        "parents": [],
        "lcom": 2,
        "length": 617,
        "vocabulary": 133,
        "volume": 4353.11,
        "difficulty": 30.29,
        "effort": 131858.28,
        "level": 0.03,
        "bugs": 1.45,
        "time": 7325,
        "intelligentContent": 143.71,
        "number_operators": 174,
        "number_operands": 443,
        "number_operators_unique": 16,
        "number_operands_unique": 117,
        "cloc": 348,
        "loc": 723,
        "lloc": 375,
        "mi": 52.93,
        "mIwoC": 8.96,
        "commentWeight": 43.97,
        "kanDefect": 5.76,
        "relativeStructuralComplexity": 2209,
        "relativeDataComplexity": 0.26,
        "relativeSystemComplexity": 2209.26,
        "totalStructuralComplexity": 55225,
        "totalDataComplexity": 6.56,
        "totalSystemComplexity": 55231.56,
        "package": "dompdf\\",
        "pageRank": 0.01,
        "afferentCoupling": 17,
        "efferentCoupling": 9,
        "instability": 0.35,
        "violations": {}
    },
    {
        "name": "DOMPDF_Exception",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 1,
        "length": 5,
        "vocabulary": 3,
        "volume": 7.92,
        "difficulty": 0,
        "effort": 0,
        "level": 1.2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 9.51,
        "number_operators": 0,
        "number_operands": 5,
        "number_operators_unique": 0,
        "number_operands_unique": 3,
        "cloc": 49,
        "loc": 57,
        "lloc": 8,
        "mi": 123.42,
        "mIwoC": 73.87,
        "commentWeight": 49.55,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "dompdf\\",
        "pageRank": 0.02,
        "afferentCoupling": 13,
        "efferentCoupling": 1,
        "instability": 0.07,
        "violations": {}
    },
    {
        "name": "DOMPDF_Internal_Exception",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 1,
        "length": 5,
        "vocabulary": 3,
        "volume": 7.92,
        "difficulty": 0,
        "effort": 0,
        "level": 1.2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 9.51,
        "number_operators": 0,
        "number_operands": 5,
        "number_operators_unique": 0,
        "number_operands_unique": 3,
        "cloc": 48,
        "loc": 56,
        "lloc": 8,
        "mi": 123.41,
        "mIwoC": 73.87,
        "commentWeight": 49.53,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Fixed_Positioner",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 14,
        "ccn": 13,
        "ccnMethodMax": 13,
        "externals": [
            "Positioner",
            "Frame_Decorator"
        ],
        "parents": [
            "Positioner"
        ],
        "lcom": 2,
        "length": 182,
        "vocabulary": 34,
        "volume": 925.92,
        "difficulty": 19.69,
        "effort": 18233.47,
        "level": 0.05,
        "bugs": 0.31,
        "time": 1013,
        "intelligentContent": 47.02,
        "number_operators": 54,
        "number_operands": 128,
        "number_operators_unique": 8,
        "number_operands_unique": 26,
        "cloc": 42,
        "loc": 109,
        "lloc": 67,
        "mi": 78.65,
        "mIwoC": 37.65,
        "commentWeight": 41.01,
        "kanDefect": 1.01,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.04,
        "relativeSystemComplexity": 144.04,
        "totalStructuralComplexity": 288,
        "totalDataComplexity": 0.08,
        "totalSystemComplexity": 288.08,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Font_Metrics",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "init",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_text_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_font_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_font",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save_font_families",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load_font_families",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_system_fonts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_font_families",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_font_family",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 26,
        "ccn": 18,
        "ccnMethodMax": 10,
        "externals": [
            "Canvas_Factory",
            "TTF_Info"
        ],
        "parents": [],
        "lcom": 9,
        "length": 184,
        "vocabulary": 50,
        "volume": 1038.47,
        "difficulty": 10.01,
        "effort": 10396.77,
        "level": 0.1,
        "bugs": 0.35,
        "time": 578,
        "intelligentContent": 103.73,
        "number_operators": 61,
        "number_operands": 123,
        "number_operators_unique": 7,
        "number_operands_unique": 43,
        "cloc": 96,
        "loc": 200,
        "lloc": 106,
        "mi": 76.22,
        "mIwoC": 32.28,
        "commentWeight": 43.94,
        "kanDefect": 1.68,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 2.64,
        "relativeSystemComplexity": 18.64,
        "totalStructuralComplexity": 144,
        "totalDataComplexity": 23.8,
        "totalSystemComplexity": 167.8,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 8,
        "efferentCoupling": 2,
        "instability": 0.2,
        "violations": {}
    },
    {
        "name": "Frame",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispose",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_node",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_id",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_style",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_original_style",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_parent",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_decorator",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_first_child",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_last_child",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_prev_sibling",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_next_sibling",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_children",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_containing_block",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_margin_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_margin_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_break_margins",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_padding_box",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_box",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_opacity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_containing_line",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_style",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_decorator",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_containing_block",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_opacity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_containing_line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepend_child",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "append_child",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_child_before",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_child_after",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove_child",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 37,
        "nbMethods": 25,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 25,
        "nbMethodsGetter": 11,
        "nbMethodsSetters": 1,
        "wmc": 101,
        "ccn": 65,
        "ccnMethodMax": 14,
        "externals": [
            "DomNode",
            "FrameList",
            "Style",
            "Frame_Decorator",
            "Frame",
            "Frame",
            "Frame",
            "Frame",
            "DOMPDF_Exception",
            "Frame",
            "Frame",
            "DOMPDF_Exception",
            "Frame",
            "DOMPDF_Exception"
        ],
        "parents": [],
        "lcom": 3,
        "length": 892,
        "vocabulary": 94,
        "volume": 5846.69,
        "difficulty": 53.9,
        "effort": 315136.77,
        "level": 0.02,
        "bugs": 1.95,
        "time": 17508,
        "intelligentContent": 108.47,
        "number_operators": 276,
        "number_operands": 616,
        "number_operators_unique": 14,
        "number_operands_unique": 80,
        "cloc": 267,
        "loc": 700,
        "lloc": 433,
        "mi": 48.24,
        "mIwoC": 7.37,
        "commentWeight": 40.87,
        "kanDefect": 4.87,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 1.31,
        "relativeSystemComplexity": 442.31,
        "totalStructuralComplexity": 16317,
        "totalDataComplexity": 48.36,
        "totalSystemComplexity": 16365.36,
        "package": "dompdf\\",
        "pageRank": 0.06,
        "afferentCoupling": 36,
        "efferentCoupling": 7,
        "instability": 0.16,
        "violations": {}
    },
    {
        "name": "FrameList",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIterator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "IteratorAggregate",
            "FrameListIterator"
        ],
        "parents": [],
        "lcom": 1,
        "length": 6,
        "vocabulary": 4,
        "volume": 12,
        "difficulty": 2,
        "effort": 24,
        "level": 0.5,
        "bugs": 0,
        "time": 1,
        "intelligentContent": 6,
        "number_operators": 2,
        "number_operands": 4,
        "number_operators_unique": 2,
        "number_operands_unique": 2,
        "cloc": 7,
        "loc": 20,
        "lloc": 13,
        "mi": 107.68,
        "mIwoC": 68.01,
        "commentWeight": 39.67,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "dompdf\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "FrameListIterator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rewind",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "key",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "current",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "next",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Iterator",
            "Frame"
        ],
        "parents": [],
        "lcom": 1,
        "length": 34,
        "vocabulary": 7,
        "volume": 95.45,
        "difficulty": 7.88,
        "effort": 751.67,
        "level": 0.13,
        "bugs": 0.03,
        "time": 42,
        "intelligentContent": 12.12,
        "number_operators": 13,
        "number_operands": 21,
        "number_operators_unique": 3,
        "number_operands_unique": 4,
        "cloc": 28,
        "loc": 68,
        "lloc": 40,
        "mi": 92.83,
        "mIwoC": 50.92,
        "commentWeight": 41.91,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.72,
        "relativeSystemComplexity": 5.72,
        "totalStructuralComplexity": 24,
        "totalDataComplexity": 10.33,
        "totalSystemComplexity": 34.33,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "FrameTreeList",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIterator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "IteratorAggregate",
            "Frame",
            "FrameTreeIterator"
        ],
        "parents": [],
        "lcom": 1,
        "length": 6,
        "vocabulary": 4,
        "volume": 12,
        "difficulty": 2,
        "effort": 24,
        "level": 0.5,
        "bugs": 0,
        "time": 1,
        "intelligentContent": 6,
        "number_operators": 2,
        "number_operands": 4,
        "number_operators_unique": 2,
        "number_operands_unique": 2,
        "cloc": 13,
        "loc": 26,
        "lloc": 13,
        "mi": 112.47,
        "mIwoC": 68.01,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "FrameTreeIterator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rewind",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "key",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "current",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "next",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Iterator",
            "Frame"
        ],
        "parents": [],
        "lcom": 1,
        "length": 45,
        "vocabulary": 10,
        "volume": 149.49,
        "difficulty": 14,
        "effort": 2092.81,
        "level": 0.07,
        "bugs": 0.05,
        "time": 116,
        "intelligentContent": 10.68,
        "number_operators": 17,
        "number_operands": 28,
        "number_operators_unique": 5,
        "number_operands_unique": 5,
        "cloc": 28,
        "loc": 70,
        "lloc": 42,
        "mi": 90.48,
        "mIwoC": 48.96,
        "commentWeight": 41.52,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.39,
        "relativeSystemComplexity": 5.39,
        "totalStructuralComplexity": 24,
        "totalDataComplexity": 8.33,
        "totalSystemComplexity": 32.33,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Frame_Decorator",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispose",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deep_copy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_frame",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_node",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_style",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_original_style",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_containing_block",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_dompdf",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_margin_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_margin_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_padding_box",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_box",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_style",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_containing_block",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepend_child",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "append_child",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_child_before",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_child_after",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove_child",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_parent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_first_child",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_last_child",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_prev_sibling",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_next_sibling",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_children",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_subtree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_positioner",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_reflower",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_reflower",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_root",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_root",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "find_block_parent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "find_positionned_parent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "split",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_min_max_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 45,
        "nbMethods": 41,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 41,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 0,
        "wmc": 87,
        "ccn": 43,
        "ccnMethodMax": 5,
        "externals": [
            "Frame",
            "Frame",
            "DOMPDF",
            "DomNode",
            "Frame",
            "Frame_Factory",
            "Frame",
            "Frame_Factory",
            "Style",
            "Frame",
            "Frame",
            "Frame",
            "Frame",
            "Frame",
            "Frame",
            "Frame",
            "FrameList",
            "FrameTreeList",
            "Positioner",
            "Frame_Reflower",
            "Frame",
            "DOMPDF_Exception",
            "Frame_Decorator"
        ],
        "parents": [
            "Frame"
        ],
        "lcom": 2,
        "length": 406,
        "vocabulary": 35,
        "volume": 2082.49,
        "difficulty": 28.34,
        "effort": 59027.79,
        "level": 0.04,
        "bugs": 0.69,
        "time": 3279,
        "intelligentContent": 73.47,
        "number_operators": 132,
        "number_operands": 274,
        "number_operators_unique": 6,
        "number_operands_unique": 29,
        "cloc": 174,
        "loc": 519,
        "lloc": 345,
        "mi": 54.69,
        "mIwoC": 15.62,
        "commentWeight": 39.07,
        "kanDefect": 5.46,
        "relativeStructuralComplexity": 1681,
        "relativeDataComplexity": 0.92,
        "relativeSystemComplexity": 1681.92,
        "totalStructuralComplexity": 75645,
        "totalDataComplexity": 41.48,
        "totalSystemComplexity": 75686.48,
        "package": "dompdf\\",
        "pageRank": 0.02,
        "afferentCoupling": 36,
        "efferentCoupling": 12,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "Frame_Factory",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "decorate_root",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decorate_frame",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 25,
        "ccn": 24,
        "ccnMethodMax": 24,
        "externals": [
            "Frame",
            "DOMPDF",
            "Page_Frame_Decorator",
            "Page_Frame_Reflower",
            "Frame",
            "DOMPDF",
            "Exception",
            "decorator",
            "positioner",
            "reflower"
        ],
        "parents": [],
        "lcom": 2,
        "length": 231,
        "vocabulary": 54,
        "volume": 1329.38,
        "difficulty": 13.83,
        "effort": 18380.11,
        "level": 0.07,
        "bugs": 0.44,
        "time": 1021,
        "intelligentContent": 96.15,
        "number_operators": 72,
        "number_operands": 159,
        "number_operators_unique": 8,
        "number_operands_unique": 46,
        "cloc": 63,
        "loc": 185,
        "lloc": 122,
        "mi": 68.68,
        "mIwoC": 29.39,
        "commentWeight": 39.29,
        "kanDefect": 0.86,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.67,
        "relativeSystemComplexity": 25.67,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 1.33,
        "totalSystemComplexity": 51.33,
        "package": "dompdf\\",
        "pageRank": 0.01,
        "afferentCoupling": 4,
        "efferentCoupling": 8,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Frame_Reflower",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispose",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_collapse_margins",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_min_max_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_string",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_quotes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_content",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_content",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 67,
        "ccn": 59,
        "ccnMethodMax": 29,
        "externals": [
            "Frame",
            "Frame_Decorator",
            "Frame",
            "Frame_Factory"
        ],
        "parents": [],
        "lcom": 3,
        "length": 614,
        "vocabulary": 104,
        "volume": 4114.07,
        "difficulty": 35.56,
        "effort": 146303.72,
        "level": 0.03,
        "bugs": 1.37,
        "time": 8128,
        "intelligentContent": 115.69,
        "number_operators": 192,
        "number_operands": 422,
        "number_operators_unique": 15,
        "number_operands_unique": 89,
        "cloc": 95,
        "loc": 354,
        "lloc": 259,
        "mi": 50.07,
        "mIwoC": 14.11,
        "commentWeight": 35.96,
        "kanDefect": 4.12,
        "relativeStructuralComplexity": 900,
        "relativeDataComplexity": 0.27,
        "relativeSystemComplexity": 900.27,
        "totalStructuralComplexity": 8100,
        "totalDataComplexity": 2.45,
        "totalSystemComplexity": 8102.45,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 11,
        "efferentCoupling": 3,
        "instability": 0.21,
        "violations": {}
    },
    {
        "name": "Frame_Tree",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_dom",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_root",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_frame",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_frames",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "build_tree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_build_tree_r",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_node",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 7,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 25,
        "ccn": 17,
        "ccnMethodMax": 11,
        "externals": [
            "DomDocument",
            "FrameTreeList",
            "DOMPDF_Exception",
            "DomNode",
            "Frame",
            "DOMNode",
            "DOMNode"
        ],
        "parents": [],
        "lcom": 2,
        "length": 162,
        "vocabulary": 45,
        "volume": 889.68,
        "difficulty": 16.57,
        "effort": 14743.27,
        "level": 0.06,
        "bugs": 0.3,
        "time": 819,
        "intelligentContent": 53.69,
        "number_operators": 46,
        "number_operands": 116,
        "number_operators_unique": 10,
        "number_operands_unique": 35,
        "cloc": 122,
        "loc": 218,
        "lloc": 96,
        "mi": 79.64,
        "mIwoC": 33.82,
        "commentWeight": 45.82,
        "kanDefect": 1.01,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.51,
        "relativeSystemComplexity": 144.51,
        "totalStructuralComplexity": 1296,
        "totalDataComplexity": 4.62,
        "totalSystemComplexity": 1300.62,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 6,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "GD_Adapter",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_image",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_page_number",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_page_count",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_page_number",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_page_count",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_opacity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_allocate_color",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filled_rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clipping_rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clipping_end",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "restore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rotate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "skew",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "scale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transform",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "polygon",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "circle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "javascript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_named_dest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_link",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_text_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_font_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "new_page",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "open_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "close_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "page_text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 39,
        "nbMethods": 34,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 33,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 2,
        "wmc": 102,
        "ccn": 64,
        "ccnMethodMax": 13,
        "externals": [
            "Canvas"
        ],
        "parents": [],
        "lcom": 20,
        "length": 894,
        "vocabulary": 109,
        "volume": 6050.76,
        "difficulty": 71.36,
        "effort": 431755.11,
        "level": 0.01,
        "bugs": 2.02,
        "time": 23986,
        "intelligentContent": 84.8,
        "number_operators": 218,
        "number_operands": 676,
        "number_operators_unique": 19,
        "number_operands_unique": 90,
        "cloc": 350,
        "loc": 752,
        "lloc": 402,
        "mi": 51.64,
        "mIwoC": 8.1,
        "commentWeight": 43.54,
        "kanDefect": 3.99,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 4.5,
        "relativeSystemComplexity": 8.5,
        "totalStructuralComplexity": 156,
        "totalDataComplexity": 175.33,
        "totalSystemComplexity": 331.33,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Image_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_image_url",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_image_ext",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF",
            "Image_Cache",
            "Font_Metrics",
            "Font_Metrics"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 1,
        "length": 54,
        "vocabulary": 22,
        "volume": 240.81,
        "difficulty": 10.57,
        "effort": 2545.7,
        "level": 0.09,
        "bugs": 0.08,
        "time": 141,
        "intelligentContent": 22.78,
        "number_operators": 17,
        "number_operands": 37,
        "number_operators_unique": 8,
        "number_operands_unique": 14,
        "cloc": 77,
        "loc": 106,
        "lloc": 29,
        "mi": 99.33,
        "mIwoC": 50.88,
        "commentWeight": 48.44,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.27,
        "relativeSystemComplexity": 81.27,
        "totalStructuralComplexity": 243,
        "totalDataComplexity": 0.8,
        "totalSystemComplexity": 243.8,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 5,
        "instability": 0.71,
        "violations": {}
    },
    {
        "name": "Image_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_min_max_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 24,
        "ccn": 22,
        "ccnMethodMax": 21,
        "externals": [
            "Frame_Reflower",
            "Image_Frame_Decorator",
            "Frame_Decorator"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 2,
        "length": 231,
        "vocabulary": 35,
        "volume": 1184.86,
        "difficulty": 37.3,
        "effort": 44200.59,
        "level": 0.03,
        "bugs": 0.39,
        "time": 2456,
        "intelligentContent": 31.76,
        "number_operators": 88,
        "number_operands": 143,
        "number_operators_unique": 12,
        "number_operands_unique": 23,
        "cloc": 82,
        "loc": 149,
        "lloc": 67,
        "mi": 81.31,
        "mIwoC": 35.69,
        "commentWeight": 45.62,
        "kanDefect": 0.78,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.21,
        "relativeSystemComplexity": 49.21,
        "totalStructuralComplexity": 147,
        "totalDataComplexity": 0.63,
        "totalSystemComplexity": 147.63,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Image_Renderer",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 9,
        "ccnMethodMax": 9,
        "externals": [
            "Block_Renderer",
            "Frame"
        ],
        "parents": [
            "Block_Renderer"
        ],
        "lcom": 1,
        "length": 133,
        "vocabulary": 29,
        "volume": 646.11,
        "difficulty": 16.39,
        "effort": 10587.42,
        "level": 0.06,
        "bugs": 0.22,
        "time": 588,
        "intelligentContent": 39.43,
        "number_operators": 30,
        "number_operands": 103,
        "number_operators_unique": 7,
        "number_operands_unique": 22,
        "cloc": 45,
        "loc": 83,
        "lloc": 38,
        "mi": 90.1,
        "mIwoC": 44.65,
        "commentWeight": 45.45,
        "kanDefect": 0.5,
        "relativeStructuralComplexity": 324,
        "relativeDataComplexity": 0.05,
        "relativeSystemComplexity": 324.05,
        "totalStructuralComplexity": 324,
        "totalDataComplexity": 0.05,
        "totalSystemComplexity": 324.05,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Inline_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "split",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 12,
        "ccnMethodMax": 12,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF",
            "DOMPDF_Exception"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 2,
        "length": 103,
        "vocabulary": 25,
        "volume": 478.32,
        "difficulty": 13.61,
        "effort": 6510.43,
        "level": 0.07,
        "bugs": 0.16,
        "time": 362,
        "intelligentContent": 35.14,
        "number_operators": 33,
        "number_operands": 70,
        "number_operators_unique": 7,
        "number_operands_unique": 18,
        "cloc": 56,
        "loc": 99,
        "lloc": 43,
        "mi": 89.93,
        "mIwoC": 43.99,
        "commentWeight": 45.94,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 121.25,
        "totalStructuralComplexity": 242,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 242.5,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Inline_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 8,
        "ccnMethodMax": 8,
        "externals": [
            "Frame_Reflower",
            "Frame",
            "Frame_Decorator"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 2,
        "length": 68,
        "vocabulary": 15,
        "volume": 265.67,
        "difficulty": 8.55,
        "effort": 2270.26,
        "level": 0.12,
        "bugs": 0.09,
        "time": 126,
        "intelligentContent": 31.09,
        "number_operators": 21,
        "number_operands": 47,
        "number_operators_unique": 4,
        "number_operands_unique": 11,
        "cloc": 49,
        "loc": 89,
        "lloc": 40,
        "mi": 92.63,
        "mIwoC": 47,
        "commentWeight": 45.63,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0.13,
        "relativeSystemComplexity": 196.13,
        "totalStructuralComplexity": 392,
        "totalDataComplexity": 0.27,
        "totalSystemComplexity": 392.27,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Inline_Positioner",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 9,
        "ccnMethodMax": 9,
        "externals": [
            "Positioner",
            "Frame_Decorator",
            "DOMPDF_Exception"
        ],
        "parents": [
            "Positioner"
        ],
        "lcom": 2,
        "length": 81,
        "vocabulary": 29,
        "volume": 393.5,
        "difficulty": 10.29,
        "effort": 4047.39,
        "level": 0.1,
        "bugs": 0.13,
        "time": 225,
        "intelligentContent": 38.26,
        "number_operators": 27,
        "number_operands": 54,
        "number_operators_unique": 8,
        "number_operands_unique": 21,
        "cloc": 52,
        "loc": 88,
        "lloc": 36,
        "mi": 93.11,
        "mIwoC": 46.67,
        "commentWeight": 46.43,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.04,
        "relativeSystemComplexity": 169.04,
        "totalStructuralComplexity": 338,
        "totalDataComplexity": 0.07,
        "totalSystemComplexity": 338.07,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Inline_Renderer",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 43,
        "ccn": 43,
        "ccnMethodMax": 43,
        "externals": [
            "Abstract_Renderer",
            "Frame"
        ],
        "parents": [
            "Abstract_Renderer"
        ],
        "lcom": 1,
        "length": 497,
        "vocabulary": 49,
        "volume": 2790.51,
        "difficulty": 53.12,
        "effort": 148227.53,
        "level": 0.02,
        "bugs": 0.93,
        "time": 8235,
        "intelligentContent": 52.53,
        "number_operators": 130,
        "number_operands": 367,
        "number_operators_unique": 11,
        "number_operands_unique": 38,
        "cloc": 78,
        "loc": 179,
        "lloc": 101,
        "mi": 69.04,
        "mIwoC": 26.37,
        "commentWeight": 42.67,
        "kanDefect": 1.92,
        "relativeStructuralComplexity": 324,
        "relativeDataComplexity": 0.11,
        "relativeSystemComplexity": 324.11,
        "totalStructuralComplexity": 324,
        "totalDataComplexity": 0.11,
        "totalSystemComplexity": 324.11,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Javascript_Embedder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 4,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "DOMPDF"
        ],
        "parents": [],
        "lcom": 1,
        "length": 12,
        "vocabulary": 7,
        "volume": 33.69,
        "difficulty": 3.38,
        "effort": 113.7,
        "level": 0.3,
        "bugs": 0.01,
        "time": 6,
        "intelligentContent": 9.98,
        "number_operators": 3,
        "number_operands": 9,
        "number_operators_unique": 3,
        "number_operands_unique": 4,
        "cloc": 46,
        "loc": 66,
        "lloc": 20,
        "mi": 108.74,
        "mIwoC": 60.65,
        "commentWeight": 48.09,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.4,
        "relativeSystemComplexity": 16.4,
        "totalStructuralComplexity": 48,
        "totalDataComplexity": 1.2,
        "totalSystemComplexity": 49.2,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "List_Bullet_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_margin_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_margin_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 2,
        "length": 49,
        "vocabulary": 22,
        "volume": 218.51,
        "difficulty": 6.77,
        "effort": 1478.6,
        "level": 0.15,
        "bugs": 0.07,
        "time": 82,
        "intelligentContent": 32.29,
        "number_operators": 20,
        "number_operands": 29,
        "number_operators_unique": 7,
        "number_operands_unique": 15,
        "cloc": 59,
        "loc": 96,
        "lloc": 37,
        "mi": 95.73,
        "mIwoC": 48.87,
        "commentWeight": 46.86,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.28,
        "relativeSystemComplexity": 17.28,
        "totalStructuralComplexity": 80,
        "totalDataComplexity": 6.4,
        "totalSystemComplexity": 86.4,
        "package": "dompdf \\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "List_Bullet_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Frame_Reflower",
            "Frame_Decorator",
            "Frame_Decorator"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 2,
        "length": 19,
        "vocabulary": 9,
        "volume": 60.23,
        "difficulty": 3.5,
        "effort": 210.8,
        "level": 0.29,
        "bugs": 0.02,
        "time": 12,
        "intelligentContent": 17.21,
        "number_operators": 5,
        "number_operands": 14,
        "number_operators_unique": 3,
        "number_operands_unique": 6,
        "cloc": 44,
        "loc": 62,
        "lloc": 18,
        "mi": 108.13,
        "mIwoC": 59.89,
        "commentWeight": 48.25,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.14,
        "relativeSystemComplexity": 36.14,
        "totalStructuralComplexity": 72,
        "totalDataComplexity": 0.29,
        "totalSystemComplexity": 72.29,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "List_Bullet_Image_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_height",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_margin_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_margin_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_image_url",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_image_ext",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF",
            "Image_Frame_Decorator"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 1,
        "length": 69,
        "vocabulary": 23,
        "volume": 312.13,
        "difficulty": 13.18,
        "effort": 4113.37,
        "level": 0.08,
        "bugs": 0.1,
        "time": 229,
        "intelligentContent": 23.68,
        "number_operators": 28,
        "number_operands": 41,
        "number_operators_unique": 9,
        "number_operands_unique": 14,
        "cloc": 134,
        "loc": 179,
        "lloc": 45,
        "mi": 94.75,
        "mIwoC": 46.07,
        "commentWeight": 48.68,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.91,
        "relativeSystemComplexity": 49.91,
        "totalStructuralComplexity": 343,
        "totalDataComplexity": 6.38,
        "totalSystemComplexity": 349.38,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "List_Bullet_Positioner",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Positioner",
            "Frame_Decorator"
        ],
        "parents": [
            "Positioner"
        ],
        "lcom": 2,
        "length": 57,
        "vocabulary": 17,
        "volume": 232.99,
        "difficulty": 8.54,
        "effort": 1990.08,
        "level": 0.12,
        "bugs": 0.08,
        "time": 111,
        "intelligentContent": 27.28,
        "number_operators": 16,
        "number_operands": 41,
        "number_operators_unique": 5,
        "number_operands_unique": 12,
        "cloc": 71,
        "loc": 97,
        "lloc": 26,
        "mi": 100.79,
        "mIwoC": 52.29,
        "commentWeight": 48.5,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0.05,
        "relativeSystemComplexity": 100.05,
        "totalStructuralComplexity": 200,
        "totalDataComplexity": 0.09,
        "totalSystemComplexity": 200.09,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "List_Bullet_Renderer",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "make_counter",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 40,
        "ccn": 39,
        "ccnMethodMax": 23,
        "externals": [
            "Abstract_Renderer",
            "Frame",
            "Font_Metrics"
        ],
        "parents": [
            "Abstract_Renderer"
        ],
        "lcom": 1,
        "length": 273,
        "vocabulary": 73,
        "volume": 1689.82,
        "difficulty": 29.29,
        "effort": 49502.74,
        "level": 0.03,
        "bugs": 0.56,
        "time": 2750,
        "intelligentContent": 57.68,
        "number_operators": 80,
        "number_operands": 193,
        "number_operators_unique": 17,
        "number_operands_unique": 56,
        "cloc": 61,
        "loc": 174,
        "lloc": 113,
        "mi": 67.06,
        "mIwoC": 27.37,
        "commentWeight": 39.7,
        "kanDefect": 0.94,
        "relativeStructuralComplexity": 324,
        "relativeDataComplexity": 0.21,
        "relativeSystemComplexity": 324.21,
        "totalStructuralComplexity": 648,
        "totalDataComplexity": 0.42,
        "totalSystemComplexity": 648.42,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Null_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 1,
        "length": 19,
        "vocabulary": 6,
        "volume": 49.11,
        "difficulty": 1.4,
        "effort": 68.76,
        "level": 0.71,
        "bugs": 0.02,
        "time": 4,
        "intelligentContent": 35.08,
        "number_operators": 5,
        "number_operands": 14,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 43,
        "loc": 56,
        "lloc": 13,
        "mi": 112.59,
        "mIwoC": 63.72,
        "commentWeight": 48.87,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.67,
        "relativeSystemComplexity": 4.67,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0.67,
        "totalSystemComplexity": 4.67,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Null_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Frame_Reflower",
            "Frame",
            "Frame_Decorator"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 2,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 43,
        "loc": 55,
        "lloc": 12,
        "mi": 119.7,
        "mIwoC": 70.71,
        "commentWeight": 48.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 4,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Null_Positioner",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Positioner",
            "Frame_Decorator"
        ],
        "parents": [
            "Positioner"
        ],
        "lcom": 2,
        "length": 3,
        "vocabulary": 2,
        "volume": 3,
        "difficulty": 1,
        "effort": 3,
        "level": 1,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 3,
        "number_operators": 1,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 1,
        "cloc": 43,
        "loc": 55,
        "lloc": 12,
        "mi": 121.98,
        "mIwoC": 72.98,
        "commentWeight": 48.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 1.75,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 3.5,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Page_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_renderer",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_renderer",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_containing_block",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_full",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "next_page",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "table_reflow_start",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "table_reflow_end",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "in_nested_table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "check_forced_page_break",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_page_break_allowed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "check_page_break",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "split",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 10,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 1,
        "wmc": 86,
        "ccn": 74,
        "ccnMethodMax": 34,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF",
            "Frame",
            "Frame",
            "Table_Frame_Decorator",
            "Frame"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 2,
        "length": 520,
        "vocabulary": 85,
        "volume": 3332.88,
        "difficulty": 40.13,
        "effort": 133731.94,
        "level": 0.02,
        "bugs": 1.11,
        "time": 7430,
        "intelligentContent": 83.06,
        "number_operators": 199,
        "number_operands": 321,
        "number_operators_unique": 17,
        "number_operands_unique": 68,
        "cloc": 225,
        "loc": 512,
        "lloc": 287,
        "mi": 54.55,
        "mIwoC": 11.76,
        "commentWeight": 42.79,
        "kanDefect": 5.18,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 1.94,
        "relativeSystemComplexity": 290.94,
        "totalStructuralComplexity": 3757,
        "totalDataComplexity": 25.22,
        "totalSystemComplexity": 3782.22,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 4,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Page_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_floating_frames",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_frame_to_stacking_context",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_floating_frame",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has_floating_frames",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_check_callbacks",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 5,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 24,
        "ccn": 18,
        "ccnMethodMax": 12,
        "externals": [
            "Frame_Reflower",
            "Page_Frame_Decorator",
            "Frame",
            "Frame",
            "Frame_Decorator"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 2,
        "length": 211,
        "vocabulary": 52,
        "volume": 1202.79,
        "difficulty": 18.81,
        "effort": 22623.96,
        "level": 0.05,
        "bugs": 0.4,
        "time": 1257,
        "intelligentContent": 63.95,
        "number_operators": 53,
        "number_operands": 158,
        "number_operators_unique": 10,
        "number_operands_unique": 42,
        "cloc": 107,
        "loc": 218,
        "lloc": 111,
        "mi": 75.62,
        "mIwoC": 31.39,
        "commentWeight": 44.22,
        "kanDefect": 2.23,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 0.15,
        "relativeSystemComplexity": 361.15,
        "totalStructuralComplexity": 2527,
        "totalDataComplexity": 1.05,
        "totalSystemComplexity": 2528.05,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "PDFLib_Adapter",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_pdflib",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "open_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reopen_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "close_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stop_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_place_objects",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_width",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_height",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_page_number",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_page_count",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_page_number",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_page_count",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_line_style",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_stroke_color",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_fill_color",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_opacity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_load_font",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "y",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filled_rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clipping_rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clipping_end",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "restore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rotate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "skew",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "scale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transform",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "polygon",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "circle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "javascript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_named_dest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_link",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_text_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_font_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "page_text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "page_script",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "new_page",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_add_page_text",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 49,
        "nbMethods": 42,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 34,
        "nbMethodsGetter": 5,
        "nbMethodsSetters": 2,
        "wmc": 135,
        "ccn": 87,
        "ccnMethodMax": 15,
        "externals": [
            "Canvas",
            "PDFLib",
            "Font_Metrics",
            "DOMPDF_Exception",
            "Font_Metrics",
            "PHP_Evaluator",
            "DOMPDF_Exception"
        ],
        "parents": [],
        "lcom": 2,
        "length": 1390,
        "vocabulary": 242,
        "volume": 11007.22,
        "difficulty": 57.82,
        "effort": 636383.17,
        "level": 0.02,
        "bugs": 3.67,
        "time": 35355,
        "intelligentContent": 190.39,
        "number_operators": 289,
        "number_operands": 1101,
        "number_operators_unique": 23,
        "number_operands_unique": 219,
        "cloc": 331,
        "loc": 923,
        "lloc": 592,
        "mi": 40.01,
        "mIwoC": 0,
        "commentWeight": 40.01,
        "kanDefect": 5.76,
        "relativeStructuralComplexity": 3136,
        "relativeDataComplexity": 0.34,
        "relativeSystemComplexity": 3136.34,
        "totalStructuralComplexity": 153664,
        "totalDataComplexity": 16.68,
        "totalSystemComplexity": 153680.68,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PHP_Evaluator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "evaluate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Canvas"
        ],
        "parents": [],
        "lcom": 1,
        "length": 28,
        "vocabulary": 14,
        "volume": 106.61,
        "difficulty": 2.86,
        "effort": 305.28,
        "level": 0.35,
        "bugs": 0.04,
        "time": 17,
        "intelligentContent": 37.23,
        "number_operators": 7,
        "number_operands": 21,
        "number_operators_unique": 3,
        "number_operands_unique": 11,
        "cloc": 45,
        "loc": 71,
        "lloc": 26,
        "mi": 101.71,
        "mIwoC": 54.53,
        "commentWeight": 47.18,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.47,
        "relativeSystemComplexity": 16.47,
        "totalStructuralComplexity": 48,
        "totalDataComplexity": 1.4,
        "totalSystemComplexity": 49.4,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 1,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "Positioner",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 3,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Frame_Decorator"
        ],
        "parents": [],
        "lcom": 3,
        "length": 5,
        "vocabulary": 3,
        "volume": 7.92,
        "difficulty": 1,
        "effort": 7.92,
        "level": 1,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 7.92,
        "number_operators": 1,
        "number_operands": 4,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 51,
        "loc": 65,
        "lloc": 14,
        "mi": 117.59,
        "mIwoC": 68.57,
        "commentWeight": 49.02,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0.33,
        "relativeSystemComplexity": 0.33,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 9,
        "efferentCoupling": 1,
        "instability": 0.1,
        "violations": {}
    },
    {
        "name": "Renderer",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "new_page",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_check_callbacks",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_render_frame",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 53,
        "ccn": 49,
        "ccnMethodMax": 34,
        "externals": [
            "Abstract_Renderer",
            "Frame",
            "Block_Renderer",
            "Inline_Renderer",
            "Text_Renderer",
            "Image_Renderer",
            "Table_Cell_Renderer",
            "List_Bullet_Renderer",
            "PHP_Evaluator",
            "Javascript_Embedder"
        ],
        "parents": [
            "Abstract_Renderer"
        ],
        "lcom": 2,
        "length": 284,
        "vocabulary": 64,
        "volume": 1704,
        "difficulty": 17.92,
        "effort": 30532.58,
        "level": 0.06,
        "bugs": 0.57,
        "time": 1696,
        "intelligentContent": 95.1,
        "number_operators": 65,
        "number_operands": 219,
        "number_operators_unique": 9,
        "number_operands_unique": 55,
        "cloc": 91,
        "loc": 244,
        "lloc": 153,
        "mi": 63.68,
        "mIwoC": 23.13,
        "commentWeight": 40.56,
        "kanDefect": 2.33,
        "relativeStructuralComplexity": 324,
        "relativeDataComplexity": 0.11,
        "relativeSystemComplexity": 324.11,
        "totalStructuralComplexity": 1620,
        "totalDataComplexity": 0.53,
        "totalSystemComplexity": 1620.53,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 10,
        "instability": 0.91,
        "violations": {}
    },
    {
        "name": "Style",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispose",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_frame",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_frame",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_stylesheet",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "length_in_pt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "inherit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "merge",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "munge_colour",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "munge_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "important_set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "important_get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_font_family",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_font_size",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_word_spacing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_letter_spacing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_line_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_background_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_background_position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_background_attachment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_background_repeat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_background",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_top_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_right_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_bottom_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_left_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_top_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_right_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_bottom_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_left_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_properties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_border",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_top",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_right",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_bottom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_left",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_outline_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_outline_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_outline",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_border_spacing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_style_side_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_style_sides_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_style_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_style_type_important",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_style_side_width_important",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_style",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_image",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_background_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_background_image",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_background_repeat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_background_attachment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_background_position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_background",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_font_size",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_font",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_page_break_before",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_page_break_after",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_margin_top",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_margin_right",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_margin_bottom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_margin_left",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_margin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_padding_top",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_padding_right",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_padding_bottom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_padding_left",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_padding",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_border",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_border_top",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_border_right",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_border_bottom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_border_left",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_border",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_border_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_border_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_border_style",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_outline",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_outline_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_outline_color",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_outline_style",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_border_spacing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_list_style_image",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_list_style",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_size",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_transform",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set__webkit_transform",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set__webkit_transform_origin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_transform_origin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "debug_print",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 94,
        "nbMethods": 91,
        "nbMethodsPrivate": 9,
        "nbMethodsPublic": 82,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 1,
        "wmc": 306,
        "ccn": 213,
        "ccnMethodMax": 23,
        "externals": [
            "Stylesheet",
            "Frame",
            "Style",
            "Style",
            "CSS_Color",
            "CSS_Color",
            "DOMPDF_Exception",
            "Font_Metrics",
            "Font_Metrics",
            "DOMPDF_Exception"
        ],
        "parents": [],
        "lcom": 2,
        "length": 3089,
        "vocabulary": 398,
        "volume": 26678.53,
        "difficulty": 54.88,
        "effort": 1464019.63,
        "level": 0.02,
        "bugs": 8.89,
        "time": 81334,
        "intelligentContent": 486.16,
        "number_operators": 772,
        "number_operands": 2317,
        "number_operators_unique": 18,
        "number_operands_unique": 380,
        "cloc": 732,
        "loc": 1990,
        "lloc": 1258,
        "mi": 40.37,
        "mIwoC": 0,
        "commentWeight": 40.37,
        "kanDefect": 13.11,
        "relativeStructuralComplexity": 625,
        "relativeDataComplexity": 2.15,
        "relativeSystemComplexity": 627.15,
        "totalStructuralComplexity": 58750,
        "totalDataComplexity": 202.08,
        "totalSystemComplexity": 58952.08,
        "package": "dompdf\\",
        "pageRank": 0.01,
        "afferentCoupling": 5,
        "efferentCoupling": 7,
        "instability": 0.58,
        "violations": {}
    },
    {
        "name": "Stylesheet",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_protocol",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_host",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_base_path",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_protocol",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_host",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_base_path",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_page_style",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_style",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lookup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create_style",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load_css",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load_css_file",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_specificity",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_css_selector_to_xpath",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "apply_styles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_css",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_image",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_import",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_font_face",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_properties",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_sections",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 24,
        "nbMethods": 17,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 3,
        "wmc": 170,
        "ccn": 147,
        "ccnMethodMax": 58,
        "externals": [
            "Style",
            "DOMPDF_Exception",
            "Style",
            "Style",
            "DOMPDF_Exception",
            "DOMPDF_Exception",
            "Frame_Tree",
            "DOMXPath",
            "Attribute_Translator",
            "DOMPDF_Exception",
            "Style"
        ],
        "parents": [],
        "lcom": 2,
        "length": 1344,
        "vocabulary": 266,
        "volume": 10826.3,
        "difficulty": 37.31,
        "effort": 403904.25,
        "level": 0.03,
        "bugs": 3.61,
        "time": 22439,
        "intelligentContent": 290.19,
        "number_operators": 374,
        "number_operands": 970,
        "number_operators_unique": 19,
        "number_operands_unique": 247,
        "cloc": 451,
        "loc": 1019,
        "lloc": 570,
        "mi": 42.88,
        "mIwoC": 0,
        "commentWeight": 42.88,
        "kanDefect": 12.11,
        "relativeStructuralComplexity": 1024,
        "relativeDataComplexity": 0.51,
        "relativeSystemComplexity": 1024.51,
        "totalStructuralComplexity": 24576,
        "totalDataComplexity": 12.21,
        "totalSystemComplexity": 24588.21,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 5,
        "instability": 0.71,
        "violations": {}
    },
    {
        "name": "Table_Cell_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_content_height",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_content_height",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_cell_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_resolved_border",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_resolved_border",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_resolved_borders",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 1,
        "wmc": 15,
        "ccn": 8,
        "ccnMethodMax": 8,
        "externals": [
            "Block_Frame_Decorator",
            "Frame",
            "DOMPDF"
        ],
        "parents": [
            "Block_Frame_Decorator"
        ],
        "lcom": 1,
        "length": 92,
        "vocabulary": 29,
        "volume": 446.93,
        "difficulty": 12.76,
        "effort": 5703.73,
        "level": 0.08,
        "bugs": 0.15,
        "time": 317,
        "intelligentContent": 35.02,
        "number_operators": 25,
        "number_operands": 67,
        "number_operators_unique": 8,
        "number_operands_unique": 21,
        "cloc": 50,
        "loc": 116,
        "lloc": 66,
        "mi": 83.2,
        "mIwoC": 40.68,
        "commentWeight": 42.53,
        "kanDefect": 0.9,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.61,
        "relativeSystemComplexity": 49.61,
        "totalStructuralComplexity": 392,
        "totalDataComplexity": 4.88,
        "totalSystemComplexity": 396.88,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Table_Cell_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 6,
        "ccnMethodMax": 6,
        "externals": [
            "Block_Frame_Reflower",
            "Frame",
            "Frame_Decorator",
            "Table_Frame_Decorator"
        ],
        "parents": [
            "Block_Frame_Reflower"
        ],
        "lcom": 2,
        "length": 151,
        "vocabulary": 38,
        "volume": 792.44,
        "difficulty": 13.21,
        "effort": 10467.84,
        "level": 0.08,
        "bugs": 0.26,
        "time": 582,
        "intelligentContent": 59.99,
        "number_operators": 34,
        "number_operands": 117,
        "number_operators_unique": 7,
        "number_operands_unique": 31,
        "cloc": 51,
        "loc": 105,
        "lloc": 54,
        "mi": 85.19,
        "mIwoC": 41.1,
        "commentWeight": 44.09,
        "kanDefect": 0.98,
        "relativeStructuralComplexity": 529,
        "relativeDataComplexity": 0.04,
        "relativeSystemComplexity": 529.04,
        "totalStructuralComplexity": 1058,
        "totalDataComplexity": 0.08,
        "totalSystemComplexity": 1058.08,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Table_Cell_Positioner",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Positioner",
            "Frame_Decorator",
            "Table_Frame_Decorator"
        ],
        "parents": [
            "Positioner"
        ],
        "lcom": 2,
        "length": 11,
        "vocabulary": 5,
        "volume": 25.54,
        "difficulty": 1.13,
        "effort": 28.73,
        "level": 0.89,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 22.7,
        "number_operators": 2,
        "number_operands": 9,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 44,
        "loc": 58,
        "lloc": 14,
        "mi": 113.79,
        "mIwoC": 65.01,
        "commentWeight": 48.78,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.08,
        "relativeSystemComplexity": 25.08,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0.17,
        "totalSystemComplexity": 50.17,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Table_Cell_Renderer",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 19,
        "ccn": 19,
        "ccnMethodMax": 19,
        "externals": [
            "Block_Renderer",
            "Frame",
            "Table_Frame_Decorator"
        ],
        "parents": [
            "Block_Renderer"
        ],
        "lcom": 1,
        "length": 432,
        "vocabulary": 58,
        "volume": 2530.65,
        "difficulty": 48.1,
        "effort": 121724.16,
        "level": 0.02,
        "bugs": 0.84,
        "time": 6762,
        "intelligentContent": 52.61,
        "number_operators": 99,
        "number_operands": 333,
        "number_operators_unique": 13,
        "number_operands_unique": 45,
        "cloc": 53,
        "loc": 140,
        "lloc": 87,
        "mi": 72.07,
        "mIwoC": 31.31,
        "commentWeight": 40.76,
        "kanDefect": 1.38,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 0.11,
        "relativeSystemComplexity": 289.11,
        "totalStructuralComplexity": 289,
        "totalDataComplexity": 0.11,
        "totalSystemComplexity": 289.11,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Table_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "split",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "find_parent_table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_cellmap",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_min_width",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_max_width",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_min_width",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_max_width",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "normalise",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "move_after",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 2,
        "wmc": 34,
        "ccn": 24,
        "ccnMethodMax": 14,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF",
            "Cellmap",
            "Frame",
            "Frame",
            "Frame_Factory",
            "Frame"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 2,
        "length": 218,
        "vocabulary": 33,
        "volume": 1099.68,
        "difficulty": 17,
        "effort": 18694.52,
        "level": 0.06,
        "bugs": 0.37,
        "time": 1039,
        "intelligentContent": 64.69,
        "number_operators": 65,
        "number_operands": 153,
        "number_operators_unique": 6,
        "number_operands_unique": 27,
        "cloc": 144,
        "loc": 303,
        "lloc": 159,
        "mi": 71.27,
        "mIwoC": 27.46,
        "commentWeight": 43.81,
        "kanDefect": 2.58,
        "relativeStructuralComplexity": 676,
        "relativeDataComplexity": 0.21,
        "relativeSystemComplexity": 676.21,
        "totalStructuralComplexity": 7436,
        "totalDataComplexity": 2.33,
        "totalSystemComplexity": 7438.33,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 9,
        "efferentCoupling": 5,
        "instability": 0.36,
        "violations": {}
    },
    {
        "name": "Table_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_assign_widths",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_calculate_height",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_min_max_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 80,
        "ccn": 75,
        "ccnMethodMax": 40,
        "externals": [
            "Frame_Reflower",
            "Table_Frame_Decorator",
            "Frame_Decorator"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 1,
        "length": 995,
        "vocabulary": 82,
        "volume": 6325.76,
        "difficulty": 98.16,
        "effort": 620913.3,
        "level": 0.01,
        "bugs": 2.11,
        "time": 34495,
        "intelligentContent": 64.45,
        "number_operators": 297,
        "number_operands": 698,
        "number_operators_unique": 18,
        "number_operands_unique": 64,
        "cloc": 125,
        "loc": 456,
        "lloc": 331,
        "mi": 44.58,
        "mIwoC": 8.33,
        "commentWeight": 36.25,
        "kanDefect": 6.13,
        "relativeStructuralComplexity": 1024,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 1024.28,
        "totalStructuralComplexity": 6144,
        "totalDataComplexity": 1.7,
        "totalSystemComplexity": 6145.7,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Table_Row_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "normalise",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF",
            "Table_Frame_Decorator"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 2,
        "length": 25,
        "vocabulary": 11,
        "volume": 86.49,
        "difficulty": 3.56,
        "effort": 308.11,
        "level": 0.28,
        "bugs": 0.03,
        "time": 17,
        "intelligentContent": 24.28,
        "number_operators": 6,
        "number_operands": 19,
        "number_operators_unique": 3,
        "number_operands_unique": 8,
        "cloc": 51,
        "loc": 73,
        "lloc": 22,
        "mi": 104.72,
        "mIwoC": 56.62,
        "commentWeight": 48.11,
        "kanDefect": 0.68,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.17,
        "relativeSystemComplexity": 25.17,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0.33,
        "totalSystemComplexity": 50.33,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "Table_Row_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_min_max_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 5,
        "ccnMethodMax": 5,
        "externals": [
            "Frame_Reflower",
            "Table_Row_Frame_Decorator",
            "Frame_Decorator",
            "Table_Frame_Decorator",
            "DOMPDF_Exception"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 3,
        "length": 45,
        "vocabulary": 13,
        "volume": 166.52,
        "difficulty": 4.8,
        "effort": 799.29,
        "level": 0.21,
        "bugs": 0.06,
        "time": 44,
        "intelligentContent": 34.69,
        "number_operators": 13,
        "number_operands": 32,
        "number_operators_unique": 3,
        "number_operands_unique": 10,
        "cloc": 45,
        "loc": 82,
        "lloc": 37,
        "mi": 95.15,
        "mIwoC": 49.56,
        "commentWeight": 45.59,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 225,
        "relativeDataComplexity": 0.23,
        "relativeSystemComplexity": 225.23,
        "totalStructuralComplexity": 675,
        "totalDataComplexity": 0.69,
        "totalSystemComplexity": 675.69,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Table_Row_Group_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "split",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 2,
        "length": 33,
        "vocabulary": 12,
        "volume": 118.3,
        "difficulty": 8.57,
        "effort": 1014.03,
        "level": 0.12,
        "bugs": 0.04,
        "time": 56,
        "intelligentContent": 13.8,
        "number_operators": 9,
        "number_operands": 24,
        "number_operators_unique": 5,
        "number_operands_unique": 7,
        "cloc": 59,
        "loc": 87,
        "lloc": 28,
        "mi": 101.22,
        "mIwoC": 53.38,
        "commentWeight": 47.84,
        "kanDefect": 0.52,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.4,
        "relativeSystemComplexity": 81.4,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0.8,
        "totalSystemComplexity": 162.8,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Table_Row_Group_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 5,
        "ccnMethodMax": 5,
        "externals": [
            "Frame_Reflower",
            "Frame_Decorator",
            "Table_Frame_Decorator"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 2,
        "length": 56,
        "vocabulary": 19,
        "volume": 237.88,
        "difficulty": 5.6,
        "effort": 1332.15,
        "level": 0.18,
        "bugs": 0.08,
        "time": 74,
        "intelligentContent": 42.48,
        "number_operators": 14,
        "number_operands": 42,
        "number_operators_unique": 4,
        "number_operands_unique": 15,
        "cloc": 47,
        "loc": 80,
        "lloc": 33,
        "mi": 95.93,
        "mIwoC": 49.56,
        "commentWeight": 46.37,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 225,
        "relativeDataComplexity": 0.19,
        "relativeSystemComplexity": 225.19,
        "totalStructuralComplexity": 450,
        "totalDataComplexity": 0.38,
        "totalSystemComplexity": 450.38,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Table_Row_Positioner",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "position",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Positioner",
            "Frame_Decorator"
        ],
        "parents": [
            "Positioner"
        ],
        "lcom": 2,
        "length": 24,
        "vocabulary": 9,
        "volume": 76.08,
        "difficulty": 4.5,
        "effort": 342.35,
        "level": 0.22,
        "bugs": 0.03,
        "time": 19,
        "intelligentContent": 16.91,
        "number_operators": 6,
        "number_operands": 18,
        "number_operators_unique": 3,
        "number_operands_unique": 6,
        "cloc": 44,
        "loc": 63,
        "lloc": 19,
        "mi": 106.77,
        "mIwoC": 58.66,
        "commentWeight": 48.11,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.07,
        "relativeSystemComplexity": 36.07,
        "totalStructuralComplexity": 72,
        "totalDataComplexity": 0.14,
        "totalSystemComplexity": 72.14,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "TCPDF_Adapter",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "y",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_stroke_colour",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_fill_colour",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_tcpdf",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_page_number",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_page_count",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_page_count",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filled_rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "polygon",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "circle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "javascript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_named_dest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_link",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_text_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_font_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "new_page",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 24,
        "nbMethods": 20,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 17,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 1,
        "wmc": 37,
        "ccn": 14,
        "ccnMethodMax": 4,
        "externals": [
            "Canvas",
            "TCPDF"
        ],
        "parents": [],
        "lcom": 13,
        "length": 285,
        "vocabulary": 63,
        "volume": 1703.52,
        "difficulty": 19.08,
        "effort": 32508.93,
        "level": 0.05,
        "bugs": 0.57,
        "time": 1806,
        "intelligentContent": 89.27,
        "number_operators": 56,
        "number_operands": 229,
        "number_operators_unique": 9,
        "number_operands_unique": 54,
        "cloc": 283,
        "loc": 426,
        "lloc": 143,
        "mi": 76.12,
        "mIwoC": 28.47,
        "commentWeight": 47.65,
        "kanDefect": 0.71,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.68,
        "relativeSystemComplexity": 81.68,
        "totalStructuralComplexity": 1944,
        "totalDataComplexity": 16.4,
        "totalSystemComplexity": 1960.4,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Text_Frame_Decorator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_text_spacing",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_margin_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_padding_box",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_text_spacing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "recalculate_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "split_text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete_text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_text",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 5,
        "ccnMethodMax": 4,
        "externals": [
            "Frame_Decorator",
            "Frame",
            "DOMPDF",
            "DOMPDF_Exception",
            "Font_Metrics",
            "Font_Metrics",
            "Font_Metrics",
            "DOMText"
        ],
        "parents": [
            "Frame_Decorator"
        ],
        "lcom": 1,
        "length": 150,
        "vocabulary": 33,
        "volume": 756.66,
        "difficulty": 17.12,
        "effort": 12954,
        "level": 0.06,
        "bugs": 0.25,
        "time": 720,
        "intelligentContent": 44.2,
        "number_operators": 43,
        "number_operands": 107,
        "number_operators_unique": 8,
        "number_operands_unique": 25,
        "cloc": 90,
        "loc": 177,
        "lloc": 87,
        "mi": 81.53,
        "mIwoC": 36.86,
        "commentWeight": 44.67,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 0.45,
        "relativeSystemComplexity": 256.45,
        "totalStructuralComplexity": 2816,
        "totalDataComplexity": 4.94,
        "totalSystemComplexity": 2820.94,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 6,
        "instability": 0.86,
        "violations": {}
    },
    {
        "name": "Text_Frame_Reflower",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_collapse_white_space",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_line_break",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_newline_break",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_layout_line",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_min_max_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 54,
        "ccn": 48,
        "ccnMethodMax": 30,
        "externals": [
            "Frame_Reflower",
            "Text_Frame_Decorator",
            "Font_Metrics",
            "Font_Metrics",
            "Font_Metrics",
            "Frame_Decorator",
            "Font_Metrics",
            "Font_Metrics"
        ],
        "parents": [
            "Frame_Reflower"
        ],
        "lcom": 2,
        "length": 578,
        "vocabulary": 82,
        "volume": 3674.67,
        "difficulty": 55.27,
        "effort": 203082.66,
        "level": 0.02,
        "bugs": 1.22,
        "time": 11282,
        "intelligentContent": 66.49,
        "number_operators": 185,
        "number_operands": 393,
        "number_operators_unique": 18,
        "number_operands_unique": 64,
        "cloc": 119,
        "loc": 348,
        "lloc": 229,
        "mi": 56.45,
        "mIwoC": 17.1,
        "commentWeight": 39.35,
        "kanDefect": 2.36,
        "relativeStructuralComplexity": 576,
        "relativeDataComplexity": 0.39,
        "relativeSystemComplexity": 576.39,
        "totalStructuralComplexity": 4032,
        "totalDataComplexity": 2.72,
        "totalSystemComplexity": 4034.72,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Text_Renderer",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 19,
        "ccn": 19,
        "ccnMethodMax": 19,
        "externals": [
            "Abstract_Renderer",
            "Frame",
            "Font_Metrics"
        ],
        "parents": [
            "Abstract_Renderer"
        ],
        "lcom": 1,
        "length": 275,
        "vocabulary": 71,
        "volume": 1691.18,
        "difficulty": 21.61,
        "effort": 36553.23,
        "level": 0.05,
        "bugs": 0.56,
        "time": 2031,
        "intelligentContent": 78.24,
        "number_operators": 99,
        "number_operands": 176,
        "number_operators_unique": 14,
        "number_operands_unique": 57,
        "cloc": 78,
        "loc": 164,
        "lloc": 86,
        "mi": 76.46,
        "mIwoC": 32.64,
        "commentWeight": 43.82,
        "kanDefect": 1.39,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.14,
        "relativeSystemComplexity": 169.14,
        "totalStructuralComplexity": 169,
        "totalDataComplexity": 0.14,
        "totalSystemComplexity": 169.14,
        "package": "dompdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "TTF_Info",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setFontFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFontsDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "readFontsDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFontInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCopyright",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFontFamily",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFontSubFamily",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFontId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFullFontName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dec2ord",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dec2hex",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exitClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_ttf",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 13,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 34,
        "ccn": 22,
        "ccnMethodMax": 10,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 427,
        "vocabulary": 64,
        "volume": 2562,
        "difficulty": 48.65,
        "effort": 124638.57,
        "level": 0.02,
        "bugs": 0.85,
        "time": 6924,
        "intelligentContent": 52.66,
        "number_operators": 158,
        "number_operands": 269,
        "number_operators_unique": 17,
        "number_operands_unique": 47,
        "cloc": 152,
        "loc": 282,
        "lloc": 130,
        "mi": 72.44,
        "mIwoC": 27.06,
        "commentWeight": 45.38,
        "kanDefect": 1.15,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 1.13,
        "relativeSystemComplexity": 101.13,
        "totalStructuralComplexity": 1300,
        "totalDataComplexity": 14.73,
        "totalSystemComplexity": 1314.73,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Cpdf",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_destination",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_viewerPreferences",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_catalog",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_pages",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_outlines",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_font",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_fontDescriptor",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_fontEncoding",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_fontDescendentCID",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_fontGIDtoCIDMap",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_procset",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_info",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_action",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_annotation",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_page",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_contents",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_embedjs",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_javascript",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_image",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_extGState",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "o_encryption",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "md5_16",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "encryptInit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ARC4_init",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ARC4",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addLink",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addInternalLink",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEncryption",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkAllHere",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "newDocument",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "openFont",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectFont",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCurrentFont",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFirstPageId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addContent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setColor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setStrokeColor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setGraphicsState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLineTransparency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFillTransparency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "curve",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "partEllipse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filledEllipse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ellipse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLineStyle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "polygon",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filledRectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "restore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clippingRectangle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clippingEnd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "scale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rotate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "skew",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transform",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "newPage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFontHeight",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFontDescender",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filterText",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "utf8toCodePointsArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "utf8toUtf16BE",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "PRVTgetTextPosition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "PRVTcheckTextDirective",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "PRVTcheckTextDirective1",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toUpper",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addText",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTextWidth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "PRVTadjustWrapText",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addTextWrap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "saveState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "restoreState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "openObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reopenObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "closeObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stopObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "serializeObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "restoreSerializedObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPreferences",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "PRVT_getBytes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addImagePng",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addImagePngAlpha",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPngFromFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPngFromBuf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addJpegFromFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addImage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_iscached",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addJpegImage_common",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "openHere",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addJavascript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addDestination",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFontFamily",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addMessage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 102,
        "nbMethods": 101,
        "nbMethodsPrivate": 22,
        "nbMethodsPublic": 79,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 780,
        "ccn": 679,
        "ccnMethodMax": 67,
        "externals": [],
        "parents": [],
        "lcom": 3,
        "length": 8872,
        "vocabulary": 945,
        "volume": 87692.36,
        "difficulty": 116.71,
        "effort": 10234937.54,
        "level": 0.01,
        "bugs": 29.23,
        "time": 568608,
        "intelligentContent": 751.34,
        "number_operators": 2212,
        "number_operands": 6660,
        "number_operators_unique": 32,
        "number_operands_unique": 913,
        "cloc": 1190,
        "loc": 4136,
        "lloc": 2946,
        "mi": 36.93,
        "mIwoC": 0,
        "commentWeight": 36.93,
        "kanDefect": 43.74,
        "relativeStructuralComplexity": 3844,
        "relativeDataComplexity": 1.14,
        "relativeSystemComplexity": 3845.14,
        "totalStructuralComplexity": 392088,
        "totalDataComplexity": 116.57,
        "totalSystemComplexity": 392204.57,
        "package": " Cpdf\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Benchmark",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "mark",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "elapsed_time",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "memory_usage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [],
        "parents": [],
        "lcom": 2,
        "length": 36,
        "vocabulary": 14,
        "volume": 137.06,
        "difficulty": 6.94,
        "effort": 951.84,
        "level": 0.14,
        "bugs": 0.05,
        "time": 53,
        "intelligentContent": 19.74,
        "number_operators": 11,
        "number_operands": 25,
        "number_operators_unique": 5,
        "number_operands_unique": 9,
        "cloc": 57,
        "loc": 83,
        "lloc": 26,
        "mi": 101.59,
        "mIwoC": 53.63,
        "commentWeight": 47.96,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 5.33,
        "relativeSystemComplexity": 5.33,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 16,
        "totalSystemComplexity": 16,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Config",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "item",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "slash_item",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "site_url",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "base_url",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_uri_string",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "system_url",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_item",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 43,
        "ccn": 35,
        "ccnMethodMax": 13,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 335,
        "vocabulary": 60,
        "volume": 1978.81,
        "difficulty": 22.5,
        "effort": 44523.19,
        "level": 0.04,
        "bugs": 0.66,
        "time": 2474,
        "intelligentContent": 87.95,
        "number_operators": 110,
        "number_operands": 225,
        "number_operators_unique": 10,
        "number_operands_unique": 50,
        "cloc": 114,
        "loc": 250,
        "lloc": 137,
        "mi": 68.88,
        "mIwoC": 25.6,
        "commentWeight": 43.27,
        "kanDefect": 2.01,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 3.69,
        "relativeSystemComplexity": 19.69,
        "totalStructuralComplexity": 144,
        "totalDataComplexity": 33.2,
        "totalSystemComplexity": 177.2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Controller",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_instance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [],
        "parents": [],
        "lcom": 2,
        "length": 13,
        "vocabulary": 8,
        "volume": 39,
        "difficulty": 0.86,
        "effort": 33.43,
        "level": 1.17,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 45.5,
        "number_operators": 1,
        "number_operands": 12,
        "number_operators_unique": 1,
        "number_operands_unique": 7,
        "cloc": 32,
        "loc": 51,
        "lloc": 19,
        "mi": 107.77,
        "mIwoC": 60.7,
        "commentWeight": 47.08,
        "kanDefect": 0.38,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 3,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 10,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Exceptions",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log_exception",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "show_404",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "show_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "show_exception",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "show_php_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 18,
        "ccnMethodMax": 6,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 242,
        "vocabulary": 67,
        "volume": 1467.99,
        "difficulty": 12.1,
        "effort": 17767.78,
        "level": 0.08,
        "bugs": 0.49,
        "time": 987,
        "intelligentContent": 121.29,
        "number_operators": 86,
        "number_operands": 156,
        "number_operators_unique": 9,
        "number_operands_unique": 58,
        "cloc": 75,
        "loc": 178,
        "lloc": 103,
        "mi": 73.72,
        "mIwoC": 31.5,
        "commentWeight": 42.22,
        "kanDefect": 1.06,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.17,
        "relativeSystemComplexity": 5.17,
        "totalStructuralComplexity": 24,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 31,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Hooks",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "call_hook",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_run_hook",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 31,
        "ccn": 29,
        "ccnMethodMax": 19,
        "externals": [
            "class"
        ],
        "parents": [],
        "lcom": 1,
        "length": 167,
        "vocabulary": 31,
        "volume": 827.35,
        "difficulty": 18.43,
        "effort": 15252.03,
        "level": 0.05,
        "bugs": 0.28,
        "time": 847,
        "intelligentContent": 44.88,
        "number_operators": 61,
        "number_operands": 106,
        "number_operators_unique": 8,
        "number_operands_unique": 23,
        "cloc": 76,
        "loc": 167,
        "lloc": 91,
        "mi": 76.18,
        "mIwoC": 32.94,
        "commentWeight": 43.25,
        "kanDefect": 1.5,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 2.93,
        "relativeSystemComplexity": 18.93,
        "totalStructuralComplexity": 48,
        "totalDataComplexity": 8.8,
        "totalSystemComplexity": 56.8,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Input",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_from_array",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "post",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "post_get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_post",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cookie",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "server",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "input_stream",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_cookie",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ip_address",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid_ip",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "user_agent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sanitize_globals",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_clean_input_data",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_clean_input_keys",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "request_headers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_request_header",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_ajax_request",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_cli_request",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "method",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 22,
        "nbMethods": 22,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 18,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 109,
        "ccn": 88,
        "ccnMethodMax": 22,
        "externals": [],
        "parents": [],
        "lcom": 4,
        "length": 717,
        "vocabulary": 124,
        "volume": 4986.16,
        "difficulty": 37.56,
        "effort": 187257.96,
        "level": 0.03,
        "bugs": 1.66,
        "time": 10403,
        "intelligentContent": 132.77,
        "number_operators": 210,
        "number_operands": 507,
        "number_operators_unique": 16,
        "number_operands_unique": 108,
        "cloc": 319,
        "loc": 645,
        "lloc": 326,
        "mi": 51.77,
        "mIwoC": 7.45,
        "commentWeight": 44.32,
        "kanDefect": 5.52,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 2.51,
        "relativeSystemComplexity": 146.51,
        "totalStructuralComplexity": 3168,
        "totalDataComplexity": 55.23,
        "totalSystemComplexity": 3223.23,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Lang",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "line",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 26,
        "ccn": 24,
        "ccnMethodMax": 21,
        "externals": [],
        "parents": [],
        "lcom": 2,
        "length": 187,
        "vocabulary": 40,
        "volume": 995.2,
        "difficulty": 16.69,
        "effort": 16613.43,
        "level": 0.06,
        "bugs": 0.33,
        "time": 923,
        "intelligentContent": 59.62,
        "number_operators": 72,
        "number_operands": 115,
        "number_operators_unique": 9,
        "number_operands_unique": 31,
        "cloc": 49,
        "loc": 125,
        "lloc": 76,
        "mi": 76,
        "mIwoC": 34.75,
        "commentWeight": 41.24,
        "kanDefect": 1.52,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 3.11,
        "relativeSystemComplexity": 7.11,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 9.33,
        "totalSystemComplexity": 21.33,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Loader",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_loaded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "library",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "model",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dbutil",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dbforge",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "view",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "file",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "vars",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear_vars",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_var",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_vars",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "helper",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "helpers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "language",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "config",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_package_path",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_package_paths",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove_package_path",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ci_load",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ci_load_library",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ci_load_stock_library",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ci_init_library",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ci_autoloader",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ci_prepare_view_vars",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ci_get_component",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 29,
        "nbMethods": 28,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 21,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 172,
        "ccn": 144,
        "ccnMethodMax": 24,
        "externals": [
            "RuntimeException",
            "RuntimeException",
            "RuntimeException",
            "RuntimeException",
            "RuntimeException",
            "RuntimeException",
            "model",
            "class",
            "class",
            "class",
            "class",
            "class_name",
            "class_name"
        ],
        "parents": [],
        "lcom": 2,
        "length": 1375,
        "vocabulary": 163,
        "volume": 10104.5,
        "difficulty": 33,
        "effort": 333448.54,
        "level": 0.03,
        "bugs": 3.37,
        "time": 18525,
        "intelligentContent": 306.2,
        "number_operators": 463,
        "number_operands": 912,
        "number_operators_unique": 11,
        "number_operands_unique": 152,
        "cloc": 474,
        "loc": 1052,
        "lloc": 578,
        "mi": 43.12,
        "mIwoC": 0,
        "commentWeight": 43.12,
        "kanDefect": 10.84,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 2.65,
        "relativeSystemComplexity": 291.65,
        "totalStructuralComplexity": 8381,
        "totalDataComplexity": 76.89,
        "totalSystemComplexity": 8457.89,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Log",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "write_log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_format_line",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "strlen",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "substr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 35,
        "ccn": 31,
        "ccnMethodMax": 14,
        "externals": [
            "DateTime"
        ],
        "parents": [],
        "lcom": 3,
        "length": 249,
        "vocabulary": 68,
        "volume": 1515.78,
        "difficulty": 25.69,
        "effort": 38943.84,
        "level": 0.04,
        "bugs": 0.51,
        "time": 2164,
        "intelligentContent": 59,
        "number_operators": 82,
        "number_operands": 167,
        "number_operators_unique": 16,
        "number_operands_unique": 52,
        "cloc": 102,
        "loc": 196,
        "lloc": 94,
        "mi": 75.47,
        "mIwoC": 30.52,
        "commentWeight": 44.95,
        "kanDefect": 1.06,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 2.45,
        "relativeSystemComplexity": 11.45,
        "totalStructuralComplexity": 45,
        "totalDataComplexity": 12.25,
        "totalSystemComplexity": 57.25,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Model",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "lcom": 2,
        "length": 3,
        "vocabulary": 2,
        "volume": 3,
        "difficulty": 1,
        "effort": 3,
        "level": 1,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 3,
        "number_operators": 1,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 1,
        "cloc": 27,
        "loc": 38,
        "lloc": 11,
        "mi": 122.06,
        "mIwoC": 73.81,
        "commentWeight": 48.26,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 6,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Output",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_output",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_output",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "append_output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_header",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_content_type",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_content_type",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_header",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_status_header",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "enable_profiler",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_profiler_sections",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_display",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_write_cache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_display_cache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete_cache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_cache_header",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "strlen",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "substr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 19,
        "nbMethods": 17,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 15,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 1,
        "wmc": 98,
        "ccn": 80,
        "ccnMethodMax": 21,
        "externals": [],
        "parents": [],
        "lcom": 4,
        "length": 740,
        "vocabulary": 145,
        "volume": 5313.13,
        "difficulty": 37.92,
        "effort": 201498.45,
        "level": 0.03,
        "bugs": 1.77,
        "time": 11194,
        "intelligentContent": 140.1,
        "number_operators": 237,
        "number_operands": 503,
        "number_operators_unique": 19,
        "number_operands_unique": 126,
        "cloc": 291,
        "loc": 606,
        "lloc": 315,
        "mi": 52.6,
        "mIwoC": 8.66,
        "commentWeight": 43.94,
        "kanDefect": 3.92,
        "relativeStructuralComplexity": 225,
        "relativeDataComplexity": 1.95,
        "relativeSystemComplexity": 226.95,
        "totalStructuralComplexity": 4275,
        "totalDataComplexity": 37.06,
        "totalSystemComplexity": 4312.06,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Router",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_routing",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_request",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_default_controller",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validate_request",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_routes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_class",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetch_class",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_method",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetch_method",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_directory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetch_directory",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 8,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 1,
        "wmc": 54,
        "ccn": 43,
        "ccnMethodMax": 14,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 387,
        "vocabulary": 75,
        "volume": 2410.55,
        "difficulty": 23.63,
        "effort": 56968.14,
        "level": 0.04,
        "bugs": 0.8,
        "time": 3165,
        "intelligentContent": 102,
        "number_operators": 112,
        "number_operands": 275,
        "number_operators_unique": 11,
        "number_operands_unique": 64,
        "cloc": 188,
        "loc": 365,
        "lloc": 177,
        "mi": 66.32,
        "mIwoC": 21.5,
        "commentWeight": 44.83,
        "kanDefect": 2.22,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0.87,
        "relativeSystemComplexity": 100.87,
        "totalStructuralComplexity": 1200,
        "totalDataComplexity": 10.45,
        "totalSystemComplexity": 1210.45,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Security",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "csrf_verify",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "csrf_set_cookie",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "csrf_show_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_csrf_hash",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_csrf_token_name",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "xss_clean",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "xss_hash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_random_bytes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "entity_decode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sanitize_filename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "strip_image_tags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_urldecodespaces",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compact_exploded_words",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sanitize_naughty_html",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_js_link_removal",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_js_img_removal",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_convert_attribute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_filter_attributes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_decode_entity",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_do_never_allowed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_csrf_set_hash",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 22,
        "nbMethods": 20,
        "nbMethodsPrivate": 10,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 90,
        "ccn": 69,
        "ccnMethodMax": 13,
        "externals": [],
        "parents": [],
        "lcom": 7,
        "length": 900,
        "vocabulary": 300,
        "volume": 7405.94,
        "difficulty": 13.94,
        "effort": 103220.24,
        "level": 0.07,
        "bugs": 2.47,
        "time": 5734,
        "intelligentContent": 531.37,
        "number_operators": 231,
        "number_operands": 669,
        "number_operators_unique": 12,
        "number_operands_unique": 288,
        "cloc": 407,
        "loc": 787,
        "lloc": 383,
        "mi": 52.15,
        "mIwoC": 7.27,
        "commentWeight": 44.88,
        "kanDefect": 5.66,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 3.06,
        "relativeSystemComplexity": 124.06,
        "totalStructuralComplexity": 2662,
        "totalDataComplexity": 67.42,
        "totalSystemComplexity": 2729.42,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_URI",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_uri_string",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_request_uri",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_query_string",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_argv",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_remove_relative_directory",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filter_uri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "segment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rsegment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "uri_to_assoc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ruri_to_assoc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_uri_to_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assoc_to_uri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "slash_segment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "slash_rsegment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_slash_segment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "segment_array",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rsegment_array",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "total_segments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "total_rsegments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "uri_string",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ruri_string",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 22,
        "nbMethods": 19,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 0,
        "wmc": 75,
        "ccn": 54,
        "ccnMethodMax": 12,
        "externals": [],
        "parents": [],
        "lcom": 3,
        "length": 509,
        "vocabulary": 83,
        "volume": 3244.9,
        "difficulty": 37.64,
        "effort": 122130.33,
        "level": 0.03,
        "bugs": 1.08,
        "time": 6785,
        "intelligentContent": 86.21,
        "number_operators": 138,
        "number_operands": 371,
        "number_operators_unique": 14,
        "number_operands_unique": 69,
        "cloc": 259,
        "loc": 485,
        "lloc": 226,
        "mi": 62.06,
        "mIwoC": 16.8,
        "commentWeight": 45.27,
        "kanDefect": 2.99,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 146,
        "totalStructuralComplexity": 3168,
        "totalDataComplexity": 44,
        "totalSystemComplexity": 3212,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Utf8",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clean_string",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "safe_ascii_for_xml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "convert_to_utf8",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_ascii",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 14,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [],
        "parents": [],
        "lcom": 4,
        "length": 57,
        "vocabulary": 21,
        "volume": 250.36,
        "difficulty": 7.4,
        "effort": 1852.68,
        "level": 0.14,
        "bugs": 0.08,
        "time": 103,
        "intelligentContent": 33.83,
        "number_operators": 20,
        "number_operands": 37,
        "number_operators_unique": 6,
        "number_operands_unique": 15,
        "cloc": 57,
        "loc": 100,
        "lloc": 43,
        "mi": 92.26,
        "mIwoC": 46.23,
        "commentWeight": 46.03,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.5,
        "relativeSystemComplexity": 4.5,
        "totalStructuralComplexity": 5,
        "totalDataComplexity": 17.5,
        "totalSystemComplexity": 22.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_DB",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "CI_DB_driver"
        ],
        "parents": [
            "CI_DB_driver"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 11,
        "efferentCoupling": 1,
        "instability": 0.08,
        "violations": {}
    },
    {
        "name": "CI_DB_driver",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_pconnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reconnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_set_charset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "platform",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_version",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "query",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load_rdriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "simple_query",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trans_off",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trans_strict",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trans_start",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trans_complete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trans_status",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trans_begin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trans_commit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trans_rollback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile_binds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_write_type",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "elapsed_time",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "total_queries",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "last_query",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escape",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escape_str",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escape_like_str",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "primary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count_all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_tables",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "table_exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escape_identifiers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_string",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update_string",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_has_operator",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_operator",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "call_function",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_set_path",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_on",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_off",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_delete_all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_cache_init",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "close",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "display_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "protect_identifiers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_reset_select",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 57,
        "nbMethods": 54,
        "nbMethodsPrivate": 9,
        "nbMethodsPublic": 45,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 0,
        "wmc": 224,
        "ccn": 168,
        "ccnMethodMax": 32,
        "externals": [
            "driver",
            "CI_DB_result",
            "CI_DB_Cache"
        ],
        "parents": [],
        "lcom": 4,
        "length": 1507,
        "vocabulary": 212,
        "volume": 11645.98,
        "difficulty": 35.32,
        "effort": 411314.7,
        "level": 0.03,
        "bugs": 3.88,
        "time": 22851,
        "intelligentContent": 329.74,
        "number_operators": 508,
        "number_operands": 999,
        "number_operators_unique": 14,
        "number_operands_unique": 198,
        "cloc": 758,
        "loc": 1505,
        "lloc": 747,
        "mi": 44.55,
        "mIwoC": 0,
        "commentWeight": 44.55,
        "kanDefect": 9.64,
        "relativeStructuralComplexity": 2601,
        "relativeDataComplexity": 1.82,
        "relativeSystemComplexity": 2602.82,
        "totalStructuralComplexity": 148257,
        "totalDataComplexity": 104,
        "totalSystemComplexity": 148361,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 3,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "CI_DB_forge",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "drop_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_key",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_field",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create_table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_create_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_create_table_attr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "drop_table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_drop_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rename_table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_column",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "drop_column",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "modify_column",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_fields",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_unsigned",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_default",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_unique",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_primary_keys",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_indexes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_reset",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 25,
        "nbMethods": 25,
        "nbMethodsPrivate": 14,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 150,
        "ccn": 126,
        "ccnMethodMax": 23,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 1060,
        "vocabulary": 121,
        "volume": 7334,
        "difficulty": 44.24,
        "effort": 324427.42,
        "level": 0.02,
        "bugs": 2.44,
        "time": 18024,
        "intelligentContent": 165.79,
        "number_operators": 325,
        "number_operands": 735,
        "number_operators_unique": 13,
        "number_operands_unique": 108,
        "cloc": 311,
        "loc": 708,
        "lloc": 397,
        "mi": 42.78,
        "mIwoC": 0,
        "commentWeight": 42.78,
        "kanDefect": 5.95,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 1.94,
        "relativeSystemComplexity": 442.94,
        "totalStructuralComplexity": 11025,
        "totalDataComplexity": 48.5,
        "totalSystemComplexity": 11073.5,
        "package": "\\",
        "pageRank": 0.02,
        "afferentCoupling": 12,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_DB_query_builder",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "select_max",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "select_min",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "select_avg",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "select_sum",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_max_min_avg_sum",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_create_alias_from_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "distinct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "from",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "join",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "or_where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_wh",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where_in",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "or_where_in",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where_not_in",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "or_where_not_in",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_where_in",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "like",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "not_like",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "or_like",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "or_not_like",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_like",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "group_start",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "or_group_start",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "not_group_start",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "or_not_group_start",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "group_end",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_group_get_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "group_by",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "having",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "or_having",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "order_by",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "limit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_compiled_select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count_all_results",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_batch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_insert_batch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_compiled_insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validate_insert",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "replace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_replace",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_from_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_compiled_update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validate_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update_batch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_update_batch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "empty_table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "truncate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_compiled_delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dbprefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_dbprefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_track_aliases",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_select",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_wh",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_group_by",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_order_by",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_object_to_array",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_object_to_array_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "start_cache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stop_cache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flush_cache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_merge_cache",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_is_literal",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset_query",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_reset_run",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_reset_select",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_reset_write",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 80,
        "nbMethods": 80,
        "nbMethodsPrivate": 27,
        "nbMethodsPublic": 53,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 338,
        "ccn": 259,
        "ccnMethodMax": 14,
        "externals": [
            "CI_DB_driver"
        ],
        "parents": [
            "CI_DB_driver"
        ],
        "lcom": 1,
        "length": 2683,
        "vocabulary": 230,
        "volume": 21049.45,
        "difficulty": 76.7,
        "effort": 1614482.92,
        "level": 0.01,
        "bugs": 7.02,
        "time": 89693,
        "intelligentContent": 274.44,
        "number_operators": 761,
        "number_operands": 1922,
        "number_operators_unique": 17,
        "number_operands_unique": 213,
        "cloc": 1050,
        "loc": 2077,
        "lloc": 1033,
        "mi": 44.59,
        "mIwoC": 0,
        "commentWeight": 44.59,
        "kanDefect": 15.08,
        "relativeStructuralComplexity": 2304,
        "relativeDataComplexity": 2.35,
        "relativeSystemComplexity": 2306.35,
        "totalStructuralComplexity": 184320,
        "totalDataComplexity": 187.73,
        "totalSystemComplexity": 184507.73,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "custom_result_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "result_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "result_array",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "custom_row_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "row_object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "row_array",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "first_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "last_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "next_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "previous_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unbuffered_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data_seek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 23,
        "nbMethods": 23,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 21,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 81,
        "ccn": 59,
        "ccnMethodMax": 11,
        "externals": [
            "class_name",
            "class_name"
        ],
        "parents": [],
        "lcom": 4,
        "length": 458,
        "vocabulary": 37,
        "volume": 2385.93,
        "difficulty": 78.54,
        "effort": 187394.89,
        "level": 0.01,
        "bugs": 0.8,
        "time": 10411,
        "intelligentContent": 30.38,
        "number_operators": 168,
        "number_operands": 290,
        "number_operators_unique": 13,
        "number_operands_unique": 24,
        "cloc": 255,
        "loc": 491,
        "lloc": 236,
        "mi": 61.58,
        "mIwoC": 16.65,
        "commentWeight": 44.93,
        "kanDefect": 3.19,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 4.25,
        "relativeSystemComplexity": 104.25,
        "totalStructuralComplexity": 2300,
        "totalDataComplexity": 97.82,
        "totalSystemComplexity": 2397.82,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 13,
        "efferentCoupling": 1,
        "instability": 0.07,
        "violations": {}
    },
    {
        "name": "CI_DB_utility",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_databases",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "database_exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "optimize_table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "optimize_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "repair_table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "csv_from_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "xml_from_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "backup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 53,
        "ccn": 45,
        "ccnMethodMax": 19,
        "externals": [],
        "parents": [],
        "lcom": 3,
        "length": 455,
        "vocabulary": 76,
        "volume": 2842.81,
        "difficulty": 32.29,
        "effort": 91804.62,
        "level": 0.03,
        "bugs": 0.95,
        "time": 5100,
        "intelligentContent": 88.03,
        "number_operators": 142,
        "number_operands": 313,
        "number_operators_unique": 13,
        "number_operands_unique": 63,
        "cloc": 119,
        "loc": 294,
        "lloc": 175,
        "mi": 62.52,
        "mIwoC": 20.83,
        "commentWeight": 41.68,
        "kanDefect": 3.53,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 1.59,
        "relativeSystemComplexity": 170.59,
        "totalStructuralComplexity": 1521,
        "totalDataComplexity": 14.29,
        "totalSystemComplexity": 1535.29,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 12,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_DB_cubrid_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reconnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_from_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 17,
        "nbMethods": 17,
        "nbMethodsPrivate": 9,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 46,
        "ccn": 30,
        "ccnMethodMax": 9,
        "externals": [
            "CI_DB",
            "stdClass"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 3,
        "length": 248,
        "vocabulary": 55,
        "volume": 1433.78,
        "difficulty": 19.75,
        "effort": 28317.1,
        "level": 0.05,
        "bugs": 0.48,
        "time": 1573,
        "intelligentContent": 72.6,
        "number_operators": 90,
        "number_operands": 158,
        "number_operators_unique": 11,
        "number_operands_unique": 44,
        "cloc": 157,
        "loc": 286,
        "lloc": 129,
        "mi": 73.42,
        "mIwoC": 27.82,
        "commentWeight": 45.59,
        "kanDefect": 1.06,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 4.07,
        "relativeSystemComplexity": 29.07,
        "totalStructuralComplexity": 425,
        "totalDataComplexity": 69.17,
        "totalSystemComplexity": 494.17,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_cubrid_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_indexes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 22,
        "ccn": 19,
        "ccnMethodMax": 7,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 2,
        "length": 238,
        "vocabulary": 66,
        "volume": 1438.57,
        "difficulty": 18.89,
        "effort": 27172.91,
        "level": 0.05,
        "bugs": 0.48,
        "time": 1510,
        "intelligentContent": 76.16,
        "number_operators": 68,
        "number_operands": 170,
        "number_operators_unique": 12,
        "number_operands_unique": 54,
        "cloc": 67,
        "loc": 140,
        "lloc": 73,
        "mi": 78.59,
        "mIwoC": 34.69,
        "commentWeight": 43.9,
        "kanDefect": 0.72,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 2.38,
        "relativeSystemComplexity": 11.38,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 9.5,
        "totalSystemComplexity": 45.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_cubrid_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "num_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data_seek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 6,
        "ccnMethodMax": 4,
        "externals": [
            "CI_DB_result",
            "stdClass"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 75,
        "vocabulary": 21,
        "volume": 329.42,
        "difficulty": 19.13,
        "effort": 6300.23,
        "level": 0.05,
        "bugs": 0.11,
        "time": 350,
        "intelligentContent": 17.22,
        "number_operators": 24,
        "number_operands": 51,
        "number_operators_unique": 9,
        "number_operands_unique": 12,
        "cloc": 70,
        "loc": 117,
        "lloc": 47,
        "mi": 91.66,
        "mIwoC": 45.09,
        "commentWeight": 46.57,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.63,
        "relativeSystemComplexity": 4.63,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 29,
        "totalSystemComplexity": 37,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_cubrid_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "list_databases",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 15,
        "vocabulary": 7,
        "volume": 42.11,
        "difficulty": 3.75,
        "effort": 157.91,
        "level": 0.27,
        "bugs": 0.01,
        "time": 9,
        "intelligentContent": 11.23,
        "number_operators": 5,
        "number_operands": 10,
        "number_operators_unique": 3,
        "number_operands_unique": 4,
        "cloc": 22,
        "loc": 37,
        "lloc": 15,
        "mi": 109.2,
        "mIwoC": 62.7,
        "commentWeight": 46.5,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.75,
        "relativeSystemComplexity": 2.75,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 3.5,
        "totalSystemComplexity": 5.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_ibase_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 18,
        "nbMethods": 18,
        "nbMethodsPrivate": 12,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 32,
        "ccn": 15,
        "ccnMethodMax": 4,
        "externals": [
            "CI_DB"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 5,
        "length": 196,
        "vocabulary": 46,
        "volume": 1082.62,
        "difficulty": 13.05,
        "effort": 14131.02,
        "level": 0.08,
        "bugs": 0.36,
        "time": 785,
        "intelligentContent": 82.94,
        "number_operators": 72,
        "number_operands": 124,
        "number_operators_unique": 8,
        "number_operands_unique": 38,
        "cloc": 166,
        "loc": 309,
        "lloc": 143,
        "mi": 75.06,
        "mIwoC": 29.72,
        "commentWeight": 45.34,
        "kanDefect": 0.64,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 2.98,
        "relativeSystemComplexity": 51.98,
        "totalStructuralComplexity": 882,
        "totalDataComplexity": 53.63,
        "totalSystemComplexity": 935.63,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_ibase_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "create_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "drop_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 18,
        "ccnMethodMax": 9,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 3,
        "length": 233,
        "vocabulary": 59,
        "volume": 1370.66,
        "difficulty": 16.43,
        "effort": 22517.92,
        "level": 0.06,
        "bugs": 0.46,
        "time": 1251,
        "intelligentContent": 83.43,
        "number_operators": 72,
        "number_operands": 161,
        "number_operators_unique": 10,
        "number_operands_unique": 49,
        "cloc": 82,
        "loc": 162,
        "lloc": 80,
        "mi": 78.71,
        "mIwoC": 34.1,
        "commentWeight": 44.61,
        "kanDefect": 0.93,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 2.25,
        "relativeSystemComplexity": 27.25,
        "totalStructuralComplexity": 150,
        "totalDataComplexity": 13.5,
        "totalSystemComplexity": 163.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_ibase_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 11,
        "ccn": 6,
        "ccnMethodMax": 4,
        "externals": [
            "CI_DB_result",
            "stdClass",
            "class_name"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 90,
        "vocabulary": 23,
        "volume": 407.12,
        "difficulty": 13.34,
        "effort": 5432.52,
        "level": 0.07,
        "bugs": 0.14,
        "time": 302,
        "intelligentContent": 30.51,
        "number_operators": 29,
        "number_operands": 61,
        "number_operators_unique": 7,
        "number_operands_unique": 16,
        "cloc": 53,
        "loc": 102,
        "lloc": 49,
        "mi": 88.98,
        "mIwoC": 44.05,
        "commentWeight": 44.93,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.08,
        "relativeSystemComplexity": 4.08,
        "totalStructuralComplexity": 6,
        "totalDataComplexity": 18.5,
        "totalSystemComplexity": 24.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_ibase_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 18,
        "vocabulary": 9,
        "volume": 57.06,
        "difficulty": 4.8,
        "effort": 273.88,
        "level": 0.21,
        "bugs": 0.02,
        "time": 15,
        "intelligentContent": 11.89,
        "number_operators": 6,
        "number_operands": 12,
        "number_operators_unique": 4,
        "number_operands_unique": 5,
        "cloc": 14,
        "loc": 27,
        "lloc": 13,
        "mi": 108.04,
        "mIwoC": 63.13,
        "commentWeight": 44.91,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mssql_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_db_set_charset",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_version",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 21,
        "nbMethods": 21,
        "nbMethodsPrivate": 14,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 50,
        "ccn": 30,
        "ccnMethodMax": 9,
        "externals": [
            "CI_DB",
            "stdClass"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 5,
        "length": 428,
        "vocabulary": 101,
        "volume": 2849.71,
        "difficulty": 20.98,
        "effort": 59779.24,
        "level": 0.05,
        "bugs": 0.95,
        "time": 3321,
        "intelligentContent": 135.85,
        "number_operators": 144,
        "number_operands": 284,
        "number_operators_unique": 13,
        "number_operands_unique": 88,
        "cloc": 213,
        "loc": 381,
        "lloc": 168,
        "mi": 69.04,
        "mIwoC": 23.23,
        "commentWeight": 45.81,
        "kanDefect": 0.99,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 1.78,
        "relativeSystemComplexity": 197.78,
        "totalStructuralComplexity": 4116,
        "totalDataComplexity": 37.47,
        "totalSystemComplexity": 4153.47,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mssql_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 3,
        "length": 99,
        "vocabulary": 42,
        "volume": 533.84,
        "difficulty": 10.94,
        "effort": 5838.87,
        "level": 0.09,
        "bugs": 0.18,
        "time": 324,
        "intelligentContent": 48.81,
        "number_operators": 29,
        "number_operands": 70,
        "number_operators_unique": 10,
        "number_operands_unique": 32,
        "cloc": 50,
        "loc": 92,
        "lloc": 42,
        "mi": 89.62,
        "mIwoC": 44.15,
        "commentWeight": 45.48,
        "kanDefect": 0.58,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.75,
        "relativeSystemComplexity": 10.75,
        "totalStructuralComplexity": 27,
        "totalDataComplexity": 5.25,
        "totalSystemComplexity": 32.25,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mssql_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "num_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data_seek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 8,
        "ccnMethodMax": 4,
        "externals": [
            "CI_DB_result",
            "stdClass",
            "class_name"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 92,
        "vocabulary": 21,
        "volume": 404.09,
        "difficulty": 18.77,
        "effort": 7584.52,
        "level": 0.05,
        "bugs": 0.13,
        "time": 421,
        "intelligentContent": 21.53,
        "number_operators": 31,
        "number_operands": 61,
        "number_operators_unique": 8,
        "number_operands_unique": 13,
        "cloc": 72,
        "loc": 132,
        "lloc": 60,
        "mi": 87.4,
        "mIwoC": 41.88,
        "commentWeight": 45.52,
        "kanDefect": 0.75,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 4.13,
        "relativeSystemComplexity": 5.13,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 33,
        "totalSystemComplexity": 41,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mssql_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 6,
        "vocabulary": 6,
        "volume": 15.51,
        "difficulty": 0.5,
        "effort": 7.75,
        "level": 2,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 1,
        "number_operands": 5,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 27,
        "loc": 37,
        "lloc": 10,
        "mi": 118.19,
        "mIwoC": 69.71,
        "commentWeight": 48.48,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mysql_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reconnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_db_set_charset",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prep_query",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_from_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 20,
        "nbMethodsPrivate": 11,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 46,
        "ccn": 27,
        "ccnMethodMax": 10,
        "externals": [
            "CI_DB",
            "stdClass"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 2,
        "length": 267,
        "vocabulary": 58,
        "volume": 1564.08,
        "difficulty": 24.56,
        "effort": 38406.88,
        "level": 0.04,
        "bugs": 0.52,
        "time": 2134,
        "intelligentContent": 63.7,
        "number_operators": 97,
        "number_operands": 170,
        "number_operators_unique": 13,
        "number_operands_unique": 45,
        "cloc": 198,
        "loc": 361,
        "lloc": 163,
        "mi": 71.33,
        "mIwoC": 25.75,
        "commentWeight": 45.58,
        "kanDefect": 1.27,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 2.5,
        "relativeSystemComplexity": 102.5,
        "totalStructuralComplexity": 2000,
        "totalDataComplexity": 50,
        "totalSystemComplexity": 2050,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mysql_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_create_table_attr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_indexes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 29,
        "ccn": 26,
        "ccnMethodMax": 8,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 1,
        "length": 280,
        "vocabulary": 74,
        "volume": 1738.65,
        "difficulty": 17.46,
        "effort": 30357.33,
        "level": 0.06,
        "bugs": 0.58,
        "time": 1687,
        "intelligentContent": 99.58,
        "number_operators": 80,
        "number_operands": 200,
        "number_operators_unique": 11,
        "number_operands_unique": 63,
        "cloc": 60,
        "loc": 133,
        "lloc": 73,
        "mi": 76.3,
        "mIwoC": 33.17,
        "commentWeight": 43.13,
        "kanDefect": 1.01,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.63,
        "relativeSystemComplexity": 10.63,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 6.5,
        "totalSystemComplexity": 42.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mysql_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_rows",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data_seek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 8,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 5,
        "ccnMethodMax": 2,
        "externals": [
            "CI_DB_result",
            "stdClass"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 81,
        "vocabulary": 20,
        "volume": 350.08,
        "difficulty": 15.08,
        "effort": 5278.07,
        "level": 0.07,
        "bugs": 0.12,
        "time": 293,
        "intelligentContent": 23.22,
        "number_operators": 25,
        "number_operands": 56,
        "number_operators_unique": 7,
        "number_operands_unique": 13,
        "cloc": 79,
        "loc": 136,
        "lloc": 57,
        "mi": 89.45,
        "mIwoC": 43.21,
        "commentWeight": 46.24,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 2.44,
        "relativeSystemComplexity": 6.44,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 22,
        "totalSystemComplexity": 58,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mysql_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 17,
        "ccnMethodMax": 17,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 210,
        "vocabulary": 56,
        "volume": 1219.54,
        "difficulty": 11.08,
        "effort": 13516.62,
        "level": 0.09,
        "bugs": 0.41,
        "time": 751,
        "intelligentContent": 110.03,
        "number_operators": 77,
        "number_operands": 133,
        "number_operators_unique": 8,
        "number_operands_unique": 48,
        "cloc": 52,
        "loc": 130,
        "lloc": 78,
        "mi": 76.35,
        "mIwoC": 34.83,
        "commentWeight": 41.52,
        "kanDefect": 2,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.43,
        "relativeSystemComplexity": 36.43,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 0.43,
        "totalSystemComplexity": 36.43,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mysqli_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reconnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_db_set_charset",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prep_query",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_from_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 19,
        "nbMethods": 19,
        "nbMethodsPrivate": 11,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 63,
        "ccn": 45,
        "ccnMethodMax": 28,
        "externals": [
            "CI_DB",
            "stdClass"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 1,
        "length": 364,
        "vocabulary": 75,
        "volume": 2267.29,
        "difficulty": 25.79,
        "effort": 58474.14,
        "level": 0.04,
        "bugs": 0.76,
        "time": 3249,
        "intelligentContent": 87.91,
        "number_operators": 118,
        "number_operands": 246,
        "number_operators_unique": 13,
        "number_operands_unique": 62,
        "cloc": 196,
        "loc": 385,
        "lloc": 189,
        "mi": 65.47,
        "mIwoC": 20.79,
        "commentWeight": 44.68,
        "kanDefect": 1.55,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 1.29,
        "relativeSystemComplexity": 442.29,
        "totalStructuralComplexity": 8379,
        "totalDataComplexity": 24.59,
        "totalSystemComplexity": 8403.59,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mysqli_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_create_table_attr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_indexes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 29,
        "ccn": 26,
        "ccnMethodMax": 8,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 1,
        "length": 280,
        "vocabulary": 74,
        "volume": 1738.65,
        "difficulty": 17.46,
        "effort": 30357.33,
        "level": 0.06,
        "bugs": 0.58,
        "time": 1687,
        "intelligentContent": 99.58,
        "number_operators": 80,
        "number_operands": 200,
        "number_operators_unique": 11,
        "number_operands_unique": 63,
        "cloc": 62,
        "loc": 135,
        "lloc": 73,
        "mi": 76.54,
        "mIwoC": 33.17,
        "commentWeight": 43.37,
        "kanDefect": 1.01,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.63,
        "relativeSystemComplexity": 10.63,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 6.5,
        "totalSystemComplexity": 42.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mysqli_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "num_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_field_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data_seek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "CI_DB_result",
            "stdClass",
            "static"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 2,
        "length": 123,
        "vocabulary": 46,
        "volume": 679.4,
        "difficulty": 9.79,
        "effort": 6650.95,
        "level": 0.1,
        "bugs": 0.23,
        "time": 369,
        "intelligentContent": 69.4,
        "number_operators": 30,
        "number_operands": 93,
        "number_operators_unique": 8,
        "number_operands_unique": 38,
        "cloc": 83,
        "loc": 143,
        "lloc": 60,
        "mi": 86.67,
        "mIwoC": 40.44,
        "commentWeight": 46.24,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.93,
        "relativeSystemComplexity": 64.93,
        "totalStructuralComplexity": 576,
        "totalDataComplexity": 8.33,
        "totalSystemComplexity": 584.33,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_mysqli_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 17,
        "ccnMethodMax": 17,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 204,
        "vocabulary": 51,
        "volume": 1157.17,
        "difficulty": 11.81,
        "effort": 13670.81,
        "level": 0.08,
        "bugs": 0.39,
        "time": 759,
        "intelligentContent": 97.95,
        "number_operators": 77,
        "number_operands": 127,
        "number_operators_unique": 8,
        "number_operands_unique": 43,
        "cloc": 53,
        "loc": 127,
        "lloc": 74,
        "mi": 77.58,
        "mIwoC": 35.49,
        "commentWeight": 42.09,
        "kanDefect": 2,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.38,
        "relativeSystemComplexity": 49.38,
        "totalStructuralComplexity": 49,
        "totalDataComplexity": 0.38,
        "totalSystemComplexity": 49.38,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_oci8_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_cursor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stored_procedure",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_bind_params",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_reset_select",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 22,
        "nbMethods": 22,
        "nbMethodsPrivate": 13,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 77,
        "ccn": 56,
        "ccnMethodMax": 19,
        "externals": [
            "CI_DB",
            "stdClass"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 3,
        "length": 580,
        "vocabulary": 105,
        "volume": 3894.26,
        "difficulty": 27.27,
        "effort": 106203.31,
        "level": 0.04,
        "bugs": 1.3,
        "time": 5900,
        "intelligentContent": 142.79,
        "number_operators": 194,
        "number_operands": 386,
        "number_operators_unique": 13,
        "number_operands_unique": 92,
        "cloc": 275,
        "loc": 525,
        "lloc": 250,
        "mi": 60.05,
        "mIwoC": 15.02,
        "commentWeight": 45.03,
        "kanDefect": 2.84,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 3.17,
        "relativeSystemComplexity": 84.17,
        "totalStructuralComplexity": 1782,
        "totalDataComplexity": 69.8,
        "totalSystemComplexity": 1851.8,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_oci8_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 13,
        "ccnMethodMax": 9,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 3,
        "length": 169,
        "vocabulary": 46,
        "volume": 933.48,
        "difficulty": 18.23,
        "effort": 17016.04,
        "level": 0.05,
        "bugs": 0.31,
        "time": 945,
        "intelligentContent": 51.21,
        "number_operators": 53,
        "number_operands": 116,
        "number_operators_unique": 11,
        "number_operands_unique": 35,
        "cloc": 60,
        "loc": 119,
        "lloc": 59,
        "mi": 83.39,
        "mIwoC": 38.83,
        "commentWeight": 44.56,
        "kanDefect": 0.65,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 2.25,
        "relativeSystemComplexity": 11.25,
        "totalStructuralComplexity": 27,
        "totalDataComplexity": 6.75,
        "totalSystemComplexity": 33.75,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_oci8_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 12,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB_result",
            "stdClass",
            "class_name"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 122,
        "vocabulary": 23,
        "volume": 551.87,
        "difficulty": 21.87,
        "effort": 12067.66,
        "level": 0.05,
        "bugs": 0.18,
        "time": 670,
        "intelligentContent": 25.24,
        "number_operators": 40,
        "number_operands": 82,
        "number_operators_unique": 8,
        "number_operands_unique": 15,
        "cloc": 82,
        "loc": 155,
        "lloc": 73,
        "mi": 83.69,
        "mIwoC": 38.54,
        "commentWeight": 45.15,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 2.1,
        "relativeSystemComplexity": 6.1,
        "totalStructuralComplexity": 28,
        "totalDataComplexity": 14.67,
        "totalSystemComplexity": 42.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_oci8_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 5,
        "vocabulary": 5,
        "volume": 11.61,
        "difficulty": 0.5,
        "effort": 5.8,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 23.22,
        "number_operators": 1,
        "number_operands": 4,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 20,
        "loc": 29,
        "lloc": 9,
        "mi": 119.59,
        "mIwoC": 71.59,
        "commentWeight": 47.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_odbc_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile_binds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_write_type",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_field_data",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 16,
        "nbMethods": 16,
        "nbMethodsPrivate": 9,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 38,
        "ccn": 23,
        "ccnMethodMax": 11,
        "externals": [
            "CI_DB_driver"
        ],
        "parents": [
            "CI_DB_driver"
        ],
        "lcom": 3,
        "length": 224,
        "vocabulary": 44,
        "volume": 1222.91,
        "difficulty": 16.22,
        "effort": 19838.36,
        "level": 0.06,
        "bugs": 0.41,
        "time": 1102,
        "intelligentContent": 75.39,
        "number_operators": 78,
        "number_operands": 146,
        "number_operators_unique": 8,
        "number_operands_unique": 36,
        "cloc": 162,
        "loc": 303,
        "lloc": 141,
        "mi": 73.68,
        "mIwoC": 28.41,
        "commentWeight": 45.28,
        "kanDefect": 1.22,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 4.53,
        "relativeSystemComplexity": 20.53,
        "totalStructuralComplexity": 256,
        "totalDataComplexity": 72.4,
        "totalSystemComplexity": 328.4,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_odbc_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 1,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 2,
        "cloc": 33,
        "loc": 43,
        "lloc": 10,
        "mi": 124.81,
        "mIwoC": 75.94,
        "commentWeight": 48.86,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_odbc_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "num_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 12,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB_result",
            "stdClass",
            "class_name"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 132,
        "vocabulary": 25,
        "volume": 612.99,
        "difficulty": 28,
        "effort": 17163.69,
        "level": 0.04,
        "bugs": 0.2,
        "time": 954,
        "intelligentContent": 21.89,
        "number_operators": 48,
        "number_operands": 84,
        "number_operators_unique": 10,
        "number_operands_unique": 15,
        "cloc": 62,
        "loc": 131,
        "lloc": 69,
        "mi": 82.51,
        "mIwoC": 38.76,
        "commentWeight": 43.76,
        "kanDefect": 0.73,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 3.71,
        "relativeSystemComplexity": 7.71,
        "totalStructuralComplexity": 28,
        "totalDataComplexity": 26,
        "totalSystemComplexity": 54,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_odbc_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 4,
        "volume": 8,
        "difficulty": 0.5,
        "effort": 4,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 16,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 16,
        "loc": 24,
        "lloc": 8,
        "mi": 121.52,
        "mIwoC": 73.84,
        "commentWeight": 47.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_field_data",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 13,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 32,
        "ccn": 20,
        "ccnMethodMax": 9,
        "externals": [
            "CI_DB",
            "PDO"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 3,
        "length": 181,
        "vocabulary": 49,
        "volume": 1016.26,
        "difficulty": 10.67,
        "effort": 10840.13,
        "level": 0.09,
        "bugs": 0.34,
        "time": 602,
        "intelligentContent": 95.27,
        "number_operators": 53,
        "number_operands": 128,
        "number_operators_unique": 7,
        "number_operands_unique": 42,
        "cloc": 125,
        "loc": 229,
        "lloc": 104,
        "mi": 77.78,
        "mIwoC": 32.26,
        "commentWeight": 45.53,
        "kanDefect": 0.64,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 1.32,
        "relativeSystemComplexity": 170.32,
        "totalStructuralComplexity": 2197,
        "totalDataComplexity": 17.21,
        "totalSystemComplexity": 2214.21,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 12,
        "efferentCoupling": 2,
        "instability": 0.14,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 19,
        "loc": 25,
        "lloc": 6,
        "mi": 219.79,
        "mIwoC": 171,
        "commentWeight": 48.79,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 12,
        "efferentCoupling": 1,
        "instability": 0.08,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "num_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 12,
        "ccnMethodMax": 6,
        "externals": [
            "CI_DB_result",
            "stdClass"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 129,
        "vocabulary": 26,
        "volume": 606.36,
        "difficulty": 18.67,
        "effort": 11318.66,
        "level": 0.05,
        "bugs": 0.2,
        "time": 629,
        "intelligentContent": 32.48,
        "number_operators": 45,
        "number_operands": 84,
        "number_operators_unique": 8,
        "number_operands_unique": 18,
        "cloc": 63,
        "loc": 127,
        "lloc": 64,
        "mi": 83.86,
        "mIwoC": 39.5,
        "commentWeight": 44.36,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 1.35,
        "relativeSystemComplexity": 65.35,
        "totalStructuralComplexity": 448,
        "totalDataComplexity": 9.44,
        "totalSystemComplexity": 457.44,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 4,
        "volume": 8,
        "difficulty": 0.5,
        "effort": 4,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 16,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 16,
        "loc": 24,
        "lloc": 8,
        "mi": 121.52,
        "mIwoC": 73.84,
        "commentWeight": 47.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_4d_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_field_data",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 6,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 11,
        "ccnMethodMax": 8,
        "externals": [
            "CI_DB_pdo_driver"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 2,
        "length": 140,
        "vocabulary": 40,
        "volume": 745.07,
        "difficulty": 12.77,
        "effort": 9517.67,
        "level": 0.08,
        "bugs": 0.25,
        "time": 529,
        "intelligentContent": 58.33,
        "number_operators": 52,
        "number_operands": 88,
        "number_operators_unique": 9,
        "number_operands_unique": 31,
        "cloc": 87,
        "loc": 136,
        "lloc": 49,
        "mi": 88.81,
        "mIwoC": 41.54,
        "commentWeight": 47.27,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.19,
        "relativeSystemComplexity": 26.19,
        "totalStructuralComplexity": 175,
        "totalDataComplexity": 8.33,
        "totalSystemComplexity": 183.33,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_4d_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_unique",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 16,
        "ccn": 12,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 5,
        "length": 125,
        "vocabulary": 46,
        "volume": 690.45,
        "difficulty": 9.47,
        "effort": 6541.06,
        "level": 0.11,
        "bugs": 0.23,
        "time": 363,
        "intelligentContent": 72.88,
        "number_operators": 35,
        "number_operands": 90,
        "number_operators_unique": 8,
        "number_operands_unique": 38,
        "cloc": 85,
        "loc": 145,
        "lloc": 60,
        "mi": 86.06,
        "mIwoC": 39.72,
        "commentWeight": 46.35,
        "kanDefect": 0.65,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 3.27,
        "relativeSystemComplexity": 7.27,
        "totalStructuralComplexity": 20,
        "totalDataComplexity": 16.33,
        "totalSystemComplexity": 36.33,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_cubrid_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_from_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 12,
        "ccnMethodMax": 6,
        "externals": [
            "CI_DB_pdo_driver",
            "stdClass"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 3,
        "length": 143,
        "vocabulary": 44,
        "volume": 780.7,
        "difficulty": 17.44,
        "effort": 13613.43,
        "level": 0.06,
        "bugs": 0.26,
        "time": 756,
        "intelligentContent": 44.77,
        "number_operators": 50,
        "number_operands": 93,
        "number_operators_unique": 12,
        "number_operands_unique": 32,
        "cloc": 83,
        "loc": 139,
        "lloc": 56,
        "mi": 86.55,
        "mIwoC": 40,
        "commentWeight": 46.55,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.47,
        "relativeSystemComplexity": 26.47,
        "totalStructuralComplexity": 150,
        "totalDataComplexity": 8.83,
        "totalSystemComplexity": 158.83,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_cubrid_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_indexes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 22,
        "ccn": 19,
        "ccnMethodMax": 7,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 2,
        "length": 239,
        "vocabulary": 67,
        "volume": 1449.8,
        "difficulty": 18.65,
        "effort": 27045.27,
        "level": 0.05,
        "bugs": 0.48,
        "time": 1503,
        "intelligentContent": 77.72,
        "number_operators": 68,
        "number_operands": 171,
        "number_operators_unique": 12,
        "number_operands_unique": 55,
        "cloc": 67,
        "loc": 140,
        "lloc": 73,
        "mi": 78.56,
        "mIwoC": 34.66,
        "commentWeight": 43.9,
        "kanDefect": 0.72,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 2.38,
        "relativeSystemComplexity": 11.38,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 9.5,
        "totalSystemComplexity": 45.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_dblib_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 6,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 40,
        "ccn": 31,
        "ccnMethodMax": 10,
        "externals": [
            "CI_DB_pdo_driver",
            "stdClass"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 1,
        "length": 386,
        "vocabulary": 96,
        "volume": 2541.8,
        "difficulty": 19.73,
        "effort": 50162.18,
        "level": 0.05,
        "bugs": 0.85,
        "time": 2787,
        "intelligentContent": 128.8,
        "number_operators": 134,
        "number_operands": 252,
        "number_operators_unique": 13,
        "number_operands_unique": 83,
        "cloc": 126,
        "loc": 246,
        "lloc": 120,
        "mi": 71.39,
        "mIwoC": 26.63,
        "commentWeight": 44.76,
        "kanDefect": 0.99,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 145.25,
        "totalStructuralComplexity": 1440,
        "totalDataComplexity": 12.46,
        "totalSystemComplexity": 1452.46,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_dblib_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 3,
        "length": 99,
        "vocabulary": 42,
        "volume": 533.84,
        "difficulty": 10.94,
        "effort": 5838.87,
        "level": 0.09,
        "bugs": 0.18,
        "time": 324,
        "intelligentContent": 48.81,
        "number_operators": 29,
        "number_operands": 70,
        "number_operators_unique": 10,
        "number_operands_unique": 32,
        "cloc": 48,
        "loc": 90,
        "lloc": 42,
        "mi": 89.4,
        "mIwoC": 44.15,
        "commentWeight": 45.25,
        "kanDefect": 0.58,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.75,
        "relativeSystemComplexity": 10.75,
        "totalStructuralComplexity": 27,
        "totalDataComplexity": 5.25,
        "totalSystemComplexity": 32.25,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_firebird_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 15,
        "ccnMethodMax": 8,
        "externals": [
            "CI_DB_pdo_driver"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 3,
        "length": 159,
        "vocabulary": 44,
        "volume": 868.05,
        "difficulty": 16.83,
        "effort": 14612.17,
        "level": 0.06,
        "bugs": 0.29,
        "time": 812,
        "intelligentContent": 51.57,
        "number_operators": 58,
        "number_operands": 101,
        "number_operators_unique": 11,
        "number_operands_unique": 33,
        "cloc": 102,
        "loc": 199,
        "lloc": 97,
        "mi": 78.83,
        "mIwoC": 34.07,
        "commentWeight": 44.77,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.29,
        "relativeSystemComplexity": 50.29,
        "totalStructuralComplexity": 441,
        "totalDataComplexity": 11.63,
        "totalSystemComplexity": 452.63,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_firebird_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "create_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "drop_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 18,
        "ccnMethodMax": 9,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 3,
        "length": 233,
        "vocabulary": 59,
        "volume": 1370.66,
        "difficulty": 16.43,
        "effort": 22517.92,
        "level": 0.06,
        "bugs": 0.46,
        "time": 1251,
        "intelligentContent": 83.43,
        "number_operators": 72,
        "number_operands": 161,
        "number_operators_unique": 10,
        "number_operands_unique": 49,
        "cloc": 72,
        "loc": 150,
        "lloc": 78,
        "mi": 78.28,
        "mIwoC": 34.34,
        "commentWeight": 43.94,
        "kanDefect": 0.93,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 2.7,
        "relativeSystemComplexity": 18.7,
        "totalStructuralComplexity": 96,
        "totalDataComplexity": 16.2,
        "totalSystemComplexity": 112.2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_ibm_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 26,
        "ccn": 20,
        "ccnMethodMax": 16,
        "externals": [
            "CI_DB_pdo_driver"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 1,
        "length": 198,
        "vocabulary": 43,
        "volume": 1074.4,
        "difficulty": 16.01,
        "effort": 17206.21,
        "level": 0.06,
        "bugs": 0.36,
        "time": 956,
        "intelligentContent": 67.09,
        "number_operators": 77,
        "number_operands": 121,
        "number_operators_unique": 9,
        "number_operands_unique": 34,
        "cloc": 76,
        "loc": 159,
        "lloc": 83,
        "mi": 78.11,
        "mIwoC": 34.22,
        "commentWeight": 43.89,
        "kanDefect": 0.64,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.36,
        "relativeSystemComplexity": 26.36,
        "totalStructuralComplexity": 175,
        "totalDataComplexity": 9.5,
        "totalSystemComplexity": 184.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_ibm_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_unique",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 6,
        "ccnMethodMax": 3,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 4,
        "length": 63,
        "vocabulary": 26,
        "volume": 296.13,
        "difficulty": 6.9,
        "effort": 2043.28,
        "level": 0.14,
        "bugs": 0.1,
        "time": 114,
        "intelligentContent": 42.92,
        "number_operators": 17,
        "number_operands": 46,
        "number_operators_unique": 6,
        "number_operands_unique": 20,
        "cloc": 58,
        "loc": 97,
        "lloc": 39,
        "mi": 93.74,
        "mIwoC": 47.18,
        "commentWeight": 46.56,
        "kanDefect": 0.51,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 12,
        "totalSystemComplexity": 16,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_informix_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 6,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 27,
        "ccn": 20,
        "ccnMethodMax": 15,
        "externals": [
            "CI_DB_pdo_driver"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 2,
        "length": 193,
        "vocabulary": 47,
        "volume": 1072.04,
        "difficulty": 14.45,
        "effort": 15488.09,
        "level": 0.07,
        "bugs": 0.36,
        "time": 860,
        "intelligentContent": 74.2,
        "number_operators": 71,
        "number_operands": 122,
        "number_operators_unique": 9,
        "number_operands_unique": 38,
        "cloc": 94,
        "loc": 223,
        "lloc": 129,
        "mi": 72.28,
        "mIwoC": 30.05,
        "commentWeight": 42.23,
        "kanDefect": 0.64,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.52,
        "relativeSystemComplexity": 26.52,
        "totalStructuralComplexity": 200,
        "totalDataComplexity": 12.17,
        "totalSystemComplexity": 212.17,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_informix_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_unique",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 14,
        "ccn": 11,
        "ccnMethodMax": 8,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 4,
        "length": 81,
        "vocabulary": 36,
        "volume": 418.76,
        "difficulty": 7.36,
        "effort": 3082.97,
        "level": 0.14,
        "bugs": 0.14,
        "time": 171,
        "intelligentContent": 56.88,
        "number_operators": 20,
        "number_operands": 61,
        "number_operators_unique": 7,
        "number_operands_unique": 29,
        "cloc": 57,
        "loc": 104,
        "lloc": 47,
        "mi": 89.26,
        "mIwoC": 43.69,
        "commentWeight": 45.57,
        "kanDefect": 0.58,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 2.33,
        "relativeSystemComplexity": 6.33,
        "totalStructuralComplexity": 16,
        "totalDataComplexity": 9.33,
        "totalSystemComplexity": 25.33,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_mysql_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_from_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 11,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 47,
        "ccn": 37,
        "ccnMethodMax": 20,
        "externals": [
            "CI_DB_pdo_driver",
            "stdClass"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 3,
        "length": 297,
        "vocabulary": 67,
        "volume": 1801.63,
        "difficulty": 22.51,
        "effort": 40553.32,
        "level": 0.04,
        "bugs": 0.6,
        "time": 2253,
        "intelligentContent": 80.04,
        "number_operators": 110,
        "number_operands": 187,
        "number_operators_unique": 13,
        "number_operands_unique": 54,
        "cloc": 126,
        "loc": 263,
        "lloc": 137,
        "mi": 69.53,
        "mIwoC": 25.62,
        "commentWeight": 43.91,
        "kanDefect": 1.27,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 1.18,
        "relativeSystemComplexity": 197.18,
        "totalStructuralComplexity": 2156,
        "totalDataComplexity": 12.93,
        "totalSystemComplexity": 2168.93,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_mysql_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_create_table_attr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_indexes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 29,
        "ccn": 26,
        "ccnMethodMax": 8,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 1,
        "length": 282,
        "vocabulary": 76,
        "volume": 1761.92,
        "difficulty": 17.09,
        "effort": 30115.2,
        "level": 0.06,
        "bugs": 0.59,
        "time": 1673,
        "intelligentContent": 103.08,
        "number_operators": 80,
        "number_operands": 202,
        "number_operators_unique": 11,
        "number_operands_unique": 65,
        "cloc": 70,
        "loc": 145,
        "lloc": 75,
        "mi": 76.88,
        "mIwoC": 32.87,
        "commentWeight": 44.01,
        "kanDefect": 1.01,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.63,
        "relativeSystemComplexity": 10.63,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 6.5,
        "totalSystemComplexity": 42.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_oci_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 34,
        "ccn": 27,
        "ccnMethodMax": 10,
        "externals": [
            "CI_DB_pdo_driver",
            "stdClass"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 2,
        "length": 323,
        "vocabulary": 75,
        "volume": 2011.91,
        "difficulty": 21.81,
        "effort": 43872.58,
        "level": 0.05,
        "bugs": 0.67,
        "time": 2437,
        "intelligentContent": 92.26,
        "number_operators": 115,
        "number_operands": 208,
        "number_operators_unique": 13,
        "number_operands_unique": 62,
        "cloc": 107,
        "loc": 222,
        "lloc": 115,
        "mi": 72.28,
        "mIwoC": 28.28,
        "commentWeight": 43.99,
        "kanDefect": 0.99,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.64,
        "relativeSystemComplexity": 50.64,
        "totalStructuralComplexity": 392,
        "totalDataComplexity": 13.13,
        "totalSystemComplexity": 405.13,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_oci_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 13,
        "ccnMethodMax": 9,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 3,
        "length": 161,
        "vocabulary": 46,
        "volume": 889.29,
        "difficulty": 17.29,
        "effort": 15372.07,
        "level": 0.06,
        "bugs": 0.3,
        "time": 854,
        "intelligentContent": 51.45,
        "number_operators": 51,
        "number_operands": 110,
        "number_operators_unique": 11,
        "number_operands_unique": 35,
        "cloc": 54,
        "loc": 111,
        "lloc": 57,
        "mi": 83.41,
        "mIwoC": 39.3,
        "commentWeight": 44.11,
        "kanDefect": 0.65,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 2.25,
        "relativeSystemComplexity": 11.25,
        "totalStructuralComplexity": 27,
        "totalDataComplexity": 6.75,
        "totalSystemComplexity": 33.75,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_odbc_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_write_type",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 19,
        "ccnMethodMax": 16,
        "externals": [
            "CI_DB_pdo_driver"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 4,
        "length": 155,
        "vocabulary": 40,
        "volume": 824.9,
        "difficulty": 10.18,
        "effort": 8398.97,
        "level": 0.1,
        "bugs": 0.27,
        "time": 467,
        "intelligentContent": 81.02,
        "number_operators": 59,
        "number_operands": 96,
        "number_operators_unique": 7,
        "number_operands_unique": 33,
        "cloc": 84,
        "loc": 148,
        "lloc": 64,
        "mi": 83.6,
        "mIwoC": 37.62,
        "commentWeight": 45.98,
        "kanDefect": 0.71,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.4,
        "relativeSystemComplexity": 17.4,
        "totalStructuralComplexity": 80,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 87,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_odbc_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 1,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 2,
        "cloc": 21,
        "loc": 29,
        "lloc": 8,
        "mi": 126.47,
        "mIwoC": 78.06,
        "commentWeight": 48.41,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_pgsql_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_write_type",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escape",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "order_by",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 13,
        "nbMethodsPrivate": 6,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 41,
        "ccn": 29,
        "ccnMethodMax": 7,
        "externals": [
            "CI_DB_pdo_driver",
            "stdClass"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 3,
        "length": 352,
        "vocabulary": 84,
        "volume": 2250.1,
        "difficulty": 19.5,
        "effort": 43876.87,
        "level": 0.05,
        "bugs": 0.75,
        "time": 2438,
        "intelligentContent": 115.39,
        "number_operators": 118,
        "number_operands": 234,
        "number_operators_unique": 12,
        "number_operands_unique": 72,
        "cloc": 135,
        "loc": 274,
        "lloc": 139,
        "mi": 70.15,
        "mIwoC": 25.88,
        "commentWeight": 44.27,
        "kanDefect": 1.68,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 1.53,
        "relativeSystemComplexity": 122.53,
        "totalStructuralComplexity": 1573,
        "totalDataComplexity": 19.92,
        "totalSystemComplexity": 1592.92,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_pgsql_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 22,
        "ccn": 19,
        "ccnMethodMax": 11,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 3,
        "length": 233,
        "vocabulary": 69,
        "volume": 1423.29,
        "difficulty": 14.24,
        "effort": 20263.74,
        "level": 0.07,
        "bugs": 0.47,
        "time": 1126,
        "intelligentContent": 99.97,
        "number_operators": 65,
        "number_operands": 168,
        "number_operators_unique": 10,
        "number_operands_unique": 59,
        "cloc": 56,
        "loc": 123,
        "lloc": 67,
        "mi": 78.79,
        "mIwoC": 35.53,
        "commentWeight": 43.25,
        "kanDefect": 1.07,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.94,
        "relativeSystemComplexity": 10.94,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 7.75,
        "totalSystemComplexity": 43.75,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_sqlite_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_replace",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 13,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB_pdo_driver",
            "stdClass"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 4,
        "length": 153,
        "vocabulary": 41,
        "volume": 819.71,
        "difficulty": 14.34,
        "effort": 11757.65,
        "level": 0.07,
        "bugs": 0.27,
        "time": 653,
        "intelligentContent": 57.15,
        "number_operators": 51,
        "number_operands": 102,
        "number_operators_unique": 9,
        "number_operands_unique": 32,
        "cloc": 77,
        "loc": 141,
        "lloc": 64,
        "mi": 83.98,
        "mIwoC": 38.45,
        "commentWeight": 45.53,
        "kanDefect": 0.8,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.72,
        "relativeSystemComplexity": 26.72,
        "totalStructuralComplexity": 150,
        "totalDataComplexity": 10.33,
        "totalSystemComplexity": 160.33,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_sqlite_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "drop_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 21,
        "ccn": 15,
        "ccnMethodMax": 7,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 4,
        "length": 130,
        "vocabulary": 43,
        "volume": 705.41,
        "difficulty": 11.91,
        "effort": 8402.73,
        "level": 0.08,
        "bugs": 0.24,
        "time": 467,
        "intelligentContent": 59.22,
        "number_operators": 40,
        "number_operands": 90,
        "number_operators_unique": 9,
        "number_operands_unique": 34,
        "cloc": 94,
        "loc": 163,
        "lloc": 69,
        "mi": 84.09,
        "mIwoC": 37.93,
        "commentWeight": 46.16,
        "kanDefect": 0.79,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.74,
        "relativeSystemComplexity": 26.74,
        "totalStructuralComplexity": 175,
        "totalDataComplexity": 12.17,
        "totalSystemComplexity": 187.17,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_sqlsrv_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 6,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 48,
        "ccn": 40,
        "ccnMethodMax": 17,
        "externals": [
            "CI_DB_pdo_driver",
            "stdClass"
        ],
        "parents": [
            "CI_DB_pdo_driver"
        ],
        "lcom": 1,
        "length": 450,
        "vocabulary": 104,
        "volume": 3015.2,
        "difficulty": 20.64,
        "effort": 62242.3,
        "level": 0.05,
        "bugs": 1.01,
        "time": 3458,
        "intelligentContent": 146.06,
        "number_operators": 161,
        "number_operands": 289,
        "number_operators_unique": 13,
        "number_operands_unique": 91,
        "cloc": 122,
        "loc": 254,
        "lloc": 132,
        "mi": 67.95,
        "mIwoC": 24,
        "commentWeight": 43.95,
        "kanDefect": 1.2,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 1.28,
        "relativeSystemComplexity": 122.28,
        "totalStructuralComplexity": 1089,
        "totalDataComplexity": 11.5,
        "totalSystemComplexity": 1100.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_pdo_sqlsrv_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB_pdo_forge"
        ],
        "parents": [
            "CI_DB_pdo_forge"
        ],
        "lcom": 3,
        "length": 99,
        "vocabulary": 42,
        "volume": 533.84,
        "difficulty": 10.94,
        "effort": 5838.87,
        "level": 0.09,
        "bugs": 0.18,
        "time": 324,
        "intelligentContent": 48.81,
        "number_operators": 29,
        "number_operands": 70,
        "number_operators_unique": 10,
        "number_operands_unique": 32,
        "cloc": 48,
        "loc": 90,
        "lloc": 42,
        "mi": 89.4,
        "mIwoC": 44.15,
        "commentWeight": 45.25,
        "kanDefect": 0.58,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.75,
        "relativeSystemComplexity": 10.75,
        "totalStructuralComplexity": 27,
        "totalDataComplexity": 5.25,
        "totalSystemComplexity": 32.25,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_postgre_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reconnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_db_set_charset",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_write_type",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escape",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "order_by",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 24,
        "nbMethods": 24,
        "nbMethodsPrivate": 13,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 78,
        "ccn": 55,
        "ccnMethodMax": 14,
        "externals": [
            "CI_DB",
            "stdClass"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 3,
        "length": 561,
        "vocabulary": 113,
        "volume": 3826.12,
        "difficulty": 23.21,
        "effort": 88785.12,
        "level": 0.04,
        "bugs": 1.28,
        "time": 4933,
        "intelligentContent": 164.88,
        "number_operators": 204,
        "number_operands": 357,
        "number_operators_unique": 13,
        "number_operands_unique": 100,
        "cloc": 224,
        "loc": 450,
        "lloc": 226,
        "mi": 60.56,
        "mIwoC": 16.16,
        "commentWeight": 44.4,
        "kanDefect": 2.47,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 2.89,
        "relativeSystemComplexity": 102.89,
        "totalStructuralComplexity": 2400,
        "totalDataComplexity": 69.45,
        "totalSystemComplexity": 2469.45,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_postgre_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 22,
        "ccn": 19,
        "ccnMethodMax": 11,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 3,
        "length": 232,
        "vocabulary": 68,
        "volume": 1412.29,
        "difficulty": 14.4,
        "effort": 20332.13,
        "level": 0.07,
        "bugs": 0.47,
        "time": 1130,
        "intelligentContent": 98.1,
        "number_operators": 65,
        "number_operands": 167,
        "number_operators_unique": 10,
        "number_operands_unique": 58,
        "cloc": 53,
        "loc": 119,
        "lloc": 66,
        "mi": 78.66,
        "mIwoC": 35.7,
        "commentWeight": 42.96,
        "kanDefect": 1.07,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.94,
        "relativeSystemComplexity": 10.94,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 7.75,
        "totalSystemComplexity": 43.75,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_postgre_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "num_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data_seek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 5,
        "ccnMethodMax": 2,
        "externals": [
            "CI_DB_result",
            "stdClass"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 77,
        "vocabulary": 14,
        "volume": 293.17,
        "difficulty": 14.44,
        "effort": 4234.62,
        "level": 0.07,
        "bugs": 0.1,
        "time": 235,
        "intelligentContent": 20.3,
        "number_operators": 25,
        "number_operands": 52,
        "number_operators_unique": 5,
        "number_operands_unique": 9,
        "cloc": 72,
        "loc": 122,
        "lloc": 50,
        "mi": 91.41,
        "mIwoC": 44.99,
        "commentWeight": 46.42,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.63,
        "relativeSystemComplexity": 4.63,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 29,
        "totalSystemComplexity": 37,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_postgre_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 6,
        "vocabulary": 6,
        "volume": 15.51,
        "difficulty": 0.5,
        "effort": 7.75,
        "level": 2,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 1,
        "number_operands": 5,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 27,
        "loc": 37,
        "lloc": 10,
        "mi": 118.19,
        "mIwoC": 69.71,
        "commentWeight": 48.48,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlite_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_replace",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 16,
        "nbMethods": 16,
        "nbMethodsPrivate": 10,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 26,
        "ccn": 11,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB",
            "stdClass"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 7,
        "length": 177,
        "vocabulary": 47,
        "volume": 983.16,
        "difficulty": 16.62,
        "effort": 16341.75,
        "level": 0.06,
        "bugs": 0.33,
        "time": 908,
        "intelligentContent": 59.15,
        "number_operators": 54,
        "number_operands": 123,
        "number_operators_unique": 10,
        "number_operands_unique": 37,
        "cloc": 145,
        "loc": 240,
        "lloc": 95,
        "mi": 81.1,
        "mIwoC": 34.42,
        "commentWeight": 46.68,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 2.33,
        "relativeSystemComplexity": 51.33,
        "totalStructuralComplexity": 784,
        "totalDataComplexity": 37.25,
        "totalSystemComplexity": 821.25,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlite_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "create_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "drop_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 13,
        "ccnMethodMax": 6,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 4,
        "length": 113,
        "vocabulary": 38,
        "volume": 593.02,
        "difficulty": 11.95,
        "effort": 7085.52,
        "level": 0.08,
        "bugs": 0.2,
        "time": 394,
        "intelligentContent": 49.63,
        "number_operators": 36,
        "number_operands": 77,
        "number_operators_unique": 9,
        "number_operands_unique": 29,
        "cloc": 81,
        "loc": 137,
        "lloc": 56,
        "mi": 87.14,
        "mIwoC": 40.7,
        "commentWeight": 46.44,
        "kanDefect": 0.65,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 2.38,
        "relativeSystemComplexity": 11.38,
        "totalStructuralComplexity": 54,
        "totalDataComplexity": 14.25,
        "totalSystemComplexity": 68.25,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlite_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "num_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data_seek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "CI_DB_result",
            "stdClass"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 69,
        "vocabulary": 13,
        "volume": 255.33,
        "difficulty": 10.22,
        "effort": 2610.04,
        "level": 0.1,
        "bugs": 0.09,
        "time": 145,
        "intelligentContent": 24.98,
        "number_operators": 23,
        "number_operands": 46,
        "number_operators_unique": 4,
        "number_operands_unique": 9,
        "cloc": 64,
        "loc": 107,
        "lloc": 43,
        "mi": 93.54,
        "mIwoC": 46.98,
        "commentWeight": 46.57,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.64,
        "relativeSystemComplexity": 4.64,
        "totalStructuralComplexity": 7,
        "totalDataComplexity": 25.5,
        "totalSystemComplexity": 32.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlite_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 4,
        "volume": 8,
        "difficulty": 0.5,
        "effort": 4,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 16,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 14,
        "loc": 22,
        "lloc": 8,
        "mi": 121.06,
        "mIwoC": 73.84,
        "commentWeight": 47.22,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlite3_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_escape_str",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_replace",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 16,
        "nbMethods": 16,
        "nbMethodsPrivate": 9,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 29,
        "ccn": 14,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB",
            "SQLite3",
            "SQLite3",
            "SQLite3",
            "stdClass"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 3,
        "length": 188,
        "vocabulary": 53,
        "volume": 1076.85,
        "difficulty": 18.73,
        "effort": 20171.22,
        "level": 0.05,
        "bugs": 0.36,
        "time": 1121,
        "intelligentContent": 57.49,
        "number_operators": 60,
        "number_operands": 128,
        "number_operators_unique": 12,
        "number_operands_unique": 41,
        "cloc": 129,
        "loc": 247,
        "lloc": 118,
        "mi": 76.69,
        "mIwoC": 31.69,
        "commentWeight": 45,
        "kanDefect": 0.73,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 1.38,
        "relativeSystemComplexity": 197.38,
        "totalStructuralComplexity": 3136,
        "totalDataComplexity": 22,
        "totalSystemComplexity": 3158,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlite3_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "drop_database",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_process_column",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 21,
        "ccn": 15,
        "ccnMethodMax": 7,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 4,
        "length": 128,
        "vocabulary": 41,
        "volume": 685.77,
        "difficulty": 12.38,
        "effort": 8486.36,
        "level": 0.08,
        "bugs": 0.23,
        "time": 471,
        "intelligentContent": 55.42,
        "number_operators": 40,
        "number_operands": 88,
        "number_operators_unique": 9,
        "number_operands_unique": 32,
        "cloc": 85,
        "loc": 152,
        "lloc": 67,
        "mi": 84.1,
        "mIwoC": 38.29,
        "commentWeight": 45.81,
        "kanDefect": 0.79,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.74,
        "relativeSystemComplexity": 26.74,
        "totalStructuralComplexity": 175,
        "totalDataComplexity": 12.17,
        "totalSystemComplexity": 187.17,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlite3_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data_seek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 9,
        "ccnMethodMax": 4,
        "externals": [
            "CI_DB_result",
            "stdClass",
            "class_name"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 105,
        "vocabulary": 26,
        "volume": 493.55,
        "difficulty": 13.26,
        "effort": 6545.98,
        "level": 0.08,
        "bugs": 0.16,
        "time": 364,
        "intelligentContent": 37.21,
        "number_operators": 33,
        "number_operands": 72,
        "number_operators_unique": 7,
        "number_operands_unique": 19,
        "cloc": 66,
        "loc": 123,
        "lloc": 57,
        "mi": 86.95,
        "mIwoC": 41.63,
        "commentWeight": 45.32,
        "kanDefect": 0.52,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.04,
        "relativeSystemComplexity": 50.04,
        "totalStructuralComplexity": 343,
        "totalDataComplexity": 7.25,
        "totalSystemComplexity": 350.25,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlite3_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 4,
        "volume": 8,
        "difficulty": 0.5,
        "effort": 4,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 16,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 14,
        "loc": 22,
        "lloc": 8,
        "mi": 121.06,
        "mIwoC": 73.84,
        "commentWeight": 47.22,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlsrv_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "db_select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_begin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_commit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_trans_rollback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affected_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_tables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_list_columns",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_truncate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_delete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_limit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert_batch",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 20,
        "nbMethodsPrivate": 12,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 61,
        "ccn": 42,
        "ccnMethodMax": 11,
        "externals": [
            "CI_DB",
            "stdClass"
        ],
        "parents": [
            "CI_DB"
        ],
        "lcom": 3,
        "length": 497,
        "vocabulary": 116,
        "volume": 3408.42,
        "difficulty": 21.08,
        "effort": 71841.48,
        "level": 0.05,
        "bugs": 1.14,
        "time": 3991,
        "intelligentContent": 161.71,
        "number_operators": 163,
        "number_operands": 334,
        "number_operators_unique": 13,
        "number_operands_unique": 103,
        "cloc": 211,
        "loc": 390,
        "lloc": 179,
        "mi": 65.89,
        "mIwoC": 20.47,
        "commentWeight": 45.42,
        "kanDefect": 1.34,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 1.85,
        "relativeSystemComplexity": 197.85,
        "totalStructuralComplexity": 3920,
        "totalDataComplexity": 37,
        "totalSystemComplexity": 3957,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlsrv_forge",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_alter_table",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_auto_increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [
            "CI_DB_forge"
        ],
        "parents": [
            "CI_DB_forge"
        ],
        "lcom": 3,
        "length": 99,
        "vocabulary": 42,
        "volume": 533.84,
        "difficulty": 10.94,
        "effort": 5838.87,
        "level": 0.09,
        "bugs": 0.18,
        "time": 324,
        "intelligentContent": 48.81,
        "number_operators": 29,
        "number_operands": 70,
        "number_operators_unique": 10,
        "number_operands_unique": 32,
        "cloc": 48,
        "loc": 90,
        "lloc": 42,
        "mi": 89.4,
        "mIwoC": 44.15,
        "commentWeight": 45.25,
        "kanDefect": 0.58,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.75,
        "relativeSystemComplexity": 10.75,
        "totalStructuralComplexity": 27,
        "totalDataComplexity": 5.25,
        "totalSystemComplexity": 32.25,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlsrv_result",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_rows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "num_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "field_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "free_result",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_assoc",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fetch_object",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 6,
        "ccnMethodMax": 3,
        "externals": [
            "CI_DB_result",
            "stdClass"
        ],
        "parents": [
            "CI_DB_result"
        ],
        "lcom": 1,
        "length": 64,
        "vocabulary": 15,
        "volume": 250.04,
        "difficulty": 5.63,
        "effort": 1406.48,
        "level": 0.18,
        "bugs": 0.08,
        "time": 78,
        "intelligentContent": 44.45,
        "number_operators": 19,
        "number_operands": 45,
        "number_operators_unique": 3,
        "number_operands_unique": 12,
        "cloc": 73,
        "loc": 128,
        "lloc": 55,
        "mi": 90.47,
        "mIwoC": 44.44,
        "commentWeight": 46.04,
        "kanDefect": 0.75,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.63,
        "relativeSystemComplexity": 4.63,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 29,
        "totalSystemComplexity": 37,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_DB_sqlsrv_utility",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_backup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_DB_utility"
        ],
        "parents": [
            "CI_DB_utility"
        ],
        "lcom": 1,
        "length": 6,
        "vocabulary": 6,
        "volume": 15.51,
        "difficulty": 0.5,
        "effort": 7.75,
        "level": 2,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 1,
        "number_operands": 5,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 26,
        "loc": 36,
        "lloc": 10,
        "mi": 118.11,
        "mIwoC": 69.71,
        "commentWeight": 48.39,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Cache",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clean",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_metadata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_supported",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 16,
        "ccn": 7,
        "ccnMethodMax": 6,
        "externals": [
            "CI_Driver_Library"
        ],
        "parents": [
            "CI_Driver_Library"
        ],
        "lcom": 1,
        "length": 141,
        "vocabulary": 35,
        "volume": 723.23,
        "difficulty": 8.83,
        "effort": 6388.52,
        "level": 0.11,
        "bugs": 0.24,
        "time": 355,
        "intelligentContent": 81.87,
        "number_operators": 35,
        "number_operands": 106,
        "number_operators_unique": 5,
        "number_operands_unique": 30,
        "cloc": 115,
        "loc": 179,
        "lloc": 64,
        "mi": 86.96,
        "mIwoC": 39.64,
        "commentWeight": 47.32,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 1.04,
        "relativeSystemComplexity": 82.04,
        "totalStructuralComplexity": 810,
        "totalDataComplexity": 10.4,
        "totalSystemComplexity": 820.4,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Cache_apc",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clean",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_metadata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_supported",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 19,
        "ccn": 10,
        "ccnMethodMax": 7,
        "externals": [
            "CI_Driver"
        ],
        "parents": [
            "CI_Driver"
        ],
        "lcom": 9,
        "length": 91,
        "vocabulary": 32,
        "volume": 455,
        "difficulty": 11,
        "effort": 5005,
        "level": 0.09,
        "bugs": 0.15,
        "time": 278,
        "intelligentContent": 41.36,
        "number_operators": 25,
        "number_operands": 66,
        "number_operators_unique": 8,
        "number_operands_unique": 24,
        "cloc": 88,
        "loc": 148,
        "lloc": 60,
        "mi": 87.76,
        "mIwoC": 41.26,
        "commentWeight": 46.5,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 6.1,
        "relativeSystemComplexity": 7.1,
        "totalStructuralComplexity": 10,
        "totalDataComplexity": 61,
        "totalSystemComplexity": 71,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Cache_dummy",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clean",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_metadata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_supported",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "CI_Driver"
        ],
        "parents": [
            "CI_Driver"
        ],
        "lcom": 9,
        "length": 24,
        "vocabulary": 9,
        "volume": 76.08,
        "difficulty": 0.94,
        "effort": 71.32,
        "level": 1.07,
        "bugs": 0.03,
        "time": 4,
        "intelligentContent": 81.15,
        "number_operators": 9,
        "number_operands": 15,
        "number_operators_unique": 1,
        "number_operands_unique": 8,
        "cloc": 77,
        "loc": 117,
        "lloc": 40,
        "mi": 99.3,
        "mIwoC": 51.75,
        "commentWeight": 47.55,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 10.33,
        "relativeSystemComplexity": 10.33,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 93,
        "totalSystemComplexity": 93,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Cache_file",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clean",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_metadata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_supported",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 11,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 28,
        "ccn": 18,
        "ccnMethodMax": 5,
        "externals": [
            "CI_Driver"
        ],
        "parents": [
            "CI_Driver"
        ],
        "lcom": 1,
        "length": 193,
        "vocabulary": 31,
        "volume": 956.16,
        "difficulty": 26.8,
        "effort": 25620.74,
        "level": 0.04,
        "bugs": 0.32,
        "time": 1423,
        "intelligentContent": 35.68,
        "number_operators": 62,
        "number_operands": 131,
        "number_operators_unique": 9,
        "number_operands_unique": 22,
        "cloc": 98,
        "loc": 189,
        "lloc": 91,
        "mi": 78.88,
        "mIwoC": 33.97,
        "commentWeight": 44.91,
        "kanDefect": 0.71,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 3.84,
        "relativeSystemComplexity": 19.84,
        "totalStructuralComplexity": 176,
        "totalDataComplexity": 42.2,
        "totalSystemComplexity": 218.2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Cache_redis",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clean",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cache_info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_metadata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_supported",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 11,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 31,
        "ccn": 21,
        "ccnMethodMax": 9,
        "externals": [
            "CI_Driver",
            "Redis"
        ],
        "parents": [
            "CI_Driver"
        ],
        "lcom": 1,
        "length": 187,
        "vocabulary": 46,
        "volume": 1032.91,
        "difficulty": 18.61,
        "effort": 19223.53,
        "level": 0.05,
        "bugs": 0.34,
        "time": 1068,
        "intelligentContent": 55.5,
        "number_operators": 53,
        "number_operands": 134,
        "number_operators_unique": 10,
        "number_operands_unique": 36,
        "cloc": 117,
        "loc": 222,
        "lloc": 105,
        "mi": 77.09,
        "mIwoC": 31.98,
        "commentWeight": 45.11,
        "kanDefect": 0.99,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 361.75,
        "totalStructuralComplexity": 3971,
        "totalDataComplexity": 8.3,
        "totalSystemComplexity": 3979.3,
        "package": "\\Libraries\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Calendar",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "generate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_month_name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_day_names",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "adjust_date",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_total_days",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "default_template",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse_template",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 57,
        "ccn": 49,
        "ccnMethodMax": 28,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 788,
        "vocabulary": 187,
        "volume": 5946.95,
        "difficulty": 35.45,
        "effort": 210814.14,
        "level": 0.03,
        "bugs": 1.98,
        "time": 11712,
        "intelligentContent": 167.76,
        "number_operators": 196,
        "number_operands": 592,
        "number_operators_unique": 20,
        "number_operands_unique": 167,
        "cloc": 206,
        "loc": 351,
        "lloc": 146,
        "mi": 66.13,
        "mIwoC": 19.77,
        "commentWeight": 46.36,
        "kanDefect": 2.65,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.85,
        "relativeSystemComplexity": 121.85,
        "totalStructuralComplexity": 1089,
        "totalDataComplexity": 7.67,
        "totalSystemComplexity": 1096.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Cart",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insert",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_save_cart",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "total",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "total_items",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "contents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_item",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has_options",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "product_options",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "format_number",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "destroy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 15,
        "nbMethods": 15,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 62,
        "ccn": 48,
        "ccnMethodMax": 12,
        "externals": [],
        "parents": [],
        "lcom": 2,
        "length": 400,
        "vocabulary": 57,
        "volume": 2333.16,
        "difficulty": 42.4,
        "effort": 98920.51,
        "level": 0.02,
        "bugs": 0.78,
        "time": 5496,
        "intelligentContent": 55.03,
        "number_operators": 113,
        "number_operands": 287,
        "number_operators_unique": 13,
        "number_operands_unique": 44,
        "cloc": 233,
        "loc": 419,
        "lloc": 186,
        "mi": 66.2,
        "mIwoC": 20.45,
        "commentWeight": 45.74,
        "kanDefect": 2.82,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 3.22,
        "relativeSystemComplexity": 52.22,
        "totalStructuralComplexity": 735,
        "totalDataComplexity": 48.25,
        "totalSystemComplexity": 783.25,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Driver_Library",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load_driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 14,
        "ccn": 13,
        "ccnMethodMax": 13,
        "externals": [
            "class_name"
        ],
        "parents": [],
        "lcom": 1,
        "length": 148,
        "vocabulary": 28,
        "volume": 711.49,
        "difficulty": 7.92,
        "effort": 5632.62,
        "level": 0.13,
        "bugs": 0.24,
        "time": 313,
        "intelligentContent": 89.87,
        "number_operators": 53,
        "number_operands": 95,
        "number_operators_unique": 4,
        "number_operands_unique": 24,
        "cloc": 58,
        "loc": 127,
        "lloc": 69,
        "mi": 81.46,
        "mIwoC": 38.17,
        "commentWeight": 43.29,
        "kanDefect": 1.31,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 19.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "CI_Driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "decorate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 9,
        "ccnMethodMax": 6,
        "externals": [
            "ReflectionObject",
            "BadMethodCallException"
        ],
        "parents": [],
        "lcom": 1,
        "length": 64,
        "vocabulary": 15,
        "volume": 250.04,
        "difficulty": 8.36,
        "effort": 2091.25,
        "level": 0.12,
        "bugs": 0.08,
        "time": 116,
        "intelligentContent": 29.9,
        "number_operators": 18,
        "number_operands": 46,
        "number_operators_unique": 4,
        "number_operands_unique": 11,
        "cloc": 73,
        "loc": 121,
        "lloc": 48,
        "mi": 91.99,
        "mIwoC": 45.32,
        "commentWeight": 46.66,
        "kanDefect": 1.03,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.7,
        "relativeSystemComplexity": 16.7,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 2.8,
        "totalSystemComplexity": 66.8,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 4,
        "efferentCoupling": 2,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "CI_Email",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "from",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reply_to",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "to",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bcc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "subject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "message",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "attach",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "attachment_cid",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_header",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_str_to_array",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_alt_message",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_mailtype",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_wordwrap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_protocol",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_priority",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_newline",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_crlf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_message_id",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_protocol",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_encoding",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_content_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_date",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_mime_message",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate_email",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid_email",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clean_email",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_alt_message",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "word_wrap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_build_headers",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_write_headers",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_build_message",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attachments_have_multipart",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_append_attachments",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prep_quoted_printable",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prep_q_encoding",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "send",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "batch_bcc_send",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unwrap_specials",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_remove_nl_callback",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_spool_email",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validate_email_for_shell",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_send_with_mail",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_send_with_sendmail",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_send_with_smtp",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_smtp_end",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_smtp_connect",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_send_command",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_smtp_authenticate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_send_data",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_smtp_data",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_hostname",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "print_debugger",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_error_message",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mime_types",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "strlen",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "substr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 61,
        "nbMethods": 60,
        "nbMethodsPrivate": 33,
        "nbMethodsPublic": 27,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 302,
        "ccn": 242,
        "ccnMethodMax": 21,
        "externals": [],
        "parents": [],
        "lcom": 4,
        "length": 2684,
        "vocabulary": 391,
        "volume": 23111.99,
        "difficulty": 59.57,
        "effort": 1376895.26,
        "level": 0.02,
        "bugs": 7.7,
        "time": 76494,
        "intelligentContent": 387.95,
        "number_operators": 862,
        "number_operands": 1822,
        "number_operators_unique": 24,
        "number_operands_unique": 367,
        "cloc": 669,
        "loc": 1862,
        "lloc": 1193,
        "mi": 40.04,
        "mIwoC": 0,
        "commentWeight": 40.04,
        "kanDefect": 12.72,
        "relativeStructuralComplexity": 1600,
        "relativeDataComplexity": 2.41,
        "relativeSystemComplexity": 1602.41,
        "totalStructuralComplexity": 97600,
        "totalDataComplexity": 147.12,
        "totalSystemComplexity": 97747.12,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Encrypt",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_key",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_key",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "encode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "encode_from_legacy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_xor_decode",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_xor_merge",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mcrypt_encode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mcrypt_decode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_add_cipher_noise",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_remove_cipher_noise",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_cipher",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_mode",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_cipher",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_mode",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_hash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "strlen",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "substr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 18,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 2,
        "wmc": 44,
        "ccn": 25,
        "ccnMethodMax": 5,
        "externals": [],
        "parents": [],
        "lcom": 3,
        "length": 388,
        "vocabulary": 55,
        "volume": 2243.17,
        "difficulty": 60.17,
        "effort": 134973.75,
        "level": 0.02,
        "bugs": 0.75,
        "time": 7499,
        "intelligentContent": 37.28,
        "number_operators": 119,
        "number_operands": 269,
        "number_operators_unique": 17,
        "number_operands_unique": 38,
        "cloc": 221,
        "loc": 390,
        "lloc": 169,
        "mi": 70.54,
        "mIwoC": 24.58,
        "commentWeight": 45.96,
        "kanDefect": 1.13,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 2.11,
        "relativeSystemComplexity": 146.11,
        "totalStructuralComplexity": 2880,
        "totalDataComplexity": 42.23,
        "totalSystemComplexity": 2922.23,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Encryption",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mcrypt_initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openssl_initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create_key",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "encrypt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mcrypt_encrypt",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openssl_encrypt",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrypt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mcrypt_decrypt",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openssl_decrypt",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_params",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mcrypt_get_handle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openssl_get_handle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_cipher_alias",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hkdf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "strlen",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "substr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 19,
        "nbMethods": 19,
        "nbMethodsPrivate": 12,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 114,
        "ccn": 96,
        "ccnMethodMax": 14,
        "externals": [],
        "parents": [],
        "lcom": 6,
        "length": 1035,
        "vocabulary": 134,
        "volume": 7313.4,
        "difficulty": 67.02,
        "effort": 490126.26,
        "level": 0.01,
        "bugs": 2.44,
        "time": 27229,
        "intelligentContent": 109.13,
        "number_operators": 271,
        "number_operands": 764,
        "number_operators_unique": 20,
        "number_operands_unique": 114,
        "cloc": 267,
        "loc": 611,
        "lloc": 344,
        "mi": 47.41,
        "mIwoC": 4.7,
        "commentWeight": 42.71,
        "kanDefect": 3.93,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 4.64,
        "relativeSystemComplexity": 68.64,
        "totalStructuralComplexity": 1216,
        "totalDataComplexity": 88.11,
        "totalSystemComplexity": 1304.11,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Form_validation",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_rules",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_message",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_error_delimiters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error_array",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error_string",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prepare_rules",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_reduce_array",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_reset_post_array",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_error_message",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_translate_fieldname",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_build_error_msg",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has_rule",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_value",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_radio",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_checkbox",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "required",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "regex_match",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "matches",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "differs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_unique",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "min_length",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "max_length",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exact_length",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid_url",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid_email",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid_emails",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid_ip",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alpha",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alpha_numeric",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alpha_numeric_spaces",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alpha_dash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "numeric",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "integer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decimal",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "greater_than",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "greater_than_equal_to",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "less_than",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "less_than_equal_to",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "in_list",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_natural",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_natural_no_zero",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid_base64",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prep_for_form",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prep_url",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "strip_image_tags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "encode_php_tags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reset_validation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 53,
        "nbMethods": 52,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 45,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 223,
        "ccn": 171,
        "ccnMethodMax": 44,
        "externals": [],
        "parents": [],
        "lcom": 25,
        "length": 1378,
        "vocabulary": 140,
        "volume": 9824.15,
        "difficulty": 63.48,
        "effort": 623675.2,
        "level": 0.02,
        "bugs": 3.27,
        "time": 34649,
        "intelligentContent": 154.75,
        "number_operators": 394,
        "number_operands": 984,
        "number_operators_unique": 16,
        "number_operands_unique": 124,
        "cloc": 599,
        "loc": 1172,
        "lloc": 573,
        "mi": 44.73,
        "mIwoC": 0,
        "commentWeight": 44.73,
        "kanDefect": 8.32,
        "relativeStructuralComplexity": 484,
        "relativeDataComplexity": 3.94,
        "relativeSystemComplexity": 487.94,
        "totalStructuralComplexity": 25652,
        "totalDataComplexity": 208.83,
        "totalSystemComplexity": 25860.83,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_FTP",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_login",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_is_conn",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "changedir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mkdir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "upload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "download",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "move",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete_file",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete_dir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "chmod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list_files",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mirror",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getext",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_settype",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "close",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_error",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 20,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 15,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 82,
        "ccn": 63,
        "ccnMethodMax": 10,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 445,
        "vocabulary": 81,
        "volume": 2821.23,
        "difficulty": 26.96,
        "effort": 76048.83,
        "level": 0.04,
        "bugs": 0.94,
        "time": 4225,
        "intelligentContent": 104.66,
        "number_operators": 163,
        "number_operands": 282,
        "number_operators_unique": 13,
        "number_operands_unique": 68,
        "cloc": 236,
        "loc": 471,
        "lloc": 236,
        "mi": 60.09,
        "mIwoC": 15.6,
        "commentWeight": 44.48,
        "kanDefect": 3.69,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 2.44,
        "relativeSystemComplexity": 258.44,
        "totalStructuralComplexity": 5120,
        "totalDataComplexity": 48.76,
        "totalSystemComplexity": 5168.76,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Image_lib",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "crop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rotate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_process_gd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_process_imagemagick",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_process_netpbm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_rotate_gd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_mirror_gd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "watermark",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "overlay_watermark",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "text_watermark",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_create_gd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_save_gd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_display_gd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "image_reproportion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_image_properties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "size_calculator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "explode_name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gd_loaded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gd_version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "display_errors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 25,
        "nbMethods": 25,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 25,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 209,
        "ccn": 185,
        "ccnMethodMax": 34,
        "externals": [],
        "parents": [],
        "lcom": 3,
        "length": 1907,
        "vocabulary": 241,
        "volume": 15089.88,
        "difficulty": 64.24,
        "effort": 969404.21,
        "level": 0.02,
        "bugs": 5.03,
        "time": 53856,
        "intelligentContent": 234.89,
        "number_operators": 628,
        "number_operands": 1279,
        "number_operators_unique": 22,
        "number_operands_unique": 219,
        "cloc": 631,
        "loc": 1384,
        "lloc": 753,
        "mi": 43.27,
        "mIwoC": 0,
        "commentWeight": 43.27,
        "kanDefect": 9.35,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 3.68,
        "relativeSystemComplexity": 259.68,
        "totalStructuralComplexity": 6400,
        "totalDataComplexity": 92.12,
        "totalSystemComplexity": 6492.12,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Jquery",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_blur",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_change",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_click",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_dblclick",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_error",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_focus",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_hover",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_keydown",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_keyup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_load",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mousedown",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mouseout",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mouseover",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mouseup",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_output",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_resize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_scroll",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unload",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_animate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fadeIn",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fadeOut",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_hide",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_removeClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_slideUp",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_slideDown",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_slideToggle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_toggle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_toggleClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_show",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_updater",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_zebraTables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "corner",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "modal",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "effect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "plugin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ui",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sortable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tablesorter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_add_event",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_clear_compile",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_document_ready",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "script",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prep_element",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validate_speed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 47,
        "nbMethods": 47,
        "nbMethodsPrivate": 38,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 79,
        "ccn": 33,
        "ccnMethodMax": 5,
        "externals": [
            "CI_Javascript"
        ],
        "parents": [
            "CI_Javascript"
        ],
        "lcom": 1,
        "length": 947,
        "vocabulary": 144,
        "volume": 6789.92,
        "difficulty": 23.17,
        "effort": 157299.79,
        "level": 0.04,
        "bugs": 2.26,
        "time": 8739,
        "intelligentContent": 293.09,
        "number_operators": 252,
        "number_operands": 695,
        "number_operators_unique": 9,
        "number_operands_unique": 135,
        "cloc": 508,
        "loc": 857,
        "lloc": 349,
        "mi": 59.73,
        "mIwoC": 13.26,
        "commentWeight": 46.47,
        "kanDefect": 2.54,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 3.51,
        "relativeSystemComplexity": 124.51,
        "totalStructuralComplexity": 5687,
        "totalDataComplexity": 165,
        "totalSystemComplexity": 5852,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Javascript",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "blur",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "change",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "click",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dblclick",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "focus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hover",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "keydown",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "keyup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mousedown",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mouseout",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mouseover",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mouseup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ready",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "scroll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "animate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fadeIn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fadeOut",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "slideUp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "slideDown",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "slideToggle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hide",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toggle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toggleClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "show",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear_compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "external",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "inline",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_open_script",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close_script",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "generate_json",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_is_associative_array",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prep_args",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 42,
        "nbMethods": 42,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 38,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 71,
        "ccn": 30,
        "ccnMethodMax": 11,
        "externals": [],
        "parents": [],
        "lcom": 2,
        "length": 544,
        "vocabulary": 84,
        "volume": 3477.42,
        "difficulty": 22.74,
        "effort": 79065.56,
        "level": 0.04,
        "bugs": 1.16,
        "time": 4393,
        "intelligentContent": 152.94,
        "number_operators": 112,
        "number_operands": 432,
        "number_operators_unique": 8,
        "number_operands_unique": 76,
        "cloc": 446,
        "loc": 680,
        "lloc": 234,
        "mi": 67.01,
        "mIwoC": 19.49,
        "commentWeight": 47.52,
        "kanDefect": 1.47,
        "relativeStructuralComplexity": 1849,
        "relativeDataComplexity": 1.07,
        "relativeSystemComplexity": 1850.07,
        "totalStructuralComplexity": 77658,
        "totalDataComplexity": 44.93,
        "totalSystemComplexity": 77702.93,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Migration",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "latest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "current",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error_string",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "find_migrations",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_migration_number",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_migration_name",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_version",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_update_version",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 10,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 45,
        "ccn": 35,
        "ccnMethodMax": 19,
        "externals": [
            "migration"
        ],
        "parents": [],
        "lcom": 2,
        "length": 335,
        "vocabulary": 76,
        "volume": 2093.06,
        "difficulty": 24.04,
        "effort": 50316.39,
        "level": 0.04,
        "bugs": 0.7,
        "time": 2795,
        "intelligentContent": 87.07,
        "number_operators": 102,
        "number_operands": 233,
        "number_operators_unique": 13,
        "number_operands_unique": 63,
        "cloc": 160,
        "loc": 330,
        "lloc": 170,
        "mi": 67.45,
        "mIwoC": 23.39,
        "commentWeight": 44.07,
        "kanDefect": 2.4,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 0.83,
        "relativeSystemComplexity": 361.83,
        "totalStructuralComplexity": 3971,
        "totalDataComplexity": 9.1,
        "totalSystemComplexity": 3980.1,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Pagination",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create_links",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_attributes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_attr_rel",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 66,
        "ccn": 62,
        "ccnMethodMax": 47,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 732,
        "vocabulary": 87,
        "volume": 4716.23,
        "difficulty": 64.96,
        "effort": 306381.86,
        "level": 0.02,
        "bugs": 1.57,
        "time": 17021,
        "intelligentContent": 72.6,
        "number_operators": 267,
        "number_operands": 465,
        "number_operators_unique": 19,
        "number_operands_unique": 68,
        "cloc": 291,
        "loc": 506,
        "lloc": 215,
        "mi": 61.19,
        "mIwoC": 15.06,
        "commentWeight": 46.13,
        "kanDefect": 3.08,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.68,
        "relativeSystemComplexity": 81.68,
        "totalStructuralComplexity": 405,
        "totalDataComplexity": 3.4,
        "totalSystemComplexity": 408.4,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Parser",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse_string",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_delimiters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_single",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parse_pair",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 16,
        "ccn": 10,
        "ccnMethodMax": 6,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 158,
        "vocabulary": 35,
        "volume": 810.43,
        "difficulty": 12.31,
        "effort": 9976.63,
        "level": 0.08,
        "bugs": 0.27,
        "time": 554,
        "intelligentContent": 65.83,
        "number_operators": 39,
        "number_operands": 119,
        "number_operators_unique": 6,
        "number_operands_unique": 29,
        "cloc": 94,
        "loc": 164,
        "lloc": 70,
        "mi": 84.13,
        "mIwoC": 38.04,
        "commentWeight": 46.09,
        "kanDefect": 1.35,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.4,
        "relativeSystemComplexity": 26.4,
        "totalStructuralComplexity": 175,
        "totalDataComplexity": 9.83,
        "totalSystemComplexity": 184.83,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Profiler",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_sections",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_benchmarks",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_queries",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_get",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_post",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_uri_string",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_controller_info",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_memory_usage",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_http_headers",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_config",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_session_data",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 13,
        "nbMethodsPrivate": 10,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 64,
        "ccn": 52,
        "ccnMethodMax": 14,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 926,
        "vocabulary": 227,
        "volume": 7247.38,
        "difficulty": 15.25,
        "effort": 110539.38,
        "level": 0.07,
        "bugs": 2.42,
        "time": 6141,
        "intelligentContent": 475.17,
        "number_operators": 327,
        "number_operands": 599,
        "number_operators_unique": 11,
        "number_operands_unique": 216,
        "cloc": 134,
        "loc": 334,
        "lloc": 201,
        "mi": 57.29,
        "mIwoC": 15.73,
        "commentWeight": 41.56,
        "kanDefect": 5.02,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.64,
        "relativeSystemComplexity": 50.64,
        "totalStructuralComplexity": 637,
        "totalDataComplexity": 21.38,
        "totalSystemComplexity": 658.38,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Session_database_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "open",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "read",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "write",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "close",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "destroy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateSessionId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_lock",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_release_lock",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 58,
        "ccn": 49,
        "ccnMethodMax": 13,
        "externals": [
            "CI_Session_driver",
            "SessionHandlerInterface",
            "Exception",
            "Exception",
            "Exception"
        ],
        "parents": [
            "CI_Session_driver"
        ],
        "lcom": 1,
        "length": 376,
        "vocabulary": 52,
        "volume": 2143.37,
        "difficulty": 26.16,
        "effort": 56076.42,
        "level": 0.04,
        "bugs": 0.71,
        "time": 3115,
        "intelligentContent": 81.92,
        "number_operators": 126,
        "number_operands": 250,
        "number_operators_unique": 9,
        "number_operands_unique": 43,
        "cloc": 127,
        "loc": 297,
        "lloc": 170,
        "mi": 63.85,
        "mIwoC": 21.43,
        "commentWeight": 42.42,
        "kanDefect": 1.9,
        "relativeStructuralComplexity": 400,
        "relativeDataComplexity": 1.38,
        "relativeSystemComplexity": 401.38,
        "totalStructuralComplexity": 4000,
        "totalDataComplexity": 13.81,
        "totalSystemComplexity": 4013.81,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Session_files_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "open",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "read",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "write",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "close",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "destroy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateSessionId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "strlen",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 51,
        "ccn": 43,
        "ccnMethodMax": 13,
        "externals": [
            "CI_Session_driver",
            "SessionHandlerInterface",
            "Exception",
            "Exception"
        ],
        "parents": [
            "CI_Session_driver"
        ],
        "lcom": 2,
        "length": 381,
        "vocabulary": 63,
        "volume": 2277.34,
        "difficulty": 37.03,
        "effort": 84332.88,
        "level": 0.03,
        "bugs": 0.76,
        "time": 4685,
        "intelligentContent": 61.5,
        "number_operators": 144,
        "number_operands": 237,
        "number_operators_unique": 15,
        "number_operands_unique": 48,
        "cloc": 124,
        "loc": 280,
        "lloc": 156,
        "mi": 65.76,
        "mIwoC": 22.87,
        "commentWeight": 42.89,
        "kanDefect": 1.78,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 3.16,
        "relativeSystemComplexity": 39.16,
        "totalStructuralComplexity": 324,
        "totalDataComplexity": 28.43,
        "totalSystemComplexity": 352.43,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Session_redis_driver",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "open",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "read",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "write",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "close",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "destroy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateSessionId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_lock",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_release_lock",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 52,
        "ccn": 43,
        "ccnMethodMax": 10,
        "externals": [
            "CI_Session_driver",
            "SessionHandlerInterface",
            "Redis"
        ],
        "parents": [
            "CI_Session_driver"
        ],
        "lcom": 1,
        "length": 381,
        "vocabulary": 75,
        "volume": 2373.18,
        "difficulty": 25.33,
        "effort": 60120.56,
        "level": 0.04,
        "bugs": 0.79,
        "time": 3340,
        "intelligentContent": 93.68,
        "number_operators": 115,
        "number_operands": 266,
        "number_operators_unique": 12,
        "number_operands_unique": 63,
        "cloc": 125,
        "loc": 279,
        "lloc": 154,
        "mi": 65.91,
        "mIwoC": 22.86,
        "commentWeight": 43.04,
        "kanDefect": 1.78,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 1.2,
        "relativeSystemComplexity": 362.2,
        "totalStructuralComplexity": 3610,
        "totalDataComplexity": 12,
        "totalSystemComplexity": 3622,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Session",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ci_load_classes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_configure",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_configure_sid_length",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ci_init_vars",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mark_as_flash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_flash_keys",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unmark_flash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mark_as_temp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_temp_keys",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unmark_temp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__isset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sess_destroy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sess_regenerate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_userdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "userdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_userdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unset_userdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "all_userdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has_userdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flashdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_flashdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "keep_flashdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tempdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_tempdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unset_tempdata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 28,
        "nbMethods": 28,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 24,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 141,
        "ccn": 114,
        "ccnMethodMax": 19,
        "externals": [
            "class",
            "UnexpectedValueException"
        ],
        "parents": [],
        "lcom": 14,
        "length": 887,
        "vocabulary": 140,
        "volume": 6323.67,
        "difficulty": 49.54,
        "effort": 313283.17,
        "level": 0.02,
        "bugs": 2.11,
        "time": 17405,
        "intelligentContent": 127.64,
        "number_operators": 256,
        "number_operands": 631,
        "number_operators_unique": 19,
        "number_operands_unique": 121,
        "cloc": 268,
        "loc": 664,
        "lloc": 396,
        "mi": 43.03,
        "mIwoC": 1.39,
        "commentWeight": 41.64,
        "kanDefect": 6.4,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 2.92,
        "relativeSystemComplexity": 146.92,
        "totalStructuralComplexity": 4032,
        "totalDataComplexity": 81.77,
        "totalSystemComplexity": 4113.77,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Session_driver",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "php5_validate_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_cookie_destroy",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_lock",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_release_lock",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fail",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "SessionHandlerInterface"
        ],
        "parents": [],
        "lcom": 1,
        "length": 50,
        "vocabulary": 17,
        "volume": 204.37,
        "difficulty": 5.54,
        "effort": 1131.91,
        "level": 0.18,
        "bugs": 0.07,
        "time": 63,
        "intelligentContent": 36.9,
        "number_operators": 14,
        "number_operands": 36,
        "number_operators_unique": 4,
        "number_operands_unique": 13,
        "cloc": 92,
        "loc": 139,
        "lloc": 47,
        "mi": 94.28,
        "mIwoC": 46.67,
        "commentWeight": 47.61,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.17,
        "relativeSystemComplexity": 3.17,
        "totalStructuralComplexity": 6,
        "totalDataComplexity": 13,
        "totalSystemComplexity": 19,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 1,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "CI_Table",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_template",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_heading",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "make_columns",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_empty",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_row",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prep_args",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_caption",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "generate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_from_db_result",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_from_array",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_template",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_default_template",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 12,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 2,
        "wmc": 62,
        "ccn": 49,
        "ccnMethodMax": 25,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 461,
        "vocabulary": 85,
        "volume": 2954.73,
        "difficulty": 26.47,
        "effort": 78199.14,
        "level": 0.04,
        "bugs": 0.98,
        "time": 4344,
        "intelligentContent": 111.64,
        "number_operators": 139,
        "number_operands": 322,
        "number_operators_unique": 12,
        "number_operands_unique": 73,
        "cloc": 175,
        "loc": 363,
        "lloc": 188,
        "mi": 63.5,
        "mIwoC": 19.5,
        "commentWeight": 43.99,
        "kanDefect": 4.08,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 1.76,
        "relativeSystemComplexity": 65.76,
        "totalStructuralComplexity": 896,
        "totalDataComplexity": 24.67,
        "totalSystemComplexity": 920.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Trackback",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "send",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "receive",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "send_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "send_success",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "process",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extract_urls",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate_url",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "convert_xml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "limit_characters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "convert_ascii",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "display_errors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 15,
        "nbMethods": 15,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 15,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 60,
        "ccn": 46,
        "ccnMethodMax": 13,
        "externals": [],
        "parents": [],
        "lcom": 5,
        "length": 617,
        "vocabulary": 148,
        "volume": 4448.23,
        "difficulty": 34.06,
        "effort": 151517.93,
        "level": 0.03,
        "bugs": 1.48,
        "time": 8418,
        "intelligentContent": 130.59,
        "number_operators": 181,
        "number_operands": 436,
        "number_operators_unique": 20,
        "number_operands_unique": 128,
        "cloc": 182,
        "loc": 393,
        "lloc": 211,
        "mi": 61.04,
        "mIwoC": 17.57,
        "commentWeight": 43.48,
        "kanDefect": 3.06,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 2.26,
        "relativeSystemComplexity": 51.26,
        "totalStructuralComplexity": 735,
        "totalDataComplexity": 33.88,
        "totalSystemComplexity": 768.88,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Typography",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "auto_typography",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "format_characters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_format_newlines",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_protect_characters",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nl2br_except_pre",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 30,
        "ccn": 26,
        "ccnMethodMax": 18,
        "externals": [],
        "parents": [],
        "lcom": 3,
        "length": 426,
        "vocabulary": 139,
        "volume": 3032.67,
        "difficulty": 18.57,
        "effort": 56312.26,
        "level": 0.05,
        "bugs": 1.01,
        "time": 3128,
        "intelligentContent": 163.32,
        "number_operators": 119,
        "number_operands": 307,
        "number_operators_unique": 15,
        "number_operands_unique": 124,
        "cloc": 210,
        "loc": 307,
        "lloc": 108,
        "mi": 75.69,
        "mIwoC": 27.77,
        "commentWeight": 47.92,
        "kanDefect": 1.34,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 2.73,
        "relativeSystemComplexity": 6.73,
        "totalStructuralComplexity": 20,
        "totalDataComplexity": 13.67,
        "totalSystemComplexity": 33.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Upload",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "do_upload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_upload_path",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_filename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_max_filesize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_max_size",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_max_filename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_max_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_max_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_min_width",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_min_height",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_allowed_types",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_image_properties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_xss_clean",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_image",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_allowed_filetype",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_allowed_filesize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_allowed_dimensions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate_upload_path",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_extension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "limit_filename_length",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "do_xss_clean",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "display_errors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prep_filename",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_file_mime_type",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 28,
        "nbMethods": 28,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 25,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 160,
        "ccn": 133,
        "ccnMethodMax": 34,
        "externals": [
            "ReflectionClass"
        ],
        "parents": [],
        "lcom": 1,
        "length": 1120,
        "vocabulary": 166,
        "volume": 8260.04,
        "difficulty": 48.86,
        "effort": 403562.16,
        "level": 0.02,
        "bugs": 2.75,
        "time": 22420,
        "intelligentContent": 169.07,
        "number_operators": 364,
        "number_operands": 756,
        "number_operators_unique": 19,
        "number_operands_unique": 147,
        "cloc": 487,
        "loc": 1001,
        "lloc": 515,
        "mi": 44.11,
        "mIwoC": 0,
        "commentWeight": 44.11,
        "kanDefect": 6.53,
        "relativeStructuralComplexity": 529,
        "relativeDataComplexity": 2.75,
        "relativeSystemComplexity": 531.75,
        "totalStructuralComplexity": 14812,
        "totalDataComplexity": 77,
        "totalSystemComplexity": 14889,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_User_agent",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_load_agent_file",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compile_data",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_platform",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_browser",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_robot",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_mobile",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_languages",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_set_charsets",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_browser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_robot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_mobile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is_referral",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "agent_string",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "platform",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "browser",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "robot",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mobile",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "referrer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "languages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "charsets",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "accept_lang",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "accept_charset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 25,
        "nbMethods": 19,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 6,
        "nbMethodsSetters": 0,
        "wmc": 73,
        "ccn": 49,
        "ccnMethodMax": 8,
        "externals": [],
        "parents": [],
        "lcom": 2,
        "length": 362,
        "vocabulary": 51,
        "volume": 2053.42,
        "difficulty": 20.28,
        "effort": 41641.41,
        "level": 0.05,
        "bugs": 0.68,
        "time": 2313,
        "intelligentContent": 101.26,
        "number_operators": 144,
        "number_operands": 218,
        "number_operators_unique": 8,
        "number_operands_unique": 43,
        "cloc": 257,
        "loc": 510,
        "lloc": 253,
        "mi": 62.35,
        "mIwoC": 17.79,
        "commentWeight": 44.55,
        "kanDefect": 3.54,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 3.12,
        "relativeSystemComplexity": 84.12,
        "totalStructuralComplexity": 2025,
        "totalDataComplexity": 78.1,
        "totalSystemComplexity": 2103.1,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CI_Xmlrpc",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "server",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "timeout",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "method",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "request",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_debug",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "values_parsing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "send_request",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "display_error",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "display_response",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "send_error_message",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "send_response",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 1,
        "wmc": 34,
        "ccn": 22,
        "ccnMethodMax": 9,
        "externals": [
            "XML_RPC_Client",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Message",
            "XML_RPC_Response",
            "XML_RPC_Response"
        ],
        "parents": [],
        "lcom": 2,
        "length": 338,
        "vocabulary": 100,
        "volume": 2245.62,
        "difficulty": 14.72,
        "effort": 33060.57,
        "level": 0.07,
        "bugs": 0.75,
        "time": 1837,
        "intelligentContent": 152.53,
        "number_operators": 73,
        "number_operands": 265,
        "number_operators_unique": 10,
        "number_operands_unique": 90,
        "cloc": 251,
        "loc": 397,
        "lloc": 146,
        "mi": 73.52,
        "mIwoC": 26.36,
        "commentWeight": 47.15,
        "kanDefect": 1.61,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.82,
        "relativeSystemComplexity": 17.82,
        "totalStructuralComplexity": 208,
        "totalDataComplexity": 23.6,
        "totalSystemComplexity": 231.6,
        "package": "\\",
        "pageRank": 0.16,
        "afferentCoupling": 4,
        "efferentCoupling": 4,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "XML_RPC_Client",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "send",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sendPayload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 13,
        "ccnMethodMax": 11,
        "externals": [
            "CI_Xmlrpc",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Response"
        ],
        "parents": [
            "CI_Xmlrpc"
        ],
        "lcom": 1,
        "length": 207,
        "vocabulary": 45,
        "volume": 1136.81,
        "difficulty": 17.38,
        "effort": 19752.14,
        "level": 0.06,
        "bugs": 0.38,
        "time": 1097,
        "intelligentContent": 65.43,
        "number_operators": 68,
        "number_operands": 139,
        "number_operators_unique": 9,
        "number_operands_unique": 36,
        "cloc": 92,
        "loc": 170,
        "lloc": 78,
        "mi": 81.01,
        "mIwoC": 35.58,
        "commentWeight": 45.42,
        "kanDefect": 0.71,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.47,
        "relativeSystemComplexity": 17.47,
        "totalStructuralComplexity": 48,
        "totalDataComplexity": 4.4,
        "totalSystemComplexity": 52.4,
        "package": "\\",
        "pageRank": 0.02,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "XML_RPC_Response",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "faultCode",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "faultString",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "value",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepare_response",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "xmlrpc_decoder",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "iso8601_decode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 0,
        "wmc": 25,
        "ccn": 18,
        "ccnMethodMax": 7,
        "externals": [
            "XML_RPC_Values"
        ],
        "parents": [],
        "lcom": 2,
        "length": 189,
        "vocabulary": 54,
        "volume": 1087.67,
        "difficulty": 13.3,
        "effort": 14466.06,
        "level": 0.08,
        "bugs": 0.36,
        "time": 804,
        "intelligentContent": 81.78,
        "number_operators": 56,
        "number_operands": 133,
        "number_operators_unique": 9,
        "number_operands_unique": 45,
        "cloc": 91,
        "loc": 193,
        "lloc": 102,
        "mi": 76.21,
        "mIwoC": 32.5,
        "commentWeight": 43.71,
        "kanDefect": 1.03,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 1.55,
        "relativeSystemComplexity": 37.55,
        "totalStructuralComplexity": 288,
        "totalDataComplexity": 12.43,
        "totalSystemComplexity": 300.43,
        "package": "\\",
        "pageRank": 0.08,
        "afferentCoupling": 4,
        "efferentCoupling": 1,
        "instability": 0.2,
        "violations": {}
    },
    {
        "name": "XML_RPC_Message",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createPayload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseResponse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "open_tag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "closing_tag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "character_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addParam",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output_parameters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decode_message",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 105,
        "ccn": 97,
        "ccnMethodMax": 34,
        "externals": [
            "CI_Xmlrpc",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Values"
        ],
        "parents": [
            "CI_Xmlrpc"
        ],
        "lcom": 1,
        "length": 912,
        "vocabulary": 140,
        "volume": 6501.91,
        "difficulty": 44.39,
        "effort": 288600.74,
        "level": 0.02,
        "bugs": 2.17,
        "time": 16033,
        "intelligentContent": 146.48,
        "number_operators": 224,
        "number_operands": 688,
        "number_operators_unique": 16,
        "number_operands_unique": 124,
        "cloc": 153,
        "loc": 470,
        "lloc": 317,
        "mi": 44.36,
        "mIwoC": 5.7,
        "commentWeight": 38.66,
        "kanDefect": 3.84,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 2.29,
        "relativeSystemComplexity": 51.29,
        "totalStructuralComplexity": 441,
        "totalDataComplexity": 20.63,
        "totalSystemComplexity": 461.63,
        "package": "\\",
        "pageRank": 0.02,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "XML_RPC_Values",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addScalar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addStruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "kindOf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "serializedata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "serialize_class",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "serializeval",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "scalarval",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "iso8601_encode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 38,
        "ccn": 29,
        "ccnMethodMax": 10,
        "externals": [
            "CI_Xmlrpc",
            "XML_RPC_Values"
        ],
        "parents": [
            "CI_Xmlrpc"
        ],
        "lcom": 2,
        "length": 320,
        "vocabulary": 66,
        "volume": 1934.21,
        "difficulty": 28.67,
        "effort": 55459.64,
        "level": 0.03,
        "bugs": 0.64,
        "time": 3081,
        "intelligentContent": 67.46,
        "number_operators": 107,
        "number_operands": 213,
        "number_operators_unique": 14,
        "number_operands_unique": 52,
        "cloc": 95,
        "loc": 229,
        "lloc": 134,
        "mi": 68.7,
        "mIwoC": 26.69,
        "commentWeight": 42.01,
        "kanDefect": 1.6,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 2.14,
        "relativeSystemComplexity": 51.14,
        "totalStructuralComplexity": 490,
        "totalDataComplexity": 21.38,
        "totalSystemComplexity": 511.38,
        "package": "\\",
        "pageRank": 0.3,
        "afferentCoupling": 6,
        "efferentCoupling": 3,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "CI_Xmlrpcs",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set_system_methods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "serve",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_to_map",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "methodSignature",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "methodHelp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "multicall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "multicall_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "do_multicall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 13,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 70,
        "ccn": 58,
        "ccnMethodMax": 19,
        "externals": [
            "CI_Xmlrpc",
            "XML_RPC_Message",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Message",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Response",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Response",
            "XML_RPC_Values",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Values",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Response",
            "XML_RPC_Message",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Response",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Values",
            "XML_RPC_Message",
            "XML_RPC_Values"
        ],
        "parents": [
            "CI_Xmlrpc"
        ],
        "lcom": 1,
        "length": 753,
        "vocabulary": 139,
        "volume": 5360.56,
        "difficulty": 25.89,
        "effort": 138783.7,
        "level": 0.04,
        "bugs": 1.79,
        "time": 7710,
        "intelligentContent": 207.05,
        "number_operators": 205,
        "number_operands": 548,
        "number_operators_unique": 12,
        "number_operands_unique": 127,
        "cloc": 149,
        "loc": 386,
        "lloc": 237,
        "mi": 55.32,
        "mIwoC": 14.28,
        "commentWeight": 41.03,
        "kanDefect": 2.73,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 1.71,
        "relativeSystemComplexity": 257.71,
        "totalStructuralComplexity": 3328,
        "totalDataComplexity": 22.24,
        "totalSystemComplexity": 3350.24,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CI_Zip",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_dir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_get_mod_time",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_add_dir",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_add_data",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "read_file",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "read_dir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get_zip",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "archive",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "download",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear_data",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "strlen",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "substr",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 14,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 42,
        "ccn": 29,
        "ccnMethodMax": 8,
        "externals": [],
        "parents": [],
        "lcom": 3,
        "length": 517,
        "vocabulary": 89,
        "volume": 3347.95,
        "difficulty": 45.13,
        "effort": 151082.33,
        "level": 0.02,
        "bugs": 1.12,
        "time": 8393,
        "intelligentContent": 74.19,
        "number_operators": 161,
        "number_operands": 356,
        "number_operators_unique": 18,
        "number_operands_unique": 71,
        "cloc": 187,
        "loc": 348,
        "lloc": 161,
        "mi": 68.62,
        "mIwoC": 23.28,
        "commentWeight": 45.34,
        "kanDefect": 1.89,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 1.62,
        "relativeSystemComplexity": 65.62,
        "totalStructuralComplexity": 896,
        "totalDataComplexity": 22.67,
        "totalSystemComplexity": 918.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    }
]