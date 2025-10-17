// components/atoms/SocialIcon.tsx
import { Facebook, Instagram, Twitter } from "lucide-react";

export const SocialIcons = () => (
  <div className="flex gap-3">
    <Facebook size={20} className="text-gray-700 hover:text-pink-500" />
    <Instagram size={20} className="text-gray-700 hover:text-pink-500" />
    <Twitter size={20} className="text-gray-700 hover:text-pink-500" />
  </div>
);
