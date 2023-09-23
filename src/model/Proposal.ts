import { create } from "zustand";

export type ProposalState = {
  partName: string;
  setPartName: (partName: string) => void;
  provenanceUrl: string;
  setprovenanceUrl: (provenanceUrl: string) => void;
  wordsFromArtist: string;
  setWordsFromArtist: (wordsFromArtist: string) => void;
  partBitmap: ImageBitmap | null;
  setPartBitmap: (partBitmap: ImageBitmap | null) => void;
};

export const useProposalState = create<ProposalState>()((set) => {
  return {
    partName: "",
    setPartName: (partName) => set({ partName }),
    provenanceUrl: "",
    setprovenanceUrl: (provenanceUrl) => set({ provenanceUrl }),
    wordsFromArtist: "",
    setWordsFromArtist: (wordsFromArtist) => set({ wordsFromArtist }),
    partBitmap: null,
    setPartBitmap: (partBitmap) => {
      set({ partBitmap });
    },
  };
});
