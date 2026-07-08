import softGaskets from '../assets/soft_gaskets.png';
import mlsGaskets from '../assets/mls_gaskets.png';
import foamGasket from '../assets/foam_gasket.png';
import copperGaskets from '../assets/copper_seals.png';
import singleLayer from '../assets/single_layer_gasket.png';
import asbestos from '../assets/asbestos_gasket.png';

export const productsData = [
  {
    id: 1,
    image: softGaskets,
    name: 'Soft Gaskets',
    series: 'NON-ASBESTOS',
    tag: 'NON-ASBESTOS',
    desc: 'Highly compressible sealing solutions designed for low-pressure applications requiring superior adaptability to surface irregularities.',
    specs: [
      { label: 'Material', value: 'Compressed Fiber / NBR' },
      { label: 'Temp Max', value: '+250°C' },
      { label: 'Pressure', value: '40 Bar' }
    ]
  },
  {
    id: 2,
    image: mlsGaskets,
    name: 'MLS Gaskets',
    series: 'STAINLESS STEEL',
    tag: 'STAINLESS STEEL',
    desc: 'Multi-Layer Steel gaskets for high-performance combustion engines. Engineered for superior thermal conductivity and cylinder head sealing.',
    specs: [
      { label: 'Material', value: '301 Full Hard Stainless' },
      { label: 'Coating', value: 'FKM / Viton®' },
      { label: 'Layers', value: '3 - 5 Layers' }
    ]
  },
  {
    id: 3,
    image: foamGasket,
    name: 'Foam Coated',
    series: 'ELASTOMER',
    tag: 'ELASTOMER',
    desc: 'Precision elastomer-coated metal gaskets designed for NVH (Noise, Vibration, Harshness) reduction and fluid sealing in light-duty modules.',
    specs: [
      { label: 'Core', value: 'Aluminum / Steel' },
      { label: 'Elastomer', value: 'Nitrile / Silicone' },
      { label: 'Damping', value: 'High NVH Profile' }
    ]
  },
  {
    id: 4,
    image: copperGaskets,
    name: 'Copper Gaskets',
    series: 'PREMIUM',
    tag: 'PREMIUM',
    desc: 'Solid copper gaskets for extreme heat dissipation and reusable sealing. Ideal for high-boost turbo and performance racing applications.',
    specs: [
      { label: 'Purity', value: '99.9% Pure Copper' },
      { label: 'Conductivity', value: '401 W/m-K' },
      { label: 'Hardness', value: 'Dead Soft Annealed' }
    ]
  },
  {
    id: 5,
    image: singleLayer,
    name: 'Single Layer',
    series: 'SLS',
    tag: 'SLS',
    desc: 'Precision Single Layer Steel (SLS) gaskets featuring active bead technology for optimized sealing pressure distribution.',
    specs: [
      { label: 'Thickness', value: '0.2mm - 1.0mm' },
      { label: 'Finish', value: 'Z-Coating' },
      { label: 'Compliance', value: 'RoHS Certified' }
    ]
  },
  {
    id: 6,
    image: asbestos,
    name: 'Asbestos Gaskets',
    series: 'SPECIAL ORDER',
    tag: 'SPECIAL ORDER',
    desc: 'Traditional asbestos gaskets for certified historical restoration or specific industrial exceptions. Strictly managed and regulated.',
    specs: [
      { label: 'Temp Max', value: '+500°C' },
      { label: 'Medium', value: 'Steam / Acids' },
      { label: 'Safety', value: 'MSDS Required' }
    ]
  }
];
