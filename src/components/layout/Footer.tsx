import Link from "next/link";

const Footer = () => {
    return (
      <footer className="border-t shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <Link
              href="/subscribe"
              className="inline-block border border-gray-400 dark:border-gray-500 rounded px-6 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Join our reader list
            </Link>
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
