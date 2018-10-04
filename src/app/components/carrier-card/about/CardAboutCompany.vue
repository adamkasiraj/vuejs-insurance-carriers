<template>
    <div class="col px-5">
        <h5 class="border-bottom">
            <svgicon color="#333" icon="IconOpenBook" class="mb-1"  ></svgicon> 
            Why {{ name }} 
        </h5>
        <p> {{ about }} </p>
    </div>
</template>

<script>
export default {
    name: 'CardAboutCompany',
    props: {
        about: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }

};
</script>
