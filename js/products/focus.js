var navData = navtemplate({
    title: 'Focus',
    product: 'yes'
});

document.getElementById("navigationbar").innerHTML += navData;


var productTemplate = Handlebars.templates['producttypethree'];
var productData = productTemplate({
    
    productTitle: 'Focus' ,
    productSubtitle: 'Acquire Images from Scopy Machines',
    productOverview: 'Acquiring single frame and multi frame images from both DICOM and non-DICOM images from Scopy machines for storage, analysis and distribution',
    productLogoUrl: '../img/products/focus/focus-logo.jpg',
    keyfeatures: [
        "Intuitive editing of multiframe(cine loop)",
        "Template based reporting with images and reports",
        "Distribution through CD, pendrive ",
        "Image transfer to any PACS"
    ],
    briefFeatures: [
        {
            featureTitle: "Adding  Patient Information",
            featureDescription: "Allows to add patient information through DICOM / Direct Manual entry",
            images: [
                "../img/products/focus/1.jpg"
            ]
        },
        
        {
            featureTitle: "Adding  Study",
            featureDescription: "Allows to add study information through DICOM / Direct Manual entry",
            images: [
                "../img/products/focus/2.jpg"
            ]
        },

        {
            featureTitle: "Multiple Studies",
            featureDescription: " Ability to link multiple studies of a patient",
            images: [
                "../img/products/focus/3.jpg"
            ]
        },

        {
            featureTitle: "Image Acquisiton",
            featureDescription: " Allows to acquire single frames and sequences from Non-DICOM and DICOM images. Presets and footswitch integration enabled.",
            images: [
                "../img/products/focus/4.jpg"
            ]
        },

        {
            featureTitle: "Image Manipulation - Single Frame Images and Cineloops",
            featureDescription: `Option to change brightness / contrast, Draw line, circle etc., zoom / pan, foot notes, tagging key images. For Cine loops - option to play & edit sequences, rotate/flitp, export with MPEG compression.`,
            images: [
                "../img/products/focus/5.jpg"
            ]
        },

        {
            featureTitle: "Reporting",
            featureDescription: `Ability to have multiple report templates for each study, user defined customizable templates,  customizable report header, drag and drop images for reporting, important reference images in text layout.`,
            images: [
                "../img/products/focus/6.jpg"
            ]
        },

        {
            featureTitle: "Report Distribution",
            featureDescription: "Reports can be written on a CD / saved to Disk / Printed on plain/pre-printed stationary /e-mailed / exported to Power-point. Images can be exported in multiple formats and saved on disk.",
            images: [
                "../img/products/focus/7-1.jpg",
                "../img/products/focus/7-2.jpg",
                "../img/products/focus/7-3.jpg"
            ]
        },

        {
            featureTitle: "QUERY Facility",
            featureDescription: "Ability to query based on key image, gender, type, referral doctor, key notes, study date, study type available.",
            images: [
                "../img/products/focus/8.jpg"
            ]
        }

    ]


});

$( "#navigationbar" ).after(productData);