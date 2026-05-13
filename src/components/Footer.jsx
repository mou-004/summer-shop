export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold text-accent">SunCart</h3>
          <p className="mt-3 text-sm opacity-90">Your summer essentials store for sunny days, travel, care, and style.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <p className="text-sm opacity-90">Email: support@suncart.com</p>
          <p className="text-sm opacity-90">Phone: +880 1234 567890</p>
          <p className="text-sm opacity-90">Address: Summer Avenue, Dhaka</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a className="hover:text-accent transition" href="#">Facebook</a>
            <a className="hover:text-accent transition" href="#">Instagram</a>
            <a className="hover:text-accent transition" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
