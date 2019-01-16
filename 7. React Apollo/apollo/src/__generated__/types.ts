/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPerson
// ====================================================

export interface GetPerson_person {
  __typename: "Person";
  /**
   * The ID of the object.
   */
  id: string;
  dbId: string;
  firstname: string | null;
  middlename: string | null;
  lastname: string;
  type: string | null;
  lastMeetingDate: any | null;
}

export interface GetPerson {
  person: GetPerson_person | null;
}

export interface GetPersonVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPersonProvider
// ====================================================

export interface GetPersonProvider_personProvider_person_specialties_edges_node_specialty {
  __typename: "Specialty";
  name: string | null;
}

export interface GetPersonProvider_personProvider_person_specialties_edges_node {
  __typename: "PersonSpecialty";
  specialty: GetPersonProvider_personProvider_person_specialties_edges_node_specialty | null;
}

export interface GetPersonProvider_personProvider_person_specialties_edges {
  __typename: "PersonSpecialtyEdge";
  /**
   * The item at the end of the edge
   */
  node: GetPersonProvider_personProvider_person_specialties_edges_node | null;
}

export interface GetPersonProvider_personProvider_person_specialties {
  __typename: "PersonSpecialtyConnection";
  edges: (GetPersonProvider_personProvider_person_specialties_edges | null)[];
}

export interface GetPersonProvider_personProvider_person_contact_edges_node {
  __typename: "Contact";
  contact: string | null;
  type: string | null;
  category: string | null;
}

export interface GetPersonProvider_personProvider_person_contact_edges {
  __typename: "ContactEdge";
  /**
   * The item at the end of the edge
   */
  node: GetPersonProvider_personProvider_person_contact_edges_node | null;
}

export interface GetPersonProvider_personProvider_person_contact {
  __typename: "ContactConnection";
  edges: (GetPersonProvider_personProvider_person_contact_edges | null)[];
}

export interface GetPersonProvider_personProvider_person {
  __typename: "Person";
  firstname: string | null;
  middlename: string | null;
  lastname: string;
  lastMeetingDate: any | null;
  dbId: string;
  specialties: GetPersonProvider_personProvider_person_specialties | null;
  contact: GetPersonProvider_personProvider_person_contact | null;
}

export interface GetPersonProvider_personProvider {
  __typename: "PersonProvider";
  jobtitle: string | null;
  personId: string;
  npi: string | null;
  person: GetPersonProvider_personProvider_person | null;
}

export interface GetPersonProvider {
  personProvider: GetPersonProvider_personProvider | null;
}

export interface GetPersonProviderVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
