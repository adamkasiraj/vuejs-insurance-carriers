<template>
    <div class="col px-5 col-features">
        <h5 class="border-bottom"> 
            <svgicon color="black" icon="IconFeaturesList" class="mb-1"  ></svgicon> 
            Features 
        </h5>
        <div v-html="featuresHTML" class="features-list"></div>
    </div>
</template>

<script>

export default {
    name: 'CardFeatureList',
    props: {
        features: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            featuresHTML: this.features[0]
        }
    }
};
</script>
