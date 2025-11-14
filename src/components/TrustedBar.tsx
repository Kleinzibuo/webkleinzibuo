export default function TrustedBar() {
  const logos = [
    '/logos/logo1.svg',
    '/logos/logo2.svg',
    '/logos/logo3.svg',
    '/logos/logo4.svg',
    '/logos/logo5.svg'
  ]
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between gap-6">
        <div className="text-sm text-slate-600">Trusted by 500+ Preschools Nationwide</div>
        <div className="flex gap-6 items-center">
          {logos.map((l) => (
            <img key={l} src={l} alt="partner logo" className="h-6 opacity-80" />
          ))}
        </div>
      </div>
    </div>
  )
}
