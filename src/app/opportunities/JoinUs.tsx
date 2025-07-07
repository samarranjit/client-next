// "use client";

// import React from "react";

// interface FormInfo {
//   fName: string;
//   lName: string;
//   email: string;
//   linkedin: string;
//   message: string;
//   expertise: string;
// }

// function JoinUs() {
//   const [info, setInfo] = React.useState<FormInfo>({
//     fName: "",
//     lName: "",
//     email: "",
//     linkedin: "",
//     message: "",
//     expertise: "",
//   });
//   const [success, setSuccess] = React.useState(false);
//   const [resume, setResume] = React.useState<File | null>(null);
//   const [fail, setFail] = React.useState(false);
//   const [message, setMessage] = React.useState<string | null>(null);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     e.preventDefault();
//     const { name, value } = e.target;

//     if (name === "resume" && "files" in e.target) {
//       setResume(e.target.files?.[0] || null);
//     } else {
//       setInfo((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (resume) {
//       formData.append("resume", resume);
//     }

//     try {
//       // Step 1: Upload resume
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/resume/send`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const resData = await res.json();

//       if (resData.success) {
//         console.log(resData);
//         const resumeUrl = resData.data.secure_url; // Get the Cloudinary URL of the uploaded resume

//         // Step 2: Send the form data including the resume URL to the backend
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/joinRequest/newJoinRequest`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               ...info,
//               resumeUrl, // Include the resume URL in the form data
//             }),
//           }
//         );

//         const responseData = await response.json();

//         if (responseData.success) {
//           setMessage(responseData.message);
//           setSuccess(true);
//           setFail(false);
//           resetForm();
//         } else {
//           setSuccess(false);
//           setFail(true);
//           setMessage("Data not inserted due to some error");
//           resetForm();
//         }
//       }
//     } catch (error) {
//       setSuccess(false);
//       setFail(true);
//       setMessage("Data not inserted due to some error");
//     }
//   };

//   const resetForm = () => {
//     setInfo({
//       fName: "",
//       lName: "",
//       email: "",
//       linkedin: "",
//       message: "",
//       expertise: "",
//     });
//     setResume(null);
//   };

//   return (
//     <div className="p-6 pb-[10rem] md:p-8 md:pb-10 mb-10">
//       <h2 className="text-tertiary text-xl md:text-2xl lg:text-3xl text-center">
//         Join our Team :
//       </h2>

//       <div className="form">
//         <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto mt-6 md:mt-10">
//           <div
//             className={`h-8 text-center ${success && "bg-[#c2f97e]"} ${
//               fail && "bg-[#ea9c43]"
//             } flex justify-center items-center`}
//           >
//             {(success || fail) && message}
//           </div>

//           <h2 className="text-center font-semibold text-sm md:text-xl lg:text-2xl p-3 md:p-5">
//             Fill out the form below, and we'll be in touch!
//           </h2>
//           <h2 className="text-xl md:text-2xl font-bold text-center text-primary mb-4">
//             Join Our Team
//           </h2>

//           <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 name="fName"
//                 value={info.fName}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 name="lName"
//                 value={info.lName}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={info.email}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 LinkedIn Profile
//               </label>
//               <input
//                 type="url"
//                 name="linkedin"
//                 value={info.linkedin}
//                 placeholder="LinkedIn Profile URL"
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 placeholder="Tell us about yourself"
//                 name="message"
//                 value={info.message}
//                 onChange={handleInputChange}
//                 rows={6}
//                 className="w-full p-2 border rounded-lg"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Skills and Expertise
//               </label>
//               <input
//                 type="text"
//                 value={info.expertise}
//                 placeholder="e.g., React, Data Analysis"
//                 name="expertise"
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Upload Resume
//               </label>
//               <p className="text-sm text-gray-600 mb-2">
//                 Please upload in image format (jpg, jpeg)
//               </p>
//               <input
//                 type="file"
//                 onChange={handleInputChange}
//                 name="resume"
//                 accept=".jpg,.jpeg,.png,.pdf"
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full p-3 bg-primary text-secondary border border-secondary rounded-lg hover:bg-secondary hover:text-primary transition duration-200"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default JoinUs;
