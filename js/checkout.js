showCheckout = () => {

    let info = JSON.parse(localStorage.getItem('order'))
    let elements = document.getElementById('orders')
    let amountArea = document.getElementById('amount')

    let paymentAmount= 0;

    for( let i=0; i < info.length; i++){

        let name = info[i].subName;
        let bread = info[i].subBread;
        let toppings = info[i].subToppings;
        let sauce = info[i].subSauce;
        let price = info[i].fullCost;

        paymentAmount += price

        elements.innerHTML += `
        
            <div class="col-6" >

                <div class="card"  >

                    <div class="card-body">

                        <h5 class="card-title"><img src="../assets/sub-icon.svg">${name}</h5>
                        <p>${bread}</p>
                        <p> ${toppings}</p>
                        <p> ${sauce}</p>
                        <h6> R${price}.00</h6>
                    
                        
                    </div>
                    
                </div>    
            </div> 
        
        `

        amountArea.innerHTML = "R" + paymentAmount + ".00"

    }

    let couponCode = document.getElementById('promo').value;
  if (couponCode === 'YOUR_COUPON_CODE') {
    // Apply 10% discount if the coupon code matches
    let discount = paymentAmount * 0.1;
    paymentAmount -= discount;
  }

  amountArea.innerHTML = 'R' + paymentAmount.toFixed(2);

}



  