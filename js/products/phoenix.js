var navData = navtemplate({
    title: 'Phoenix',
    product: 'yes'
});

document.getElementById("navigationbar").innerHTML += navData;


var productTemplate = Handlebars.templates['producttypetwo'];
var productData = productTemplate({
    
    productTitle: 'Phoenix' ,
    productSubtitle: `Powerful, Intuitive DICOM Conversion and Import tool.`,
    productOverview: `Phoenix is a PACS accessory – a  software application that converts secondary captured non-DICOM images into DICOM images and transfers converted images to a DICOM server. It also has the functionality to associate the scanned images or reports with the patient study data.`,
    productLogoUrl: '../img/products/phoenix/phoenix-logo.jpg',
    keyfeatures: [
        "It helps capture images from any Non-DICOM modality and convert it to DICOM format",
        "Phoenix converts JPEG , BMP, AVI to DICOM",
        "Converts scanned documents and digitized film to DICOM",
        "Integrates with any PACS ",
        "Query Patient information from any DICOM modality or DICOM server or DICOM Workstation or Modality worklist server.",
        "Search parameters include patient ID, Name Sex, Study Date, Accession Number and Modality",
        "Capture Images/ Cine loops from Non DICOM modality",
        "Import images – jpeg, bmp, AVI and DICOM images ",
        "Scan reports and documents",
        "Import images from digital camera",
        "Import digitized film from Film Digitizer (VIDAR)",
        "DICOM conversion – Convert captured images & documents into DICOM 3.0 format and send to DICOM server",
        "DICOM DIR – Store images locally or write DICOM Dir",
        "Review and select – Review images before DICOM-izing them",
        "Burn CD/DVD with embedded  DICOM viewer"
    ],
    images: [
        "../img/products/phoenix/1.jpg"
    ]
   


});

$( "#navigationbar" ).after(productData);