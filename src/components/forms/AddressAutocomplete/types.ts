export type LocationItem = {
  _id: string;
  name?: string | null;
  suburb: string;
  city: string;
  postal_code: string;
  province: string;
  country?: string | null;
  latitude?: string | null;
  longitude?: string | null;
};

export type AddressAutocompleteProps = {
  /** RHF field prefix, e.g. "address" or "billingAddress" */
  namePrefix?: string;

  /** If true, validates required fields. If false, everything optional. */
  required?: boolean;

  /** Optional heading label (e.g. "Address") */
  title?: string;
};
