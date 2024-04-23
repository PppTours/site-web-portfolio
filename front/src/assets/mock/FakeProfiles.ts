import StudyLevel from 'src/models/StudyLevel/StudyLevel';
import StudySpecialty from 'src/models/StudySpecialty/StudySpecialty';

export interface FakeProfile {
  image: string | null;
  firstName: string;
  lastName: string;
  studySpecialty: StudySpecialty | null;
  studyLevel: StudyLevel;
}

export const fakeProfiles: FakeProfile[] = [
  {
    image: 'https://thumbs.wbm.im/pw/medium/55f909f894923fc2807bc6d88403e840.avif',
    firstName: 'John',
    lastName: 'Doe',
    studySpecialty: StudySpecialty.DI,
    studyLevel: StudyLevel.Peip1
  },
  {
    image: 'https://i.pinimg.com/474x/b9/3d/d4/b93dd44ef0d0719d741a9c36802e6d82.jpg',
    firstName: 'Alice',
    lastName: 'Smith',
    studySpecialty: StudySpecialty.ISIE,
    studyLevel: StudyLevel.Peip2
  },
  {
    image: null,
    firstName: 'Emma',
    lastName: 'Johnson',
    studySpecialty: StudySpecialty.DAE,
    studyLevel: StudyLevel.Year3
  },
  {
    image: 'https://thumbs.wbm.im/pw/medium/39573f81d4d58261e5e1ed8f1ff890f6.avif',
    firstName: 'Michael',
    lastName: 'Williams',
    studySpecialty: StudySpecialty.DEE,
    studyLevel: StudyLevel.Year4
  },
  {
    image: 'https://thumbs.wbm.im/pw/medium/6a9b235faaa86202932278ed19bb76bf.avif',
    firstName: 'James',
    lastName: 'Brown',
    studySpecialty: StudySpecialty.DMS,
    studyLevel: StudyLevel.Year5
  },
  {
    image: 'https://wrong.url.com/picture.png',
    firstName: 'Sophia',
    lastName: 'Miller',
    studySpecialty: StudySpecialty.MMA,
    studyLevel: StudyLevel.Year5
  },
  {
    image: 'https://i.pinimg.com/474x/e9/c8/08/e9c808fdac222166d8b1d892e79fe25e.jpg',
    firstName: 'Olivia',
    lastName: 'Davis',
    studySpecialty: StudySpecialty.DI,
    studyLevel: StudyLevel.Graduated
  },
  {
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    firstName: 'William',
    lastName: 'Wilson',
    studySpecialty: null,
    studyLevel: StudyLevel.Graduated
  },
  {
    image:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    firstName: 'Benjamin',
    lastName: 'Moore',
    studySpecialty: StudySpecialty.DAE,
    studyLevel: StudyLevel.Graduated
  },
  {
    image: 'https://i.pinimg.com/564x/c6/dc/2e/c6dc2ea586c471521004b3eb12862472.jpg',
    firstName: 'Emily',
    lastName: 'Taylor',
    studySpecialty: StudySpecialty.DEE,
    studyLevel: StudyLevel.Graduated
  },
  {
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    firstName: 'Jane',
    lastName: 'Floyd',
    studySpecialty: StudySpecialty.DI,
    studyLevel: StudyLevel.Peip1
  }
];
