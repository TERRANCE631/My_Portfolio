export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expires?: string;
  credentialId?: string;
  credentialURL?: string;
}

export const certificationsData: Certification[] = [
  {
    name: "React js masterclass: Zero to job ready with 10 projects",
    issuer: "Udemy",
    date: "Dec 2024",
    credentialId: "UC-2cf504c3-448c-41ed-be63-36672f4d3848",
    credentialURL: "https://ude.my/UC-2cf504c3-448c-41ed-be63-36672f4d3848",
  },
];
