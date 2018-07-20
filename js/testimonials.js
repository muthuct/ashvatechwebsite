var navData = navtemplate({
    title: 'Testimonials'
});
console.log(navData);
document.getElementById("navigationbar").innerHTML += navData;


var texts = [

    `
    Edge PACS has proven to be as powerful as PACS systems costing 10 times as much. The ability to access the system through a diagnostic quality web based viewer has allowed us to read our studies from anywhere in the world. Ashvatech has stood behind their product. Their engineers have worked closely with us to customize the system to our specific needs. This type of close relationship cannot be found with other large PACS companies. We look forward to a long relationship with this company.
    `,

    `
    This EDGE PACS software is so easy to use, all the techs love it! Being able to burn CD's so quickly and having  all of the images for patients in one location is such a timesaver. It is what we have been looking for.
    `,

    `
    We use RADiON software from Ashva in our Imaging Institute for networking and remote reporting, including   wireless connections on laptop. The software is integrated with SIEMENS MAGNETOM C! (0.35 T OPEN MRI) and   SIEMENS EMOTION (Advanced Single Slice Spiral CT). Our Ultrasound system uses iMagic from the same company, and recommend these softwares to other Imaging Institutes.
    `, 

    `
    We are a mobile ultrasound and nuclear image provider. With our wide base of clients and range of equipment,implementation of the Radion Workstation into our work flow is a critical part of our service to several   customers. Radion is easy to use AND reliable.
    `,

    `
    Using the magnification tool of the EdgePACS viewer, I was quickly able to detect a non displaced fracture that was not palpable and not immediately recognizable on the CR viewer.
    `,

    `
    I have been extremely satisfied with both the level of attention received from both the team in India as well   as the team located in the USA office. When problems arise they are dealt with in a quick manner or there is some indication as to a timeline, though I have experienced very few problems. Keep up the excellent work on a wonderful product.
    `,

    `
    We have used Phoenix Digitizing software at our facility for several years without any problems. The product is simple to use and very reliable. I would recommend it to anyone that has a high volume of films to digitize on  a regular basis.
    `,

    `
    Ashva Technologies have installed their image management software iMagic with our SEQUOIA machine. All features built-in with this software are flexible and comfortable for our DICOM and Non DICOM operations. We are satisfied with the support and modifications provided by Ashva and strongly suggest iMagic as a part of your DICOM or Non DICOM Ultrasound / Color Doppler Machine.
    `,

    `
    We're using the image management software iMagic from Ashva Technologies Pvt. Ltd. This software is very easy to operate and has advanced features that help us generate our daily reports of Ultrasound scans. The service from Ashva is very good and the software is very sturdy and reliable.
    `,
    
    `
    Before we installed our PACS, we used to destroy a number of images due to storage constraints. But now, we can store all the data on our server and access them even after one month.
    `
];
var authors = [
    "Dr. Patel, Radiology Associates of Northern Indiana, Indiana",
    "Travis, Assistant Manager, Veterinary Technician, Blue Sky Animal Hospital, MN",
    "Dr. Amel Anthony, MD, DNB, MNAMS, Consultant Radiologist, Institute of Radiology & Imaging Sciences",
    "David Look, Chief Information Officer, Diagnostic Health Services, Addison, TX 75001",
    "Dr. Jeff Johnson, DVM, Blue Sky Animal Hospital,MN",
    "Daniel E. Cronk, PACS Admin, U of MN, Vet Hospital",
    "Brett Guthrie RT(R) PACS Administrator, North Fulton Hospital",
    "Dr. Vikas Kohli, MD, FAAP, FACC, Senior Consultant Pediatric Cardiology",
    "Dr.Umesh K., MD.DMRD., Consultant Radiologist & Sonologist",
    "Dr. B.M. Mahesh, Consultant Radiologist, Vikram Hospital, Mysore"
];


$("document").ready(function() {
    console.log("ins1");
    var i = 0;
    var j = 0;
    (function runIt() {
        i++;
        $('#quotes').fadeOut(8500, function() {
            console.log("ins2");
            $('#quotes').html(texts[i % texts.length]);
            $('#quotes').fadeIn(8500, function() {
                runIt()
            });
        });
    }());

    (function runAuthor() {
        j++;
        $('#feedback-client').fadeOut(8500, function() {
            console.log("ins3");
            $('#feedback-client').html(authors[j % texts.length]);
            $('#feedback-client').fadeIn(8500, function() {
                runAuthor()
            });
        });
    }());
});