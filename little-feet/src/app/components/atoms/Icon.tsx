// components/atoms/Icon.tsx
import { Heart, ShoppingCart, User, Facebook, Instagram, Twitter } from "lucide-react";

type IconType = "wishlist" | "cart" | "user" | "facebook" | "instagram" | "twitter";

interface IconProps {
  type: IconType;
  size?: number;
  filled?: boolean; // Only for wishlist heart
  className?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ type, size = 20, filled = false, className = "", onClick }) => {
  let iconElement;

  switch (type) {
    case "wishlist":
      iconElement = <Heart size={size} className={filled ? "fill-pink-500 text-pink-500" : "text-gray-400"} />;
      break;
    case "cart":
      iconElement = <ShoppingCart size={size} className={`text-gray-700 ${className}`} />;
      break;
    case "user":
      iconElement = <User size={size} className={`text-gray-700 ${className}`} />;
      break;
    case "facebook":
      iconElement = <Facebook size={size} className={`text-gray-700 hover:text-pink-500 ${className}`} />;
      break;
    case "instagram":
      iconElement = <Instagram size={size} className={`text-gray-700 hover:text-pink-500 ${className}`} />;
      break;
    case "twitter":
      iconElement = <Twitter size={size} className={`text-gray-700 hover:text-pink-500 ${className}`} />;
      break;
    default:
      iconElement = null;
  }

  return <span onClick={onClick} className="cursor-pointer">{iconElement}</span>;
};
