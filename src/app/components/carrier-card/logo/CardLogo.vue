<template>
    <div class="logo-container mb-1 mr-2">

        <!-- Carrier Logo -->
        <img class="carrier-logo" v-bind:src="logo"/>
        
    </div>
</template>

<script>

export default {
    name: 'CardLogo',
    props: {
        logo: {
            type: String,
            required: true
        }
    }
};
</script>
