import CardRatingStars from './CardRatingStars.vue';

describe('CardRatingStars', () => {
    it('should be CardRatingStars', () => {
        console.log( CardRatingStars.props );
        expect(CardRatingStars.name).toEqual('CardRatingStars');
    });
});
