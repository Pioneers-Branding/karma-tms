
import { TeamMember } from '@/components/TeamMemberCard';

export const teamMembers: TeamMember[] = [
// Medical Staff
{
  id: 'keerthy-sunder',
  name: 'Keerthy Sunder M.D.',
  title: 'Medical Director',
  specialization: 'Integrative Psychiatry & Addiction Medicine',
  category: 'medical',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6e11b9b5-a5e7-4213-8e90-24371919d086.webp', // drkeerthy
  bio: 'Dr. Keerthy Sunder is a board-certified psychiatrist specializing in integrative approaches to mental health and addiction recovery. With over 15 years of experience, she combines traditional psychiatric methods with innovative treatments like TMS therapy.',
  credentials: ['M.D.', 'Board Certified Psychiatrist', 'Addiction Medicine Specialist'],
  experience: '15+ years in Psychiatry and Addiction Medicine',
  education: 'Harvard Medical School, Johns Hopkins Residency',
  languages: ['English', 'Tamil', 'Hindi'],
  location: 'Palm Springs, CA',
  email: 'ksunder@karmatms.com',
  phone: '(760) 123-4567'
},
{
  id: 'yucui-chen',
  name: 'Yucui Chen M.D.',
  title: 'Attending Psychiatrist',
  specialization: 'Integrative Psychiatry & Addiction Medicine',
  category: 'medical',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/45ba9950-0356-484d-92b2-b63208718a9f.webp', // dryacui
  bio: 'Dr. Yucui Chen brings a holistic approach to psychiatric care, integrating Eastern and Western medical practices. She specializes in treatment-resistant depression and anxiety disorders using advanced TMS protocols.',
  credentials: ['M.D.', 'Board Certified Psychiatrist', 'TMS Specialist'],
  experience: '12+ years in Integrative Psychiatry',
  education: 'University of California Medical School, UCLA Residency',
  languages: ['English', 'Mandarin', 'Cantonese'],
  location: 'Palm Springs, CA',
  email: 'ychen@karmatms.com'
},
{
  id: 'waseem-khader',
  name: 'Waseem Khader D.O.',
  title: 'Family Medicine Physician',
  specialization: 'Family Medicine & Addiction Medicine',
  category: 'medical',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/a730937f-d80d-41c1-af05-f5a29847d834.webp', // drwaseem
  bio: 'Dr. Waseem Khader provides comprehensive family medicine care with a specialized focus on addiction medicine. He takes a patient-centered approach to treating substance use disorders within the context of overall health and wellness.',
  credentials: ['D.O.', 'Board Certified Family Medicine', 'Addiction Medicine Certified'],
  experience: '10+ years in Family and Addiction Medicine',
  education: 'Western University College of Osteopathic Medicine',
  languages: ['English', 'Arabic', 'Spanish'],
  location: 'Palm Springs, CA',
  email: 'wkhader@karmatms.com'
},
{
  id: 'jack-zhang',
  name: 'Jack Yong Zhang D.O.',
  title: 'Psychiatrist',
  specialization: 'Integrative Psychiatry',
  category: 'medical',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/e5b521be-c95a-4e8d-9bd3-f79d35e114a4.webp', // drjack
  bio: 'Dr. Jack Yong Zhang combines traditional psychiatric training with integrative medicine approaches. He specializes in mood disorders, PTSD, and innovative neurostimulation techniques for treatment-resistant conditions.',
  credentials: ['D.O.', 'Board Certified Psychiatrist', 'Integrative Medicine Fellowship'],
  experience: '8+ years in Integrative Psychiatry',
  education: 'Nova Southeastern University, Mount Sinai Residency',
  languages: ['English', 'Mandarin'],
  location: 'Palm Springs, CA',
  email: 'jzhang@karmatms.com'
},
{
  id: 'todd-born',
  name: 'Todd Born ND',
  title: 'Naturopathic Doctor',
  specialization: 'Naturopathic Medicine',
  category: 'medical',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/8976be92-b4a7-4537-a11c-32b0fb6444cc.webp', // drtodd
  bio: 'Dr. Todd Born provides naturopathic support for mental health conditions, focusing on nutritional psychiatry, herbal medicine, and lifestyle interventions that complement conventional psychiatric treatments.',
  credentials: ['N.D.', 'Licensed Naturopathic Doctor', 'Mental Health Specialist'],
  experience: '12+ years in Naturopathic Medicine',
  education: 'Bastyr University College of Natural Health Arts & Sciences',
  languages: ['English'],
  location: 'Palm Springs, CA',
  email: 'tborn@karmatms.com'
},
{
  id: 'vaidya-anupama',
  name: 'Vaidya Anupama K',
  title: 'Ayurvedic Practitioner',
  specialization: 'Ayurvedic Medicine',
  category: 'medical',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3c1ffc60-6ddb-4390-8727-3ab940d62425.webp', // drvaidya
  bio: 'Vaidya Anupama K brings traditional Ayurvedic wisdom to modern mental health care. She specializes in constitutional assessment, herbal protocols, and mind-body practices that support psychological well-being and recovery.',
  credentials: ['B.A.M.S.', 'Certified Ayurvedic Practitioner', 'Panchakarma Specialist'],
  experience: '15+ years in Ayurvedic Medicine',
  education: 'Gujarat Ayurved University, California College of Ayurveda',
  languages: ['English', 'Sanskrit', 'Hindi', 'Gujarati'],
  location: 'Palm Springs, CA',
  email: 'anupama@karmatms.com'
},
{
  id: 'rachel-mcduffie',
  name: 'Rachel McDuffie PA-C',
  title: 'Physician Associate',
  specialization: 'Mental Health Care',
  category: 'medical',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/bc4b873b-a11b-4307-a2a0-e4e4c7e9832d.webp', // drrachel
  bio: 'Rachel McDuffie PA-C provides comprehensive mental health assessments and treatment support. She works closely with our medical team to ensure coordinated care and optimal treatment outcomes for all patients.',
  credentials: ['PA-C', 'Master of Physician Assistant Studies', 'Mental Health Certified'],
  experience: '7+ years as Physician Associate',
  education: 'University of Southern California PA Program',
  languages: ['English', 'Spanish'],
  location: 'Palm Springs, CA',
  email: 'rmcduffie@karmatms.com'
},
{
  id: 'punit-patel',
  name: 'Punit Patel PA-C',
  title: 'Physician Associate',
  specialization: 'Psychiatric Care',
  category: 'medical',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/c25fca32-99fd-4a83-ae8f-db4ade058209.webp', // drpunit
  bio: 'Punit Patel PA-C specializes in psychiatric care and medication management. He provides thorough evaluations and works collaboratively with patients to develop personalized treatment plans that address their unique mental health needs.',
  credentials: ['PA-C', 'Master of Physician Assistant Studies', 'Psychiatric Care Specialist'],
  experience: '6+ years in Psychiatric Care',
  education: 'Western University PA Program',
  languages: ['English', 'Hindi', 'Gujarati'],
  location: 'Palm Springs, CA',
  email: 'ppatel@karmatms.com'
},

// Administrative Staff
{
  id: 'anjali-krishna',
  name: 'Anjali Krishna',
  title: 'Chief Operations Manager',
  specialization: 'Operations Management',
  category: 'administrative',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/bb3173b2-8f66-4748-ab22-ad62d7ff8ac9.png', // dranjali
  bio: 'Anjali Krishna oversees all operational aspects of Karma TMS, ensuring seamless clinic operations and exceptional patient experiences. She brings extensive healthcare administration experience and a passion for improving mental health care delivery.',
  credentials: ['MBA Healthcare Administration', 'PMP Certified', 'Healthcare Operations Specialist'],
  experience: '12+ years in Healthcare Operations',
  education: 'USC Marshall School of Business',
  languages: ['English', 'Hindi', 'Tamil'],
  location: 'Palm Springs, CA',
  email: 'akrishna@karmatms.com'
},
{
  id: 'joshua-smith',
  name: 'Joshua Smith',
  title: 'Practice Manager',
  specialization: 'Practice Management',
  category: 'administrative',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2346bd6e-0093-44ba-8ef8-6cb0e6b0e14d.png', // drjoshua
  bio: 'Joshua Smith manages day-to-day practice operations, patient scheduling, and staff coordination. His attention to detail and commitment to patient care excellence ensures smooth clinic operations and positive patient experiences.',
  credentials: ['Healthcare Administration Certificate', 'Practice Management Specialist'],
  experience: '8+ years in Practice Management',
  education: 'California State University',
  languages: ['English', 'Spanish'],
  location: 'Palm Springs, CA',
  email: 'jsmith@karmatms.com'
},
{
  id: 'jothsna-bodhanapati',
  name: 'Jothsna Bodhanapati',
  title: 'Social Media Director',
  specialization: 'Digital Marketing & Communications',
  category: 'administrative',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9be675c2-0d16-42b9-b5c1-1cf04128830f.png', // drjothsna
  bio: 'Jothsna Bodhanapati leads our digital marketing efforts and patient education initiatives. She creates engaging content that helps reduce mental health stigma and connects patients with the resources and care they need.',
  credentials: ['Digital Marketing Certified', 'Healthcare Communications Specialist', 'Social Media Expert'],
  experience: '6+ years in Healthcare Marketing',
  education: 'University of California San Diego',
  languages: ['English', 'Telugu', 'Hindi'],
  location: 'Palm Springs, CA',
  email: 'jbodhanapati@karmatms.com'
},
{
  id: 'charles-vigilia',
  name: 'Charles Vigilia',
  title: 'TMS Neurotechnologist',
  specialization: 'TMS Technology & Patient Care',
  category: 'administrative',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/47c3044f-8de3-4950-8ff0-340fc994c18f.jpeg', // drcharles
  bio: 'Charles Vigilia specializes in TMS therapy delivery and patient support throughout treatment. His technical expertise and compassionate care approach ensure patients receive optimal TMS treatments in a comfortable environment.',
  credentials: ['TMS Technician Certified', 'Neurostimulation Specialist', 'Patient Care Certified'],
  experience: '5+ years in TMS Technology',
  education: 'Desert Regional Medical Center Training Program',
  languages: ['English', 'Spanish'],
  location: 'Palm Springs, CA',
  email: 'cvigilia@karmatms.com'
},
{
  id: 'alexandra-mendoza',
  name: 'Alexandra Mendoza',
  title: 'TMS Neurotechnologist',
  specialization: 'TMS Technology & Patient Support',
  category: 'administrative',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/cf918837-3d84-4bdf-b552-40e4bfe52462.jpeg', // dralexandra
  bio: 'Alexandra Mendoza provides expert TMS treatment delivery and patient education. She ensures each patient understands their treatment process and feels supported throughout their TMS therapy journey.',
  credentials: ['TMS Technician Certified', 'Patient Education Specialist', 'Mental Health Support Certified'],
  experience: '4+ years in TMS Technology',
  education: 'College of the Desert Healthcare Program',
  languages: ['English', 'Spanish'],
  location: 'Palm Springs, CA',
  email: 'amendoza@karmatms.com'
}];
