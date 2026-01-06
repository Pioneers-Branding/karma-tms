
import { TeamMember } from '@/components/TeamMemberCard';

export const teamMembers: TeamMember[] = [
// Medical Staff
{
  id: 'keerthy-sunder',
  name: 'Keerthy Sunder M.D.',
  title: 'Medical Director',
  specialization: 'Integrative Psychiatry & Addiction Medicine',
  category: 'medical',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759237129/KeerthySunder_srunyz.webp', // drkeerthy
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
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759237129/YucuiChen-1_x6oiun.webp', // dryacui
  bio: 'Dr. Yucui Chen brings a holistic approach to psychiatric care, integrating Eastern and Western medical practices. She specializes in treatment-resistant depression and anxiety disorders using advanced TMS protocols.',
  credentials: ['M.D.', 'Board Certified Psychiatrist', 'TMS Specialist'],
  experience: '12+ years in Integrative Psychiatry',
  education: 'University of California Medical School, UCLA Residency',
  languages: ['English', 'Mandarin', 'Cantonese'],
  location: 'Palm Springs, CA',
  email: 'ychen@karmatms.com'
},

{
  id: 'jack-zhang',
  name: 'Jack Yong Zhang D.O.',
  title: 'Psychiatrist',
  specialization: 'Integrative Psychiatry',
  category: 'medical',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759237108/JackYongZhang-1_u2zgfr.webp', // drjack
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
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759237116/ToddBornND-1_ki6d5k.webp', // drtodd
  bio: 'Dr. Todd Born provides naturopathic support for mental health conditions, focusing on nutritional psychiatry, herbal medicine, and lifestyle interventions that complement conventional psychiatric treatments.',
  credentials: ['N.D.', 'Licensed Naturopathic Doctor', 'Mental Health Specialist'],
  experience: '12+ years in Naturopathic Medicine',
  education: 'Bastyr University College of Natural Health Arts & Sciences',
  languages: ['English'],
  location: 'Palm Springs, CA',
  email: 'tborn@karmatms.com'
},


{
  id: 'punit-patel',
  name: 'Punit Patel PA-C',
  title: 'Physician Associate',
  specialization: 'Psychiatric Care',
  category: 'medical',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759237054/PunitPatel1_plpekd.webp', // drpunit
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
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759237127/AnjaliKrishna-768x696_pf8ks9.png', // dranjali
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
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759237118/JoshuaSmith-768x770_ai3ese.png', // drjoshua
  bio: 'Joshua Smith manages day-to-day practice operations, patient scheduling, and staff coordination. His attention to detail and commitment to patient care excellence ensures smooth clinic operations and positive patient experiences.',
  credentials: ['Healthcare Administration Certificate', 'Practice Management Specialist'],
  experience: '8+ years in Practice Management',
  education: 'California State University',
  languages: ['English', 'Spanish'],
  location: 'Palm Springs, CA',
  email: 'jsmith@karmatms.com'
},
// {
//   id: 'charles-vigilia',
//   name: 'Charles Vigilia',
//   title: 'TMS Neurotechnologist',
//   specialization: 'TMS Technology & Patient Care',
//   category: 'administrative',
//   image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759237096/Charles_dcoc1o.jpg', // drcharles
//   bio: 'Charles Vigilia specializes in TMS therapy delivery and patient support throughout treatment. His technical expertise and compassionate care approach ensure patients receive optimal TMS treatments in a comfortable environment.',
//   credentials: ['TMS Technician Certified', 'Neurostimulation Specialist', 'Patient Care Certified'],
//   experience: '5+ years in TMS Technology',
//   education: 'Desert Regional Medical Center Training Program',
//   languages: ['English', 'Spanish'],
//   location: 'Palm Springs, CA',
//   email: 'cvigilia@karmatms.com'
// },
{
  id: 'charles',
  name: 'Charles Vigilia',
  title: 'TMS Neurotechnologist',
  specialization: 'TMS Technology & Patient Care',
  category: 'administrative',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763966552/charles_x24lft.jpg', // drcharles
  bio: 'Charles Vigilia specializes in TMS therapy delivery and patient support throughout treatment. His technical expertise and compassionate care approach ensure patients receive optimal TMS treatments in a comfortable environment.',
  credentials: ['TMS Technician Certified', 'Neurostimulation Specialist', 'Patient Care Certified'],
  experience: '5+ years in TMS Technology',
  education: 'Desert Regional Medical Center Training Program',
  languages: ['English', 'Spanish'],
  location: 'Palm Springs, CA',
  email: 'cvigilia@karmatms.com'
},

{
  id: 'amber',
  name: 'Amber',
  title: 'TMS Neurotechnologist',
  specialization: 'TMS Technology & Patient Care',
  category: 'administrative',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763966185/amber-nt_b8nwo0.jpg', // amber
  bio: 'Charles Vigilia specializes in TMS therapy delivery and patient support throughout treatment. His technical expertise and compassionate care approach ensure patients receive optimal TMS treatments in a comfortable environment.',
  credentials: ['TMS Technician Certified', 'Neurostimulation Specialist', 'Patient Care Certified'],
  experience: '5+ years in TMS Technology',
  education: 'Desert Regional Medical Center Training Program',
  languages: ['English', 'Spanish'],
  location: 'Palm Springs, CA',
  email: 'cvigilia@karmatms.com'
}];