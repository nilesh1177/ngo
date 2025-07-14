import { v4 as uuidv4 } from 'uuid';

export const mockNGOs = [
  {
    id: uuidv4(),
    name: "Green Earth Foundation",
    registrationNumber: "NGO-2024-001",
    address: "123 Environmental Street, Eco City, EC 12345",
    phone: "+1-555-0101",
    email: "contact@greenearth.org",
    website: "www.greenearth.org",
    mission: "To protect and preserve the environment through sustainable practices and community education.",
    focusArea: "Environmental Conservation",
    establishedDate: "2020-03-15",
    status: "Active",
    members: 45,
    description: "A non-profit organization dedicated to environmental protection and sustainability initiatives."
  },
  {
    id: uuidv4(),
    name: "Community Health Initiative",
    registrationNumber: "NGO-2024-002",
    address: "456 Health Avenue, Wellness Town, WT 67890",
    phone: "+1-555-0102",
    email: "info@communityhealth.org",
    website: "www.communityhealth.org",
    mission: "To improve community health through education, prevention, and access to healthcare services.",
    focusArea: "Healthcare",
    establishedDate: "2019-07-22",
    status: "Active",
    members: 32,
    description: "Providing healthcare services and education to underserved communities."
  },
  {
    id: uuidv4(),
    name: "Education for All",
    registrationNumber: "NGO-2024-003",
    address: "789 Learning Lane, Knowledge City, KC 11111",
    phone: "+1-555-0103",
    email: "hello@educationforall.org",
    website: "www.educationforall.org",
    mission: "To provide quality education to children from disadvantaged backgrounds.",
    focusArea: "Education",
    establishedDate: "2021-01-10",
    status: "Active",
    members: 28,
    description: "Supporting children's education through scholarships, tutoring, and school supplies."
  },
  {
    id: uuidv4(),
    name: "Women Empowerment Network",
    registrationNumber: "NGO-2024-004",
    address: "321 Empowerment Road, Progress City, PC 22222",
    phone: "+1-555-0104",
    email: "contact@womenempowerment.org",
    website: "www.womenempowerment.org",
    mission: "To empower women through education, skills training, and economic opportunities.",
    focusArea: "Women's Rights",
    establishedDate: "2018-11-05",
    status: "Active",
    members: 56,
    description: "Supporting women's economic independence and leadership development."
  },
  {
    id: uuidv4(),
    name: "Youth Development Center",
    registrationNumber: "NGO-2024-005",
    address: "654 Youth Street, Future Town, FT 33333",
    phone: "+1-555-0105",
    email: "info@youthdevelopment.org",
    website: "www.youthdevelopment.org",
    mission: "To develop young leaders through mentorship, training, and community service.",
    focusArea: "Youth Development",
    establishedDate: "2022-05-18",
    status: "Active",
    members: 38,
    description: "Fostering leadership skills and community engagement among young people."
  }
];

export const mockMembers = [
  {
    id: uuidv4(),
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1-555-0201",
    address: "123 Main Street, Anytown, AT 12345",
    dateOfBirth: "1985-06-15",
    membershipDate: "2023-01-15",
    ngoId: mockNGOs[0].id,
    ngoName: "Green Earth Foundation",
    membershipType: "Regular",
    status: "Active",
    skills: ["Environmental Science", "Project Management", "Community Outreach"],
    interests: ["Climate Change", "Sustainable Living", "Education"]
  },
  {
    id: uuidv4(),
    firstName: "Michael",
    lastName: "Chen",
    email: "michael.chen@email.com",
    phone: "+1-555-0202",
    address: "456 Oak Avenue, Somewhere, SW 67890",
    dateOfBirth: "1990-03-22",
    membershipDate: "2023-02-20",
    ngoId: mockNGOs[1].id,
    ngoName: "Community Health Initiative",
    membershipType: "Volunteer",
    status: "Active",
    skills: ["Healthcare", "First Aid", "Patient Care"],
    interests: ["Public Health", "Emergency Response", "Preventive Care"]
  },
  {
    id: uuidv4(),
    firstName: "Emily",
    lastName: "Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "+1-555-0203",
    address: "789 Pine Street, Elsewhere, EW 11111",
    dateOfBirth: "1988-09-10",
    membershipDate: "2023-03-10",
    ngoId: mockNGOs[2].id,
    ngoName: "Education for All",
    membershipType: "Regular",
    status: "Active",
    skills: ["Teaching", "Curriculum Development", "Child Psychology"],
    interests: ["Early Childhood Education", "Literacy", "Special Needs"]
  },
  {
    id: uuidv4(),
    firstName: "David",
    lastName: "Thompson",
    email: "david.thompson@email.com",
    phone: "+1-555-0204",
    address: "321 Elm Street, Nowhere, NW 22222",
    dateOfBirth: "1982-12-05",
    membershipDate: "2023-01-05",
    ngoId: mockNGOs[3].id,
    ngoName: "Women Empowerment Network",
    membershipType: "Supporter",
    status: "Active",
    skills: ["Business Development", "Mentoring", "Leadership"],
    interests: ["Women's Rights", "Economic Development", "Leadership Training"]
  },
  {
    id: uuidv4(),
    firstName: "Lisa",
    lastName: "Wang",
    email: "lisa.wang@email.com",
    phone: "+1-555-0205",
    address: "654 Maple Drive, Anywhere, AW 33333",
    dateOfBirth: "1995-04-18",
    membershipDate: "2023-04-15",
    ngoId: mockNGOs[4].id,
    ngoName: "Youth Development Center",
    membershipType: "Volunteer",
    status: "Active",
    skills: ["Youth Mentoring", "Event Planning", "Social Media"],
    interests: ["Youth Leadership", "Community Service", "Technology"]
  },
  {
    id: uuidv4(),
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@email.com",
    phone: "+1-555-0206",
    address: "987 Cedar Lane, Someplace, SP 44444",
    dateOfBirth: "1987-08-30",
    membershipDate: "2023-05-20",
    ngoId: mockNGOs[0].id,
    ngoName: "Green Earth Foundation",
    membershipType: "Regular",
    status: "Active",
    skills: ["Environmental Policy", "Research", "Data Analysis"],
    interests: ["Climate Policy", "Renewable Energy", "Conservation"]
  },
  {
    id: uuidv4(),
    firstName: "Maria",
    lastName: "Garcia",
    email: "maria.garcia@email.com",
    phone: "+1-555-0207",
    address: "147 Birch Road, Otherplace, OP 55555",
    dateOfBirth: "1992-11-12",
    membershipDate: "2023-06-10",
    ngoId: mockNGOs[1].id,
    ngoName: "Community Health Initiative",
    membershipType: "Regular",
    status: "Active",
    skills: ["Nursing", "Health Education", "Spanish Translation"],
    interests: ["Community Health", "Cultural Competency", "Preventive Medicine"]
  }
];

export const membershipTypes = [
  "Regular",
  "Volunteer", 
  "Supporter",
  "Student",
  "Corporate"
];

export const focusAreas = [
  "Environmental Conservation",
  "Healthcare",
  "Education",
  "Women's Rights",
  "Youth Development",
  "Poverty Alleviation",
  "Human Rights",
  "Animal Welfare",
  "Arts & Culture",
  "Technology",
  "Disaster Relief",
  "Other"
];

export const memberStatuses = [
  "Active",
  "Inactive",
  "Pending",
  "Suspended"
];

export const ngoStatuses = [
  "Active",
  "Inactive",
  "Pending Approval",
  "Suspended"
]; 