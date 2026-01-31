import Image from "next/image";

export default function GalleryPage() {
    return (
        <Image 
            src="https://placehold.co/600x400"
            alt="Gallery Image"
            width={800}
            height={400}
            priority
            unoptimized
        />
    )
}