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
