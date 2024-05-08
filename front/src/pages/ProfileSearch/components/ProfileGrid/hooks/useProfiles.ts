import { useCallback, useEffect, useState } from 'react';
import { FakeProfile, fakeProfiles } from 'src/assets/mock/FakeProfiles';
import { ProfileSearchFilters } from 'src/pages/ProfileSearch/hooks/useProfileSearchFilters';

interface ProfilesReturn {
  profiles: FakeProfile[];
  areProfilesLoading: boolean;
  filterProfiles: (filters: ProfileSearchFilters) => void;
}

function useProfiles(filters?: ProfileSearchFilters): ProfilesReturn {
  const [profiles, setFilteredProfiles] = useState<FakeProfile[]>([]);
  const [areProfilesLoading, setAreProfilesLoading] = useState<boolean>(false);
  const [areProfilesLoaded, setAreProfilesLoaded] = useState<boolean>(false);

  const filterProfiles = useCallback(async (filters: ProfileSearchFilters) => {
    setAreProfilesLoading(true);
    const profiles = fakeProfiles.filter(
      (profile) => checkStudyLevel(profile, filters) && checkStudySpecialty(profile, filters)
    );
    setTimeout(() => setAreProfilesLoading(false), 500);

    setFilteredProfiles(profiles);
  }, []);

  function checkStudyLevel(profile: FakeProfile, filters: ProfileSearchFilters): boolean {
    return filters.studyLevels.length === 0 || filters.studyLevels.includes(profile.studyLevel);
  }

  function checkStudySpecialty(profile: FakeProfile, filters: ProfileSearchFilters): boolean {
    return (
      filters.studySpecialties.length === 0 ||
      (!!profile.studySpecialty && filters.studySpecialties.includes(profile.studySpecialty))
    );
  }

  useEffect(() => {
    function loadProfiles() {
      filterProfiles(filters ?? { studyLevels: [], studySpecialties: [] });
      setAreProfilesLoaded(true);
    }

    if (!areProfilesLoaded) loadProfiles();
  }, [areProfilesLoaded, filterProfiles, filters]);

  return { profiles, areProfilesLoading, filterProfiles };
}

export default useProfiles;
