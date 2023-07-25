import { createClient } from '@supabase/supabase-js';

export const supabase = createClient("https://kgspanymmzkkskgkhvax.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnc3BhbnltbXpra3NrZ2todmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMTMwODQsImV4cCI6MjAwNTc4OTA4NH0.NNNMRtEa2TU2EMhv1DlgsXVFsipsbVwFIJuDoBtbfuU");