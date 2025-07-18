import ProductCard from "./ProductCard";
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

const FeaturedProducts = () => {
  // Gerçek veriler - fiyatlar %25 artırılmış
  const featuredProducts = [
    {
      id: "1",
      name: "Passione Kırmızı Fırfır Bacak Aksesuarlı Jartiyerli Fantasy Tanga",
      price: 361.25, // 289 + %25
      originalPrice: 400,
      image: jartiyer1,
      category: "Jartiyer",
      isNew: true,
      discount: 10
    },
    {
      id: "2",
      name: "Lady Baby Straplez Kesim Destekli Dikişsiz Balensiz Sütyen",
      price: 686.25, // 549 + %25
      image: babydoll1,
      category: "Babydoll",
      isNew: true
    },
    {
      id: "3",
      name: "Kadın Siyah Transparan Puantiye Desenli Külotlu Çorap",
      price: 311.25, // 249 + %25
      originalPrice: 350,
      image: vucutCoraplari1,
      category: "Vücut Çorapları",
      discount: 15
    },
    {
      id: "4",
      name: "Intive Pudra Pembe Simli V Yaka İnce Askılı Mini Gecelik",
      price: 1061.25, // 849 + %25
      image: icCamasirTakimi1,
      category: "İç Çamaşır Takımları",
      isNew: true
    },
    {
      id: "5",
      name: "Intive Dantelli Saten İnce Askılı V Yaka Yandan Yırtmaçlı Mini Gecelik",
      price: 686.25, // 549 + %25
      originalPrice: 750,
      image: jartiyer2,
      category: "Jartiyer",
      discount: 8
    },
    {
      id: "6",
      name: "Audrey Önü Esnek File Detaylı Hafif Destekli Balensiz Sütyen",
      price: 736.25, // 589 + %25
      image: babydoll2,
      category: "Babydoll"
    },
    {
      id: "7",
      name: "Olivia Balensiz Dikişsiz Lazer Kesim Hafif Destekli Sütyen",
      price: 573.75, // 459 + %25
      originalPrice: 650,
      image: vucutCoraplari2,
      category: "Vücut Çorapları",
      discount: 12
    },
    {
      id: "8",
      name: "Ellie Dikişsiz İce-Silk Görünmez Ultra Hafif Padli Bralet",
      price: 611.25, // 489 + %25
      image: icCamasirTakimi2,
      category: "İç Çamaşır Takımları",
      isNew: true
    },
    {
      id: "9",
      name: "Intive Dantel Detaylı Yumuşacık Püskül Desenli Pijama Takımı",
      price: 436.25, // 349 + %25
      originalPrice: 486.25,
      image: jartiyer3,
      category: "Jartiyer",
      discount: 10
    },
    {
      id: "10",
      name: "YNT Siyah Dantel Detaylı Volanlı Transparan Mini Gecelik",
      price: 580.4, // 464.32 + %25
      originalPrice: 631.25,
      image: babydoll3,
      category: "Babydoll",
      discount: 8
    },
    {
      id: "11",
      name: "YNT Beyaz Fiyonk Detaylı V Yaka Volanlı Transparan Gecelik",
      price: 608, // 486.4 + %25
      originalPrice: 661.25,
      image: babydoll4,
      category: "Babydoll",
      discount: 8
    },
    {
      id: "12",
      name: "YNT Siyah Kiraz Desenli İnce Askılı Derin V Dekolte Mini Gecelik",
      price: 713.8, // 571.04 + %25
      originalPrice: 775.88,
      image: jartiyer4,
      category: "Jartiyer",
      discount: 8
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