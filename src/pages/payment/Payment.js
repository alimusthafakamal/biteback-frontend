import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import bca from "../../assets/images/payment/bca.png";
import bri from "../../assets/images/payment/BRI.png";
import bni from "../../assets/images/payment/BNI.png";
import mandiri from "../../assets/images/payment/mandiri.png";
import dana from "../../assets/images/payment/dana.png";
import gopay from "../../assets/images/payment/gopay.png";
import ovo from "../../assets/images/payment/ovo.png";
import shopeePay from "../../assets/images/payment/shopeepay.png";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/biteBackSlice";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const handlePayment = () => {
    alert("Pembayaran Sukses");
    dispatch(resetCart());
    navigate("/");
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="paymentMethod"
                >
                  Select Payment Method
                </label>
                <div className="grid grid-cols-4 gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="bank-bca"
                      name="paymentMethod"
                      value="bca"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="bank-bca"
                      className="flex items-center space-x-2"
                    >
                      <img src={bca} alt="BCA" className="w-10 h-10" />
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="bank-bni"
                      name="paymentMethod"
                      value="bni"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="bank-bni"
                      className="flex items-center space-x-2"
                    >
                      <img src={bni} alt="BNI" className="w-10 h-10" />
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="bank-bri"
                      name="paymentMethod"
                      value="bri"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="bank-bri"
                      className="flex items-center space-x-2"
                    >
                      <img src={bri} alt="BRI" className="w-12 h-10" />
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="bank-mandiri"
                      name="paymentMethod"
                      value="mandiri"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="bank-mandiri"
                      className="flex items-center space-x-2"
                    >
                      <img src={mandiri} alt="Mandiri" className="w-10 h-12" />
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="ewallet-dana"
                      name="paymentMethod"
                      value="dana"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="ewallet-dana"
                      className="flex items-center space-x-2"
                    >
                      <img src={dana} alt="Dana" className="w-10 h-12" />
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="ewallet-gopay"
                      name="paymentMethod"
                      value="gopay"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="ewallet-gopay"
                      className="flex items-center space-x-2"
                    >
                      <img src={gopay} alt="GoPay" className="w-14 h-5" />
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="ewallet-ovo"
                      name="paymentMethod"
                      value="ovo"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="ewallet-ovo"
                      className="flex items-center space-x-2"
                    >
                      <img src={ovo} alt="OVO" className="w-12 h-10" />
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="ewallet-shopeepay"
                      name="paymentMethod"
                      value="shopeepay"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="ewallet-shopeepay"
                      className="flex items-center space-x-2"
                    >
                      <img
                        src={shopeePay}
                        alt="ShopeePay"
                        className="w-12 h-10"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John doe"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="cardNumber"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <button
                onClick={() => handlePayment()}
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
