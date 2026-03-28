export function SiteFooter() {
  return (
    <footer className="border-t border-ink/5 bg-white px-5 py-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-medium text-ink">Apex Assist</p>
        <p className="mt-2 text-sm text-ink/55">
          Serving Brighton, Victoria (10-minute radius from Dendy St)
        </p>
        <p className="mt-6 text-xs text-ink/40">
          © {new Date().getFullYear()} Apex Assist. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
