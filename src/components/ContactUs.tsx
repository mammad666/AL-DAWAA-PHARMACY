import { Instagram, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function PharmacyContact() {
  return (
    <div
      id="contactus"
      className="bg-gradient-to-br from-green-50 to-blue-50  flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              We're here to help and answer any questions you might have. We
              look forward to hearing from you!
            </p>

            <div className="space-y-4">
              <a
                href="tel:+919544633225"
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 95446 33225</span>
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

            <div className="mt-8 space-x-4">
              <a
                href="https://wa.me/+919072776776"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/al_dawaa_?igsh=ZmZ0d3M2YjhhejEz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow on Instagram
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.8118321782204!2d76.47408177487301!3d10.114483289996848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e28af76dfdbf%3A0x5747dc12f22bf9c9!2sAl-Dawaa%20Pharma!5e0!3m2!1sen!2sin!4v1731919972493!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
