import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LegalModal.css';

export default function LegalModal({ isOpen, onClose, type }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content-wrapper"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="modal-scroll-area">
              {type === 'privacy' && <PrivacyContent />}
              {type === 'terms' && <TermsContent />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PrivacyContent() {
  return (
    <div className="legal-content">
      <h2>Privacy Policy</h2>
      <p><strong>Effective Date: September 27, 2025</strong></p>
      <p>Right Choice Cleaning (“we,” “us,” or “our”) values your privacy. This Privacy Policy explains how we collect, use, and protect your information, including personal data and messaging activity, in compliance with applicable privacy laws and SMS/MMS messaging regulations.</p>
      
      <h3>1. Information We Collect</h3>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, phone number, email address, address, and other details you provide when requesting services.</li>
        <li><strong>Service Details:</strong> Information related to the cleaning services you schedule or receive.</li>
        <li><strong>Messaging Information:</strong> When you opt in to SMS/MMS communications, we may collect metadata such as message content, delivery times, and your responses.</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>Your information is used solely to:</p>
      <ul>
        <li>Schedule and deliver cleaning services</li>
        <li>Confirm, remind, or update you about appointments</li>
        <li>Respond to service questions, rescheduling requests, or concerns</li>
        <li>Send transactional SMS updates (service confirmations, reminders, important notices)</li>
        <li>Send marketing SMS content such as promotions or special offers (only if you explicitly consent)</li>
        <li>Comply with legal obligations and internal operations</li>
      </ul>

      <h3>3. SMS/MMS (Text Messaging) Compliance</h3>
      <p>By providing your mobile number and opting in, you consent to receive SMS messages from Right Choice Cleaning, which may include:</p>
      <ul>
        <li>Transactional messages: Appointment reminders, confirmations, and service updates</li>
        <li>Marketing messages (optional): Promotions, discounts, and offers</li>
      </ul>
      <p>Message frequency may vary. Standard message and data rates may apply.</p>
      <ul>
        <li>Reply <strong>STOP</strong> at any time to unsubscribe</li>
        <li>Reply <strong>HELP</strong> for assistance</li>
      </ul>

      <h4>How We Share Your Information</h4>
      <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing with subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>

      <h3>4. Data Security</h3>
      <p>We implement reasonable safeguards to protect your personal information against unauthorized access, use, or disclosure. However, no method of internet or mobile communication is 100% secure.</p>

      <h3>5. Your Rights</h3>
      <p>You have the right to:</p>
      <ul>
        <li>Review or update your personal information</li>
        <li>Withdraw consent for SMS messages at any time</li>
        <li>Request deletion of your personal data, unless retention is legally required.</li>
      </ul>

      <h3>6. Children’s Privacy</h3>
      <p>Our services are not intended for children under the age of 13. We do not knowingly collect or store personal data from minors.</p>

      <h3>7. Changes to This Policy</h3>
      <p>We may update this Privacy Policy periodically. Updates will be posted on our website with a revised effective date.</p>

      <h3>8. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy or your data, please contact us:</p>
      <address>
        Right Choice Cleaning<br />
        310 Cranford Drive SE<br />
        Calgary, AB T3M 1N1<br />
        Email: <a href="mailto:info@rightchoicecleaning.ca">info@rightchoicecleaning.ca</a><br />
        Phone: <a href="tel:+15873552116">587-355-2116</a><br />
        Text “HELP” to 587-355-2116 for SMS support
      </address>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="legal-content">
      <h2>Terms Of Service</h2>
      <p><strong>Welcome to Right Choice Cleaning Services Inc.</strong></p>
      <p>By booking a service with us — whether through our website, by phone, by email, or by any other method — you agree to comply with and be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, it is recommended that you do not book a service with us.</p>
      
      <h3>Booking Confirmation</h3>
      <p>Booking service online doesn’t guarantee you a spot for that date/time, you will be contacted by email or phone with a confirmation.</p>

      <h3>Cleaning Providers</h3>
      <p>Our providers have been properly vetted & background checked prior to onboarding with us. You can rest assured all of our providers have integrity and are held accountable.</p>

      <h3>Right to Refuse Service</h3>
      <p>We reserve the right to deny &/or terminate service because of safety concerns, inappropriate or uncomfortable situations, weapons on-premises, severe clutter & disconnected utilities including electricity, heat (in cold temperatures) and water.</p>
      <p>Our providers have the choice to leave if the home is in an extremely unsanitary condition or if they feel unsafe/threatened. If you book a cleaning that is unreasonable, the cleaners may refuse service on the spot & you will be charged the cancellation fee.</p>

      <h3>Cleaning Day Preparation</h3>
      <p>Your price for cleaning is based on the cleaners focusing all of their time on cleaning, we ask that you take a few minutes to tidy up to allow the cleaners easy access to the areas/surfaces to be cleaned: floors, counter-tops, tabletops, etc. If you’d like our cleaners to do these tasks for you, call the office in advance so your cleaning fee can be adjusted for the additional time.</p>

      <h3>Add-On Services</h3>
      <p>Additional services are available for an extra charge, including but not limited to:</p>
      <ul>
        <li>Extra pet hair removal</li>
        <li>Inside fridge</li>
        <li>Wall washing</li>
        <li>Interior windows</li>
        <li>Wet wipe/detail blinds</li>
        <li>Inside oven</li>
      </ul>

      <h3>Areas & Services We Do Not Provide</h3>
      <p>We do not handle paint removal or nicotine wall washing.</p>
      <p>We do not clean garages, balconies, or decks. Our focus is on interior living spaces, ensuring they are clean, sanitized, and comfortable for you.</p>
      <p>We do offer exterior window/vinyl cleaning, but this must be booked separately from your interior cleaning appointment.</p>
      <p>If you have specific concerns or questions about what we can or cannot clean, please don’t hesitate to reach out to us.</p>

      <h3>Pets</h3>
      <p>We will gladly work around pets, we ask that indoor activity is limited for cleaning efficiency & safety reasons. If your pet becomes anxious or presents a safety concern, Right Choice Cleaning reserves the right to remove its providers from your home.</p>
      <p>Our providers are instructed not to enter a house if they believe an animal is a threat. Pets may behave differently if a family member is not present. If the removal of our cleaning provider is due to aggressive pets, our cancellation policy will apply.</p>

      <h3>Service Fees</h3>
      <p>Please remember we give these quotes based on years of experience, but we may adjust the price based on the actual condition of the house. To ensure there are no surprises when we arrive & find that the scope of work is greater than anticipated, we’ll call you to let you know. If we are unable to reach you, the provider will have to leave & you will be charged the cancellation fee.</p>
      <p>We reserve the right to reevaluate rates at any time based on the scope of work it takes to perform our service to meet the client’s standards. Right Choice Cleaning will contact the client to discuss price or service revisions if the cleaning time differs significantly.</p>

      <h3>Payments</h3>
      <p>Payments are accepted by e-transfer (preferred) or credit card.</p>
      <ul>
        <li><strong>E-transfers:</strong> Must be sent within 24 hours after the service is completed.</li>
        <li><strong>Credit cards:</strong> A hold will be placed 48 hours before service; the card will be charged after completion of the appointment.</li>
        <li><strong>Payment timeline:</strong> Payment in full is due within 24 hours of the service date, unless otherwise agreed in writing.</li>
      </ul>

      <h3>Late Payments</h3>
      <p>If payment is not received within 10 days of the service date (or another agreed-upon date), a $50 late fee will be applied.</p>
      <p>Repeated late payments may result in suspension or termination of services.</p>
      <p>Right Choice Cleaning reserves the right to require prepayment in full for future bookings from clients with a history of late or missed payments.</p>

      <h3>Refund Policy</h3>
      <p>We do not offer refunds. We have built our business providing our clients with the best possible service available. Still, we realize that we are human and things may get missed from time to time. Should this happen, email or call us within 24 hours & we will correct the error at no charge.</p>

      <h3>Recurring Service Discount</h3>
      <p>Recurring discounts start AFTER the first cleaning service. If you skip cleanings so that your cleaning frequency is lower than what you were set up for, your price will be increased to the pricing level for the lower frequency.</p>

      <h3>Rate Increases</h3>
      <p>Client’s cleaning rate adjustments may be made at any time during the year should there be changes to the frequency of the client’s established service schedule or home or living situation: remodel, change of address, number of people living in the home, a significant addition of furniture, etc. The customer’s rate shall be increased annually, by an amount not-to-exceed 10% of the client’s current rate.</p>

      <h3>Lockouts</h3>
      <p>The client shall make the service location accessible to Right Choice Cleaning providers on the scheduled service day. If the team is locked out of the client’s home, every effort will be made to establish contact with the client to arrange for entry into the home. If contact is not made within 30 minutes of the arrival of the cleaning team, the scheduled cleaning will be skipped & you will be charged full value of the clean. This is necessary to compensate the providers for unexpected lost revenue & time travel. To avoid the fee, provide us with a key or code to gain entry to your home.</p>

      <h3>Booking Confirmation & Payment Authorization</h3>
      <p>To confirm any cleaning appointment, a valid credit or VISA debit card must be placed on file at the time of booking.</p>
      <p>A $100 non-refundable deposit is required to secure your appointment. This deposit will be applied toward the total cost of your cleaning service and will be deducted from the final invoice upon completion of the clean.</p>
      <p>By providing your card information, you authorize RIGHT CHOICE CLEANING SERVICES INC. to charge the deposit and any applicable fees in accordance with these TERMS & CONDITIONS.</p>

      <h3>Cancellation and Rescheduling Policy</h3>
      <p>Service reliability is extremely important, as we reserve time specifically for you.</p>
      <p>We kindly request a minimum of 2 business days’ notice for any cancellation or rescheduling of a booked cleaning appointment.</p>
      <p>This notice period allows us to protect our cleaners’ schedules, as this is their primary source of income.</p>
      <p>Cancellations or reschedules made with at least 2 business days’ notice:</p>
      <ul>
        <li>No cancellation fee will apply, and your $100 non-refundable deposit may be credited toward a future booking (at our discretion).</li>
      </ul>
      <p>Cancellations or reschedules made with less than 2 business days’ notice:</p>
      <ul>
        <li>If cancellation or rescheduling occurs within 2 business days of the scheduled service date, the client will be responsible for a cancellation fee equal to 50% of the total scheduled service price. The $100 non-refundable deposit will be applied toward this amount, and any remaining balance will be charged to the card on file.</li>
      </ul>

      <h3>Alarm</h3>
      <p>If your home is equipped with a security system, please ensure that it is in the off position or call our office with the code & proper directions for use. If the code should change please let us know so you do not incur a lockout charge.</p>

      <h3>Use of Homeowner’s Vacuum</h3>
      <p>If you request to use your vacuum, we will not assume or accept any liability for damage to the unit. Since we are not responsible for the maintenance of the vacuum, we will not be responsible for any repairs to it. This is important because if the vacuum is not in working order when we arrive to clean your home, we will not be able to perform any vacuuming of carpet & hard floor surfaces.</p>

      <h3>Cleaning Supplies</h3>
      <p>We provide the equipment & products needed to thoroughly clean your home, if you require us to use green cleaning products only, please let us know before we start the service.</p>
      <p>If you require to use your cleaning supplies, note that we are not responsible for any damage associated with those products. When this request is made, we ask that you have the cleaning chemicals & supplies ready so we can perform our cleaning service as efficiently as possible.</p>

      <h3>Items We Cannot Clean</h3>
      <p>Mold removal is a specialty, we cannot be liable for any mold-related risks in clients’ homes.</p>
      <p>We cannot clean hoarding homes or areas containing any animals' & humans’ body fluids, blood, feces, vomit, cat litter boxes, bird cages & urine/excretions, or homes infested with insects.</p>

      <h3>Unreachable Areas & Heavy items</h3>
      <p>For safety & liability reasons our providers can’t climb higher than a step stool or work outside of your home. Cleaners can’t move objects more than 35 pounds. If you would like to clean behind heavy objects, please move prior to cleaning.</p>

      <h3>Limitations of Cleaning Services</h3>
      <p>Right Choice Cleaning Services Inc. takes pride in providing thorough and professional cleaning services. However, despite our cleaners' best efforts and the use of high-quality cleaning products, certain stains and discolorations may be permanent or deeply embedded beneath the surface layers of materials such as countertops, cupboards, and other surfaces.</p>
      <p>Additionally, some surfaces, no matter how many times they are cleaned or wiped, may not be restored to their original condition due to factors such as wear and tear, aging, or permanent damage. While the surface will be thoroughly cleaned, its appearance may not look brand new.</p>
      <p>Clients are advised that these outcomes are normal and may require specialized treatments or replacement to achieve full restoration. By agreeing to our services, clients acknowledge these limitations and accept that some results may be beyond the scope of standard cleaning procedures.</p>

      <h3>Breakage/Damage & Loss Policy</h3>
      <p>While an occurrence is rare, the possibility of breakage or damage is present while we clean. Our cleaners exercise reasonable care when cleaning your home. All providers carry insurance for damage or breakage caused by the provider.</p>
      <p>We are not liable for damage that is caused by normal wear & tear, improper installation of an item in your home, artwork, collectibles, or family heirlooms not disclosed during the booking process. These items include but are not limited to the following:</p>
      <ul>
        <li>Artwork, Collectibles & Family Heirlooms: These items are expensive & impossible to replace, the client should point out such items to us before starting service, please advise us how you would like your fragile items handled & their care.</li>
      </ul>
      <p>Notification must be made within 24 hours of breakage/loss of any personal items. Identical replacement is always attempted but not guaranteed.</p>

      <h3>Cleaners Arrival Window</h3>
      <p>We schedule our cleanings in an order that requires the least amount of drive time in an effort to maintain low prices & avoid trip fees, if you require a specific time, we will make every effort to accommodate your request However, no times are guaranteed.</p>
      <p>Due to the unpredictable nature of our business & unforeseen circumstances traffic jams, weather, mechanical problems, allow us the flexibility of scheduling our cleaning between 8:00 am & 4:00 pm.</p>
      <p>We generally arrive within a 2 hour window period disclosed within your booking. If we are running late we will call you or text you.</p>

      <h3>Holidays</h3>
      <p>Right Choice Cleaning does not do stat holiday visits.</p>
      <p>If your scheduled day falls on a stat holiday, we will contact you to reschedule.</p>

      <h3>House Key/Key Release</h3>
      <p>In the event the client chooses to leave a door unlocked or place a key under a mat or any other unsecured place for the cleaners to gain entry into the home, Right Choice Cleaning will not be held liable for any damages or theft to the client's home.</p>
      <p>Upon termination/cancellation of services, Right Choice Cleaning shall return any client key(s) in its possession no later than 48 hours after termination of services or the next business day.</p>

      <h3>Non-Solicitation of Right Choice Cleaning Providers</h3>
      <p>As our customer, we ask that you agree not to solicit for hire any of our providers to work directly for you. Our professional cleaners are vetted, background checked, and have experience as cleaners. Significant time, resources & money are invested in each new provider before we allow them to enter our customer’s homes.</p>

      <h3>Governing Law</h3>
      <p>Any claim relating to our website (rightchoicecleaning.ca) shall be governed by the laws of the Province of Alberta without regard to its conflict of law provisions.</p>
      <p>We have taken every effort to design our website to be useful, informative, helpful & honest. Hopefully, we have accomplished that & would ask that you let us know if you would like to see improvements or changes that would make it even easier for you to find the information you need.</p>
      <p>Right Choice Cleaning reserves the right to change these terms & conditions at any time without prior notice to you.</p>

      <p>© 2026 Right Choice Cleaning</p>
    </div>
  );
}
