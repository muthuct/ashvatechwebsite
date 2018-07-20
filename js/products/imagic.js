var navData = navtemplate({
    title: 'Magic',
    product: 'yes'
});

document.getElementById("navigationbar").innerHTML += navData;



var productTemplate = Handlebars.templates['producttypethree'];
var productData = productTemplate({
    
    productTitle: 'iMagic' ,
    productSubtitle: 'Acquire images from Ultrasound machine for post processing',
    productOverview: 'Acquiring  images from both DICOM and non-DICOM images from ultrasound machines for storage, analysis and distribution',
    productLogoUrl: '../img/products/imagic/imagic-logo.png',
    keyfeatures: [
        "Intuitive viewing and post processing of images",
        "Template based reporting with images and reports",
        "Distribution through CD, pendrive ",
        "Image transfer to any PACS"
    ],
    briefFeatures: [
        {
            featureTitle: "Adding  Patient Information",
            featureDescription: "Allows to add patient information through DICOM / Direct Manual entry",
            images: [
                "../img/products/imagic/1.png"
            ]
        },
        
        {
            featureTitle: "Adding  Study",
            featureDescription: "Allows to add study information through DICOM / Direct Manual entry",
            images: [
                "../img/products/imagic/2.png"
            ]
        },

        {
            featureTitle: "Image Acquisistion",
            featureDescription: "Allows to acquire single frames and sequences from Non-DICOM and DICOM images. Presets and footswitch integration enabled.",
            images: [
                "../img/products/imagic/3.jpg"
            ]
        },

        {
            featureTitle: "Image Manipulation - Single Frame Images and sequences",
            featureDescription: `Thumbnail display of single frames and sequences.
            Play sequences in continuous / frame by frame mode. 
            Extract single frames from sequences.
            Edit sequences for user-defined playback options.`,
            images: [
                "../img/products/imagic/4.png"
            ]
        },

        {
            featureTitle: "Reporting",
            featureDescription: `User-defined customizable report templates.
            Multiple report templates for each study.
            Drag and drop images for reporting.
            Insert important reference images in text layout.
            User-defined tabular forms for measurements and biometry reporting.`,
            images: [
                "../img/products/imagic/5.png"
            ]
        },

        {
            featureTitle: "Report Distribution",
            featureDescription: "Reports can be written on a CD / saved to Disk / Printed on plain/pre-printed stationary /e-mailed / exported to Power-point. Images can be exported in multiple formats and saved on disk.",
            images: [
                "../img/products/imagic/6-1.jpg",
                "../img/products/imagic/6-2.jpg"
            ]
        },

        {
            featureTitle: "Reporting",
            featureDescription: "Ability to query based on key image, gender, type, referral doctor, key notes, study date, study type available.",
            images: [
                "../img/products/imagic/7.jpg"
            ]
        }

    ]


});

$( "#navigationbar" ).after(productData);