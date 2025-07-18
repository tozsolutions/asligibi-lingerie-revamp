import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import categoryJartiyer from "@/assets/category-jartiyer.jpg";
import categoryBabydoll from "@/assets/category-babydoll.jpg";
import categoryVucutcoraplari from "@/assets/category-vucutcoraplari.jpg";
import categoryIccamasirtakimlari from "@/assets/category-iccamasirtakimlari.jpg";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Jartiyer",
      href: "/jartiyer",
      image: categoryJartiyer,
      description: "Şık ve zarif jartiyer modelleri"
    },
    {
      name: "Babydoll",
      href: "/babydoll",
      image: categoryBabydoll,
      description: "Romantik babydoll koleksiyonu"
    },
    {
      name: "Vücut Çorapları",
      href: "/vucutcoraplari",
      image: categoryVucutcoraplari,
      description: "Seksi vücut çorapları"
    },
    {
      name: "İç Çamaşır Takımları",
      href: "/iccamasirtakimlari",
      image: categoryIccamasirtakimlari,
      description: "Çiftli iç çamaşır takımları"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-futura font-bold text-foreground mb-4">
            Kategoriler
          </h2>
          <p className="text-lg text-muted-foreground font-futura max-w-2xl mx-auto">
            Birbirinden özel koleksiyonlarımızı keşfedin
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} to={category.href} className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-futura font-bold mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm font-futura opacity-90">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;