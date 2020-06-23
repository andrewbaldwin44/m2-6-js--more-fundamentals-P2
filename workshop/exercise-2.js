const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

function createGuestOrder(early, late) {
  let guests = [...early, ...late];

  guests.forEach((attendee, index) => {
    console.log(`${index + 1}. ${attendee}`);
  });
}

createGuestOrder(earlyBirds, lateComers);
