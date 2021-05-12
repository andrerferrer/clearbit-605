// WARNING - ADD YOUR KEY HERE BEFORE CONTINUING
// you can take that on https://dashboard.clearbit.com/api
const authorization = "Bearer sk_YOUR_KEY";











































///////////////
// Functions //
///////////////
const fetchAPI = (emailValue) => {
  const url = `https://person.clearbit.com/v2/people/find?email=${emailValue}`;
  const options = {
    headers: {
      'Authorization': authorization
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      // we receive the answer with the data
      console.log(data);
      const name = data.name.fullName;
      const email = data.email;
      const bio = data.bio;
      const location = data.location;
      // console.log(name);
      // console.log(email);
      // console.log(bio);
      // console.log(location);
      // IF YOU ARE BOLD, display that data on the page
      document.querySelector('#name').innerText = name;
      document.querySelector('#email').innerText = email;
      document.querySelector('#bio').innerText = bio;
      document.querySelector('#location').innerText = location;
    });
};

/////////////////////////////////////////
// QUERY SELECTORS AND EVENT LISTENERS //
/////////////////////////////////////////

// we select the form, because
// the only element that can receive the submit event is a form
const form = document.querySelector("#clearbitForm");

form.addEventListener('submit', (event) => {
  // console.log(event);
  // prevent default event
  event.preventDefault();
  // the user types in an email and submits
  const emailInput = document.querySelector("#clearbitEmail");
  const emailValue = emailInput.value;
  // then the email is sent to the API
  fetchAPI(emailValue)

});
