"use client";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";
import {
  GALLERY_1,
  GALLERY_2,
  GALLERY_3,
  GALLERY_4,
  GALLERY_5,
  GALLERY_6,
  GALLERY_7,
  GALLERY_8,
} from "@/lib/images";

const galleryItems = [
  { src: GALLERY_1, extraClass: "masonry-item-tall", alt: "Camping nad Stawami" },
  { src: GALLERY_2, extraClass: "", alt: "Camping grounds" },
  { src: GALLERY_3, extraClass: "", alt: "Pond view" },
  { src: GALLERY_4, extraClass: "masonry-item-wide", alt: "Campsite facilities" },
  { src: GALLERY_5, extraClass: "", alt: "Nature surroundings" },
  { src: GALLERY_6, extraClass: "masonry-item-tall", alt: "Relaxing by the water" },
  { src: GALLERY_7, extraClass: "", alt: "Evening at the campsite" },
  { src: GALLERY_8, extraClass: "", alt: "Campsite panorama" },
];

export default function GalleryStrip() {
  const { t } = useLanguage();

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="masonry-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 ${item.extraClass}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
