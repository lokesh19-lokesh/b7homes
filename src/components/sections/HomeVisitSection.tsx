import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Calendar, User, Phone, Mail, MapPin, MessageSquare, CheckCircle2, Sparkles, Shield, Clock } from 'lucide-react';

export const HomeVisitSection: React.FC = () => {
  const { addToast } = useShop();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    locality: 'Tellapur',
    serviceType: 'Bespoke Solid Wood Furniture',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<{ id: string; name: string } | null>(null);

  const hyderabadLocalities = [
    'Tellapur',
    'Gachibowli',
    'Jubilee Hills',
    'Banjara Hills',
    'Hitec City',
    'Kokapet',
    'Kondapur',
    'Financial District',
    'Madhapur',
    'Miyapur',
    'Secunderabad',
    'Other Hyderabad Area'
  ];

  const serviceOptions = [
    'Bespoke Solid Wood Furniture',
    'Custom L-Shape Sectional / Sofa',
    'Hydraulic Storage Bed & Cot',
    'Solid Teak Dining Table Set',
    'B7 Sofa Clinic Restoration',
    'Full Home Bespoke Carpentry'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const bookingId = 'B7-VISIT-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedBooking({ id: bookingId, name: formData.fullName });
    addToast(
      'Home Visit Consultation Confirmed',
      `Booking ID ${bookingId} has been scheduled. Our specialist will call you shortly.`,
      'success'
    );
  };

  return (
    <section id="book-visit" className="py-20 sm:py-28 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-luxury-lg border border-[#D8CBB9]/60 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Image & Highlights (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-[#252523] text-white p-8 sm:p-12 flex flex-col justify-between">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Furniture consultant discussing bespoke interior materials with customer"
                className="w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252523] via-[#252523]/80 to-transparent" />
            </div>

            {/* Content on Image */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#A8875B]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#D8CBB9]">
                  Personalised Service
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light leading-tight">
                Let's Design Your <br />
                <span className="italic font-normal text-[#D8CBB9]">Space Together.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE7DC]/85 leading-relaxed">
                Experience personalised furniture consultation at your home. Explore authentic wood samples, 150+ fabric swatches, discuss your space requirements and discover furniture designed around your lifestyle.
              </p>
            </div>

            {/* Trust points */}
            <div className="relative z-10 pt-8 border-t border-white/20 space-y-3 text-xs text-[#EDE7DC]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>Zero Consultation Fee across Hyderabad</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>Physical Timber Blocks & Fabric Swatches at Doorstep</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>Laser Precision Room Dimension Measurements</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>Transparent Direct-to-Factory Quotation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
            {submittedBooking ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#252523] font-normal">
                  Consultation Scheduled!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5A55] max-w-md leading-relaxed">
                  Thank you, <strong className="text-[#252523]">{submittedBooking.name}</strong>. Our senior Tellapur carpentry consultant has received your home visit request.
                </p>

                <div className="p-4 bg-[#F8F5EF] rounded-2xl border border-[#EDE7DC] text-xs text-left w-full max-w-sm space-y-2 mt-4 text-[#49362B]">
                  <div className="flex justify-between">
                    <span className="text-[#7A7A73]">Reference ID:</span>
                    <span className="font-mono font-bold">{submittedBooking.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A7A73]">Location:</span>
                    <span className="font-medium">{formData.locality}, Hyderabad</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A7A73]">Preferred Date:</span>
                    <span className="font-medium">{formData.preferredDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A7A73]">Service:</span>
                    <span className="font-medium">{formData.serviceType}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmittedBooking(null)}
                  className="mt-4 px-6 py-2.5 bg-[#49362B] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#35271F] transition-colors"
                >
                  Book Another Visit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h4 className="font-serif text-2xl text-[#252523] font-normal">
                    Schedule Your Free Home Consultation
                  </h4>
                  <p className="text-xs text-[#5A5A55] mt-1">
                    Select your preferred time; our team in Tellapur will confirm within 2 business hours.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#252523] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Swathi Reddy"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-[#252523] outline-none transition-colors ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-[#D8CBB9] focus:border-[#A8875B] bg-[#F8F5EF]/40'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252523] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-[#252523] outline-none transition-colors ${
                          errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-[#D8CBB9] focus:border-[#A8875B] bg-[#F8F5EF]/40'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email & Locality */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#252523] uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-[#252523] outline-none transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-[#D8CBB9] focus:border-[#A8875B] bg-[#F8F5EF]/40'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252523] uppercase tracking-wider mb-1.5">
                      Hyderabad Locality *
                    </label>
                    <select
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8CBB9] focus:border-[#A8875B] bg-[#F8F5EF]/40 text-xs sm:text-sm text-[#252523] outline-none"
                    >
                      {hyderabadLocalities.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Type & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#252523] uppercase tracking-wider mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8CBB9] focus:border-[#A8875B] bg-[#F8F5EF]/40 text-xs sm:text-sm text-[#252523] outline-none"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252523] uppercase tracking-wider mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-[#252523] outline-none transition-colors ${
                        errors.preferredDate ? 'border-rose-400 bg-rose-50/30' : 'border-[#D8CBB9] focus:border-[#A8875B] bg-[#F8F5EF]/40'
                      }`}
                    />
                    {errors.preferredDate && <p className="text-[11px] text-rose-500 mt-1">{errors.preferredDate}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#252523] uppercase tracking-wider mb-1.5">
                    Your Requirements / Room Dimensions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room size, preferred solid wood, or sofa restoration requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D8CBB9] focus:border-[#A8875B] bg-[#F8F5EF]/40 text-xs sm:text-sm text-[#252523] outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#49362B] hover:bg-[#35271F] text-white rounded-xl text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 shadow-luxury transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 text-[#D8CBB9]" />
                  <span>Book Your Home Visit</span>
                </button>

                <p className="text-[11px] text-center text-[#7A7A73]">
                  By submitting, our Tellapur desk will reach out to confirm time & sample requirements.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

