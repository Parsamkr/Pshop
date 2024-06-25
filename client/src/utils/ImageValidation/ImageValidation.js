const MaxMb = 5;
const MAX_IMAGE_SIZE = MaxMb * 1024 * 1024; // 5 MB in bytes
const VALID_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const MaxCount = 5;
const ImageValidation = async (newImages) => {
  const errorMessages = [];
  const filteredImages = newImages.filter((image) => {
    if (image.size > MAX_IMAGE_SIZE) {
      errorMessages.push(
        `تصویر ${image.name} از حداکثر حجم مجاز (${MaxMb} مگابایت) بیشتر است.`
      );
      return false;
    }

    if (!VALID_IMAGE_TYPES.includes(image.type)) {
      errorMessages.push(
        `نوع فایل برای ${image.name} نامعتبر است. فقط فرمت‌های JPEG، JPG، PNG و WEBP مجاز هستند.`
      );
      return false;
    }

    return true; // Include valid images
  });
  // if (JSON.stringify(filteredImages) != JSON.stringify(newImages)) {
  //   return ;
  // }
  if (filteredImages.length > MaxCount) {
    errorMessages.push(
      `شما فقط مجاز به انتخاب حداکثر ${MaxCount} تصویر هستید.`
    );
  }
  return { errorMessages: errorMessages, filteredImages: filteredImages };
};
export default ImageValidation;
