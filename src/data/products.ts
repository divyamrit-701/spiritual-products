import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // 1. Dhoop Sticks
  {
    id: 'prod-dhoop-01',
    name: 'Mysore Sandalwood Bambooless Dhoop Sticks',
    hindiName: 'मैसूर चंदन शुद्ध धूप बत्ती',
    slug: 'mysore-sandalwood-bambooless-dhoop-sticks',
    category: 'dhoop-sticks',
    categoryName: 'Dhoop Sticks & Cones',
    shortDescription: '100% bamboo-free, charcoal-free dhoop sticks infused with pure Karnataka Santalum album wood powder & essential oil.',
    description: 'Crafted according to classical Vedic Dhoopa Vidhana, our Mysore Sandalwood Dhoop sticks produce a serene, velvety smoke that cleanses negative vibrations and settles the wandering mind. Made without bamboo cores or toxic burning agents, each stick is hand-pressed with aged sandalwood dust, wild honey, and natural plant resins.',
    price: 349,
    mrp: 449,
    discountPercentage: 22,
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Mysore Sandalwood',
    fragranceProfile: {
      topNotes: ['Warm Cedar', 'Sacred Camphor touch'],
      heartNotes: ['Pure Mysore Sandalwood', 'Wild Honey'],
      baseNotes: ['Earthy Amber', 'Frankincense Resin'],
      intensity: 'Rich & Long-Lasting',
      aura: 'Deep Meditation & Mental Clarity'
    },
    ingredients: ['Mysore Sandalwood Powder (Santalum Album)', 'Natural Tree Gums (Jigat)', 'Himalayan Cedar Powder', 'Sacred Temple Herbs', 'Pure Cold-Pressed Sandalwood Oil'],
    packSize: 'Pack of 40 Sticks (with Ceramic Burner Stand)',
    burnTime: '45 to 50 Minutes per stick',
    stock: 85,
    rating: 4.9,
    reviewCount: 312,
    featured: true,
    bestseller: true,
    organic: true,
    charcoalFree: true,
    variants: [
      { id: 'v-1', name: '40 Sticks (Standard Pack)', price: 349, mrp: 449, stock: 85, sku: 'DA-DSP-040' },
      { id: 'v-2', name: '80 Sticks (Pack of 2 Value Box)', price: 629, mrp: 898, stock: 50, sku: 'DA-DSP-080' },
      { id: 'v-3', name: '200 Sticks (Temple Sadhana Box)', price: 1399, mrp: 1999, stock: 25, sku: 'DA-DSP-200' }
    ],
    howToUse: {
      steps: [
        'Place the ceramic stand on a heat-resistant, steady puja platform.',
        'Light the tapered tip of the dhoop stick using a diya or match.',
        'Let the flame burn for 10-15 seconds, then gently blow it out until a glowing red ember appears.',
        'Allow the fragrant sacred smoke to diffuse throughout your mandir and living sanctuary.'
      ],
      safetyWarning: 'Always burn within eyesight in a well-ventilated room. Keep away from drapes, flammable materials, children, and pets.',
      idealRitual: 'Ideal for morning Brahma Muhurta meditation (4 AM - 6 AM) and evening Sandhya Aarti.'
    },
    specifications: {
      'Stick Length': '5 Inches (12.7 cm)',
      'Bamboo Content': '0% (Pure Bambooless)',
      'Charcoal Content': '0% (Non-toxic white smoke)',
      'Holder Included': 'Yes (Handmade Ceramic Diya Stand)',
      'Shelf Life': '24 Months from manufacturing'
    },
    tags: ['dhoop', 'sandalwood', 'bambooless', 'meditation', 'charcoal-free', 'bestseller'],
    frequentlyBoughtTogetherIds: ['prod-camphor-01', 'prod-puja-01']
  },

  {
    id: 'prod-dhoop-02',
    name: 'Desi Cow Ghee & Guggal Panchamrit Dhoop',
    hindiName: 'शुद्ध देशी गौ घृत व गुग्गल धूप',
    slug: 'desi-cow-ghee-guggal-panchamrit-dhoop',
    category: 'dhoop-sticks',
    categoryName: 'Dhoop Sticks & Cones',
    shortDescription: 'Traditional purifying dhoop blended with A2 Gir Cow Ghee, Shuddha Guggal resin, and Vastu-cleansing herbs.',
    description: 'Since Vedic times, burning Shuddha Guggal in pure cow ghee has been revered as the highest form of atmospheric purification (Bhoota Shuddhi). Our Panchamrit Dhoop eliminates airborne pathogens, repels negative energies, and fills your space with an authentic temple havan aroma.',
    price: 399,
    mrp: 499,
    discountPercentage: 20,
    images: [
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Warm Guggal & Cow Ghee',
    fragranceProfile: {
      topNotes: ['Balsamic Pine', 'Camphor Essence'],
      heartNotes: ['Vedic Guggal Resin', 'Desi Cow Ghee'],
      baseNotes: ['Smoky Loban', 'Dried Vetiver Root'],
      intensity: 'Deep & Temple Grade',
      aura: 'Space Purification & Vastu Harmony'
    },
    ingredients: ['Shuddha Guggal Resin (Commiphora Mukul)', 'Vedic A2 Gir Cow Ghee', 'Desi Khanda Powder', 'Nagarmotha Roots', 'Camphor Resin'],
    packSize: 'Pack of 35 Sticks (Thick Temple Grade)',
    burnTime: '55 Minutes per stick',
    stock: 62,
    rating: 4.8,
    reviewCount: 198,
    featured: true,
    bestseller: false,
    organic: true,
    charcoalFree: true,
    howToUse: {
      steps: [
        'Insert the stick into the dhoop holder.',
        'Ignite the tip, allow a uniform flame for 12 seconds, then extinguish.',
        'Walk through each room of your home carrying the dhoop to purify room corners.'
      ],
      safetyWarning: 'Ensure embers are completely extinguished in water before discarding ash.',
      idealRitual: 'Recommended for Tuesday/Saturday evening Vastu cleansing and during Amavasya/Purnima havans.'
    },
    specifications: {
      'Ghee Source': '100% Pure Certified A2 Desi Cow Bilona Ghee',
      'Charcoal': '0% Added',
      'Stick Diameter': '8 mm (Long burning)',
      'Country of Origin': 'India'
    },
    tags: ['guggal', 'cow ghee', 'havan', 'purification', 'vastu'],
    frequentlyBoughtTogetherIds: ['prod-camphor-01', 'prod-incense-01']
  },

  {
    id: 'prod-dhoop-03',
    name: 'Kashi Sambrani & Loban Temple Energy Dhoop Cones',
    hindiName: 'काशी सांबरानी व लोबान धूप शंकु',
    slug: 'kashi-sambrani-loban-temple-energy-dhoop-cones',
    category: 'dhoop-sticks',
    categoryName: 'Dhoop Sticks & Cones',
    shortDescription: 'Conical sacred dhoop made with Benzoin resin (Sambrani), Boswellia Loban, and dried marigold temple petals.',
    description: 'Infused with the mystical aura of Kashi Vishwanath temple ceremonies. As these dense cones smolder, they release thick, tranquil clouds of authentic Benzoin and Loban resins that calm anxiety and create an elevated spiritual vibration.',
    price: 299,
    mrp: 399,
    discountPercentage: 25,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Raw Sambrani & Loban Resin',
    fragranceProfile: {
      topNotes: ['Sweet Benzoin', 'Citrus Peel'],
      heartNotes: ['Golden Loban Resin', 'Temple Marigold'],
      baseNotes: ['Sacred Frankincense', 'Earthy Peat'],
      intensity: 'Deep & Temple Grade',
      aura: 'Stress Relief & Spiritual Awakening'
    },
    ingredients: ['Natural Sambrani (Styrax Benzoin)', 'Sacred Loban Resin', 'Upcycled Temple Flowers', 'Coconut Shell Bio-Binder (No Charcoal)'],
    packSize: 'Pack of 30 Large Cones with Brass Burning Plate',
    burnTime: '40 Minutes per cone',
    stock: 110,
    rating: 4.9,
    reviewCount: 245,
    featured: false,
    bestseller: true,
    organic: true,
    charcoalFree: true,
    howToUse: {
      steps: [
        'Place the cone upright on the included metal plate.',
        'Light the pointed tip until it catches flame.',
        'Extinguish flame after 15 seconds. Enjoy the resinous aura.'
      ],
      safetyWarning: 'The metal plate gets hot during burning. Place it over a marble or wooden base.',
      idealRitual: 'Perfect for Sandhyavandanam, Ganesh Puja, and post-bath home sacred fragrance.'
    },
    specifications: {
      'Cone Height': '4.5 cm',
      'Binding Agent': 'Natural Tree Gum & Plant Powder',
      'Resin Purity': '99.5% Natural'
    },
    tags: ['sambrani', 'loban', 'cones', 'temple', 'kashi'],
    frequentlyBoughtTogetherIds: ['prod-puja-01', 'prod-camphor-02']
  },

  {
    id: 'prod-dhoop-04',
    name: 'Kewra & Khus (Vetiver) Sacred Meditation Dhoop',
    hindiName: 'केवड़ा व खस ध्यान धूप',
    slug: 'kewra-khus-sacred-meditation-dhoop',
    category: 'dhoop-sticks',
    categoryName: 'Dhoop Sticks & Cones',
    shortDescription: 'Cooling, soul-grounding aroma of wild Vetiver roots and Kannauj Kewra flower extracts for meditation.',
    description: 'An ancient Ayurvedic cooling formulation designed to balance Pitta dosha and quiet an overstimulated nervous system. Handcrafted with hand-harvested Vetiver root fibers from Kannauj and fragrant Kewra water.',
    price: 329,
    mrp: 429,
    discountPercentage: 23,
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Kewra & Wild Vetiver',
    fragranceProfile: {
      topNotes: ['Dewy Green Notes', 'Kewra Blossom'],
      heartNotes: ['Sun-dried Khus Root', 'Cardamom Pod'],
      baseNotes: ['Sweet Earth', 'Vetiver Balsam'],
      intensity: 'Medium & Soothing',
      aura: 'Cooling Mind & Deep Restful Sleep'
    },
    ingredients: ['Kannauj Vetiver Grass Powder (Chrysopogon Zizanioides)', 'Natural Kewra Extract', 'Jigat Powder', 'Sacred Basil Oil'],
    packSize: 'Pack of 35 Sticks',
    burnTime: '45 Minutes per stick',
    stock: 45,
    rating: 4.7,
    reviewCount: 88,
    organic: true,
    charcoalFree: true,
    howToUse: {
      steps: ['Light before evening yoga or seated Pranayama meditation.'],
      safetyWarning: 'Keep away from drafts and open windows while burning.',
      idealRitual: 'Nightly unwinding and evening spiritual study (Swadhyaya).'
    },
    specifications: {
      'Charcoal Free': '100%',
      'Hand Rolled': 'Yes by women artisans in Uttar Pradesh'
    },
    tags: ['kewra', 'khus', 'vetiver', 'meditation', 'pitta-balancing']
  },

  // 2. Camphor (Pure Bhimseni)
  {
    id: 'prod-camphor-01',
    name: '100% Pure Bhimseni Camphor Flakes (Original Temple Grade)',
    hindiName: 'भीमसेनी शुद्ध कपूर क्रिस्टल (100% प्राकृतिक)',
    slug: '100-percent-pure-bhimseni-camphor-flakes-temple-grade',
    category: 'camphor',
    categoryName: 'Pure Bhimseni Camphor',
    shortDescription: 'Naturally crystallized, edible-grade Ayurvedic Bhimseni Karpur. Burns cleanly leaving 0% black soot or residue.',
    description: 'Unlike commercial synthetic camphor made from crude petrochemicals that emit toxic black smoke and leave dark ash, Divyamrit Bhimseni Camphor is 100% organic and crystallized naturally from pine and camphor trees. When lit in an Aarti burner or vaporized on a diffuser, it releases a crisp, divine fragrance that instantly cleanses the air of germs and clears nasal passages.',
    price: 449,
    mrp: 599,
    discountPercentage: 25,
    images: [
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Pure Crystalline Karpuram',
    fragranceProfile: {
      topNotes: ['Pungent Fresh Camphor', 'Crisp Pine'],
      heartNotes: ['Eucalyptus Coolness', 'Subtle Menthol'],
      baseNotes: ['Clean Sacred Temple Vapor'],
      intensity: 'Deep & Temple Grade',
      aura: 'Instant Purification & Respiratory Ease'
    },
    ingredients: ['100% Pure Bhimseni Camphor (Cinnamomum Camphora Crystals) - Zero Wax, Zero Chemical Fillers'],
    packSize: '250g Airtight Tin Jar with Resealable Inner Seal',
    burnTime: 'Burns completely without smoke or ash',
    stock: 140,
    rating: 5.0,
    reviewCount: 620,
    featured: true,
    bestseller: true,
    organic: true,
    variants: [
      { id: 'vc-1', name: '100g Jar', price: 229, mrp: 299, stock: 90, sku: 'DA-BMC-100' },
      { id: 'vc-2', name: '250g Jar (Most Popular)', price: 449, mrp: 599, stock: 140, sku: 'DA-BMC-250' },
      { id: 'vc-3', name: '500g Value Tub (Temple Pack)', price: 799, mrp: 1199, stock: 45, sku: 'DA-BMC-500' }
    ],
    howToUse: {
      steps: [
        'FOR AARTI: Place 2-3 crystalline flakes on a brass camphor aarti spoon or diya. Light with a flame. Observe the pure luminous golden-blue flame that leaves no mark on the brass.',
        'FOR DIFFUSER: Place 1-2 small chunks on top of an essential oil or camphor burner. Light tea-light below or switch electric burner on.',
        'FOR CLOTHES / MANDIR: Place a few crystals wrapped in cotton in your puja cupboard to naturally repel pests and maintain freshness.'
      ],
      safetyWarning: 'Highly flammable. Do not touch the burner while hot. Never leave a burning camphor flame unattended. Keep out of reach of infants.',
      idealRitual: 'Daily morning and evening Karpura Aarti (Karpura Gauram Karunavataram).'
    },
    specifications: {
      'Purity Standard': '100% Chemical Free & Zero Synthetic Adulterants',
      'Residue After Burning': '0.00% (Pure Sublimation)',
      'Packaging': 'Food-Grade UV-Protective Metal Tin',
      'Ayurvedic Grade': 'Shuddha Bhimseni'
    },
    tags: ['camphor', 'bhimseni', 'karpur', 'aarti', 'zero-residue', 'pure', 'bestseller'],
    frequentlyBoughtTogetherIds: ['prod-puja-01', 'prod-dhoop-01']
  },

  {
    id: 'prod-camphor-02',
    name: 'Pure Bhimseni Camphor Easy Tablets (Pack of 150)',
    hindiName: 'भीमसेनी कपूर शुद्ध गोलियां',
    slug: 'pure-bhimseni-camphor-easy-tablets-150',
    category: 'camphor',
    categoryName: 'Pure Bhimseni Camphor',
    shortDescription: 'Uniform machine-pressed 100% pure Bhimseni tablets for hassle-free daily aarti and diffuser vaporizing.',
    description: 'Enjoy the convenience of uniform circular tablets without sacrificing purity. Made strictly from pure Bhimseni crystals without the addition of paraffin wax or binders. Burns fully with a steady, crackle-free flame.',
    price: 349,
    mrp: 449,
    discountPercentage: 22,
    images: [
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Clean Bhimseni Karpur',
    fragranceProfile: {
      topNotes: ['Pungent Camphor'],
      heartNotes: ['Fresh Pine Vapor'],
      baseNotes: ['Cool Mint Freshness'],
      intensity: 'Medium & Soothing',
      aura: 'Clarity & Peaceful Ambience'
    },
    ingredients: ['100% Pure Bhimseni Camphor Pressed Crystals (Zero Wax)'],
    packSize: '150 Tablets (Approx 180g)',
    burnTime: '3-4 Minutes per tablet',
    stock: 95,
    rating: 4.8,
    reviewCount: 180,
    organic: true,
    howToUse: {
      steps: ['Place 1 tablet in your brass diya or camphor burner and ignite.'],
      safetyWarning: 'Store in a sealed container in a cool place to prevent natural evaporation.',
      idealRitual: 'Daily evening Mangal Aarti.'
    },
    specifications: {
      'Tablet Count': '150 Pieces',
      'Tablet Diameter': '14 mm',
      'Purity': '100% Wax-Free'
    },
    tags: ['camphor', 'tablets', 'daily-puja', 'easy-aarti']
  },

  {
    id: 'prod-camphor-03',
    name: 'Aromatherapy Brass Camphor & Oil Diffuser Set',
    hindiName: 'दिव्य पीतल कपूर व तेल डिफ्यूज़र सेट',
    slug: 'aromatherapy-brass-camphor-oil-diffuser-set',
    category: 'camphor',
    categoryName: 'Pure Bhimseni Camphor',
    shortDescription: 'Solid handcrafted brass aromatherapy lamp with 100g complimentary Bhimseni Camphor jar.',
    description: 'An elegant temple-inspired diffuser carved in heavy pure brass with Jali lattice patterns that cast auspicious shadow mandalas on your walls while slowly vaporizing Bhimseni camphor or essential oils.',
    price: 899,
    mrp: 1299,
    discountPercentage: 30,
    images: [
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Camphor & Brass Aura',
    fragranceProfile: {
      topNotes: ['Sacred Vapor'],
      heartNotes: ['Herbaceous Pine'],
      baseNotes: ['Warm Brass Radiance'],
      intensity: 'Medium & Soothing',
      aura: 'Vastu Energy Upliftment'
    },
    ingredients: ['100% Solid Brass Diffuser + 100g Certified Bhimseni Camphor Jar + 1 Brass Tea-light Cup'],
    packSize: 'Complete Gift Boxed Set',
    stock: 40,
    rating: 4.9,
    reviewCount: 142,
    featured: true,
    howToUse: {
      steps: [
        'Place a tea-light candle inside the brass base.',
        'Place 1-2 chunks of Bhimseni camphor on the top brass dish.',
        'Light the candle; the gentle heat will vaporize the camphor slowly for 3-4 hours without burning.'
      ],
      safetyWarning: 'Top dish becomes hot. Allow cooling before touching.',
      idealRitual: 'Evening home atmosphere enhancement and festive decor.'
    },
    specifications: {
      'Material': '100% Pure Virgin Brass',
      'Weight': '380 Grams',
      'Height': '4.8 Inches'
    },
    tags: ['diffuser', 'brass', 'camphor-lamp', 'vastu-decor']
  },

  // 3. Incense Sticks (Flora Agarbatti)
  {
    id: 'prod-incense-01',
    name: 'Kashi Temple Flora Flower-Recycled Organic Incense',
    hindiName: 'काशी दिव्य पुष्प रीसाइकिल्ड अगरबत्ती',
    slug: 'kashi-temple-flora-flower-recycled-incense',
    category: 'incense-sticks',
    categoryName: 'Flora Agarbatti',
    shortDescription: 'Eco-conscious charcoal-free incense hand-rolled using sanctified temple marigold & rose flowers from Kashi.',
    description: 'Every morning, thousands of kilograms of sacred floral offerings from temples across Varanasi are collected and saved from polluting river Ganga. Our artisan women wash, sun-dry, and powder these sacred petals, blending them with organic resins and pure essential oils to create spiritually potent, charcoal-free agarbatti sticks.',
    price: 279,
    mrp: 349,
    discountPercentage: 20,
    images: [
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Temple Marigold & Rose Flora',
    fragranceProfile: {
      topNotes: ['Dewy Yellow Marigold', 'Orange Blossom'],
      heartNotes: ['Indian Damask Rose', 'Sacred Tulsi'],
      baseNotes: ['Sandalwood', 'Benzoin Resin'],
      intensity: 'Rich & Long-Lasting',
      aura: 'Divine Devotion & Uplifting Serenity'
    },
    ingredients: ['Recycled Sacred Temple Flowers (Marigold & Rose)', 'Pure Essential Oils', 'Natural Tree Bark Powder', 'Frankincense Resin', 'Natural Bamboo Stick Core'],
    packSize: 'Pack of 50 Sticks (with Wooden Incense Ash Catcher)',
    burnTime: '45 Minutes per stick',
    stock: 120,
    rating: 4.9,
    reviewCount: 410,
    featured: true,
    bestseller: true,
    organic: true,
    charcoalFree: true,
    variants: [
      { id: 'vi-1', name: '50 Sticks (Single Pack)', price: 279, mrp: 349, stock: 120, sku: 'DA-KFL-050' },
      { id: 'vi-2', name: '100 Sticks (Twin Pack)', price: 499, mrp: 698, stock: 75, sku: 'DA-KFL-100' },
      { id: 'vi-3', name: '250 Sticks (Sadhak Box)', price: 1099, mrp: 1499, stock: 30, sku: 'DA-KFL-250' }
    ],
    howToUse: {
      steps: [
        'Insert the stick into the wooden ash catcher.',
        'Light the coated end with a matchstick until it glows.',
        'Blow out flame and let the sacred aroma unfold.'
      ],
      safetyWarning: 'Burn away from drafty areas and curtains.',
      idealRitual: 'Daily morning prayers, Hanuman Chalisa recitation, and meditation.'
    },
    specifications: {
      'Charcoal Content': '0% (Non-Toxic White Smoke)',
      'Stick Length': '9 Inches',
      'Ash Catcher': 'Free Mango Wood Holder Included'
    },
    tags: ['agarbatti', 'temple-flowers', 'kashi', 'flower-recycled', 'bestseller'],
    frequentlyBoughtTogetherIds: ['prod-dhoop-01', 'prod-camphor-01']
  },

  {
    id: 'prod-incense-02',
    name: 'Pushkar Royal Gulab (Damask Rose) Organic Agarbatti',
    hindiName: 'पुष्कर शाही गुलाब प्राकृतिक अगरबत्ती',
    slug: 'pushkar-royal-gulab-damask-rose-organic-agarbatti',
    category: 'incense-sticks',
    categoryName: 'Flora Agarbatti',
    shortDescription: 'Sweet, heavenly fragrance of hand-picked Pushkar pink roses infused with therapeutic geranium oil.',
    description: 'Reminiscent of royal palace gardens in Rajasthan, our Pushkar Rose Agarbatti opens the Anahata (Heart) chakra. Distilled with pure Rose centifolia extracts, this calming incense gently eases stress and elevates romantic or devotional mood.',
    price: 299,
    mrp: 379,
    discountPercentage: 21,
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Pushkar Pink Damask Rose',
    fragranceProfile: {
      topNotes: ['Fresh Rose Petals', 'Sweet Lychee hint'],
      heartNotes: ['Pure Damask Rose Absolute', 'Geranium'],
      baseNotes: ['Vanilla Pod', 'White Musk Essence'],
      intensity: 'Medium & Soothing',
      aura: 'Heart Chakra Opening & Emotional Peace'
    },
    ingredients: ['Pushkar Rose Petal Powder', 'Pure Rose Essential Oil', 'Herbal Binders', 'Sandalwood Base'],
    packSize: 'Pack of 45 Sticks',
    burnTime: '45 Minutes per stick',
    stock: 78,
    rating: 4.8,
    reviewCount: 165,
    organic: true,
    charcoalFree: true,
    howToUse: {
      steps: ['Light during evening prayer or while unwinding after a busy day.'],
      safetyWarning: 'Ensure ash falls onto a non-flammable surface.',
      idealRitual: 'Lakshmi Puja, Friday prayers, and festive evenings.'
    },
    specifications: {
      'Rose Origin': 'Pushkar Valley, Rajasthan',
      'Stick Type': 'Flora Bathi (Thick coated)'
    },
    tags: ['rose', 'gulab', 'pushkar', 'sweet', 'calming']
  },

  {
    id: 'prod-incense-03',
    name: 'Vrindavan Kasturi & Kadamba Divine Agarbatti',
    hindiName: 'वृंदावन कस्तूरी व कदंब अगरबत्ती',
    slug: 'vrindavan-kasturi-kadamba-divine-agarbatti',
    category: 'incense-sticks',
    categoryName: 'Flora Agarbatti',
    shortDescription: 'Deep, mystical floral-amber fragrance inspired by the sacred groves of Nidhivan & Kadamba trees.',
    description: 'An enchanting, sacred fragrance dedicated to Lord Krishna. Combines the deep botanical Kasturi amber note with the golden honeyed scent of blossoming Kadamba flowers.',
    price: 319,
    mrp: 399,
    discountPercentage: 20,
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Botanical Kasturi & Kadamba Blossom',
    fragranceProfile: {
      topNotes: ['Kadamba Blossom', 'Green Leaves'],
      heartNotes: ['Botanical Musk (Abelmoschus)', 'Nutmeg'],
      baseNotes: ['Precious Woods', 'Golden Amber'],
      intensity: 'Rich & Long-Lasting',
      aura: 'Spiritual Ecstasy & Bhakti Yoga'
    },
    ingredients: ['Natural Botanical Musk Seed Powder', 'Kadamba Flower Extract', 'Herbal Resins', 'Wood Powders'],
    packSize: 'Pack of 45 Sticks',
    burnTime: '50 Minutes per stick',
    stock: 55,
    rating: 4.9,
    reviewCount: 130,
    organic: true,
    charcoalFree: true,
    howToUse: {
      steps: ['Light before Krishna Bhajan, Kirtan or Bhagavad Gita reading.'],
      safetyWarning: 'Keep away from flammable clothing.',
      idealRitual: 'Evening Sandhya and Ekadashi fasting rituals.'
    },
    specifications: {
      '100% Cruelty Free': 'Plant-derived botanical Kasturi (Zero animal musk)',
      'Packaging': 'Recyclable Kraft Paper Tube'
    },
    tags: ['kasturi', 'kadamba', 'vrindavan', 'krishna-puja']
  },

  {
    id: 'prod-incense-04',
    name: 'Madurai Mogra (Arabian Jasmine) Divine Incense',
    hindiName: 'मदुरै मोगरा शुद्ध पुष्प अगरबत्ती',
    slug: 'madurai-mogra-arabian-jasmine-divine-incense',
    category: 'incense-sticks',
    categoryName: 'Flora Agarbatti',
    shortDescription: 'Intoxicating, pure nocturnal jasmine fragrance made with GI-tagged Madurai Malli blossoms.',
    description: 'Madurai Mogra is legendary for its intense, ethereal sweetness. Crafted with night-blooming jasmine flowers collected at dawn, this incense transforms any home into a sacred South Indian temple sanctum.',
    price: 289,
    mrp: 369,
    discountPercentage: 22,
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Madurai Malli Mogra',
    fragranceProfile: {
      topNotes: ['Fresh Mogra Petals', 'Sweet Neroli'],
      heartNotes: ['Sambac Jasmine Absolute', 'Tuberose'],
      baseNotes: ['Soft Sandalwood', 'White Amber'],
      intensity: 'Rich & Long-Lasting',
      aura: 'Goddess Lakshmi Blessings & Purity'
    },
    ingredients: ['GI-Tagged Madurai Jasmine Petal Dust', 'Pure Jasmine Absolute Oil', 'Jigat Powder', 'Organic Resins'],
    packSize: 'Pack of 45 Sticks',
    burnTime: '45 Minutes per stick',
    stock: 68,
    rating: 4.8,
    reviewCount: 176,
    organic: true,
    charcoalFree: true,
    howToUse: {
      steps: ['Light during Varalakshmi Puja, Navratri, or morning deity bathing.'],
      safetyWarning: 'Do not inhale smoke directly.',
      idealRitual: 'Devi Puja and festive mornings.'
    },
    specifications: {
      'Jasmine Source': 'Madurai, Tamil Nadu',
      'Quality': 'Export Grade Flora Bathi'
    },
    tags: ['mogra', 'jasmine', 'madurai', 'devi-puja']
  },

  // 4. Puja Essentials & Brass
  {
    id: 'prod-puja-01',
    name: 'Handcrafted Solid Brass Akhand Diya with Glass Chimney',
    hindiName: 'अखंड पीतल दिया (बोरोसिलिकेट ग्लास चिमनी सहित)',
    slug: 'handcrafted-solid-brass-akhand-diya-glass-chimney',
    category: 'puja-essentials',
    categoryName: 'Puja Essentials & Brass',
    shortDescription: 'Heavy-gauge virgin brass deepak with heat-resistant borosilicate glass cover. Burns continuously for 24+ hours.',
    description: 'A masterpiece of traditional Indian metal craft. This Akhand Jyot Diya is forged from 100% pure heavy-gauge brass by generational artisans in Moradabad. The crystal-clear borosilicate glass chimney shields the sacred flame from drafts and sudden breezes, ensuring unhindered burning during Navratri, Diwali, and continuous Puja rituals.',
    price: 799,
    mrp: 1199,
    discountPercentage: 33,
    images: [
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Unscented (Pure Divine Light)',
    ingredients: ['100% Virgin Brass Body', 'Thermal Shock Resistant Borosilicate Glass Chimney', 'Screw-lock Base with Cotton Wick Adjuster'],
    packSize: 'Medium (5.5 Inch Height) + 10 Cotton Wicks Free',
    stock: 90,
    rating: 4.9,
    reviewCount: 388,
    featured: true,
    bestseller: true,
    variants: [
      { id: 'v-dya-1', name: 'Small (4.5 Inch - 12hr Burn)', price: 599, mrp: 899, stock: 45, sku: 'DA-DYA-SML' },
      { id: 'v-dya-2', name: 'Medium (5.5 Inch - 24hr Burn)', price: 799, mrp: 1199, stock: 90, sku: 'DA-DYA-MED' },
      { id: 'v-dya-3', name: 'Large (7.0 Inch - 48hr Burn)', price: 1199, mrp: 1699, stock: 35, sku: 'DA-DYA-LRG' }
    ],
    howToUse: {
      steps: [
        'Unscrew the glass top and wick holder from the brass oil well.',
        'Insert a cotton wick through the brass slot, leaving 1/4 inch exposed.',
        'Fill the reservoir with pure sesame (Til) oil or cow ghee.',
        'Light the wick, screw the glass dome securely into place.'
      ],
      safetyWarning: 'Glass and brass top become hot during extended burning. Always lift using the bottom brass rim.',
      idealRitual: 'Akhand Jyot during Navratri, Diwali, and continuous home mandir prayer.'
    },
    specifications: {
      'Brass Purity': '100% Lead-Free Virgin Brass',
      'Glass Type': 'Borosilicate (Withstands up to 400°C)',
      'Weight': '360g',
      'Oil Capacity': '80ml (Medium size)'
    },
    tags: ['akhand-diya', 'brass', 'diya', 'navratri', 'diwali', 'bestseller'],
    frequentlyBoughtTogetherIds: ['prod-puja-03', 'prod-camphor-01']
  },

  {
    id: 'prod-puja-02',
    name: 'Pure Ashtagandha & Kesar Chandan Tika Paste (100g Jar)',
    hindiName: 'अष्टगंध व शुद्ध केसर चंदन तिलक',
    slug: 'pure-ashtagandha-kesar-chandan-tika-paste',
    category: 'puja-essentials',
    categoryName: 'Puja Essentials & Brass',
    shortDescription: 'Authentic 8-herb sacred temple tilak with Kashmiri saffron, white sandalwood, and holy herbs for Ajna chakra cooling.',
    description: 'Prepared according to Agamic texts using 8 divine sacred substances (Ashtagandha): Chandan, Kesar, Camphor, Agar, Kumkum, Musk seed, Jatamansi, and Gorochan. Applying this fragrant paste on the forehead calms the nervous system and enhances spiritual concentration.',
    price: 249,
    mrp: 329,
    discountPercentage: 24,
    images: [
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Kesar Chandan & Ashtagandha',
    fragranceProfile: {
      topNotes: ['Kashmiri Kesar', 'Camphor Essence'],
      heartNotes: ['White Sandalwood (Chandan)', 'Tulsi Extract'],
      baseNotes: ['Sacred Herbs & Amber'],
      intensity: 'Medium & Soothing',
      aura: 'Mind Focus & Ajna Chakra Cooling'
    },
    ingredients: ['Pure White Sandalwood Paste', 'Kashmiri Kesar (Saffron)', 'Bhimseni Camphor', 'Tulsi Extract', 'Kumkum Powder', 'Gangajal'],
    packSize: '100g Glass Jar with Brass Tilak Stamp',
    stock: 130,
    rating: 4.9,
    reviewCount: 220,
    organic: true,
    howToUse: {
      steps: [
        'Take a small dab on your right ring finger or the brass applicator.',
        'Apply gently between the eyebrows on the third eye (Ajna Chakra) while chanting "ॐ श्री विष्णवे नमः".'
      ],
      safetyWarning: 'For external devotional application only.',
      idealRitual: 'Daily morning post-bath tilak, Shivling Abhishek, and deity offering.'
    },
    specifications: {
      'Skin Friendly': '100% Chemical & Paraben Free',
      'Texture': 'Smooth, easy-to-apply paste with rich aroma',
      'Shelf Life': '18 Months'
    },
    tags: ['chandan', 'tilak', 'ashtagandha', 'kesar', 'puja']
  },

  {
    id: 'prod-puja-03',
    name: 'Organic Desi Cow Ghee Diya Wicks (Pack of 100)',
    hindiName: 'शुद्ध देशी गौ घृत बनी बत्तियां (१०० नग)',
    slug: 'organic-desi-cow-ghee-diya-wicks-100',
    category: 'puja-essentials',
    categoryName: 'Puja Essentials & Brass',
    shortDescription: 'Ready-to-use round cotton wicks pre-soaked in pure solid Desi Cow Ghee with natural camphor.',
    description: 'Save preparation time during daily morning and evening puja. Each pure cotton wick is pre-molded in certified A2 cow ghee and infused with a touch of pure Bhimseni camphor for an effortless, smoke-free flame that lights instantly.',
    price: 299,
    mrp: 399,
    discountPercentage: 25,
    images: [
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Warm Cow Ghee & Camphor',
    ingredients: ['100% Pure Desi Cow Ghee', 'Unbleached Organic Cotton Wick', 'Natural Bhimseni Camphor'],
    packSize: 'Jar of 100 Ready Wicks',
    burnTime: '25 to 30 Minutes per wick',
    stock: 160,
    rating: 4.8,
    reviewCount: 310,
    organic: true,
    bestseller: true,
    howToUse: {
      steps: [
        'Take 1 ready-made ghee wick and place it in your brass or clay diya.',
        'Light the top cotton point directly with a match. No messy liquid ghee needed.'
      ],
      safetyWarning: 'Store in a cool dry place below 30°C to avoid melting.',
      idealRitual: 'Daily effortless morning and evening Aarti.'
    },
    specifications: {
      'Wick Count': '100 Pieces',
      'Ghee Type': '100% Desi Cow Ghee (Zero Wax / Zero Stearin)',
      'Burning Time': '25-30 mins per wick'
    },
    tags: ['ghee-wicks', 'batti', 'ready-diya', 'daily-puja']
  },

  {
    id: 'prod-puja-04',
    name: 'Pure Gangajal & Brass Kalash Sacred Vessel Set',
    hindiName: 'शुद्ध गंगोत्री गंगाजल व पीतल कलश सेट',
    slug: 'pure-gangajal-brass-kalash-sacred-vessel-set',
    category: 'puja-essentials',
    categoryName: 'Puja Essentials & Brass',
    shortDescription: 'Engraved pure brass Kalash with 500ml sealed Gangotri Dham Gangajal for Abhishek and sthapana.',
    description: 'Sourced directly from the untouched origin of Gangotri in the Himalayas and packed under certified hygienic Vedic guidelines. Accompanied by a heavy brass Kalash pot engraved with sacred Om and Swastik symbols.',
    price: 549,
    mrp: 749,
    discountPercentage: 27,
    images: [
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Natural Mountain Spring Purity',
    ingredients: ['100% Unadulterated Himalayan Gangajal (500ml)', '1 Heavy Brass Kalash (Height: 4 inches)'],
    packSize: 'Kalash + 500ml Sealed Gangajal Bottle',
    stock: 50,
    rating: 4.9,
    reviewCount: 95,
    howToUse: {
      steps: ['Use for daily Shivling Jalabhishek, Vastu sprinkle, or Kalash Sthapana during Puja.'],
      safetyWarning: 'Store sacred water in a clean, elevated puja shelf.',
      idealRitual: 'Maha Shivratri, Navratri Kalash Sthapana, Griha Pravesh.'
    },
    specifications: {
      'Water Source': 'Gangotri Dham (Uttarakhand)',
      'Kalash Material': '100% Pure Brass'
    },
    tags: ['gangajal', 'kalash', 'abhishek', 'brass-kalash']
  },

  // 5. Spiritual Fragrances & Attar
  {
    id: 'prod-frag-01',
    name: 'Ruh Gulab (Kannauj Rose) 100% Pure Non-Alcoholic Attar (12ml)',
    hindiName: 'रूह गुलाब शुद्ध कन्नौज इत्र (अल्कोहल मुक्त)',
    slug: 'ruh-gulab-kannauj-rose-pure-non-alcoholic-attar-12ml',
    category: 'spiritual-fragrances',
    categoryName: 'Spiritual Fragrances & Attar',
    shortDescription: 'Hydro-distilled in traditional copper Degs over sandalwood base in Kannauj. 100% alcohol-free.',
    description: 'Recognized globally as the perfume capital of India, Kannauj has perfected the Deg-Bhapka distillation for 400+ years. It requires over 4,000 kg of fresh Rosa damascena petals to produce just one liter of this precious golden elixir. A single drop on your pulse points or puja cloth lingers for over 24 hours.',
    price: 899,
    mrp: 1299,
    discountPercentage: 30,
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Pure Kannauj Damask Rose',
    fragranceProfile: {
      topNotes: ['Dew-kissed Rose Petals', 'Green Honey'],
      heartNotes: ['Rich Damask Rose Absolute'],
      baseNotes: ['Aged Sandalwood Base', 'Warm Sweet Resin'],
      intensity: 'Deep & Temple Grade',
      aura: 'Elevated Spiritual Aura & Devotion'
    },
    ingredients: ['100% Pure Rosa Damascena Flower Distillate', 'Pure Santalum Album (Sandalwood) Oil Carrier Base - 0% Alcohol, 0% Petrochemical Dipropylene Glycol'],
    packSize: '12ml Crystal Cut Glass Bottle with Roll-on Applicator in Velvet Box',
    stock: 75,
    rating: 5.0,
    reviewCount: 290,
    featured: true,
    bestseller: true,
    organic: true,
    howToUse: {
      steps: [
        'Dab a small drop onto wrists, behind earlobes, or onto mandir deity robes.',
        'Can also be mixed with pure water in an aroma diffuser.'
      ],
      safetyWarning: 'For external fragrance use only. Patch test recommended on sensitive skin.',
      idealRitual: 'Deity Vastra offering, festive gatherings, and deep meditation.'
    },
    specifications: {
      'Alcohol Content': '0.00% (Pure Non-Alcoholic)',
      'Extraction Method': 'Traditional Deg & Bhapka Hydro-distillation',
      'Longevity': '24+ Hours on cotton fabric'
    },
    tags: ['attar', 'rose', 'kannauj', 'ruh-gulab', 'non-alcoholic', 'bestseller'],
    frequentlyBoughtTogetherIds: ['prod-frag-02', 'prod-dhoop-01']
  },

  {
    id: 'prod-frag-02',
    name: 'Chandan Divine Sacred Mandir Room & Aura Mist (200ml)',
    hindiName: 'चंदन दिव्य मंदिर व औरा स्प्रे',
    slug: 'chandan-divine-sacred-mandir-room-aura-mist-200ml',
    category: 'spiritual-fragrances',
    categoryName: 'Spiritual Fragrances & Attar',
    shortDescription: 'Water-based spiritual room mist with pure sandalwood hydrosol, camphor, and holy herbs to instantly elevate home vibrations.',
    description: 'Instantly transform any space into a peaceful sanctuary. Our non-aerosol, water-based room mist combines pure sandalwood distillate with natural Vedic extracts. Safe around deities, brassware, fabrics, children, and indoor plants.',
    price: 499,
    mrp: 649,
    discountPercentage: 23,
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Sacred Mysore Sandalwood',
    fragranceProfile: {
      topNotes: ['Fresh Bergamot', 'Subtle Camphor'],
      heartNotes: ['Sandalwood Hydrosol', 'Cardamom'],
      baseNotes: ['Warm Cedarwood', 'Sacred Amber'],
      intensity: 'Medium & Soothing',
      aura: 'Stress Relief & Sanctum Peace'
    },
    ingredients: ['Pure Sandalwood Hydrosol', 'Distilled Aqua', 'Bhimseni Camphor Extract', 'Organic Vegetable Glycerin', 'Essential Oils Blend'],
    packSize: '200ml Amber Spray Bottle (500+ Sprays)',
    stock: 92,
    rating: 4.8,
    reviewCount: 154,
    organic: true,
    howToUse: {
      steps: [
        'Shake gently before use.',
        'Spray 3-4 pumps upward into the air around your home temple, living room, or study.',
        'Can also be lightly misted over curtains and cushions.'
      ],
      safetyWarning: 'Avoid spraying directly into eyes.',
      idealRitual: 'Instant morning freshness, guest welcome, and meditation preparation.'
    },
    specifications: {
      'Propellant': '100% Non-Aerosol Gas Free',
      'Alcohol Free': 'Yes (Gentle on fabrics)'
    },
    tags: ['aura-spray', 'sandalwood', 'room-mist', 'mandir-spray']
  },

  {
    id: 'prod-frag-03',
    name: 'Vedic Loban & Guggal Energy Cleansing Aura Spray (200ml)',
    hindiName: 'वैदिक लोबान व गुग्गल ऊर्जा शुद्धिकरण स्प्रे',
    slug: 'vedic-loban-guggal-energy-cleansing-aura-spray-200ml',
    category: 'spiritual-fragrances',
    categoryName: 'Spiritual Fragrances & Attar',
    shortDescription: 'Smokeless space clearing mist infused with authentic Loban resin, Guggal extracts, and Gangajal.',
    description: 'Love the purifying energy of Loban and Guggal but need a quick smokeless solution for modern apartments? This innovative mist captures the active bio-terpenes of burnt resins in a pure water suspension to neutralize stagnant energies within seconds.',
    price: 499,
    mrp: 649,
    discountPercentage: 23,
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Vedic Resin & Frankincense',
    fragranceProfile: {
      topNotes: ['Clarifying Camphor', 'Sweet Orange'],
      heartNotes: ['Loban Resin Extract', 'Guggal Hydrosol'],
      baseNotes: ['Myrrh', 'Warm Earth'],
      intensity: 'Medium & Soothing',
      aura: 'Negative Energy Clearing & Vastu Balance'
    },
    ingredients: ['Loban Hydrosol', 'Guggal Extract', 'Himalayan Gangajal', 'Essential Resins', 'Natural Preservative'],
    packSize: '200ml Spray Bottle',
    stock: 65,
    rating: 4.9,
    reviewCount: 112,
    organic: true,
    howToUse: {
      steps: ['Spray in the 4 corners of any room, work desk, or meditation altar.'],
      safetyWarning: 'For space and textile misting only.',
      idealRitual: 'Vastu cleansing before starting work or after a stressful day.'
    },
    specifications: {
      'Aerosol Free': 'Yes',
      'Eco-friendly': '100% Biodegradable Ingredients'
    },
    tags: ['loban-spray', 'smokeless-cleansing', 'vastu-mist']
  },

  // 6. Combo Packs & Daily Sadhana Sets
  {
    id: 'prod-combo-01',
    name: 'Daily Morning Mandir Ritual Essentials Kit (4-in-1)',
    hindiName: 'नित्य प्रातः पूजा संपूर्ण किट (४-इन-१)',
    slug: 'daily-morning-mandir-ritual-essentials-kit-4-in-1',
    category: 'combo-packs',
    categoryName: 'Daily Ritual Combo Packs',
    shortDescription: 'Complete curated bundle: Mysore Sandalwood Dhoop (40s) + 100g Bhimseni Camphor + 100 Desi Ghee Wicks + Ashtagandha Tilak.',
    description: 'The ultimate daily worship kit containing everything needed for authentic morning and evening home prayers. Each product is carefully matched to provide a complete sensory experience that brings peace, focus, and purity to your mandir.',
    price: 999,
    mrp: 1499,
    discountPercentage: 33,
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Harmonious Temple Sadhana Blend',
    ingredients: ['Mysore Sandalwood Dhoop Box (40 Sticks)', '100% Pure Bhimseni Camphor (100g Jar)', 'A2 Cow Ghee Diya Wicks (Jar of 100)', 'Pure Ashtagandha Kesar Tilak (100g)'],
    packSize: '4-Item Gift Pack in Gold Embossed Box',
    stock: 80,
    rating: 5.0,
    reviewCount: 480,
    featured: true,
    bestseller: true,
    organic: true,
    charcoalFree: true,
    howToUse: {
      steps: [
        '1. Apply Ashtagandha Tilak post morning bath.',
        '2. Light Ghee Wick in brass Diya.',
        '3. Burn Mysore Sandalwood Dhoop for ambient aroma.',
        '4. Conclude with Bhimseni Camphor Aarti.'
      ],
      safetyWarning: 'Follow individual safety instructions provided on each inner package.',
      idealRitual: 'Complete daily Vedic morning and evening prayer routine.'
    },
    specifications: {
      'Savings': 'Save ₹500 over individual purchases',
      'Packaging': 'Festive rigid keepsake box with gold foil stamping'
    },
    tags: ['combo', 'kit', 'daily-puja', 'all-in-one', 'bestseller'],
    frequentlyBoughtTogetherIds: ['prod-puja-01', 'prod-frag-01']
  },

  {
    id: 'prod-combo-02',
    name: 'Bhimseni Camphor & Solid Brass Burner Complete Set',
    hindiName: 'भीमसेनी कपूर व शुद्ध पीतल आरती स्टैंड सेट',
    slug: 'bhimseni-camphor-solid-brass-burner-complete-set',
    category: 'combo-packs',
    categoryName: 'Daily Ritual Combo Packs',
    shortDescription: 'Handcrafted long-handle brass aarti spoon burner paired with 250g pure Bhimseni Camphor jar.',
    description: 'Perform authentic Aarti without burning your fingers. Includes our heirloom heavy brass Kapoor Aarti burner with carved wooden heat-safe handle, and a 250g jar of our zero-residue Bhimseni Karpur.',
    price: 849,
    mrp: 1199,
    discountPercentage: 29,
    images: [
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Bhimseni Camphor',
    ingredients: ['1 Handcrafted Solid Brass Long Aarti Burner', '1 Jar 250g Bhimseni Camphor Crystals'],
    packSize: '2-Piece Set in Gift Box',
    stock: 55,
    rating: 4.9,
    reviewCount: 160,
    organic: true,
    howToUse: {
      steps: ['Place 2-3 flakes in the brass bowl, light with flame, and rotate in clockwise direction during Aarti chanting.'],
      safetyWarning: 'Keep flame away from clothing or synthetic fabric.',
      idealRitual: 'Daily evening Aarti & Aarti after Satyanarayan Katha.'
    },
    specifications: {
      'Burner Material': 'Heavy Brass with Sheesham Wood Handle',
      'Length': '8.5 Inches'
    },
    tags: ['combo', 'aarti-set', 'camphor-burner', 'brass']
  },

  {
    id: 'prod-combo-03',
    name: 'Trishakti Divine Fragrance Trio (Sandal, Rose, Guggal)',
    hindiName: 'त्रिशक्ति दिव्य सुगंध त्रयी (चंदन, गुलाब, गुग्गल)',
    slug: 'trishakti-divine-fragrance-trio-sandal-rose-guggal',
    category: 'combo-packs',
    categoryName: 'Daily Ritual Combo Packs',
    shortDescription: 'Trio pack of our most beloved organic flora bathi: Sandalwood, Pushkar Rose, and Vedic Guggal (150 Sticks total).',
    description: 'Experience the 3 divine notes of Indian spiritual tradition in one value pack. Contains 50 sticks of Mysore Sandalwood, 50 sticks of Pushkar Rose, and 50 sticks of Kashi Guggal with a complimentary brass holder.',
    price: 699,
    mrp: 999,
    discountPercentage: 30,
    images: [
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Sandalwood, Rose & Guggal',
    ingredients: ['Mysore Sandalwood Incense (50 Sticks)', 'Pushkar Damask Rose Incense (50 Sticks)', 'Vedic Guggal Incense (50 Sticks)'],
    packSize: '150 Sticks Total + Free Brass Stand',
    stock: 90,
    rating: 4.9,
    reviewCount: 215,
    organic: true,
    charcoalFree: true,
    howToUse: {
      steps: ['Choose your fragrance according to the time of day: Rose for morning freshness, Sandal for afternoon focus, Guggal for evening cleansing.'],
      safetyWarning: 'Burn in a safe holder.',
      idealRitual: 'Daily all-day sacred aromatic ambience.'
    },
    specifications: {
      'Charcoal': '0% Charcoal in all 3 blends',
      'Total Sticks': '150 Sticks'
    },
    tags: ['trio', 'incense-combo', 'sandal-rose-guggal', 'value-pack']
  },

  // 7. Gift Hampers & Festive Boxes
  {
    id: 'prod-gift-01',
    name: 'Suvarna Divine Festive Puja Gift Box (Luxury Wooden Casket)',
    hindiName: 'सुवर्ण दिव्य उत्सव उपहार मंजूषा (शाही लकड़ी बॉक्स)',
    slug: 'suvarna-divine-festive-puja-gift-box-luxury-wooden-casket',
    category: 'gift-hampers',
    categoryName: 'Festive & Shubh Hampers',
    shortDescription: 'Royal handcrafted pine-wood casket with brass clasp containing 7 premium spiritual essentials for auspicious gifting.',
    description: 'The pinnacle of spiritual luxury gifting. Housed in a reusable engraved pine wood box with brass corner fittings and red velvet lining, this opulent box contains: Handcrafted Brass Akhand Diya, Mysore Sandalwood Dhoop, Kashi Temple Agarbatti, 100g Bhimseni Camphor, Pure Ashtagandha Tilak, Ruh Gulab Attar (6ml), and 50 Desi Ghee Wicks.',
    price: 1999,
    mrp: 2999,
    discountPercentage: 33,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Royal Suvarna Temple Assortment',
    ingredients: ['7 Hand-picked Sacred Items', 'Customized Blessing Card Included', 'Luxury Wooden Keepsake Casket'],
    packSize: 'Luxury 7-Piece Master Gift Box (Weight: 1.8 kg)',
    stock: 45,
    rating: 5.0,
    reviewCount: 168,
    featured: true,
    bestseller: true,
    howToUse: {
      steps: ['Ready for immediate gifting with customized calligraphy greeting card and silk ribbon.'],
      safetyWarning: 'Contains fragile glass and brass items.',
      idealRitual: 'Diwali gifting, Griha Pravesh, Wedding return favors, Corporate VIP gifts.'
    },
    specifications: {
      'Box Material': 'Aged Natural Pine Wood with Brass Inlays',
      'Custom Message Card': 'Complimentary Handwritten Card included',
      'Dimensions': '32 cm x 24 cm x 10 cm'
    },
    tags: ['gift-box', 'hamper', 'wooden-casket', 'festive', 'luxury', 'diwali', 'bestseller'],
    frequentlyBoughtTogetherIds: ['prod-gift-02', 'prod-frag-01']
  },

  {
    id: 'prod-gift-02',
    name: 'Anandam Griha Pravesh & Housewarming Sacred Hamper',
    hindiName: 'आनंदम गृह प्रवेश व मांगलिक उपहार संदूक',
    slug: 'anandam-griha-pravesh-housewarming-sacred-hamper',
    category: 'gift-hampers',
    categoryName: 'Festive & Shubh Hampers',
    shortDescription: 'Auspicious housewarming blessing set featuring pure Gangajal kalash, brass Vastu turtle, Loban dhoop, and pure chandan.',
    description: 'Designed specifically to bless new beginnings, home warming (Griha Pravesh), or newly inaugurated business premises. Filled with Vedic Vastu purifying essentials that cleanse past energies and invite Maa Lakshmi’s eternal prosperity.',
    price: 1499,
    mrp: 2199,
    discountPercentage: 32,
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Vedic Prosperity & Loban Resins',
    ingredients: ['Pure Himalayan Gangajal (250ml)', 'Solid Brass Vastu Kachhua (Tortoise) Plate', 'Kashi Sambrani Cones (30 pcs)', 'Ashtagandha Paste (100g)', 'Handmade Brass Diya'],
    packSize: '5-Item Festive Hamper in Saffron Silk Box',
    stock: 35,
    rating: 4.9,
    reviewCount: 110,
    howToUse: {
      steps: ['Present to the new homeowners during the auspicious Puja ceremony.'],
      safetyWarning: 'Handle brass and glass with care.',
      idealRitual: 'Griha Pravesh, Office inauguration, Shubh Muhurat blessings.'
    },
    specifications: {
      'Box': 'Handmade Raw Silk Box with Gold Brocade Border',
      'Weight': '1.2 kg'
    },
    tags: ['griha-pravesh', 'housewarming', 'vastu', 'gift-hamper']
  },

  {
    id: 'prod-gift-03',
    name: 'Deepotsav Brass Diya & Organic Agarbatti Grand Gift Set',
    hindiName: 'दीपोत्सव पीतल दिया व पुष्प अगरबत्ती उपहार सेट',
    slug: 'deepotsav-brass-diya-organic-agarbatti-grand-gift-set',
    category: 'gift-hampers',
    categoryName: 'Festive & Shubh Hampers',
    shortDescription: 'Set of 2 handcrafted floral brass diyas, Pushkar Rose Agarbatti (50 sticks), and 100g Bhimseni Camphor.',
    description: 'Celebrate festivals of light with pure devotion. Features a twin set of hand-engraved brass Peacock oil lamps paired with floral incense and pure Karpur.',
    price: 1199,
    mrp: 1699,
    discountPercentage: 29,
    images: [
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Pushkar Rose & Karpuram',
    ingredients: ['2 Pure Brass Hand-Engraved Peacock Diyas', 'Pushkar Rose Incense (50 Sticks)', 'Bhimseni Camphor (100g Jar)', 'Eco-friendly Gift Box'],
    packSize: 'Grand Gift Boxed Set',
    stock: 50,
    rating: 4.8,
    reviewCount: 88,
    howToUse: {
      steps: ['Perfect for festive lighting on thresholds, balconies, and mandir altars.'],
      safetyWarning: 'Keep burning lamps away from paper or dry flowers.',
      idealRitual: 'Diwali, Karthika Deepam, Dev Deepawali in Varanasi.'
    },
    specifications: {
      'Brass Weight': '220g (Pair)',
      'Box Style': 'Rigid Gift Box with Magnetic Clasp'
    },
    tags: ['deepotsav', 'diwali-gifts', 'twin-diyas', 'brass-peacock']
  },

  // 8. New Arrivals & Limited Editions
  {
    id: 'prod-new-01',
    name: 'Ayodhya Heritage Cedarwood & Frankincense Resins (Limited Batch)',
    hindiName: 'अयोध्या हेरिटेज देवदार व गुग्गल धूप (विशेष संग्रह)',
    slug: 'ayodhya-heritage-cedarwood-frankincense-resins-limited-batch',
    category: 'new-arrivals',
    categoryName: 'New Divine Arrivals',
    shortDescription: 'Seasonal single-origin harvest of Himalayan Deodar cedarwood resin, Omani Frankincense, and sacred saffron.',
    description: 'A special seasonal release crafted in limited micro-batches of 500 boxes. Uses aged heartwood from fallen Himalayan Deodar trees and Grade-A Luban tears, evoking the ancient sacred fragrance of Ram Janmabhoomi Vedic rituals.',
    price: 499,
    mrp: 649,
    discountPercentage: 23,
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Himalayan Cedar & Frankincense',
    fragranceProfile: {
      topNotes: ['Crisp Himalayan Cedar Needle', 'Bergamot'],
      heartNotes: ['Aged Deodar Wood', 'Omani Luban Tears'],
      baseNotes: ['Sacred Saffron', 'Golden Frankincense'],
      intensity: 'Deep & Temple Grade',
      aura: 'Sacred Grounding & Mental Strength'
    },
    ingredients: ['Himalayan Deodar Powder', 'Wild Harvested Luban Resin', 'Kashmiri Kesar', 'Natural Gums'],
    packSize: 'Pack of 35 Extra-Long Temple Sticks (Burn time 60 mins)',
    burnTime: '60 Minutes per stick',
    stock: 35,
    rating: 5.0,
    reviewCount: 64,
    featured: true,
    newArrival: true,
    organic: true,
    charcoalFree: true,
    howToUse: {
      steps: ['Light during special morning Sadhana, Ramcharitmanas path, or deep meditation.'],
      safetyWarning: 'Long burning stick; ensure sturdy holder.',
      idealRitual: 'Grand home rituals and spiritual contemplation.'
    },
    specifications: {
      'Batch Size': 'Limited to 500 numbered boxes',
      'Burn Time': '60+ Minutes'
    },
    tags: ['ayodhya', 'deodar', 'cedarwood', 'frankincense', 'limited-edition', 'new-arrival']
  },

  {
    id: 'prod-new-02',
    name: 'Pure Silver Plated Ganesh Laxmi Charan Paduka Token',
    hindiName: 'शुद्ध चांदी लेपित श्री गणेश लक्ष्मी चरण पादुका',
    slug: 'pure-silver-plated-ganesh-laxmi-charan-paduka-token',
    category: 'new-arrivals',
    categoryName: 'New Divine Arrivals',
    shortDescription: 'Auspicious energized 999 pure silver plated holy feet (Paduka) for wealth box, cash drawer, and mandir.',
    description: 'Embossed with sacred symbols of Shankh, Chakra, Gada, and Padma. Placing these sanctified divine footprints in your home temple or office safe is believed to attract ceaseless prosperity, fortune, and positive cosmic flow.',
    price: 399,
    mrp: 599,
    discountPercentage: 33,
    images: [
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800'
    ],
    fragrance: 'Unscented Sacred Yantra',
    ingredients: ['99.9% Pure Silver Micron Electroplating over High-Density Alloy Base'],
    packSize: 'Single Encapsulated Paduka with Acrylic Display Stand',
    stock: 80,
    rating: 4.9,
    reviewCount: 42,
    newArrival: true,
    howToUse: {
      steps: ['Place facing inward toward your home or office threshold, or inside your puja mandir.'],
      safetyWarning: 'Clean with a soft dry cloth. Do not use harsh chemical cleaners.',
      idealRitual: 'Dhanteras, Diwali Puja, Friday Lakshmi Puja.'
    },
    specifications: {
      'Plating': '999 Pure Silver Plated',
      'Size': '2.5 Inch x 2 Inch'
    },
    tags: ['charan-paduka', 'silver-plated', 'lakshmi-ganesh', 'prosperity', 'new-arrival']
  }
];

// Attach mock realistic reviews to products for full realism
PRODUCTS.forEach((p) => {
  p.reviews = [
    {
      id: `rev-${p.id}-1`,
      userName: 'Aarav Deshmukh',
      userCity: 'Pune, Maharashtra',
      rating: 5,
      date: '2026-07-14',
      title: 'Remarkable purity, zero headache unlike marketplace brands',
      comment: `I have severe sensitivity to artificial perfumes and chemical coal incense. Divyamrit’s ${p.name} is a revelation! The smoke is so clean and the fragrance feels truly sacred. My entire family felt the difference instantly during our morning puja.`,
      verifiedPurchase: true,
      helpfulCount: 38
    },
    {
      id: `rev-${p.id}-2`,
      userName: 'Meenakshi Sundaram',
      userCity: 'Bengaluru, Karnataka',
      rating: 5,
      date: '2026-06-28',
      title: 'Authentic temple grade quality',
      comment: 'Reminds me of the serene Sanctum of temples in South India. The packaging in airtight jars and rigid boxes is premium and preserves the fresh essential oil notes beautifully. Ordered 3 more boxes as gifts!',
      verifiedPurchase: true,
      helpfulCount: 24
    },
    {
      id: `rev-${p.id}-3`,
      userName: 'Dr. Rajeshwari Joshi',
      userCity: 'Varanasi, UP',
      rating: 4,
      date: '2026-05-19',
      title: 'Delighted with the natural ingredients and fast delivery',
      comment: 'Delivered to Varanasi in just 2 days. The burn time is genuinely 45-50 minutes and leaves a sweet, subtle lingering aroma for hours. Very trustworthy brand.',
      verifiedPurchase: true,
      helpfulCount: 17
    }
  ];
});
