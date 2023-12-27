export interface ReportsTypes {
  id: number;
  user_id: number;
  pollution_type: string;
  location: string;
  latitude: string;
  longitude: string;
  photo: string;
  additional_details: string;
  is_anonymous: 1;
  is_resolved: 0;
  created_at: string;
  updated_at: string;
  priority: string;
  municipality: string;
  inspector_id: number | null;
  assignment_date: string;
}

export interface InspectorData {
  data: InspectorTypes[];
}

export interface InspectorTypes {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
}
