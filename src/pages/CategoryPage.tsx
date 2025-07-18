import { useState } from "react";
import { useParams } from "react-router-dom";
import { Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("popular");

  // Mock data - kategori bazında ürünler
  const products = [
    {
      id: "1",
      name: "Dantel Jartiyer Takımı",
      price: 187.5,
      originalPrice: 250,
      image: "/placeholder.svg",
      category: "Jartiyer",
      isNew: true,
      discount: 15
    },
    {
      id: "2",
      name: "Siyah Jartiyer",
      price: 156.25,
      image: "/placeholder.svg",
      category: "Jartiyer"
    },
    {
      id: "3",
      name: "Beyaz Dantel Jartiyer",
      price: 225,
      originalPrice: 275,
      image: "/placeholder.svg",
      category: "Jartiyer",
      discount: 10
    },
    {
      id: "4",
      name: "Kırmızı Jartiyer Takımı",
      price: 312.5,
      image: "/placeholder.svg",
      category: "Jartiyer",
      isNew: true
    },
    {
      id: "5",
      name: "Transparan Jartiyer",
      price: 218.75,
      originalPrice: 275,
      image: "/placeholder.svg",
      category: "Jartiyer",
      discount: 20
    },
    {
      id: "6",
      name: "Çiçekli Jartiyer",
      price: 187.5,
      image: "/placeholder.svg",
      category: "Jartiyer"
    }
  ];

  const categoryTitles = {
    jartiyer: "Jartiyer",
    babydoll: "Babydoll",
    vucutcoraplari: "Vücut Çorapları",
    iccamasirtakimlari: "İç Çamaşır Takımları"
  };

  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || "Ürünler";

  const colors = [
    { name: "Siyah", value: "black" },
    { name: "Beyaz", value: "white" },
    { name: "Kırmızı", value: "red" },
    { name: "Pembe", value: "pink" },
    { name: "Lacivert", value: "navy" }
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-futura font-bold mb-3">Fiyat Aralığı</h3>
        <div className="space-y-3">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000}
            min={0}
            step={25}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground font-futura">
            <span>₺{priceRange[0]}</span>
            <span>₺{priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-futura font-bold mb-3">Renkler</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color.value} className="flex items-center space-x-2">
              <Checkbox id={color.value} />
              <label
                htmlFor={color.value}
                className="text-sm font-futura text-foreground cursor-pointer"
              >
                {color.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-futura font-bold mb-3">Bedenler</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={size} />
              <label
                htmlFor={size}
                className="text-sm font-futura text-foreground cursor-pointer"
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-futura font-bold text-foreground mb-2">
          {categoryTitle}
        </h1>
        <p className="text-muted-foreground font-futura">
          {products.length} ürün bulundu
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          {/* Mobile Filter */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden font-futura">
                <Filter className="h-4 w-4 mr-2" />
                Filtrele
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-futura">Filtreler</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Filter Toggle */}
          <Button variant="outline" className="hidden md:flex font-futura">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filtreler
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48 font-futura">
              <SelectValue placeholder="Sıralama" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popülerlik</SelectItem>
              <SelectItem value="price-low">Fiyat (Düşük → Yüksek)</SelectItem>
              <SelectItem value="price-high">Fiyat (Yüksek → Düşük)</SelectItem>
              <SelectItem value="newest">En Yeni</SelectItem>
              <SelectItem value="rating">Değerlendirme</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode */}
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-8 bg-background border border-border rounded-lg p-6">
            <h2 className="font-futura font-bold mb-4">Filtreler</h2>
            <FilterContent />
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;