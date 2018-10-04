import CarrierGrid from './CarrierGrid.vue';

describe('CarrierGrid', () => {
    describe('name', () => {
        it('should be CarrierGrid', () => {
            expect(CarrierGrid.name).toEqual('CarrierGrid');
          });
    });
    describe('methods', () => {
        it('should sort names alphabetically', () => {
            CarrierGrid.carrierCards = [ {name: 'world'}, {name: 'hello'}, {name: '12'} ];
            CarrierGrid.methods.sortAlphabetical.call(CarrierGrid);
            expect(CarrierGrid.carrierCards).toEqual([{name: '12'}, {name: 'hello'}, {name: 'world'}]);
        });
        it('should sort ratings in descending order', () => {
            CarrierGrid.carrierCards = [ {stars: null}, {stars: 1}, {stars: 5}, {stars: 4} ];
            CarrierGrid.methods.sortRating.call(CarrierGrid);
            expect(CarrierGrid.carrierCards).toEqual([{stars: 5}, {stars: 4}, {stars: 1}, {stars: null} ]);
        });
        it('should sort price in ascending order', () => {
            CarrierGrid.carrierCards = [ {card_order_price: 0}, {card_order_price: 8}, {card_order_price: 5} ];
            CarrierGrid.methods.sortPrice.call(CarrierGrid);
            expect(CarrierGrid.carrierCards).toEqual([{card_order_price: 0}, {card_order_price: 5}, {card_order_price: 8} ]);
        });
    });
    describe('filters', () => {
        it('should sort names alphabetically', () => {
            let value = 88730;
            expect(CarrierGrid.filters.convertSecstoMins(value)).toEqual('1:29');
        });
    });
});
