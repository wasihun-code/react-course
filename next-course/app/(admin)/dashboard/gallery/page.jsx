import Image from "next/image";

export default async function GalleryPage() {
    setTimeout(() => {console.log("Image component loaded")}, 10000);
    return (
        <Image 
            src="https://placehold.co/600x400"
            alt="Gallery Image"
            width={800}
            height={400}
            priority
            unoptimized
            cache="no-store"
        />
    )
}