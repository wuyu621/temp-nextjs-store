import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button size="icon" variant="outline" className=" cursor-pointer">
      <FaHeart />
    </Button>
  );
}

export default FavoriteToggleButton;