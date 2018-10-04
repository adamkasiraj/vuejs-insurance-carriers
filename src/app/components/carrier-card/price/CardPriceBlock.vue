<template>
    <div class="rate-container mb-2">

        <!-- Verified Price Tag -->
        <span v-if="tag" class="tag small"> {{ tag }} </span>

        <!-- Rate -->
        <span v-if="rate">
            <span class="dollar">$</span>
            <span class="rate"> {{ rate | formatMoney }} </span>
            <span class="month text-muted">/ mo</span> 
        </span>
        
    </div>
</template>

<script>
export default {
    name: 'CardPriceBlock',
    props: {
        tag: {
            type: String,
            required: false
        },
        rate: {
            type: Number,
            required: false
        }
    },
    filters: {
        formatMoney( value ){
            return value.toFixed(0);
        }
    },
};
</script>

