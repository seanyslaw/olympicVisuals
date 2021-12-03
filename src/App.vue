<template>
  <div>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main>
      


      <v-img src="./assets/Globe.png">
        
        
        <v-img contain 
          class="radialGraph" 
          src="./assets/radial.png"
          max-height="250"
          max-width="500">

        </v-img>
        <v-img contain 
          class="streamGraph" 
          src="./assets/streamGraph.png"
          max-height="250"
          max-width="350">

        </v-img>

        <v-img contain 
          class="medalLeader" 
          src="./assets/athlete.png"
          max-height="250"
          max-width="500">

        </v-img>
        
        
        
      
        <div class="globeTitle">
        {{"Total Medals in Summer Olympic Games (2016)"}}
        </div>
        
        <div class="title">
          {{"OLYMPIC VISUALS"}} <br>
          {{"GROUP 4"}}
        </div>
        
        <div class="radialTitle">
          {{"trend of gold Medals across Olympic Games"}}
        </div>

        <div class="streamTitle">
          {{"Number of athletes for TOP10 medal winning countries"}}
        </div>

        <div class="medalLeaderTitle">
          {{"TOP10 dominant gold medal winners in olympic history"}}
        </div>
        
        <div class="wordCloudTitle">
          {{"Keywords mentioned during 2020 Tokyo Olympics"}}
        </div>

        <div class="treeTitle">
          {{"Most Engaged regions for Tokyo Olympics on Twitter"}}
        </div>
        
        <v-btn href="https://sttraveller.github.io/Olympic-Globe/" class="externalGlobe">{{"View to Entire Globe"}}</v-btn>
        
        
        
      </v-img>
      <v-img contain 
          class="wordCloud" 
          src="./assets/twitter.png"
          max-height="250"
          max-width="500">

        </v-img>
        <v-img contain 
          class="treeGraph" 
          src="./assets/regionalEngagement.png"
          max-height="250"
          max-width="370">

        </v-img>

        <v-img contain 
          class="legend" 
          src="./assets/legend_trans.png"
          max-height="250"
          max-width="370">

        </v-img>

        
    </v-main>

  </div>
  
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    greet : "HelloWorld",
    datestamp: "",
    timestamp: "",
    secondstamp: "",
    cnValidShow: "",
    engValidShow: "",
    //
  }),

  created() {setInterval(this.getNow, 1000);},

  methods: {
    getNow: function(){
      const today = new Date();
      this.datestamp = today.getFullYear()+' '+(today.getMonth()+1)+' '+today.getDate();
      this.timestamp = today.getHours() + "" + today.getMinutes();
      this.secondstamp = today.getSeconds();
      this.cnValidShow = (this.secondstamp % 2)
      this.engValidShow = ((this.secondstamp + 1) % 2)
    }
  }
};
</script>

<style lang="scss">
  .title{
    position: absolute;
    font-family: 'Bebas Neue', cursive;
    font-size: 70px;
    text-align: right;
    color: white;
    top: 0px;
    right: 0px;
  }

  .globeTitle{
    position: absolute;
    font-family: 'Bebas Neue', cursive;
    font-size: 40px;
    text-align: center;
    color: white;
    left: 425px;
    top: 0px;
  }

  .radialTitle{
    position: absolute;
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    text-align: center;
    color: white;
    left: 45px;
    top: 10px;
  }

  .streamTitle{
    position: absolute;
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    text-align: center;
    color: white;
    left: 15px;
    top: 285px;
  }

  .medalLeaderTitle{
    position: absolute;
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    text-align: center;
    color: white;
    left: 15px;
    top: 530px;
  }

  .wordCloudTitle{
    position: absolute;
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    text-align: center;
    color: white;
    left: 1075px;
    top: 255px;
  }

  .treeTitle{
    position: absolute;
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    text-align: center;
    color: white;
    left: 1065px;
    top: 535px;
  }

  .backgroundLeft{
    align-self: left;
  }

  .externalGlobe{
    font-family: 'Bebas Neue', cursive;
    position: absolute;
    top: 0px;
    left: -80px;
    // color: black;
  }

  .wordCloud{
    position: absolute;
    top: -540px;
    left: 990px;
  }

  .treeGraph{
    position: absolute;
    top: -510px;
    left: 1060px;
  }
  
  .radialGraph{
    position: absolute;
    top: 30px;
    left: -780px;
  }

  .streamGraph{
    position: absolute;
    top: 55px;
    left: -705px;
  }

  .medalLeader{
    position: absolute;
    top: 85px;
    left: -780px;
  }

  .legend{
    position: absolute;
    top: -745px;
    left: 790px;
  }

  

  .renderDate{
    position: absolute;
    top: 281px;
    left: -75px;
    width: 320px;
    font-family: 'Mulish', sans-serif;
    font-size: 20px;
    font-weight: 900;
    color: #333333;
    line-height: 1.2em;
    text-align: center;
  }

  .renderName{
    position: absolute;
    top: 340px;
    left: 90px;
    width: 320px;
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    font-weight: 900;
    color: #333333;
    line-height: 1.2em;
    text-align: center;
  }

  .renderPic{
    position: absolute;
    top: 105px;
    left: 157px;
  }  

  .renderCnValid{
    position: absolute;
    top: 510px;
    left: 32px;
    width: 310px;
    font-family: 'Mulish', sans-serif;
    font-size: 30px;
    text-align: center;
    background-color: #0074bc;
    color: white;
  }
  .renderEngValid{
    position: absolute;
    top: 510px;
    left: 32px;
    width: 310px;
    font-family: 'Mulish', sans-serif;
    font-size: 30px;
    text-align: center;
    border-width: 0.01mm;
    border-style: solid;
    border-color: #0074bc;
    color: #0074bc;
  }

  // body{
  //   overflow: hidden;
  //   height: 100vh;
  // }
</style>
