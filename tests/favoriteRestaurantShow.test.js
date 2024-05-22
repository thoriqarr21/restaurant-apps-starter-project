/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import FavoriteRestaurantView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };
  beforeEach(() => {
    renderTemplate();
  });
  describe('When no restaurants have been liked', () => {
    it('should render the information that no restaurants have been liked', () => {
      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      const restaurants = [];
      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
    });
    fit('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });
    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restaurant').addEventListener('restaurant:updated', () => {
        expect(document.querySelectorAll('.restaurants__not__found').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
  describe('When favorite restaurants exist', () => {
    it('should render the restaurants', () => {
      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };
      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
      presenter._displayRestaurants([
        {
          id: 11,
          name: 'A',
          rating: 3,
          city: 'Kota A',
          description: 'Sebuah film A',
        },
        {
          id: 22,
          name: 'B',
          rating: 4,
          city: 'Kota B',
          description: 'Sebuah film B',
        },
      ]);
      expect(document.querySelectorAll('.resto-item').length).toEqual(2);
    });
    it('should show the restaurants', (done) => {
      document.getElementById('restaurant').addEventListener('restaurant:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(2);
        done();
      });
      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => [
          {
            id: 11,
            name: 'A',
            rating: 3,
            city: 'Kota A',
            description: 'Sebuah film A',
          },
          {
            id: 22,
            name: 'B',
            rating: 4,
            city: 'Kota B',
            description: 'Sebuah film B',
          },
        ]),
      };
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
