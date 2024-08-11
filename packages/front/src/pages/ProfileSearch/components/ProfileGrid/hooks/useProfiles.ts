import { useCallback, useEffect, useState } from 'react';
import { StudentDTO } from 'src/dtos/Student/StudentDTO';
import { ProfileSearchFilters } from 'src/pages/ProfileSearch/hooks/useProfileSearchFilters';
import { studentService } from 'src/services/StudentService';

interface ProfilesReturn {
  profiles: StudentDTO[];
  areProfilesLoading: boolean;
  filterProfiles: (filters: ProfileSearchFilters) => void;
}

function useProfiles(filters?: ProfileSearchFilters): ProfilesReturn {
  const [profiles, setFilteredProfiles] = useState<StudentDTO[]>([]);
  const [areProfilesLoading, setAreProfilesLoading] = useState<boolean>(false);
  const [areProfilesLoaded, setAreProfilesLoaded] = useState<boolean>(false);

  const filterProfiles = useCallback(async (filters: ProfileSearchFilters) => {
    setAreProfilesLoading(true);
    const allProfiles = (await studentService.getAll()).students;
    const filteredProfiles = allProfiles.filter(
      (profile) =>
        checkSearchText(profile, filters) &&
        checkStudyLevel(profile, filters) &&
        checkStudySector(profile, filters)
    );
    setTimeout(() => setAreProfilesLoading(false), 500);

    setFilteredProfiles(filteredProfiles);
  }, []);

  function checkSearchText(profile: StudentDTO, filters: ProfileSearchFilters): boolean {
    const searchTextSplit = filters.searchText
      .trim()
      .replaceAll(/[ ]{2,}/g, ' ')
      .toLowerCase()
      .split(' ');
    const profileString = [profile.firstName.toLowerCase(), profile.lastName.toLowerCase()].join(
      ' '
    );
    return searchTextSplit.reduce((acc, string) => acc && !!profileString.match(string), true);
  }

  function checkStudyLevel(profile: StudentDTO, filters: ProfileSearchFilters): boolean {
    return (
      filters.studyLevels.length === 0 || filters.studyLevels.includes(profile.studyLevel.name)
    );
  }

  function checkStudySector(profile: StudentDTO, filters: ProfileSearchFilters): boolean {
    return (
      filters.studySpecialties.length === 0 ||
      (!!profile.studySector && filters.studySpecialties.includes(profile.studySector.initialism))
    );
  }

  useEffect(() => {
    function loadProfiles() {
      filterProfiles(filters ?? { searchText: '', studyLevels: [], studySpecialties: [] });
      setAreProfilesLoaded(true);
    }

    if (!areProfilesLoaded) loadProfiles();
  }, [areProfilesLoaded, filterProfiles, filters]);

  return { profiles, areProfilesLoading, filterProfiles };
}

export default useProfiles;
