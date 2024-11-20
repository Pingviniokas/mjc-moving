// src/components/Services.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  { id: "01", title: "Perkraustymo paslaugos", description: "Profesionalus ir saugus perkraustymas" },
  { id: "02", title: "Įmonių perkraustymas", description: "Efektyvus verslo inventoriaus perkėlimas" },
  { id: "03", title: "Krovinių pervežimas", description: "Patikimas krovinių transportavimas" },
  { id: "04", title: "Tarpmiestiniai perkraustymai", description: "Sklandus perkraustymas tarp miestų" },
  { id: "05", title: "Tarptautiniai perkraustymai", description: "Profesionalus pervežimas už šalies ribų" },
  { id: "06", title: "Fiskaro paslaugos", description: "Specializuota sunkių krovinių logistika" },
  { id: "07", title: "Nereikalingų daiktų išvežimas", description: "Operatyvus atliekų tvarkymas" },
  { id: "08", title: "Statybinių atliekų išvežimas", description: "Efektyvus statybinių atliekų šalinimas" },
  { id: "09", title: "Krovikų paslaugos", description: "Profesionalūs krovėjai jūsų paslaugoms" },
  { id: "10", title: "Renginių aptarnavimas", description: "Visapusiškas renginių logistikos sprendimas" },
  { id: "11", title: "Parodų aptarnavimas", description: "Specializuotas parodų įrangos transportavimas" },
  { id: "12", title: "Montavimo darbai", description: "Kokybiškas baldų surinkimas ir montavimas" },
  { id: "13", title: "Negabaritinių krovinių pervežimas", description: "Saugus didelių gabaritų transportavimas" },
  { id: "14", title: "Pakavimo medžiagos", description: "Aukštos kokybės pakavimo priemonės" },
  { id: "15", title: "Asmenų pervežimas iš/į oro uostų", description: "Patogus keliautojų transportavimas" }
]

export default function Services() {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <Image
            src="/images/pattern.jpg" // Add a subtle pattern background
            alt=""
            fill
            className="object-cover"
          />
        </div>
  
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-red-600 text-sm font-medium tracking-wider uppercase mb-4 block">
              Visos Paslaugos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Mūsų Teikiamos Paslaugos
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Profesionalūs sprendimai jūsų perkraustymo ir logistikos poreikiams
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100
                              hover:border-red-100 relative z-10 overflow-hidden">
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  {/* Red Line Indicator */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform -translate-x-1 
                                group-hover:translate-x-0 transition-transform duration-300" />
                  
                  <div className="relative">
                    {/* Service Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-red-600 font-medium text-sm block bg-red-50 px-3 py-1 rounded-full">
                        {service.id}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center
                                    group-hover:bg-red-50 transition-colors duration-300">
                        <svg 
                          className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </div>
                    </div>
  
                    {/* Service Content */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
  
                    {/* Call to Action */}
                    <motion.a
                      href={`/paslaugos/${service.id}`}
                      className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-red-600 
                               transition-colors group-hover:translate-x-2 duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Sužinoti Daugiau
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }