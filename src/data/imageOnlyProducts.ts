import type { ImageOnlyProduct } from '../types';

// Cloudinary base URL
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dszgwsh5a/image/upload';

export const imageOnlyProducts: ImageOnlyProduct[] = [

    // --- Spice Products ---
    {
        id: 'spice-001',
        name: 'Ceylon Cinnamon (கறுவாபட்டை)',
        category: 'spice',
        image: `${CLOUDINARY_BASE}/v1767632595/3_kioxez.jpg`,
    },
    {
        id: 'spice-002',
        name: 'Black Pepper (மிளகு )',
        category: 'spice',
        image: `${CLOUDINARY_BASE}/v1767632605/WhatsApp_Image_2025-12-24_at_15.52.12_erx4un.jpg`,
    },
    {
        id: 'spice-003',
        name: 'Nutmeg (ஜாதிக்காய்)',
        category: 'spice',
        image: `${CLOUDINARY_BASE}/v1767632603/8_tysrrq.jpg`,
    },
    {
        id: 'spice-004',
        name: 'Cardamom (ஏலக்காய்)',
        category: 'spice',
        image: `${CLOUDINARY_BASE}/v1767632601/5_jzfdud.jpg`,
    },
    {
        id: 'spice-005',
        name: 'Star Anise (Pineapple Flower)',
        category: 'spice',
        image: `${CLOUDINARY_BASE}/v1767632598/4_q5ggfe.jpg`,
    },
    {
        id: 'spice-006',
        name: 'Mace',
        category: 'spice',
        image: `${CLOUDINARY_BASE}/v1767632600/7_nmcgma.jpg`,
    },
    {
        id: 'spice-007',
        name: 'Clove (கராம்பு)',
        category: 'spice',
        image: `${CLOUDINARY_BASE}/v1767632600/6_fehzij.jpg`,
    },

    // --- Vegetable Products ---
    {
        id: 'vegetable-001',
        name: 'Fresh Drumsticks (முருங்கை காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628278/14_auhx0z.jpg`,
    },
    {
        id: 'vegetable-002',
        name: 'Curry Leaves (கறிவேப்பிலை)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628243/2_g8arw9.jpg`,
    },
    {
        id: 'vegetable-003',
        name: 'Green Chilies (மிளகாய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628304/21_bpwotj.jpg`,
    },

    {
        id: 'vegetable-004',
        name: 'Elephant Foot Yams',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628353/45_nul4fp.jpg`,
    },
    {
        id: 'vegetable-005',
        name: 'Small red onions (வெங்காயம்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628276/13_hm8tsy.jpg`,
    },
    {
        id: 'vegetable-006',
        name: 'Ginger (இஞ்சி)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628348/42_po4y0s.jpg`,
    },
    {
        id: 'vegetable-007',
        name: 'White brinjal (கத்தரி)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628347/41_dhnyge.jpg`,
    },
    {
        id: 'vegetable-008',
        name: 'Palmyrah Sprouts (பனங்கிழங்கு)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767958813/1e4d9a49-aac8-4b8d-8b03-82624cee8fdb.png`,
    },
    {
        id: 'vegetable-009',
        name: 'Centella (வல்லாரை)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628342/39_rfktkr.jpg`,
    },
    {
        id: 'vegetable-010',
        name: 'Ponnanganni keerai (பொன்னாங்கனி)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767959207/be0e678d-20a1-49fa-ae45-2f02e698c075.png`,
    },
    {
        id: 'vegetable-011',
        name: 'Ladies Finger (வெண்டிகாய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628337/37_kr37a1.jpg`,
    },
    {
        id: 'vegetable-012',
        name: 'Onion Blossom (வெங்காய பூ)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628333/35_bgqsso.jpg`,
    },
    {
        id: 'vegetable-013',
        name: 'Banana Blossom (வாழைப்பூ)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628328/31_bht2of.jpg`,
    },
    {
        id: 'vegetable-014',
        name: 'Broad Beans (அவரைக்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628328/33_i86res.jpg`,
    },

    {
        id: 'vegetable-015',
        name: 'Long Beans (பயத்தங்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628327/32_z4mz59.jpg`,
    },

    {
        id: 'vegetable-016',
        name: 'Bottle gourd (பீர்க்கங்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628325/30_sbltap.jpg`,
    },

    {
        id: 'vegetable-017',
        name: 'Green Papaya (பாப்பாசி)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628324/29_re2zil.jpg`,
    },

    {
        id: 'vegetable-018',
        name: 'Chepakilangu (சேப்பங்கிழங்கு)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628323/28_pupajn.jpg`,
    },

    {
        id: 'vegetable-019',
        name: 'Pointed Gourd (கம்புபுடலை)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628322/27_t0uzag.jpg`,
    },
    {
        id: 'vegetable-020',
        name: 'Ridge Gourd (பீர்க்கங்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628321/26_hnojnc.jpg`,
    },
    {
        id: 'vegetable-021',
        name: 'ambarella (அம்பரெல்லா)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767960418/087a2dfb-0ded-49ff-a8b0-ab60aee65916.png`,
    },
    {
        id: 'vegetable-022',
        name: 'Coconut (தேங்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628313/19_chjy0i.jpg`,
    },
    {
        id: 'vegetable-023',
        name: 'Green Banana (பச்சை வாழைக்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628322/27_t0uzag.jpg`,
    },
    {
        id: 'vegetable-024',
        name: 'Green Tomato (பச்சை தக்காளி)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628301/20_pmhzaz.jpg`,
    },
    {
        id: 'vegetable-025',
        name: 'Brinjal (கத்தரி)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767960927/93fb8362-c43f-41ee-860a-50425fd46b7d.png`,
    },
    {
        id: 'vegetable-026',
        name: 'Bitter gourd (பாகற்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628287/4_qvjkkm.jpg`,
    },
    {
        id: 'vegetable-027',
        name: 'Pea Eggplant (சுண்டைக்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628280/7_fok2gw.jpg`,
    },
    {
        id: 'vegetable-028',
        name: 'Bitter Melon (பாகற்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628280/5_y9m1sm.jpg`,
    },
    {
        id: 'vegetable-029',
        name: 'Tumeric (மஞ்சள்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767961493/959c754a-8a24-494a-b0ac-b155d2e37a75.png`,
    },
    {
        id: 'vegetable-030',
        name: 'Sugar Cane (கரும்பு)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628269/10_trq2fj.jpg`,
    },
    {
        id: 'vegetable-031',
        name: 'Bitter Melon (பாகற்காய்)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628261/6_bnmdyi.jpg`,
    },
    {
        id: 'vegetable-032',
        name: 'Jack Fruit Seed (பலா விதை)',
        category: 'vegetable',
        image: `${CLOUDINARY_BASE}/v1767628242/1_r1mqf8.jpg`,
    },

    // --- Dry Fish Products ---
    {
        id: 'dryfish-001',
        name: '',
        category: 'dryFish',
        image: `${CLOUDINARY_BASE}/v1767627965/5_yt8bnx.jpg`,
    },
    {
        id: 'dryfish-002',
        name: '',
        category: 'dryFish',
        image: `${CLOUDINARY_BASE}/v1767627965/3_jco6ms.jpg`,
    },
    {
        id: 'dryfish-003',
        name: '',
        category: 'dryFish',
        image: `${CLOUDINARY_BASE}/v1767627965/10_ybisv0.jpg`,
    },
    {
        id: 'dryfish-004',
        name: '',
        category: 'dryFish',
        image: `${CLOUDINARY_BASE}/v1767627965/9_e5hqfc.jpg`,
    },
    {
        id: 'dryfish-005',
        name: '',
        category: 'dryFish',
        image: `${CLOUDINARY_BASE}/v1767627964/8_azbw61.jpg`,
    },
    {
        id: 'dryfish-006',
        name: '',
        category: 'dryFish',
        image: `${CLOUDINARY_BASE}/v1767627960/1_v5wtf9.jpg`,
    },
    {
        id: 'dryfish-007',
        name: '',
        category: 'dryFish',
        image: `${CLOUDINARY_BASE}/v1767627958/2_jojrnn.jpg`,
    },
    {
        id: 'dryfish-008',
        name: '',
        category: 'dryFish',
        image: `${CLOUDINARY_BASE}/v1767627957/7_vnszi3.jpg`,
    },
    {
        id: 'dryfish-009',
        name: '',
        category: 'dryFish',
        image: `${CLOUDINARY_BASE}/v1767627955/4_cqqr0e.jpg`,
    },


    // --- Fish Products ---
    {
        id: 'fish-001',
        name: '',
        category: 'fish',
        image: `${CLOUDINARY_BASE}/v1767628145/6_gox1ym.jpg`,
    },
    {
        id: 'fish-002',
        name: '',
        category: 'fish',
        image: `${CLOUDINARY_BASE}/v1767628143/5_mlaa9q.jpg`,
    },
    {
        id: 'fish-003',
        name: '',
        category: 'fish',
        image: `${CLOUDINARY_BASE}/v1767628142/3_qcxstv.jpg`,
    },
    {
        id: 'fish-004',
        name: '',
        category: 'fish',
        image: `${CLOUDINARY_BASE}/v1767628141/2_fwz1dr.jpg`,
    },
    {
        id: 'fish-005',
        name: '',
        category: 'fish',
        image: `${CLOUDINARY_BASE}/v1767628140/1_dsj0cn.jpg`,
    },



    // --- Meat Products ---
    {
        id: 'meat-001',
        name: 'Fresh Chicken',
        category: 'meat',
        image: `${CLOUDINARY_BASE}/v1767963562/4ab55342-bd50-422c-b79a-da0d418da462.png`,
    },
    {
        id: 'meat-002',
        name: 'Beef',
        category: 'meat',
        image: `${CLOUDINARY_BASE}/v1767964057/481dce63-ea4d-49fd-b700-cac2ffddc39b.png`,
    },
    {
        id: 'meat-003',
        name: 'Mutton',
        category: 'meat',
        image: `${CLOUDINARY_BASE}/v1767964209/6f1c14b7-1ebf-4962-bd68-c5d09dc465cb.png`,
    },

    // --- Fruits Products ---
    {
        id: 'fruits-001',
        name: 'Mango (மாம்பழம்)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628207/20_vdqcq0.jpg`,
    },
    {
        id: 'fruits-002',
        name: 'Rambuttan (ரம்புடன்)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628215/18_uro4eu.jpg`,
    },
    {
        id: 'fruits-003',
        name: 'Banana (வாழைப்பழம்)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628183/5_cp4dff.jpg`,
    },
    {
        id: 'fruits-004',
        name: 'Red Banana (செவ்வாழைப்பழம்)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628178/4_kiag4m.jpg`,
    },
    {
        id: 'fruits-005',
        name: 'Jackfruit (பாலாப் பழம்)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628209/WhatsApp_Image_2025-12-24_at_15.14.56_pepuqn.jpg`,
    },
    {
        id: 'fruits-006',
        name: 'Nelli (நெல்லி)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628203/19_vuzin6.jpg`,
    },
    {
        id: 'fruits-007',
        name: 'Mangostan (மங்குஸ்தான்)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628195/15_pzzelv.jpg`,
    },
    {
        id: 'fruits-008',
        name: 'Pineapple (அன்னாசி)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628194/12_tv6kj8.jpg`,
    },
    {
        id: 'fruits-009',
        name: 'Soursop (முள் சீத்தாப்பழம்)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628172/2_cygrhr.jpg`,
    },
    {
        id: 'fruits-010',
        name: 'Avacado (அவகடோ)',
        category: 'fruits',
        image: `${CLOUDINARY_BASE}/v1767628195/13_no41d5.jpg`,
    },
   
];
