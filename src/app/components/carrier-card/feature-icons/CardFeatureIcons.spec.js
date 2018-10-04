import CardFeatureIcons from './CardFeatureIcons.vue';

describe('CardFeatureIcons', () => {
    it('should be CardFeatureIcons', () => {
        expect(CardFeatureIcons.name).toEqual('CardFeatureIcons');
    });
    it('should have correct props', () => {
        expect(CardFeatureIcons.props).toEqual( 
            { 
                features: {
                    type: Array,
                    required: true
                }
            } 
        );
      });
});
