import { CreateStudentRequestDTO } from 'src/student/dtos/create-student-request.dto';

export const STUDENTS: CreateStudentRequestDTO[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    profilePictureUrl:
      'https://thumbs.wbm.im/pw/medium/55f909f894923fc2807bc6d88403e840.avif',
    level: {
      id: 1,
    },
    specialty: null,
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    profilePictureUrl:
      'https://i.pinimg.com/474x/b9/3d/d4/b93dd44ef0d0719d741a9c36802e6d82.jpg',
    level: {
      id: 2,
    },
    specialty: null,
  },
  {
    firstName: 'Emma',
    lastName: 'Johnson',
    profilePictureUrl: null,
    level: {
      id: 3,
    },
    specialty: {
      id: 2,
    },
  },
  {
    firstName: 'Michael',
    lastName: 'Williams',
    profilePictureUrl:
      'https://thumbs.wbm.im/pw/medium/39573f81d4d58261e5e1ed8f1ff890f6.avif',
    level: {
      id: 4,
    },
    specialty: {
      id: 3,
    },
  },
  {
    firstName: 'James',
    lastName: 'Brown',
    profilePictureUrl:
      'https://thumbs.wbm.im/pw/medium/6a9b235faaa86202932278ed19bb76bf.avif',
    level: {
      id: 5,
    },
    specialty: {
      id: 5,
    },
  },
  {
    firstName: 'Sophia',
    lastName: 'Miller',
    profilePictureUrl: 'https://wrong.url.com/picture.png',
    level: {
      id: 5,
    },
    specialty: {
      id: 7,
    },
  },
  {
    firstName: 'Olivia',
    lastName: 'Davis',
    profilePictureUrl:
      'https://i.pinimg.com/474x/e9/c8/08/e9c808fdac222166d8b1d892e79fe25e.jpg',
    level: {
      id: 6,
    },
    specialty: {
      id: 4,
    },
  },
  {
    firstName: 'William',
    lastName: 'Wilson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    level: {
      id: 3,
    },
    specialty: {
      id: 3,
    },
  },
  {
    firstName: 'Benjamin',
    lastName: 'Moore',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    level: {
      id: 5,
    },
    specialty: {
      id: 2,
    },
  },
  {
    firstName: 'Emily',
    lastName: 'Taylor',
    profilePictureUrl:
      'https://i.pinimg.com/564x/c6/dc/2e/c6dc2ea586c471521004b3eb12862472.jpg',
    level: {
      id: 5,
    },
    specialty: {
      id: 3,
    },
  },
  {
    firstName: 'Jane',
    lastName: 'Floyd',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    level: {
      id: 1,
    },
    specialty: null,
  },
];
