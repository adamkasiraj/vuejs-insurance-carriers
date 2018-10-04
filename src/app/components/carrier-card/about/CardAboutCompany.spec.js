import CardAboutCompany from './CardAboutCompany.vue';

describe('CardAboutCompany', () => {
    it('should be CardAboutCompany', () => {
        expect(CardAboutCompany.name).toEqual('CardAboutCompany');
    });
    it('should have correct props', () => {
        expect(CardAboutCompany.props).toEqual( 
            { 
                about: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                }
            } 
        );
      });
});
