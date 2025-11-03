
export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export const educationData: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    startDate: "Aug 2014",
    endDate: "May 2016",
    gpa: "3.8/4.0",
    achievements: [
      "Specialization in Artificial Intelligence",
      "Research Assistant in Natural Language Processing Lab",
      "Published paper on 'Applying Neural Networks to Code Generation'"
    ]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of Washington",
    location: "Seattle, WA",
    startDate: "Sep 2010",
    endDate: "Jun 2014",
    gpa: "3.7/4.0",
    achievements: [
      "Dean's List (7 semesters)",
      "President of Web Development Club",
      "Senior Project: Real-time Collaboration Platform"
    ]
  }
];
