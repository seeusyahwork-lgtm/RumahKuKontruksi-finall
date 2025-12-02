// src/lib/supabaseClient.js
import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// Jika butuh service role pada server (lebih powerfull, berbahaya jika bocor):
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Gunakan ANON key untuk operasi yang aman dan dikontrol RLS (client / server).
 * Gunakan SERVICE_ROLE_KEY hanya untuk operasi server tertentu (misal cron, admin tasks).
 */
const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY,
  {
    // options: passthrough fetch jika diperlukan
    // fetch: global.fetch, // Node18+ sudah ada
    // Anda bisa menambahkan dukungan timeout, dsb di sini.
  }
);

export default supabase;
