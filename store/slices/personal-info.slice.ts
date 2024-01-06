import { StoreSlice } from "../store"

export type PersonalInfoSlice = {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  city: string
  country: string
}

export const createPersonalInfoSlice: StoreSlice<PersonalInfoSlice> = (
  set
) => ({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  city: "",
  country: "",
})
