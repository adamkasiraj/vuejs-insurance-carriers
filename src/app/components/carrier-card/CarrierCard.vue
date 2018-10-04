<template>
  <div class="col-12 col-card" :class="{'col-md-6 col-xl-4': isGrid}">

    <!-- Carrier Card -->
    <div class="card card-carrier clickable mb-3" data-toggle="collapse" :href="'#expand-details' + id">
      <div class="card-body">
        <div class="row">
          <div class="col-12 text-center align-items-center col-card-name" :class="{'col-md-8 d-md-flex text-md-left': !isGrid}">
            
            <!-- Logo --> 
            <logo v-if="logo" :logo="logo"></logo>

            <!-- Title Block --> 
            <div class="title-block-container">

              <!-- Name --> 
              <title-block :name="name"></title-block>

              <div class="text-center"  :class="{'d-lg-flex text-md-left': !isGrid}" >

                  <!-- Rating Stars --> 
                  <stars v-if="rating" :rating="rating" class="pr-3 mb-1"></stars>

                  <!-- Feature Icons -->
                  <feature-icons v-if="features" :features="features" class="mb-1"></feature-icons>

              </div>
            </div>

          </div>
          <div class="col-12 text-center col-card-price" :class="{'col-md text-md-right': !isGrid}">
            
            <!-- Price Block -->
            <price-block v-if="rate" :rate="rate" :tag="tag"></price-block>
            
            <!-- CTA -->
            <cta v-if="type !== 2" :type="type" :action="action"></cta>  

          </div>
        </div>
      </div>
      <!-- Card Footer -  More Details and Toggler -->
      <div class="card-footer bg-white border-0">

        <!-- Details Row -->
        <div class="row row-more-details collapse" :id="'expand-details' + id">

          <!-- Feature List -->
          <feature-list v-if="features_html" :features="features_html"></feature-list> 

          <!-- Details -->
          <about v-if="about" :about="about" :name="name"></about>

        </div>

        <!-- Toggler Row -->
        <div class="row row-toggle text-center">
          <div class="col-12">
            <svgicon class="icon-down" icon="IconChevronDown"  height="14" width="14"></svgicon>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CardLogo from './logo/CardLogo.vue';
import CardTitleBlock from './title-block/CardTitleBlock.vue';
import CardPriceBlock from './price/CardPriceBlock.vue';
import CardCta from './cta/CardCta.vue';
import CardFeatureList from './features-list/CardFeatureList.vue';
import CardAboutCompany from './about/CardAboutCompany.vue';
import CardRatingStars from './star-rating/CardRatingStars.vue'; 
import CardFeatureIcons from './feature-icons/CardFeatureIcons.vue';

export default {
  name: 'CarrierCard',
  props: {
        carrier: {
          type: Object,
          required: true
        },
        index: {
          type: Number,
          required: true
        },
        isGrid: {
          type: Boolean,
          required: false
        }
    },
  data() {
    return {
      id: this.index,
      name: this.carrier.name,
      logo: this.carrier.logo ? this.carrier.logo : "./assets/logo-carrier-sm-default.png",
      rating: this.carrier.stars,
      tag: this.carrier.tag,
      rate: this.carrier.rate,
      features: this.carrier.features,
      type: this.carrier.type,
      action: this.carrier.action,
      about: this.carrier.detail_body,
      features_html: this.carrier.features_html,
    }
  },
  components: {
    'logo' : CardLogo,
    'title-block' : CardTitleBlock,
    'price-block' : CardPriceBlock,
    'cta' : CardCta,
    'feature-list' : CardFeatureList,
    'about' : CardAboutCompany,
    'stars' : CardRatingStars,
    'feature-icons' : CardFeatureIcons
  }
};
</script>
