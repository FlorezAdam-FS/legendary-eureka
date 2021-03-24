//Global Variables
var symbol = document.getElementById("tickerInput");
var submit = document.getElementById("submit");
var stocks = [];
var imgSrc = "";

// Create the Card
const container = document.getElementById("card-container");
const tempText = document.getElementById("temp-text");

//get datepicker
GetDate();

//Create an Event listener when hitting submit
submit.addEventListener("click", () => {
  //if the symbol input is empty run the error
  if (symbol.value.length === 0) {
    NoSymbolError();
  } else {
    // get datepicker
    GetDate();

    tempText.remove();

    //url to pull the stock data
    const stock_url = `https://api.polygon.io/v2/aggs/ticker/${symbol.value.toUpperCase()}/range/1/day/${startDate}/${endDate}?unadjusted=true&sort=asc&limit=120&apiKey=R8zk7Hp0FNXph85yCe1F7yWxpnXUn_sN`;

    //url to pull the stock logo
    const stock_image_url = `https://api.polygon.io/v1/meta/symbols/${symbol.value.toUpperCase()}/company?&apiKey=R8zk7Hp0FNXph85yCe1F7yWxpnXUn_sN`;

    //get the stock image
    async function getStockImage() {
      //fetch data from the url
      let response = await fetch(stock_image_url);
      //parse data into json
      let data = await response.json();
      //return data
      return data;
    }

    //get the stock info
    async function getStocks() {
      //fetch the data from the url
      let response = await fetch(stock_url);
      //parse data into json
      let data = await response.json();
      // if results count is 0 fun the stockpull error
      if (data.resultsCount == 0) {
        StockPullError();
      }
      // return data
      return data;
    }

    //call the function then add data to the image source
    getStockImage().then((data) => {
      //attach the data logo to the imgSrc variable
      imgSrc = data.logo;
    });
    //call the function then create the cards
    getStocks().then((data) => {
      console.log(data);
      data.results.forEach((item) => {
        //add each stock as a string of data into the stocks array.
        stocks.push(`${item.o}|${item.c}|${item.h}|${item.l}|${item.v}`);
      });
      stocks.forEach((item) => {
        //create an array
        var info = [];
        //split each item by | to create each items information
        info = item.split("|");
        //Create the card for each item
        CreateCard(info);
      });
    });
    // call the after pull alert
    AfterPullAlert();
  }
});

// this function runs if there is no value in the symbol input
function NoSymbolError() {
  Swal.fire({
    title: "Whoops",
    text: "You left the Symbol blank!",
    icon: "error",
    confirmButtonText: "Cool",
  });
}
// this function runs if there is no data pulled
function StockPullError() {
  Swal.fire({
    title: "No Data",
    text: "Try entering a different date and verify your symbol is correct!",
    icon: "error",
    confirmButtonText: "Cool",
  });
}
// this is after the data is pulled to reload the page or not
function AfterPullAlert() {
  setTimeout(function () {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-lg btn-success",
        cancelButton: "btn btn-lg btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Question",
        text: "Do you want to try again?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Lets Restart!",
        cancelButtonText: "No, keep looking!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Perfect!",
            "Resetting in 3..2..1..!",
            "success"
          );
          setTimeout(function () {
            location.reload();
          }, 3000);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "You Got It",
            "We will keep the results up, just refresh when you want to try again, or keep it up and search again (it'll just add the the list)!",
            "success"
          );
        }
      });
  }, 5000);
}

// this function creates each card.
function CreateCard(info) {
  const card = document.createElement("div");

  const title = document.createElement("h3");
  const body = document.createElement("div");
  const subtitle = document.createElement("div");
  const open = document.createElement("p");
  const close = document.createElement("p");
  const high = document.createElement("p");
  const low = document.createElement("p");
  const volume = document.createElement("p");
  const logo = document.createElement("img");
  logo.style.height = "50px";
  logo.style.width = "50px";

  container.appendChild(card);

  card.setAttribute("class", "card mx-2");
  if (window.width > 400) {
    card.style.width = "100%";
  } else {
    card.style.width = "100%";
  }

  title.setAttribute("class", "card-header");

  card.append(title);
  card.append(logo);
  logo.setAttribute("class", "mx-auto mt-2");
  card.append(body);

  body.setAttribute("class", "card-body text-center");
  body.append(subtitle);
  body.append(open);
  body.append(close);
  body.append(high);
  body.append(low);
  body.append(volume);

  title.innerHTML = symbol.value;
  logo.src = imgSrc;
  open.innerHTML = "Open Price: $" + info[0];
  close.innerHTML = "Close Price: $" + info[1];
  high.innerHTML = "High Price: $" + info[2];
  low.innerHTML = "Low Price: $" + info[3];
  volume.innerHTML = "Volume: " + info[4];
}
