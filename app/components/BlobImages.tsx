import Image from "next/image";
import blobYellowLg from "/public/assets/images/blob-yellow-lg.png";
import blobYellowSm from "/public/assets/images/blob-yellow-sm.png";
import blobBlueLg from "/public/assets/images/blob-blue-lg.png";
import blobBlueSm from "/public/assets/images/blob-blue-sm.png";

export default function BlobImages() {
  return (
    <>
      {/* yellow blob shapes */}
      <Image
        className="absolute top-0 right-0 z-10 md:hidden"
        src={blobYellowSm}
        alt=""
        width={126}
        height={131}
        sizes="100vw"
      />
      <Image
        className="absolute top-0 right-0 z-10 hidden md:block"
        src={blobYellowLg}
        alt=""
        width={158}
        height={141}
        sizes="100vw"
      />

      {/* blue blob shapes */}
      <Image
        className="absolute bottom-0 left-0 z-10 md:hidden"
        src={blobBlueSm}
        alt=""
        width={65}
        height={62}
        sizes="100vw"
      />
      <Image
        className="absolute bottom-0 left-0 z-10 hidden md:block"
        src={blobBlueLg}
        alt=""
        width={148}
        height={118}
        sizes="100vw"
      />
    </>
  );
}
