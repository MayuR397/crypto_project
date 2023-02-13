async function getdata() {
  try {
    let res = await fetch("https://api.coingecko.com/api/v3/coins/categories");
    let data = res.json();
    data.then(function (result) {
      console.log(result);
      displayData(result);
    });
  } catch {
    console.log("Error");
  }
}
getdata();



let table = document.querySelector("table");

function displayData(data) {
  data.map((ele) => {
    let first = document.createElement("tr");

    let image = document.createElement("td");

    let logo = document.createElement("img");
    logo.setAttribute("src", ele.top_3_coins[0]);

    let name = document.createElement("td");

    name.innerText = ele.name;

    image.style.display = "flex";
    image.append(logo, name);

    let price = document.createElement("td");

    price.innerText = Math.floor(Math.random() *(9999-50)+9999);

    let mcap = document.createElement("td");

    mcap.innerText = ele.market_cap;

    let high = document.createElement("td");

    high.innerText = ele.volume_24h;

    let low = document.createElement("td");

    low.innerText = ele.market_cap_change_24h;

    first.append(image, price, mcap, high, low);

    table.append(first);
  });
}
