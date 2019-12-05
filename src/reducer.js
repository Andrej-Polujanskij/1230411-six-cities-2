import offers from "./mocks/offers";

const transformOffersData = () => offers.map((item) => {

    let newOffersData = {city: item.city, cityOffers: item.cityOffers};
    
    return newOffersData;
});

// const offersByCity = (param) => {
//     let offersData = transformOffersData()
//     let string_value = String(param);
//     // param = `Brussels`

// //    console.log(String(param));

// //   let offers = offersData.find(item => item.city == string_value);

// //   console.log(offers.cityOffers);
//   console.log(offersData)
//   return offersData;
// };

let offersData = transformOffersData()
console.log(offersData[0].cityOffers)

const initialState = {
  cityOffers: offersData[0].cityOffers,
};


const ActionCreator = {
  chooseCity: () => ({
    type: `CHOOSED_CITY`,
    payload: offers,
  }),

  cityOffers: () => ({
    type: `CITY_OFFERS`,
    payload: offersData[0].cityOffers,
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
      case `CITY_OFFERS`: return Object.assign({}, state, {
          cityOffers: action.payload,
        });
    }
console.log(state)
  return state;
};

export {reducer, ActionCreator};