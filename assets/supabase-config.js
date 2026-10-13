// Supabase public client configuration
// The publishable key is intentionally left blank until you provide it.
const SUPABASE_URL = "https://vhnawmbgefijavheynul.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_jP_YNL46mCD_7F9oKj4Kiw_aWRvpjnB";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
