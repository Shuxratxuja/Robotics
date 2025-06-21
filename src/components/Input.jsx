// import React, { useState } from 'react';

// const GoogleSheetForm = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [status, setStatus] = useState('');

//   const handleSubmit = async () => {
//     if (!inputValue) {
//       setStatus('Iltimos, qiymat kiriting!');
//       return;
//     }

//     try {
//       const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
//         method: 'POST',
//         body: JSON.stringify({ inputValue }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const text = await response.text();
//       setStatus('Yuborildi: ' + text);
//       setInputValue('');
//     } catch (error) {
//       setStatus('Xatolik: ' + error.message);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
//       <h1 className="text-xl font-bold">Google Sheets Form</h1>
//       <input
//         type="text"
//         className="border p-2 w-full rounded"
//         placeholder="Qiymat kiriting..."
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={handleSubmit}
//       >
//         Yuborish
//       </button>
//       {status && <p className="text-sm text-gray-700">{status}</p>}
//     </div>
//   );
// };

// export default GoogleSheetForm;
