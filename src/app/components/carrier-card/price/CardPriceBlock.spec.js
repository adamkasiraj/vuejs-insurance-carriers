import CardPriceBlock from './CardPriceBlock.vue';

describe('CardPriceBlock', () => {
    it('should be CardPriceBlock', () => {
        expect(CardPriceBlock.name).toEqual('CardPriceBlock');
    });
    it('should have correct props', () => {
        expect(CardPriceBlock.props).toEqual( 
            { 
                tag: {
                    type: String,
                    required: false
                },
                rate: {
                    type: Number,
                    required: false
                }
            } 
        );
    });
    describe('filters', () => {
        it('should round to nearest whole number', () => {
            let value = 55.555555;
            expect(CardPriceBlock.filters.formatMoney(value)).toEqual('56');
        });
    });
});
