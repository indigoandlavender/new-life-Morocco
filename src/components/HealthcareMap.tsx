'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Healthcare facilities data with coordinates
const healthcareFacilities = [
  {
    id: 1,
    name: 'American Hospital of Casablanca',
    type: 'International Hospital',
    specialty: 'Multi-Specialty, Emergency, Surgery',
    coordinates: [-7.6311, 33.5883],
    city: 'Casablanca',
    transit: '15 min from Casa-Voyageurs TGV',
    description: 'US-standard facility with North American medical protocols. English-speaking staff. 24/7 emergency department.',
    tier: 'Tier-1',
  },
  {
    id: 2,
    name: 'Clinique Jerrada (Akdital)',
    type: 'Private Clinic',
    specialty: 'Cardiology, Oncology, Maternity',
    coordinates: [-7.5898, 33.5731],
    city: 'Casablanca',
    transit: '10 min from Tramway L1',
    description: 'Akdital flagship clinic. Siemens MRI/CT technology. Concierge care with zero wait times.',
    tier: 'Tier-1',
  },
  {
    id: 3,
    name: 'Hopital Prive de Casablanca',
    type: 'Private Hospital',
    specialty: 'Surgery, Diagnostics, Pediatrics',
    coordinates: [-7.6189, 33.5950],
    city: 'Casablanca',
    transit: '5 min from Tramway L2',
    description: 'Full-service private hospital. GE diagnostic equipment. Mayo Clinic Care Network member.',
    tier: 'Tier-1',
  },
  {
    id: 4,
    name: 'Clinique Internationale de Marrakech',
    type: 'International Clinic',
    specialty: 'Multi-Specialty, Wellness',
    coordinates: [-8.0089, 31.6295],
    city: 'Marrakech',
    transit: '20 min from Marrakech Station',
    description: 'Caters to high-net-worth global residents. English/French bilingual. Private suites.',
    tier: 'Tier-1',
  },
  {
    id: 5,
    name: 'Clinique Internationale de Rabat',
    type: 'International Clinic',
    specialty: 'Surgery, Diagnostics, Cardiology',
    coordinates: [-6.8498, 34.0209],
    city: 'Rabat',
    transit: '8 min from Rabat-Agdal TGV',
    description: 'Diplomatic corridor facility. Serves embassy and government officials. European standards.',
    tier: 'Tier-1',
  },
  {
    id: 6,
    name: 'Clinique du Littoral (Akdital)',
    type: 'Private Clinic',
    specialty: 'Emergency, Orthopedics, Diagnostics',
    coordinates: [-5.8128, 35.7595],
    city: 'Tangier',
    transit: '10 min from Tangier-Ville TGV',
    description: 'Northern gateway medical hub. Latest imaging technology. 24/7 emergency services.',
    tier: 'Tier-1',
  },
  {
    id: 7,
    name: 'Polyclinique Atlas (Akdital)',
    type: 'Private Hospital',
    specialty: 'Multi-Specialty, Women\'s Health',
    coordinates: [-7.9811, 31.6340],
    city: 'Marrakech',
    transit: '15 min from Marrakech Station',
    description: 'Akdital network. Specialized maternity and pediatric wings. Private rooms standard.',
    tier: 'Tier-1',
  },
];

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
      center: [-7.5, 33.0], // Center on Morocco
      zoom: 5.5,
      attributionControl: false,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setMapLoaded(true);

      // Add markers for each facility
      healthcareFacilities.forEach((facility) => {
        // Create custom marker element
        const el = document.createElement('div');
        el.className = 'healthcare-marker';
        el.innerHTML = `
          <div class="w-6 h-6 bg-olive-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-olive-400 transition-colors">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
          </div>
        `;

        el.addEventListener('click', () => {
          setSelectedFacility(facility);
          map.current?.flyTo({
            center: facility.coordinates as [number, number],
            zoom: 12,
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
      zoom: 12,
      duration: 1500,
    });
  };

  const resetView = () => {
    setSelectedFacility(null);
    map.current?.flyTo({
      center: [-7.5, 33.0],
      zoom: 5.5,
      duration: 1500,
    });
  };

  return (
    <div className="bg-atlas-900 rounded-2xl overflow-hidden">
      <div className="grid lg:grid-cols-3">
        {/* Map */}
        <div className="lg:col-span-2 h-[400px] lg:h-[500px] relative">
          <div ref={mapContainer} className="w-full h-full" />
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-atlas-900">
              <div className="text-sand-300">Loading map...</div>
            </div>
          )}
          {selectedFacility && (
            <button
              onClick={resetView}
              className="absolute top-4 left-4 bg-white/90 text-atlas-900 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
            >
              &larr; View All
            </button>
          )}
        </div>

        {/* Sidebar */}
        <div className="p-6 lg:p-8 bg-atlas-800 max-h-[500px] overflow-y-auto">
          {selectedFacility ? (
            <div className="animate-fade-in">
              <span className="inline-block px-2 py-1 bg-olive-500 text-white text-xs font-medium rounded mb-3">
                {selectedFacility.tier}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{selectedFacility.name}</h3>
              <p className="text-terracotta-400 text-sm mb-4">{selectedFacility.city}</p>

              <div className="space-y-4 text-sand-300 text-sm">
                <div>
                  <span className="text-sand-500 block mb-1">Specialty</span>
                  {selectedFacility.specialty}
                </div>
                <div>
                  <span className="text-sand-500 block mb-1">Transit Access</span>
                  {selectedFacility.transit}
                </div>
                <div>
                  <span className="text-sand-500 block mb-1">Overview</span>
                  {selectedFacility.description}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-atlas-700">
                <p className="text-xs text-sand-500">
                  All listed facilities feature English-speaking staff and accept international insurance.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Healthcare Sovereignty</h3>
              <p className="text-sand-400 text-sm mb-4">
                Zero wait times. US/European accredited specialists. Private care as the standard.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-olive-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sand-300 text-sm">24/7 Emergency with English-speaking staff</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-olive-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sand-300 text-sm">Siemens/GE diagnostic technology</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-olive-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sand-300 text-sm">90% within 15 min of recommended residences</span>
                </div>
              </div>

              <p className="text-xs text-sand-500 mb-4">Click a facility on the map or below:</p>

              <div className="space-y-2">
                {healthcareFacilities.map((facility) => (
                  <button
                    key={facility.id}
                    onClick={() => handleFacilityClick(facility)}
                    className="w-full text-left p-3 bg-atlas-700/50 rounded-lg hover:bg-atlas-700 transition-colors"
                  >
                    <div className="text-white text-sm font-medium">{facility.name}</div>
                    <div className="text-sand-500 text-xs">{facility.city} &bull; {facility.type}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
