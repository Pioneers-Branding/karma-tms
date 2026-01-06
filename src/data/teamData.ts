export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  title: string;
  credentials: string;
  role: string;
  category: 'doctor' | 'staff' | 'provider';
  image: string;
  specialties: string[];
  bio: string;
  education?: string[];
  certifications?: string[];
  experience?: string;
  approach?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    slug: 'dr-keerthy-sunder',
    name: 'Dr. Keerthy Sunder',
    title: 'Medical Director',
    credentials: 'MD',
    role: 'Psychiatrist & TMS Specialist',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1748288166888-f1bd5d6ef9ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEtlZXJ0aHklMjBTdW5kZXIlMkMlMjBhJTIwcHN5Y2hpYXRyaXN0JTIwYW5kJTIwVE1TJTIwc3BlY2lhbGlzdC58ZW58MHx8fHwxNzU5OTAwMzc1fDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['TMS Therapy', 'Treatment-Resistant Depression', 'Anxiety Disorders', 'Medication Management'],
    bio: 'Dr. Keerthy Sunder is a board-certified psychiatrist and the Medical Director at Karma TMS. With over 15 years of experience in psychiatric care, Dr. Sunder has dedicated her career to helping patients find relief from treatment-resistant mental health conditions. She is a pioneer in Transcranial Magnetic Stimulation (TMS) therapy and has treated hundreds of patients with remarkable success rates.',
    education: [
      'Doctor of Medicine - University of California, Los Angeles',
      'Residency in Psychiatry - Stanford University Medical Center',
      'Fellowship in Neuromodulation - Harvard Medical School'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'Advanced TMS Certification',
      'Deep TMS Specialist'
    ],
    experience: '15+ years in psychiatric practice with specialized focus on neuromodulation and TMS therapy',
    approach: 'Dr. Sunder believes in a comprehensive, patient-centered approach that combines cutting-edge technology with compassionate care. She works closely with each patient to develop personalized treatment plans that address their unique needs and goals.'
  },
  {
    id: '2',
    slug: 'dr-yucui-chen',
    name: 'Dr. Yucui Chen',
    title: 'Psychiatrist',
    credentials: 'MD',
    role: 'Adult & Adolescent Psychiatrist',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1700954343841-2134b33d569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFl1Y3VpJTIwQ2hlbiUyQyUyMGElMjBwc3ljaGlhdHJpc3QlMjBzcGVjaWFsaXppbmclMjBpbiUyMG1vb2QlMjBkaXNvcmRlcnMlMjBhbmQlMjBhZG9sZXNjZW50JTIwcHN5Y2hpYXRyeS58ZW58MHx8fHwxNzU5OTAwMzcyfDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['Mood Disorders', 'Adolescent Psychiatry', 'OCD Treatment', 'TMS Therapy'],
    bio: 'Dr. Yucui Chen is a compassionate psychiatrist specializing in the treatment of mood disorders and obsessive-compulsive disorder. With extensive training in both medication management and TMS therapy, Dr. Chen provides comprehensive care for adults and adolescents struggling with mental health challenges.',
    education: [
      'Doctor of Medicine - Johns Hopkins University',
      'Residency in Psychiatry - Massachusetts General Hospital',
      'Child & Adolescent Psychiatry Fellowship - Yale University'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'Board Certified in Child & Adolescent Psychiatry',
      'TMS Therapy Certified'
    ],
    experience: '12+ years in psychiatric practice with focus on treatment-resistant conditions',
    approach: 'Dr. Chen emphasizes a holistic approach to mental health, combining evidence-based treatments with understanding of each patient\'s cultural background and personal experiences. She is fluent in Mandarin Chinese and English.'
  },
  {
    id: '3',
    slug: 'dr-waseem-vaidya',
    name: 'Dr. Waseem Vaidya',
    title: 'Psychiatrist',
    credentials: 'MD',
    role: 'TMS Specialist & Researcher',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFdhc2VlbSUyMFZhaWR5YSUyQyUyMGElMjBwc3ljaGlhdHJpc3QlMjBhbmQlMjBUTVMlMjBzcGVjaWFsaXN0LnxlbnwwfHx8fDE3NTk5MDAzNzl8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['TMS Research', 'Treatment-Resistant Depression', 'PTSD', 'Bipolar Disorder'],
    bio: 'Dr. Waseem Vaidya is a distinguished psychiatrist and researcher who has contributed significantly to the field of neuromodulation. His work in TMS therapy has been published in leading psychiatric journals, and he brings this expertise to every patient interaction at Karma TMS.',
    education: [
      'Doctor of Medicine - University of Pennsylvania',
      'Residency in Psychiatry - Mount Sinai Hospital',
      'Research Fellowship in Neuromodulation - NIMH'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'Advanced TMS Practitioner',
      'Clinical Research Certification'
    ],
    experience: '18+ years in psychiatry with extensive research background',
    approach: 'Dr. Vaidya integrates the latest research findings with clinical practice to provide cutting-edge treatment options. He is committed to advancing the field while ensuring each patient receives personalized, evidence-based care.'
  },
  {
    id: '4',
    slug: 'dr-jack-yong-zhang',
    name: 'Dr. Jack Yong Zhang',
    title: 'Osteopathic Psychiatrist',
    credentials: 'DO',
    role: 'Integrative Psychiatrist',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1700954343841-2134b33d569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEphY2slMjBZb25nJTIwWmhhbmclMkMlMjBhbiUyMG9zdGVvcGF0aGljJTIwcHN5Y2hpYXRyaXN0JTJDJTIwaW4lMjBhJTIwZm9ybWFsJTIwc2V0dGluZy58ZW58MHx8fHwxNzU5OTAwMzc3fDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['Integrative Psychiatry', 'Anxiety Disorders', 'Depression', 'Holistic Treatment'],
    bio: 'Dr. Jack Yong Zhang brings a unique integrative approach to psychiatric care, combining traditional psychiatric treatments with holistic wellness principles. As an osteopathic physician, Dr. Zhang understands the connection between mind and body, offering comprehensive care that addresses all aspects of mental health.',
    education: [
      'Doctor of Osteopathic Medicine - Western University of Health Sciences',
      'Residency in Psychiatry - UCLA Medical Center',
      'Integrative Medicine Training - University of Arizona'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'Osteopathic Manipulative Treatment Certification',
      'TMS Therapy Certified'
    ],
    experience: '10+ years in integrative psychiatric practice',
    approach: 'Dr. Zhang believes in treating the whole person, not just symptoms. He incorporates lifestyle modifications, stress management techniques, and advanced treatments like TMS to help patients achieve lasting wellness.'
  },
  {
    id: '5',
    slug: 'dr-todd',
    name: 'Dr. Todd',
    title: 'Psychiatrist',
    credentials: 'MD',
    role: 'General Psychiatrist',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1748288166888-f1bd5d6ef9ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFRvZGQlMkMlMjBhJTIwcHN5Y2hpYXRyaXN0JTJDJTIwd2l0aCUyMGElMjBuZXV0cmFsJTIwYmFja2dyb3VuZC58ZW58MHx8fHwxNzU5OTAwMzc0fDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['General Psychiatry', 'Medication Management', 'Depression', 'Anxiety'],
    bio: 'Dr. Todd is an experienced psychiatrist who has been providing compassionate mental health care in the Coachella Valley for over a decade. Known for his patient-centered approach and excellent listening skills, Dr. Todd helps patients navigate their mental health journey with understanding and expertise.',
    education: [
      'Doctor of Medicine - University of Southern California',
      'Residency in Psychiatry - UC San Diego Medical Center'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'TMS Therapy Certified',
      'Advanced Psychopharmacology Training'
    ],
    experience: '14+ years in psychiatric practice',
    approach: 'Dr. Todd focuses on building strong therapeutic relationships with his patients, believing that trust and open communication are essential to successful treatment outcomes.'
  },
  {
    id: '6',
    slug: 'dr-anjali-krishna',
    name: 'Dr. Anjali Krishna',
    title: 'Psychiatrist',
    credentials: 'MD',
    role: 'Women\'s Mental Health Specialist',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1727912729163-81618ffd36ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEFuamFsaSUyMEtyaXNobmElMkMlMjBhJTIwcHN5Y2hpYXRyaXN0JTIwc3BlY2lhbGl6aW5nJTIwaW4lMjB3b21lbiUyN3MlMjBtZW50YWwlMjBoZWFsdGgufGVufDB8fHx8MTc1OTkwMDM3OHww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['Women\'s Mental Health', 'Perinatal Psychiatry', 'Mood Disorders', 'Hormone-Related Mood Changes'],
    bio: 'Dr. Anjali Krishna specializes in women\'s mental health, with particular expertise in perinatal psychiatry and hormone-related mood disorders. She provides compassionate care for women experiencing depression, anxiety, and mood changes during various life stages including pregnancy, postpartum, and menopause.',
    education: [
      'Doctor of Medicine - Columbia University',
      'Residency in Psychiatry - New York-Presbyterian Hospital',
      'Fellowship in Women\'s Mental Health - Northwestern University'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'Women\'s Mental Health Specialist',
      'TMS Therapy Certified'
    ],
    experience: '11+ years specializing in women\'s mental health',
    approach: 'Dr. Krishna provides gender-specific care that acknowledges the unique biological, psychological, and social factors affecting women\'s mental health. She offers safe, effective treatments tailored to each woman\'s needs.'
  },
  {
    id: '7',
    slug: 'dr-joshua-smith',
    name: 'Dr. Joshua Smith',
    title: 'Psychiatrist',
    credentials: 'MD',
    role: 'Addiction & Dual Diagnosis Specialist',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1748288166888-f1bd5d6ef9ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEpvc2h1YSUyMFNtaXRoJTJDJTIwYSUyMHBzeWNoaWF0cmlzdCUyMHNwZWNpYWxpemluZyUyMGluJTIwYWRkaWN0aW9uJTIwYW5kJTIwZHVhbCUyMGRpYWdub3Npcy58ZW58MHx8fHwxNzU5OTAwMzgyfDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['Addiction Psychiatry', 'Dual Diagnosis', 'PTSD', 'Substance Use Disorders'],
    bio: 'Dr. Joshua Smith is a board-certified addiction psychiatrist with extensive experience treating patients with co-occurring mental health and substance use disorders. His compassionate, non-judgmental approach helps patients overcome addiction while addressing underlying mental health conditions.',
    education: [
      'Doctor of Medicine - Duke University',
      'Residency in Psychiatry - University of California, San Francisco',
      'Fellowship in Addiction Psychiatry - McLean Hospital'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'Board Certified in Addiction Psychiatry',
      'ASAM Certified Addiction Specialist'
    ],
    experience: '13+ years in addiction psychiatry',
    approach: 'Dr. Smith uses a comprehensive approach that addresses both addiction and mental health simultaneously, recognizing that lasting recovery requires treating the whole person.'
  },
  {
    id: '8',
    slug: 'dr-punit-patel',
    name: 'Dr. Punit Patel',
    title: 'Physician Assistant',
    credentials: 'PA-C',
    role: 'Psychiatric Physician Assistant',
    category: 'provider',
    image: 'https://images.unsplash.com/photo-1748288166888-f1bd5d6ef9ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFB1bml0JTIwUGF0ZWwlMkMlMjBhJTIwUHN5Y2hpYXRyaWMlMjBQaHlzaWNpYW4lMjBBc3Npc3RhbnQufGVufDB8fHx8MTc1OTkwMDM4MXww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['Medication Management', 'Depression', 'Anxiety', 'Follow-up Care'],
    bio: 'Punit Patel is a certified Physician Assistant specializing in psychiatric care. With a warm, approachable manner, Punit provides comprehensive medication management and ongoing support for patients dealing with depression, anxiety, and other mental health conditions.',
    education: [
      'Master of Physician Assistant Studies - University of Southern California',
      'Bachelor of Science in Biology - UCLA',
      'Psychiatric Medicine Training - Stanford Healthcare'
    ],
    certifications: [
      'National Commission on Certification of Physician Assistants',
      'Psychiatric Medicine Specialty Certification',
      'TMS Therapy Trained'
    ],
    experience: '8+ years in psychiatric medicine',
    approach: 'Punit emphasizes patient education and collaborative care, ensuring patients understand their treatment options and feel empowered in their mental health journey.'
  },
  {
    id: '9',
    slug: 'dr-rachel-mcduffie',
    name: 'Dr. Rachel McDuffie',
    title: 'Physician Assistant',
    credentials: 'PA-C',
    role: 'Psychiatric Physician Assistant',
    category: 'provider',
    image: 'https://images.unsplash.com/photo-1748288166888-f1bd5d6ef9ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFJhY2hlbCUyME1jRHVmZmllJTJDJTIwYSUyMFBzeWNoaWF0cmljJTIwUGh5c2ljaWFuJTIwQXNzaXN0YW50LnxlbnwwfHx8fDE3NTk5MDAzODR8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['Mood Disorders', 'Anxiety Management', 'TMS Support', 'Patient Education'],
    bio: 'Rachel McDuffie is a dedicated Physician Assistant with specialized training in psychiatric care and TMS therapy support. She works closely with patients throughout their treatment journey, providing medication management, monitoring, and compassionate support.',
    education: [
      'Master of Physician Assistant Studies - Loma Linda University',
      'Bachelor of Science in Health Sciences - San Diego State University',
      'Advanced Psychiatric Training - Mayo Clinic'
    ],
    certifications: [
      'National Commission on Certification of Physician Assistants',
      'Psychiatric Care Specialty Certification',
      'TMS Clinical Coordinator Training'
    ],
    experience: '9+ years in psychiatric healthcare',
    approach: 'Rachel focuses on creating a supportive, judgment-free environment where patients feel comfortable discussing their mental health concerns and actively participating in their treatment plan.'
  },
  {
    id: '10',
    slug: 'dr-jothsna-bodhanapati',
    name: 'Dr. Jothsna Bodhanapati',
    title: 'Psychiatrist',
    credentials: 'MD',
    role: 'Geriatric Psychiatrist',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1590905707155-17c680dd7867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEpvdGhzbmElMjBCb2RoYW5hcGF0aSUyQyUyMGElMjBnZXJpYXRyaWMlMjBwc3ljaGlhdHJpc3QufGVufDB8fHx8MTc1OTkwMDM4NXww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['Geriatric Psychiatry', 'Cognitive Disorders', 'Late-Life Depression', 'Memory Care'],
    bio: 'Dr. Jothsna Bodhanapati specializes in geriatric psychiatry, providing expert care for older adults experiencing depression, anxiety, cognitive changes, and other mental health concerns. With deep understanding of the unique challenges facing seniors, Dr. Bodhanapati offers compassionate, age-appropriate treatment.',
    education: [
      'Doctor of Medicine - Medical College of Wisconsin',
      'Residency in Psychiatry - University of Michigan',
      'Fellowship in Geriatric Psychiatry - Johns Hopkins'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'Board Certified in Geriatric Psychiatry',
      'Cognitive Assessment Specialist'
    ],
    experience: '16+ years specializing in geriatric mental health',
    approach: 'Dr. Bodhanapati takes a gentle, patient-centered approach that respects the dignity and autonomy of older adults while addressing the complex interplay of medical and psychiatric conditions common in this population.'
  },
  {
    id: '11',
    slug: 'dr-charles-vigilia',
    name: 'Dr. Charles Vigilia',
    title: 'Psychiatrist',
    credentials: 'MD',
    role: 'Forensic & Emergency Psychiatrist',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1585930238664-01cc82685bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMENoYXJsZXMlMjBWaWdpbGlhJTJDJTIwYSUyMHBzeWNoaWF0cmlzdCUyMHNwZWNpYWxpemluZyUyMGluJTIwZm9yZW5zaWMlMjBhbmQlMjBlbWVyZ2VuY3klMjBwc3ljaGlhdHJ5LnxlbnwwfHx8fDE3NTk5MDAzODZ8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['Crisis Intervention', 'Trauma-Informed Care', 'Acute Psychiatric Care', 'Risk Assessment'],
    bio: 'Dr. Charles Vigilia brings extensive experience in emergency and forensic psychiatry to Karma TMS. His expertise in crisis intervention and trauma-informed care makes him an invaluable resource for patients experiencing acute psychiatric challenges or those who have experienced trauma.',
    education: [
      'Doctor of Medicine - University of Miami',
      'Residency in Psychiatry - Bellevue Hospital Center',
      'Fellowship in Forensic Psychiatry - Columbia University'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'Board Certified in Forensic Psychiatry',
      'Crisis Intervention Training'
    ],
    experience: '20+ years in psychiatric practice including emergency and forensic settings',
    approach: 'Dr. Vigilia combines clinical expertise with a trauma-informed approach, ensuring patients feel safe and supported while receiving the comprehensive care they need.'
  },
  {
    id: '12',
    slug: 'dr-alexandra-mendoza',
    name: 'Dr. Alexandra Mendoza',
    title: 'Psychiatrist',
    credentials: 'MD',
    role: 'Bilingual Psychiatrist',
    category: 'doctor',
    image: 'https://images.unsplash.com/photo-1678940807055-d46f1dac7cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEFsZXhhbmRyYSUyME1lbmRvemElMkMlMjBhJTIwYmlsaW5ndWFsJTIwcHN5Y2hpYXRyaXN0LnxlbnwwfHx8fDE3NTk5MDAzODh8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    specialties: ['Bilingual Psychiatry', 'Cultural Psychiatry', 'Depression', 'Anxiety'],
    bio: 'Dr. Alexandra Mendoza is a bilingual psychiatrist fluent in English and Spanish, providing culturally sensitive mental health care to diverse communities. She is passionate about breaking down language and cultural barriers to ensure all patients receive excellent psychiatric care.',
    education: [
      'Doctor of Medicine - University of Texas Southwestern',
      'Residency in Psychiatry - Baylor College of Medicine',
      'Cultural Psychiatry Training - Harvard Medical School'
    ],
    certifications: [
      'Board Certified in Psychiatry',
      'Cultural Competency Certification',
      'TMS Therapy Certified'
    ],
    experience: '10+ years providing bilingual psychiatric services',
    approach: 'Dr. Mendoza provides care that honors each patient\'s cultural background and language preferences, recognizing that effective treatment must be culturally informed and personally relevant.'
  }
];

export const getTeamMemberBySlug = (slug: string): TeamMember | undefined => {
  return teamMembers.find(member => member.slug === slug);
};

export const getTeamMembersByCategory = (category: 'doctor' | 'staff' | 'provider') => {
  return teamMembers.filter(member => member.category === category);
};
