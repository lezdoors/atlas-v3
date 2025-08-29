/**
 * Comprehensive image asset management for Perle de l'Atlas
 * Organized by category with proper typing and fallbacks
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ImageCollection {
  products: Record<string, ImageAsset>;
  backgrounds: Record<string, ImageAsset>;
  botanical: Record<string, ImageAsset>;
  lifestyle: Record<string, ImageAsset>;
}

const imageAssets: ImageCollection = {
  // Product Images - Fragrance bottles and product shots
  products: {
    atlasRose: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Atlas Rose - Luxury Moroccan Perfume Bottle',
      width: 800,
      height: 1000
    },
    amberOud: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Amber Oud - Premium Oriental Fragrance',
      width: 800,
      height: 1000
    },
    figCassis: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Fig & Cassis - Mediterranean Eau de Toilette',
      width: 800,
      height: 1000
    },
    neroliGarden: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Neroli Garden - Orange Blossom Eau de Parfum',
      width: 800,
      height: 1000
    },
    santalMystique: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Santal Mystique - Creamy Sandalwood Parfum',
      width: 800,
      height: 1000
    },
    cedratLumiere: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Cedrat Lumière - Luminous Citrus Eau Fraîche',
      width: 800,
      height: 1000
    },
    atlasOil: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Pure Atlas Argan Oil - Luxury Skincare',
      width: 600,
      height: 750
    },
    roseDamascusSerum: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Rose Damascus Serum - Anti-Aging Facial Treatment',
      width: 600,
      height: 750
    },
    atlasClayMask: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Atlas Clay Mask - Purifying Face Treatment',
      width: 600,
      height: 750
    },
    giftCollection: {
      src: '/src/assets/product-sample.jpg',
      alt: 'Perle de l\'Atlas Luxury Gift Collection',
      width: 1000,
      height: 800
    }
  },

  // Background Images - Hero sections and textures
  backgrounds: {
    heroFragrance: {
      src: '/src/assets/hero-fragrance.jpg',
      alt: 'Moroccan Artisan Crafting Luxury Perfumes',
      width: 1920,
      height: 1080
    },
    atlasHeritage: {
      src: '/src/assets/collection-hero.jpg',
      alt: 'Atlas Mountains Landscape at Golden Hour',
      width: 1920,
      height: 1080
    },
    marrakechSouk: {
      src: '/src/assets/collection-hero.jpg',
      alt: 'Traditional Marrakech Souk Atmosphere',
      width: 1600,
      height: 900
    },
    arganGrove: {
      src: '/src/assets/collection-hero.jpg',
      alt: 'Ancient Argan Grove in Morocco',
      width: 1920,
      height: 1080
    },
    craftworkshop: {
      src: '/src/assets/collection-hero.jpg',
      alt: 'Traditional Perfume Workshop in Marrakech',
      width: 1600,
      height: 900
    }
  },

  // Botanical Elements - Hand-drawn SVG illustrations
  botanical: {
    lavenderSprig: {
      src: '/images/botanical/lavender-sprig.svg',
      alt: 'Hand-drawn Lavender Sprig Illustration',
      width: 120,
      height: 120
    },
    eucalyptusBranch: {
      src: '/images/botanical/eucalyptus-branch.svg',
      alt: 'Elegant Eucalyptus Branch Drawing',
      width: 140,
      height: 140
    },
    roseStem: {
      src: '/images/botanical/rose-stem.svg',
      alt: 'Delicate Rose Stem with Thorns',
      width: 100,
      height: 100
    },
    citrusLeaves: {
      src: '/images/botanical/citrus-leaves.svg',
      alt: 'Fresh Citrus Leaves Branch',
      width: 110,
      height: 110
    },
    botanicalDivider: {
      src: '/images/botanical/botanical-divider.svg',
      alt: 'Ornamental Botanical Section Divider',
      width: 200,
      height: 40
    },
    arganBranch: {
      src: '/images/botanical/argan-branch-minimal.svg',
      alt: 'Minimalist Argan Branch with Nuts',
      width: 160,
      height: 120
    },
    jasmineBud: {
      src: '/images/botanical/jasmine-bud.svg',
      alt: 'Jasmine Flower Bud Illustration',
      width: 80,
      height: 80
    }
  },

  // Lifestyle Images - Atmospheric and contextual photos
  lifestyle: {
    perfumeMoments: {
      src: '/images/lifestyle/woman-applying-perfume.jpg',
      alt: 'Elegant Woman Applying Luxury Perfume',
      width: 1200,
      height: 1600
    },
    moroccanRitual: {
      src: '/images/lifestyle/moroccan-beauty-ritual.jpg',
      alt: 'Traditional Moroccan Beauty Ritual',
      width: 1600,
      height: 1200
    },
    vanityDisplay: {
      src: '/images/lifestyle/luxury-vanity-display.jpg',
      alt: 'Luxury Perfume Collection on Marble Vanity',
      width: 1400,
      height: 1000
    },
    arganHarvest: {
      src: '/images/lifestyle/women-harvesting-argan.jpg',
      alt: 'Berber Women Harvesting Argan Nuts',
      width: 1600,
      height: 1200
    },
    scentedSpace: {
      src: '/images/lifestyle/perfumed-living-space.jpg',
      alt: 'Beautifully Scented Modern Living Space',
      width: 1200,
      height: 900
    },
    giftMoment: {
      src: '/images/lifestyle/luxury-gift-moment.jpg',
      alt: 'Elegant Gift-Giving Moment with Luxury Packaging',
      width: 1000,
      height: 1200
    }
  }
};

// Fallback images for error states
export const fallbackImages = {
  product: '/src/assets/product-sample.jpg',
  background: '/src/assets/hero-fragrance.jpg',
  botanical: '/src/assets/argan-branch-minimal.png',
  lifestyle: '/src/assets/collection-hero.jpg'
};

// Helper function to get image by category and key
export const getImage = (category: keyof ImageCollection, key: string): ImageAsset | null => {
  return imageAssets[category][key] || null;
};

// Helper function to get all images in a category
export const getImagesByCategory = (category: keyof ImageCollection): Record<string, ImageAsset> => {
  return imageAssets[category];
};

// Helper function to get fallback image by category
export const getFallbackImage = (category: keyof ImageCollection): string => {
  switch (category) {
    case 'products':
      return fallbackImages.product;
    case 'backgrounds':
      return fallbackImages.background;
    case 'botanical':
      return fallbackImages.botanical;
    case 'lifestyle':
      return fallbackImages.lifestyle;
    default:
      return fallbackImages.product;
  }
};

export default imageAssets;