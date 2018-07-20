
    
var myMap = new Datamap({
  element: document.getElementById("worldMap"),
  responsive: true,
  projection: 'mercator',
  fills: {
    defaultFill: "#ABDDA4",
    productsUsedIn: "#3273DC"
  },
  data: {
    USA: { fillKey: "productsUsedIn" },
    AUS: { fillKey: "productsUsedIn" },
    BEL: { fillKey: "productsUsedIn" },
    BRA: { fillKey: "productsUsedIn" },
    CAN: { fillKey: "productsUsedIn" },
    COL: { fillKey: "productsUsedIn" },
    HRV: { fillKey: "productsUsedIn" },
    DOM: { fillKey: "productsUsedIn" },
    FRA: { fillKey: "productsUsedIn" },
    HKG: { fillKey: "productsUsedIn" },
    IND: { fillKey: "productsUsedIn" },
    IDN: { fillKey: "productsUsedIn" },
    ISR: { fillKey: "productsUsedIn" },
    ITA: { fillKey: "productsUsedIn" },
    KEN: { fillKey: "productsUsedIn" },
    LBN: { fillKey: "productsUsedIn" },
    MYS: { fillKey: "productsUsedIn" },
    NPL: { fillKey: "productsUsedIn" },
    OMN: { fillKey: "productsUsedIn" },
    PNG: { fillKey: "productsUsedIn" },
    POL: { fillKey: "productsUsedIn" },
    SAU: { fillKey: "productsUsedIn" },
    SGP: { fillKey: "productsUsedIn" },
    ZAF: { fillKey: "productsUsedIn" },
    TUR: { fillKey: "productsUsedIn" },
    ARE: { fillKey: "productsUsedIn" },
    GBR: { fillKey: "productsUsedIn" },
    URY: { fillKey: "productsUsedIn" } 
  }
});

$(window).on('resize', function() {
    myMap.resize();
 });