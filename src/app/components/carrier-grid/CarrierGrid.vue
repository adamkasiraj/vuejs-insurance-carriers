<template>
  <div class="container py-5">

    <!-- Results Info Row -->
    <div class="row py-3">
      <div class="col-12 text-center">
        <p> You just compared <b> {{ carriersSearched }} rates </b> in {{ searchTime | convertSecstoMins }} minutes! </p>
      </div>
    </div>

    <!-- Sorting Row -->
    <div class="row row-sorter justify-content-center">
      <div class="col-12">
        <div class="p-3 bg-white text-white border mb-3 d-flex">

          <!-- Sort By Category -->
          <div class="input-group input-group-sm sort">
            <div class="input-group-prepend mr-auto">
              <button class="btn btn-secondary btn-toggle btn-sm" :class="{active:sortBy === 'alphabetical'}" @click="sortAlphabetical()" > A to Z  </button>
              <button class="btn btn-secondary btn-sm" :class="{active:sortBy === 'price'}" @click="sortPrice()"> Price </button>
              <button class="btn btn-secondary btn-sm" :class="{active:sortBy === 'rating'}" @click="sortRating()" > Rating  </button>
            </div>
          </div>

          <!-- Sort By View -->
          <div class="input-group input-group-sm sort d-none d-md-flex">
            <div class="input-group-append ml-auto">
              <button class="btn btn-secondary btn-sm" :class="{active:cardView === 'list'}" @click="toggleView()" >
                <svgicon color="white" icon="IconListView" height="14" ></svgicon>
              </button>
              <button class="btn btn-secondary btn-sm" :class="{active:cardView === 'grid'}" @click="toggleView()">
                <svgicon color="white" icon="IconGridView" height="14" ></svgicon>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Carrier Cards Row -->
    <div class="row row-cards row-flex-card justify-content-center">
      <card 
        v-for="(carrier, index) in carrierCards"
        :index="index" 
        :carrier="carrier" 
        :isGrid="isGrid"
        :key="carrier.name">
      </card>
    </div>

  </div>
</template>

<script>
import CarrierCard from '../carrier-card/CarrierCard.vue';
import axios from 'axios'

export default {
  name: 'CarrierGrid',
  data() {
    return {
      carrierCards: null,
      carriersSearched: null,
      searchTime: null,
      cardView: 'list',
      sortBy: null,
      isGrid: false
    };
  },
  mounted() {  
    this.getData();    
  },
  filters: {
    /** Converts milliseconds to a minute:secs format **/
    convertSecstoMins( value ){
      let minutes = Math.floor(value / 60000);
      let seconds = ((value % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
  },
  methods: {
    /** Fetch data from API **/
    getData() {
      axios
        .get('http://adamkasiraj.com/api/carrier_cards.json')
        .then(response => (this.setData( response.data )) )
        .catch(error => console.log(error))
    },
    /** Set data vars and sort carriers alphabetically initially **/
    setData( data ) {
      this.carrierCards = data.carrier_cards;
      this.carriersSearched = data.carriers_searched;
      this.searchTime = data.search_time;
      this.sortAlphabetical();
    },
    /** Sort carriers alphabetically by name */
    sortAlphabetical(){
      if( this.sortBy !== 'alphabetical' ) {
        this.sortBy = 'alphabetical';
        this.carrierCards.sort( (a,b) => a.name.localeCompare(b.name) );
      }
    },
    /** Sort carriers by number of stars in their rating */
    sortRating(){
      if( this.sortBy !== 'rating' ) {
        this.sortBy = 'rating';
        //make sure null and undefined stars are sorted to last
        this.carrierCards.sort( (a,b) => (a.stars==null)-(b.stars==null) || -(a.stars>b.stars)||+(a.stars<b.stars));
      }
    },
    /** Sort carriers by price **/
    sortPrice(){
      if( this.sortBy !== 'price' ) {
        this.sortBy = 'price';
        this.carrierCards.sort( (a,b) => ( a.card_order_price - b.card_order_price ) );
      }
    },
    /** Toggle list and grid view **/
    toggleView(){
      this.isGrid = !this.isGrid;
      this.cardView === 'list' ? this.cardView = 'grid' : this.cardView = 'list';
    }
  },
  components: {
    'card' : CarrierCard
  }
};
</script>
