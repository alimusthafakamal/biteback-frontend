import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleCancelClick = () => {
    setIsModalOpen(false);
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  const handleConfirmLogout = () => {
    alert("You have been logged out!");
    navigate("/admin-login");
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-blue-900 rounded shadow-lg p-6 w-80">
          <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
          <p className="mb-6">Are you sure you want to logout?</p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleCancelClick}
              className="px-4 py-2 text-light bg-gray-500 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmLogout}
              className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LogoutPage;
