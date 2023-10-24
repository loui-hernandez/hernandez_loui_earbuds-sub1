(() => {
    //console.log("IIFE Fired");
    //variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const infoBoxes = [{
      title: "Noise-cancelling speakers" ,
      text: "Great wireless earbuds are increasingly being made with active noise reduction as a meanly feature, it will generate can a more tranquil environment and makes your favorite music easier to listen.",
    //   image: "images/path"
    }
    ,{
        title: "Rock and Roll All Night - Logo",
        text: "Rock Revolution Logo, after all you should show how passionate you are for you favorite music genre."
    },{
      title: "The Most Comfortable Earbuds Base",
      text:"With Rock Revolution you have variety of options, with five different sets of ear tips in varying sizes so you can choose the one that fits better for you."
    },{
      title: "The Best Sound",
      text: "It is like you are in a soundstage, Rock Revolution Earbuds includes features where you can adjust your sound levels."
    }
  ]
  
    //functions
    function modelLoaded() {
      //console.log(hotspots);
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function loadInfo(){
  
      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index+1}`);
        // console.log(selected);
        const titleItem = document.createElement("h2");
        const textItem = document.createElement("p");
  
        titleItem.textContent = infoBox.title;
        textItem.textContent = infoBox.text;
  
        selected.appendChild(titleItem);
        selected.appendChild(textItem);
  
      // Texcontent
      // Appendchild
  
      // console.log(infoBox.title);
      // console.log(infoBox.text);
    })
  }
  
    loadInfo();
  
  
    function showInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //Event Listener
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();
  

  
  // In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.