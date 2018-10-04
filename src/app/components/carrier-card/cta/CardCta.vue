<template>
    <div class="cta-container mb-2">
        <a v-on:click.stop :class="buttonClass" :href="buttonLink" target="_blank"> 
            <svgicon :icon="buttonIcon" color="white" class="cta-icon"></svgicon> 
            {{buttonCopy}}
        </a>
    </div>
</template>

<script>

export default {
    name: 'CardCta',
    props: {
        type: {
            type: Number,
            required: true
        },
        action: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            buttonLink: 'http://' + this.action.link,
            buttonCopy: this.action.link_copy ? this.action.link_copy : this.action.link_text,
            buttonClass: null,
            buttonIcon: null
        }
    },
    mounted() {
        this.setData();
    },
    methods: {
        /** Sets local vars based on the cta type  **/
        setData() {
            if( this.type === 3 ) {
                this.buttonClass = 'btn btn-cta-primary';
                this.buttonIcon = 'IconBoltWhite';
            }
            else if ( this.type === 0 || this.type === 1 ) {
                this.buttonClass = 'btn btn-cta-secondary';
                this.buttonIcon = 'IconArrowDown';
            }
        }
    }


}
</script>

