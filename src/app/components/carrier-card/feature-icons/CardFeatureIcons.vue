<template>
    <div>
        <span v-for="feature in features">
            <svgicon :icon="feature.icon"  :original="true"  class="feature-icon"></svgicon>
        </span>
    </div>
</template>
<script>

export default {
    name: 'CardFeatureIcons',
    props: {
        features: {
            type: Array,
            required: true
        }
    }
};
</script>
