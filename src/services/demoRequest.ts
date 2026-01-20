import { REQUEST_DEMO_MUTATION } from "@/gql/mutations/requestDemo";
import type { DemoRequestFormValues } from "@/types/demoRequest";
import { gqlRequest } from "./gqlClient";
import { API_URL } from "@/configs";

type WebOperationResponse = {
  WebOperation: {
    success: boolean;
    message?: string;
    id?: string;
  };
};

export async function submitDemoRequest(values: DemoRequestFormValues) {
  const requestDemoInput = {
    challenge: values.biggestChallenge,
    preferred_date: values.preferredDate, // already formatted yyyy-MM-dd
    school: {
      name: values.schoolName,
      no_of_pupils: values.numberOfStudents,
      description: values.schoolType,
    },
    contact_person: {
      full_name: values.fullName,
      role: values.role,
      work_email: values.email,
      phone: values.phone,
    },
    address: {
      line1: values.address.line1,
      line2: values.address.line2,
      suburb: values.address.suburb,
      city: values.address.city,
      province: values.address.province,
      postal_code: values.address.postal_code,
      country: values.address.country,
    },
  };

  // Optional headers (if you use these later)
  const headers: Record<string, string> = {};
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (apiKey) headers["x-api-key"] = apiKey;

  return gqlRequest<WebOperationResponse>({
    url: API_URL,
    query: REQUEST_DEMO_MUTATION,
    variables: { requestDemoInput },
    headers,
  });
}
