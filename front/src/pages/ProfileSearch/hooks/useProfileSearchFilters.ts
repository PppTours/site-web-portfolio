import { Dispatch, SetStateAction, useState } from 'react';
import StudyLevel from 'src/models/StudyLevel/StudyLevel';
import StudySpecialty from 'src/models/StudySpecialty/StudySpecialty';

export interface ProfileSearchFilters {
  searchText: string;
  studyLevels: StudyLevel[];
  studySpecialties: StudySpecialty[];
}

interface FiltersReturn {
  filters: ProfileSearchFilters;
  setFilters: Dispatch<SetStateAction<ProfileSearchFilters>>;
}

function useProfileSearchFilters(): FiltersReturn {
  const [filters, setFilters] = useState<ProfileSearchFilters>({
    searchText: '',
    studyLevels: [],
    studySpecialties: []
  });

  return { filters, setFilters };
}

export default useProfileSearchFilters;
