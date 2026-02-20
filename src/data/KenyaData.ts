// src/data/kenya-data.ts
export const counties = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Kiambu', 'Nakuru', 'Uasin Gishu',
    'Machakos', 'Meru', 'Kakamega', 'Bungoma', 'Kilifi', 'Kwale',
    'Turkana', 'Marsabit', 'Garissa', 'Wajir', 'Mandera', 'Lamu',
    'Tana River', 'Kitui', 'Makueni', 'Nyandarua', 'Nyeri', 'Kirinyaga',
    'Muranga', 'Embu', 'Tharaka Nithi', 'Isiolo', 'Samburu', 'Trans Nzoia',
    'Elgeyo Marakwet', 'Nandi', 'Bomet', 'Kericho', 'Laikipia', 'Narok',
    'Kajiado', 'Taita Taveta', 'Garissa', 'Homa Bay', 'Migori', 'Kisii',
    'Nyamira', 'Siaya', 'Vihiga', 'Busia', 'Baringo', 'West Pokot'
  ];
  
  export const constituencies: Record<string, string[]> = {
    'Nairobi': ['Westlands', 'Dagoretti North', 'Dagoretti South', 'Langata', 'Kibra', 'Roysambu', 'Kasarani', 'Ruaraka', 'Embakasi South', 'Embakasi North', 'Embakasi Central', 'Embakasi East', 'Embakasi West', 'Makadara', 'Kamukunji', 'Starehe', 'Mathare'],
    'Mombasa': ['Changamwe', 'Jomvu', 'Kisauni', 'Nyali', 'Likoni', 'Mvita'],
    'Kisumu': ['Kisumu Central', 'Kisumu East', 'Kisumu West', 'Seme', 'Nyando', 'Muhoroni', 'Nyakach'],
    // Add all constituencies for each county
  };
  
  export const wards: Record<string, string[]> = {
    'Westlands': ['Kitisuru', 'Parklands', 'Karura', 'Kangemi', 'Mountain View'],
    'Dagoretti North': ['Kilimani', 'Kawangware', 'Gatina', 'Kileleshwa', 'Kabiro'],
    'Kasarani': ['Clay City', 'Mwiki', 'Kasarani', 'Njiru', 'Ruai'],
    // Add all wards for each constituency
  };