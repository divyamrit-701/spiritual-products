import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'divyamrit-dhoop-40',
    name: 'Divyamrit Pure Bambooless Dhoop Sticks',
    hindiName: 'शुद्ध मैसूर चंदन व गुग्गल धूप बत्ती',
    slug: 'pure-bambooless-dhoop-sticks',
    category: 'dhoop-sticks',
    categoryName: 'Dhoop Sticks',
    shortDescription: 'Rich, soothing fragrance designed to create a calm and serene atmosphere during your daily rituals. 100% bamboo & charcoal free.',
    description: 'Divyamrit Pure Bambooless Dhoop Sticks are handcrafted in accordance with ancient Vedic Dhoopa Vidhana. Made with pure aged Mysore sandalwood powder, wild Guggal resin, and natural botanical binders without bamboo sticks or industrial charcoal. Each stick burns for 45 to 50 minutes, producing clean, sacred white smoke that purifies your living sanctuary.',
    price: 349,
    mrp: 399,
    discountPercentage: 13,
    images: [
      '/images/cat_dhoop.jpg',
      '/images/dhoop_feature.jpg',
      '/images/hero_slide_2.jpg'
    ],
    fragrance: 'Mysore Sandalwood & Wild Guggal',
    burnTime: '45 - 50 Minutes per stick',
    packSize: 'Pack of 40 Sticks + Ceramic Stand',
    ingredients: ['Pure Mysore Sandalwood Powder', 'Wild Desert Guggal Resin', 'Himalayan Cedarwood Dust', 'Natural Tree Bark Gum'],
    charcoalFree: true,
    bambooFree: true,
    naturalResins: true,
    inStock: true,
    stock: 250,
    rating: 4.9,
    reviewCount: 184,
    featured: true,
    bestseller: true,
    newArrival: false,
    variants: [
      { id: 'v-dhoop-40', name: 'Pack of 40 Sticks', price: 349, mrp: 399, inStock: true },
      { id: 'v-dhoop-80', name: 'Value Pack of 80 Sticks (Save ₹100)', price: 599, mrp: 798, inStock: true }
    ],
    howToUse: [
      'Place the dhoop stick upright in the provided ceramic holder.',
      'Light the tip until a small golden flame appears for 5-10 seconds.',
      'Gently blow out the flame and let the sacred aromatic smoke diffuse naturally.',
      'Always place on a heat-resistant surface away from curtains or open breeze.'
    ],
    benefits: [
      '100% Bamboo-Free respecting traditional domestic Agni principles',
      'Zero Charcoal & Zero Chemical combustion enhancers',
      'Purifies indoor air and calms the nervous system for meditation',
      'Slow uniform burn with zero headache-inducing synthetic perfumes'
    ],
    frequentlyBoughtTogetherIds: ['divyamrit-camphor-250', 'divyamrit-combo-duo'],
    tags: ['dhoop', 'bambooless', 'sandalwood', 'guggal', 'charcoal-free', 'bestseller']
  },
  {
    id: 'divyamrit-camphor-250',
    name: 'Divyamrit 100% Pure Bhimseni Camphor Box',
    hindiName: 'भीमसेनी शुद्ध कपूर क्रिस्टल (100% प्राकृतिक)',
    slug: 'pure-bhimseni-camphor-box',
    category: 'camphor',
    categoryName: 'Bhimseni Camphor',
    shortDescription: 'Pure, clean-burning camphor for daily puja and traditional rituals. Naturally crystallized with 0.00% black soot.',
    description: 'Divyamrit 100% Pure Bhimseni Camphor is naturally extracted and crystallized from organic pine bark and Cinnamomum camphora. Unlike synthetic wax camphor tablets, pure Bhimseni camphor burns with a holy golden-blue flame and sublimates completely into the atmosphere without leaving any black carbon residue, oily marks, or toxic soot on your brass idols or temple ceilings.',
    price: 449,
    mrp: 499,
    discountPercentage: 10,
    images: [
      '/images/cat_camphor.jpg',
      '/images/camphor_feature.jpg',
      '/images/hero_slide_3.jpg'
    ],
    fragrance: 'Crisp Natural Pine & Botanical Karpur',
    burnTime: 'Instant Aarti Flame / 4-6 hrs in electric diffuser',
    packSize: '250g Heavy Airtight Metal Jar',
    ingredients: ['100% Pure Naturally Crystallized Bhimseni Camphor'],
    charcoalFree: true,
    bambooFree: true,
    naturalResins: true,
    inStock: true,
    stock: 320,
    rating: 5.0,
    reviewCount: 246,
    featured: true,
    bestseller: true,
    newArrival: false,
    variants: [
      { id: 'v-camphor-250', name: '250g Airtight Jar', price: 449, mrp: 499, inStock: true },
      { id: 'v-camphor-500', name: '500g Value Temple Pack (Save ₹150)', price: 799, mrp: 998, inStock: true }
    ],
    howToUse: [
      'Take 1 or 2 medium crystal chunks in a brass aarti spoon or diya.',
      'Touch with a matchstick flame to ignite the sacred blue flame.',
      'For room aromatherapy, place a small chunk on an electric aroma burner diffuser.',
      'Keep the lid tightly closed after every use to prevent natural sublimation.'
    ],
    benefits: [
      'Leaves 0.00% black soot or oily residue on brass murtis',
      'Releases therapeutic vapors that clear respiratory airways',
      'Instantly cleanses heavy stagnant prana and creates positive Vastu aura',
      'Packed in moisture-proof airtight gold jar to preserve aroma for 24 months'
    ],
    frequentlyBoughtTogetherIds: ['divyamrit-dhoop-40', 'divyamrit-combo-duo'],
    tags: ['camphor', 'bhimseni', 'karpur', 'zero-soot', 'pure-crystal', 'bestseller']
  },
  {
    id: 'divyamrit-combo-duo',
    name: 'Divyamrit Sacred Sadhana Duo (Dhoop + Camphor)',
    hindiName: 'दिव्यामृत नित्य साधना कॉम्बो (धूप + भीमसेनी कपूर)',
    slug: 'sacred-sadhana-duo-combo',
    category: 'combo-packs',
    categoryName: 'Combo Offers',
    shortDescription: 'The complete daily worship pairing. 40 Bambooless Dhoop Sticks + 250g Pure Bhimseni Camphor Jar with Free Shipping.',
    description: 'Experience total peace and auspiciousness in your daily prayers with the Divyamrit Sacred Sadhana Duo. This carefully curated set brings together our two flagship essentials: 40 sticks of Bambooless Mysore Sandalwood Dhoop and a 250g Jar of 100% Pure Bhimseni Camphor. Includes a free ceramic dhoop stand and arrives in an elegant gift-ready presentation with Free Express Delivery across India.',
    price: 749,
    mrp: 898,
    discountPercentage: 17,
    images: [
      '/images/cat_combo.jpg',
      '/images/hero_slide_4.jpg',
      '/images/hero_slide_1.jpg'
    ],
    fragrance: 'Mysore Sandalwood, Guggal & Pure Karpur',
    burnTime: 'Complete Daily Puja Kit',
    packSize: 'Dhoop (40 Sticks) + Camphor (250g Jar)',
    ingredients: ['Mysore Sandalwood Dhoop Sticks', 'Bhimseni Camphor Crystals', 'Handcrafted Ceramic Stand'],
    charcoalFree: true,
    bambooFree: true,
    naturalResins: true,
    inStock: true,
    stock: 180,
    rating: 5.0,
    reviewCount: 312,
    featured: true,
    bestseller: true,
    newArrival: false,
    variants: [
      { id: 'v-combo-std', name: 'Standard Duo (40s Dhoop + 250g Camphor)', price: 749, mrp: 898, inStock: true },
      { id: 'v-combo-family', name: 'Grand Family Kit (80s Dhoop + 500g Camphor)', price: 1349, mrp: 1696, inStock: true }
    ],
    howToUse: [
      'Light a dhoop stick at sunrise for morning dhyana and meditation.',
      'Perform evening Sandhya Aarti with pure Bhimseni camphor chunks.',
      'Enjoy complete spiritual purity and serene home ambiance.'
    ],
    benefits: [
      'Complete everyday puja solution in one auspicious box',
      'Save ₹149 instantly compared to buying individual items',
      'Eligible for Free Express Air Shipping across all 28,000+ PIN codes',
      'Auspicious gift for Griha Pravesh, Diwali, and family blessings'
    ],
    frequentlyBoughtTogetherIds: ['divyamrit-dhoop-40', 'divyamrit-camphor-250'],
    tags: ['combo', 'dhoop', 'camphor', 'bestseller', 'gift-set', 'free-shipping']
  },
  {
    id: 'divyamrit-dhoop-mega',
    name: 'Divyamrit Bambooless Dhoop Sticks (Mega Mandir Pack - 120 Sticks)',
    hindiName: 'मैसूर चंदन धूप बत्ती (मंदिर महा पैक - १२० बत्ती)',
    slug: 'bambooless-dhoop-sticks-mega-pack',
    category: 'dhoop-sticks',
    categoryName: 'Dhoop Sticks',
    shortDescription: 'Mega value temple pack of 120 pure bambooless sandalwood & guggal dhoop sticks for daily worship.',
    description: 'Created for households with daily morning & evening prayers or ashrams and temples. Contains 120 slow-burning sticks in moisture-sealed eco-friendly pouches with two ceramic holders.',
    price: 899,
    mrp: 1049,
    discountPercentage: 14,
    images: [
      '/images/cat_dhoop.jpg',
      '/images/dhoop_feature.jpg'
    ],
    fragrance: 'Mysore Sandalwood & Wild Guggal',
    burnTime: '45 - 50 Minutes per stick',
    packSize: '120 Sticks + 2 Ceramic Stands',
    ingredients: ['Pure Mysore Sandalwood Powder', 'Wild Desert Guggal Resin', 'Himalayan Cedarwood Dust'],
    charcoalFree: true,
    bambooFree: true,
    naturalResins: true,
    inStock: true,
    stock: 140,
    rating: 4.9,
    reviewCount: 96,
    featured: false,
    bestseller: false,
    newArrival: true,
    tags: ['dhoop', 'mega-pack', 'sandalwood', 'value-pack']
  },
  {
    id: 'divyamrit-camphor-refill-500',
    name: 'Divyamrit Pure Bhimseni Camphor (Eco Refill Pouch - 500g)',
    hindiName: 'भीमसेनी शुद्ध कपूर क्रिस्टल (५०० ग्राम रिफिल पैक)',
    slug: 'pure-bhimseni-camphor-refill-pouch',
    category: 'camphor',
    categoryName: 'Bhimseni Camphor',
    shortDescription: '500g eco-refill pouch of 100% pure Bhimseni camphor chunks with airtight zip lock.',
    description: 'Eco-conscious 500g refill pack of our purest crystalline Bhimseni camphor. Perfect for refilling your Divyamrit gold jar or daily aarti bowls. Zero black smoke, 100% pure organic camphor.',
    price: 799,
    mrp: 949,
    discountPercentage: 16,
    images: [
      '/images/cat_camphor.jpg',
      '/images/camphor_feature.jpg'
    ],
    fragrance: 'Crisp Natural Pine & Botanical Karpur',
    burnTime: '500g Multi-Month Supply',
    packSize: '500g Heavy Zip-Lock Pouch',
    ingredients: ['100% Pure Crystalline Bhimseni Camphor'],
    charcoalFree: true,
    bambooFree: true,
    naturalResins: true,
    inStock: true,
    stock: 190,
    rating: 5.0,
    reviewCount: 114,
    featured: false,
    bestseller: false,
    newArrival: true,
    tags: ['camphor', 'refill-pack', 'bhimseni', 'pure-crystal']
  }
];
