let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

function createRecommendations(pairings) {
  return Object.entries(pairings).map(([food, pair]) =>
    `With ${food}, it is best to have ${pair}.`
  );
}

function printRecommendations(recommendations) {
  recommendations.forEach(recommendation => console.log(recommendation));
}

printRecommendations(createRecommendations(foodPairings));
