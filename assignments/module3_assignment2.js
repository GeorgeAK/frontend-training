let orderValid = true
let shippingCost = 130
let hasParentApproval = prompt("has parent Approval ?",true)
let userAge = Number(prompt("Give User Age ",25))
let cartValue = Number(prompt("Enter Cart Value ",400))
let points = Number(prompt("Enter points ",600))
let insuranceCost = 30
let hasInsurance = true
let hasPromoCode = false
if(userAge < 21 && hasParentApproval == false)
    orderValid = false
if(userAge < 21 && hasParentApproval)
    shippingCost = shippingCost - 5
if(userAge > 65)
    shippingCost = 0
if(userAge > 21 && userAge < 65 && hasParentApproval == true ||
   userAge > 21 && userAge < 65 && cartValue > 300 ||
   userAge > 21 && userAge < 65 && points > 500)
    shippingCost = 0
if(orderValid == true && hasInsurance == true && hasPromoCode == false)
    shippingCost = shippingCost + insuranceCost
alert("Shipping Cost = "+shippingCost)
console.log("Shipping cost = ",shippingCost)
