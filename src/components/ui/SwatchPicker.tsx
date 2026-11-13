import React, { useState } from 'react';
import { Check } from 'lucide-react';

export interface SwatchOption {
  id: string;
  name: string;
  type: 'wood' | 'fabric';
  colorHex: string;
  texturePattern?: string;
  description: string;
}

export const woodSwatches: SwatchOption[] = [
  {
    id: 'nagpur-teak',
    name: 'Seasoned CP Teak',
    type: 'wood',
    colorHex: '#9E6E41',
    description: 'Golden honey tones with dense, moisture-repellent grain'
  },
  {
    id: 'dark-walnut',
    name: 'Dark Walnut Polish',
    type: 'wood',
    colorHex: '#49362B',
    description: 'Deep espresso depth with subtle chocolate undertones'
  },
  {
    id: 'indian-sheesham',
    name: 'Rosewood / Sheesham',
    type: 'wood',
    colorHex: '#6E3A20',
    description: 'Dramatic contrasting ribbon grain with rich warm hues'
  },
  {
    id: 'smoked-ash',
    name: 'Smoked Ashwood',
    type: 'wood',
    colorHex: '#3D3935',
    description: 'Modern architectural matte charcoal with visible porous texture'
  }
];

export const fabricSwatches: SwatchOption[] = [
  {
    id: 'emerald-suede',
    name: 'Italian Emerald Suede',
    type: 'fabric',
    colorHex: '#1E4338',
    description: 'Ultra-plush stain-resistant Italian luxury suede'
  },
  {
    id: 'champagne-boucle',
    name: 'Champagne Bouclé',
    type: 'fabric',
    colorHex: '#EAE1D2',
    description: 'Tactile looped yarn with warm textural softness'
  },
  {
    id: 'slate-chenille',
    name: 'Slate Grey Chenille',
    type: 'fabric',
    colorHex: '#52555A',
    description: 'Heavyweight woven upholstery with gentle sheen'
  },
  {
    id: 'amber-velvet',
    name: 'Amber Ochre Velvet',
    type: 'fabric',
    colorHex: '#B27636',
    description: '50,000+ Martindale rub-count royal velvet'
  }
];

interface SwatchPickerProps {
  selectedWood: string;
  onSelectWood: (wood: string) => void;
  selectedFabric?: string;
  onSelectFabric?: (fabric: string) => void;
  showDetails?: boolean;
}

export const SwatchPicker: React.FC<SwatchPickerProps> = ({
  selectedWood,
  onSelectWood,
  selectedFabric,
  onSelectFabric,
  showDetails = true,
}) => {
  return (
    <div className="space-y-6">
      {/* Wood Finishes */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#252523]">
            Solid Hardwood Finish:
          </label>
          <span className="text-xs font-medium text-[#A8875B]">{selectedWood}</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {woodSwatches.map((wood) => {
            const isSelected = selectedWood === wood.name;
            return (
              <button
                key={wood.id}
                type="button"
                onClick={() => onSelectWood(wood.name)}
                className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-[#A8875B] bg-[#F8F5EF] ring-2 ring-[#A8875B]/20 shadow-sm'
                    : 'border-[#D8CBB9]/60 hover:border-[#A8875B]/50 bg-white'
                }`}
              >
                <span
                  className="w-7 h-7 rounded-lg shrink-0 border border-black/10 shadow-inner flex items-center justify-center"
                  style={{ backgroundColor: wood.colorHex }}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-white drop-shadow" />}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#252523] truncate">{wood.name}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fabric Swatches */}
      {onSelectFabric && selectedFabric && (
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#252523]">
              Bespoke Fabric / Upholstery:
            </label>
            <span className="text-xs font-medium text-[#A8875B]">{selectedFabric}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {fabricSwatches.map((fabric) => {
              const isSelected = selectedFabric === fabric.name;
              return (
                <button
                  key={fabric.id}
                  type="button"
                  onClick={() => onSelectFabric(fabric.name)}
                  className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all duration-200 ${
                    isSelected
                      ? 'border-[#A8875B] bg-[#F8F5EF] ring-2 ring-[#A8875B]/20 shadow-sm'
                      : 'border-[#D8CBB9]/60 hover:border-[#A8875B]/50 bg-white'
                  }`}
                >
                  <span
                    className="w-7 h-7 rounded-lg shrink-0 border border-black/10 shadow-inner flex items-center justify-center"
                    style={{ backgroundColor: fabric.colorHex }}
                  >
                    {isSelected && (
                      <Check className={`w-3.5 h-3.5 drop-shadow ${fabric.colorHex === '#EAE1D2' ? 'text-[#252523]' : 'text-white'}`} />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#252523] truncate">{fabric.name}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

