import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+905453638020";
    const message = "Merhaba! AslıGibi ürünleri hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Expanded Chat Widget */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border border-border p-4 w-80 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-futura font-medium text-foreground">AslıGibi Destek</h3>
                <p className="text-sm text-green-500 font-futura">Çevrimiçi</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleExpanded}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            <div className="bg-muted rounded-lg p-3">
              <p className="text-sm font-futura text-foreground">
                Merhaba! Size nasıl yardımcı olabilirim? 😊
              </p>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <p className="text-sm font-futura text-foreground">
                Ürünlerimiz hakkında detaylı bilgi almak için mesaj gönderebilirsiniz.
              </p>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-futura"
            >
              WhatsApp'ta Sohbet Başlat
            </Button>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
        <Button
          onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;