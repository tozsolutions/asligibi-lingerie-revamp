import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  // Mock data - fiyatlar %25 artırılmış
  const featuredProducts = [
    {
      id: "1",
      name: "Dantel Jartiyer Takımı",
      price: 187.5, // 150 + %25
      originalPrice: 250,
      image: "/placeholder.svg",
      category: "Jartiyer",
      isNew: true,
      discount: 15
    },
    {
      id: "2",
      name: "Siyah Babydoll",
      price: 312.5, // 250 + %25
      image: "/placeholder.svg",
      category: "Babydoll",
      isNew: true
    },
    {
      id: "3",
      name: "Transparan Vücut Çorabı",
      price: 125, // 100 + %25
      originalPrice: 150,
      image: "/placeholder.svg",
      category: "Vücut Çorapları",
      discount: 20
    },
    {
      id: "4",
      name: "Kırmızı İç Çamaşır Takımı",
      price: 375, // 300 + %25
      image: "/placeholder.svg",
      category: "İç Çamaşır Takımları",
      isNew: true
    },
    {
      id: "5",
      name: "Beyaz Dantel Jartiyer",
      price: 225, // 180 + %25
      originalPrice: 275,
      image: "/placeholder.svg",
      category: "Jartiyer",
      discount: 10
    },
    {
      id: "6",
      name: "Pembe Babydoll Gecelik",
      price: 287.5, // 230 + %25
      image: "/placeholder.svg",
      category: "Babydoll"
    },
    {
      id: "7",
      name: "Siyah Vücut Çorabı",
      price: 150, // 120 + %25
      originalPrice: 180,
      image: "/placeholder.svg",
      category: "Vücut Çorapları",
      discount: 25
    },
    {
      id: "8",
      name: "Lazer Kesim Takım",
      price: 437.5, // 350 + %25
      image: "/placeholder.svg",
      category: "İç Çamaşır Takımları",
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-futura font-bold text-foreground mb-4">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-lg text-muted-foreground font-futura max-w-2xl mx-auto">
            En çok beğenilen ve yeni koleksiyonlarımızdan özel seçkiler
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;