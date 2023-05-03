const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  //updatedUser,
  updateUserById, 
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  // emptyCart,
  // applyCoupon,
  createOrder,
  // getOrders,
  // updateOrderStatus,
  // getAllOrders,
  // getOrderById,
  removeProductFromCart,
  updateProductQuantityFromCart,
  getMyOrders
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { checkout, paymentVerification } = require("../controller/paymentCtrl");

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);

router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
// router.post("/order/checkout",authMiddleware,checkout)
router.post("/order/checkout",checkout)
// router.post("/order/paymentVerification",authMiddleware,paymentVerification)
router.post("/order/paymentVerification",paymentVerification)
// router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.get("/cart", authMiddleware, getUserCart);

router.post("/cart/create-order", authMiddleware, createOrder);
router.get("/all-users", getallUser);
router.get("/getmyorders", authMiddleware, getMyOrders);
// router.get("/get-orders", authMiddleware, getOrders);
// router.get("/get-all-orders", authMiddleware, getAllOrders);
// router.post("/get-order/:id", authMiddleware, getOrderById);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.delete(
  "/update-product-cart/:cartItemId/:newQuantity",
  authMiddleware,
  updateProductQuantityFromCart
);
router.delete(
  "/delete-product-cart/:cartItemId",
  authMiddleware,
  removeProductFromCart
);

router.get("/:id",authMiddleware,isAdmin, getaUser);
// router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/:id", deleteaUser);
// router.put(
//   "/order/update-order/:id",
//   authMiddleware,
//   isAdmin,
//   updateOrderStatus
// );
// router.put("/edit-user", authMiddleware, updatedUser);
router.put("/update-user", authMiddleware, updateUserById);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
