const mongoose = require('mongoose');
//const { Date } = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
  
   FirstName: {
      type: String
   },
   LastName: {
      type: String
   },
   DOB: {
      type:Date
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   },
   presentaddress: {
      AddressLine1:String,
      AddressLine2:String,
      city: String,
      Country: String,
      PinCode: Number
  },
   permanentaddress: {
   AddressLine1:String,
   AddressLine2:String,
   city: String,
   Country: String,
   PinCode: Number
},
   officeaddress: {
   AddressLine1:String,
   AddressLine2:String,
   city: String,
   Country: String,
   PinCode: Number
}

}, {
   collection: 'employees'
})
console.log(Employee);
module.exports = mongoose.model('Employee', Employee)