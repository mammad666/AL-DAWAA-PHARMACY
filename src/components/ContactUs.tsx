import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ModernPharmacyContact() {
  return (
    <div
      id="contactus"
      className="bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <Card className="max-w-5xl mx-auto overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you!
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+919072226776"
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+91 90722 26776</span>
                </a>
                <a
                  href="tel:+918714347511"
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+91 87143 47511</span>
                </a>
                <a
                  href="mailto:aldawaapharmapbvr@gmail.com"
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>aldawaapharmapbvr@gmail.com</span>
                </a>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Perumbavoor, Thandekkadu, Aluva</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Shop Hours
                </h3>
                <p className="text-gray-600">Open daily: 7:00 AM - 12:00 AM</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="default"
                  className="bg-green-500 hover:bg-green-600"
                >
                  <a
                    href="https://wa.me/+919072776776"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button
                  asChild
                  variant="default"
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  <a
                    href="https://www.instagram.com/al_dawaa_?igsh=ZmZ0d3M2YjhhejEz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
          <div className="md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.8118321782204!2d76.47408177487301!3d10.114483289996848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e28af76dfdbf%3A0x5747dc12f22bf9c9!2sAl-Dawaa%20Pharma!5e0!3m2!1sen!2sin!4v1731919972493!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Card>
    </div>
  );
}
