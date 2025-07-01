interface MockUser {
  id: string;
  email: string;
  password: string; // In production, this would be a hashed password
  name: string;
}

const mockUsers: MockUser[] = [
  // Existing mock users (if any, or start empty)
//   { id: "1", email: "user1@example.com", password: "password123", name: "User One" },
];

// This function handles POST requests to /api/signup
export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json(); // Parse the request body

    if (!email || !password || !name) {
      return new Response(JSON.stringify({ error: 'ឈ្មោះអ្នកប្រើប្រាស់ អ៊ីមែល និងពាក្យសម្ងាត់ត្រូវបានទាមទារ។' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if user already exists
    const userExists = mockUsers.some(user => user.email === email);
    if (userExists) {
      return new Response(JSON.stringify({ error: 'គណនីនេះមានរួចហើយ។' }), {
        status: 409, // Conflict
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate a simple mock ID (in a real app, use UUIDs or database IDs)
    const newId = (mockUsers.length + 1).toString();
    const newUser: MockUser = { id: newId, email, password, name };
    mockUsers.push(newUser); // Add new user to our mock database
    console.log('New mock user registered:', newUser);

    return new Response(JSON.stringify({ message: 'អ្នកប្រើប្រាស់បានចុះឈ្មោះដោយជោគជ័យ។' }), {
      status: 201, // Created
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in /api/signup:', error);
    return new Response(JSON.stringify({ error: 'មានបញ្ហា server ផ្ទៃក្នុង។' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// You can also add other HTTP methods if needed, e.g., GET
// export async function GET(req: Request) {
//   return new Response(JSON.stringify({ message: 'GET request to signup API' }), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }