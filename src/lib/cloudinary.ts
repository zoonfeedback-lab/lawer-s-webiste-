import { v2 as cloudinary } from 'cloudinary';

// Configure the Cloudinary instance
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

/**
 * Uploads a base64 encoded file to Cloudinary.
 * @param fileBase64 The base64 file string (e.g. data:image/png;base64,iVBORw0KGgo...)
 * @param folder The folder to organize uploads inside cloudinary
 */
export async function uploadToCloudinary(fileBase64: string, folder: string = "lawyer_platform") {
  try {
    const response = await cloudinary.uploader.upload(fileBase64, {
      folder: folder,
      resource_type: "auto", // Automatically detect if it's an image, raw document, etc.
    });
    return response.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw new Error("Failed to upload file to Cloudinary");
  }
}

export default cloudinary;
