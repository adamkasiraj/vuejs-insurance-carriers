import CardFeatureList from './CardFeatureList.vue';

describe('CardFeatureList', () => {
    it('should be CardFeatureList', () => {
        expect(CardFeatureList.name).toEqual('CardFeatureList');
    });
    it('should have correct props', () => {
        expect(CardFeatureList.props).toEqual( 
            { 
                features: {
                    type: Array,
                    required: true
                }
            } 
        );
      });
});
