import create from 'zustand';

interface AnchorState {
  selectedAnchorId: string;
  setSelectedAnchorId: (id: string) => void;
}

export const useAnchorStore = create<AnchorState>((set) => ({
  selectedAnchorId: '', 
  setSelectedAnchorId: (id: string) => set({ selectedAnchorId: id }),
}));
