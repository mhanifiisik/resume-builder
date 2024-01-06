import { StoreSlice } from "../store"

export type SummarySlice = {
  summary: string
}

export const createSummarySlice: StoreSlice<SummarySlice> = (set) => ({
  summary: "",
})
