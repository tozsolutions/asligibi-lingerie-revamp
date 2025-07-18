import { useState } from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const discountedPrice = product.originalPrice 
    ? product.originalPrice * 1.25 // %25 artış
    : product.price * 1.25;

  const hasDiscount = product.discount && product.discount > 0;

  return (
    <Card
      className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.isNew && (
              <Badge className="bg-primary text-primary-foreground font-futura">
                YENİ
              </Badge>
            )}
            {hasDiscount && (
              <Badge className="bg-destructive text-destructive-foreground font-futura">
                %{product.discount} İNDİRİM
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <Button
              size="icon"
              variant="secondary"
              className={`w-10 h-10 rounded-full transition-all duration-300 ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
              }`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current text-red-500" : ""}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className={`w-10 h-10 rounded-full transition-all duration-300 ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Add to Cart Button */}
          <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-futura">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Sepete Ekle
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="text-sm text-muted-foreground font-futura mb-1">
            {product.category}
          </div>
          <h3 className="font-futura font-medium text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-futura font-bold text-primary">
              ₺{discountedPrice.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through font-futura">
                ₺{(product.originalPrice * 1.25).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;