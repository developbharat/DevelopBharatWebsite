export default function DataProtection() {
  return (
    <div className="container mx-auto py-10">
      <div className="mx-auto text-center mb-10 lg:mb-14">
        <h1 className="headline">Data Protection</h1>
        <p className="mt-1">Your privacy matters to us at Develop Bharat. Here&apos;s how we protect your data:</p>
      </div>
      <section className="prose dark:prose-invert prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto mt-8 mb-12">
        <h2 className="font-semibold mb-2">1. We Never Sell Your Data</h2>
        <p>
          Your data is yours alone. We never share or sell your personal information to third parties for any reason.
        </p>
        <h2 className="font-semibold mb-2">2. Secure Storage with Encryption</h2>
        <p>
          Your data is stored in encrypted format on our servers. This adds an extra layer of protection against
          unauthorized access.
        </p>
        <h2 className="font-semibold mb-2">3. Round-the-Clock Firewall Protection</h2>
        <p>
          We&apos;ve implemented rigorous firewall measures to shield your data from any potential security threats.
          Your privacy is our priority.
        </p>
        <h2 className="font-semibold mb-2">4. You Have Control</h2>
        <p>
          Want your data gone? Just let us know. We promptly delete your data upon request, and we&apos;re fully
          transparent about the process.
        </p>
        <h2 className="font-semibold mb-2">5. Your Data Stays in India</h2>
        <p>
          We host your data on our own servers within India. This means your information remains within the country and
          under our care.
        </p>
        <p className="mt-8">
          If you have any questions or concerns about your data, please feel free to reach out to us at{' '}
          <a href="mailto:care@developbharat.com" className="text-blue-500">
            care@developbharat.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
