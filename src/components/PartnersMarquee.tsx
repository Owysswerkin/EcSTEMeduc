import React from 'react';
import edventureLogo from '@/assets/edventure-logo.png';
import lcentralLogo from '@/assets/lcentral-logo.png';
import chickyOliveLogo from '@/assets/chicky-olive-logo.png';
import sparkLogo from '@/assets/spark-education-logo.png';

type Partner = { name: string; logo: string; wide?: boolean };

const partners: Partner[] = [
{ name: 'Edventure Learning Academy', logo: edventureLogo },
{ name: 'LCENTRAL English', logo: lcentralLogo },
{ name: 'Chicky & Olive International Preschool', logo: chickyOliveLogo },
{ name: 'Spark Education', logo: sparkLogo, wide: true }];



// Duplicate for seamless loop
const allPartners = [...partners, ...partners, ...partners, ...partners];

const PartnersMarquee = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-lg font-semibold text-muted-foreground tracking-wide uppercase">OUR PARTNERS

        </h3>
      </div>
      <div className="relative w-full">
        <div className="flex items-center gap-16 animate-marquee w-max">
          {allPartners.map((partner, i) =>
          <div key={i} className={`flex-shrink-0 flex items-center justify-center ${partner.wide ? 'h-28 w-52' : 'h-20 w-40'}`}>
              <img
              src={partner.logo}
              alt={partner.name}
              className={partner.wide ? 'max-h-24 max-w-[190px] object-contain' : 'max-h-16 max-w-[140px] object-contain'} />

            </div>
          )}
        </div>
      </div>
    </section>);

};

export default PartnersMarquee;