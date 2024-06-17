"use client";
import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";

// import { uploa } from "@/utils/uploadthing/uploadthing";

export default function ImageUpload() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const newImages = event.target.files;
    console.log(newImages)
    if (!newImages.length) return; // Check if any files were selected

    // Check for valid image types (optional)
    const validImages = Array.from(newImages).filter((image) =>
      image.type.match("image/.*")
    );

    if (!validImages.length) {
      alert("Please select valid image files only.");
      return;
    }

    // Update state by combining new and existing images (using spread operator)
    setSelectedImages((prevImages) => [...prevImages, ...validImages]);
  };

  const handleDeleteImage = (index) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image, i) => i !== index)
    );
  };
  console.log("my images : ", selectedImages);
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement your logic to send the selected images here:
    const formData = new FormData();
    for (const image of selectedImages) {
      formData.append("images", image); // Add each image to the form data
    }
    console.log(formData);
  };
  return (
    <Flex>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div onClick={(e) => handleSubmit(e)}>click me </div>
        <label htmlFor="imageFile">Select Image:</label>
        <input
          multiple
          type="file"
          id="imageFile"
          onChange={handleImageChange}
        />

        {selectedImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Display selected images using a grid layout */}
            {selectedImages.map((image, index) => (
              <div key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Selected Image Preview"
                />
                <button onClick={() => handleDeleteImage(index)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </main>
    </Flex>
  );
}

// "use client";
// import React from "react";

// export default function ImageUpload() {
//   const myaction = (event) => {
//     console.log(event);
//     alert(event);
//     // event.preventDefault();
//   };
//   return (
//     <div>
//       <form
//         action="/post/create"
//         encType="multipart/form-data"
//         acceptCharset="UTF-8"
//       >
//         <label>تصاویر آگهی</label>
//         <input
//           onClick={(event) => {
//             console.log(event.target.files);
//           }}
//           type="file"
//           name="images"
//           multiple
//           className="form-control"
//         />
//         <button type="submit" className="btn btn-danger">
//           انتشار آگهی
//         </button>
//       </form>
//     </div>
//   );
// }
