const prose = 8
const plily = 10
const ptulip = 2
var nrose = 70
var nlily = 50
var ntulip = 120
var pricerose,pricelily,pricetulip
var totalprice
nrose = nrose - 20
nlily = nlily - 30
 pricerose = nrose*prose
 console.log("rose price = ",pricerose)
 pricelily = nlily*plily
 pricetulip = ntulip*ptulip
 totalprice = pricerose+pricelily+pricetulip
 console.log("Rose - Unit price:",prose,"quantity :",nrose,"Value",pricerose)
 console.log("lily - Unit price:",plily,"quantity :",nlily,"Value",pricelily)
 console.log("Tulip - Unit price:",ptulip,"quantity :",ntulip,"Value",pricetulip)
 console.log("Total Price = ",totalprice)