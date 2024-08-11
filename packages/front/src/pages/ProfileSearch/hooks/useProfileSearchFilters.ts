import { Dispatch, SetStateAction, useState } from 'react';
import StudyLevel from 'src/models/StudyLevel/StudyLevel';
import StudySectorInitialism from 'src/models/StudySector/StudySectorInitialism';

export interface ProfileSearchFilters {
  searchText: string;
  studyLevels: StudyLevel[];
  studySpecialties: StudySectorInitialism[];
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
