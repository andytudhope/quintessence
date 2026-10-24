import Link from "next/link";

const Footer = () => {
    return (
      <footer className="border-t-4 border-[#006838] shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <Link
              href="/subscribe"
              className="inline-block rounded-full px-6 py-2 bg-[#006838] text-white font-semibold hover:bg-[#00572f] transition-colors"
            >
              Join our reader list
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Questions?{" "}
              <a
                href="mailto:info@qpublish.com"
                className="underline hover:text-[#006838] transition-colors"
              >
                info@qpublish.com
              </a>
            </p>
          </div>
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm border-t pt-6">
            <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Quintessence Publishing</p>
            <p>© {new Date().getFullYear()} Quintessence Publishing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
