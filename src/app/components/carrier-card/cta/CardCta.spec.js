import CardCta from './CardCta.vue';

describe('CardCta', () => {
    it('should be CardCta', () => {
        expect(CardCta.name).toEqual('CardCta');
    });
    it('should have correct props', () => {
        expect(CardCta.props).toEqual( 
            { 
                type: {
                    type: Number,
                    required: true
                },
                action: {
                    type: Object,
                    required: true
                }
            } 
        );
      });
});
