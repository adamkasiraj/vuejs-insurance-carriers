import CarrierCard from './CarrierCard.vue';

describe('CarrierCard', () => {
    it('should be CarrierCard', () => {
        expect(CarrierCard.name).toEqual('CarrierCard');
    });
    it('should have correct props', () => {
        expect(CarrierCard.props).toEqual( 
            { 
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
            } 
        );
    });
});
