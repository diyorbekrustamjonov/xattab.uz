import { Metadata } from "next";
import DigitalArts from "./digital-arts";

export const metadata: Metadata = {
    title: "Digital Arts | Diyorbek Rustamjonov",
    metadataBase: new URL("https://xattab.uz/digital-arts"),
    description: "Explore digital arts images by Diyorbek Rustamjonov",
    openGraph: {
        title: "Digital Arts | Diyorbek Rustamjonov",
        url: "https://xattab.uz/digital-arts",
        description: "Explore digital arts by Diyorbek Rustamjonov",
        images: "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/digital-arts.png",
    },
};

export default function Page() {
    return (
        <div>
            <DigitalArts />
        </div>
    );
}
