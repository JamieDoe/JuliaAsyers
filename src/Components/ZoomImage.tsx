import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface ZoomImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  title: string;
  width: number;
  height: number;
}

export default function ZoomImage({ src, alt, width, height }: ZoomImageProps) {
  if (!src) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mb-4 relative group cursor-pointer">
          <Image
            src={src}
            alt={alt || ""}
            sizes="100vw"
            className="group-hover:brightness-50 relative duration-300 shadow-lg shadow-black/10"
            width={width}
            height={height}
            layout="responsive"
            loading="lazy"
          />
          <div className="absolute inset-0 w-full h-full p-4 flex items-end">
            <h2 className="opacity-0 text-background text-2xl group-hover:opacity-100 duration-300">
              Painting Title
            </h2>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-screen-xl border-none shadow-none">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogClose />
        <div className="max-h-[calc(100vh-100px)]">
          <Image
            src={src}
            alt={alt || ""}
            sizes="100vw"
            width={width}
            height={height}
            className="h-full w-full object-contain "
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
