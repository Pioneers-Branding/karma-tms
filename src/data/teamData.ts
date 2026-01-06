
import { TeamMember } from '@/components/TeamMemberCard';

export const teamMembers: TeamMember[] = [
// Medical Staff
{
  id: 'keerthy-sunder',
  name: 'Keerthy Sunder M.D.',
  title: 'Medical Director',
  specialization: 'Integrative Psychiatry & Addiction Medicine',
  category: 'medical',
  image: 'https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEtlZXJ0aHklMjBTdW5kZXIlMkMlMjBhJTIwbWVkaWNhbCUyMGRpcmVjdG9yJTIwc3BlY2lhbGl6aW5nJTIwaW4lMjBpbnRlZ3JhdGl2ZSUyMHBzeWNoaWF0cnklMjBhbmQlMjBhZGRpY3Rpb24lMjBtZWRpY2luZS58ZW58MHx8fHwxNzU5MjM2Njc1fDA&ixlib=rb-4.1.0&q=80&w=200$w=800', // drkeerthy
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
  image: 'https://images.unsplash.com/photo-1700954343841-2134b33d569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFl1Y3VpJTIwQ2hlbiUyQyUyMGFuJTIwYXR0ZW5kaW5nJTIwcHN5Y2hpYXRyaXN0JTIwc3BlY2lhbGl6aW5nJTIwaW4lMjBpbnRlZ3JhdGl2ZSUyMHBzeWNoaWF0cnklMjBhbmQlMjBhZGRpY3Rpb24lMjBtZWRpY2luZS58ZW58MHx8fHwxNzU5MjM2Njc4fDA&ixlib=rb-4.1.0&q=80&w=200$w=800', // dryacui
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
  image: 'https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFdhc2VlbSUyMEtoYWRlciUyQyUyMGElMjBGYW1pbHklMjBNZWRpY2luZSUyMFBoeXNpY2lhbiUyMHNwZWNpYWxpemluZyUyMGluJTIwYWRkaWN0aW9uJTIwbWVkaWNpbmUlMkMlMjBkZXBpY3RlZCUyMGluJTIwYSUyMGZvcm1hbCUyMHNldHRpbmcufGVufDB8fHx8MTc1OTIzNjY4MHww&ixlib=rb-4.1.0&q=80&w=200$w=800', // drwaseem
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
  image: 'https://images.unsplash.com/photo-1700954343841-2134b33d569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEphY2slMjBZb25nJTIwWmhhbmclMkMlMjBhJTIwcHN5Y2hpYXRyaXN0JTIwc3BlY2lhbGl6aW5nJTIwaW4lMjBpbnRlZ3JhdGl2ZSUyMHBzeWNoaWF0cnklMkMlMjBkZXBpY3RlZCUyMGluJTIwYSUyMGZvcm1hbCUyMHNldHRpbmcufGVufDB8fHx8MTc1OTIzNjY4NHww&ixlib=rb-4.1.0&q=80&w=200$w=800', // drjack
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
  image: 'https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFRvZGQlMjBCb3JuJTJDJTIwYSUyME5hdHVyb3BhdGhpYyUyMERvY3RvciUyMHNwZWNpYWxpemluZyUyMGluJTIwbWVudGFsJTIwaGVhbHRoJTIwc3VwcG9ydC58ZW58MHx8fHwxNzU5MjM2Njg1fDA&ixlib=rb-4.1.0&q=80&w=200$w=800', // drtodd
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
  image: 'https://images.unsplash.com/photo-1622460241924-a114e6abe1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFZhaWR5YSUyMEFudXBhbWElMjBLJTJDJTIwYW4lMjBBeXVydmVkaWMlMjBQcmFjdGl0aW9uZXIlMjBzcGVjaWFsaXppbmclMjBpbiUyMG1lbnRhbCUyMGhlYWx0aCUyMGNhcmUufGVufDB8fHx8MTc1OTIzNjY4N3ww&ixlib=rb-4.1.0&q=80&w=200$w=800', // drvaidya
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
  image: 'https://images.unsplash.com/photo-1736181406433-7aad21946585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMFJhY2hlbCUyME1jRHVmZmllJTJDJTIwYSUyMFBoeXNpY2lhbiUyMEFzc29jaWF0ZSUyMHNwZWNpYWxpemluZyUyMGluJTIwTWVudGFsJTIwSGVhbHRoJTIwQ2FyZS58ZW58MHx8fHwxNzU5MjM2Njg4fDA&ixlib=rb-4.1.0&q=80&w=200$w=800', // drrachel
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
  image: 'https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFB1bml0JTIwUGF0ZWwlMkMlMjBhJTIwUGh5c2ljaWFuJTIwQXNzb2NpYXRlJTIwc3BlY2lhbGl6aW5nJTIwaW4lMjBwc3ljaGlhdHJpYyUyMGNhcmUufGVufDB8fHx8MTc1OTIzNjY5MHww&ixlib=rb-4.1.0&q=80&w=200$w=800', // drpunit
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
  image: 'https://images.unsplash.com/photo-1637176594894-13e5da4866e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMEFuamFsaSUyMEtyaXNobmElMkMlMjBDaGllZiUyME9wZXJhdGlvbnMlMjBNYW5hZ2VyJTIwYXQlMjBLYXJtYSUyMFRNUyUyQyUyMHNwZWNpYWxpemluZyUyMGluJTIwT3BlcmF0aW9ucyUyME1hbmFnZW1lbnQufGVufDB8fHx8MTc1OTIzNjY5Mnww&ixlib=rb-4.1.0&q=80&w=200$w=800', // dranjali
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
  image: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMEpvc2h1YSUyMFNtaXRoJTJDJTIwUHJhY3RpY2UlMjBNYW5hZ2VyJTIwYXQlMjBLYXJtYSUyMFRNUyUyQyUyMHNwZWNpYWxpemluZyUyMGluJTIwUHJhY3RpY2UlMjBNYW5hZ2VtZW50LnxlbnwwfHx8fDE3NTkyMzY2OTR8MA&ixlib=rb-4.1.0&q=80&w=200$w=800', // drjoshua
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
  image: 'https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMEpvdGhzbmElMjBCb2RoYW5hcGF0aSUyQyUyMFNvY2lhbCUyME1lZGlhJTIwRGlyZWN0b3IlMjBhdCUyMEthcm1hJTIwVE1TJTJDJTIwc3BlY2lhbGl6aW5nJTIwaW4lMjBEaWdpdGFsJTIwTWFya2V0aW5nJTIwJTI2JTIwQ29tbXVuaWNhdGlvbnMufGVufDB8fHx8MTc1OTIzNjY5N3ww&ixlib=rb-4.1.0&q=80&w=200$w=800', // drjothsna
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
  image: 'https://images.unsplash.com/photo-1700308433726-303f30fb96c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMENoYXJsZXMlMjBWaWdpbGlhJTJDJTIwYSUyMFRNUyUyME5ldXJvdGVjaG5vbG9naXN0JTJDJTIwc3BlY2lhbGl6aW5nJTIwaW4lMjBUTVMlMjB0ZWNobm9sb2d5JTIwYW5kJTIwcGF0aWVudCUyMGNhcmUufGVufDB8fHx8MTc1OTIzNjY5OHww&ixlib=rb-4.1.0&q=80&w=200$w=800', // drcharles
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
  image: 'https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMEFsZXhhbmRyYSUyME1lbmRvemElMkMlMjBhJTIwVE1TJTIwTmV1cm90ZWNobm9sb2dpc3QlMjBzcGVjaWFsaXppbmclMjBpbiUyMFRNUyUyMHRlY2hub2xvZ3klMjBhbmQlMjBwYXRpZW50JTIwc3VwcG9ydC58ZW58MHx8fHwxNzU5MjM2NzAwfDA&ixlib=rb-4.1.0&q=80&w=200$w=800', // dralexandra
  bio: 'Alexandra Mendoza provides expert TMS treatment delivery and patient education. She ensures each patient understands their treatment process and feels supported throughout their TMS therapy journey.',
  credentials: ['TMS Technician Certified', 'Patient Education Specialist', 'Mental Health Support Certified'],
  experience: '4+ years in TMS Technology',
  education: 'College of the Desert Healthcare Program',
  languages: ['English', 'Spanish'],
  location: 'Palm Springs, CA',
  email: 'amendoza@karmatms.com'
}];