// ---------------------------------------------------------------------------
// The centre's contact details, in one place.
// `tel` is the dial string (E.164, no spaces); `label` is what a reader sees.
// ---------------------------------------------------------------------------

export const phone = { tel: '+96181863510', label: '81 863 510', intl: '+961 81 863 510' } as const;

// WhatsApp is the centre's main channel; every "message us" button opens it.
export const whatsapp = 'https://wa.me/96181863510';

/** A WhatsApp link with a pre-written first message. */
export function whatsappWith(text: string): string {
  return `${whatsapp}?text=${encodeURIComponent(text)}`;
}

export const instagram = {
  handle: 'aleph.edu.lb',
  url: 'https://www.instagram.com/aleph.edu.lb/',
} as const;

export const address = {
  ar: 'عربصاليم – الطريق العام، لبنان',
  en: 'Arabsalim – Main Road, Lebanon',
} as const;

// PLACEHOLDER - a town-level search until the centre shares its exact map pin.
export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Arabsalim%2C%20Lebanon';
export const mapEmbed = 'https://www.google.com/maps?q=Arabsalim,+Lebanon&z=14&output=embed';

// The online portal. Leave as null until it is live: every portal button then
// renders as a disabled "coming soon" control instead of a dead link.
// Set it to the portal's address to switch all of them on at once
// (header, footer and contact page).
export const portalUrl: string | null = null;
