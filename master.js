let workingFunction = true;
let started = false;
// start header
let myNav = document.querySelectorAll("header ul li a");
myNav.forEach((li) => {
  li.addEventListener("click", function () {
    myNav.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  });
});
let myNavigation = document.querySelector("header ul");
let myMinue = document.querySelector("header .minue");
myMinue.addEventListener("click", function () {
  this.classList.toggle("active");
  myNavigation.classList.toggle("show");
});
// end header

//start shop
let myNavShop = document.querySelectorAll(".navigate div");
myNavShop.forEach((div) => {
  div.addEventListener("click", function () {
    myNavShop.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  });
});

//navigate
let myTaps = document.querySelectorAll(".navigate  .use");
let myDivs = document.querySelectorAll(".products .container");
myTaps.forEach((ele) => {
  ele.addEventListener("click", function () {
    myTaps.forEach(function (eleo) {
      eleo.classList.remove("active");
    });
    ele.classList.add("active");
    myDivs.forEach(function (Ele) {
      Ele.style.display = "none";
    });
    document.querySelector(ele.dataset.class).style.display = "flex";
  });
});
//end shop
//-----------------------------------------------------------

//-----------------------------------------------------------

//second button shop
let mySBtn = document.querySelector(".paner .paner-1 .btn");
let btnShope = document.querySelector(".landing .container button");
if (mySBtn != null || btnShope != null) {
  //-----------------------------------------------------------
  // start shop button

  btnShope.addEventListener("click", function () {
    window.location.href = "shop.html";
  });

  mySBtn.addEventListener("click", function () {
    window.location.href = "shop.html";
  });
}
// end shop button
//-------------------------------------------------------

// start addCard section
// start update price

function updateTotal() {
  let total = 0;
  let totalPrice = document.querySelector(".container .total");
  let boxcontent = document.querySelectorAll(".addCard .card");
  //بعدي علي العنصر الواحد واعمل إختيار لأي عنصر جوه وباالتالي بكون عديت علي كل العناصر الموجوده
  boxcontent.forEach((ele) => {
    let price = ele.querySelector(" .card .price");
    let valuePrice = parseFloat(price.textContent.replace("$", ""));
    let inpuValue = ele.querySelector("input").value;
    total = total + valuePrice * inpuValue;
  });
  if (totalPrice != null) {
    total = Math.round(total * 100) / 100;
    totalPrice.textContent = "$" + total;
  }
}
// end update price

//start add card into page
let addbtn = document.querySelectorAll(" .products .fa-shopping-cart");
addbtn.forEach((btn) => {
  btn.addEventListener("click", function (ele) {
    //delete massege
    let myMassege = document.querySelector(".massege");
    myMassege.style.display = "none";
    //delete massege
    let parent = ele.target.parentElement.parentElement;
    let myTitle = parent.querySelector(" h3").innerText;
    let mybtnPrice = parent.querySelector(".price").innerText;
    let myImg = parent.querySelector(" .p-card .p-img  img").src;
    //check function if item was add or not
    check(parent.querySelector(" .p-card .p-img  img").src);
    //trigger of function
    if (workingFunction == true) {
      let divBox = document.createElement("div");
      divBox.classList.add("card-content");
      let content = `
                    <div class="card">
                            <img src="${myImg}" alt="">
                            <h3>${myTitle}</h3>
                            <p class="price">${mybtnPrice}</p>
                            <select >
                                  <option value="">Select Size</option>
                                  <option value="">XXL</option>
                                  <option value="">XL</option>
                                  <option value="">L</option>
                                  <option value="">M</option>
                                  <option value="">S</option>
                            </select>
                            <input type="number" value="1" class="number">
                            <div class="close"><i class="fas fa-trash-alt"></i></div>
                    </div>
                </div>
    `;

      divBox.innerHTML = content;
      document.querySelector(".addCard .container").prepend(divBox);
      updateTotal();
      // increase number of counter when add a new item in car
      let counter = document.querySelector(".counter");
      counter.style.opacity = "1";
      counter.textContent++;
    }
    // -----------------------
    // castom input fild
    let inpuF = document.querySelectorAll(".card .number");
    inpuF.forEach((item) => {
      item.addEventListener("change", function (ele) {
        // check number
        if (ele.target.value <= 0 || isNaN(ele.target.value)) {
          ele.target.value = 1;
        }
        updateTotal();
      });
      updateTotal();
    });
    //when remove item form car should update the total
    let colseCard = document.querySelectorAll(".card .close i");
    // console.log(colseCard);
    colseCard.forEach((item) => {
      item.addEventListener("click", function (ele) {
        ele.target.parentElement.parentElement.remove();
        updateTotal();
      });
      updateTotal();
    });
    // -----------------------
  });
  updateTotal();
});
//end add card into page

let test = document.querySelector("card-content");
// console.log(test);
if (test === null) {
  let myMassege = document.querySelector(".massege");
  myMassege.style.display = "block";
}
// start open car
let mycar = document.querySelector(".fa-shopping-bag");
let closeWindow = document.querySelector(".close-window");
closeWindow.addEventListener("click", function () {
  let body = document.querySelector(".Main-body");
  body.classList.remove("blur");
});

mycar.addEventListener("click", function () {
  let counter = document.querySelector(".counter");
  counter.style.opacity = "0";
  counter.textContent = 0;
  let car = document.querySelector(".addCard");
  // console.log(car);
  car.classList.add("carShow");
  let body = document.querySelector(".Main-body");
  body.classList.add("blur");
});

closeWindow.addEventListener("click", function () {
  let car = document.querySelector(".addCard");
  car.classList.remove("carShow");
});
// end open car

//check if item was add in the car or ont
function check(myImg) {
  let mycarImg = document.querySelectorAll(".addCard img");
  for (let j = 0; j < mycarImg.length; j++) {
    if (mycarImg[j].src == myImg) {
      //popup-massge
      let pupaup = document.querySelector(".popup-massege");
      pupaup.style.opacity = "1";
      pupaup.style.top = "50%";
      let body = document.querySelector(".Main-body");
      body.classList.add("blur");
      let closePOU = document.querySelector(".close-popup");
      closePOU.addEventListener("click", function () {
        let pupaup = document.querySelector(".popup-massege");
        pupaup.style.opacity = "0";
        pupaup.style.top = "-100%";
        let body = document.querySelector(".Main-body");
        body.classList.remove("blur");
      });
      //popup-massge
      workingFunction = false;
      return;
    } else {
      workingFunction = true;
    }
  }
}
//check if item was add in the car or ont

//single product
let bigImg = document.querySelector(".p-img > img");
let smallImgs = document.querySelectorAll(" .p-img .small-img img");
let myCard = document.querySelectorAll(".container .p-card");
let myImg = document.querySelectorAll(".container .p-card img");
let myImgMain = document.querySelector(" .main-img ");
//-----------------------------------------------------------
smallImgs.forEach((img) => {
  img.addEventListener("click", function () {
    bigImg.src = img.src;
  });
});
// end single producs
//start blog page
let seeMore = document.querySelectorAll(".blog-content  button");
seeMore.forEach((ele) => {
  ele.addEventListener("click", function (item) {
    let parent = item.target.parentElement.parentElement;
    let more = parent.querySelector(".more");
    more.classList.toggle("apper");
  });
});
//end blog page
// start stats
let stats = document.querySelector(".stats");
//Display the height and width of "stats", including padding and border
window.addEventListener("scroll", function () {
  // Get the offsetTop position of "stats"
  let statsTop = stats.offsetTop;
  let statsOuterHeight = stats.offsetHeight;
  // console.log(statsOuterHeight);
  // Get the window height
  let windowHeight = this.innerHeight;
  // console.log(windowHeight);
  let windowScrollTop = window.pageYOffset;
  // console.log(windowScrollTop);
  if (windowScrollTop > statsTop + statsOuterHeight - windowHeight) {
    let goalStats = document.querySelectorAll(".stats .s-text h1");
    if (!started) {
      goalStats.forEach((ele) => statCount(ele));
    }
    started = true;
  }
});

function statCount(e) {
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent === e.dataset.goal) {
      clearInterval(counter);
    }
  }, 20000 / e.dataset.goal);
}
