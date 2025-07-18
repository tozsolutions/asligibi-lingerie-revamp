import { useState } from "react";
import { useParams } from "react-router-dom";
import { Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ProductCard from "@/components/ProductCard";
import jartiyer1 from "@/assets/jartiyer-1.jpg";
import jartiyer2 from "@/assets/jartiyer-2.jpg";
import jartiyer3 from "@/assets/jartiyer-3.jpg";
import jartiyer4 from "@/assets/jartiyer-4.jpg";
import babydoll1 from "@/assets/babydoll-1.jpg";
import babydoll2 from "@/assets/babydoll-2.jpg";
import babydoll3 from "@/assets/babydoll-3.jpg";
import babydoll4 from "@/assets/babydoll-4.jpg";
import vucutCoraplari1 from "@/assets/vucut-coraplari-1.jpg";
import vucutCoraplari2 from "@/assets/vucut-coraplari-2.jpg";
import icCamasirTakimi1 from "@/assets/ic-camasir-takimi-1.jpg";
import icCamasirTakimi2 from "@/assets/ic-camasir-takimi-2.jpg";

const CategoryPage = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("popular");

  // Gerçek ürün verileri - kategori bazında, fiyatlar %25 artırılmış
  const allProducts = [
    // Jartiyer kategorisi
    {
      id: "j1",
      name: "Passione Kırmızı Fırfır Bacak Aksesuarlı Jartiyerli Fantasy Tanga",
      price: 361.25, // 289 + %25
      originalPrice: 400,
      image: jartiyer1,
      category: "Jartiyer",
      isNew: true,
      discount: 10
    },
    {
      id: "j2",
      name: "Intive Dantelli Saten İnce Askılı V Yaka Yandan Yırtmaçlı Mini Gecelik",
      price: 686.25, // 549 + %25
      originalPrice: 750,
      image: jartiyer2,
      category: "Jartiyer",
      discount: 8
    },
    {
      id: "j3",
      name: "Intive Dantel Detaylı Yumuşacık Püskül Desenli Pijama Takımı",
      price: 436.25, // 349 + %25
      originalPrice: 486.25,
      image: jartiyer3,
      category: "Jartiyer",
      discount: 10
    },
    {
      id: "j4",
      name: "YNT Siyah Kiraz Desenli İnce Askılı Derin V Dekolte Mini Gecelik",
      price: 713.8, // 571.04 + %25
      originalPrice: 775.88,
      image: jartiyer4,
      category: "Jartiyer",
      discount: 8
    },
    {
      id: "j5",
      name: "Dantel İşlemeli Kırmızı Jartiyer Takımı",
      price: 523.75, // 419 + %25
      image: jartiyer1,
      category: "Jartiyer",
      isNew: true
    },
    {
      id: "j6",
      name: "Siyah Transparan Jartiyer",
      price: 312.5, // 250 + %25
      originalPrice: 375,
      image: jartiyer2,
      category: "Jartiyer",
      discount: 15
    },
    
    // Babydoll kategorisi
    {
      id: "b1",
      name: "Lady Baby Straplez Kesim Destekli Dikişsiz Balensiz Sütyen",
      price: 686.25, // 549 + %25
      image: babydoll1,
      category: "Babydoll",
      isNew: true
    },
    {
      id: "b2",
      name: "Audrey Önü Esnek File Detaylı Hafif Destekli Balensiz Sütyen",
      price: 736.25, // 589 + %25
      image: babydoll2,
      category: "Babydoll"
    },
    {
      id: "b3",
      name: "YNT Siyah Dantel Detaylı Volanlı Transparan Mini Gecelik",
      price: 580.4, // 464.32 + %25
      originalPrice: 631.25,
      image: babydoll3,
      category: "Babydoll",
      discount: 8
    },
    {
      id: "b4",
      name: "YNT Beyaz Fiyonk Detaylı V Yaka Volanlı Transparan Gecelik",
      price: 608, // 486.4 + %25
      originalPrice: 661.25,
      image: babydoll4,
      category: "Babydoll",
      discount: 8
    },
    {
      id: "b5",
      name: "Pembe Saten Babydoll Gecelik",
      price: 487.5, // 390 + %25
      image: babydoll1,
      category: "Babydoll",
      isNew: true
    },
    {
      id: "b6",
      name: "Beyaz Dantel Detaylı Babydoll",
      price: 562.5, // 450 + %25
      originalPrice: 625,
      image: babydoll2,
      category: "Babydoll",
      discount: 10
    },

    // Vücut Çorapları kategorisi
    {
      id: "v1",
      name: "Kadın Siyah Transparan Puantiye Desenli Külotlu Çorap",
      price: 311.25, // 249 + %25
      originalPrice: 350,
      image: vucutCoraplari1,
      category: "Vücut Çorapları",
      discount: 15
    },
    {
      id: "v2",
      name: "Olivia Balensiz Dikişsiz Lazer Kesim Hafif Destekli Sütyen",
      price: 573.75, // 459 + %25
      originalPrice: 650,
      image: vucutCoraplari2,
      category: "Vücut Çorapları",
      discount: 12
    },
    {
      id: "v3",
      name: "Transparan File Vücut Çorabı",
      price: 375, // 300 + %25
      image: vucutCoraplari1,
      category: "Vücut Çorapları",
      isNew: true
    },
    {
      id: "v4",
      name: "Desenli Vücut Çorabı",
      price: 437.5, // 350 + %25
      originalPrice: 500,
      image: vucutCoraplari2,
      category: "Vücut Çorapları",
      discount: 12
    },

    // İç Çamaşır Takımları kategorisi
    {
      id: "i1",
      name: "Intive Pudra Pembe Simli V Yaka İnce Askılı Mini Gecelik",
      price: 1061.25, // 849 + %25
      image: icCamasirTakimi1,
      category: "İç Çamaşır Takımları",
      isNew: true
    },
    {
      id: "i2",
      name: "Ellie Dikişsiz İce-Silk Görünmez Ultra Hafif Padli Bralet",
      price: 611.25, // 489 + %25
      image: icCamasirTakimi2,
      category: "İç Çamaşır Takımları",
      isNew: true
    },
    {
      id: "i3",
      name: "Kırmızı Dantel İç Çamaşır Takımı",
      price: 750, // 600 + %25
      originalPrice: 850,
      image: icCamasirTakimi1,
      category: "İç Çamaşır Takımları",
      discount: 12
    },
    {
      id: "i4",
      name: "Siyah Saten İç Çamaşır Takımı",
      price: 812.5, // 650 + %25
      image: icCamasirTakimi2,
      category: "İç Çamaşır Takımları",
      isNew: true
    }
  ];

  const products = allProducts.filter(product => {
    const categoryMap = {
      jartiyer: "Jartiyer",
      babydoll: "Babydoll", 
      vucutcoraplari: "Vücut Çorapları",
      iccamasirtakimlari: "İç Çamaşır Takımları"
    };
    return product.category === categoryMap[category as keyof typeof categoryMap];
  });

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