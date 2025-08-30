import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/ui/OptimizedImage';
import atlasRoseImg from '@/assets/atlas-rose-hero.jpg';
import artisanImg from '@/assets/testimonial-artisan-refined.jpg';

const Heritage = () => {
  const heritageStories = [
    {
      title: 'The Ancient Routes',
      content: 'For centuries, Morocco has been the crossroads of Africa, Europe, and the Middle East. Our perfumers follow the ancient spice routes, discovering rare ingredients that have scented palaces and markets for generations.',
      image: atlasRoseImg
    },
    {
      title: 'Master Artisans',
      content: 'Our fragrances are crafted by master perfumers who have inherited techniques passed down through generations. Each bottle represents decades of knowledge and an unwavering commitment to excellence.',
      image: artisanImg
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <OptimizedImage
          src={atlasRoseImg}
          alt="Moroccan Heritage"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="max-w-3xl text-white">
              <h1 className="font-playfair text-5xl md:text-7xl mb-6 tracking-luxury">
                Heritage
              </h1>
              <p className="font-inter text-xl md:text-2xl leading-relaxed text-white/90">
                A journey through Morocco's aromatic legacy, where ancient traditions meet modern artistry in every drop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-8">
              The Soul of Morocco
            </h2>
            <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed">
              From the rose gardens of the Dadès Valley to the cedar forests of the Atlas Mountains, 
              Morocco's landscapes have provided the raw materials for exquisite fragrances for over a millennium. 
              We honor this heritage while crafting scents for the modern world.
            </p>
          </div>

          {/* Heritage Stories */}
          <div className="space-y-24">
            {heritageStories.map((story, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="font-playfair text-3xl md:text-4xl text-foreground">
                    {story.title}
                  </h3>
                  <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                    {story.content}
                  </p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <OptimizedImage
                    src={story.image}
                    alt={story.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-6">
              Our Values
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
              Every fragrance we create is guided by principles that have shaped Moroccan artistry for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Authenticity',
                description: 'We source our ingredients directly from Moroccan farmers and cooperatives, ensuring authenticity and supporting local communities.'
              },
              {
                title: 'Craftsmanship',
                description: 'Every bottle is crafted with meticulous attention to detail, honoring traditional methods while embracing innovation.'
              },
              {
                title: 'Sustainability',
                description: 'We work closely with local producers to ensure sustainable harvesting practices that preserve Morocco\'s natural beauty.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <h3 className="font-playfair text-2xl text-foreground">
                  {value.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Heritage;