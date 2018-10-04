import CardTitleBlock from './CardTitleBlock.vue';

describe('CardTitleBlock', () => {
    it('should be CardTitleBlock', () => {
        expect(CardTitleBlock.name).toEqual('CardTitleBlock');
    });
    it('should have correct props', () => {
        expect(CardTitleBlock.props).toEqual( 
            { 
                name: {
                    type: String,
                    required: true
                } 
            } 
        );
      });
});
