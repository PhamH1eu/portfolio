// components/Avatar.js
"use client";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number; // Size in pixels
}

const Avatar = ({ src, alt = "Avatar" }: AvatarProps) => {
  return (
    <div
      className={`h-[100px] w-[100px] rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg`}
    >
      <Image
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
