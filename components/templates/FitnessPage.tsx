'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

import { PageWrapper } from "@/components/ui/PageWrapper";

interface EventDetails {
  date: string;
  time: string;
  location: string;
  capacity: string;
  price: string;
  requirements?: string[];
}

interface FitnessEvent {
  title: string;
  description: string;
  image: string;
  details: EventDetails;
  highlights: string[];
}

interface FitnessPageProps {
  title: string;
  description: string;
  heroImage: string;
  event: FitnessEvent;
}

export default function FitnessPage({ title, description, heroImage, event }: FitnessPageProps) {
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
            sizes="100vw"
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
        </div>
      </section>

      {}
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-[25px] overflow-hidden shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff]"
          >
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 400px, 100vw"
            />
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#D72638]">{event.title}</h2>
            <p className="text-gray-600 mb-6">{event.description}</p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold w-24">Date:</span>
                <span className="text-gray-600">{event.details.date}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Time:</span>
                <span className="text-gray-600">{event.details.time}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Location:</span>
                <span className="text-gray-600">{event.details.location}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Capacity:</span>
                <span className="text-gray-600">{event.details.capacity}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Price:</span>
                <span className="text-gray-600">{event.details.price}</span>
              </div>
            </div>

            {event.details.requirements && (
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Requirements:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {event.details.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600">{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#D72638]">Event Highlights</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event.highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-[#EE0A24] mr-2">•</span>
                <span className="text-gray-600">{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <a
            href="/fitness-baker/registration"
            className="bg-[#EE0A24] text-white px-12 py-4 rounded-[20px] font-semibold shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] transition-all"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Jetzt anmelden
          </a>
        </motion.div>
      </div>
    </PageWrapper>
  );
} 