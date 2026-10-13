import NewsletterSignup from "./NewsletterSignup";

const Footer = () => {
    return (
      <footer className="border-t shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <NewsletterSignup />
          <div className="text-center text-gray-600 text-sm border-t pt-6">
            <p className="font-semibold text-gray-800 mb-1">Quintessence Publishing</p>
            <p>© {new Date().getFullYear()} Quintessence Publishing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;