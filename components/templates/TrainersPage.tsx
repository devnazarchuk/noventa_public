'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

import { PageWrapper } from "@/components/ui/PageWrapper";

interface TrainerSpecialty {
  name: string;
  description: string;
}

interface Trainer {
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: TrainerSpecialty[];
  certifications: string[];
}

interface TrainersPageProps {
  title: string;
  description: string;
  heroImage: string;
  trainers: Trainer[];
}

export default function TrainersPage({ title, description, heroImage, trainers }: TrainersPageProps) {
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
        <div className="space-y-16">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {}
              <div className="relative h-[400px] rounded-[25px] overflow-hidden shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff]">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 400px, 100vw"
                />
              </div>

              {}
              <div className="space-y-6">
                <div className="bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] p-8">
                  <h2 className="text-2xl font-bold text-[#D72638] mb-2">{trainer.name}</h2>
                  <h3 className="text-lg text-gray-600 mb-4">{trainer.title}</h3>
                  <p className="text-gray-600">{trainer.bio}</p>
                </div>

                {}
                <div className="bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] p-8">
                  <h3 className="text-xl font-bold text-[#D72638] mb-4">Specialties</h3>
                  <div className="space-y-4">
                    {trainer.specialties.map((specialty, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-gray-700 mb-1">{specialty.name}</h4>
                        <p className="text-gray-600">{specialty.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {}
                <div className="bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] p-8">
                  <h3 className="text-xl font-bold text-[#D72638] mb-4">Certifications</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {trainer.certifications.map((cert, i) => (
                      <li key={i} className="text-gray-600">{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
} 