var navData = navtemplate({
    title: 'Stream',
    product: 'yes'
});

document.getElementById("navigationbar").innerHTML += navData;


var productTemplate = Handlebars.templates['producttypetwo'];
var productData = productTemplate({
    
    productTitle: 'Stream' ,
    productSubtitle: 'Worklist Generator',
    productOverview: `It functions as a front office application and patient study data can be entered .  Patient Study data entered here is used for scheduling the modalities and the physicians/Technicians need not enter this data at modality console again avoiding costly data entry errors, and also helps physicians/Technicians to perform more number of studies at each modality with extra time available.`,
    productLogoUrl: '../img/products/stream/stream-logo.png',
    keyfeatures: [
        "Auto generate patient ID – Customizable to each imaging facility",
        "Track patient visits and scans for different modalities",
        "Compatible with any DICOM modality that supports worklist query",
        "Schedule patient studies",
        "Compatible with DICOM converters for non-DICOM modalities, that support querying from a worklist server",
        "Location indicator for multiple modalities (Eg: CT in room1, CT in room 2, etc)",
        "Gender based validation of study data. (Eg:User will not be allowed to select Obstetrics study for a male patient)",
        "Easy data re-mapping through multiple search options",
        "Security logs for tracking errors"
    ],
    images: [
        "../img/products/stream/1.png"
    ]
   


});

$( "#navigationbar" ).after(productData);