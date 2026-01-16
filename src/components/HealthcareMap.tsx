'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// All infrastructure markers
const infrastructureMarkers = [
  // HEALTHCARE - Emergency
  {
    id: 1,
    name: 'American Hospital of Casablanca',
    category: 'Healthcare',
    subcategory: 'Emergency',
    coordinates: [-7.6058, 33.5815],
    city: 'Casablanca',
    problemSolved: 'Fear of losing US-standard medical protocols or facing a language barrier during a crisis.',
    specs: {
      language: 'English / French',
      waitTime: 'Immediate / Emergency',
      payment: 'US International Insurance Accepted',
      standard: '2024/2025 Generation Imaging',
    },
    details: [
      'International standards with US-style healthcare management',
      'English-speaking staff trained in North American/European institutions',
      'Full-spectrum Level-1 emergency, advanced MRI/CT diagnostics',
    ],
  },
  {
    id: 2,
    name: 'Hôpital Privé de Casablanca (Akdital)',
    category: 'Healthcare',
    subcategory: 'Emergency',
    coordinates: [-7.6324, 33.5612],
    city: 'Casablanca',
    problemSolved: 'The anxiety of "Socialized Medicine" wait times and aging public infrastructure.',
    specs: {
      language: 'French / English',
      waitTime: 'Zero-Wait Emergency Intake',
      payment: 'Private Pay / International Insurance',
      standard: 'Siemens & GE Healthcare Technology',
    },
    details: [
      'Private, high-speed patient flow with zero-wait emergency intake',
      'State-of-the-art Siemens and GE diagnostic equipment',
      'Near Casa-Anfa Tramway and financial district for executive access',
    ],
  },
  // HEALTHCARE - Aesthetic
  {
    id: 3,
    name: 'Clinique Dentaire Tazi',
    category: 'Healthcare',
    subcategory: 'Aesthetic',
    coordinates: [-7.6190, 33.5910],
    city: 'Casablanca',
    problemSolved: 'Maintaining a "Hollywood Standard" of cosmetic dentistry without inflated US insurance friction.',
    specs: {
      language: 'English / French / Arabic',
      waitTime: 'By Appointment',
      payment: 'Private Pay (70% below US pricing)',
      standard: 'Digital Smile Design (DSD) / CAD-CAM',
    },
    details: [
      '3D intraoral scanning and CAD/CAM porcelain milling',
      'Lead practitioners with European dental faculty certifications',
      'Spa-like environment focused on biological integrity',
    ],
  },
  {
    id: 4,
    name: 'Guest Clinic Marrakech',
    category: 'Healthcare',
    subcategory: 'Aesthetic',
    coordinates: [-8.0152, 31.6285],
    city: 'Marrakech',
    problemSolved: 'The need for surgical excellence combined with total privacy from media exposure.',
    specs: {
      language: 'French / English',
      waitTime: 'VIP Scheduling',
      payment: 'Private Pay / Concierge Billing',
      standard: 'French Surgical Philosophy',
    },
    details: [
      'Boutique surgical facility with VIP recovery suites and private garden access',
      'Facial rejuvenation and body contouring with "Natural Look" French philosophy',
      'Full on-site anesthesiology and post-operative monitoring',
    ],
  },
  // HEALTHCARE - Specialist
  {
    id: 5,
    name: 'Clinique Internationale de Marrakech',
    category: 'Healthcare',
    subcategory: 'Specialist',
    coordinates: [-8.0120, 31.6340],
    city: 'Marrakech',
    problemSolved: 'Ensuring medical records and insurance (Aetna/Cigna) are accepted in a "Sanctuary" city.',
    specs: {
      language: 'English / French',
      waitTime: 'Same-Week Specialist',
      payment: 'Cigna / Aetna Direct Billing',
      standard: 'Multi-Specialty Hub',
    },
    details: [
      'Direct billing agreements with major US international health insurers',
      'Cardiology, Orthopedics, and Pediatrics for resident families',
      'Heart of Guéliz district, accessible from primary villa communities',
    ],
  },
  // EDUCATION
  {
    id: 6,
    name: 'American School of Tangier (AST)',
    category: 'Education',
    subcategory: 'PreK-12',
    coordinates: [-5.8230, 35.7720],
    city: 'Tangier',
    problemSolved: 'Academic continuity fears when relocating children mid-year or mid-career.',
    specs: {
      accreditation: 'NEASC / MSA Accredited',
      curriculum: 'US Diploma / AP Courses',
      track: 'Ivy League & Top-50 Admissions',
      standard: 'US State Department Support',
    },
    details: [
      'Founded 1950 - longest-running American school in Morocco',
      'Historical US-Morocco diplomatic bridge institution',
      'Small class sizes with personalized college counseling',
    ],
  },
  {
    id: 7,
    name: 'Casablanca American School (CAS)',
    category: 'Education',
    subcategory: 'PreK-12',
    coordinates: [-7.6750, 33.5650],
    city: 'Casablanca',
    problemSolved: 'Maintaining Ivy League trajectory while living abroad.',
    specs: {
      accreditation: 'IB World School / NEASC',
      curriculum: 'IB Diploma / US High School',
      track: 'Harvard, Stanford, MIT Track Record',
      standard: 'State-of-the-Art Campus',
    },
    details: [
      'Full IB Primary Years, Middle Years, and Diploma Programmes',
      'Proven track record: graduates at Ivy League and top global universities',
      'Modern laboratories, performing arts center, athletics facilities',
    ],
  },
  {
    id: 8,
    name: 'George Washington Academy (GWA)',
    category: 'Education',
    subcategory: 'PreK-12',
    coordinates: [-7.7300, 33.5350],
    city: 'Casablanca',
    problemSolved: 'Finding a comprehensive US-standard campus with space and character development.',
    specs: {
      accreditation: 'NEASC Accredited',
      curriculum: 'US Diploma / AP Courses',
      track: 'Character-Based Leadership',
      standard: 'Largest US Campus in Morocco',
    },
    details: [
      '12-acre campus with 21st-century STEM labs and maker spaces',
      'Character-based leadership curriculum integrated across grades',
      'Comprehensive athletics: soccer, basketball, swimming, tennis',
    ],
  },
  {
    id: 9,
    name: 'American School of Marrakesh (ASM)',
    category: 'Education',
    subcategory: 'PreK-12',
    coordinates: [-7.9500, 31.6750],
    city: 'Marrakech',
    problemSolved: 'Seamless academic transition for families choosing the sanctuary/villa districts.',
    specs: {
      accreditation: 'NEASC Candidate',
      curriculum: 'US Diploma / AP Preparatory',
      track: 'Small-School Excellence',
      standard: 'Villa District Access',
    },
    details: [
      'Intimate setting ideal for personalized attention',
      'Growing AP and college prep offerings',
      'Central to Palmeraie and Guéliz villa communities',
    ],
  },
  // MOBILITY
  {
    id: 10,
    name: 'Casa-Voyageurs TGV Station',
    category: 'Mobility',
    subcategory: 'High-Speed Rail',
    coordinates: [-7.5910, 33.5890],
    city: 'Casablanca',
    problemSolved: 'Fear of being isolated in a "developing country" without modern transit.',
    specs: {
      service: 'Al-Boraq TGV',
      speed: '320 km/h (200 MPH)',
      route: 'Tangier in 80 Minutes',
      standard: 'French TGV Technology',
    },
    details: [
      'Africa\'s only high-speed rail - faster than Amtrak Acela',
      'Direct connection to Tangier, Rabat, and Kenitra',
      'Adjacent to Casablanca financial district and hospital corridor',
    ],
  },
  {
    id: 11,
    name: 'Mohammed V International Airport (CMN)',
    category: 'Mobility',
    subcategory: 'International Gateway',
    coordinates: [-7.5900, 33.3675],
    city: 'Casablanca',
    problemSolved: 'Staying connected to US business and family obligations.',
    specs: {
      destination: 'NYC Direct: 7 Hours',
      europe: 'London/Paris: 2 Hours',
      carriers: 'Royal Air Maroc / Delta / United',
      standard: 'Hub of Africa',
    },
    details: [
      'Direct flights to JFK, IAD, MIA, ORD',
      '2-hour flights to all major European capitals',
      'GMT+1 timezone: perfect overlap with NYC business hours',
    ],
  },
  {
    id: 12,
    name: 'Tangier Ibn Battouta Airport (TNG)',
    category: 'Mobility',
    subcategory: 'International Gateway',
    coordinates: [-5.9168, 35.7268],
    city: 'Tangier',
    problemSolved: 'Northern Morocco connectivity to Europe.',
    specs: {
      destination: 'Madrid: 1 Hour',
      europe: 'Paris/London: 2.5 Hours',
      carriers: 'Ryanair / RAM / Vueling',
      standard: 'Gateway to Europe',
    },
    details: [
      'Budget carrier hub: Europe from $30 one-way',
      'Ferries to Spain in 35 minutes',
      'Connected to TGV network for southern Morocco',
    ],
  },
  // SANCTUARY - Residential Neighborhoods
  {
    id: 13,
    name: 'Anfa / California District',
    category: 'Sanctuary',
    subcategory: 'Legacy Enclave',
    coordinates: [-7.6650, 33.5720],
    city: 'Casablanca',
    problemSolved: 'Finding a neighborhood that mirrors Bel Air or Pacific Palisades—without the California tax burden.',
    specs: {
      toTGV: '12 min to Casa-Voyageurs',
      toSchool: '8 min to CAS / 15 min to GWA',
      connectivity: 'Fiber Optic (1 Gbps)',
      asset: 'Titre Foncier Available',
    },
    details: [
      'Art Deco villas from 1930s French Protectorate era',
      'Gated compounds with private gardens and pools',
      'Walking distance to Anfa Place Mall and corniche',
      'Legacy expatriate community with 70+ year history',
    ],
  },
  {
    id: 14,
    name: 'Hivernage District',
    category: 'Sanctuary',
    subcategory: 'Aesthetic Corridor',
    coordinates: [-8.0180, 31.6180],
    city: 'Marrakech',
    problemSolved: 'Accessing high-vibe urban living with walkable luxury and immediate clinic proximity.',
    specs: {
      toTGV: '35 min to Marrakech Station',
      toSchool: '20 min to ASM',
      connectivity: 'Fiber Optic (500 Mbps)',
      asset: 'Titre Foncier Available',
    },
    details: [
      'Five-star hotel corridor: Royal Mansour, Mamounia adjacent',
      'Pedestrian-friendly boulevards with mature jacaranda trees',
      'Immediate access to Guest Clinic and CIM',
      'Contemporary apartments and renovated riads',
    ],
  },
  {
    id: 15,
    name: 'California District',
    category: 'Sanctuary',
    subcategory: 'Gateway Enclave',
    coordinates: [-5.8050, 35.7850],
    city: 'Tangier',
    problemSolved: 'Securing Atlantic/Mediterranean views with European proximity and clean air corridors.',
    specs: {
      toTGV: '15 min to Tangier-Ville TGV',
      toSchool: '10 min to AST',
      connectivity: 'Fiber Optic (1 Gbps)',
      asset: 'Titre Foncier Available',
    },
    details: [
      'Panoramic views of Strait of Gibraltar and Spanish coast',
      'Mediterranean microclimate: 300+ days of sunshine',
      'Modern villas built 2015-2024 with smart home integration',
      'Spain visible on clear days—35 min ferry to Tarifa',
    ],
  },
];

const categoryConfig: Record<string, { color: string; label: string; icon: string }> = {
  Healthcare: { color: 'bg-terracotta-500', label: 'Healthcare', icon: 'H' },
  Education: { color: 'bg-olive-500', label: 'Education', icon: 'E' },
  Mobility: { color: 'bg-atlas-600', label: 'Mobility', icon: 'M' },
  Sanctuary: { color: 'bg-amber-500', label: 'Sanctuary', icon: 'S' },
};

const markerColors: Record<string, string> = {
  Healthcare: 'rgb(198, 93, 71)',
  Education: 'rgb(138, 154, 91)',
  Mobility: 'rgb(51, 65, 85)',
  Sanctuary: 'rgb(217, 158, 58)',
};

export default function HealthcareMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<typeof infrastructureMarkers[0] | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set(['Healthcare', 'Education', 'Mobility', 'Sanctuary']));
  const [showAdvisory, setShowAdvisory] = useState(false);

  const toggleCategory = (category: string) => {
    setActiveCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-7.0, 33.0],
      zoom: 5.8,
      attributionControl: false,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setMapLoaded(true);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Update markers when categories change or map loads
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add markers for active categories
    infrastructureMarkers
      .filter(facility => activeCategories.has(facility.category))
      .forEach((facility) => {
        const el = document.createElement('div');
        el.className = 'infrastructure-marker';
        const bgColor = markerColors[facility.category];

        el.innerHTML = `
          <div style="width: 28px; height: 28px; background-color: ${bgColor}; border-radius: 50%; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <span style="color: white; font-size: 12px; font-weight: bold;">${categoryConfig[facility.category].icon}</span>
          </div>
        `;

        el.addEventListener('click', () => {
          setSelectedFacility(facility);
          setShowAdvisory(false);
          map.current?.flyTo({
            center: facility.coordinates as [number, number],
            zoom: 12,
            duration: 1500,
          });
        });

        const marker = new mapboxgl.Marker(el)
          .setLngLat(facility.coordinates as [number, number])
          .addTo(map.current!);

        markersRef.current.push(marker);
      });
  }, [activeCategories, mapLoaded]);

  const handleFacilityClick = (facility: typeof infrastructureMarkers[0]) => {
    setSelectedFacility(facility);
    setShowAdvisory(false);
    map.current?.flyTo({
      center: facility.coordinates as [number, number],
      zoom: 12,
      duration: 1500,
    });
  };

  const resetView = () => {
    setSelectedFacility(null);
    setShowAdvisory(false);
    map.current?.flyTo({
      center: [-7.0, 33.0],
      zoom: 5.8,
      duration: 1500,
    });
  };

  const filteredMarkers = infrastructureMarkers.filter(m => activeCategories.has(m.category));

  return (
    <div className="bg-atlas-900 rounded-2xl overflow-hidden">
      {/* Category Toggles */}
      <div className="p-4 bg-atlas-950 border-b border-atlas-700">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sand-400 text-sm font-medium">Filter:</span>
          {Object.entries(categoryConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => toggleCategory(key)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategories.has(key)
                  ? `${config.color} text-white`
                  : 'bg-atlas-700 text-sand-400 hover:bg-atlas-600'
              }`}
            >
              <span className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center text-xs">
                {activeCategories.has(key) && '✓'}
              </span>
              {config.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3">
        {/* Map */}
        <div className="lg:col-span-2 h-[500px] lg:h-[600px] relative">
          <div ref={mapContainer} className="w-full h-full" />
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-atlas-900">
              <div className="text-sand-300">Loading infrastructure map...</div>
            </div>
          )}
          {(selectedFacility || showAdvisory) && (
            <button
              onClick={resetView}
              className="absolute top-4 left-4 bg-white/90 text-atlas-900 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
            >
              &larr; View All
            </button>
          )}
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-atlas-800/90 backdrop-blur-sm rounded-lg p-3">
            <div className="flex flex-col gap-2 text-xs">
              {Object.entries(categoryConfig).map(([key, config]) => (
                <div key={key} className={`flex items-center gap-2 ${!activeCategories.has(key) ? 'opacity-40' : ''}`}>
                  <div className={`w-3 h-3 rounded-full ${config.color}`}></div>
                  <span className="text-sand-300">{config.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="p-6 lg:p-8 bg-atlas-800 max-h-[600px] overflow-y-auto">
          {showAdvisory ? (
            // Legal Architecture Advisory
            <div className="animate-fade-in">
              <span className="inline-block px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded mb-3">
                Asset Security Advisory
              </span>
              <h3 className="text-xl font-bold text-white mb-4">The Legal Architecture of Asset Security</h3>

              <div className="space-y-5">
                <div>
                  <h4 className="text-terracotta-400 font-semibold text-sm mb-2">Title Deeds (Titres Fonciers)</h4>
                  <p className="text-sand-300 text-sm">
                    Morocco operates a dual property system. <strong className="text-white">Titre Foncier</strong> provides
                    French-style registered ownership with full legal protection. <strong className="text-amber-400">Melkia</strong>
                    (traditional title) carries significant risk—disputed boundaries, inheritance claims, and no centralized registry.
                  </p>
                </div>

                <div>
                  <h4 className="text-terracotta-400 font-semibold text-sm mb-2">Convertible Dirham Accounts</h4>
                  <p className="text-sand-300 text-sm">
                    Foreign residents can open <strong className="text-white">Comptes en Dirhams Convertibles</strong>—allowing
                    repatriation of funds, rental income, and sale proceeds back to USD/EUR. Without this structure, your
                    capital is effectively trapped in local currency.
                  </p>
                </div>

                <div>
                  <h4 className="text-terracotta-400 font-semibold text-sm mb-2">The Melkia Risk</h4>
                  <p className="text-sand-300 text-sm">
                    Approximately 30% of Moroccan properties remain under Melkia. Buyers who skip due diligence
                    discover—too late—that multiple family members claim ownership, or that the property sits on
                    disputed agricultural land. <strong className="text-amber-400">This is the single largest source of
                    expatriate real estate disputes.</strong>
                  </p>
                </div>

                <div className="bg-atlas-700/50 rounded-lg p-4 border border-amber-500/30">
                  <h4 className="text-white font-semibold text-sm mb-2">The Bottleneck</h4>
                  <p className="text-sand-300 text-sm">
                    The neighborhoods on this map represent the life you want. But without Human Advocacy—a partner
                    who navigates notaires, the Conservation Foncière, and bank compliance—you are one signature
                    away from a legal quagmire. The door is locked without a partner.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-atlas-700">
                <p className="text-xs text-sand-500">
                  We do not sell real estate. We provide the advocacy infrastructure to ensure your acquisition is bulletproof.
                </p>
              </div>
            </div>
          ) : selectedFacility ? (
            <div className="animate-fade-in">
              {/* Category Badge */}
              <span className={`inline-block px-2 py-1 ${categoryConfig[selectedFacility.category].color} text-white text-xs font-medium rounded mb-3`}>
                {selectedFacility.category} · {selectedFacility.subcategory}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{selectedFacility.name}</h3>
              <p className="text-terracotta-400 text-sm mb-4">{selectedFacility.city}</p>

              {/* Problem Solved */}
              <div className="mb-5">
                <span className="text-xs text-sand-500 uppercase tracking-wide font-medium">Problem Solved</span>
                <p className="text-sand-200 text-sm mt-1">{selectedFacility.problemSolved}</p>
              </div>

              {/* Technical Specs */}
              <div className="bg-atlas-700/50 rounded-lg p-4 mb-5">
                <span className="text-xs text-sand-500 uppercase tracking-wide font-medium block mb-3">Technical Specs</span>
                <div className="space-y-2">
                  {Object.entries(selectedFacility.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-sand-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-white font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="mb-5">
                <span className="text-xs text-sand-500 uppercase tracking-wide font-medium block mb-2">
                  {selectedFacility.category === 'Sanctuary' ? 'Neighborhood Profile' : 'Institutional Access'}
                </span>
                <ul className="space-y-2">
                  {selectedFacility.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-olive-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sand-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sanctuary-specific advisory link */}
              {selectedFacility.category === 'Sanctuary' && (
                <button
                  onClick={() => setShowAdvisory(true)}
                  className="w-full text-left p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition-colors mb-4"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-amber-400 text-sm font-medium">View Asset Security Advisory</span>
                  </div>
                  <p className="text-sand-400 text-xs mt-1">Title deeds, currency, and Melkia risks</p>
                </button>
              )}

              <div className="pt-4 border-t border-atlas-700">
                <p className="text-xs text-sand-500">
                  Human Advocacy: We coordinate directly with administration.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Sovereign Infrastructure Corridor</h3>
              <p className="text-sand-400 text-sm mb-4">
                Tangier to Marrakech: The complete ecosystem for Americans. Healthcare, education, mobility,
                and sanctuary neighborhoods—all mapped.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">H</span>
                  </div>
                  <span className="text-sand-300 text-sm">Healthcare: Emergency, aesthetic, specialist</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-olive-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">E</span>
                  </div>
                  <span className="text-sand-300 text-sm">Education: NEASC/IB American schools</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-atlas-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <span className="text-sand-300 text-sm">Mobility: TGV rail + direct NYC flights</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <span className="text-sand-300 text-sm">Sanctuary: Prime residential enclaves</span>
                </div>
              </div>

              {/* Advisory Quick Link */}
              <button
                onClick={() => setShowAdvisory(true)}
                className="w-full text-left p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition-colors mb-4"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-amber-400 text-sm font-medium">Asset Security Advisory</span>
                </div>
                <p className="text-sand-400 text-xs mt-1">Title deeds, currency, and Melkia risks</p>
              </button>

              <p className="text-xs text-sand-500 mb-4">Select a marker or click below:</p>

              <div className="space-y-2 max-h-[200px] overflow-y-auto">
                {filteredMarkers.map((facility) => (
                  <button
                    key={facility.id}
                    onClick={() => handleFacilityClick(facility)}
                    className="w-full text-left p-3 bg-atlas-700/50 rounded-lg hover:bg-atlas-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${categoryConfig[facility.category].color}`}></div>
                      <span className="text-white text-sm font-medium">{facility.name}</span>
                    </div>
                    <div className="text-sand-500 text-xs mt-1 ml-4">{facility.city} · {facility.subcategory}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Global Reach Table */}
      <div className="p-6 bg-atlas-850 border-t border-atlas-700">
        <h4 className="text-sm font-semibold text-white mb-3">Global Reach from Casablanca</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-atlas-700/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-terracotta-400">7h</div>
            <div className="text-sand-400 text-xs">New York JFK</div>
          </div>
          <div className="bg-atlas-700/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-olive-400">2h</div>
            <div className="text-sand-400 text-xs">London / Paris</div>
          </div>
          <div className="bg-atlas-700/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-atlas-400">80m</div>
            <div className="text-sand-400 text-xs">Tangier (TGV)</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 bg-atlas-950 border-t border-atlas-700">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sand-300 text-sm">
              The neighborhoods are mapped. The infrastructure is proven. The legal architecture requires a partner.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors whitespace-nowrap"
          >
            Request Your Asset Strategy Session
          </Link>
        </div>
      </div>
    </div>
  );
}
