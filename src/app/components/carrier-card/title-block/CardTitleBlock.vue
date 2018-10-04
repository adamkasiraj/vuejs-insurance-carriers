<template>
    <div class="title-container">

        <!-- Carrier Name -->
        <h3 id="test1" class="mb-1"> {{ name }} </h3>

    </div>
</template>

<script>

export default {
    name: 'CardTitleBlock',
     props: {
        name: {
            type: String,
            required: true
        }
    }
};
</script>

