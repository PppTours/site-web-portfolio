import { Dispatch, SetStateAction, useState } from 'react';
import StudyLevel from 'src/models/StudyLevel/StudyLevel';
import StudySectorInitialism from 'src/models/StudySector/StudySectorInitialism';

export interface StudentCatalogFilters {
  searchText: string;
  studyLevels: StudyLevel[];
  studySectorInitialisms: StudySectorInitialism[];
}

interface FiltersReturn {
  filters: StudentCatalogFilters;
  setFilters: Dispatch<SetStateAction<StudentCatalogFilters>>;
}

function useStudentCatalogFilters(): FiltersReturn {
  const [filters, setFilters] = useState<StudentCatalogFilters>({
    searchText: '',
    studyLevels: [],
    studySectorInitialisms: []
  });

  return { filters, setFilters };
}

export default useStudentCatalogFilters;
