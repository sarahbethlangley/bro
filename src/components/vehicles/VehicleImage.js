import React, { useState } from "react";

// export const UploadAndDisplayImage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div>
//       <h1>Upload Vehicle Image</h1>
//       {selectedImage && (
//         <div>
//         <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
//         <br />
//         <button onClick={()=>setSelectedImage(null)}>Remove</button>
//         </div>
//       )}
//       <br />
     
//       <br /> 
//       <input
//         type="file"
//         name="myImage"
//         onChange={(event) => {
//           console.log(event.target.files[0]);
//           setSelectedImage(event.target.files[0]);
//         }}
//       />
//     </div>
//   );
// };

