export interface BirthdaySlice {
  burmeseBirthyear: number;
  dayOfWeek: string;
  isLoading: boolean;
  error: Error | null;
}

export interface ZataSlice {
  name: string;
  specifications: string;
  isLoading: boolean;
  error: Error | null;
}

export interface ZataMappings {
  [key: string]: string[];
}

export interface Zata {
  name: string;
  specification: string;
}
