import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import asligibiLogo from "@/assets/asligibi-logo.png";
import tozSolutionsLogo from "@/assets/toz-solutions-logo.png";

const Footer = () => {
  const categories = [
    { name: "Jartiyer", href: "/jartiyer" },
    { name: "Babydoll", href: "/babydoll" },
    { name: "Vücut Çorapları", href: "/vucutcoraplari" },
    { name: "İç Çamaşır Takımları", href: "/iccamasirtakimlari" },
  ];

  const customerService = [
    { name: "İade ve Değişim", href: "/iade-degisim" },
    { name: "Kargo Bilgileri", href: "/kargo" },
    { name: "Beden Rehberi", href: "/beden-rehberi" },
    { name: "Sıkça Sorulan Sorular", href: "/sss" },
  ];

  const company = [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Gizlilik Politikası", href: "/gizlilik" },
    { name: "Kullanım Koşulları", href: "/kullanim-kosullari" },
    { name: "Çerez Politikası", href: "/cerez-politikasi" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={asligibiLogo} 
                alt="AslıGibi" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-futura font-bold">AslıGibi</span>
            </Link>
            <p className="text-sm font-futura opacity-90">
              Birbirinden şık ve kaliteli iç çamaşır modelleri ile kadınların kendilerini 
              özel hissetmelerini sağlıyoruz.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-futura font-bold">Kategoriler</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-sm font-futura opacity-90 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-futura font-bold">Müşteri Hizmetleri</h3>
            <ul className="space-y-2">
              {customerService.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm font-futura opacity-90 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-futura font-bold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm font-futura">+90 545 363 80 20</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm font-futura">merhaba@asligibi.app</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-futura">https://asligibi2.netlify.app/</span>
              </div>
            </div>
          </div>
        </div>

        {/* Diğer Pazaryerleri */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <h3 className="text-lg font-futura font-bold mb-6 text-center">
            Diğer Pazaryerlerindeki Mağazalarımız
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Placeholder for marketplace logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-background rounded-lg p-4 flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/placeholder.svg"
                  alt={`Marketplace ${i}`}
                  className="h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Diğer Logo Tasarımlarımız */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <h3 className="text-lg font-futura font-bold mb-6 text-center">
            Diğer Logo Tasarımlarımız
          </h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {/* Placeholder for logo designs */}
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
              <div
                key={i}
                className="bg-background rounded-lg p-4 flex items-center justify-center h-20 w-20 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/placeholder.svg"
                  alt={`Logo ${i}`}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-sm font-futura opacity-90">
              © 2024 AslıGibi. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-futura opacity-90">Design By</span>
              <img
                src={tozSolutionsLogo}
                alt="Toz Solutions"
                className="h-6 w-auto"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {company.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs font-futura opacity-90 hover:opacity-100 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;