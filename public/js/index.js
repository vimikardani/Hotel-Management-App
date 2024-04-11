// hotel.ejs file javascript
let checkin;
const checkinDate = document.getElementById('date1');
function findcheckinDate() {
    checkin = checkinDate.value;
}

let checkout;
const checkoutDate = document.getElementById('date2');
function findcheckoutDate() {
    checkout = checkoutDate.value;
    findTotaldays();

}

var hotelrent = document.getElementById('hotelRate').innerHTML;
function findTotaldays() {
    const serviceCharge = document.getElementById('servicecharge').innerHTML;

    if (checkin && checkout) {
        const diffInMs = new Date(checkout) - new Date(checkin)
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        document.getElementById('noofDays').innerHTML = diffInDays;

        const totalAmount = document.getElementById('totalAmount').innerHTML = diffInDays * hotelrent;

        document.getElementById('totalINR').innerHTML = parseInt(totalAmount) + parseInt(serviceCharge);
    }
}

