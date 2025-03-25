import React, { useState } from 'react';

const PhysicsCheatsheet = () => {
  const [activeSection, setActiveSection] = useState('mechanics');
  const [expandedFormulas, setExpandedFormulas] = useState({});

  const toggleFormula = (id) => {
    setExpandedFormulas(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sections = {
    mechanics: {
      title: 'Mécanique',
      icon: '↗️',
      color: 'bg-blue-100',
      subsections: [
        {
          title: 'Lois de Newton',
          formulas: [
            { id: 'newton1', formula: 'Première loi: Un corps persévère dans son état de repos ou de mouvement rectiligne uniforme si aucune force n\'agit sur lui' },
            { id: 'newton2', formula: 'F = ma', description: 'Deuxième loi: Force = masse × accélération' },
            { id: 'newton3', formula: 'F₁₂ = -F₂₁', description: 'Troisième loi: Action et réaction sont égales et opposées' }
          ]
        },
        {
          title: 'Cinématique',
          formulas: [
            { id: 'vel', formula: 'v = Δx/Δt', description: 'Vitesse moyenne' },
            { id: 'acc', formula: 'a = Δv/Δt', description: 'Accélération' },
            { id: 'eqmvt1', formula: 'x = x₀ + v₀t + ½at²', description: 'Équation du mouvement (position)' },
            { id: 'eqmvt2', formula: 'v = v₀ + at', description: 'Équation du mouvement (vitesse)' }
          ]
        },
        {
          title: 'Énergie',
          formulas: [
            { id: 'ekin', formula: 'E_c = ½mv²', description: 'Énergie cinétique' },
            { id: 'epot', formula: 'E_p = mgh', description: 'Énergie potentielle de pesanteur' },
            { id: 'econs', formula: 'E_c + E_p = constante', description: 'Conservation de l\'énergie mécanique' }
          ]
        },
        {
          title: 'Travail et Puissance',
          formulas: [
            { id: 'work', formula: 'W = F·d·cosθ', description: 'Travail d\'une force (joules)' },
            { id: 'power', formula: 'P = W/t = F·v', description: 'Puissance (watts)' }
          ]
        }
      ]
    },
    thermo: {
      title: 'Thermodynamique',
      icon: '🔥',
      color: 'bg-red-100',
      subsections: [
        {
          title: 'Principes',
          formulas: [
            { id: 'thermo1', formula: 'ΔU = Q + W', description: '1er principe: conservation de l\'énergie' },
            { id: 'thermo2', formula: 'ΔS > 0', description: '2ème principe: l\'entropie d\'un système isolé ne peut qu\'augmenter' }
          ]
        },
        {
          title: 'Lois des gaz',
          formulas: [
            { id: 'idealgas', formula: 'PV = nRT', description: 'Loi des gaz parfaits' },
            { id: 'isothermal', formula: 'PV = constante', description: 'Transformation isotherme' },
            { id: 'adiabatic', formula: 'PV^γ = constante', description: 'Transformation adiabatique (γ = Cp/Cv)' }
          ]
        }
      ]
    },
    em: {
      title: 'Électromagnétisme',
      icon: '⚡',
      color: 'bg-yellow-100',
      subsections: [
        {
          title: 'Électrostatique',
          formulas: [
            { id: 'coulomb', formula: 'F = k(q₁q₂)/r²', description: 'Loi de Coulomb' },
            { id: 'efield', formula: 'E = F/q', description: 'Champ électrique' }
          ]
        },
        {
          title: 'Circuits électriques',
          formulas: [
            { id: 'ohm', formula: 'U = RI', description: 'Loi d\'Ohm' },
            { id: 'elecpower', formula: 'P = UI = RI²', description: 'Puissance électrique' },
            { id: 'kirchhoff1', formula: 'Σ tensions = 0', description: 'Loi des mailles' },
            { id: 'kirchhoff2', formula: 'Σ courants entrants = Σ courants sortants', description: 'Loi des nœuds' }
          ]
        },
        {
          title: 'Magnétisme',
          formulas: [
            { id: 'lorentz', formula: 'F = qv×B', description: 'Force de Lorentz' },
            { id: 'magforce', formula: 'F = IL×B', description: 'Force magnétique sur un conducteur' }
          ]
        }
      ]
    },
    optics: {
      title: 'Optique',
      icon: '👁️',
      color: 'bg-purple-100',
      subsections: [
        {
          title: 'Optique géométrique',
          formulas: [
            { id: 'snell', formula: 'n₁sinθ₁ = n₂sinθ₂', description: 'Loi de Snell-Descartes' },
            { id: 'lens', formula: '1/p + 1/p\' = 1/f', description: 'Formule de conjugaison des lentilles' },
            { id: 'magnif', formula: 'γ = p\'/p', description: 'Grandissement' }
          ]
        },
        {
          title: 'Optique ondulatoire',
          formulas: [
            { id: 'diffract', formula: 'θ ≈ λ/a', description: 'Diffraction' },
            { id: 'interf', formula: 'δ = d₂ - d₁', description: 'Interférences (différence de marche)' }
          ]
        }
      ]
    },
    modern: {
      title: 'Physique Moderne',
      icon: '🔬',
      color: 'bg-green-100',
      subsections: [
        {
          title: 'Relativité',
          formulas: [
            { id: 'timerelat', formula: 't = t₀/√(1-v²/c²)', description: 'Dilatation du temps' },
            { id: 'emc2', formula: 'E = mc²', description: 'Équivalence masse-énergie' }
          ]
        },
        {
          title: 'Physique quantique',
          formulas: [
            { id: 'schrodinger', formula: 'iħ(∂Ψ/∂t) = -(ħ²/2m)(∂²Ψ/∂x²) + V(x)Ψ', description: 'Équation de Schrödinger' },
            { id: 'debroglie', formula: 'λ = h/p', description: 'Relation de de Broglie' },
            { id: 'uncertainty', formula: 'ΔxΔp ≥ ħ/2', description: 'Principe d\'incertitude d\'Heisenberg' }
          ]
        }
      ]
    },
    constants: {
      title: 'Constantes',
      icon: '📊',
      color: 'bg-gray-100',
      subsections: [
        {
          title: 'Constantes fondamentales',
          formulas: [
            { id: 'gravity', formula: 'G ≈ 6.67 × 10⁻¹¹ N·m²/kg²', description: 'Constante gravitationnelle' },
            { id: 'echarge', formula: 'e ≈ 1.60 × 10⁻¹⁹ C', description: 'Charge élémentaire' },
            { id: 'planck', formula: 'h ≈ 6.63 × 10⁻³⁴ J·s', description: 'Constante de Planck' },
            { id: 'boltzmann', formula: 'kB ≈ 1.38 × 10⁻²³ J/K', description: 'Constante de Boltzmann' },
            { id: 'avogadro', formula: 'NA ≈ 6.02 × 10²³ mol⁻¹', description: 'Nombre d\'Avogadro' },
            { id: 'lightspeed', formula: 'c ≈ 3.00 × 10⁸ m/s', description: 'Vitesse de la lumière' }
          ]
        }
      ]
    },
    units: {
      title: 'Unités SI',
      icon: '📏',
      color: 'bg-pink-100',
      subsections: [
        {
          title: 'Unités de base',
          formulas: [
            { id: 'length', formula: 'mètre (m)', description: 'Longueur' },
            { id: 'mass', formula: 'kilogramme (kg)', description: 'Masse' },
            { id: 'time', formula: 'seconde (s)', description: 'Temps' },
            { id: 'current', formula: 'ampère (A)', description: 'Courant électrique' },
            { id: 'temp', formula: 'kelvin (K)', description: 'Température' },
            { id: 'substance', formula: 'mole (mol)', description: 'Quantité de matière' }
          ]
        },
        {
          title: 'Unités dérivées',
          formulas: [
            { id: 'force', formula: 'newton (N) = kg·m/s²', description: 'Force' },
            { id: 'energy', formula: 'joule (J) = N·m = kg·m²/s²', description: 'Énergie' },
            { id: 'power', formula: 'watt (W) = J/s', description: 'Puissance' },
            { id: 'voltage', formula: 'volt (V) = W/A', description: 'Tension électrique' },
            { id: 'resistance', formula: 'ohm (Ω) = V/A', description: 'Résistance' },
            { id: 'pressure', formula: 'pascal (Pa) = N/m²', description: 'Pression' }
          ]
        }
      ]
    }
  };

  const renderFormula = (formula) => {
    return (
      <div 
        key={formula.id}
        className="p-2 border-l-4 border-blue-500 mb-2 bg-white hover:bg-blue-50 transition-colors cursor-pointer"
        onClick={() => toggleFormula(formula.id)}
      >
        <div className="font-bold">{formula.formula}</div>
        {expandedFormulas[formula.id] && formula.description && (
          <div className="text-gray-600 mt-1">{formula.description}</div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow font-sans">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Fiche de Culture Générale en Physique</h1>
      
      <div className="flex flex-wrap mb-4 gap-2 justify-center">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-full font-medium flex items-center ${
              activeSection === key 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveSection(key)}
          >
            <span className="mr-1">{section.icon}</span> {section.title}
          </button>
        ))}
      </div>

      <div className={`p-4 rounded-lg ${sections[activeSection].color}`}>
        <h2 className="text-2xl font-bold mb-4">{sections[activeSection].title}</h2>
        
        {sections[activeSection].subsections.map((subsection, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-3 border-b pb-2">{subsection.title}</h3>
            <div className="space-y-1">
              {subsection.formulas.map(renderFormula)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-600">
        Cliquez sur une formule pour voir sa description. Utilisez les boutons ci-dessus pour naviguer entre les sections.
      </div>
    </div>
  );
};

export default PhysicsCheatsheet;