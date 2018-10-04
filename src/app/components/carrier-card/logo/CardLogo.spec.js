import CardLogo from './CardLogo.vue';

describe('CardLogo', () => {
    it('should be CardLogo', () => {
        expect(CardLogo.name).toEqual('CardLogo');
    });
    it('should have correct props', () => {
        expect(CardLogo.props).toEqual( 
            { 
                logo: {
                    type: String,
                    required: true
                }
            } 
        );
    });
});
