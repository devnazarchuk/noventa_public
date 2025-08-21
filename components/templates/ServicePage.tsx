'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

import { PageWrapper } from "@/components/ui/PageWrapper";

interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

interface ServiceBenefit {
  title: string;
  description: string;
  details?: string[];
}

interface ServicePageProps {
  title: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  registrationEnabled?: boolean;
  price?: string;
}

export default function ServicePage({ 
  title, 
  description, 
  heroImage, 
  features, 
  benefits,
  registrationEnabled = false,
  price
}: ServicePageProps) {
  return (
    <PageWrapper>
      {}
      <section className="relative h-[40vh] w-full mb-12">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover rounded-[25px]"
            priority
          />
          <div className="absolute inset-0 bg-black/40 rounded-[25px]" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg"
          >
            {description}
          </motion.p>
          {price && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 bg-[#EE0A24] px-6 py-2 rounded-full text-xl font-bold"
            >
              {price}
            </motion.div>
          )}
        </div>
      </section>

      {}
      <div className="px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] p-6"
            >
              {feature.icon && (
                <div className="w-12 h-12 mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-[#D72638] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {}
      <div className="px-4 mb-16">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-[#D72638] mb-4">{benefit.title}</h3>
            <p className="text-gray-600 mb-4">{benefit.description}</p>
            {benefit.details && (
              <ul className="space-y-2">
                {benefit.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#EE0A24] mr-2">•</span>
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>

      {}
      {registrationEnabled && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 mb-16"
        >
          <div className="bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] p-8">
            <h2 className="text-2xl font-bold text-[#D72638] mb-6">Register Now</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-[16px] bg-white shadow-[inset_4px_4px_8px_#e4c6c6,_inset_-4px_-4px_8px_#ffffff]"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-[16px] bg-white shadow-[inset_4px_4px_8px_#e4c6c6,_inset_-4px_-4px_8px_#ffffff]"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 rounded-[16px] bg-white shadow-[inset_4px_4px_8px_#e4c6c6,_inset_-4px_-4px_8px_#ffffff]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#EE0A24] text-white px-6 py-3 rounded-[20px] font-semibold shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] transition-all"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </PageWrapper>
  );
} 