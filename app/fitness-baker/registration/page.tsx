'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { PageWrapper } from '@/components/ui/PageWrapper'
import { Button } from '@/lib/components/ui/button'
import { Input } from '@/lib/components/ui/input'

import { fitnessBaeckerTranslations } from '../translations'

const eventOptions = [
  'Alpentour 2025 (22.06. - 27.06.2025)',
  'E-Bike-Power (06.09.2025)',
  'Fitnessbäcker-Bike-Day (30.08.2025)',
  'Full-Body-Workout (04.06. - 09.07.2025)',
  'Full-Body-Workout (30.07. - 03.09.2025)',
  'Rückentraining 2.0 (04.06. - 09.07.2025)',
  'Rückentraining 2.0 (30.07. - 03.09.2025)',
  'MTB-Kids-Camp (8-10 Jahre), (11.08. - 12.08.2025)',
  'MTB-Kids-Camp (11-13 Jahre), (13.08. - 14.08.2025)',
]

export default function FitnessRegistrationPage() {
  const language = useLanguageStore((state) => state.language)
  const translations = fitnessBaeckerTranslations[language].registration
  const [form, setForm] = useState({
    event: '',
    firstName: '',
    lastName: '',
    address: '',
    addressExtra: '',
    city: '',
    zip: '',
    phone: '',
    mobile: '',
    email: '',
    birthDate: '',
    size: '',
    transfer: '',
    privacy: false,
    cancellation: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  
  }

  return (
    <PageWrapper className="bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] dark:from-[#181818] dark:to-[#232323]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center rounded-[32px] border-2 border-[#FAD2E1] bg-white/90 px-8 py-12 shadow-[10px_10px_32px_#e4c6c6,_-10px_-10px_32px_#ffffff] md:px-16 md:py-16 dark:border-[#444444] dark:bg-[#232323]/90 dark:shadow-[10px_10px_32px_#181818,_-10px_-10px_32px_#2a2a2a]"
        style={{ backdropFilter: 'blur(2px)' }}
      >
        {}
        <div className="mb-4 flex justify-center">
          <Image
            src="/icons/bread.png"
            alt="Brot Illustration"
            width={80}
            height={80}
            className="rounded-full bg-[#FFF5E1] p-2 shadow-md dark:bg-[#2a2a2a]"
            priority
            sizes="80px"
          />
        </div>
        <h1
          className="mb-2 text-center text-4xl font-extrabold tracking-wide text-[#D72638] uppercase drop-shadow-sm md:text-5xl dark:text-[#FFA5A5]"
          style={{ letterSpacing: '0.04em' }}
        >
          {translations.title} 📝
        </h1>
        <p className="mb-8 text-center text-lg font-semibold text-[#D72638] dark:text-[#FFA5A5]">
          {translations.subtitle} 🎯
        </p>
        <AnimatePresence>
          {!submitted && (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="w-full space-y-6"
            >
              <div className="mb-6">
                <label
                  htmlFor="event"
                  className="mb-2 block text-lg font-semibold text-[#D72638] dark:text-[#FFA5A5]"
                >
                  {translations.form.event}
                </label>
                <div className="relative">
                  <select
                    id="event"
                    name="event"
                    value={form.event}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-2xl border border-[#FFD6D6] bg-[#FFF5E1] px-4 py-3 pr-10 text-base font-medium text-[#3A3A3A] shadow-md transition-all duration-200 focus:ring-2 focus:ring-[#D72638] focus:outline-none dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:ring-[#FFA5A5]"
                    required
                  >
                    <option value="" disabled>
                      {translations.form.event}
                    </option>
                    {eventOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#D72638] dark:text-[#FFA5A5]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M7 10l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder={translations.form.firstName}
                  required
                  className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
                />
                <Input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder={translations.form.lastName}
                  required
                  className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
                />
              </div>
              <Input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder={translations.form.address}
                required
                className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
              />
              <Input
                name="addressExtra"
                value={form.addressExtra}
                onChange={handleChange}
                placeholder={translations.form.addressExtra}
                className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder={translations.form.city}
                  required
                  className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
                />
                <Input
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  placeholder={translations.form.zip}
                  required
                  className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={translations.form.phone}
                  required
                  className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
                />
                <Input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder={translations.form.mobile}
                  className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
                />
              </div>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={translations.form.email}
                required
                className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
              />
              <Input
                name="birthDate"
                value={form.birthDate}
                onChange={handleChange}
                placeholder={translations.form.birthDate}
                required
                className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
              />
              <Input
                name="size"
                value={form.size}
                onChange={handleChange}
                placeholder={translations.form.size}
                required
                className="rounded-2xl border-2 border-[#FAD2E1] bg-[#FFF5E1] px-5 py-3 text-base font-medium text-[#3A3A3A] shadow-inner focus:border-[#EE0A24] focus:ring-2 focus:ring-[#EE0A24]/40 dark:border-[#444444] dark:bg-[#2a2a2a] dark:text-gray-300 dark:focus:border-[#FFA5A5] dark:focus:ring-[#FFA5A5]/40"
              />
              <div>
                <label className="mb-2 block font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                  {translations.form.transfer}
                </label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2 text-base font-medium text-[#3A3A3A] dark:text-gray-300">
                    <input
                      type="radio"
                      name="transfer"
                      value="YES"
                      checked={form.transfer === 'YES'}
                      onChange={handleChange}
                      required
                      className="h-5 w-5 accent-[#EE0A24] dark:accent-[#FFA5A5]"
                    />{' '}
                    {translations.form.transferOptions.yes}
                  </label>
                  <label className="flex items-center gap-2 text-base font-medium text-[#3A3A3A] dark:text-gray-300">
                    <input
                      type="radio"
                      name="transfer"
                      value="NO"
                      checked={form.transfer === 'NO'}
                      onChange={handleChange}
                      required
                      className="h-5 w-5 accent-[#EE0A24] dark:accent-[#FFA5A5]"
                    />{' '}
                    {translations.form.transferOptions.no}
                  </label>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-base font-medium text-[#3A3A3A] dark:text-gray-300">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={form.privacy}
                    onChange={handleChange}
                    required
                    className="h-5 w-5 accent-[#EE0A24] dark:accent-[#FFA5A5]"
                  />
                  {translations.form.privacy}
                </label>
              </div>
              <div>
                <label className="flex items-center gap-2 text-base font-medium text-[#3A3A3A] dark:text-gray-300">
                  <input
                    type="checkbox"
                    name="cancellation"
                    checked={form.cancellation}
                    onChange={handleChange}
                    required
                    className="h-5 w-5 accent-[#EE0A24] dark:accent-[#FFA5A5]"
                  />
                  {translations.form.cancellation}
                </label>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="pt-2">
                <Button
                  type="submit"
                  className="w-full rounded-[20px] bg-[#EE0A24] py-4 text-lg font-bold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-xl dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
                >
                  {translations.form.submit} 📝
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {submitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col items-center justify-center py-12"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                className="mb-4"
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#FAD2E1" className="dark:fill-[#444444]" />
                  <path
                    d="M24 42l14 14 18-26"
                    stroke="#EE0A24"
                    className="dark:stroke-[#FFA5A5]"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <div className="mb-2 text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {translations.success.title} ✅
              </div>
              <div className="mb-4 text-center text-base text-[#3A3A3A] dark:text-gray-300">
                {translations.success.message} 🎉
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full"
              >
                <Button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 w-full rounded-[20px] bg-[#EE0A24] py-3 text-lg font-bold text-white shadow-md transition-all hover:shadow-xl dark:bg-[#FFA5A5] dark:text-[#232323]"
                >
                  {translations.success.newRegistration} 📝
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-10 space-y-2 text-center text-base text-[#3A3A3A] dark:text-gray-300">
          <p>{translations.notes.confirmation}</p>
          <h4 className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
            {translations.notes.cancellation.title}
          </h4>
          <div>
            <div>{translations.notes.cancellation.thirtyDays}</div>
            <div>{translations.notes.cancellation.tenDays}</div>
            <div className="text-xs text-[#D72638] dark:text-[#FFA5A5]">
              {translations.notes.cancellation.note}
            </div>
          </div>
        </div>
      </motion.div>
    </PageWrapper>
  )
}
