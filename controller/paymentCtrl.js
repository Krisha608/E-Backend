const Razorpay = require("razorpay")
const instance = new Razorpay({
    key_id:"rzp_test_iV3X4W2GAh7206",
    key_secret:"kL1wD53sU8lY8GrRt5Y55wQo"
})
const checkout = async(req,res) =>{
    const {amount} = req.body
    const option = {
        amount:amount * 100,
        currency:"INR"
    }
    const order = await instance.orders.create(option)
    res.json({
        success:true,
        order
    })
}
const paymentVerification = async(req,res) =>{
    const {razorpayOrderId,razorpayPaymentId} = req.body
    res.json({
        razorpayOrderId,razorpayPaymentId
    })
}

module.exports = {
    checkout,
    paymentVerification
}