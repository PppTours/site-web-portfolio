import { useCallback, useEffect, useState } from 'react';
import { StudentDTO } from 'src/dtos/Student/StudentDTO';
import { StudentCatalogFilters } from 'src/pages/ProfileSearch/hooks/useStudentCatalogFilters';
import { studentService } from 'src/services/StudentService';

interface StudentsReturn {
  students: StudentDTO[];
  areStudentsLoading: boolean;
  filterStudents: (filters: StudentCatalogFilters) => void;
}

function useStudents(filters?: StudentCatalogFilters): StudentsReturn {
  const [students, setFilteredStudents] = useState<StudentDTO[]>([]);
  const [areStudentsLoading, setAreStudentsLoading] = useState<boolean>(false);
  const [areStudentsLoaded, setAreStudentsLoaded] = useState<boolean>(false);

  const filterStudents = useCallback(async (filters: StudentCatalogFilters) => {
    setAreStudentsLoading(true);
    const allStudents = (await studentService.getAll()).students;
    const filteredStudents = allStudents.filter(
      (student) =>
        checkSearchText(student, filters) &&
        checkStudyLevel(student, filters) &&
        checkStudySector(student, filters)
    );
    setTimeout(() => setAreStudentsLoading(false), 500);

    setFilteredStudents(filteredStudents);
  }, []);

  function checkSearchText(student: StudentDTO, filters: StudentCatalogFilters): boolean {
    const searchTextSplit = filters.searchText
      .trim()
      .replaceAll(/[ ]{2,}/g, ' ')
      .toLowerCase()
      .split(' ');
    const studentString = [student.firstName.toLowerCase(), student.lastName.toLowerCase()].join(
      ' '
    );
    return searchTextSplit.reduce((acc, string) => acc && !!studentString.match(string), true);
  }

  function checkStudyLevel(student: StudentDTO, filters: StudentCatalogFilters): boolean {
    return (
      filters.studyLevels.length === 0 || filters.studyLevels.includes(student.studyLevel.name)
    );
  }

  function checkStudySector(student: StudentDTO, filters: StudentCatalogFilters): boolean {
    return (
      filters.studySectorInitialisms.length === 0 ||
      (!!student.studySector &&
        filters.studySectorInitialisms.includes(student.studySector.initialism))
    );
  }

  useEffect(() => {
    function loadStudents() {
      filterStudents(filters ?? { searchText: '', studyLevels: [], studySectorInitialisms: [] });
      setAreStudentsLoaded(true);
    }

    if (!areStudentsLoaded) loadStudents();
  }, [areStudentsLoaded, filterStudents, filters]);

  return { students, areStudentsLoading, filterStudents };
}

export default useStudents;
