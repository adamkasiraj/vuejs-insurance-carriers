<template>
    <div>

        <!-- Iterate through number of stars -->
        <span v-for="n in rating">
            <svgicon class="rating-stars" icon="IconStarGold"></svgicon>
        </span>
        
    </div>
</template>

<script>

export default {
    name: 'CardRatingStars',
    props: {
        rating: {
            type: Number,
            required: false,
            validator: function (value) {
                return [ 0, 1, 2, 3, 4, 5].indexOf(value) !== -1
            }
        }
    }
};
</script>
 