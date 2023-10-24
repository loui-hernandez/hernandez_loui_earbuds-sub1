// console.log("JS is Fire!");

(() => {

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const infoBoxes = [
      {
        images: ["images/mic.png"],
        title: "Outer Mic",
        text: "Experience crystal-clear calls and voice commands with the advanced Outer Mic technology in our Samsung ear-pods. The strategically positioned microphone ensures noise reduction, allowing you to communicate effortlessly even in bustling environments. Stay connected and communicate with impeccable clarity.",
      },
      {
        images: ["images/air-flow.png"],
        title: "Air Vents",
        text: "Our Beans Pro feature innovative Air Vents that offer an exceptional listening experience. These vents allow for controlled airflow, resulting in balanced audio and preventing the uncomfortable sensation of pressure buildup. Enjoy music that feels natural and immersive with every beat."
      },
      {
        images: ["images/battery.png"],
        title: "Fast Charging Ports",
        text: "Never miss a beat with our Beans Pro' Fast Charging Ports. Boasting lightning-fast charging capabilities, you can enjoy hours of your favorite music with just a few minutes of charging. Keep the rhythm alive and your ear-pods ready to roll at all times."
      },
      {
        images: ["images/sensor.png"],
        title: "Sensor",
        text: "Elevate your interaction with your ear-pods through intelligent Sensor technology. Our Beans Pro are equipped with responsive sensors that recognize your touch, enabling you to play or pause music, answer calls, and more with a simple gesture. Seamlessly control your audio experience at your fingertips."
      },
      {
        images: ["images/mic2.png"],
        title: "Inner Mic",
        text: "Precision and clarity are at the core of our Beans Pro Inner Mic. Designed to capture your voice with the utmost accuracy, this microphone ensures your calls are as clear as if you were speaking face-to-face. Stay connected and engage in conversations with pristine sound quality."
      }
    ]
  
  
  
    //functions
  
    function modelLoaded() {
      // console.log(hotspots);
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function loadInfo() {
      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index + 1}`);
  
        //image
        
        if (infoBox.images && infoBox.images.length > 0) {
          infoBox.images.forEach(imagePath => {
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            selected.appendChild(imgElement);
          });
        }
  
        // title
        const h2Element = document.createElement('h2');
        h2Element.textContent = infoBox.title;
  
        selected.appendChild(h2Element);
    
        //text
        const pElement = document.createElement('p');
        pElement.textContent = infoBox.text;
  
        selected.appendChild(pElement);
  
      
      });
    }
    
  
    loadInfo();
  
    function showInfo() {
  
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
  
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
  