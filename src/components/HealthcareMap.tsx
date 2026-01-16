'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Healthcare facilities with troubleshooter specs
const healthcareFacilities = [
  {
    id: 1,
    name: 'American Hospital of Casablanca',
    category: 'Emergency',
    coordinates: [-7.6058, 33.5815],
    city: 'Casablanca',
    problemSolved: 'Fear of losing US-standard medical protocols or facing a language barrier during a crisis.',
    specs: {
      language: 'English / French',
      waitTime: 'Immediate / Emergency',
      payment: 'US International Insurance Accepted',
      techStandard: '2024/2025 Generation Imaging',
    },
    details: {
      accreditation: 'International standards with US-style healthcare management',
      personnel: 'English-speaking staff trained in North American/European institutions',
      capabilities: 'Full-spectrum Level-1 emergency, advanced MRI/CT diagnostics',
    },
  },
  {
    id: 2,
    name: 'Hôpital Privé de Casablanca (Akdital)',
    category: 'Emergency',
    coordinates: [-7.6324, 33.5612],
    city: 'Casablanca',
    problemSolved: 'The anxiety of "Socialized Medicine" wait times and aging public infrastructure.',
    specs: {
      language: 'French / English',
      waitTime: 'Zero-Wait Emergency Intake',
      payment: 'Private Pay / International Insurance',
      techStandard: 'Siemens & GE Healthcare Technology',
    },
    details: {
      efficiency: 'Private, high-speed patient flow with zero-wait emergency intake',
      technology: 'State-of-the-art Siemens and GE diagnostic equipment',
      logistics: 'Near Casa-Anfa Tramway and financial district for executive access',
    },
  },
  {
    id: 3,
    name: 'Clinique Dentaire Tazi',
    category: 'Aesthetic',
    coordinates: [-7.6190, 33.5910],
    city: 'Casablanca',
    problemSolved: 'Maintaining a "Hollywood Standard" of cosmetic dentistry without inflated US insurance friction.',
    specs: {
      language: 'English / French / Arabic',
      waitTime: 'By Appointment',
      payment: 'Private Pay (70% below US pricing)',
      techStandard: 'Digital Smile Design (DSD) / CAD-CAM',
    },
    details: {
      specialization: '3D intraoral scanning and CAD/CAM porcelain milling',
      expertise: 'Lead practitioners with European dental faculty certifications',
      ritual: 'Spa-like environment focused on biological integrity and pain-free aesthetics',
    },
  },
  {
    id: 4,
    name: 'Guest Clinic Marrakech',
    category: 'Aesthetic',
    coordinates: [-8.0152, 31.6285],
    city: 'Marrakech',
    problemSolved: 'The need for surgical excellence combined with total privacy from public or media exposure.',
    specs: {
      language: 'French / English',
      waitTime: 'VIP Scheduling',
      payment: 'Private Pay / Concierge Billing',
      techStandard: 'French Surgical Philosophy',
    },
    details: {
      infrastructure: 'Boutique surgical facility with VIP recovery suites and private garden access',
      procedures: 'Facial rejuvenation and body contouring with "Natural Look" French philosophy',
      safety: 'Full on-site anesthesiology and post-operative monitoring for VIP protocols',
    },
  },
  {
    id: 5,
    name: 'Clinique Internationale de Marrakech',
    category: 'Specialist',
    coordinates: [-8.0120, 31.6340],
    city: 'Marrakech',
    problemSolved: 'Ensuring medical records and insurance (Aetna/Cigna) are accepted in a "Sanctuary" city.',
    specs: {
      language: 'English / French',
      waitTime: 'Same-Week Specialist',
      payment: 'Cigna / Aetna Direct Billing',
      techStandard: 'Multi-Specialty Hub',
    },
    details: {
      insurance: 'Direct billing agreements with major US international health insurers',
      scope: 'Cardiology, Orthopedics, and Pediatrics for resident families',
      access: 'Heart of Guéliz district, accessible from primary villa communities',
    },
  },
];

const categoryColors: Record<string, string> = {
  Emergency: 'bg-terracotta-500',
  Aesthetic: 'bg-olive-500',
  Specialist: 'bg-atlas-600',
};

export default function HealthcareMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<typeof healthcareFacilities[0] | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-7.6, 32.5], // Center on Morocco Sanctuary Corridor
      zoom: 6.5,
      attributionControl: false,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setMapLoaded(true);

      // Add markers for each facility
      healthcareFacilities.forEach((facility) => {
        const el = document.createElement('div');
        el.className = 'healthcare-marker';

        const bgColor = facility.category === 'Emergency'
          ? 'rgb(198, 93, 71)'
          : facility.category === 'Aesthetic'
          ? 'rgb(138, 154, 91)'
          : 'rgb(51, 65, 85)';

        el.innerHTML = `
          <div style="width: 28px; height: 28px; background-color: ${bgColor}; border-radius: 50%; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <svg style="width: 14px; height: 14px; color: white;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
          </div>
        `;

        el.addEventListener('click', () => {
          setSelectedFacility(facility);
          map.current?.flyTo({
            center: facility.coordinates as [number, number],
            zoom: 13,
            duration: 1500,
          });
        });

        new mapboxgl.Marker(el)
          .setLngLat(facility.coordinates as [number, number])
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  const handleFacilityClick = (facility: typeof healthcareFacilities[0]) => {
    setSelectedFacility(facility);
    map.current?.flyTo({
      center: facility.coordinates as [number, number],
      zoom: 13,
      duration: 1500,
    });
  };

  const resetView = () => {
    setSelectedFacility(null);
    map.current?.flyTo({
      center: [-7.6, 32.5],
      zoom: 6.5,
      duration: 1500,
    });
  };

  return (
    <div className="bg-atlas-900 rounded-2xl overflow-hidden">
      <div className="grid lg:grid-cols-3">
        {/* Map */}
        <div className="lg:col-span-2 h-[500px] lg:h-[600px] relative">
          <div ref={mapContainer} className="w-full h-full" />
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-atlas-900">
              <div className="text-sand-300">Loading healthcare infrastructure...</div>
            </div>
          )}
          {selectedFacility && (
            <button
              onClick={resetView}
              className="absolute top-4 left-4 bg-white/90 text-atlas-900 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
            >
              &larr; View Corridor
            </button>
          )}
          {/* Category Legend */}
          <div className="absolute bottom-4 left-4 bg-atlas-800/90 backdrop-blur-sm rounded-lg p-3">
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-terracotta-500"></div>
                <span className="text-sand-300">Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-olive-500"></div>
                <span className="text-sand-300">Aesthetic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-atlas-600"></div>
                <span className="text-sand-300">Specialist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Troubleshooter Card */}
        <div className="p-6 lg:p-8 bg-atlas-800 max-h-[600px] overflow-y-auto">
          {selectedFacility ? (
            <div className="animate-fade-in">
              {/* Category Badge */}
              <span className={`inline-block px-2 py-1 ${categoryColors[selectedFacility.category]} text-white text-xs font-medium rounded mb-3`}>
                {selectedFacility.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{selectedFacility.name}</h3>
              <p className="text-terracotta-400 text-sm mb-4">{selectedFacility.city}</p>

              {/* Problem Solved */}
              <div className="mb-5">
                <span className="text-xs text-sand-500 uppercase tracking-wide font-medium">Problem Solved</span>
                <p className="text-sand-200 text-sm mt-1">{selectedFacility.problemSolved}</p>
              </div>

              {/* Technical Specs - Spec Sheet Format */}
              <div className="bg-atlas-700/50 rounded-lg p-4 mb-5">
                <span className="text-xs text-sand-500 uppercase tracking-wide font-medium block mb-3">Technical Specs</span>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-sand-400">Language</span>
                    <span className="text-white font-medium">{selectedFacility.specs.language}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-sand-400">Wait Time</span>
                    <span className="text-olive-400 font-medium">{selectedFacility.specs.waitTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-sand-400">Payment</span>
                    <span className="text-white font-medium">{selectedFacility.specs.payment}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-sand-400">Tech Standard</span>
                    <span className="text-white font-medium">{selectedFacility.specs.techStandard}</span>
                  </div>
                </div>
              </div>

              {/* Institutional Access */}
              <div className="mb-5">
                <span className="text-xs text-sand-500 uppercase tracking-wide font-medium block mb-2">Institutional Access</span>
                <ul className="space-y-2">
                  {Object.entries(selectedFacility.details).map(([key, value]) => (
                    <li key={key} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-olive-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sand-300">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-atlas-700">
                <p className="text-xs text-sand-500">
                  Human Advocacy: We coordinate directly with facility administration.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Medical Sovereignty Corridor</h3>
              <p className="text-sand-400 text-sm mb-4">
                From Tangier to Marrakech: US-standard emergency care, zero-wait diagnostics,
                and aesthetic excellence. Your biological integrity is guaranteed.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">E</span>
                  </div>
                  <span className="text-sand-300 text-sm">Emergency: Level-1 trauma, English-speaking staff</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-olive-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <span className="text-sand-300 text-sm">Aesthetic: Hollywood-standard cosmetic & surgical</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-atlas-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <span className="text-sand-300 text-sm">Specialist: Cigna/Aetna direct billing accepted</span>
                </div>
              </div>

              <p className="text-xs text-sand-500 mb-4">Select a facility to view troubleshooter specs:</p>

              <div className="space-y-2">
                {healthcareFacilities.map((facility) => (
                  <button
                    key={facility.id}
                    onClick={() => handleFacilityClick(facility)}
                    className="w-full text-left p-3 bg-atlas-700/50 rounded-lg hover:bg-atlas-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${categoryColors[facility.category]}`}></div>
                      <span className="text-white text-sm font-medium">{facility.name}</span>
                    </div>
                    <div className="text-sand-500 text-xs mt-1 ml-4">{facility.city} · {facility.category}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 bg-atlas-950 border-t border-atlas-700">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sand-300 text-sm">
              Coordinate your integrated health transition. We handle facility relationships directly.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors whitespace-nowrap"
          >
            Secure Your Integrated Health Transition
          </Link>
        </div>
      </div>
    </div>
  );
}
