Vue.component("flowerbox", {
  data: function () {
    return {
      func: function (data) {
        console.log(data);
      },
      cardArray: [
        {
          flowerName: "Rose",
          flowerDesc: "you know what a rose is, if not you're lonley",
          imgSrc: "../../assets/Rose.png",
          colors: ["red", "pink", "white"],
        },
        {
          flowerName: "Blossom",
          flowerDesc: "that stuff that appears on the trees in March",
          imgSrc: "../../assets/blossom.png",
          colors: ["pink", "white"],
        },
        {
          flowerName: "Gerbella Daisy",
          flowerDesc: "South African daisy known for its bold bright colours",
          imgSrc: "../../assets/daisy.png",
          colors: ["pink", "red", "orange"],
        },
        {
          flowerName: "Tulips",
          flowerDesc:
            "A uniquly shaped flower known for signalling the arrival of spring.",
          imgSrc: "../../assets/tulips.png",
          colors: ["pink", "red", "orange"],
        },
        {
          flowerName: "Dahlias",
          flowerDesc:
            "A bold flower that thrives in the shade and last extremly long",
          imgSrc: "../../assets/dahlies.png",
          colors: ["pink red white"],
        },
        {
          flowerName: "Marigold",
          flowerDesc:
            "A small gold flower symbolizing wealth and desire for success",
          imgSrc: "../../assets/marigold.png",
          colors: ["yellow"],
        },
        {
          flowerName: "Orchids",
          flowerDesc: "A stunning unique flower symbolizing health and love",
          imgSrc: "../../assets/orchid.png",
          colors: ["purple", "red", "blue"],
        },
        {
          flowerName: "Iris",
          flowerDesc: "Be careful or this flower will eat your face. ",
          imgSrc: "../../assets/iris.png",
          colors: ["purple", "blue"],
        },
      ],
    };
  },

  template: `<div class = 'container'>
        <span v-for = 'card in cardArray' >
            <div class = 'flowerCard'>
                <img :src = "card.imgSrc">
                <h2 class = 'flowerName'>{{card.flowerName}}</h2>
                <p class = 'flowerDesc'>{{card.flowerDesc}}</p>
                <div class = "color-box">
                    <span class = "circle" v-for = "color in card.colors" v-bind:style = "{ backgroundColor : color }" ></span>

                </div>
            </div>
        </span> 
     </div>`,
});

Vue.component("app-filter", {
  data: function () {
    return {
      colour: function () {
        return "<span>Colour</span>";
      },
      testVar: "some words",
      colour: "red",
    };
  },
  template: `<div> <p>Filter tag</p></div>`,
});

new Vue({
  el: "#app",
  data: {
    name: "Sean",
  },
});
