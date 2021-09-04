const form = document.getElementById('feedback');
let total = 0.0;
const costs = {
  potato: 35,
  tomato: 25,
  cucumber: 15
}

function costload() {
  for (const i in costs) {
    const cost = document.getElementById(`${i}_cost`);
    cost.innerHTML = costs[i];
  }
}

let calculatePrice = () => {
  total = 0;
  for (const i in costs) {
    total = total + (document.getElementById(`${i}-qty`).value) * costs[i];
  }

  document.getElementById('totalPrice').value = `${total}`;

}



document.getElementById('btn-price').addEventListener('click', () => {
  calculatePrice();
});


let sub = 5;
let check = {

  //Validating the names
  check_Name: (name) => {
    let regex = /^\+?([a-zA-Z]{1,10})\)?[ ]?([a-zA-Z]{1})?[ ]?([a-zA-Z]{1,10})$/;
    if (name.match(regex)) {
      sub--;
      return true;
    } else {
      return false;
    }
  },

  check_City: (city) => {
    let regex = /[a-zA-Z]/;
    if (city.match(regex)) {
      sub--;
      return true;
    } else
      return false;
  },


  check_Phone: (number) => {
    let regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
    if (number.match(regex)) {
      sub--;
      return true;
    } else
      return false;
  },


  check_Mail: (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex)) {
      sub--;
      return true;
    } else
      return false;
  },

  check_feedbackmsg: (feed) => {
    if (feed.length > 0) {
      sub--;
      return true;
    } else
      return false;

  }

}

function formalert() {
  const nam = document.getElementById("feedback");
  let res = "Form Details: \n\n";
  for (let i = 0; i < nam.length - 1; i++) {
    res = res + `${nam[i].name}: ${nam[i].value}\n`;
  }
  alert(res);
  name.reset();
}

for(const i of form)
{
  i.addEventListener("blur", ()=>{
    if(check[`check_${i.name}`](i.value)){
      document.getElementById(`invalid_${i.name}`).innerHTML = ``;
    }
    else
    {
      document.getElementById(`invalid_${i.name}`).innerHTML = `Invalid_${i.name}`;
    }
  });
}

window.onload = () => {
  form.reset();
  costload();
  for(const i in costs){
    document.getElementById(`${i}-qty`).value = 0;
  }
calculatePrice();
}

document.getElementById("submit-btn").addEventListener('click',(event) =>{
  event.preventDefault();
  if(sub == 0)
  formalert();
  else
  {
    alert("Enter the required fields");
  }
});
