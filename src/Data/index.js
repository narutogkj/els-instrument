
import { COLORS, icons, images, SIZES } from "../constants";

const initialCurrentLocation = {
    streetName: "Galaxy Green City",
    gps: {
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922
    }
}



// price rating
const affordable = 1
const fairPrice = 2
const expensive = 3

const restaurantData = [
    {
        id: 1,
        name: "Plant Tissue Culture",
        rating: 'Ploat size available',
        priceRating: affordable,
        photo: images.NagarAmausiStationCode1,
        duration: "700-900/- Sq.Ft.",
        plotSize: "800 Sq. Ft to 3000 Sq. Ft",
        url: '1). Plant Tissue Culture',
        menu: [
            {
                menuId: 1,
                name: "Sai Suraksha – Nagar Amausi Phase-1",
                photo: images.NagarAmausiStationCode1,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                menuId: 2,
                name: "Sai Suraksha – Nagar Amausi Phase-2",
                photo: images.NagarAmausiStationCode2,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "850/- ₹ Sq. Ft."
            },
            {
                menuId: 3,
                name: "Sai Suraksha – Nagar Amausi Phase-3",
                photo: images.NagarAmausiStationCode3,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "750/- ₹ Sq. Ft."
            },
            {
                menuId: 4,
                name: "Sai Suraksha – Nagar Amausi Phase-4",
                photo: images.NagarAmausiStationCode4,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "700/- ₹ Sq. Ft."
            },
        ]
    },
    {
        id: 2,
        name: "Walkin Germination Chamber",
        rating: 'Ploat size available',
        priceRating: affordable,
        photo: images.NagarBasantKhera,
        duration: "850/- Sq. Ft.",
        plotSize: "800 Sq. Ft to 3000 Sq. Ft",
        url: '2). Walk in Germination Chamber',
        menu: [
            {
                menuId: 1,
                name: "Sai Suraksha Nagar – Amausi Station & T S M Hospital",
                photo: images.NagarBasantKhera,
                description: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                calories: 200,
                price: "850/- Sq. Ft."
            },
            {
                menuId: 2,
                name: "Sai Suraksha Nagar – Amausi Station &  TSM Hospital",
                photo: images.NagarBasantKhera2,
                description: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                calories: 200,
                price: "850/- Sq. Ft."
            },
            {
                menuId: 3,
                name: "Sai Suraksha Nagar – Amausi Station & T.S.M Hospital",
                photo: images.NagarBasantKhera3,
                description: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                calories: 200,
                price: "850/- Sq. Ft."
            },
            {
                menuId: 4,
                name: "Sai Suraksha Nagar – Amausi Station & tsm Hospital",
                photo: images.NagarBasantKhera4,
                description: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                calories: 200,
                price: "850/- Sq. Ft."
            }
        ]
    },
    {
        id: 3,
        name: "Genral Labrotory Instuments",
        rating: 'Ploat size available',
        priceRating: affordable,
        photo: images.AmausiStationTSMHospital,
        duration: "850/- Sq. Ft.",
        plotSize: "800 Sq. Ft to 3000 Sq. Ft",
        url: '3). Genral Labrotory Instuments',
        menu: [
            {
                menuId: 1,
                name: "Sai Surksha Nagar Basant Khera",
                photo: images.AmausiStationTSMHospital,
                description: "Sai Surksha – Nagar Basant Khera",
                calories: 200,
                price: "850/- Sq. Ft."
            },
            {
                menuId: 2,
                name: "Sai Surksha  Nagar Basant Khera",
                photo: images.AmausiStationTSMHospital2,
                description: "Sai Surksha – Nagar Basant Khera",
                calories: 200,
                price: "850/- Sq. Ft."
            },
            {
                menuId: 3,
                name: "Sai Surksha – Nagar Basant Khera",
                photo: images.AmausiStationTSMHospital3,
                description: "Sai Surksha – Nagar Basant Khera",
                calories: 200,
                price: "850/- Sq. Ft."
            },
            {
                menuId: 4,
                name: "Sai Surksha – Nagar Basant Khera ",
                photo: images.AmausiStationTSMHospital4,
                description: "Sai Surksha – Nagar Basant Khera",
                calories: 200,
                price: "850/- Sq. Ft."
            }
        ]
    },
    {
        id: 4,
        name: "Lab Furnitures",
        rating: 'Ploat size available',
        priceRating: affordable,
        photo: images.OuterRingRoadBehta,
        duration: "700/- Sq. Ft.",
        plotSize: "800 Sq. Ft to 3000 Sq. Ft",
        url: '4). Lab Furnitures',
        menu: [
            {
                menuId: 1,
                name: "Sai Surksha Nagar – Outer Ring Road Behta ",
                photo: images.OuterRingRoadBehta,
                description: "Sai Surksha Nagar – Outer Ring Road Behta",
                calories: 200,
                price: "700/- Sq. Ft."
            },
            {
                menuId: 2,
                name: " Sai Surksha Nagar – Outer Ring Road Behta",
                photo: images.OuterRingRoadBehta2,
                description: "Sai Surksha Nagar – Outer Ring Road Behta",
                calories: 200,
                price: "700/- Sq. Ft."
            },
            {
                menuId: 3,
                name: "Sai Surksha Nagar  – Outer Ring Road Behta",
                photo: images.OuterRingRoadBehta3,
                description: "Sai Surksha Nagar – Outer Ring Road Behta",
                calories: 200,
                price: "700/- Sq. Ft."
            },
            {
                menuId: 4,
                name: "Sai Surksha Nagar –  Outer Ring Road Behta",
                photo: images.OuterRingRoadBehta4,
                description: "Sai Surksha Nagar – Outer Ring Road Behta",
                calories: 200,
                price: "700/- Sq. Ft."
            }
        ]
    },
]

const categoryData = [
    {
        itemId: 1,
        name: "Plant Tissue Culture",
        photo: images.PlantTissueultureRack,
        products: "11",
        url: '1). Plant Tissue Culture',
        items: [
            {
                itemId: 1,
                name: "Air Curtain",
                photo: images.aircurtain,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 2,
                name: "Air Pressure Module",
                photo: images.AirPressureModel,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 3,
                name: "Cocopeat",
                photo: images.Cocopeat,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 4,
                name: "Lab Trolley",
                photo: images.LabTroly,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 5,
                name: "Pass Box",
                photo: images.PassBox,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 6,
                name: "Plant Tissue Culture Rack",
                photo: images.PlantTissueultureRack,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 7,
                name: "Poly House",
                photo: images.PolyHouse,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 8,
                name: "Seeding Tray",
                photo: images.SeedLingTray,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 9,
                name: "Shade House",
                photo: images.ShadeHouse,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 10,
                name: "Tissue Culture Bottle",
                photo: images.TissueCultureBottle,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            },
            {
                itemId: 11,
                name: "Tissue Culture Tray",
                photo: images.TissueCultureTray,
                description: "Sai Suraksha – Nagar Amausi",
                calories: 200,
                price: "900/- ₹ Sq. Ft. "
            }
        ]

    },
    {
        itemId: 2,
        name: "Walkin Germination Chamber",
        photo: images.WalkInGerminationChamber,
        products: "2",
        url: '2). Walk in Chambers',
        items: [
            {
                itemId: 1,
                name: "Walk-In Germination Chamber",
                photo: images.WalkInGerminationChamber,
                description: "Sai Suraksha – Nagar Amausi",
            },
            {
                itemId: 2,
                name: "Walk-In Cold Room",
                photo: images.WalkInColdRoom,
                description: "Sai Suraksha – Nagar Amausi",
            }
        ]

    },
    {
        itemId: 3,
        name: "Genral Labrotory Instuments",
        photo: images.HotAirOven,
        products: "23",
        url: '3). Genral Labrotory Instuments',
        items: [
            {
                itemId: 1,
                name: "ANALYTICAL BALANCE",
                photo: images.AnalyticalBalance,
                description: "Auto Calibration with External Weight.",
            },
            {
                itemId: 2,
                name: "PRECISION BALANCE",
                photo: images.precisionBalance,
                description: "Auto Calibration with External Weight",
            },
            {
                itemId: 3,
                name: "AUTOCLAVE",
                photo: images.autoclave,
                description: "Double wall construction with inner S.S. 304",
            },
            {
                itemId: 4,
                name: "De-Humidifier (Environmental Controller)",
                photo: images.deHumidifier,
                description: "The refrigerated unit is suitable for de-humidification of packaging cabin/rooms in food",
            },
            {
                itemId: 5,
                name: "DEEP FREEZER",
                photo: images.deepFreezer,
                description: "Most versatile for Biochemical Oxygen Demand determinations",
            },
            {
                itemId: 6,
                name: "CONTROL PANEL",
                photo: images.control,
                description: "Els Instruments also Offers Cryocon,a Synonym of Cryogenic Dewars which is suitable of wide range",
            },
            {
                itemId: 7,
                name: "CRYOCAN",
                photo: images.cryocan,
                description: "Els Instruments also Offers Cryocon,a Synonym of Cryogenic",
            },
            {
                itemId: 8,
                name: "MUFFLE FURNACE",
                photo: images.muffle,
                description: "Rectangular electric furnace with light weight and fast heating system",
            },
            {
                itemId: 9,
                name: "ROTARY SHAKER",
                photo: images.rotaryShaker,
                description: "These shakers are ideal for mixing and development of culture",
            },
            {
                itemId: 10,
                name: "HOT AIR OVEN",
                photo: images.HotAirOven,
                description: "Double walled Chamber Inner constructed out of Stainless Steel and outer Mild Steel Powder coated/ epoxy painted in beautiful colors",
            },
            {
                itemId: 11,
                name: "WATER DISTILLATION UNIT",
                photo: images.WaterDistillationUnit,
                description: "WATER DISTILLATION UNIT",
            },
            {
                itemId: 12,
                name: "Blood Bag Shaker",
                photo: images.BloodBagShaker,
                description: "Els Instruments also offers Blood Bag Shaker having features like Volume can be set in 1 ml. increments",
            },
            {
                itemId: 13,
                name: "Blood Bank Refrigerator",
                photo: images.BloodBankRefrigerator,
                description: "Blood Bank Refrigerator is an ecofriendly CFC free refrigerant and specially designed for storing blood bags and other specific medical products like vaccines. cultures. reagents, etc",
            },
            {
                itemId: 14,
                name: "B.O.D Incubator (Cooling Incubator)",
                photo: images.BactoriologicalIndclubator,
                description: "Most versatile for Biochemical Oxygen Demand determinations. These Cooling Incubators are designed for close control of incubation.",
            },
            {
                itemId: 15,
                name: "Orbital Shaking Incubator",
                photo: images.OrbitalShakingIncubator,
                description: "Orbital Shaking Incubator offered by Els Instruments",
            },
            {
                itemId: 16,
                name: "Plant Growth chamber",
                photo: images.PlantGrowthChamber,
                description: "Plant Growth chamber",
            },
            {
                itemId: 17,
                name: "Plasma Thawing Bath",
                photo: images.PlasmaThawingBath,
                description: "Els Instruments offers Plasma Thawing Bath Made of outer MS sheet",
            },
            {
                itemId: 18,
                name: "Platelet Incubator cum Agitator",
                photo: images.PlateletIncubatorCumAgitator,
                description: "Platelet Incubator cum Agitator are specially designed for close environment control for stored platelets",
            },
            {
                itemId: 19,
                name: "Humidity Oven",
                photo: images.humidityOven,
                description: "Humidity Oven",
            },
            {
                itemId: 20,
                name: "Biological Safety Cabinet",
                photo: images.BiologicalSafetyCabinet,
                description: "permitting total disinfections. These are designed to use simultaneous primary biological and chemical containment",
            },
            {
                itemId: 21,
                name: "Laminar Air Flow Cabinet",
                photo: images.laminator,
                description: "The cabinets are fabricated out of mild steel duly epoxy/ Powder coated.",
            },
            {
                itemId: 22,
                name: "Humdity Cabinet",
                photo: images.humidityOven,
                description: "Double wall construction, inside of SS-304. and outside of M.S duly powder coated with a front door having glass window to inspect the samples inside the chamber",
            },
            {
                itemId: 23,
                name: "Seed Germinator",
                photo: images.SeedGerminator,
                description: "eed Germinator which is useful for seed testing, biological studies, forestry research work, Plant Pathology etc.",
            },
        ]

    },
    {
        itemId: 4,
        name: "Lab Furnitures",
        photo: images.LaboratoryWorkBenches,
        products: "8",
        url: '4). Lab Furnitures',
        items: [
            {
                itemId: 1,
                name: "Chemical Storage Cabinet",
                photo: images.ChemicalStorageCabinet,
                description: "Sai Suraksha – Nagar Amausi",
            },
            {
                itemId: 2,
                name: "Fume Cupboard Portable Type",
                photo: images.FumeCupboardPortableType,
                description: "Sai Suraksha – Nagar Amausi",
            },
            {
                itemId: 3,
                name: "Fume Hood",
                photo: images.FumeHood,
                description: "Sai Suraksha – Nagar Amausi",
            },
            {
                itemId: 4,
                name: "Laboratory Safety Fitting",
                photo: images.LaboratorySafetyFitting,
                description: "Sai Suraksha – Nagar Amausi",
            },
            {
                itemId: 5,
                name: "Laboratory Sink and Drip Cups",
                photo: images.LaboratoryShinkandDripCups,
                description: "Sai Suraksha – Nagar Amausi",
            },
            {
                itemId: 6,
                name: "Laboratory Storage System",
                photo: images.LaboratoryStorageSystem,
                description: "Sai Suraksha – Nagar Amausi",
            },
            {
                itemId: 7,
                name: "Laboratory Work Benches",
                photo: images.LaboratoryWorkBenches,
                description: "Sai Suraksha – Nagar Amausi",
            },
            {
                itemId: 8,
                name: "Laboratory Work Tops",
                photo: images.LaboratoryWorkTops,
                description: "Sai Suraksha – Nagar Amausi",
            }
        ]

    },
]

const clients = [
    {
        id: 1,
        clientId: 'OW-001',
        name: 'Gajendra Singh',
        icon: images.Gajendrasingh,
        phone: "+91 9453405194",
        des: 'HOD'
    },
    {
        id: 2,
        clientId: 'OW-002',
        name: 'Atul Yadav',
        icon: images.Atul,
        phone: "+91 70548 45555",
        des: 'Founder & Director'
    },
    {
        id: 3,
        clientId: 'OW-003',
        name: 'Vishal Singh',
        icon: images.Vishal,
        phone: "+91 90444 12642",
        des: 'Director'
    },
    {
        id: 4,
        clientId: 'CI-004',
        name: 'Vinay Sony',
        icon: images.sony,
        phone: "+91 91102 94749",
        des: 'Senior Marketing Associates'
    },
    {
        id: 5,
        clientId: 'CI-005',
        name: 'Mahendra Yadav',
        icon: images.mahendra,
        phone: "+91 9005184983",
        des: 'Senior Marketing Advisor'
    },
    {
        id: 6,
        clientId: 'CI-006',
        name: 'Ritesh Kumar',
        icon: images.ritesh,
        phone: "+91 9935119888",
        des: 'Senior Marketing Advisor'
    },
    {
        id: 7,
        clientId: 'CI-007',
        name: 'Rupak Yadav',
        icon: images.Rupak,
        phone: "+91 8172852888",
        des: 'Senior Marketing Advisor'
    },
    {
        id: 8,
        clientId: 'CI-008',
        name: 'Shailendra Dwivedi',
        icon: images.Shailendra,
        phone: "+91 6386707808",
        des: 'Senior Marketing Advisor'
    },
    {
        id: 9,
        clientId: 'CI-009',
        name: 'Pradeep Kushwaha',
        icon: images.pardeepkushwaha,
        phone: "+91 8181854414",
        des: 'Senior Marketing Advisor'
    },
    {
        id: 10,
        clientId: 'CI-010',
        name: 'Sukhnand Pandey',
        icon: images.Sukhnandpandey,
        phone: "+91 99866 88747",
        des: 'Senior Marketing Advisor'
    },
    {
        id: 11,
        clientId: 'CI-011',
        name: 'Ashok Kumar',
        icon: images.Ashokkumar,
        phone: "+91 9519146461",
        des: 'Senior Marketing Associates'
    },
    {
        id: 12,
        clientId: 'CI-012',
        name: 'Subodh Pandey',
        icon: images.Subodh,
        phone: "+91 93054 56759",
        des: 'Senior Marketing Associates'
    },
    {
        id: 13,
        clientId: 'CI-013',
        name: 'Parbhat pandey',
        icon: images.prabhatpandey,
        phone: "+91 9450611110",
        des: 'Senior Legal Advisor'
    },
    {
        id: 14,
        clientId: 'CI-014',
        name: 'Abhishek Yadav',
        icon: images.Abhishek,
        phone: "+91 9936660555",
        des: 'Marketing & Legal Advisor'
    },
    {
        id: 15,
        clientId: 'CI-015',
        name: 'Pradeep Yadav',
        icon: images.predeepyadav,
        phone: "+91 9580262655",
        des: 'Senior Marketing Advisor & Constructor'
    },
    {
        id: 16,
        clientId: 'CI-016',
        name: 'Anil Yadav',
        icon: images.Anilyadav,
        phone: "+91 9149860469",
        des: 'Marketing Advisor'
    },
    {
        id: 17,
        clientId: 'CI-017',
        name: 'Pradeep rajput',
        icon: images.pradeep,
        phone: "+91 7080761644",
        des: 'Marketing Advisor'
    },
    {
        id: 18,
        clientId: 'CI-018',
        name: 'Chandresh Gupta',
        icon: images.chandresh,
        phone: "+91 9721508850 ",
        des: 'Finance Advisor'
    },
    {
        id: 19,
        clientId: 'CI-019',
        name: 'Vipin Kanojiya',
        icon: images.vipin,
        phone: "+91 6394266274",
        des: 'Marketing Associates'
    },
    {
        id: 20,
        clientId: 'CI-020',
        name: 'Dilip Mishra',
        icon: images.Dilip,
        phone: "+91 8077621079",
        des: 'Marketing Associates'
    },
    {
        id: 21,
        clientId: 'CI-021',
        name: 'DR. A K MISHRA',
        icon: images.Akmishra,
        phone: "+91 9919194437",
        des: 'Marketing Associates'
    },
    {
        id: 22,
        clientId: 'CI-022',
        name: 'Kiran Pramod',
        icon: images.Kiran,
        phone: "+91 7888674088",
        des: 'Marketing Associates'
    },
    {
        id: 23,
        clientId: 'CI-023',
        name: 'Pankaj Yadav',
        icon: images.PankajYadav,
        phone: "+91 8299324894",
        des: 'Marketing Associates'
    },
    {
        id: 24,
        clientId: 'CI-024',
        name: 'Pravesh Kumar',
        icon: images.pravesh,
        phone: "+91 7905781488",
        des: 'Marketing Associates'
    },
    {
        id: 25,
        clientId: 'CI-025',
        name: 'Pushpendra Verma',
        icon: images.Pushpendra,
        phone: "+91 7355148998",
        des: 'Marketing Associates'
    },
    {
        id: 26,
        clientId: 'CI-026',
        name: 'RAMU RATHOR',
        icon: images.Ramu,
        phone: "+91 9305158653",
        des: 'Marketing Associates'
    },
    {
        id: 27,
        clientId: 'CI-027',
        name: 'Santosh Verma',
        icon: images.Santoshverma,
        phone: "+91 7784875302",
        des: 'Marketing Associates'
    },
    {
        id: 28,
        clientId: 'CI-028',
        name: 'Pankaj Shukla',
        icon: images.Pankaj,
        phone: "+91 7607155001",
        des: 'Marketing Associates'
    },
    {
        id: 29,
        clientId: 'CI-029',
        name: 'Sourabh Shukla',
        icon: images.Sourabhshukla,
        phone: "+91 7505322304",
        des: 'Marketing Associates'
    },
    {
        id: 30,
        clientId: 'CI-030',
        name: 'Vishwajeet Mishra',
        icon: images.vishwajeet,
        phone: "+91 9026952401",
        des: 'Marketing Associates'
    },
    {
        id: 31,
        clientId: 'CI-031',
        name: 'Avneesh dwivedi',
        icon: icons.user,
        phone: "+91 9650073668",
        des: 'Marketing Associates'
    },
    {
        id: 32,
        clientId: 'CI-032',
        name: 'Sonu Verma',
        icon: images.sonuverma,
        phone: "+91 9936375305 ",
        des: 'Marketing Associates'
    },
    {
        id: 33,
        clientId: 'CI-033',
        name: 'Krishna Pandey',
        icon: images.Krishnapandey,
        phone: "+91 9616918699",
        des: 'Marketing Associates'
    },
    {
        id: 34,
        clientId: 'CI-034',
        name: 'Deepak Kumar',
        icon: images.deepakkumar,
        phone: "+91 8318127661",
        des: 'Senior Marketing Advisor'
    },
    {
        id: 35,
        clientId: 'CI-035',
        name: 'Sandeep Verma',
        icon: images.Sandeepverma,
        phone: "+91 8564818588",
        des: 'Marketing Associates'
    },
    {
        id: 36,
        clientId: 'CI-036',
        name: 'Ankit Dubey',
        icon: images.Ankitduby,
        phone: "+91 7985657570",
        des: 'Marketing Associates'
    },
    {
        id: 37,
        clientId: 'CI-037',
        name: 'Sachin Yadav',
        icon: images.sachinyadav,
        phone: "+91 6386283994",
        des: 'Marketing Associates'
    },
    {
        id: 38,
        clientId: 'CI-038',
        name: 'Sandeep Yadav',
        icon: images.Sandeepyadav,
        phone: "+91 8318521931",
        des: 'Marketing Associates'
    },
    {
        id: 39,
        clientId: 'CI-039',
        name: 'Priyanshi singh',
        icon: icons.user,
        phone: "+91 6393163878",
        des: 'Backend'
    },
    {
        id: 40,
        clientId: 'CI-040',
        name: 'Anjali Prajapati',
        icon: icons.user,
        phone: "+91 9529649966",
        des: 'Backend'
    },
    {
        id: 41,
        clientId: 'CI-041',
        name: 'Kajal Yadav',
        icon: icons.user,
        phone: "+91 9519659966",
        des: 'Backend'
    },
    {
        id: 42,
        clientId: 'CI-042',
        name: 'Mahesh sharma',
        icon: icons.user,
        phone: "+91 9336611509",
        des: 'Backend'
    }
]


const agents = [
    {
        id: 1,
        clientId: 'OW-002',
        name: 'Atul Yadav',
        icon: images.Atul,
        phone: "+91 70548 45555",
        des: 'Founder & Director'
    },
    {
        id: 2,
        clientId: 'OW-003',
        name: 'Vishal Singh',
        icon: images.Vishal,
        phone: "+91 90444 12642",
        des: 'Director'
    }
]


const corouselData = [{
    title: 'Anise Aroma Art Bazar',
    url: 'https://i.ibb.co/Yp3cRW5/wal1.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1

},
{
    title: 'Food inside a Bowl',
    url: 'https://i.ibb.co/Y7h225H/wal2.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2
},
{
    title: 'Vegatable Salad',
    url: 'https://i.ibb.co/txtVRPq/wal3.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3
}]

export { restaurantData, categoryData, initialCurrentLocation, clients, agents, corouselData };